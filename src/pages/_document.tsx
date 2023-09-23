import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.json"></link>
                    <link rel="apple-touch" href="/icon.png"></link>
                    <link rel="theme-color" content="#fff"></link>
                    <link rel="icon" href="/icon-192x192.png" sizes="any" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;