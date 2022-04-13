import React from 'react';
import { useHistory } from 'react-router-dom';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';

export default function Quickstart() {
  const history = useHistory();
  const path = '/quickstart/pick-the-right-sdk/use-cases';

  const toQuickstart = () => {
    history.push(path);
  };

  if (window.location.pathname !== path)
    return (
      <button
        className="fixed bottom-[1.3rem] right-[5rem] z-50 h-12 w-12 cursor-pointer rounded-full bg-primary p-2 text-gray-100 shadow-md transition hover:text-white hover:shadow-xl"
        onClick={toQuickstart}
      >
        <QuestionMarkCircleIcon className="h-full w-full text-current" />
      </button>
    );
  return null;
}
