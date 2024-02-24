import { Metadata } from "next";
import NotFound from "../not-found";
import { getAppData } from "../_lib/getAppData";
import Link from "../_components/link";
import ReactMarkdown from "react-markdown";
import { getAllAppEnNames } from "../_lib/getAllAppEnNames";
export async function generateMetadata({
  params,
}: {
  params: { appName: string };
}): Promise<Metadata> {
  const appData = await getAppData(params.appName);
  return {
    title: appData.name,
    description: `chakkun1121が作成した${appData.name}の紹介ページです。${appData.description}`,
    alternates: {
      canonical: params.appName,
    },
  };
}
export default async function AppPage({
  params,
}: {
  params: { appName: string };
}) {
  try {
    const appData = await getAppData(params.appName);
    return (
      <>
        <section className="flex">
          <div className="flex-1">
            <h1>{appData.name}</h1>
          </div>
          <div className="m-2 flex-none">
            <img
              className="h-32 w-32 rounded"
              src={
                appData.iconPath.startsWith("http")
                  ? appData.iconPath
                  : `./apps/${params.appName}/${appData.iconPath}`
              }
            />
            <Link
              className="my-2 block w-32 items-center rounded bg-gray-200 p-2 text-center text-black no-underline visited:text-black hover:text-black hover:no-underline"
              href={
                appData.path.startsWith("http")
                  ? appData.path
                  : `https://chakkun1121.github.io/${appData.path}`
              }
              target="_blank"
            >
              開く
            </Link>
          </div>
        </section>
        <section className="my-4 flex overflow-x-scroll">
          {appData.images?.map((image) => (
            <div className="m-2 flex-none ">
              <img
                className="h-40 rounded"
                src={
                  image.startsWith("http")
                    ? image
                    : `./apps/${params.appName}/${image}`
                }
              />
            </div>
          ))}
        </section>
        <ReactMarkdown>
          {appData.content.replace(/^---[\s\S]*?---/, "")}
        </ReactMarkdown>
      </>
    );
  } catch (error) {
    console.error(error);
    NotFound();
  }
}
export async function generateStaticParams(): Promise<{ appName: string }[]> {
  const allAppEnNames: string[] = await getAllAppEnNames();
  return allAppEnNames.map((appName) => ({ appName }));
}
