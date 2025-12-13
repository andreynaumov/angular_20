import { distinctUntilChanged, startWith, Subscription } from 'rxjs';
import { ControlSchema } from './control-schema';
import { effect, untracked } from '@angular/core';

export class Dependency<R> {
  #subscription: Subscription | null = null;

  constructor(
    private readonly sourceControlSchema: ControlSchema<R>,
    private readonly dependencyEffectFn: (value: R) => void,
  ) {
    effect(() => {
      if (sourceControlSchema.value().isHide()) {
        this.unsubscribe();
      } else {
        this.subscribe();
      }
    });
  }

  subscribe(): void {
    const { control } = this.sourceControlSchema.value();

    this.#subscription?.unsubscribe();
    this.#subscription = control.valueChanges.pipe(startWith(control.value), distinctUntilChanged()).subscribe((value) => {
      untracked(() => this.dependencyEffectFn(value));
    });
  }

  unsubscribe(): void {
    if (this.#subscription) {
      this.#subscription.unsubscribe();
      this.#subscription = null;
    }
  }

  runOnce(): void {
    this.dependencyEffectFn(this.sourceControlSchema.value().control.value);
  }
}
