import { Button, Grid, TextField, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { AddressField } from './AddressField';
import { AvatarUpload } from './ImageUpload';
import { UserInfo } from '../types/user';

export type UserFormValues = {
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
  age: '',
  biography: '',
};

type UserFormProps = {
  userInfo: UserInfo | null;
  handleSubmitForm: (formValues: UserFormValues) => void;
  image: File | null;
  setImage: Dispatch<SetStateAction<File | null>>;
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
};

export const UserForm = ({ userInfo, handleSubmitForm, image, setImage, imageUrl, setImageUrl }: UserFormProps) => {
  const { control, handleSubmit, setValue } = useFormContext<UserFormValues>();

  useEffect(() => {
    if (userInfo) {
      setValue('name', userInfo.name);
      setValue('age', userInfo.age);
      setValue('biography', userInfo.biography);
      setImageUrl(userInfo.profile_name);

      if (userInfo.address) {
        setValue('address.city', userInfo.address.city);
        setValue('address.district', userInfo.address.district);
        setValue('address.state', userInfo.address.state);
        setValue('address.street_address', userInfo.address.street_address);
        setValue('address.zip_code', userInfo.address.zip_code);
        setValue('address.number', userInfo.address.number);
        setValue('address.complement', userInfo.address.complement);
      }
    }
  }, [userInfo]);

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
                fullWidth
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography> Imagem Perfil</Typography>
          <AvatarUpload image={image} setImage={setImage} imageUrl={imageUrl} setImageUrl={setImageUrl} />
        </Grid>

        <Grid item xs={12} md={6}>
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

        <Grid item xs={12} marginBottom={2} display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained">
            {userInfo ? 'Atualizar' : 'Salvar'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
