import React, { useState } from 'react'
import axios from 'axios'

export default function NewPost() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // console.log(event.currentTarget.elements)
    // console.log(event.currentTarget.elements[0])
    // console.log(title)
    // console.log(desc)
    const res = await axios.post('/api/posts', { title, description })
    console.log(res.data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Post Title</label>
      <input 
        type="text" 
        id="title" 
        name="title"
        value={title}
        onChange={event => setTitle(event.target.value)} 
        required />

      <label htmlFor="description">Description</label>
      <textarea 
        id="description" 
        name="description"
        value={description}
        onChange={event => setDescription(event.target.value)} 
        required />

      <button type="submit">Submit</button>
    </form>
  )
}