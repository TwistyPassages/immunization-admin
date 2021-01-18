export interface IQuestion {
  id: number;
  code: string;
  description: string;
  internal: boolean;
  answerOptions: IAnswer[];
}

export interface IAnswer {
  code: string;
  display: string;
};