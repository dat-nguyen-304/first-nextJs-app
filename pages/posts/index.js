import React from 'react'
import Layout from '../../components/Layout';
import Card from 'react-bootstrap/Card';
import { getPosts } from '../../lib/posts';

const Posts = ({ posts }) => {
    return (
        <Layout>
            {
                posts.map(post => (
                    <Card key={ post.id } className="my-3 shadow">
                        <Card.Body>
                            <Card.Title>
                                { post.title }
                            </Card.Title>
                            <Card.Text>
                                { post.body }
                            </Card.Text>
                            <Card.Link href={ `/posts/${post.id}` }>See more</Card.Link>
                        </Card.Body>
                    </Card>
                ))
            }

        </Layout>
    )
}

export const getStaticProps = async () => {
    const posts = await getPosts(10);
    return {
        props: {
            posts
        }
    }
}

export default Posts