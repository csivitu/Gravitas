import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="title" content="Gravitas 2022" />
                    <meta
                        name="description"
                        content="Gravitas is a global student-organised hackathon and developer's conference conducted annually by CSI-VIT."
                    />


                    <meta charset='UTF-8' />
                    <meta property="og:site_name" content="Gravitas" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://Gravitas.csivit.com/" />
                    <meta property="og:title" content="Gravitas 2022" />
                    <meta
                        property="og:description"
                        content="Gravitas is a global student-organised hackathon and developer's conference conducted annually by CSI-VIT."
                    />
                    <meta property="og:image" itemProp="image" content="https://Gravitas.csivit.com/assets/devspace_embed.png" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://Gravitas.csivit.com/" />
                    <meta property="twitter:title" content="Gravitas 2022" />
                    <meta
                        property="twitter:description"
                        content="Computer Society of India-VIT brings together some of the best designers, developers, and tech enthusiasts who collaborate and organize various events, workshops and hackathons every year with the motivation of pushing technology forward and fostering a community of tech enthusiasts."
                    />
                    <meta property="twitter:image" content="https://Gravitas.csivit.com/assets/Devspace_banner.png" />

                    <meta name="keywords" content="ccs" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700&family=Space+Grotesk:wght@300;400;500;600&display=swap" rel="stylesheet" />


                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#131313 " />
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