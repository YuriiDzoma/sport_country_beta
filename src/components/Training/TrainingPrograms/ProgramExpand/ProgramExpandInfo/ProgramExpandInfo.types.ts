import { Program } from 'store/training-slice.types';

export type ProgramExpandInfoProps = {
  program: Program;
  isMyProfile: boolean;
  clientId: string | undefined;
};
