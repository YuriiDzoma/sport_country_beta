export type Comment = {
  id: number;
  comment: string;
  date: string;
};

export type Exercise = {
  id: number;
  name: string;
};

export type ExercisesProcess = {
  exerciseNumber: number;
  weight: string;
};

export type Training = {
  date: string;
  weights: ExercisesProcess[];
};

export type Day = {
  day: number;
  exercises: Exercise[];
  workHistory: Training[];
  workProcess: Training;
};

export type Program = {
  id: string;
  title: string;
  typeOf: string;
  days: Day[];
  comments: Comment[];
};

export type profileState = {
  currentUser: null | string;
  isLoading: boolean;
  myPrograms: Program[];
  // isTrainer: boolean;
};

