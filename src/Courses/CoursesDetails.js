import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

import TopicsComponent from "./TopicCard";
import TopicDetails from "./TopicDetails";
import { courses } from "./data";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

import {
  Button,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";


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
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card
                sx={{
                  position: "relative",
                  overflow: "hidden",
               
                }}
              >
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
                    to={`/course/${course.id}`} // Link to course details
                    sx={{
                      mt: 2,
                      borderRadius: 2,
                      borderColor: "#ff4081",
                      color: "#ff4081",
                     
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
        <TopicsComponent topics={course.topics} courseId={course.id} />
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
            <Route path="/course/:courseId/topic/:topicId" element={<TopicWrapper />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

const TopicWrapper = () => {
  const { courseId } = useParams();
  const course = courses.find((course) => course.id === parseInt(courseId));

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

  return <TopicDetails topics={course.topics} />;
};

export default CoursesDetails;
