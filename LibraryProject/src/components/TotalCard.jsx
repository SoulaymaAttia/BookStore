import { Button, Flex, Text } from "@chakra-ui/react"
import { useBuy, useShopping } from "../store" 

const TotalCard = () => {
    const h = useBuy().item +  "px"
    return (
    <Flex 
    position={"absolute"} 
    bgColor={"pink.500"} 
    width={"200px"} 
    borderRadius={"xl"} 
    height={h}
    overflow={"hidden"} 
    zIndex={1} 
    top={"90px"}
    right={"10px"}
    justifyContent={"center"}
    alignItems={"center"}
    flexDir={"column"}
    transition={"0.5s"}

    
    >
        <Text textColor={'white'}>your total is : {10*useShopping().item} $</Text>
        <Button margin={2} onClick={()=>console.log(useBuy.item )} bgColor={"pink.100"} color={"pink.600"} > buy now</Button>
    </Flex>
  )
}

export default TotalCard