import React, { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useSession } from 'next-auth/react'

export default function EditPostDialog({post}: any) {

  const router = useRouter()
  const session = useSession()

  let [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState(post.title)
  const postId = post.id
  console.log(`post.title: ${post.title}`)
  console.log(`title: ${title}`)
  const [newDescription, setNewDescription] = useState(post.description)
  const [subreddit, setSubreddit] = useState(post.subreddit)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // const res = await axios.post('/api/posts', { title, description, subreddit })
    // console.log(res.data)
    // closeModal()
    // router.reload()
    console.log(`[handleSubmit][description]: ${newDescription}`)

    const res = await axios.put('/api/posts', { postId, newDescription })
    console.log(`res: ${res}`)
    console.log(`res.data: ${res.data}`)
    router.push('/')
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  console.log(post)

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-reddit-orange px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Edit post
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* backdrop rendered as a fixed sibling to the panel container */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          {/* full screen container to center the panel */}
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className='w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as="h3"
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Edit your post
                  </Dialog.Title>
                  <div className='mt-2'>
                    <form onSubmit={handleSubmit}>
                      <input 
                        type="text" 
                        id="title" 
                        name="title"
                        className='bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        placeholder='Title'
                        minLength={1}
                        maxLength={300}
                        value={title}
                        onChange={event => setTitle(event.target.value)} 
                        disabled />

                      <textarea 
                        id="newDescription" 
                        name="newDescription"
                        rows={4}
                        className="my-2.5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder='Text (optional)'
                        value={newDescription}
                        onChange={event => setNewDescription(event.target.value)} 
                        required />

                      <div className='relative w-full'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                          <p className='text-sm text-gray-300'>r/</p>
                        </div>
                        <input 
                          type="text" 
                          id="subreddit" 
                          name="subreddit"
                          className='bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
                          p-2.5 pl-6'
                          placeholder='Subreddit'
                          value={subreddit}
                          onChange={event => setSubreddit(event.target.value)} 
                          pattern="[a-zA-Z0-9\_]{3,21}"
                          disabled />
                      </div>

                      <button
                       type="submit"
                       className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}