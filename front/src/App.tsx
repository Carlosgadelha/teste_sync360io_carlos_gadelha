import { Box, Button, Chip, Divider } from '@mui/material';
import { Item } from './components/Item';
import { BoxInfo } from './components/BoxInfo';
import { ProfileImage } from './components/ProfileImage';
import { FormProvider, useForm } from 'react-hook-form';
import { UserForm, defaultFormValues } from './components/UserForm';

const user = {
  name: 'Carlos',
  address: 'Rua alfa, 501 CS 03, 62040-140 expectativa, sobral, ce',
  age: 26,
  biography: 'Sou o Carlos Gadelha, natural de Sobral ceara. ',
};

function App() {
  const userForm = useForm({
    defaultValues: defaultFormValues,
  });

  return (
    <Box height="100vh" display="flex" flexDirection="column" padding={3} alignItems="center">
      <ProfileImage>C</ProfileImage>
      <BoxInfo>
        <Item title="Nome" text={user.name} />
        <Item title="Endereco" text={user.address} />
        <Item title="Idade" text={user.age} />
        <Item title="Biografia" text={user.biography} />
      </BoxInfo>
      <Divider sx={{ color: 'red', width: '100%', marginBottom: '40px' }}>
        <Chip label="Atualizar dados" size="medium" variant="outlined" />
      </Divider>

      {/* <Button variant="outlined"> Atualizar dados</Button> */}

      <FormProvider {...userForm}>
        <UserForm />
      </FormProvider>
    </Box>
  );
}

export default App;
