import { Day } from 'store/training-slice.types';

export type ProgramDayProps = {
  day: Day;
  isMyProfile: boolean;
  clientId: string | undefined;
};
