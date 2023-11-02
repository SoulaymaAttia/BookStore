
import {  Box, ChakraProvider } from '@chakra-ui/react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';

export default function App() { 
  return (

    <ChakraProvider>
      <Box overflowX={"hidden"}>
      <Navbar/>
     <Home/>
      <Footer />
      </Box>
    </ChakraProvider>

  );
}
