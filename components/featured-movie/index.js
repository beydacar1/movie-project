import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

function FeaturedMovie({ movie = {} , isCompact= true}) {
    const {poster_path , title, overview} = movie
  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <p className= {`${styles.overview} ${
        isCompact ? styles.overviewCompact : ''
      }`}>
            {overview}
        </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>Play</Link>
        <button className={styles.addButton}>
            <FaPlus/>
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image unoptimized src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} fill/>
      </div>
    </div>
  )
}

export default FeaturedMovie
