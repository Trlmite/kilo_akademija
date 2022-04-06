import React from 'react'
import styles from './user-review.module.css'
import { ReactComponent as ReviewStar } from '../../svg/reviewStar.svg'


const UserReview = ({ user, age, location, stars, review, userImg}) => {
  return (
    <div className={styles.container}>
        <div>
            <p className={styles.title}>{user}, {age}</p>
            <p className={styles.subText}>{location}</p>
        </div>
        <div className={styles.starContainer}>
            <ReviewStar/><ReviewStar/><ReviewStar/><ReviewStar/><ReviewStar/>
        </div>
        <div className={styles.imageContainer}>
            <img src={userImg} alt="User"></img>
        </div>
        <div className={styles.text}>
        {review}
        </div>
    </div>
  )
}

export default UserReview