import { clsx } from '../utils';
import { useStore } from '../store';
import React from 'react';

export default function DoctorBookMeeting() {
  const store = useStore();

  return (
    <div className="w-full h-full bg-secondary-1000">
      <main className="pt-2 grid gap-6 px-0 pb-6 bg-secondary-1000">
        <div>
          <h1 className="mt-2 mb-4 text-xl font-bold">Find a Doctor</h1>
          <div className="w-full max-w-[400px]">
            <input
              type="search"
              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring -mt-2 flex h-10 w-full rounded-md border border-secondary-700 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search by name or specialty"
            />
          </div>
        </div>
        <div className="grid gap-6 bg-secondary-1000">
          {store.doctors.map((e, index) => (
            <div
              key={e.name}
              className="bg-card text-card-foreground rounded-lg border border-secondary-700 shadow-sm"
              data-v0-t="card"
            >
              <div className="p-4">
                <div className="flex flex-col">
                  <div className="mb-4 flex flex-row items-center justify-between">
                    <img
                      src={e.avatar}
                      width="40"
                      height="40"
                      alt="Dr. Smith"
                      className="mx-2 aspect-square overflow-hidden rounded-full object-cover"
                    />
                    <div className="flex flex-1 flex-col pl-4">
                      <p className="text-md mb-0 font-semibold">Dr {e.name}</p>
                      <p className="mb-0 text-sm text-gray-500 dark:text-gray-400">
                        {e.dept}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => store.incStep(2)}
                    className={clsx(
                      'book-now relative cursor-pointer',
                      index === 0 ? 'bg-blue-600' : 'bg-gray-600',
                    )}
                  >
                    {index === 0 && store.currentStep == 1 && (
                      <div className="absolute -right-1 -top-1">
                        <span className="relative h-4 w-4">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75"></span>
                          <span className="relative inline-flex h-4 w-4 rounded-full bg-yellow-500"></span>
                        </span>
                      </div>
                    )}
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
