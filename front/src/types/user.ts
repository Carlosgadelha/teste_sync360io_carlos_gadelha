export type User = {
  name: string;
  age: number;
  biography: string;
  profile_name: string;
};

export type UserInfo = {
  id: string;
  name: string;
  age: string;
  profile_name: string;
  biography: string;
  address: {
    id: string;
    zip_code: string;
    street_address: string;
    number: string;
    district: string;
    city: string;
    state: string;
    complement: string;
  };
};

export type UserUpdateInfo = {
  id: string;
  name: string;
  age: number;
  biography: string;
  profile_name: string;
};
