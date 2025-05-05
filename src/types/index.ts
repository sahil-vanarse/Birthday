export interface Photo {
  id: number;
  url: string;
  caption: string;
}

export interface Wish {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: string;
}