import React, { useEffect, useState } from 'react'

import { IPost } from '../../interfaces/IPost'
import Post from '../Post'
import data from '../../data/data.json'
import styles from './index.module.css'

const Blog = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    if (localStorage.getItem('posts')) {
      setPosts(JSON.parse(localStorage.getItem('posts') || ''))
    } else {
      setPosts(data)
    }
  }, [])

  return (
    <div className={`flex flex-wrap pt4 pl4 pr4 ${styles.colorDiv}`}>
      <div className="w-100">
        <h1 className={styles.titulo}>&#128525; Blog Julia&apos;s Decor</h1>
      </div>
      <div className="w-100">
        <a href="/gerenciar-blog" className={styles.button}>
          Gerenciar Posts
        </a>
      </div>
      <div className="w-100 pt4 pl4 pr4">
        <div className="cf-ns nl2 nr2">
          {posts?.map((post, index) => (
            <div className="fl-ns w-50-ns" key={index}>
              <Post
                key={index}
                title={post.title}
                description={post.description}
                image={post.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
