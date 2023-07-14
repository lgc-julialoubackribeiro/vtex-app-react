import React from 'react'

import { IPost } from '../../interfaces/IPost'
import styles from './index.module.css'

const Post = ({ title, description, image }: IPost) => {
  return (
    <div className={`cf ${styles.colorDiv}`}>
      <div className="fl w-40-ns">
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={`fl w-60-ns pl4-ns ${styles.image}`}>
        <h2 className={styles.imgTitle}>{title}</h2>
        <p className={styles.imgDescription}>{description}</p>
        <button className={styles.button}>Ver mais</button>
      </div>
    </div>
  )
}

export default Post
