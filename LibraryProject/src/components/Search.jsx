import {
  Input,
  Button,
  Icon,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearch } from '../store';
export default function Search() {
  const { item, setItem } = useSearch();
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
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
    </InputGroup>
  );
}
