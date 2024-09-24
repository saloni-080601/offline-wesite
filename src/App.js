
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

import TopicCard from "./Courses/TopicCard"
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

export const courses = [
  {
    id: 1,
    title: "HTML Basics",
    description: "Learn the fundamentals of HTML.",

    image: "https://c7.alamy.com/comp/DWJC6N/html-against-futuristic-black-and-blue-background-DWJC6N.jpg",
  },
  {
    id: 2,
    title: "CSS Essentials",
    description: "Master the art of styling web pages.",
  },
  {
    id: 3,
    title: "JavaScript for Beginners",
    description: "Start coding with JavaScript.",
    image: "https://engineering.fb.com/wp-content/uploads/2012/12/javascript-illustration.png",
  },
  {
    id: 4,
    title: "React Fundamentals",
    description: "Build dynamic user interfaces with React.",

    image: "https://knackforge.com/wp-content/webp-express/webp-images/uploads/2022/11/Benefits-of-ReactJS.jpg.webp",
  },
  {
    id: 5,
    title: "Bootstrap 5",
    description: "Use Bootstrap to build responsive websites.",

    image: "https://blog.templatetoaster.com/wp-content/uploads/2020/05/Bootstrap-5.jpg",
  },
  {
    id: 6,
    title: "Node.js Basics",
    description: "Server-side JavaScript with Node.js.",
    image: "https://cdn.gabrieleromanato.com/5c37214980b3/uploads/2018/09/nodejs.jpg",
  }
];

function App() {
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
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
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
                    sx={{ mt: 2, borderRadius: 2, borderColor: '#ff4081', color: '#ff4081', '&:hover': { borderColor: '#ff80ab', backgroundColor: 'rgba(255, 64, 129, 0.1)' } }}
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
        <TopicCard />
        <Button variant="outlined" color="primary" component={Link} to="/" sx={{ mt: 2 }}>
          Back to Couurses
        </Button>
      </Container >
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

export default App;