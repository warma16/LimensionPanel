export interface Project {
  id: number;
  name: string;
  public: boolean;
  maintainer: number;
  admins: number[];
  description: string;
  members: number[];
  guests: number[];
  blackList: number[];
}