import { useEffect, useState } from 'react';
import { Box, Chip, Divider } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import { Item } from './components/Item';
import { BoxInfo } from './components/BoxInfo';
import { ProfileImage } from './components/ProfileImage';
import { UserForm, UserFormValues, defaultFormValues } from './components/UserForm';
import { createUser, getUser, updateUserInfo } from './services/user';
import { UserInfo } from './types/user';
import { createAddress, updateAddress } from './services/address';
import { uploadImage } from './services/profileImage';

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const userForm = useForm({
    defaultValues: defaultFormValues,
  });

  const handleSubmitForm = async (formValues: UserFormValues) => {
    const { name, age, biography, address } = formValues;

    const profile_name = image ? await uploadImage(image) : '';
    const user = await createUser({ name, age: parseInt(age), biography, profile_name });

    if (address) {
      await createAddress({ ...address, userId: user.id });
    }
  };

  const handleEditSubmitForm = async (formValues: UserFormValues) => {
    const { name, age, biography, address } = formValues;
    const id = userInfo?.id;
    const addressId = userInfo?.address.id;

    if (id) {
      const profile_name = image ? await uploadImage(image) : userInfo?.profile_name;
      await updateUserInfo({ id, name, age: parseInt(age), biography, profile_name });

      if (address && addressId) {
        await updateAddress({ ...address, id: addressId, userId: parseInt(id) });
      }

      handleGetUserInfo();
    }
  };

  const handleGetUserInfo = async () => {
    const user = await getUser(1);
    if (user) setUserInfo(user);
  };

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  return (
    <Box height="100vh" display="flex" flexDirection="column" padding={3} alignItems="center">
      <ProfileImage src={`${import.meta.env.VITE_BASE_URL}/profileImage/${userInfo?.profile_name}`} />
      <BoxInfo>
        <Item title="Nome" text={userInfo?.name || ''} />
        <Item title="Endereco" text={''} />
        <Item title="Idade" text={userInfo?.age || ''} />
        <Item title="Biografia" text={userInfo?.biography || ''} />
      </BoxInfo>
      <Divider sx={{ width: '100%', marginBottom: '40px' }}>
        <Chip label="Atualizar dados" size="medium" variant="outlined" />
      </Divider>

      <FormProvider {...userForm}>
        <UserForm
          userInfo={userInfo}
          handleSubmitForm={userInfo ? handleEditSubmitForm : handleSubmitForm}
          image={image}
          setImage={setImage}
        />
      </FormProvider>
    </Box>
  );
}

export default App;
