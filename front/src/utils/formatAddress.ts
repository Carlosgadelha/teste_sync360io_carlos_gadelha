import { Address } from '../types/address';

export const formatAddress = (address: Address | null) => {
  if (address === null) return '';
  const zip_code = `${address?.zip_code.substring(0, 5)}-${address?.zip_code.substring(5, 8)} `;
  return `${address.street_address}, ${address.number} - ${address.district}, ${address.city} - ${address.state}, ${zip_code}`.trim();
};
