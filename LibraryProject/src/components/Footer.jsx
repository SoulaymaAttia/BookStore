import { Flex, Icon, Link, Text } from "@chakra-ui/react";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
  <Flex
  
  as="footer"
  bgColor="pink.100"
  p={4}
  justifyContent="space-between"
  alignItems="center"
  flexWrap="wrap"
  px={"14"}
  >
    <Text>
    © 2023 Soulayma Attia & Hamza Sayari. All rights reserved
    </Text>
     <Flex
     
    >
      <Link  _hover={{color:"pink.500" }}   mx={2}  href="https://www.facebook.com">
        <Icon as={BsFacebook}
        fontSize="xl"
        
         />
      </Link>
      <Link  _hover={{color:"pink.500" }}   mx={2}  href="https://www.instagram.com">
        <Icon as={BsInstagram}fontSize="xl"
          />
      </Link>
      <Link  _hover={{color:"pink.500" }}   mx={2}  href="https://www.twitter.com">
        <Icon as={BsTwitter}fontSize="xl"
          />
      </Link>
    </Flex>
  </Flex>
  );
}
