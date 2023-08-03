import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { appType } from "../types/appType";
import { appListType } from "../types/appListType";
export default async function Home() {
  // /data/apps-data.jsonからデータを取得
  const filePath = path.join(process.cwd(), "data", "apps-data.json");
  const data: appListType = JSON.parse(
    await fsPromises.readFile(filePath, "utf-8"),
  );
  const appList: Array<appType> = data.apps;
  return (
    <section className="flex flex-col gap-12">
      <div className="grid auto-rows-fr grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {appList.map((app) => (
          <div key={app.id} className="rounded bg-sea-300 p-4 ">
            <Link
              href={
                app.path.includes("http")
                  ? app.path
                  : `https://chakkun1121.github.io/${app.path}`
              }
              className="text-center text-black visited:text-black hover:no-underline"
              target="_blank"
            >
              <img
                src={
                  app.path.includes("http")
                    ? app.path
                    : `https://chakkun1121.github.io/tools/${app.imgPath}`
                }
                width={480}
                height={260}
                alt={`${app.name}の説明画像`}
              />
              <p>{app.name}</p>
              <p className="text-M">{app.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
