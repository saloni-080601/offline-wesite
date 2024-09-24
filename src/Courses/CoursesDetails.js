import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import TopicsComponent from "./TopicCard";
export const courses = [
  {
    id: 1,
    title: "HTML Basics",
    description: "Learn the fundamentals of HTML.",
    image: "https://c7.alamy.com/comp/DWJC6N/html-against-futuristic-black-and-blue-background-DWJC6N.jpg",
    topics: [
      { id: 1, title: "Introduction to HTML", description: "An overview of HTML.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875693.png" },
      { id: 2, title: "What is HTML", description: "Definition and usage of HTML.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875694.png" },
      { id: 3, title: "HTML Tags", description: "Learn about different HTML tags.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875695.png" },
      { id: 4, title: "HTML Formatting", description: "How to format HTML content.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875696.png" },
      { id: 5, title: "HTML Heading", description: "Using headings in HTML.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875697.png" },
      { id: 6, title: "HTML Paragraph", description: "Creating paragraphs in HTML.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875698.png" },
      { id: 7, title: "HTML Anchor", description: "Creating hyperlinks in HTML.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875699.png" },
      { id: 8, title: "HTML Image", description: "Displaying images in HTML.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875700.png" },
      { id: 9, title: "HTML Table", description: "Creating tables in HTML.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875701.png" },
      { id: 10, title: "HTML Lists", description: "Using lists in HTML.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875702.png" },
      { id: 11, title: "HTML Ordered List", description: "Creating ordered lists.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875703.png" },
      { id: 12, title: "HTML Unordered List", description: "Creating unordered lists.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875704.png" },
      { id: 13, title: "HTML Description List", description: "Creating description lists.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875705.png" },
      { id: 14, title: "HTML Form", description: "Creating forms in HTML.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875706.png" },
      { id: 15, title: "HTML Classes", description: "Understanding classes in HTML.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875707.png" },
      { id: 16, title: "HTML Id", description: "Understanding IDs in HTML.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875708.png" },
      { id: 17, title: "HTML Iframes", description: "Embedding content with iframes.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875709.png" },
      { id: 18, title: "HTML JavaScript", description: "Integrating JavaScript with HTML.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875710.png" },
      { id: 19, title: "HTML File Path", description: "Understanding file paths in HTML.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875711.png" },
    ],
  },
  {
    id: 2,
    title: "CSS Essentials",
    description: "Master the art of styling web pages.",
    image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    topics: [
      { id: 1, title: "CSS Selectors", description: "Learn about different CSS selectors.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875712.png" },
      { id: 2, title: "CSS Padding", description: "Understanding padding in CSS.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875713.png" },
      { id: 3, title: "CSS Grid", description: "Creating layouts with CSS Grid.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875714.png" },
      { id: 4, title: "CSS Flexbox", description: "Using Flexbox for layout.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875715.png" },
      { id: 5, title: "CSS Box Model", description: "Understanding the CSS box model.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875716.png" },
    ],
  },
  {
    id: 3,
    title: "React.js Fundamentals",
    description: "Learn how to build user interfaces with React.",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png",
    topics: [
      { id: 1, title: "Introduction to React", description: "An overview of React.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875717.png" },
      { id: 2, title: "React Components", description: "Understanding components.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875718.png" },
      { id: 3, title: "Props and State", description: "Managing state and props in React.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875719.png" },
      { id: 4, title: "React Hooks", description: "Using hooks in functional components.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875720.png" },
      { id: 5, title: "React Router", description: "Routing in React applications.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875721.png" },
      { id: 6, title: "Handling Events", description: "Event handling in React.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875722.png" },
      { id: 7, title: "Styling in React", description: "Different ways to style components.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875723.png" },
      { id: 8, title: "Forms in React", description: "Managing forms and inputs.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875724.png" },
      { id: 9, title: "Lifecycle Methods", description: "Understanding component lifecycle.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875725.png" },
      { id: 10, title: "Context API", description: "Using the Context API for state management.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875726.png" },
    ],
  },
  {
    id: 4,
    title: "Node.js Essentials",
    description: "Build scalable network applications with Node.js.",
    image: "https://cdn.gabrieleromanato.com/5c37214980b3/uploads/2018/09/nodejs.jpg",
    topics: [
      { id: 1, title: "Introduction to Node.js", description: "Understanding Node.js and its ecosystem.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875727.png" },
      { id: 2, title: "Setting Up Node.js", description: "Installing Node.js and setting up your environment.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875728.png" },
      { id: 3, title: "Node.js Modules", description: "Using built-in and custom modules.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875729.png" },
      { id: 4, title: "Express.js Basics", description: "Creating web applications with Express.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875730.png" },
      { id: 5, title: "RESTful APIs", description: "Building RESTful APIs with Node.js.", image: "https://cdn-icons-png.flaticon.com/512/1875/1875731.png" },
    ],
  },
  {
    id: 5,
    title: "Python for Beginners",
    description: "Start your programming journey with Python.",
    image: "https://learnersgalaxy.ai/wp-content/uploads/2024/01/Python-Symbol.png",
    topics: [
      { id: 1, title: "Introduction to Python", description: "Getting started with Python.", image: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/intro_c9cc87a9b3.jpg" },
      { id: 2, title: "Data Types in Python", description: "Understanding different data types.", image: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/variables_66049a7b8e.jpg" },
      { id: 3, title: "Control Structures", description: "Working with loops and conditionals.", image: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/datatypes_5c8c5cb922.jpg" },
      { id: 4, title: "Functions in Python", description: "Defining and calling functions.", image: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/operators_6fb101302f.jpg" },
      { id: 5, title: "File Handling", description: "Reading and writing files.", image: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/if_else_5fc3176c7b.jpg" },
    ],
  },
  {
    id: 6,
    title: "JavaScript Essentials",
    description: "Learn the core concepts of JavaScript.",
    image: "https://d2jdgazzki9vjm.cloudfront.net/images/javascript/javascript_logo.png",
    topics: [
      { id: 1, title: "Introduction to JavaScript", description: "Getting started with JavaScript.", image: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/js_intro_576930c043.jpg" },
      { id: 2, title: "Variables and Data Types", description: "Understanding variables and data types.", image: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/js_variables_065798c43b.jpg" },
      { id: 3, title: "Functions in JavaScript", description: "Defining and using functions.", image: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/js_if_else_2445d66c00.jpg" },
      { id: 4, title: "JavaScript DOM Manipulation", description: "Interacting with the DOM.", image: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/js_loops_1c15d59e91.jpg" },
      { id: 5, title: "Asynchronous JavaScript", description: "Understanding promises and async/await.", image: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/js_arrays_112ca9760f.jpg" },
    ],
  },
];

// Include the updated courses data here...

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
  },
});


function CoursesDetails() {
  const getCourseById = (id) => courses.find((course) => course.id === parseInt(id));

  const CourseList = () => {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Our Courses
        </Typography>
        <Grid container spacing={4}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card
                sx={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  sx={{
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
                <CardContent>
                  <Typography variant="h5">{course.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    component={Link}
                    to={`/course/${course.id}`}
                    sx={{
                      mt: 2,
                      borderRadius: 2,
                      borderColor: '#ff4081',
                      color: '#ff4081',
                      "&:hover": {
                        borderColor: "#ff80ab",
                        backgroundColor: "rgba(255, 64, 129, 0.1)",
                      },
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };

  const CourseDetails = () => {
    const { id } = useParams();
    const course = getCourseById(id);

    if (!course) {
      return (
        <Container sx={{ mt: 4 }}>
          <Typography variant="h5" color="error">
            Course not found!
          </Typography>
          <Button variant="outlined" color="primary" component={Link} to="/" sx={{ mt: 2 }}>
            Back to Courses
          </Button>
        </Container>
      );
    }

    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {course.title}
        </Typography>
        <TopicsComponent topics={course.topics} />
        <Button variant="outlined" color="primary" component={Link} to="/" sx={{ mt: 2 }}>
          Back to Courses
        </Button>
      </Container>
    );
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/course/:id" element={<CourseDetails />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default CoursesDetails;
