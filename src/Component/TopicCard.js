import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {classs} from "./style";

import { Button,Card ,Grid ,Typography,CardContent,CardMedia } from '@mui/material';
const StyledCard = styled(Card)(({ theme }) => ({
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: theme.shadows[10],
    },
}));

const TopicsComponent = ({ topics, courseId }) => {
    return (
        <Grid container spacing={4}>
            {topics.map((topic) => (
                <Grid item xs={12} sm={6} md={4} key={topic.id}>
                    <StyledCard
                      sx={classs.card} 
                    >
                        {topic.image && (
                            <CardMedia
                                component="img"
                                height="240"
                                width="100%"
                                sx={{ p: 4 }}
                                image={topic.image}
                                alt={topic.title}
                            />
                        )}
                        <CardContent>
                            <Typography variant="h5">{topic.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {topic.description}
                            </Typography>
                            <Button
                                variant="outlined"
                                component={Link}
                                to={`/course/${courseId}/topic/${topic.id}`} 
                                sx={{ mt: 2 }}
                            >
                                View Topic Details
                            </Button>
                        </CardContent>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default TopicsComponent;