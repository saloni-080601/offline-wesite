
import css from "./assets/css.png";
import javascript from "./assets/javascript_logo.png";
import react from "./assets/react.png";
import python from "./assets/python-alt.png";
import english from "./assets/english-speaking-course.jpeg";
import jsIntro from "./assets/jsintro.jpg";
import jsVarible from "./assets/jsvarible.jpg";
import jsIElse from "./assets/jsIfelse.jpg";
import JsDataType from "./assets/datatypes_5c8c5cb922.jpg";
import jsloop from "./assets/js_loops.jpg";
import array from "./assets/js_arrays.jpg";
import jsObject from "./assets/js_objects.jpg";
import jsfunction from "./assets/js_functions.jpg";
import Typing from "./assets/typing.jpg";

export const courses = [
    {
        id: 1,
        name: 'Python',
        description: 'Dive into the fundamentals of Python, one of the most widely used programming languages today. This course is designed to help you build a strong foundation, making you comfortable with essential concepts and practical applications. Whether you’re a complete beginner or looking to refresh your skills, you  gain the confidence to tackle real-world projects and unlock new career opportunities in tech',
        img: python,
        topics: [
            {
                id: 1,
                title: 'Introduction to Python',
                img: jsIntro,
                content: [
                    {
                        id: 1,
                        title: 'Overview of Python',
                        description: 'Learn what Python is and why it’s one of the most popular programming languages today.'
                    },
                    {
                        id: 2,
                        title: 'Installation and Setup',
                        description: 'Step-by-step instructions for installing Python on Windows, macOS, and Linux.'
                    },
                    {
                        id: 3,
                        title: 'Your First Python Script',
                        description: 'Writing and executing your first simple script, including a hello world program.'
                    },
                    {
                        id: 4,
                        title: 'Understanding Python Syntax',
                        description: 'Introduction to basic syntax, including indentation, comments, and line breaks.'
                    },
                    {
                        id: 5,
                        title: 'Data Types and Variables',
                        description: 'Overview of Python data types (integers, floats, strings, and booleans) and how to create variables.'
                    },
                    {
                        id: 6,
                        title: 'Operators in Python',
                        description: 'Exploring arithmetic, comparison, logical, and assignment operators.'
                    },
                    {
                        id: 7,
                        title: 'Control Structures',
                        description: 'Introduction to conditional statements (if, else, and elif) and loops (for and while).'
                    },
                    {
                        id: 8,
                        title: 'Functions',
                        description: 'Understanding how to define and call functions, including parameters and return values.'
                    },
                    {
                        id: 9,
                        title: 'Working with Collections',
                        description: 'Introduction to lists, tuples, sets, and dictionaries and their applications.'
                    },
                    {
                        id: 10,
                        title: 'Error Handling',
                        description: 'Basic understanding of exceptions and how to handle errors gracefully in your Python scripts.'
                    },
                    {
                        id: 11,
                        title: 'Introduction to Libraries',
                        description: 'Learn how to import and use Python libraries, with examples like `math` and `random`.'
                    },
                    {
                        id: 12,
                        title: 'Conclusion',
                        description: 'Summary of what you’ve learned and resources for further study in Python programming.'
                    }
                ]
            },
            {
                id: 2,
                title: 'Variables',
                img: jsVarible,
                content: [
                    {
                        id: 1,
                        title: 'Introduction to Variables',
                        description: 'In Python, a variable is a named location used to store data in the memory. Variables are fundamental to programming, allowing you to manage and manipulate data. This section covers the basics of what variables are, how they work, and why they are essential in any programming language.'
                    },
                    {
                        id: 2,
                        title: 'Naming Variables',
                        description: 'Choosing a meaningful name for your variables is crucial for code readability. In Python, variable names can include letters, numbers, and underscores but must start with a letter or underscore. This section provides guidelines for naming variables effectively, including the importance of adhering to conventions like using lowercase letters and separating words with underscores (e.g., `my_variable`).'
                    },
                    {
                        id: 3,
                        title: 'Data Types of Variables',
                        description: 'Python supports various data types for variables, enabling you to store different kinds of data. This section introduces the four primary data types in Python:'
                    },

                ]
            },
            {
                id: 3,
                title: 'Data Type',
                img: JsDataType,
                content: [
                    {
                        id: 1,
                        title: 'Control Flow',
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        title: 'Break and Continue',
                        description: 'Understand the use of break and continue statements in loops to manage execution flow effectively.'
                    },
                    {
                        id: 3,
                        title: 'Data Types Overview',
                        description: 'Learn about different data types in JavaScript, including strings, numbers, booleans, and objects.'
                    },
                    {
                        id: 4,
                        title: 'Type Coercion',
                        description: 'Discover type coercion and how JavaScript handles implicit and explicit type conversions.'
                    },
                    {
                        id: 5,
                        title: 'Undefined vs Null',
                        description: 'Get familiar with the concept of undefined and null in JavaScript and their differences.'
                    }
                ]
            },
            {
                id: 4,
                title: 'Data Types',
                img: JsDataType,
                content: [
                    {
                        id: 1,
                        title: 'Control Flow in JavaScript',
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        title: 'Understanding Loops',
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                    {
                        id: 3,
                        title: 'Primitive Data Types',
                        description: 'Learn about primitive data types in JavaScript, including strings, numbers, booleans, null, and undefined.'
                    },
                    {
                        id: 4,
                        title: 'Reference Data Types',
                        description: 'Understand reference data types such as objects, arrays, and functions in JavaScript.'
                    },
                    {
                        id: 5,
                        title: 'Type Coercion and Checking',
                        description: 'Explore type coercion in JavaScript and how to check data types using typeof and instanceof.'
                    },
                    {
                        id: 6,
                        title: 'Working with Arrays',
                        description: 'Learn how to create and manipulate arrays, including methods like push, pop, and slice.'
                    },
                    {
                        id: 7,
                        title: 'Functions and Scope',
                        description: 'Understand how functions work in JavaScript, including scope and closures.'
                    }
                ]
            },
            {
                id: 5,
                title: 'Operators',
                img: jsIntro,
                content: [
                    {
                        id: 1,
                        title: 'Control Flow with If Statements',
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        title: 'Using Break and Continue Statements',
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 6,
                title: 'IF ELSE',
                img: jsIElse,
                content: [
                    {
                        id: 1,
                        title: 'Controlling Flow with If Statements',
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        title: 'Understanding Break and Continue',
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 7,
                title: 'Loop',
                img: jsloop,
                content: [
                    {
                        id: 1,
                        title: 'Controlling Program Flow',
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        title: 'Break and Continue in Loops',
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 8,
                title: 'List useing Python',
                img: array,
                content: [
                    {
                        id: 1,
                        title: 'Control Flow with If Statements',
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        title: 'Break and Continue Statements',
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 9,
                title: 'Introduction to Dictionary ',
                img: jsObject,
                content: [
                    {
                        id: 1,
                        title: 'Controlling Program Flow',
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        title: 'Break and Continue Statements in Loops',
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 10,
                img: jsfunction,
                title: 'Funtions',
                content: [
                    {
                        id: 1,
                        title: 'Control Flow with If Statements',
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        title: 'Using Break and Continue in Loops',
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Typing',
        description: "Explore and learn the essential material and tools to startsupporting your students learning on Meraki",
        img: Typing,
        topics: [
            {
                id: 1,
                title: 'Home Row,keysf and j',
                img: Typing,
                content: [
                    {
                        id: 1,
                        title: 'Fundamentals of CSS',
                        description: 'Discover the fundamentals of CSS and how to style your web pages.'
                    },
                    {
                        id: 2,
                        title: 'Selectors, Properties, and Values',
                        description: 'Learn how to use selectors, properties, and values.'
                    },
                    {
                        id: 3,
                        title: 'CSS Specificity and Inheritance',
                        description: 'Explore the importance of CSS specificity and inheritance.'
                    },
                    {
                        id: 4,
                        title: 'Applying Styles with CSS',
                        description: 'Understand how to apply styles using external, internal, and inline CSS.'
                    }
                ]
            },
            {
                id: 2,
                title: 'Top Row,keyse and i',
                img: Typing,
                content: [
                    {
                        id: 1,
                        title: 'Fundamentals of CSS',
                        description: 'Discover the fundamentals of CSS and how to style your web pages.'
                    },
                    {
                        id: 2,
                        title: 'Selectors, Properties, and Values',
                        description: 'Learn how to use selectors, properties, and values.'
                    },
                    {
                        id: 3,
                        title: 'CSS Specificity and Inheritance',
                        description: 'Explore the importance of CSS specificity and inheritance.'
                    },
                    {
                        id: 4,
                        title: 'Applying Styles with CSS',
                        description: 'Understand how to apply styles using external, internal, and inline CSS.'
                    }
                ]
            },
            {
                id: 3,
                title: 'Bottom Row,keysv, n and b',
                img: Typing,
                content: [
                    {
                        id: 1,
                        title: 'Fundamentals of CSS',
                        description: 'Discover the fundamentals of CSS and how to style your web pages.'
                    },
                    {
                        id: 2,
                        title: 'Selectors, Properties, and Values',
                        description: 'Learn how to use selectors, properties, and values.'
                    },
                    {
                        id: 3,
                        title: 'CSS Specificity and Inheritance',
                        description: 'Explore the importance of CSS specificity and inheritance.'
                    },
                    {
                        id: 4,
                        title: 'Applying Styles with CSS',
                        description: 'Understand how to apply styles using external, internal, and inline CSS.'
                    }
                ]
            },
            {
                id: 4,
                title: 'Typeing',
                img: Typing,
                content: [
                    {
                        id: 1,
                        title: 'Fundamentals of CSS',
                        description: 'Discover the fundamentals of CSS and how to style your web pages.'
                    },
                    {
                        id: 2,
                        title: 'Selectors, Properties, and Values',
                        description: 'Learn how to use selectors, properties, and values.'
                    },
                    {
                        id: 3,
                        title: 'CSS Specificity and Inheritance',
                        description: 'Explore the importance of CSS specificity and inheritance.'
                    },
                    {
                        id: 4,
                        title: 'Applying Styles with CSS',
                        description: 'Understand how to apply styles using external, internal, and inline CSS.'
                    }
                ]
            },
        ]
    },
    {
        id: 2,
        name: 'CSS',
        description: 'Master CSS and unlock the full potential of web design! This comprehensive course will take you from the basics to advanced styling techniques, empowering you to create visually stunning and responsive websites. Learn essential concepts such as layout design, animations, and best practices for maintaining clean, efficient code. By the end of this course, you’ll have the skills to transform your ideas into beautiful web experiences that captivate users',
        img: css,
        topics: [
            {
                id: 1,
                title: 'CSS Basics',
                img: jsVarible,  // Assume img1 is a valid image source
                content: [
                    {
                        id: 1,
                        title: 'Fundamentals of CSS',
                        description: 'Discover the fundamentals of CSS and how to style your web pages.'
                    },
                    {
                        id: 2,
                        title: 'Selectors, Properties, and Values',
                        description: 'Learn how to use selectors, properties, and values.'
                    },
                    {
                        id: 3,
                        title: 'CSS Specificity and Inheritance',
                        description: 'Explore the importance of CSS specificity and inheritance.'
                    },
                    {
                        id: 4,
                        title: 'Applying Styles with CSS',
                        description: 'Understand how to apply styles using external, internal, and inline CSS.'
                    }
                ]
            },
            {
                id: 2,
                title: 'Box Model',
                img: jsIElse,
                content: [
                    {
                        id: 1,
                        title: 'Understanding the CSS Box Model',
                        description: 'Learn about the CSS box model and how padding, margins, and borders affect layout.'
                    },
                    {
                        id: 2,
                        title: 'Content, Padding, Border, and Margin Areas',
                        description: 'Understand content, padding, border, and margin areas.'
                    },
                    {
                        id: 3,
                        title: 'Adjusting the Box Model',
                        description: 'Discover how to adjust the box model with the box-sizing property.'
                    },
                    {
                        id: 4,
                        title: 'Effective Use of Margins and Padding',
                        description: 'Apply margins and padding to create space between elements effectively.'
                    }
                ]
            },
            {
                id: 3,
                title: 'Flexbox and Grid Layouts',
                img: JsDataType,
                content: [
                    {
                        id: 1,
                        title: 'Understanding Flexbox and CSS Grid',
                        description: 'Understand modern layout techniques using Flexbox and CSS Grid.'
                    },
                    {
                        id: 2,
                        title: 'Responsive Design with Flexbox and Grid',
                        description: 'Learn about responsive design with Flexbox and Grid.'
                    },
                    {
                        id: 3,
                        title: 'Flexbox Properties Overview',
                        description: 'Explore properties of Flexbox such as justify-content, align-items, and flex-direction.'
                    },
                    {
                        id: 4,
                        title: 'Mastering CSS Grid Properties',
                        description: 'Master Grid properties such as grid-template-columns, grid-template-rows, and grid-area.'
                    }
                ]
            },
            {
                id: 4,
                title: 'Responsive Design',
                img: jsloop,
                content: [
                    {
                        id: 1,
                        title: 'Creating Responsive Layouts with Media Queries',
                        description: 'Learn how to create responsive layouts using media queries.'
                    },
                    {
                        id: 2,
                        title: 'Mobile-First Design Concept',
                        description: 'Discover the concept of mobile-first design and its importance.'
                    },
                    {
                        id: 3,
                        title: 'Using Responsive Images',
                        description: 'Explore responsive images and how to use the srcset attribute.'
                    },
                    {
                        id: 4,
                        title: 'Responsive Typography with Rem and Em Units',
                        description: 'Understand how to use rem and em units for responsive typography.'
                    }
                ]
            },
            {
                id: 5,
                title: 'Advanced CSS Techniques',
                img: jsVarible,
                content: [
                    {
                        id: 1,
                        title: 'CSS Animations and Transitions',
                        description: 'Delve into CSS animations and transitions for dynamic effects.'
                    },
                    {
                        id: 2,
                        title: 'Using CSS Variables',
                        description: 'Learn about CSS variables and their usage in maintaining styles.'
                    },
                    {
                        id: 3,
                        title: 'Pseudo-Classes and Pseudo-Elements',
                        description: 'Understand pseudo-classes and pseudo-elements for styling specific elements.'
                    },
                    {
                        id: 4,
                        title: 'CSS Preprocessors: SASS and LESS',
                        description: 'Explore CSS preprocessors like SASS and LESS for improved styling workflow.'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'JavaScript',
        description: 'Become a JavaScript expert and elevate your web development skills! This comprehensive course is designed to take you through the essentials of JavaScript, from understanding basic syntax to implementing complex functionalities. You’ll learn how to manipulate the Document Object Model (DOM), handle events, and work with libraries and frameworks to create interactive web applications. With hands-on projects and real-world',
        img: javascript,
        topics: [
            {
                id: 1,
                img: jsIntro,
                title: 'JavaScript Introduction',
                content: [
                    {
                        id: 1,
                        title: 'Introduction to JavaScript',
                        description: 'Dive into JavaScript, covering syntax, variables, and basic functions.'
                    },
                    {
                        id: 2,
                        title: 'Understanding the DOM',
                        description: 'Learn about the document object model (DOM) and how to manipulate it with JavaScript.'
                    },
                ]
            },
            {
                id: 2,
                img: jsVarible,
                title: 'JS Varible ',
                content: [
                    {
                        id: 1,
                        title: 'Types of Functions in JavaScript',
                        description: 'Learn about different types of functions in JavaScript and the concept of scope.'
                    },
                    {
                        id: 2,
                        title: 'Global vs. Local Scope',
                        description: 'Understand the difference between global and local scope.'
                    },
                ]
            },

            {
                id: 3,
                img: JsDataType,
                title: 'JS Data type',
                content: [
                    {
                        id: 1,
                        title: 'Understanding Asynchronous Programming',
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        title: 'Handling Asynchronous Operations',
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]

            },
            {
                id: 4,
                img: jsIElse,
                title: 'JS operation',
                content: [
                    {
                        id: 1,
                        title: 'Asynchronous Programming Concepts',
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        title: 'Managing Asynchronous Operations',
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            },
            {
                id: 5,
                img: jsIElse,
                title: 'JS If else',
                content: [
                    {
                        id: 1,
                        title: 'Understanding Asynchronous Programming',
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        title: 'Handling Asynchronous Operations',
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            },
            {
                id: 6,
                title: ' JS Loop',
                img: jsloop,
                content: [
                    {
                        id: 1,
                        title: 'Asynchronous Programming Concepts',
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        title: 'Handling Asynchronous Operations',
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            },
            {
                id: 7,
                img: array,
                title: 'JS Arrays',
                content: [
                    {
                        id: 1,
                        title: 'Asynchronous Programming Concepts',
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        title: 'Handling Asynchronous Operations',
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            },
            {
                id: 8,
                img: jsObject, // Replace with your actual image variable
                title: 'JS Objects',
                content: [
                    {
                        id: 1,
                        title: 'Understanding Asynchronous Programming',
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        title: 'Managing Asynchronous Operations',
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            },
            {
                id: 9,
                img: jsfunction,
                title: 'JS Functions',
                content: [
                    {
                        id: 1,
                        title: 'Asynchronous Programming Concepts',
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        title: 'Handling Asynchronous Operations',
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'React.js',
        description: 'Dive into the world of React.js and revolutionize your web development skills! This comprehensive course covers everything from the core concepts of React to advanced techniques that will set you apart as a developer. You’ll learn how to create reusable components, manage application state, and utilize React Router for seamless navigation. With a focus on practical applications, you’ll build real-world projects that enhance your understanding of how to create scalable, high-performance web applications. Join a vibrant community of developers and gain insights into best practices',
        img: react,
        topics: [
            {
                id: 1,
                img: JsDataType,
                title: 'Introduction to React',
                content: [
                    {
                        id: 1,
                        title: 'Getting Started with React',
                        description: 'Understand the core concepts of React and how to create your first React application.'
                    },
                    {
                        id: 2,
                        title: 'Components, Props, and State Management',
                        description: 'Learn about components, props, and state management in React to build dynamic applications.'
                    },
                    {
                        id: 3,
                        title: 'Handling Events in React',
                        description: 'Discover how to handle events in React and create interactive applications.'
                    },
                    {
                        id: 4,
                        title: 'Working with Forms',
                        description: 'Learn how to manage forms and handle user input in React applications.'
                    }
                ]
            },
            {
                id: 2,
                img: jsVarible,
                title: 'Components and Props',
                content: [
                    {
                        id: 1,
                        title: 'Building Reusable Components',
                        description: 'Learn how to build reusable components and pass data through props.'
                    },
                    {
                        id: 2,
                        title: 'Component Hierarchy',
                        description: 'Understand the importance of component hierarchy and reusability.'
                    },
                    {
                        id: 3,
                        title: 'Props vs State',
                        description: 'Discover the differences between props and state in React components.'
                    },
                    {
                        id: 4,
                        title: 'Passing Data with Props',
                        description: 'Learn how to effectively pass data between components using props.'
                    },
                    {
                        id: 5,
                        title: 'Default Props and Prop Types',
                        description: 'Explore how to set default props and validate props with PropTypes.'
                    }
                ]
            },
            {
                id: 3,
                img: JsDataType,
                title: 'State Management',
                content: [
                    {
                        id: 1,
                        title: 'Introduction to State Management',
                        description: 'Explore different ways to manage state in React applications.'
                    },
                    {
                        id: 2,
                        title: 'Using useState Hook',
                        description: 'Learn how to use the useState hook to manage state in functional components.'
                    },
                    {
                        id: 3,
                        title: 'Understanding useReducer Hook',
                        description: 'Discover how to manage complex state using the useReducer hook.'
                    },
                    {
                        id: 4,
                        title: 'Context API for Global State',
                        description: 'Learn how to use the Context API to manage global state across your application.'
                    },
                    {
                        id: 5,
                        title: 'Handling State with Redux',
                        description: 'Understand the principles of Redux for managing state in larger applications.'
                    },
                    {
                        id: 6,
                        title: 'Best Practices for State Management',
                        description: 'Explore best practices for state management to keep your application organized and efficient.'
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'Spoken English',
        description: 'English is a great tool needed to navigate the tech world and also in an International setting. Whether you are a total beginner or already know some English, prepare for the challenge with our Spoken English classes and online courses.',
        img: english,
        topics: [
            {
                id: 1,
                img: jsfunction,
                title: 'Introduction to Spoken English',
                content: [
                    {
                        id: 1,
                        title: 'Basics of English Communication',
                        description: 'Learn the foundational aspects of spoken English communication.'
                    },
                    {
                        id: 2,
                        title: 'Vocabulary Building',
                        description: 'Expand your English vocabulary through practical exercises and examples.'
                    },
                    {
                        id: 3,
                        title: 'Pronunciation and Accent',
                        description: 'Work on your pronunciation and accent for clearer communication.'
                    },
                    {
                        id: 4,
                        title: 'Conversational Skills',
                        description: 'Develop your ability to engage in everyday conversations in English.'
                    },
                    {
                        id: 5,
                        title: 'Listening and Comprehension',
                        description: 'Enhance your listening skills through various audio and video materials.'
                    },
                    {
                        id: 6,
                        title: 'Public Speaking Techniques',
                        description: 'Learn techniques for effective public speaking and presentations in English.'
                    },
                    {
                        id: 7,
                        title: 'Overcoming Language Barriers',
                        description: 'Strategies to overcome language barriers and communicate confidently.'
                    }
                ]
            }
        ]
    }
];
