
import css from "./assets/css.png";
import javascript from "./assets/javascript_logo.png";
import react from "./assets/react.png";
import python from "./assets/python-alt.png";
import img1 from "./assets/if_else_5fc3176c7b.jpg";
import img2 from "./assets/intro_c9cc87a9b3.jpg";
import img3 from "./assets/intro_c9cc87a9b3.jpg";
import img4 from "./assets/lists_101_6996e5acc4.jpg";
import img5 from "./assets/loops_101_608858b2e8.jpg";
import img6 from "./assets/operators_6fb101302f.jpg";
export const courses = [
    { id: 1, name: 'Python', description: 'Learn the basics of Python programming.', img: python },
    { id: 2, name: 'CSS', description: 'Master CSS for styling websites.', img: css },
    { id: 3, name: 'JavaScript', description: 'Understand the fundamentals of JavaScript.', img: javascript },
    { id: 4, name: 'React.js', description: 'Build dynamic user interfaces with React.', img: react },
    { id: 5, name: 'Node.js', description: 'Learn server-side development with Node.js.', img: img1 },
    { id: 6, name: 'English', description: 'Enhance your English language skills.', img3 },
];

export const courseTopics = {
    1: [
        { title: 'Introduction to Python', img: img1 },
        { title: 'Data Types and Variables', img: img2 },
        { title: 'Control Flow in Python', img: img3 },
    ],
    2: [
        { title: 'CSS Basics', img: img4 },
        { title: 'Box Model', img: img5 },
        { title: 'Flexbox and Grid Layouts', img: img6 },
    ],
    3: [
        { title: 'JavaScript Basics', img: img1 },
        { title: 'Functions and Scope', img: img2 },
        { title: 'Asynchronous JavaScript', img: img3 },
    ],
    4: [
        { title: 'Introduction to React', img: img4 },
        { title: 'Components and Props', img: img5 },
        { title: 'State Management', img: img6 },
    ],
    5: [
        { title: 'Introduction to Node.js', img: img1 },
        { title: 'Express.js Framework', img: img2 },
        { title: 'Working with Databases', img: img3 },
    ],
    6: [
        { title: 'Basic Grammar', img: img4 },
        { title: 'Vocabulary Building', img: img5 },
        { title: 'Conversation Skills', img: img6 },
    ],
};

export const topicContents = {
    1: {
        1: ' Introduction to Python - Learn the basics of Python, its syntax, and how to write your first Python program.',
        2: ' Data Types and Variables - Understand the different data types in Python, how to declare variables, and use them effectively.',
        3: 'Control Flow in Python - Explore how to control the flow of your programs using if statements, loops, and functions.',
    },
    2: {
        1: ' CSS Basics - Discover the fundamentals of CSS and how to style your web pages.',
        2: ' Box Model - Learn about the CSS box model and how padding, margins, and borders affect layout.',
        3: ' Flexbox and Grid Layouts - Understand modern layout techniques using Flexbox and CSS Grid.',
    },
    3: {
        1: ' JavaScript Basics - Dive into JavaScript, covering syntax, variables, and basic functions.',
        2: 'Functions and Scope - Learn about different types of functions in JavaScript and the concept of scope.',
        3: ' Asynchronous JavaScript - Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.',
    },
    4: {
        1: ' Introduction to React - Understand the core concepts of React and how to create your first React application.',
        2: 'Components and Props - Learn how to build reusable components and pass data through props.',
        3: ' State Management - Explore different ways to manage state in React applications.',
    },
    5: {
        1: ' Introduction to Node.js - Learn the basics of Node.js and how to build server-side applications.',
        2: 'Express.js Framework - Discover how to create web applications using the Express.js framework.',
        3: 'Working with Databases - Understand how to connect your Node.js applications to databases.',
    },
    6: {
        1: ' Basic Grammar - Focus on essential grammar rules for English learners.',
        2: 'Vocabulary Building - Strategies to expand your English vocabulary effectively.',
        3: ' Conversation Skills - Techniques for improving your conversation skills in English.',
    },
};