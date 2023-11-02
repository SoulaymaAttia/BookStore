
import {  ChakraProvider } from '@chakra-ui/react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {

  return (
    <ChakraProvider>
      <Navbar/>
     
      <Footer />
    </ChakraProvider>
  );
}
