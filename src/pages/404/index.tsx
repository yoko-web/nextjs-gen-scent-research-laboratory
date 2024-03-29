/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Image404 from "public/static/animation/404-error.gif";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

const Custom404: NextPage = () => {
  return (
    <FluidLayout width="main">
      <PageSEO
        title={`Page Not Found- ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <PageTitle>ページが見つかりません</PageTitle>
      <div className="container p-3 text-lg">
        お探しのページが見つかりません。
        <br />
        サポートをご希望の場合は、
        <Link legacyBehavior href="/contact">
          <a className="font-bold text-[#830683]">コンタクトページ </a>
        </Link>
        よりお問い合わせください。
        <div className="flex justify-center">
          <Image alt="お探しのページが見つかりません" src={Image404} />
        </div>
      </div>
    </FluidLayout>
  );
};

export default Custom404;
