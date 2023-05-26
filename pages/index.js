import Layout from "../components/mainLayout";
import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Home(apps) {
  const appList = apps.apps;
  return (
    <Layout>
      <div className={styles.apps}>
        {appList.map((app) => (
          <div key={app.id} className={styles.app}>
            {
              app.path.includes("http") ? (
                // 絶対パスの場合
                <a
                  href={app.path}
                  className={styles["app-link"]}
                  target="_blank"
                >
                  <img
                    src={`${app.path}/ogp.png`}
                    width={460}
                    height={260}
                    alt={`${app.name}」の説明画像`}
                  /><p>{app.name}</p></a>) : (
                // 相対リンク(https://chakkun1121.github.io/{app.path})の場合
                <Link
                  href={`https://chakkun1121.github.io/${app.path}`}
                  className={styles["app-link"]}
                >
                  <Image
                    src={`https://chakkun1121.github.io/tools/${app.imgPath}`}
                    width={460}
                    height={260}
                    alt={`「${app.name}」の説明画像`}
                  />
                  <p>{app.name}</p>
                </Link>
              )
            }
          </div>
        ))}
      </div>
    </Layout >
  );
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data/apps-data.json");
  const data = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(data);
  return {
    props: objectData,
  };
};
