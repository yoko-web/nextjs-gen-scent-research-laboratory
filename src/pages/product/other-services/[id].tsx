/* eslint-disable @typescript-eslint/naming-convention*/
import type { NextPage } from "next";
import { ProductTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";

type Props = {
  data: string;
};

const OtherId: NextPage<Props> = (props: any) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`他サービス - ${siteMetadata.author}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <main>
        <ProductTitle>
          {props.other.title}
          <br />
          {props.other.subtitle}
        </ProductTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.other.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
};

export default OtherId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "other-services" });

  const paths = data.contents.map((content: any) => {
    return `/product/other-services/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "other-services", contentId: id });

  return {
    props: {
      other: data,
    },
  };
};
