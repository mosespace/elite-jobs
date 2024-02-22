import React from 'react'

function TextInput({ label, type, name, placeholder }: any) {
  return (
    <div>
      <label
        htmlFor='title'
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className='block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 focus:ring-0 dark:border-gray-600 dark:text-white dark:placeholder-gray-400'
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextInput
