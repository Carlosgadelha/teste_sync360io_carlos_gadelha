import { Grid, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { AddressField } from './AddressField';

type UserFormValues = {
  name: string;
  address: {
    city: string;
    complement: string;
    district: string;
    number: string;
    state: string;
    street_address: string;
    zip_code: string;
  };
  age: number;
  biography: string;
};

export const defaultFormValues = {
  name: '',
  address: {
    city: '',
    complement: '',
    district: '',
    number: '',
    state: '',
    street_address: '',
    zip_code: '',
  },
  age: null,
  biography: '',
};

export const UserForm = () => {
  const { control } = useFormContext<UserFormValues>();
  return (
    <form onSubmit={() => alert('')}>
      <Grid container spacing={2} width="100%">
        <Grid item xs={12} md={6}>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                name="name"
                label={'Nome'}
                placeholder={'nome'}
                error={!!error?.message}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="age"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                name="age"
                label={'Idade'}
                placeholder={'idade'}
                error={!!error?.message}
                fullWidth
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="biography"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                name="biography"
                label={'Biografia'}
                placeholder={'biografia'}
                error={!!error?.message}
                multiline
                fullWidth
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <AddressField />
        </Grid>
      </Grid>
    </form>
  );
};
