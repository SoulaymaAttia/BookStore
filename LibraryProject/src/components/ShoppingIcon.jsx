import { Box, Button, Text } from "@chakra-ui/react";
import { useBuy, useShopping } from "../store";
import shoppingLogo from '../assets/shoppingLogo.png'
const ShoppingIcon = () => {
  return (
    <Button
      onClick={useBuy().setItem}
      variant={"unstyled"}
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
    </Button>
  );
};

export default ShoppingIcon;
