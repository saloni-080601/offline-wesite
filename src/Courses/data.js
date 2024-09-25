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
          image: "https://cdn-icons-png.flaticon.com/512/1875/1875694.png",
          content: {
            what: "HTML is a markup language that uses tags to describe the structure of a webpage.",
            why: "It's important because it enables the creation of structured documents on the web.",
            qa: [
              { question: "What are tags in HTML?", answer: "Tags are special codes that define elements in HTML." },
              { question: "Can HTML be used for web design?", answer: "Yes, HTML is used alongside CSS for web design." },
            ],
          },
        },
        // Additional topics omitted for brevity
        {
          id: 19,
          title: "HTML File Path",
          description: "Understanding file paths in HTML.",
          image: "https://cdn-icons-png.flaticon.com/512/1875/1875711.png",
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
      image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
      topics: [
        {
          id: 1,
          title: "CSS Selectors",
          description: "Learn about different CSS selectors.",
          image: "https://cdn-icons-png.flaticon.com/512/1875/1875712.png",
          content: {
            what: "CSS selectors are patterns used to select the elements you want to style.",
            why: "Selectors are crucial for targeting specific elements and applying styles to them.",
            qa: [
              { question: "What is a class selector?", answer: "A class selector selects elements with a specified class." },
              { question: "What is an ID selector?", answer: "An ID selector targets a unique element with a specific ID." },
            ],
          },
        },
        // Additional topics omitted for brevity
        {
          id: 5,
          title: "CSS Box Model",
          description: "Understanding the CSS box model.",
          image: "https://cdn-icons-png.flaticon.com/512/1875/1875716.png",
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
      image: "https://d2jdgazzki9vjm.cloudfront.net/images/javascript/javascript_logo.png",
      topics: [
        {
          id: 1,
          title: "Introduction to JavaScript",
          description: "Getting started with JavaScript.",
          image: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/js_intro_576930c043.jpg",
          content: {
            what: "JavaScript is a high-level programming language used to create dynamic web content.",
            why: "It enables interactive features on websites, enhancing user experience.",
            qa: [
              { question: "What is JavaScript used for?", answer: "JavaScript is used for creating interactive effects within web browsers." },
              { question: "Is JavaScript a client-side language?", answer: "Yes, JavaScript is primarily a client-side scripting language." },
            ],
          },
        },
        // Additional topics omitted for brevity
        {
          id: 5,
          title: "Asynchronous JavaScript",
          description: "Understanding promises and async/await.",
          image: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/js_arrays_112ca9760f.jpg",
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
      image: "https://reactjs.org/logo-og.png",
      topics: [
        {
          id: 1,
          title: "Introduction to React",
          description: "Getting started with React.",
          image: "https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png",
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
      image: "https://nodejs.org/static/images/logo.svg",
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
      description: "Discover the world of Python programming.",
      image: "https://www.python.org/community/logos/python-logo-master-v3-TM.png",
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
      title: "PHP Basics",
      description: "Learn the basics of server-side scripting with PHP.",
      image: "https://www.php.net/images/logos/php-logo.svg",
      topics: [
        {
          id: 1,
          title: "Introduction to PHP",
          description: "Getting started with PHP.",
          image: "https://cdn.iconscout.com/icon/free/png-256/php-10-1175174.png",
          content: {
            what: "PHP is a server-side scripting language designed for web development.",
            why: "It can be embedded into HTML to add dynamic content to web pages.",
            qa: [
              { question: "What does PHP stand for?", answer: "PHP stands for Hypertext Preprocessor." },
              { question: "What is a PHP variable?", answer: "A variable is a container for storing data values." },
            ],
          },
        },
      ],
    },
    {
      id: 8,
      title: "SQL Fundamentals",
      description: "Learn about database management with SQL.",
      image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
      topics: [
        {
          id: 1,
          title: "Introduction to SQL",
          description: "Getting started with SQL.",
          image: "https://cdn.iconscout.com/icon/free/png-256/sql-9-1175137.png",
          content: {
            what: "SQL (Structured Query Language) is used for managing and manipulating databases.",
            why: "It allows you to create, read, update, and delete data in a database.",
            qa: [
              { question: "What is a primary key?", answer: "A primary key is a unique identifier for a record in a database." },
              { question: "What is a foreign key?", answer: "A foreign key is a field in one table that uniquely identifies a row in another table." },
            ],
          },
        },
      ],
    },
    {
      id: 9,
      title: "Machine Learning Basics",
      description: "An introduction to machine learning concepts.",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*Lu_JRtKk5-4O2Fl3VnKP4g.png",
      topics: [
        {
          id: 1,
          title: "Introduction to Machine Learning",
          description: "Understanding machine learning.",
          image: "https://cdn.iconscout.com/icon/free/png-256/machine-learning-1-1175138.png",
          content: {
            what: "Machine Learning is a field of artificial intelligence that enables systems to learn from data.",
            why: "It is widely used for predictive analytics and data analysis.",
            qa: [
              { question: "What is supervised learning?", answer: "Supervised learning is a type of machine learning where the model is trained on labeled data." },
              { question: "What is unsupervised learning?", answer: "Unsupervised learning is a type of machine learning where the model learns from unlabeled data." },
            ],
          },
        },
      ],
    },
    {
      id: 10,
      title: "Cybersecurity Essentials",
      description: "Learn the fundamentals of cybersecurity.",
      image: "https://www.cyber.gov.au/sites/default/files/styles/cyber_logo/public/cyber-logo.png",
      topics: [
        {
          id: 1,
          title: "Introduction to Cybersecurity",
          description: "Understanding the importance of cybersecurity.",
          image: "https://cdn.iconscout.com/icon/free/png-256/cybersecurity-4-1175151.png",
          content: {
            what: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.",
            why: "It is essential to safeguard sensitive data and maintain privacy.",
            qa: [
              { question: "What is a firewall?", answer: "A firewall is a network security device that monitors and controls incoming and outgoing network traffic." },
              { question: "What is phishing?", answer: "Phishing is a type of cyber attack that attempts to steal sensitive information by masquerading as a trustworthy entity." },
            ],
          },
        },
      ],
    },
  ];
  