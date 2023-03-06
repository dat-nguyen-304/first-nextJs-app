import { Card, Button } from 'react-bootstrap';
import { getPostById, getPostIds } from '../../lib/posts';
import Layout from '../../components/Layout';

const Post = ({ post }) => {
    return (
        <Layout>
            <Card key={ post.id } className="my-3 shadow">
                <Card.Body>
                    <Card.Title>
                        { post.title }
                    </Card.Title>
                    <Card.Text>
                        { post.body }
                    </Card.Text>
                    <Card.Link href='/posts'>
                        <Button variant="dark">Back</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
        </Layout>

    )
}

export const getStaticPaths = async () => { //code ở server
    const paths = await getPostIds();
    console.log(paths);

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const post = await getPostById(params.id);
    return {
        props: {
            post
        }
    }
}

export default Post;