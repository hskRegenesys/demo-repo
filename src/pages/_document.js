import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            href="favicon.ico"
            id="fav-shortcut"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="favicon.ico"
            id="fav-icon"
            type="image/x-icon"
          />
          <link rel="icon" href="favicon.ico" />
          <meta
            name="description"
            content="Linoor is a multipurpose and powerful Digital Services Agency NextJS Template. The template is highly suitable template for companies that offer web design, web development, internet services, digital marketing, SEO services and all other internet marketing and services related agencies and businesses."
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />                
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
