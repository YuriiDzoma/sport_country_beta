import React from 'react';

import { TrainingNavbarProps } from './TrainingNavbar.types';
import TrainingNavbarLink from './TrainingNavbarLinkLink/TrainingNavbarLink';

const TrainingNavbar: React.FC<TrainingNavbarProps> = ({ user }) => {
  const trainingNavigation = [
    { id: 1, tittle: 'Complexes', url: '/training/complexes/' },
    { id: 2, tittle: 'Programs', url: `/training/programs/${user.id}/` },
    { id: 3, tittle: 'Wiki', url: '/training/wiki/' },
  ];
  return (
    <>
      {trainingNavigation.map((item) => (
        <TrainingNavbarLink key={item.id} to={item.url}>
          <span>{item.tittle}</span>
        </TrainingNavbarLink>
      ))}
    </>
  );
};

export default TrainingNavbar;
