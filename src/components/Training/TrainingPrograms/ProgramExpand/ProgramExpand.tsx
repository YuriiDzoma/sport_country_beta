import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from 'hooks/redux';
import {selectProgramById, selectUserProgramById} from 'store/selectors';

import ProgramExpandInfo from './ProgramExpandInfo/ProgramExpandInfo';

type ProgramExpandProps = {
  isMyProfile: boolean
  clientId: string | undefined
}

const ProgramExpand: React.FC<ProgramExpandProps> = ({clientId, isMyProfile}) => {
  const { id } = useParams();
  let program
  if (isMyProfile) {
    program = useAppSelector((state) => selectProgramById(state, id));
  } else {
    program = useAppSelector((state) => selectUserProgramById(state, id));
  }

  return (
    <div>
      {program && id && (
        <>
          <ProgramExpandInfo clientId={clientId} isMyProfile={isMyProfile} program={program} />
          {/*<ProgramExpandComments />*/}
        </>
      )}
    </div>
  );
};
export default ProgramExpand;
