export type HomeProps = {
  data: {
    body: HTMLAnchorElement;
    createdAt: Date;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    updatedAt: Date;
  };
};

export type ProductProps = {
  odor: {
    description: string;
    id: string;
    image: { url: string; height: number; width: number };
    title: string;
  };
  other: {
    description: string;
    id: string;
    image: { url: string; height: number; width: number };
    note: string;
    title: string;
  };
  sample: {
    description: string;
    id: string;
    image: { url: string; height: number; width: number };
    title: string;
    product_title: string;
  };
  software: {
    description: string;
    id: string;
    image: { url: string; height: number; width: number };
    title: string;
    subtitle: string;
    product_title: string;
  };
  software2: {
    description: string;
    id: string;
    image: { url: string; height: number; width: number };
    title: string;
    subtitle: string;
    product_title: string;
  };
};

export type ApplicationProps = {
  application: [
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

export type PrivateProps = {
  data: {
    body?: HTMLAnchorElement;
    createdAt: Date;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    updatedAt: Date;
  };
};

export type SoftwareProps = {
  software: {
    body: HTMLAnchorElement;
    button: string;
    button_desc: string;
    createdAt: Date;
    description: string;
    description_body: string;
    description_body2: string;
    image: {
      height: number;
      url: string;
      width: number;
    };
    produced_by: string;
    product_title: string;
    publishedAt: Date;
    revisedAt: Date;
    subtitle: string;
    title: string;
    updatedAt: Date;
  };
};
export type Software2Props = {
  software2: {
    body: HTMLAnchorElement;
    button: string;
    button_desc: string;
    createdAt: Date;
    description: string;
    description_body: string;
    image: {
      height: number;
      url: string;
      width: number;
    };
    produced_by: string;
    product_title: string;
    publishedAt: Date;
    revisedAt: Date;
    subtitle: string;
    title: string;
    updatedAt: Date;
  };
};

export type SampleProps = {
  sample: {
    body: HTMLAnchorElement;
    button: string;
    button_desc: string;
    charm: {
      height: number;
      url: string;
      width: number;
    };
    charm_body: {
      height: number;
      url: string;
      width: number;
    };
    createdAt: Date;
    description: string;
    description_body: string;
    image: {
      height: number;
      url: string;
      width: number;
    };
    produced_by: string;
    product_title: string;
    publishedAt: Date;
    revisedAt: Date;
    subtitle: string;
    title: string;
    updatedAt: Date;
  };
};

export type OdorProps = {
  odor: {
    body: HTMLAnchorElement;
    button: string;
    button_desc: string;
    createdAt: Date;
    description: string;
    image: {
      height: number;
      url: string;
      width: number;
    };
    produced_by: string;
    product_title: string;
    publishedAt: Date;
    revisedAt: Date;
    subtitle: string;
    title: string;
    updatedAt: Date;
  };
};

export type OtherProps = {
  other: {
    body: HTMLAnchorElement;
    button: string;
    button_desc: string;
    createdAt: Date;
    description: string;
    image: {
      height: number;
      url: string;
      width: number;
    };
    note: string;
    produced_by: string;
    product_title: string;
    publishedAt: Date;
    revisedAt: Date;
    subtitle: string;
    title: string;
    updatedAt: Date;
  };
};
export type NewsProps = {
  news: {
    body: HTMLAnchorElement;
    createdAt: Date;
    description: string;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    updatedAt: Date;
  };
};
