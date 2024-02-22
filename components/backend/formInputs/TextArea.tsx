import React from 'react'

function TextArea({ label, name, placeholder }: any) {
  return (
    <div className='sm:col-span-2'>
      <label
        htmlFor={name}
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        {label}
      </label>
      <textarea
        id={name}
        className='block  w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 focus:border-0 dark:border-gray-600 dark:text-white'
        placeholder={placeholder}
      ></textarea>
    </div>
  )
}

export default TextArea
