import fsPromises from "fs/promises";
import path from "path";
import Link from "next/link";
import { appType } from "../types/appType";
import { appListType } from "../types/appListType";
import Image from "./_components/image";
export default async function Home() {
  // /data/apps-data.jsonからデータを取得
  const filePath = path.join(process.cwd(), "data", "apps-data.json");
  const data: appListType = JSON.parse(
    await fsPromises.readFile(filePath, "utf-8"),
  );
  const appList: Array<appType> = data.apps;
  return (
    <section className="flex flex-col gap-12">
      <h2>アプリ一覧</h2>
      <div className="grid auto-rows-fr grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {appList.map((app, i) => (
          <div key={i} className="rounded bg-sea-300 p-4 ">
            <Link
              href={
                app.path.includes("http")
                  ? app.path
                  : `https://chakkun1121.github.io/${app.path}`
              }
              className="text-center text-black visited:text-black hover:no-underline"
              target="_blank"
            >
              <Image
                className="mx-auto"
                src={app.imgPath}
                width={480}
                height={260}
                alt={`${app.name}の説明画像`}
                title={app.name}
                loading={i < 3 ? undefined : "lazy"}
                priority={i < 3}
              />
              <h3 className="line-clamp-1 py-2" title={app.name}>
                {app.name}
              </h3>
              <p className="line-clamp-2 text-M" title={app.description}>
                {app.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
