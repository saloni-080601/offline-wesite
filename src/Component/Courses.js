import React from 'react';
import { Link } from 'react-router-dom';
import {CardMedia,Typography, Card, CardContent, Grid, CardActions, Button, Container } from '@mui/material';
import { courses } from "./data";

const Courses = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom>
                    Courses
                </Typography>
                <Grid container spacing={2}>
                    {courses.map(course => (
                        <Grid item key={course.id} xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        width="100%"
                                        sx={{
                                            objectFit: 'cover',
                                            borderRadius: 2,
                                        }}
                                        image={course.img}
                                    />
                                    <Typography variant="h5" component="div">
                                        {course.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {course.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" component={Link} to={`/courses/${course.id}`}>
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Courses;
