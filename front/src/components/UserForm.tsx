import { Button, Grid, TextField, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import * as Yup from 'yup';

import { AddressField } from './AddressField';
import { AvatarUpload } from './ImageUpload';
import { UserInfo } from '../types/user';
import { isValidAge, isValidString } from '../utils/form';

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

const validateAddress = {
  city: Yup.string().when('zip_code', {
    is: isValidString,
    then: (schema) =>
      schema.required('É obrigatório informar o nome da cidade'),
  }),
  complement: Yup.string().nullable(),
  district: Yup.string().when('zip_code', {
    is: isValidString,
    then: (schema) => schema.required('É obrigatório informar o bairro'),
  }),
  number: Yup.string().when('zip_code', {
    is: isValidString,
    then: (schema) => schema.required('É obrigatório informar um número'),
  }),
  state: Yup.string().when('zip_code', {
    is: isValidString,
    then: (schema) => schema.required('É obrigatório informar o estado'),
  }),
  street_address: Yup.string().when('zip_code', {
    is: isValidString,
    then: (schema) => schema.required('É obrigatório informar uma rua'),
  }),
  zip_code: Yup.string()
    .length(8, 'CEP deve ter apenas 8 dígitos')
    .nullable(),
};

export const userFormSchema = Yup.object({
  name: Yup.string().max(255).required(),
  age: Yup.string().matches(/^\d*[1-9]\d*$/, 'idade invalida').required(),
  address: Yup.object(validateAddress),
  biography: Yup.string()
});

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
                label={'Nome*'}
                placeholder={'nome'}
                error={!!error?.message}
                helperText={field.value === '' ? "*Informe o nome " : error?.message}
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
                type='number'
                label={'Idade*'}
                placeholder={'idade'}
                error={!!error?.message}
                helperText={field.value === '' ? "*Informe a idade " : error?.message}
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
