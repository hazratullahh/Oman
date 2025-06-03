"use client";

import React from "react"; 

const SkeletonLoader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
        <div className="flex flex-col items-center gap-4">
          {/* Spinner */}
          <svg
            className="h-12 w-12 animate-spin text-blue-600 dark:text-blue-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-label="Loading"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          {/* Optional loading text */}
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Loading…
          </p>
        </div>
      </div>
    );
}

export default SkeletonLoader;