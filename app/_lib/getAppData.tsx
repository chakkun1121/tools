import fsPromises from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { appType } from "../../@types/appType";

export function getAppData(appName: string): Promise<appType> {
  return new Promise(async (resolve, reject) => {
    const filePath = path.join(
      process.cwd(),
      "public",
      "apps",
      appName,
      "index.md",
    );
    try {
      const fileContent: string = await fsPromises.readFile(filePath, "utf-8");
      const { data } = matter(fileContent) as unknown as {
        data: appType;
      };
      resolve({
        ...data,
        content: fileContent,
      });
    } catch (error) {
      reject(error);
    }
  });
}
