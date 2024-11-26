import NavBar from '@/components/NavBar';
import {Container} from '@chakra-ui/react';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <Container maxW="7xl">
      <NavBar />
      <Outlet />
    </Container>
  );
};

export default Layout;
