import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from 'hooks/redux';
import {selectProgramById, selectUserProgramById} from 'store/selectors';

import ProgramExpandInfo from './ProgramExpandInfo/ProgramExpandInfo';
import {Context} from "components/Context/Context";


const ProgramExpand= () => {
  const { id } = useParams();
  const {isMyProfile}: any = useContext(Context)
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
          <ProgramExpandInfo program={program} />
          {/*<ProgramExpandComments />*/}
        </>
      )}
    </div>
  );
};
export default ProgramExpand;
