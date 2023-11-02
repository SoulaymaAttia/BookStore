import {
  Input,
  Button,
  Icon,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Search() {
  return (
    <InputGroup width={80} bgColor={"white"} borderRadius={"2xl"}>
      <InputRightElement>
        <Button variant={"solid"} colorScheme="pink"   focusBorderColor='pink.400' _hover={{borderColor:"pink.500" }} borderRadius={"2xl"}>
          <Icon as={AiOutlineSearch} />
        </Button>{" "}
      </InputRightElement>
      <Input
        _hover={{borderColor:"pink.500" }}
        type="text"
        placeholder="Search"
        borderColor={"pink.500"}
        focusBorderColor="pink.400"
        borderRadius={"2xl"}
        
      />
    </InputGroup>
  );
}
