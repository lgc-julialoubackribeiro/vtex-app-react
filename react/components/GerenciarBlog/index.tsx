import React, { useEffect, useState } from 'react'

import { IPost } from '../../interfaces/IPost'
import styles from './index.module.css'
import data from '../../data/data.json'

const GerenciarBlog = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [formData, setFormData] = useState({
    index: -1,
    title: '',
    description: '',
    image: '',
  })

  const handleChange = (event: any) => {
    const { name, value } = event.target

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const cleanData = () => {
    setFormData({
      index: -1,
      title: '',
      description: '',
      image: '',
    })
  }

  const editArray = () => {
    const { title, description, image } = formData

    posts[formData.index] = { title, description, image }
    setPosts(posts)
    localStorage.setItem('posts', JSON.stringify(posts))
    cleanData()
  }

  const addArray = () => {
    const { title, description, image } = formData

    setPosts([...posts, { title, description, image }])
    localStorage.setItem(
      'posts',
      JSON.stringify([...posts, { title, description, image }])
    )
    cleanData()
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    if (formData.index !== -1) {
      editArray()
    } else {
      addArray()
    }
  }

  const handleEdit = (post: IPost, index: number) => {
    setFormData({ ...post, index })
  }

  const handleDelete = (index: number) => {
    cleanData()
    posts.splice(index, 1)
    setPosts(posts)
    localStorage.setItem('posts', JSON.stringify(posts))
  }

  useEffect(() => {
    if (localStorage.getItem('posts')) {
      setPosts(JSON.parse(localStorage.getItem('posts') || ''))
    } else {
      setPosts(data)
      localStorage.setItem('posts', JSON.stringify(data))
    }
  }, [posts])

  return (
    <div className={`flex flex-wrap w-100 pa4 ${styles.colorDiv}`}>
      <div className="w-20-ns w-100">
        <h2 className={styles.subtitulo}>Cadastro de Post</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid' }}>
          <label htmlFor="title" className={styles.label}>
            Título
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.input}
            placeholder="Título"
            required
          />
          <label htmlFor="description" className={styles.label}>
            Descrição
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.input}
            placeholder="Descrição"
            required
          />
          <label htmlFor="image" className={styles.label}>
            Imagem
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className={styles.input}
            placeholder="Imagem Url"
            required
          />
          <input type="submit" className={styles.button} value="Enviar" />
        </form>
        <a
          href="/blog"
          className={styles.button}
          style={{ float: 'left', marginTop: 10 }}
        >
          &#x2190; Blog
        </a>
      </div>
      <div className={`w-80-ns w-100 pa5-ns pt5 ${styles.overflow}`}>
        <table className={`w-100 center ${styles.tabela}`}>
          <thead>
            <tr className={styles.cabecalho}>
              <th className="fw6 tl pa3">Título</th>
              <th className="fw6 tc pa3">Descrição</th>
              <th className="fw6 tc pa3">Imagem</th>
              <th className="fw6 tc pa3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((post, index) => (
              <tr key={index} className={styles.linha}>
                <td className={`tl ${styles.coluna}`}>{post.title}</td>
                <td className={`tj ${styles.coluna}`}>{post.description}</td>
                <td className={`tc ${styles.coluna}`}>
                  <img src={post.image} alt={post.title} width="50%" />
                </td>
                <td className={`tc ${styles.coluna}`}>
                  <button
                    className={styles.buttonAction}
                    onClick={() => handleEdit(post, index)}
                  >
                    Editar
                  </button>
                  <button
                    className={styles.buttonAction}
                    onClick={() => handleDelete(index)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default GerenciarBlog
