import Link from "next/link";
import Head from "next/head";

export default function MainLayout({ children, title = 'Next App' }) {
    return <>
        <Head>
            <meta name="keywords" content="next, javascript, next.js, react.js" />
            <meta name="description" content="this is youtube tutorial for next.js" />
            <meta charSet="utf-8" />
            <title>{title} | Next Course</title>
        </Head>
        <nav>
            <Link href={'/'}><a>Home</a></Link>
            <Link href={'/about'}><a>About</a></Link>
            <Link href={'/posts'}><a>Posts</a></Link>      
        </nav>
        <main>
            { children }
        </main>
        <style jsx>
            {`
                nav {
                    position: fixed;
                    height: 60px;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: darkblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                nav a {
                    color: #fff;
                    text-decoration: none;
                }

                main {
                    margin-top: 60px;
                    padding: 1rem;
                }
            `}
        </style>
    </>
}