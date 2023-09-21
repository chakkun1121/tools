import fsPromises from "fs/promises";
import path from "path";

export async function getAllAppEnNames(): Promise<string[]> {
  const filePath = path.join(process.cwd(), "public", "apps");
  const dirNames = await fsPromises.readdir(filePath);
  return dirNames;
}
