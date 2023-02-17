import React from 'react';

import preloader from 'assets/img/Spinner.svg';

import classes from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <img src={preloader} alt="" />
    </div>
  );
};

export default Preloader;
