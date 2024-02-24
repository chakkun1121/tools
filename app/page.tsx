import Link from "next/link";
import { appType } from "../@types/appType";
import { getAppData } from "./_lib/getAppData";
import Image from "next/image";
import { getAllAppEnNames } from "./_lib/getAllAppEnNames";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
export default async function Home() {
  const allAppEnNames: string[] = await getAllAppEnNames();
  const appDataList: appType[] = await Promise.all(
    allAppEnNames.map(async (appName) => getAppData(appName)),
  );
  return (
    <section className="flex flex-col gap-12">
      <h1>chakkun1121作成のアプリなどの作成物一覧</h1>
      <div className="grid auto-rows-fr grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {appDataList.map((appData, i) => (
          <Card key={i}>
            <Link
              href={appData.enName}
              className="text-center text-black visited:text-black hover:no-underline"
            >
              <CardHeader>
                <h2 className="line-clamp-1 py-2 text-2xl" title={appData.name}>
                  {appData.name}
                </h2>
              </CardHeader>
              <CardContent>
                <Image
                  className="mx-auto rounded"
                  src={
                    appData.imgPath
                      ? appData.imgPath.startsWith("http")
                        ? appData.imgPath
                        : `./apps/${appData.enName}/${appData.imgPath}`
                      : "./no-image.png"
                  }
                  width={480}
                  height={260}
                  alt={`${appData.name}の説明画像`}
                  title={appData.name}
                  loading={i < 3 ? undefined : "lazy"}
                  priority={i < 3}
                />
              </CardContent>
              <CardFooter>
                <p className="text-M line-clamp-2" title={appData.description}>
                  {appData.description}
                </p>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
