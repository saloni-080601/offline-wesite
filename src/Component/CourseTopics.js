import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from './data';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Topics = () => {

    const { courseId } = useParams();
    const selectedCourse = courses.find(course => course.id === parseInt(courseId));
    if (!selectedCourse) {
        return <Typography variant="h6">Course not found</Typography>;
    }
    return (
        <Container>
            <Typography variant="h3" gutterBottom sx={{ mt: 7 }}>
                {selectedCourse.name} Topics
            </Typography>
            <Grid container spacing={4} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={6} md={7} lg={7}>
                    <Typography variant='h6' sx={{ fontSize: "17px" }}>{selectedCourse.description}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{ mt: 3 }}>
                {selectedCourse.topics.map((topic, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Link to={`/courses/${courseId}/topic/${index + 1}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={topic.img}
                                    alt="Random Image"
                                />
                                <CardContent>
                                    <Typography variant="h6">
                                        {topic.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Topics;
