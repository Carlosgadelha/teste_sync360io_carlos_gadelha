import { Address } from "@prisma/client";

export type AddressData = Address
export type CreateAddressData = Omit<Address, "id"|"createdAt"|"updatedAt">;
export type UpdateAddressData = Omit<Address, "createdAt"|"updatedAt">;