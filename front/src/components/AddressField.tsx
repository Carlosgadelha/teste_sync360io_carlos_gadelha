import { Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { PostalCode, getPostalCodeInfo } from '../services/viaCep';

export type AddressFieldValues = {
  address: {
    city: string;
    complement?: string;
    district: string;
    number: string;
    state: string;
    street_address: string;
    zip_code: string;
  };
};

export const AddressField = () => {
  const [postalCodeInfo, setPostalCodeInfo] = useState<PostalCode | null>(null);
  const [errorZipCode, setErrorZipCode] = useState<boolean>(false);
  const { control, watch, setValue } = useFormContext<AddressFieldValues>();
  const zip_code = watch('address.zip_code');

  const handleGetZipCode = async () => {
    try {
      const response = await getPostalCodeInfo(zip_code);

      if ('cep' in response) {
        setPostalCodeInfo(response);
        setErrorZipCode(false);
      } else {
        setPostalCodeInfo(null);
        setErrorZipCode(true);
      }
    } catch (err) {
      console.error(err);
      setErrorZipCode(true);
    }
  };

  useEffect(() => {
    if(zip_code) handleGetZipCode();
  }, [zip_code]);

  useEffect(() => {
    if (postalCodeInfo) {
      setValue('address.city', postalCodeInfo.localidade);
      setValue('address.district', postalCodeInfo.bairro);
      setValue('address.state', postalCodeInfo.uf);
      setValue('address.street_address', postalCodeInfo.logradouro);
    }
  }, [postalCodeInfo]);

  useEffect(() => {
    if (errorZipCode) {
      setValue('address.city', "");
      setValue('address.district', "");
      setValue('address.state', "");
      setValue('address.street_address', "");
    }
  }, [errorZipCode]);

  return (
    <>
      <Typography marginY={2} fontWeight="bold">
        {' '}
        Endereço
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Controller
            name="address.zip_code"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                name="name"
                label={'Cep'}
                placeholder={'nome'}
                error={!!error?.message || errorZipCode}
                helperText={error?.message || (errorZipCode && 'CEP inválido')}
                fullWidth
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="address.street_address"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                name="street_address"
                label={'Rua'}
                placeholder={'rua'}
                error={!!error?.message}
                fullWidth
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <Controller
            name="address.number"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                name="street_address"
                label={'Numero'}
                placeholder={'numero'}
                error={!!error?.message}
                fullWidth
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="address.district"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                name="address.district"
                label={'Bairro'}
                placeholder={'bairro'}
                error={!!error?.message}
                fullWidth
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="address.city"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                name="address.city"
                label={'Cidade'}
                placeholder={'cidade'}
                error={!!error?.message}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="address.state"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                name="address.state"
                label={'Estado'}
                placeholder={'cidade'}
                error={!!error?.message}
                fullWidth
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="address.complement"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                name="address.complement"
                label={'Complemento'}
                placeholder={'complemento'}
                error={!!error?.message}
                fullWidth
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
