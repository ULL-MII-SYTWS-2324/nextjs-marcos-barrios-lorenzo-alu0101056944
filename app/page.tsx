'use client'

import { useCompletion } from 'ai/react';

import './globals.css'

export default function SloganGenerator() {
  const {
        isLoading,
        completion,
        input,
        handleInputChange,
        handleSubmit
      }
      = useCompletion();

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      <form onSubmit={handleSubmit}>
        <input
          className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2 dark:text-black"
          value={input}
          placeholder="Describe your business..."
          onChange={handleInputChange}
        />
        <button
          disabled={isLoading}
          className='fixed bottom-0 ml-100 border border-gray-300 rounded mb-8 shadow-xl p-2'
        >
          Send
        </button>
      </form>
      {completion ? (
        <div className="whitespace-pre-wrap my-4">{completion}</div>
      ) : (
        <div>Enter a business description and click enter to generate slogans.</div>
      )}
    </div>
  );
}