export interface Post {
  url: string;
  title: string;
  description: string;
  html: string | undefined;
  thumbnailUrl: string;
  date: {
    time: number;
    string: string;
  }
}

export interface Tutorial {
  url: string;
  title: string;
  description: string;
  html: string | undefined;
  thumbnailUrl: string;
  date: {
    time: number
    string: string
  }
}