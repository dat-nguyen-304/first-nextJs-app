import { getBooks } from "@/lib/book";
import { Button, Card } from "react-bootstrap";
import Layout from '../../components/Layout';

const Books = ({ books }) => {
    console.log(books);
    return (
        <Layout>
            {
                books.map(book => (
                    <Card key={ book.bookName } className="my-3 shadow">
                        <Card.Body>
                            <Card.Title>
                                { book.bookName }
                            </Card.Title>
                            <Card.Text>
                                { book.bookContent }
                            </Card.Text>
                            <Card.Link href='/'>
                                <Button variant="dark">Back</Button>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                ))
            }
            {/*  */ }
        </Layout>
    )
}

export const getStaticProps = async () => {
    const books = await getBooks();
    return {
        props: {
            books
        }
    }
}

export default Books