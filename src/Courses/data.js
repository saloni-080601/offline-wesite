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
  {
    id: 1,
    title: "HTML Basics",
    description: "Creating high-quality content for HTML involves a combination of structure, semantics, accessibility, and user experience. Here are some best practices to consider when crafting HTML content:",
    image: "https://c7.alamy.com/comp/DWJC6N/html-against-futuristic-black-and-blue-background-DWJC6N.jpg",
    topics: [
      {
        id: 1,
        title: "Introduction to HTML",
        description: "An overview of HTML.",
        image: img4,
        content: {
          what: "HTML (Hypertext Markup Language) is the standard markup language for creating web pages.",
          why: "It provides the structure of a webpage, allowing browsers to render it correctly.",
          qa: [
            { question: "What does HTML stand for?", answer: "HTML stands for Hypertext Markup Language." },
            { question: "Why is HTML important?", answer: "HTML is crucial for building web pages and applications." },
          ],
        },
      },
      {
        id: 2,
        title: "What is HTML",
        description: "Definition and usage of HTML.",
        image: img1,
        content: {
          what: "HTML is a markup language that uses tags to describe the structure of a webpage.",
          why: "It's important because it enables the creation of structured documents on the web.",
          qa: [
            { question: "What are tags in HTML?", answer: "Tags are special codes that define elements in HTML." },
            { question: "Can HTML be used for web design?", answer: "Yes, HTML is used alongside CSS for web design." },
          ],
        },
      },
      {
        id: 19,
        title: "HTML File Path",
        description: "Understanding file paths in HTML.",
        image: img2,
        content: {
          what: "File paths in HTML indicate the location of files such as images, scripts, or stylesheets.",
          why: "Correct file paths ensure that resources are properly linked and displayed on a webpage.",
          qa: [
            { question: "What is a relative path?", answer: "A relative path refers to a location relative to the current document." },
            { question: "What is an absolute path?", answer: "An absolute path refers to the complete URL of the file." },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    title: "CSS Essentials",
    description: "Creating high-quality content in CSS involves understanding its capabilities, best practices, and techniques for effective styling. Here’s a comprehensive overview of best practices and key topics in CSS:",
    image: css,
    topics: [
      {
        id: 1,
        title: "CSS Selectors",
        description: "Learn about different CSS selectors.",
        image: img4,
        content: {
          what: "CSS selectors are patterns used to select the elements you want to style.",
          why: "Selectors are crucial for targeting specific elements and applying styles to them.",
          qa: [
            { question: "What is a class selector?", answer: "A class selector selects elements with a specified class." },
            { question: "What is an ID selector?", answer: "An ID selector targets a unique element with a specific ID." },
          ],
        },
      },
      {
        id: 5,
        title: "CSS Box Model",
        description: "Understanding the CSS box model.",
        image: img5,
        content: {
          what: "The CSS box model describes the rectangular boxes generated for elements in the document tree.",
          why: "Understanding the box model is essential for layout design and element spacing.",
          qa: [
            { question: "What does the box model consist of?", answer: "The box model consists of margins, borders, padding, and the actual content." },
            { question: "How can padding affect the box model?", answer: "Padding increases the space inside the border, affecting the overall size of the element." },
          ],
        },
      },
    ],
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    description: "Creating high-quality content about JavaScript involves covering its fundamental concepts, advanced features, best practices, and real-world applications. Here’s a comprehensive overview of essential topics and best practices for JavaScript:",
    image: javascript,
    topics: [
      {
        id: 1,
        title: "Introduction to JavaScript",
        description: "Getting started with JavaScript.",
        image: img6,
        content: {
          what: "JavaScript is a high-level programming language used to create dynamic web content.",
          why: "It enables interactive features on websites, enhancing user experience.",
          qa: [
            { question: "What is JavaScript used for?", answer: "JavaScript is used for creating interactive effects within web browsers." },
            { question: "Is JavaScript a client-side language?", answer: "Yes, JavaScript is primarily a client-side scripting language." },
          ],
        },
      },
      {
        id: 2,
        title: "Loop and Variable Data Types",
        description: "Understanding loops and variable data types in JavaScript.",
        image: img3, // Replace with the appropriate image for this topic
        content: {
          what: "JavaScript provides different types of variables (let, const, var) and control structures like loops.",
          why: "Loops allow you to execute a block of code multiple times, and understanding variable types is crucial for managing data effectively.",
          qa: [
            { question: "What are the different types of variables in JavaScript?", answer: "The main variable types are let, const, and var." },
            { question: "What is a loop?", answer: "A loop is a control structure that repeats a block of code as long as a specified condition is true." },
          ],
        },
      },
      {
        id: 3,
        title: "Functions and Arrays",
        description: "Mastering functions and array manipulation in JavaScript.",
        image: img4, // Replace with the appropriate image for this topic
        content: {
          what: "Functions are reusable blocks of code, and arrays are used to store multiple values in a single variable.",
          why: "Understanding functions and arrays is essential for writing efficient and organized code.",
          qa: [
            { question: "What is a function in JavaScript?", answer: "A function is a block of code designed to perform a particular task." },
            { question: "What is an array?", answer: "An array is a data structure that can hold multiple values under a single name." },
          ],
        },
      },
      {
        id: 5,
        title: "Asynchronous JavaScript",
        description: "Understanding promises and async/await.",
        image: img2,
        content: {
          what: "Asynchronous JavaScript allows execution of code without blocking the main thread.",
          why: "It is crucial for handling tasks like network requests without freezing the user interface.",
          qa: [
            { question: "What are promises in JavaScript?", answer: "Promises are objects that represent the eventual completion (or failure) of an asynchronous operation." },
            { question: "What is async/await?", answer: "Async/await is a syntactic sugar for working with promises, making code easier to read." },
          ],
        },
      },
    ],
  },
  {
    id: 4,
    title: "React Basics",
    description: "Creating high-quality content in React involves understanding its core concepts, best practices, and how to structure applications effectively. Here’s a comprehensive overview of best practices and key topics in React.js:",
    image: react,
    topics: [
      {
        id: 1,
        title: "Introduction to React.js",
        description: "Getting started with React.",
        image: img1,
        content: {
          what: "React is a JavaScript library for building user interfaces.",
          why: "It allows developers to create large web applications that can change data, without reloading the page.",
          qa: [
            { question: "What is a component in React?", answer: "A component is a reusable piece of UI that can manage its own state." },
            { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that looks similar to XML." },
          ],
        },
      },
      {
        id: 2,
        title: "Components and Props",
        description: "Understanding the building blocks of React applications.",
        image: img2,
        content: {
          what: "Components are the heart of a React application, allowing you to encapsulate logic and UI.",
          why: "Props are how data is passed from parent to child components.",
          qa: [
            { question: "What are props?", answer: "Props are short for properties and are used to pass data from one component to another." },
            { question: "How do you define a component?", answer: "You can define a component as a JavaScript function or class." },
          ],
        },
      },
      {
        id: 3,
        title: "State Management with Hooks",
        description: "Using hooks to manage state in functional components.",
        image: img3,
        content: {
          what: "Hooks allow you to use state and other React features without writing a class.",
          why: "They simplify component logic and allow for cleaner code.",
          qa: [
            { question: "What is useState?", answer: "useState is a hook that lets you add state to your functional components." },
            { question: "What is useEffect?", answer: "useEffect allows you to perform side effects in function components." },
          ],
        },
      },
      {
        id: 4,
        title: "Understanding Redux",
        description: "A predictable state container for JavaScript apps.",
        image: img4,
        content: {
          what: "Redux is a state management library for JavaScript applications.",
          why: "It helps manage the application state in a predictable way, making it easier to debug and test.",
          qa: [
            { question: "What are actions in Redux?", answer: "Actions are plain JavaScript objects that describe what happened in the application." },
            { question: "What is a reducer?", answer: "Reducers are functions that determine how the application's state changes in response to actions." },
          ],
        },
      },
      {
        id: 5,
        title: "Handling Events in React",
        description: "Understanding event handling in React applications.",
        image:img5,
        content: {
          what: "React provides a synthetic event system that normalizes events across browsers.",
          why: "This allows for consistent behavior when handling events.",
          qa: [
            { question: "How do you handle events in React?", answer: "You can handle events by passing a function as a prop to an element." },
            { question: "What is event bubbling?", answer: "Event bubbling is a concept where the event starts from the target element and bubbles up to its ancestors." },
          ],
        },
      },
      {
        id: 6,
        title: "React Router",
        description: "Routing in React applications.",
        image: img6,
        content: {
          what: "React Router is a standard library for routing in React.",
          why: "It allows you to create single-page applications with navigation.",
          qa: [
            { question: "What is a Route?", answer: "A Route is a component that renders UI when its path matches the current URL." },
            { question: "How do you define a Link?", answer: "A Link component is used to navigate to different routes within your application." },
          ],
        },
      },
    ],
  },
  {
    id: 5,
    title: "Node.js Fundamentals",
    description: "Creating high-quality content about Node.js involves covering its foundational concepts, best practices, tools, and real-world applications. Here’s a comprehensive overview of essential topics and best practices for Node.js:",
    image: img1,
    topics: [
      {
        id: 1,
        title: "Introduction to Node.js",
        description: "Getting started with server-side JavaScript.",
        image: "https://cdn.iconscout.com/icon/free/png-256/nodejs-4-1175206.png",
        content: {
          what: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
          why: "It allows developers to use JavaScript to write server-side code.",
          qa: [
            { question: "What is NPM?", answer: "NPM is the package manager for Node.js, used to install libraries." },
            { question: "What is an event loop?", answer: "An event loop allows Node.js to perform non-blocking I/O operations." },
          ],
        },
      },
    ],
  },
  {
    id: 6,
    title: "Python for Beginners",
    description: "Creating high-quality content in Python involves understanding its best practices, features, and how to write clean, efficient, and maintainable code. Here are some best practices and key topics to consider:",
    image: python,
    topics: [
      {
        id: 1,
        title: "Introduction to Python",
        description: "Learn the basics of Python.",
        image: img1,
        content: {
          what: "Python is an interpreted, high-level programming language.",
          why: "It is widely used for web development, data analysis, and automation.",
          qa: [
            { question: "What are Python lists?", answer: "Lists are used to store multiple items in a single variable." },
            { question: "What is a dictionary in Python?", answer: "A dictionary is a collection of key-value pairs." },
          ],
        },
      },
      {
        id: 2,
        title: "Data Types and Variables",
        description: "Understand different data types and how to use variables.",
        image: img5,
        content: {
          what: "Python has several built-in data types such as integers, floats, strings, and booleans.",
          why: "Knowing data types is crucial for effective programming and data manipulation.",
          qa: [
            { question: "What is a variable in Python?", answer: "A variable is a reserved memory location to store values." },
            { question: "What are the common data types in Python?", answer: "The common data types include int, float, str, and bool." },
          ],
        },
      },
      {
        id: 3,
        title: "Control Structures",
        description: "Learn about conditional statements and loops.",
        image: img3,
        content: {
          what: "Control structures allow you to dictate the flow of execution in your programs.",
          why: "They are essential for making decisions and repeating actions.",
          qa: [
            { question: "What is an if statement?", answer: "An if statement is used to execute a block of code based on a condition." },
            { question: "What is a for loop?", answer: "A for loop is used to iterate over a sequence (like a list or string)." },
          ],
        },
      },
      {
        id: 4,
        title: "Functions",
        description: "Explore how to create and use functions in Python.",
        image: img4,
        content: {
          what: "Functions are blocks of reusable code that perform a specific task.",
          why: "They help in organizing code and reducing redundancy.",
          qa: [
            { question: "How do you define a function in Python?", answer: "You can define a function using the def keyword." },
            { question: "What are parameters in functions?", answer: "Parameters are variables that are passed into a function." },
          ],
        },
      },
      {
        id: 5,
        title: "Lists and Tuples",
        description: "Understand how to use lists and tuples for data storage.",
        image: img5,
        content: {
          what: "Lists are mutable, ordered collections, while tuples are immutable.",
          why: "Choosing the right data structure is vital for performance and functionality.",
          qa: [
            { question: "What is the difference between a list and a tuple?", answer: "Lists are mutable, whereas tuples are immutable." },
            { question: "How do you access elements in a list?", answer: "You can access elements using their index, starting from 0." },
          ],
        },
      },
      {
        id: 6,
        title: "Dictionaries",
        description: "Learn how to use dictionaries to store key-value pairs.",
        image: img6,
        content: {
          what: "Dictionaries are mutable, unordered collections of key-value pairs.",
          why: "They provide an efficient way to store and retrieve data.",
          qa: [
            { question: "How do you create a dictionary?", answer: "You can create a dictionary using curly braces {} or the dict() function." },
            { question: "How do you access values in a dictionary?", answer: "You access values using their corresponding keys." },
          ],
        },
      },
    ],
  },
  {
    id: 7,
    title: "English Speaking and Typing",
    description: "Creating high-quality content on English speaking and typing involves various aspects such as grammar, vocabulary, pronunciation, typing techniques, and practical exercises. Here’s a comprehensive guide to best practices and resources for improving English speaking and typing skills:",
    image: img4,
    topics: [
      {
        id: 1,
        title: "Basic English Speaking Skills",
        description: "Learn the fundamentals of speaking English confidently.",
        image: "https://cdn-icons-png.flaticon.com/512/1170/1170451.png",
        content: {
          what: "This topic covers essential phrases, vocabulary, and pronunciation for effective communication.",
          why: "Improving speaking skills enhances your ability to communicate and connect with others.",
          qa: [
            { question: "What are some common phrases in English?", answer: "Common phrases include greetings, introductions, and everyday questions." },
            { question: "How can I improve my pronunciation?", answer: "Listening and practicing speaking with native speakers helps improve pronunciation." },
          ],
        },
      },
      {
        id: 2,
        title: "Typing Skills Development",
        description: "Learn to type efficiently and accurately.",
        image: "https://cdn-icons-png.flaticon.com/512/2985/2985006.png",
        content: {
          what: "This topic focuses on touch typing techniques, keyboard shortcuts, and practice exercises.",
          why: "Typing skills are essential for effective communication in the digital age.",
          qa: [
            { question: "What is touch typing?", answer: "Touch typing is typing without looking at the keyboard." },
            { question: "How can I improve my typing speed?", answer: "Regular practice with typing games and exercises can enhance speed and accuracy." },
          ],
        },
      },
    ],
  },
];
