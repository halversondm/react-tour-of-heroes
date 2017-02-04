# React Tour of Heroes

Using Angular 2's tutorial concepts to build a like application using React and TypeScript.

Follows Part 5 of the tutorial.  In this part of the tutorial, we're adding routing to move around on the single page application.  In terms of React, this meant the addition of the react-router project.  Also, I discovered that out of the box React doesn't support a strong CSS scoping to the component mechanism.  I did notice that Angular does provide this mechanism.  In order to get it to work, I had to change the CSS to include an 'attribute selector' on all of the selectors already available.  Then for each HTML element I had to add an attribute starting with data- to maintain the scope.  I did see different solutions in open source, but they didn't seem as easy to implement as the attribute solution.

Documentation on Part 5
https://angular.io/docs/ts/latest/tutorial/toh-pt5.html

Live example of Part 5
https://angular.io/resources/live-examples/toh-5/ts/eplnkr.html