import { MetadataRoute } from "next";
import { getAllAppEnNames } from "./_lib/getAllAppEnNames";
import { getAppData } from "./_lib/getAppData";
import { appType } from "../@types/appType";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allAppEnNames = await getAllAppEnNames();
  const appsDataList: appType[] = await Promise.all(
    allAppEnNames.map(async (appEnName) => getAppData(appEnName)),
  );
  return appsDataList.map((app) => {
    return {
      url: app.path.startsWith("http")
        ? app.path.endsWith("/")
          ? app.path
          : app.path + "/"
        : `https://chakkun1121.github.io/${app.path}/`,
    };
  });
}
