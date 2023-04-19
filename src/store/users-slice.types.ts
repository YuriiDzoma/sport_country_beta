import {Program} from "store/profile-slice.types";

export type User = {
  country: string,
  region: string,
  city: string,
  isFriend: boolean;
  createdAt: string;
  id: string;
  displayName: string;
  photoURL: string;
  email: string;
  isTrainer: boolean;
  followerId?: string;
};

export type Favorite = {
  programId: string | null;
  id: string | null
}

export type Follower = {
  id: string;
  friendId: string;
}

export type Publication = {
  author: string;
  content: string;
  id: string;
  date: number;
  postId: string;
  pictures: string[];
}

export type UsersState = {
  userPublications: Publication[];
  users: User[];
  isLoading: boolean;
  error: string;
  userPrograms: Program[];
  userFollowers: Follower[];
  userFavoriteProgram: Favorite;
};


