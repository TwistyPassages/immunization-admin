export interface IQuestion {
  id: number;
  category: string;
  code: string;
  description: string;
  internal: boolean;
  answerStyle: string;
  answerOptions: IAnswer[];
}

export interface IAnswer {
  code: string;
  display: string;
}
