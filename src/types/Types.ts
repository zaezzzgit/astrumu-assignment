export interface iIssue {
  id: string;
  title: string;
  body: string;
}

export interface iOwnerRepo {
  id: string;
  name: string;
}

export interface RepoItem {
  id: string;
  name: string;
  description: string;
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
