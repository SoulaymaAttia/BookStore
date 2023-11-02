import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";


const  BookCard =({entry}) =>{
    
    function test(entry) {
        if (entry && entry.work) {
          return false;
        } else {
          return true;
        }
      }
      
    const imgUrl = test() ? 'https://covers.openlibrary.org/b/id/'+ entry.work.cover_id+'-M.jpg' : ''
    return (
  
         <Card width={"56"} margin={"5"} boxShadow={"2xl"}>
  <CardBody display={'flex'}  justifyContent={'center'}  alignItems={"center"} flexDir={'column'}>
    <Image
      src={imgUrl}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      width={"40"}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='sm'>{test() ? entry.work.title : 'not available'}</Heading>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter display={'flex'} justifyContent={"space-between"}>
    
    <ButtonGroup spacing='2'>
      <Button variant='solid' isDisabled={!test()} colorScheme='pink'>
        Add to cart
      </Button>
    </ButtonGroup>
    <Text color='pink.600' fontSize='xl'>
        {
            test() ? "10$": "not available"
        }
      </Text>
  </CardFooter>
</Card>
   
  )
}


export default BookCard ; 
