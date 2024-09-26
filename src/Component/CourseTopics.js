import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography,Card, CardContent, CardMedia ,Container} from '@mui/material';
import { courseTopics } from "./data";

const CourseTopics = () => {
    const { courseId } = useParams();
    const topics = courseTopics[courseId];

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Topics for Course {courseId}
            </Typography>
            <Grid container spacing={2}>
                {topics ? (
                    topics.map((topic, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        width="100%"
                                        sx={{
                                            objectFit: 'cover',
                                            borderRadius: 2,
                                        }}
                                        image={topic.img}
                                    />
                                    <Typography variant="h6" component={Link} to={`/courses/${courseId}/topics/${index + 1}`} color="primary" style={{ textDecoration: 'none' }}>
                                        {topic.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography>No topics available</Typography>
                )}
            </Grid>
        </Container>
    );
};

export default CourseTopics;
