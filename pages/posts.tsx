import MainLayout from '../components/MainLayout';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MyPost } from '../interfaces/posts';
import { NextPageContext } from 'next';

interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {

    const [posts, setPosts] = useState(serverPosts);

    useEffect(() => {
        async function load() {
           const respose = await fetch(`${process.env.API_URL}/posts`);
           const json: MyPost[] = await respose.json();
           setPosts(json);
        }
        if(!serverPosts) {
            load();
        }

    }, []);

    if(!posts) {
        return (
            <MainLayout>
                <p>Loading ...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout title={'Posts Page'}>
            <h1>Posts Page</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`} >
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
    if(!req) {
        return {
            posts: null
        }
    }
    const respose = await fetch(`${process.env.API_URL}/posts`);
    const posts: MyPost[] = await respose.json();

    return {
        posts 
    };
} 