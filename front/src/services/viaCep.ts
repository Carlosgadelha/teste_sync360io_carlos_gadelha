import axios from 'axios';

export type PostalCode = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export type PostalCodeErrorResponse = { erro: boolean };

export const getPostalCodeInfo = (
  cep: string | number
): Promise<PostalCode | PostalCodeErrorResponse> => {
  return axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.data);
};