import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Card, Grid, Typography, CardContent, CardMedia } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
    transition: "transform 0.3s, box-shadow 0.3s",
    marginTop: "40px",
}));

const TopicsComponent = ({ topics, onSelectTopic }) => {
    return (
        <Grid container spacing={4}>
            {topics.map((topic) => (
                <Grid item xs={12} sm={6} md={3} key={topic.id}>
                    <StyledCard>
                        {topic.image && (
                            <CardMedia
                                component="img"
                                height="200"
                                width="100%"
                                sx={{
                                    objectFit: 'cover',
                                    borderRadius: 2,
                                }}
                                image={topic.image}
                                alt={topic.title}
                            />
                        )}
                        <CardContent>
                            <Typography variant="h5">{topic.title}</Typography>
                            <Button
                                variant="outlined"
                                onClick={() => onSelectTopic(topic.id)} 
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
