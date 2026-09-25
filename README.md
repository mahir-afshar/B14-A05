# Dev Stack Builder

## Description

Dev Stack Builder is a React-based web application that helps developers explore different development technologies and build their own personalized technology stack. Users can browse technologies, add them to their stack, and remove them when needed.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Hot Toast
- JSON

## Features

- Browse development technologies
- Build a personalized technology stack
- Add and remove technologies dynamically

---

# React Questions

 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.
It is used in React because it makes it easier to describe what the UI should look like.

2. What is the difference between props and state?

Props are used to send data from a parent component to a child component.
State is used to store data inside a component that can change.

3. What does the useState hook do, and where did you use it in this project?

useState is used to store data that can change in a React component.
I used it in my Techs component to store the technologies that the user selected.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used when we need to do something after a component renders, like fetching data.
It can be used to load JSON data from a file or API.

5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to know which item is which when a list changes.
This helps React update the list correctly.

6. What is conditional rendering?

Conditional rendering means showing something based on a condition.
For example, in my project, when the user has not selected any technology, I show:

Your stack is empty

When the user selects technologies, I show the selected technologies instead.   

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can send data to a child using props. The child can communicate with the parent by calling a function that the parent passed as a prop.
