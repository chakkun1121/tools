import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 | webアプリ | chakkun1121</title>
      </Head>
      <Header title="404" />
      <main>
        <h1>404</h1>
        <p>ページが見つかりません</p>
      </main>
      <Footer />
    </>
  );
}
