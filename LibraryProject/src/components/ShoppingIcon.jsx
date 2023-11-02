import { Box, Text } from "@chakra-ui/react";
import { useShopping } from "../store";
import shoppingLogo from '../assets/shoppingLogo.png'
const ShoppingIcon = () => {
  return (
    <Box
      bgImage={shoppingLogo} // Set the URL of your background image
      bgSize="cover" // Adjust the size of the background image (e.g., cover, contain)
      bgPosition="center" // Adjust the position of the background image (e.g., center)
      w="14" // Set the width of the box
      h="14" // Set the height of the box
      display={"flex"}
      justifyContent={"flex-end"}
      alignItems={'flex-end'}
    >
            <Box bgColor={'white'} borderRadius={'full'} display={"flex"} justifyContent={'center'} alignItems={'center'} w={"4"} h={"4"}>
                <Text color={'pink.500'} fontWeight={'bold'}>{useShopping().item}</Text>
            </Box>
    </Box>
  );
};

export default ShoppingIcon;
