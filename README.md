# React useEffect Hook Memory Leak

This repository demonstrates a common error in React applications involving the `useEffect` hook: forgetting to include a cleanup function to clear intervals or timeouts when a component unmounts. This can lead to memory leaks and unexpected behavior.

## Problem

The `bug.js` file contains a component that uses `useEffect` to update a counter every second. However, it omits the crucial cleanup function that's needed to stop the interval when the component is no longer rendered.  This results in the interval continuing to run in the background even after the component is unmounted. 

## Solution

The `bugSolution.js` file provides a corrected version of the component.  The cleanup function now includes `clearInterval(intervalId)` to properly stop the interval when the component is unmounted, preventing memory leaks and improving the application's stability.

## How to run:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies (if any).
4. Run `npm start` to start the development server.