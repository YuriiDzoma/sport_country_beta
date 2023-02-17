export type User = {
  createdAt: string;
  id: string;
  displayName: string;
  surname: string;
  location: string;
  userPhoto: string;
  dateOfBirth: string;
  email: string;
};

export type UsersState = {
  users: User[];
  isLoading: boolean;
  error: string;
};
