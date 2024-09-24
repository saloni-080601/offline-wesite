export const courses = [
    {
      id: 1,
      title: "HTML Basics",
      description: "Learn the fundamentals of HTML.",
      details: `
        HTML (HyperText Markup Language) is the standard markup language for creating web pages. 
        In this course, you will learn the structure of HTML documents, how to use elements and attributes, 
        and how to create forms and tables. 
        
        **Why Learn HTML?** 
        HTML is the foundation of web development. Every website you see is built using HTML.
  
        **How to Use HTML:**
        You can write HTML in any text editor and view it in a web browser. 
        Here’s a simple example:
        
        \`\`\`html
        <!DOCTYPE html>
        <html>
        <head>
          <title>My First HTML Page</title>
        </head>
        <body>
          <h1>Hello, World!</h1>
          <p>This is my first paragraph.</p>
        </body>
        </html>
        \`\`\`
      `,
      image: "https://c7.alamy.com/comp/DWJC6N/html-against-futuristic-black-and-blue-background-DWJC6N.jpg",
    },
    {
      id: 2,
      title: "CSS Essentials",
      description: "Master the art of styling web pages.",
      details: `
        CSS (Cascading Style Sheets) is used to style and layout web pages. 
        This course covers selectors, properties, the box model, flexbox, and grid systems. 
  
        **Why Learn CSS?** 
        CSS allows you to control the appearance of your website, making it visually appealing and user-friendly.
  
        **How to Use CSS:**
        You can link CSS files to your HTML documents or use inline styles. 
        Example:
        
        \`\`\`css
        body {
          background-color: #f0f0f0;
          font-family: Arial, sans-serif;
        }
  
        h1 {
          color: blue;
        }
        \`\`\`
      `,
      image: "https://prod-discovery.edx-cdn.org/cdn-cgi/image/width=auto,height=auto,quality=75,format=webp/media/course/image/32f1ba67-31e7-4b85-aa65-a4687036231c-80139b7286a9.small.png",
    },
    {
      id: 3,
      title: "JavaScript for Beginners",
      description: "Start coding with JavaScript.",
      details: `
        JavaScript is the programming language of the Web. 
        This course covers variables, data types, functions, and DOM manipulation.
  
        **Why Learn JavaScript?** 
        JavaScript adds interactivity to websites and is essential for web development.
  
        **How to Use JavaScript:**
        You can add JavaScript to your HTML using the <script> tag. 
        Here’s a quick example:
        
        \`\`\`javascript
        document.getElementById("demo").innerHTML = "Hello, JavaScript!";
        \`\`\`
      `,
      image: "https://engineering.fb.com/wp-content/uploads/2012/12/javascript-illustration.png",
    },
    {
      id: 4,
      title: "React Fundamentals",
      description: "Build dynamic user interfaces with React.",
      details: `
        React is a JavaScript library for building user interfaces. 
        In this course, you will learn about components, state, and props.
  
        **Why Learn React?** 
        React allows for fast, scalable, and simple UI development.
  
        **How to Use React:**
        You can create components and manage state effectively. 
        Here’s a basic example:
        
        \`\`\`javascript
        function MyComponent() {
          const [count, setCount] = React.useState(0);
          return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
        }
        \`\`\`
      `,
      image: "https://knackforge.com/wp-content/webp-express/webp-images/uploads/2022/11/Benefits-of-ReactJS.jpg.webp",
    },
    {
      id: 5,
      title: "Bootstrap 5",
      description: "Use Bootstrap to build responsive websites.",
      details: `
        Bootstrap is a popular CSS framework for responsive design. 
        This course teaches you how to use Bootstrap’s grid system and components.
  
        **Why Learn Bootstrap?** 
        It helps in creating mobile-first, responsive websites quickly.
  
        **How to Use Bootstrap:**
        You can include Bootstrap via CDN or download it. 
        Here’s an example of a responsive button:
        
        \`\`\`html
        <button class="btn btn-primary">Click Me!</button>
        \`\`\`
      `,
      image: "https://blog.templatetoaster.com/wp-content/uploads/2020/05/Bootstrap-5.jpg",
    },
    {
      id: 6,
      title: "Node.js Basics",
      description: "Server-side JavaScript with Node.js.",
      details: `
        Node.js allows you to run JavaScript on the server. 
        This course covers setting up a Node.js server and using npm.
  
        **Why Learn Node.js?** 
        Node.js enables you to build scalable network applications.
  
        **How to Use Node.js:**
        You can create a server using the 'http' module. 
        Example:
        
        \`\`\`javascript
        const http = require('http');
  
        const server = http.createServer((req, res) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Hello, Node.js!\n');
        });
  
        server.listen(3000, () => {
          console.log('Server running at http://localhost:3000/');
        });
        \`\`\`
      `,
      image: "https://cdn.gabrieleromanato.com/5c37214980b3/uploads/2018/09/nodejs.jpg",
    }
  ];