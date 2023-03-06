import Layout from "../components/Layout";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button"


export default function Home () {
  return (
    <Layout>
      <Container>
        <h1>My next app</h1>
        <p>This is my next app</p>
        <p>
          <Link href="/posts">
            <Button variant="primary">Posts</Button>
          </Link>
        </p>
      </Container>
    </Layout>
  )
}
