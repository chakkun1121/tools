import { MetadataRoute } from "next";
import path from "path";
import { appListType } from "../types/appListType";
import fsPromises from "fs/promises";
import { appType } from "../types/appType";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // /data/apps-data.jsonからデータを取得
  const filePath = path.join(process.cwd(), "data", "apps-data.json");
  const data: appListType = JSON.parse(
    await fsPromises.readFile(filePath, "utf-8"),
  );
  const appList: Array<appType> = data.apps;
  return appList.map((app) => {
    return {
      url: app.path.startsWith("http")
        ? app.path
        : `https://chakkun1121.github.io/${app.path}`,
    };
  });
}
