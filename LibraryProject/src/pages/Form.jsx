import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

function Form() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} bgColor={'pink.100'}>
    <Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"} h={"100vh"}  width={"50vw"} >
      <FormControl colorScheme="pink" isRequired>
        <FormLabel>First name</FormLabel>
        <Input colorScheme="pink"  my={4} placeholder="First name" />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Last name</FormLabel>
        <Input borderColor={"pink.500"} colorScheme="pink"  my={4}  placeholder="Last name" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>phone number</FormLabel>
        <Input borderColor={"pink.500"} colorScheme="pink"  my={4}  placeholder="Last name" />
      </FormControl>

      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input borderColor={"pink.500"} colorScheme="pink"  my={4}  type="email" placeholder="share your e-mail"  />
    
      </FormControl>

      <FormControl>
        <FormLabel>Country</FormLabel>
        <Select borderColor={"pink.500"} colorScheme="pink"  my={4}  placeholder="Select country">
          <option>Tunis</option>
          <option>kairouan</option>
        </Select>
      </FormControl>
      <Button colorScheme="pink">choose payment method</Button>
    </Flex>
    </Flex>
  );
}

export default Form;
