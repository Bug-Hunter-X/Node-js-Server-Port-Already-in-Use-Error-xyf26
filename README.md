# Node.js Server Port Already in Use Error

This repository demonstrates a common error in Node.js applications where the server fails to start because the specified port is already in use.  It also provides a solution to gracefully handle this situation.

## Bug

The `bug.js` file contains a simple Express.js server.  If you attempt to run this server while port 3000 is occupied by another process, it will throw an error.

## Solution

The `bugSolution.js` file demonstrates how to check for port availability before attempting to start the server, preventing the error.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js` (This may or may not throw an error depending on port 3000 availability)
3. Run `node bugSolution.js` (This should not throw an error, even if port 3000 is in use)

## Technologies Used

* Node.js
* Express.js