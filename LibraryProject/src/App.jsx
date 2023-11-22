
import {  Box, ChakraProvider } from '@chakra-ui/react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TotalCard from './components/TotalCard';

export default function App() { 
  return (

    <ChakraProvider>
      <TotalCard />
      <Box overflowX={"hidden"}>
      <Navbar/>
     <Home/>
      <Footer />
      </Box>
    </ChakraProvider>

  );
}
