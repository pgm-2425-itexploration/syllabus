export interface Post {
  url: string;
  title: string;
  description: string;
  html: string | undefined;
  thumbnailUrl: string;
  date: {
    time: number;
    string: string;
  };
  author: {
    name: string;
    socials: {
      website: string;
      linkedin: string;
      github: string;
    }
  }
}

export interface Tutorial {
  url: string;
  title: string;
  synopsis: string;
  html: string | undefined;
  thumbnailUrl: string;
  date: {
    time: number
    string: string
  };
  author: {
    name: string;
    socials: {
      website: string;
      linkedin: string;
      github: string;
    }
  }
}