import NextLink from "next/link";
export default function Link({
  href,
  target = "_self",
  children,
  className = "",
}: {
  href: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      {href.startsWith("http://") || href.startsWith("https://") ? (
        <a href={href} target={target} className={className}>
          {children}
        </a>
      ) : (
        <NextLink href={href} className={className} target={target}>
          {children}
        </NextLink>
      )}
    </>
  );
}
