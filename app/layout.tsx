import { Metadata } from "next";
import Footer from "./_components/footer";
import Header from "./_components/header";
import "./global.css";
export const siteURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3030"
    : "https://chakkun1121.github.io/tools";
export const metadata: Metadata = {
  title: {
    default: "webアプリ | chakkun1121",
    template: "%s | webアプリ | chakkun1121",
  },
  description: "chakkun1121が作成したwebアプリの一覧です",
  metadataBase: new URL(siteURL),
  alternates: {
    canonical: "/",
  },
  robots:"noindex",
};
export default function Layout({ children }) {
  return (
    <html lang="ja" className="">
      <body className="flex min-h-screen flex-col">
        <Header />
        <div className="mb-36 mt-14 w-full flex-grow px-6">
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-12">
            <main className="gap-22 col-span-full flex flex-col">
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
