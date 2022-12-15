import React, { useState } from 'react'
import axios from 'axios'

export default function NewPost() {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(event.currentTarget.elements)
    console.log(event.currentTarget.elements[0])
    console.log(title)
    console.log(desc)
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

      <label htmlFor="desc">Description</label>
      <textarea 
        id="desc" 
        name="desc"
        value={desc}
        onChange={event => setDesc(event.target.value)} 
        required />

      <button type="submit">Submit</button>
    </form>
  )
}