import React from "react";
import Skeleton from "@/components/skeleton";
import styles from "./styles.module.css";

function MoviesSectionLoading() {
    return (
        <div className={styles.moviesSection}>
            <Skeleton height={36} width={128} />
            <div className={styles.movies}>
                {Array(5)
                    .fill(null)
                    .map((_, index) => (
                        <Skeleton key={index}  />
                    ))}
            </div>
        </div>
    );
}

export default MoviesSectionLoading;