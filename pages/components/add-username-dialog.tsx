import React, { useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function AddUsernameDialog() {
  const [username, setUsername] = useState('')
  const [isOpen, setIsOpen] = useState(true)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('inside handleSubmit')
    
    const res = await axios.post('/api/users', { username })
    console.log(res.data)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    console.log(username)
  }, [username])

  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog open={isOpen} onClose={() => {}} as="div" className="relative z-20">
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
                    Enter a username
                  </Dialog.Title>
                  <div className='mt-2'>
                    <form onSubmit={handleSubmit}>
                      <input 
                        type="text" 
                        id="username" 
                        name="username"
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        placeholder='username'
                        value={username}
                        onChange={event => setUsername(event.target.value)} 
                        required />

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
  )
}