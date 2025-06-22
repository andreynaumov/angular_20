export type CommonForm = {
  readonly credit: {
    readonly amount: number | null;
    readonly term: string | null;
    readonly city: string | null;
  };
  readonly contactData: {
    readonly firstName: string | null;
    readonly lastName: string | null;
    readonly middleName: string | null;
    readonly birthDate: string | null;
    readonly email: string | null;
    readonly phone: string | null;
  };
};
