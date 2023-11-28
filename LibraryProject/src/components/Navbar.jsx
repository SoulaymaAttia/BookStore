import { Flex, Image } from "@chakra-ui/react";
import logo from '../assets/logo.png'
import Search from './Search'

import ShoppingIcon from "./ShoppingIcon";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Flex px={8} justify="space-between" align="center" width={"100vw"} bgColor={"pink.100"}>
      <Link to='/'>
        <Image alt="logo" src={logo} boxSize="80px" />
      </Link>
      <Search />
      <ShoppingIcon />
    </Flex>

  );
};

export default Navbar;
