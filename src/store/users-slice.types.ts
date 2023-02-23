export type User = {
  createdAt: string;
  id: string;
  displayName: string;
  photoURL: string;
  email: string;
  isTrainer: boolean;
};

export type UsersState = {
  users: User[];
  isLoading: boolean;
  error: string;
};
