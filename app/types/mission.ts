export interface Mission {
  id: number;
  name: string;
  description: string;
  present: number;
  assignees: number[];
  contributors: number[];
  urgency: number;
  status: number;
  createdAt: string;
  updatedAt: string;
  partition: number;
}