/* eslint-disable @typescript-eslint/naming-convention*/
import type { NextPage } from "next";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";

type Props = {
  sample: string;
};

const SampleId: NextPage<Props> = (props: any) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`GC-MS備品・におい分析用製品・サンプル - ${siteMetadata.author}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />

      <main>
        <div className="mt-10 mb-12 text-2xl font-bold leading-relaxed md:text-3xl">
          <div className="">{props.sample.title}</div>
          <div className="text-xl md:text-2xl">{props.sample.product_title}</div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.sample.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
};

export default SampleId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "sample" });

  const paths = data.contents.map((content: any) => {
    return `/product/sample/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "sample", contentId: id });

  return {
    props: {
      sample: data,
    },
  };
};
