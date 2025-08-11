export interface CounterItemProps {
  id: number;
  end: number;
  duration: number;
  icon: string;
  name: string;
  delay: string;
  brief: string;
}

export interface ProgressBarItemProps {
  id: number;
  percentage: string;
  name: string;
}

export interface SectionTitleItemProps {
  title: string;
  description: string;
}

export interface ResumeItemProps {
  id: number;
  title: string;
  period: string;
  brief: string;
  description: string;
  details: [string];
}

export interface ResumeProps {
  id: number;
  category: string;
  content: [ResumeItemProps];
}

export interface PortfolioItemProps {
  _id: string;
  name: string;
  title: string;
  category: string;
  thumnail: string;
  filter: string;
  description: string;
  images: [{ image: string }];
  private: boolean;
  projectUrl: string;
  projectDate: string;
}

export interface ServiceItemProps {
  id: number;
  delay: string;
  icon: string;
  name: string;
  brief: string;
}

export interface TestimonialItemProps {
  id: number;
  content: string;
  avatar: string;
  client: string;
  position: string;
  delay: string;
}

export interface BreadcrumbsItemProps {
  page: string;
  prevPage: string;
}
