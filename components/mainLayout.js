import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>chakkun1121作成のwebアプリ</title>
      </Head>
      <Header title="webアプリ" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
