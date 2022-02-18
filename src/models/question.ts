export interface IQuestion {
  id: number;
  name: string;
  category: string;
  difficulty: string;
  multipleAnswer: boolean;
  options: Array<IOption>;
}

export interface IOption {
  name: string;
  correct: boolean;
}
