// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Grid,
//   Button,
//   Container,
//   CssBaseline,
//   ThemeProvider,
//   createTheme,
// } from "@mui/material";

// import TopicsComponent from "./TopicCard";
// import TopicDetails from "./TopicDetails";
// import { courses } from "./data";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#1976d2",
//     },
//     secondary: {
//       main: "#ff4081",
//     },
//   },
//   typography: {
//     h4: {
//       fontWeight: 600,
//     },
//     h5: {
//       fontWeight: 500,
//     },
//   },
// });

// function CoursesDetails() {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [selectedTopic, setSelectedTopic] = useState(null);

//   const handleCourseSelect = (courseId) => {
//     const course = courses.find((c) => c.id === courseId);
//     setSelectedCourse(course);
//     setSelectedTopic(null);
//   };

//   const handleTopicSelect = (topicId) => {
//     setSelectedTopic(topicId);
//   };

//   const handleBackToCourses = () => {
//     setSelectedCourse(null);
//     setSelectedTopic(null);
//   };

//   const handleBackToCourseDetails = () => {
//     setSelectedTopic(null);
//   };

//   // Main Course List
//   const CourseList = () => {
//     return (
//       <Container sx={{ mt: 4 }}>
//         <Typography variant="h4" gutterBottom align="center">
//           Our Courses
//         </Typography>
//         <Grid container spacing={4} sx={{ mt: 3 }}>
//           {courses.map((course) => (
//             <Grid item xs={12} sm={6} md={3} key={course.id}>
//               <Card
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   height: '100%',
//                   width: '100%',
//                   overflow: 'hidden',
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="160"
//                   image={course.image}
//                   sx={{ objectFit: 'cover' }}
//                 />
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography variant="h5">{course.title}</Typography>

//                   <Button
//                     variant="outlined"
//                     color="secondary"
//                     onClick={() => handleCourseSelect(course.id)}
//                     sx={{
//                       mt: 2,
//                       borderRadius: 2,
//                       borderColor: "#ff4081",
//                       color: "#ff4081",
//                       width: '100%',
//                     }}
//                   >
//                     View Details
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     );
//   };

//   // Course Details
//   const CourseDetails = () => {
//     if (!selectedCourse) {
//       return (
//         <Container sx={{ mt: 4 }}>
//           <Typography variant="h5" color="error">
//             Course not found!
//           </Typography>
//           <Button variant="outlined" color="primary" onClick={handleBackToCourses} sx={{ mt: 2 }}>
//             Back to Courses
//           </Button>
//         </Container>
//       );
//     }

//     return (
//       <Container sx={{ mt: 4 }}>
//         <Typography variant="h4" gutterBottom>
//           {selectedCourse.title}
//         </Typography>
//         <TopicsComponent topics={selectedCourse.topics} onSelectTopic={handleTopicSelect} />
//         <Button variant="outlined" color="primary" onClick={handleBackToCourses} sx={{ mt: 2 }}>
//           Back to Courses
//         </Button>
//       </Container>
//     );
//   };

//   const TopicWrapper = () => {
//     if (!selectedCourse) {
//       return (
//         <Container sx={{ mt: 4 }}>
//           <Typography variant="h5" color="error">
//             Course not found!
//           </Typography>
//           <Button variant="outlined" color="primary" onClick={handleBackToCourses} sx={{ mt: 2 }}>
//             Back to Courses
//           </Button>
//         </Container>
//       );
//     }

//     const topic = selectedCourse.topics.find((t) => t.id === selectedTopic);

//     if (!topic) {
//       return (
//         <Container sx={{ mt: 4 }}>
//           <Typography variant="h5" color="error">
//             Topic not found!
//           </Typography>
//           <Button variant="outlined" color="primary" onClick={handleBackToCourseDetails} sx={{ mt: 2 }}>
//             Back to Course Details
//           </Button>
//         </Container>
//       );
//     }

//     return (
//       <Container sx={{ mt: 4 }}>
//         <TopicDetails topic={topic} />
//         <Button variant="outlined" color="primary" onClick={handleBackToCourseDetails} sx={{ mt: 2 }}>
//           Back to Course Details
//         </Button>
//       </Container>
//     );
//   };
//   return (
//     <div className="App">
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {!selectedCourse ? (
//           <CourseList />
//         ) : selectedTopic ? (
//           <TopicWrapper />
//         ) : (
//           <CourseDetails />
//         )}
//       </ThemeProvider>
//     </div>
//   );
// }

// export default CoursesDetails;

// import React, { useState } from "react";
// import {
//   Card, CardContent, CardMedia, Typography, Grid, Button, Container, CssBaseline, ThemeProvider, createTheme,
// } from "@mui/material";
// import TopicsComponent from "./TopicCard";
// import TopicDetails from "./TopicDetails";
// import { courses } from "./data";

// const theme = createTheme({
//   palette: { primary: { main: "#1976d2" }, secondary: { main: "#ff4081" } },
//   typography: { h4: { fontWeight: 600 }, h5: { fontWeight: 500 } },
// });

// function CoursesDetails() {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [selectedTopic, setSelectedTopic] = useState(null);

//   const handleCourseSelect = (courseId) => {
//     setSelectedCourse(courses.find((c) => c.id === courseId));
//     setSelectedTopic(null);
//   };

//   const CourseList = () => (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom align="center">Our Courses</Typography>
//       <Grid container spacing={4} sx={{ mt: 3 }}>
//         {courses.map((course) => (
//           <Grid item xs={12} sm={6} md={3} key={course.id}>
//             <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
//               <CardMedia component="img" height="160" image={course.image} />
//               <CardContent>
//                 <Typography variant="h5">{course.title}</Typography>
//                 <Button variant="outlined" color="secondary" onClick={() => handleCourseSelect(course.id)} sx={{ mt: 2 }}>
//                   View Details
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );

//   const CourseDetails = () => selectedCourse && (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4">{selectedCourse.title}</Typography>
//       <TopicsComponent topics={selectedCourse.topics} onSelectTopic={setSelectedTopic} />
//     </Container>
//   );

//   const TopicWrapper = () => {
//     const topic = selectedCourse?.topics.find((t) => t.id === selectedTopic);
//     return topic ? (
//       <Container sx={{ mt: 4 }}>
//         <TopicDetails topic={topic} />
//         <Button variant="outlined" color="primary" onClick={() => setSelectedTopic(null)} sx={{ mt: 2 }}>
//           Back to Course Details
//         </Button>
//       </Container>
//     ) : null;
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {selectedCourse ? (selectedTopic ? <TopicWrapper /> : <CourseDetails />) : <CourseList />}
//     </ThemeProvider>
//   );
// }

// export default CoursesDetails;



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
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Our Courses
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={3} key={course.id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia component="img" height="160" image={course.image} sx={{ objectFit: 'cover' }} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5">{course.title}</Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setSelectedCourse(course)}
                  sx={{ mt: 2, borderRadius: 2, width: '100%' }}
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
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {selectedCourse.title}
      </Typography>
      <TopicsComponent topics={selectedCourse.topics} onSelectTopic={setSelectedTopic} />
      <Button variant="outlined" color="primary" onClick={handleBack} sx={{ mt: 2 }}>
        Back to Courses
      </Button>
    </Container>
  );

  const TopicWrapper = () => {
    const topic = selectedCourse.topics.find((t) => t.id === selectedTopic);

    return (
      <Container sx={{ mt: 4 }}>
        <TopicDetails topic={topic} />
        <Button variant="outlined" color="primary" onClick={handleBack} sx={{ mt: 2 }}>
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
