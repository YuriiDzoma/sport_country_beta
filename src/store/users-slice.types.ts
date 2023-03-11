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
  id: string
  friendId: string;
}

export type UsersState = {
  users: User[];
  isLoading: boolean;
  error: string;
  userPrograms: Program[];
  userFollowers: Follower[];
  userFavoriteProgram: Favorite;
};


