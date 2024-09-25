import enlishspeaking from "./assets/english-speaking-course.jpeg";
import css from "./assets/css.png";
import javscript from "./assets/javascript_logo.png";
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
    description: "Learn the fundamentals of HTML.",
    image: "https://c7.alamy.com/comp/DWJC6N/html-against-futuristic-black-and-blue-background-DWJC6N.jpg",
    topics: [
      {
        id: 1,
        title: "Introduction to HTML",
        description: "An overview of HTML.",
        image: "https://cdn-icons-png.flaticon.com/512/1875/1875693.png",
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
    description: "Master the art of styling web pages.",
    image: css,
    topics: [
      {
        id: 1,
        title: "CSS Selectors",
        description: "Learn about different CSS selectors.",
        image:img4,
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
    description: "Learn the core concepts of JavaScript.",
    image: javscript,
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
        id: 5,
        title: "Asynchronous JavaScript",
        description: "Understanding promises and async/await.",
        image: img1,
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
    description: "Learn the fundamentals of React.js.",
    image: react,
    topics: [
      {
        id: 1,
        title: "Introduction to React",
        description: "Getting started with React.",
        image: img2,
        content: {
          what: "React is a JavaScript library for building user interfaces.",
          why: "It allows developers to create large web applications that can change data, without reloading the page.",
          qa: [
            { question: "What is a component in React?", answer: "A component is a reusable piece of UI that can manage its own state." },
            { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that looks similar to XML." },
          ],
        },
      },
    ],
  },
  {
    id: 5,
    title: "Node.js Fundamentals",
    description: "Learn about server-side programming with Node.js.",
    image: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png?w=500&fm=webp",
    topics: [
      {
        id: 1,
        title: "Introduction to Node.js",
        description: "Getting started with server-side JavaScript.",
        image:img5,
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
    description: "Discover the world of Python programming.",
    image: python,
    topics: [
      {
        id: 1,
        title: "Introduction to Python",
        description: "Learn the basics of Python.",
        image: "https://cdn.iconscout.com/icon/free/png-256/python-10-1175154.png",
        content: {
          what: "Python is an interpreted, high-level programming language.",
          why: "It is widely used for web development, data analysis, and automation.",
          qa: [
            { question: "What are Python lists?", answer: "Lists are used to store multiple items in a single variable." },
            { question: "What is a dictionary in Python?", answer: "A dictionary is a collection of key-value pairs." },
          ],
        },
      },
    ],
  },
  {
    id: 7,
    title: "English Speaking and Typing",
    description: "Enhance your English speaking and typing skills.",
    image: enlishspeaking,
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
