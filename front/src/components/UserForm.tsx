import { Button, Grid, TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { AddressField } from './AddressField';
import { createUser } from '../services/user';
import { useState } from 'react';
import { AvatarUpload } from './ImageUpload';
import { uploadImage } from '../services/profileImage';
import { createAddress } from '../services/address';

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
  age: string;
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
  const [image, setImage] = useState<File | null>(null);
  const { control, handleSubmit } = useFormContext<UserFormValues>();
  
  const handleSubmitForm = async (formValues: UserFormValues) => {
    const { name, age, biography, address } = formValues;

    const profile_name = image ? await uploadImage(image) : '';
    const user = await createUser({ name, age: parseInt(age), biography, profile_name });

    if (address) {
      await createAddress({ ...address, userId: user.id });
    }

  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
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
                type="number"
                fullWidth
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Typography> Imagem Perfil</Typography>
          <AvatarUpload image={image} setImage={setImage} />
        </Grid>

        <Grid item xs={6}>
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
                minRows={4}
                fullWidth
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <AddressField />
        </Grid>
      </Grid>
      <Button type="submit"> Salvar</Button>
    </form>
  );
};
