import React from 'react';

import { TrainingNavbarProps } from './TrainingNavbar.types';
import TrainingNavbarLink from './TrainingNavbarLinkLink/TrainingNavbarLink';

const TrainingNavbar: React.FC<TrainingNavbarProps> = ({ user }) => {
  const trainingNavigation = [
    { id: 1, tittle: 'Complexes', url: '/training/complexes/' },
    { id: 2, tittle: 'Training Programs', url: `/training/training_programs/${user.id}/` },
    { id: 3, tittle: 'Training Wiki', url: '/training/training_wiki/' },
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
