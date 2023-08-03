import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found",
  robots: "noindex",
};
export default function NotFound() {
  return (
    <section className="text-center">
      <h2>404 Not Found</h2>
      <p>ページが見つかりません</p>
    </section>
  );
}
