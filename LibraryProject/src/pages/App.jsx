
import { Box, ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from './Home';
import TotalCard from '../components/TotalCard';

export default function App() {
  return (

    <ChakraProvider>
      <Box  bgColor={"pink.200"} overflowX={"hidden"}>
      <TotalCard />
      <Navbar />
      <Box minH={"83vh"} bgColor={"white"} overflowX={"hidden"}>
        <Home />
      </Box >
      <Footer />
      </Box>
    </ChakraProvider>

  );
}
