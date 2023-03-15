import {Follower, User} from "store/users-slice.types";

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
  level: any;
  author: any;
  id: string;
  title: string;
  typeOf: string;
  days: Day[];
  comments: Comment[];
};


export type profileState = {
  currentUser: User | null;
  isLoading: boolean;
  myPrograms: Program[];
  myFollowers: Follower[];
  myFavoriteProgram: string | null;
  notifications: [] | null
};

