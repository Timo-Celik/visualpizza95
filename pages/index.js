import Head from "next/head";
import getTitle from "./../components/common/getTitle";

export default function Index({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="visualpizza95" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1 id="mainTitle">{title}</h1>
        <div className="socialBox">
          <a
            href="https://www.instagram.com/visualpizza95/"
            className="socialLink"
          >
            <i className="fab fa-instagram"></i>
            <p>visualpizza95</p>
          </a>
          <a href="https://twitter.com/visualpizza95" className="socialLink">
            <i className="fab fa-twitter"></i>
            <p>visualpizza95</p>
          </a>
          <a
            href="https://www.youtube.com/channel/UCHXFGqJpuisUjqCCU-B7MZw"
            className="socialLink"
          >
            <i className="fab fa-youtube"></i>
            <p>visualpizza95</p>
          </a>
          <a href="https://www.twitch.tv/visualpizza95" className="socialLink">
            <i className="fab fa-twitch"></i>
            <p>visualpizza95</p>
          </a>
          <a
            href="https://www.tiktok.com/@visualpizza95"
            className="socialLink"
          >
            <i className="fab fa-tiktok"></i>
            <p>visualpizza95</p>
          </a>
        </div>
        <div>
          <h2 id="teaser">More? Soon.</h2>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const title = getTitle();
  return {
    props: {
      title,
    },
  };
}
