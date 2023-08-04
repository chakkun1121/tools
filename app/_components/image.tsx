import Image from "next/image";

// urlがhttps://chakkun1121.github.io を含む場合はnext/imageを、それ以外は普通にimgタグを使う
export default function CustomImage(props: any) {
  return (
    <>
      {props?.src?.toString().includes("https://chakkun1121.github.io") ||
      props?.src?.toString().includes("./") ? (
        <Image {...props} />
      ) : (
        <img {...props} />
      )}
    </>
  );
}
