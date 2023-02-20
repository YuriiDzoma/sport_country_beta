export type User = {
  createdAt: string;
  id: string;
  displayName: string;
  photoURL: string;
  email: string;
  uid: string;
};

export type UsersState = {
  users: User[];
  isLoading: boolean;
  error: string;
};
