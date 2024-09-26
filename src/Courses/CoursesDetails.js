import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import TopicsComponent from "./TopicCard";
import TopicDetails from "./TopicDetails";
import { courses } from "./data";
import {
  containerStyle,
  cardStyle,
  cardMediaStyle,
  cardButtonStyle,
  backButtonStyle
} from "./style";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#ff4081" },
  },
  typography: {
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
  },
});

function CoursesDetails() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleBack = () => {
    selectedTopic ? setSelectedTopic(null) : setSelectedCourse(null);
  };

  const CourseList = () => (
    <Container sx={containerStyle}>
      <Typography variant="h4" gutterBottom align="center">
        Our Courses
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={3} key={course.id}>
            <Card sx={cardStyle}>
              <CardMedia component="img" height="160" image={course.image} sx={cardMediaStyle} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5">{course.title}</Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setSelectedCourse(course)}
                  sx={cardButtonStyle}
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

  const CourseDetails = () => (
    <Container sx={containerStyle}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8} md={8}>
          <Typography variant="h4" gutterBottom>
            {selectedCourse.title}
          </Typography>
          <Typography variant="h6">{selectedCourse.description}</Typography>
        </Grid>

      </Grid>
      <TopicsComponent topics={selectedCourse.topics} onSelectTopic={setSelectedTopic} />
      <Button variant="outlined" color="primary" onClick={handleBack} sx={backButtonStyle}>
        Back to Courses
      </Button>
    </Container>
  );

  const TopicWrapper = () => {
    const topic = selectedCourse.topics.find((t) => t.id === selectedTopic);

    return (
      <Container sx={containerStyle}>
        <TopicDetails topic={topic} />
        <Button variant="outlined" color="primary" onClick={handleBack} sx={backButtonStyle}>
          Back to Course Details
        </Button>
      </Container>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {selectedCourse ? (selectedTopic ? <TopicWrapper /> : <CourseDetails />) : <CourseList />}
    </ThemeProvider>
  );
}

export default CoursesDetails;
