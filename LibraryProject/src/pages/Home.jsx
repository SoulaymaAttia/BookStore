import { Flex, Input, Text } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "../components/BookCard";
import { useSearch } from '../store';

export default function Home() {
  const apiUrl = 'https://openlibrary.org/people/mekBot/books/currently-reading.json'; 
  const bookData = useBooks(apiUrl);
  const { item } = useSearch();

  // Filter the data based on the entered text
  const filteredData = bookData.filter(book => 
    book.work.title && book.work.title.toLowerCase().includes(item.toLowerCase())
  );
   
  return (
    <Flex direction="column" align="center" p="8">
      <Flex display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" width="100%">
        {filteredData.length === 0 ? (
          <Text>No matching books found</Text>
        ) : (
          filteredData.map((entry, index) => (
            <BookCard key={index} entry={entry} />
          ))
        )}
      </Flex>
    </Flex>
  );
}
