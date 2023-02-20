import { User } from './users-slice.types';

export type profileState = {
  currentUser: null | User;
  isLoading: boolean;
};
