import "../styles/main.scss";
import NextNprogress from 'nextjs-progressbar';

export default function myApp({ Component, pageProps }) {
    return <>
        <NextNprogress />
        <Component {...pageProps} />
        {/* <style jsx global>
            {`
               body {
                   font-family: 'Roboto', sans-serif;
               } 
            `}
        </style> */}
    </>    
}