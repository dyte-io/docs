import { clsx } from '../utils';
import { useStore } from '../store';
import React from 'react';

export default function DoctorMeetingPreJoin() {
  const store = useStore();

  const doctor = store.doctors[0];

  return (
    <div className="w-full h-full bg-secondary-1000">
      <main className="pt-2 grid gap-6 px-0 pb-6 bg-secondary-1000">
        <div className="flex flex-col">
          <span className="mt-2 mb-1 text-md font-bold text-wrap">
            Time for your appointment
          </span>
          <span className="text-md font-semibold text-gray-400">6:00 PM</span>
        </div>
        <div className="grid bg-secondary-1000">
          <div
            key={doctor.name}
            className="bg-card text-card-foreground rounded-lg border border-secondary-700 shadow-sm"
            data-v0-t="card"
          >
            <div className="p-4">
              <div className="flex flex-col">
                <div className="mb-4 flex flex-row items-center justify-between">
                  <img
                    src={doctor.avatar}
                    width="40"
                    height="40"
                    alt="Dr. Smith"
                    className="mx-2 aspect-square overflow-hidden rounded-full object-cover"
                  />
                  <div className="flex flex-1 flex-col pl-4">
                    <p className="text-md mb-0 font-semibold">
                      Dr {doctor.name}
                    </p>
                    <p className="mb-0 text-sm text-gray-500 dark:text-gray-400">
                      {doctor.dept}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => store.incStep(6)}
                  className={clsx(
                    'book-now relative cursor-pointer bg-blue-600',
                  )}
                >
                  {store.currentStep == 5 && (
                    <div className="absolute -right-1 -top-1">
                      <span className="relative h-4 w-4">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75"></span>
                        <span className="relative inline-flex h-4 w-4 rounded-full bg-yellow-500"></span>
                      </span>
                    </div>
                  )}
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
