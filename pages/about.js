import css from "../styles/Home.module.css";
import Images from "next/image";
import Head from "next/head";
import Link from "next/link";
const about = ({ data }) => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="keywords" content="text" />
      </Head>
      <Images src="/girl.jpeg" width={300} height={300} />
      <h1 className={css.about_title}>About</h1>
      <p>This is the about Page</p>
      {data.map((datas, key) => (
        <Link href={"/users/" + datas.id}>
          <h3 index={key} key={datas.id}>
            {datas.name}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default about;

export const getStaticProps = async () => {
  const api = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await api.json();

  return {
    props: {
      data,
    },
  };
};
