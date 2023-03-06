import { Card, Button, Spinner } from 'react-bootstrap';
import { getPostById, getPostIds } from '../../lib/posts';
import Layout from '../../components/Layout';
import { useRouter } from "next/router";
import spinnerStyle from "../../styles/spinner.module.css";
const Post = ({ post }) => {
    const router = useRouter();
    if (router.isFallback) {
        return (
            <Spinner animation='border' role='status' variant='dark' className={ spinnerStyle.spinnerLg } />
        )
    }

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
    const paths = await getPostIds(5);

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const post = await getPostById(params.id);
    return {
        props: {
            post
        },
        revalidate: 1
    }
}

export default Post;