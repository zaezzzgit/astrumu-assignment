export interface iIssue {
  id: string;
  title: string;
  body: string;
  url: string;
}

export interface iOwnerRepo {
  id: string;
  name: string;
}

export interface RepoItem {
  id: string;
  name: string;
  description: string;
  primaryLanguage: {
    name: string;
  };
}

export class User {
  name: string;
  email: string;
  reposCount: string;
  constructor() {
    this.name = "";
    this.email = "";
    this.reposCount = "0";
  }
}
