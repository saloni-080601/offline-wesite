
import css from "./assets/css.png";
import javascript from "./assets/javascript_logo.png";
import react from "./assets/react.png";
import python from "./assets/python-alt.png";
import img1 from "./assets/datatypes_5c8c5cb922.jpg";
import img2 from "./assets/if_else_5fc3176c7b.jpg";
import img3 from "./assets/intro_c9cc87a9b3.jpg";
import img4 from "./assets/lists_101_6996e5acc4.jpg";
import img5 from "./assets/loops_101_608858b2e8.jpg";
import english from "./assets/english-speaking-course.jpeg";
import jsIntro from "./assets/jsintro.jpg";
import jsVarible from "./assets/jsvarible.jpg";
import jsIElse from "./assets/jsIfelse.jpg";
import JsDataType from "./assets/datatypes_5c8c5cb922.jpg";
import jsloop from "./assets/js_loops.jpg";
import array from "./assets/js_arrays.jpg";
import jsObject from "./assets/js_objects.jpg";
import jsfunction from "./assets/js_functions.jpg"
export const courses = [
    {
        id: 1,
        name: 'Python',
        description: 'Learn the basics and become comfortable in one of the most popular programming languages Python.',
        img: python,
        topics: [
            {
                id: 1,
                title: 'Introduction to Python',
                img: img1,
                content: [
                    {
                        id: 1,
                        description: 's'

                    },
                    {
                        id: 2,
                        description: 'This section covers installation, setup, and your first Python script.'
                    },
                ]
            },
            {
                id: 2,
                title: 'Variables',
                img: img2,
                content: [
                    {
                        id: 1,
                        description: 'varible data'
                    },
                    {
                        id: 2,
                        description: 'Learn about strings, numbers, lists, and dictionaries in Python.'
                    },
                ]
            },
            {
                id: 3,
                title: 'Data Type',
                img: img3,
                content: [
                    {
                        id: 1,
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                    {
                        id: 3,
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 4,
                title: 'Data Type',
                img: img4,
                content: [
                    {
                        id: 1,
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 5,
                title: 'Operators',
                img: img5,
                content: [
                    {
                        id: 1,
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 6,
                title: 'IF ELSE',
                img: img1,
                content: [
                    {
                        id: 1,
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 7,
                title: 'Loop',
                img: img5,
                content: [
                    {
                        id: 1,
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 8,
                title: 'List useing Python',
                img: img1,
                content: [
                    {
                        id: 1,
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 9,
                title: 'Introduction to Dictionary ',
                img: img2,
                content: [
                    {
                        id: 1,
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 10,
                img: img4,
                title: 'Funtions',
                content: [
                    {
                        id: 1,
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'CSS',
        description: 'Master CSS for styling websites.',
        img: css,  // Assume css is a valid image source
        topics: [
            {
                id: 1,
                title: 'CSS Basics',
                img: img1,  // Assume img1 is a valid image source
                content: [
                    {
                        id: 1,
                        description: 'Discover the fundamentals of CSS and how to style your web pages.'
                    },
                    {
                        id: 2,
                        description: 'Learn how to use selectors, properties, and values.'
                    },
                    {
                        id: 3,
                        description: 'Explore the importance of CSS specificity and inheritance.'
                    },
                    {
                        id: 4,
                        description: 'Understand how to apply styles using external, internal, and inline CSS.'
                    }
                ]
            },
            {
                id: 2,
                title: 'Box Model',
                img: img2,  // Assume img2 is a valid image source
                content: [
                    {
                        id: 1,
                        description: 'Learn about the CSS box model and how padding, margins, and borders affect layout.'
                    },
                    {
                        id: 2,
                        description: 'Understand content, padding, border, and margin areas.'
                    },
                    {
                        id: 3,
                        description: 'Discover how to adjust the box model with box-sizing property.'
                    },
                    {
                        id: 4,
                        description: 'Apply margins and padding to create space between elements effectively.'
                    }
                ]
            },
            {
                id: 3,
                title: 'Flexbox and Grid Layouts',
                img: img5,  // Assume img5 is a valid image source
                content: [
                    {
                        id: 1,
                        description: 'Understand modern layout techniques using Flexbox and CSS Grid.'
                    },
                    {
                        id: 2,
                        description: 'Learn about responsive design with Flexbox and Grid.'
                    },
                    {
                        id: 3,
                        description: 'Explore properties of Flexbox such as justify-content, align-items, and flex-direction.'
                    },
                    {
                        id: 4,
                        description: 'Master Grid properties such as grid-template-columns, grid-template-rows, and grid-area.'
                    }
                ]
            },
            {
                id: 4,
                title: 'Responsive Design',
                img: img3,  // Assume img3 is a valid image source
                content: [
                    {
                        id: 1,
                        description: 'Learn how to create responsive layouts using media queries.'
                    },
                    {
                        id: 2,
                        description: 'Discover the concept of mobile-first design and its importance.'
                    },
                    {
                        id: 3,
                        description: 'Explore responsive images and how to use the srcset attribute.'
                    },
                    {
                        id: 4,
                        description: 'Understand how to use rem and em units for responsive typography.'
                    }
                ]
            },
            {
                id: 5,
                title: 'Advanced CSS Techniques',
                img: img4,  // Assume img4 is a valid image source
                content: [
                    {
                        id: 1,
                        description: 'Delve into CSS animations and transitions for dynamic effects.'
                    },
                    {
                        id: 2,
                        description: 'Learn about CSS variables and their usage in maintaining styles.'
                    },
                    {
                        id: 3,
                        description: 'Understand pseudo-classes and pseudo-elements for styling specific elements.'
                    },
                    {
                        id: 4,
                        description: 'Explore CSS preprocessors like SASS and LESS for improved styling workflow.'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'JavaScript',
        description: 'Understand the fundamentals of JavaScript.',
        img: javascript,
        topics: [
            {
                id: 1,
                img: jsIntro,
                title: 'JavaScript Introduction',
                content: [
                    {
                        id: 1,
                        description: 'Dive into JavaScript, covering syntax, variables, and basic functions.'
                    },
                    {
                        id: 2,
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
                        description: 'Learn about different types of functions in JavaScript and the concept of scope.'
                    },
                    {
                        id: 2,
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
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
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
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
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
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
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
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            },
            {
                id: 7,
                img: array,
                title: ' JS Arrays',
                content: [
                    {
                        id: 1,
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            },
            {
                id: 8,
                img:jsObject,
                title: ' JS Objects',
                content: [
                    {
                        id: 1,
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            },
            {
                id: 9,
                img:jsfunction,
                title: ' JS Funtions',
                content: [
                    {
                        id: 1,
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'React.js',
        description: 'Build dynamic user interfaces with React.',
        img: react,
        topics: [
            {
                id: 1,
                img: img1,
                title: 'Introduction to React',
                content: [
                    {
                        id: 1,
                        description: 'Understand the core concepts of React and how to create your first React application.'
                    },
                    {
                        id: 2,
                        description: 'Learn about components, props, and state management.'
                    },
                ]
            },
            {
                id: 2,
                img: img2,
                title: 'Components and Props',
                content: [
                    {
                        id: 1,
                        description: 'Learn how to build reusable components and pass data through props.'
                    },
                    {
                        id: 2,
                        description: 'Understand the importance of component hierarchy and reusability.'
                    },
                ]
            },
            {
                id: 3,
                img: img3,
                title: 'State Management',
                content: [
                    {
                        id: 1,
                        description: 'Explore different ways to manage state in React applications.'
                    },
                    {
                        id: 2,
                        description: 'Learn about useState, useReducer, and context API for state management.'
                    },
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
                img: img3,
                title: 'Spoken English',
                content: [
                    {
                        id: 1,
                        description: 'Understand the core concepts of React and how to create your first React application.'
                    },
                    {
                        id: 2,
                        description: 'Learn about components, props, and state management.'
                    },
                ]
            },


        ]
    }

];
