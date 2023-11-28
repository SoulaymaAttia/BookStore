import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useBook } from "../store";
const Discription = () => {
    const book = useBook.getState().book;
    const imgUrl = 'https://covers.openlibrary.org/b/id/' + book.cover_id + '-L.jpg'
    return (
        <>
            <Flex  p={'10'} height={"100vh"}>
                <Image src={imgUrl}
                    width={"40%"}
                    alt='img'
                    borderRadius='lg' />
                    <Flex flexDir={'column'} margin={'10'}>
                        <Heading my={'5'}>{book.title}</Heading>
                        <Text fontWeight={'bold'}>auther : {book.author_names}</Text>
                        <Text my={'5'} fontWeight={'bold'}>first publish year : {book.first_publish_year}</Text>
                        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum possimus magnam et aut facilis rerum, ratione minus ut sequi voluptates, est voluptatem tenetur eveniet temporibus accusantium? Illo culpa reprehenderit suscipit cumque iusto recusandae eum dolorum molestiae aliquid. Voluptatibus provident sapiente rem repellat maiores quod expedita consequuntur commodi cum facere, quae soluta rerum assumenda natus eaque reprehenderit. Enim illo odio sit laudantium adipisci quaerat quisquam! Velit dolorum corrupti animi quisquam? Culpa accusamus veritatis voluptatum cum iusto et praesentium ducimus. Iste repellendus illum nihil vitae. Animi, error, expedita voluptates sint, quidem veritatis a vel neque amet accusamus numquam excepturi vero magni? Reiciendis sunt non officiis quos aliquid ullam nam. Hic quaerat repudiandae unde amet molestiae ducimus sed commodi blanditiis iste voluptatem assumenda eveniet minus provident velit recusandae adipisci minima officia obcaecati, cumque repellat. Nemo esse sit commodi non, recusandae ab quibusdam nostrum ipsa sapiente? Magni nemo voluptas nobis delectus voluptatum laboriosam veniam, alias laborum? Alias modi distinctio ut dolorem omnis reiciendis, reprehenderit debitis similique quos blanditiis totam velit odio impedit laborum, nulla voluptates, quia aspernatur quod dolor delectus. Neque unde aperiam ratione id natus iure tenetur quidem ad, ab necessitatibus reiciendis quos molestiae nisi velit! Aliquid impedit illo incidunt similique, eos pariatur error fuga aspernatur harum, possimus blanditiis ab quidem nemo eveniet placeat repellendus iste earum optio accusantium asperiores at quae voluptate doloribus voluptatum! Autem magni explicabo dolores illum, vitae architecto voluptas ut quia officia sapiente suscipit adipisci placeat, fuga dolore natus, atque reiciendis iure? Veniam deleniti voluptatem est nemo quia aut!</Text>
                    </Flex>
            </Flex>
        </>
    )
}

export default Discription