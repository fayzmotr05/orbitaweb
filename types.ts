export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  forWho: string;
  task: string;
  dontBuyIf: string;
}

export interface CaseStudy {
  title: string;
  niche: string;
  problem: string;
  solution: string;
  result: string;
  products: string[];
}
