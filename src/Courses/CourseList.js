

import {
    Button,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Box,
    Container,
    CssBaseline,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useParams,
} from "react-router-dom";

const CourseList = ({ courses }) => {
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
                                    to={`/course/${course.id}`} // Link to course details
                                    sx={{
                                        mt: 2,
                                        borderRadius: 2,
                                        borderColor: "#ff4081",
                                        color: "#ff4081",
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
export default CourseList; 