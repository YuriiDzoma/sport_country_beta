import { Day } from 'store/training-slice.types';

export type ProgramDaysListProps = {
  itemDays: Day[];
  isMyProfile: boolean;
  clientId: string | undefined;
};
