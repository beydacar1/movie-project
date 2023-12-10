import React from 'react';
import style from './style.module.css';

function Skeleton({width, height}) {
  return (
    <div className={style.skeleton} styles={{width , height}}>
      
    </div>
  )
}

export default Skeleton;
