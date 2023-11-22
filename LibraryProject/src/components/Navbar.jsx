import { Flex, Image  } from "@chakra-ui/react";
import logo from '../assets/logo.png'
import Search from './Search'

import ShoppingIcon from "./ShoppingIcon";
const Navbar = () => {
  return (
    <Flex px={8} justify="space-between" align="center" width={"100vw"} bgColor={"pink.100"}>
      <Image alt="logo" src={logo} boxSize="80px" />
      <Search />
     <ShoppingIcon />
    </Flex>

  );
};

export default Navbar;
