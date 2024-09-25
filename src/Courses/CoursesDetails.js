
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import TopicsComponent from "./TopicCard";
import TopicDetails from "./TopicDetails";
import {courses } from "./data";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

import {
  Button,
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[10],
  },
}));
<>
  <TopicsComponent />
  <TopicDetails />
</>


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
                  position: 'relative',
                  overflow: 'hidden', // Ensures the overlay fits within the card
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <div className="image-overlay">
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
                  <div className="overlay">
                    <div className="overlay-text">More Info</div>
                  </div>
                </div>
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
        <TopicsComponent topics={course.topics} courseId={course.id} /> {/* Pass courseId */}
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
            <Route path="/course/:courseId/topic/:topicId" element={<TopicDetails topics={courses.flatMap(course => course.topics)} />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default CoursesDetails;
