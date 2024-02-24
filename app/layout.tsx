import { Metadata } from "next";
import Footer from "./_components/footer";
import Header from "./_components/header";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "webアプリ | chakkun1121",
    template: "%s | webアプリ | chakkun1121",
  },
  description: "chakkun1121が作成したwebアプリの一覧です",
  metadataBase: new URL("https://chakkun1121.github.io/tools"),
  alternates: {
    canonical: "/",
  },
  robots: "noindex",
};
export default function Layout({ children }) {
  return (
    <html lang="ja" className="">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
