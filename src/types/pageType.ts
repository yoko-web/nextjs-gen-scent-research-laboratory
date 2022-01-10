// Product ページ共通型オブジェクト
type BasicPageObject = {
  body: HTMLAnchorElement;
  button: string;
  button_desc: string;
  createdAt: Date;
  description: string;
  id: string;
  image: { url: string; height: number; width: number };
  publishedAt: Date;
  revisedAt: Date;
  title: string;
  updatedAt: Date;
};

export type ProductProps = {
  odor: [BasicPageObject];
  other: [BasicPageObject];
  sample: [
    BasicPageObject & {
      charm: {
        height: number;
        url: string;
        width: number;
      };
      product_title: string;
    }
  ];
  software: [
    BasicPageObject & {
      product_title: string;
      subtitle: string;
    }
  ];
  software2: [
    BasicPageObject & {
      product_title: string;
      subtitle: string;
    }
  ];
};

// Productページ以外の共通型定義（リスト用
export type BasicProps = {
  data: [
    {
      body: HTMLAnchorElement;
      createdAt: Date;
      description: string;
      id: string;
      publishedAt: Date;
      revisedAt: Date;
      title: string;
      updatedAt: Date;
    }
  ];
};

// Productページ以外の共通型定義（オブジェクト用
export type BasicObjextProps = {
  data: {
    body?: HTMLAnchorElement;
    createdAt: Date;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    updatedAt: Date;
  };
};
