/* eslint-disable @typescript-eslint/naming-convention*/
import { PageSubTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";

export default function ApplicationId({ application }) {
  return (
    <FixedLayout>
      <PageSEO title={`Application - ${siteMetadata.author}`} description={siteMetadata.description} />
      <main>
        <PageSubTitle>{application.title}</PageSubTitle>
        {/* <p>{application.publishedAt}</p> */}
        <div
          dangerouslySetInnerHTML={{
            __html: `${application.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "application" });

  const paths = data.contents.map((content) => {
    return `/application/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "application", contentId: id });

  return {
    props: {
      application: data,
    },
  };
};
