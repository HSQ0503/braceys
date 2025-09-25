export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
  };
  content: string;
  slug?: string;
};

export interface FrontMatter {
  title: string;
  meta_title?: string;
  description?: string;
  image?: string;
  date?: string;
  draft?: boolean;
  [key: string]: any;
}

export interface Post {
  frontmatter: BlogFrontMatter;
  slug?: string;
  content: string;
}

export interface BlogFrontMatter extends FrontMatter {
  author: string;
  categories: string[];
  tags: string[];
  date: string;
}

export interface SectionContent {
  frontmatter: SectionFrontMatter;
  content: string;
}

export interface SectionFrontMatter extends FrontMatter {
  subtitle?: string;
  enable?: boolean;
  button?: Button;
}

export interface Button {
  enable: boolean;
  label: string;
  link: string;
}

export interface HeroSection extends SectionFrontMatter {
  images?: string[];
  buttons?: {
    label: string;
    link: string;
    primary?: boolean;
  }[];
}

export interface FeatureSection extends SectionFrontMatter {
  feature_list?: {
    title: string;
    description: string;
    icon?: string;
  }[];
}

export interface PricingSection extends SectionFrontMatter {
  plans?: PricingPlan[];
  plans_labels?: string[];
}

export interface PricingPlan {
  title: string;
  description?: string;
  price_monthly?: string;
  price_yearly?: string;
  price_prefix?: string;
  price_description_monthly?: string;
  price_description_yearly?: string;
  features?: string[];
  button?: Button;
  badge?: {
    enable: boolean;
    label: string;
  };
}

export interface FaqSection extends SectionFrontMatter {
  list?: {
    title: string;
    description: string;
    active?: boolean;
  }[];
}

export interface TestimonialSection extends SectionFrontMatter {
  testimonials?: {
    name: string;
    designation: string;
    avatar: string;
    content: string;
  }[];
}
