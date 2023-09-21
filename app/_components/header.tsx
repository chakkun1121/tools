import Link from "next/link";

export default function Header() {
  return (
    <header className="p-2">
      <Link
        className="text-heading-L text-black no-underline visited:text-black hover:no-underline"
        href="/tools/"
      >
        chakkun1121の制作物
      </Link>
    </header>
  );
}
