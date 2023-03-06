import { getRandomJoke } from "@/lib/joke"
import { Button, Card } from "react-bootstrap";
import Layout from '../../components/Layout';

const Random = ({ joke }) => {
    return (
        <Layout>
            <Card key={ joke.id } className="my-3 shadow">
                <Card.Body>
                    <Card.Title>
                        { joke.id }
                    </Card.Title>
                    <Card.Text>
                        { joke.value }
                    </Card.Text>
                    <Card.Link href='/'>
                        <Button variant="dark">Back</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    let joke = await getRandomJoke();
    if (!joke)
        return {
            notFound: true
        }

    // return {
    //     redirect: {
    //         destination: '/posts',
    //         permanent: false
    //     }
    // }
    return {
        props: {
            joke
        }
    }
}

export default Random