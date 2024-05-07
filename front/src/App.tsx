import { Avatar, Box, Button } from '@mui/material';
import { Item } from './components/Item';
import { BoxInfo } from './components/BoxInfo';
import { ProfileImage } from './components/ProfileImage';

const user = {
  name: 'Carlos',
  address: 'Rua alfa, 501 CS 03, 62040-140 expectativa, sobral, ce',
  biography: 'Sou o Carlos Gadelha, natural de Sobral ceara. ',
};

function App() {
  return (
    <Box height="100vh" display="flex" flexDirection="column" padding={3} alignItems="center">
      <ProfileImage>C</ProfileImage>
      <BoxInfo>
        <Item title="Nome" text={user.name} />
        <Item title="Endereco" text={user.address} />
        <Item title="Biografia" text={user.biography} />
      </BoxInfo>

      <Button variant='outlined' > Atualizar dados</Button>
    </Box>
  );
}

export default App;
