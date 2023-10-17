interface SanityBody {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

interface Image {
  _type: "image";
  asset: {
    _type: string;
    _ref: "reference";
    metadata: {
      lqip: string;
      dimensions: {
        aspectRatio: number;
        height: number;
        width: number;
      };
    };
    url: string;
  };
}

export interface Social extends SanityBody {
  title: string;
  link: string;
}

export interface Project extends SanityBody {
  title: string;
  summary: string;
  linkToProject: string;
  technologies: Technology[];
  image: Image;
}

export interface Skill extends SanityBody {
  skillTitle: string;
  progress: number;
  skillImage: Image;
}

export interface Technology extends Skill {}

export interface Experience extends SanityBody {
  jobTitle: string;
  companyName: string;
  companyLogo: Image;
  dateStarted: string;
  dateEnded: string;
  isCurrentlyWorkingHere: boolean;
  technologies: Technology[];
  jobPoints: string[];
}

export interface PageInfo extends SanityBody {
  name: string;
  role: string;
  heroImage: Image;
  backgroundInformation: string;
  profilePicture: Image;
  phoneNumber: string;
  email: string;
  address: string;
  socials: Social[];
}
