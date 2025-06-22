import { DependencyType, SelectOption } from '../../components/form-builder/shared/types/form-config';
import { FormSchema } from '../../components/form-builder/shared/types/form-schema';

export const formSchema = ({ options }: { options: Record<string, SelectOption<unknown>[]> }): FormSchema => [
  {
    name: 'bio',
    type: 'object',
    config: {
      label: 'BIO',
      expressions: {
        valueChanges: ({ form, currentControlValue }) => {
          // console.log('form: ', form);
          // console.log('controlValue: ', controlValue);
        },
      },
    },
    schema: [
      {
        name: 'firstName',
        type: 'string',
        config: {
          label: 'First Name',
          dependencies: [
            {
              type: DependencyType.Disabled,
              sourceField: 'maritalStatus',
              when: ({ sourceControlValue }) => {
                return sourceControlValue === 'single';
              },
            },
          ],
        },
      },
      {
        name: 'lastName',
        type: 'string',
        config: {
          label: 'Last Name',
          dependencies: [
            {
              type: DependencyType.Readonly,
              sourceField: 'maritalStatus',
              when: ({ sourceControlValue }) => {
                return sourceControlValue === 'single';
              },
            },
          ],
        },
      },
      {
        name: 'birthDate',
        type: 'date',
        config: {
          label: 'Birth Date',
        },
      },
    ],
  },
  {
    name: 'siblings',
    type: 'array',
    config: {
      label: 'Siblings',
    },
    schema: [
      {
        name: 'name',
        type: 'string',
        config: {
          label: 'Name',
        },
      },
      {
        name: 'relationship',
        type: 'select',
        config: {
          label: 'Birth Date',
          options: options['relationship'],
          expressions: {
            valueChanges: ({ form, currentControlValue }) => {
              // console.log('form: ', form);
              // console.log('controlValue: ', controlValue);
            },
          },
        },
      },
    ],
  },
  {
    name: 'hasChildren',
    type: 'checkbox',
    config: {
      label: 'Has children',
      dependencies: [
        {
          type: DependencyType.Hide,
          sourceField: 'maritalStatus',
          when: ({ sourceControlValue }) => {
            return sourceControlValue === 'single';
          },
        },
      ],
    },
  },
  {
    name: 'maritalStatus',
    type: 'select',
    config: {
      label: 'Marital status',
      options: options['maritalStatus'],
      expressions: {
        valueChanges: ({ form, currentControlValue }) => {
          // console.log('form: ', form);
          // console.log('controlValue: ', controlValue);
        },
      },
    },
  },
  {
    name: 'fullAddress',
    type: 'select',
    config: {
      label: 'Full Address',
      options: options['fullAddress'],
      expressions: {
        valueChanges: ({ form, currentControlValue }) => {
          // console.log('form: ', form);
          // console.log('controlValue: ', controlValue);
        },
      },
    },
  },
];
