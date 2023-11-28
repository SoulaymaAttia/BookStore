import { Flex } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";

export default function Home() {
    const apiUrl = 'https://openlibrary.org/people/mekBot/books/currently-reading.json'; 
    const bookData = useBooks(apiUrl);
  return (
    <Flex  display={"flex"} flexDirection={"row"}  justifyContent={"center"} flexFlow={'wrap'} width={"100%"} padding={"8"}>
        {bookData.map((entry, index) => (

        <BookCard key={index} entry={entry} />
        ))}
      
    </Flex>
  )
}
