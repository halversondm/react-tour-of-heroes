# React Tour of Heroes

Using Angular 2's tutorial concepts to build a like application using React and TypeScript.

Follows Part 4 of the tutorial.  In this part of the tutorial Angular team demonstrated reusable services.  The purpose of the service was to develop a common way to get the heroes from an eventual backend.  With redux, I had already created a mocked version of the data away from the service code.  In this iteration, I added the ability for the UI to get the data from a backend.  In order to achieve that it was necessary to add isomorphic-fetch, es6-promise, and redux-thunk.  I also removed the original lite-server and changed to express.  The overall appearance of the UI did not change.

Documentation on Part 4
https://angular.io/docs/ts/latest/tutorial/toh-pt4.html

Live example of Part 3
https://angular.io/resources/live-examples/toh-4/ts/eplnkr.html