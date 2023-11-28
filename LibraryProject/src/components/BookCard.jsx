import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useShopping } from "../store";
import { useBook } from "../store";
const BookCard = ({ entry }) => {
  const { setBook, book } = useBook();
  const { increaseItem } = useShopping();
  const imgUrl =
    "https://covers.openlibrary.org/b/id/" + entry.work.cover_id + "-M.jpg";
  return (
    <Card
      width={"56"}
      margin={"5"}
      boxShadow={"2xl"}
      display={entry.work.title ? "block" : "none"}
    >
      <CardBody
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Link
          onClick={() => {
            setBook(entry.work);
          }}
          to={"dis"}
        >
          <Image
            src={imgUrl}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            width={"40"}
          />
        </Link>
        <Stack mt="6" spacing="3">
          <Heading size="sm">{entry.work.title}</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter display={"flex"} justifyContent={"space-between"}>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="pink" onClick={increaseItem}>
            Add to cart
          </Button>
        </ButtonGroup>
        <Text color="pink.600" fontSize="xl">
          {"10$"}
        </Text>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
