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
import { motion } from "framer-motion";
import { courses } from "./data";
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

function CourseDetails() {
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
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Button variant="outlined" color="primary" component={Link} to="/" sx={{ mt: 2 }}>
                        Back to Courses
                    </Button>
                </motion.div>
            </Container>
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<CourseList />} />
                    <Route path="/course/:id" element={<CourseDetails />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default CourseDetails;