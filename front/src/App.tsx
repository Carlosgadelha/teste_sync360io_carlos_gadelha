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
import { formatAddress } from './utils/formatAddress';

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const userForm = useForm({
    defaultValues: defaultFormValues,
  });

  const handleSubmitForm = async (formValues: UserFormValues) => {
    const { name, age, biography, address } = formValues;

    const profile_name = image ? await uploadImage(image) : '';
    const user = await createUser({ name, age: parseInt(age), biography, profile_name });
    if (user) {
      localStorage.setItem('userId', user.id);
    }
    if (address) {
      await createAddress({ ...address, userId: user.id });
    }
  };

  const handleEditSubmitForm = async (formValues: UserFormValues) => {
    const { name, age, biography, address } = formValues;
    const id = userInfo?.id;
    const addressId = userInfo?.address.id;

    if (id) {
      const profile_name = (image && await uploadImage(image)) || (imageUrl && userInfo.profile_name) || "";
      await updateUserInfo({ id, name, age: parseInt(age), biography, profile_name});

      if (address && addressId) {
        await updateAddress({ ...address, id: addressId, userId: parseInt(id) });
      }

      handleGetUserInfo(parseInt(id));
    }
  };

  const handleGetUserInfo = async (userId: number) => {
    if (userId) {
      const user = await getUser(userId);
      if (user) setUserInfo(user);
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) handleGetUserInfo(parseInt(userId));
  }, []);

  return (
    <Box height="100vh" display="flex" flexDirection="column" padding={3} alignItems="center">
      <ProfileImage src={`${import.meta.env.VITE_BASE_URL}/profileImage/${userInfo?.profile_name}`} />
      <BoxInfo>
        <Item title="Nome" text={userInfo?.name || ''} />
        <Item title="Endereco" text={formatAddress(userInfo?.address || null)} />
        <Item title="Idade" text={userInfo?.age || ''} />
        <Item title="Biografia" text={userInfo?.biography || ''} />
      </BoxInfo>
      <Divider sx={{ width: '100%', marginBottom: '40px' }}>
        <Chip label={userInfo ? "Atualizar Dados" : "Inserir Dados"} size="medium" variant="outlined" />
      </Divider>

      <FormProvider {...userForm}>
        <UserForm
          userInfo={userInfo}
          handleSubmitForm={userInfo ? handleEditSubmitForm : handleSubmitForm}
          image={image}
          setImage={setImage}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
        />
      </FormProvider>
    </Box>
  );
}

export default App;
