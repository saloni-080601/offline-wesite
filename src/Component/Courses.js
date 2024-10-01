import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Data/data";
import { Container, Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";

import {classs} from "./style";

const Courses = () => {
    return (
        <Container sx={{mt:6}}>
            <Typography variant="h3" gutterBottom>
                Courses
            </Typography>
            <Grid container spacing={2} sx={{mt:3}}>
                {courses.map(course => (
                    <Grid item xs={12} sm={6} md={3} key={course.id}>
                        <Card
                        sx={classs.card} 
                        >
                            <Link to={`/courses/${course.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={course.img}
                                    alt="Random Image"
                                />
                                <CardContent>
                                    <Typography variant="h6">{course.name}</Typography>
                                </CardContent>
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Courses;