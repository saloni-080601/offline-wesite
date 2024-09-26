import React from 'react';
import { Button, Card, Grid, Typography, CardContent, CardMedia } from '@mui/material';

const TopicsComponent = ({ topics, onSelectTopic }) => {
    return (
        <Grid container spacing={4} sx={{mt:2}}>
            {topics.map((topic) => (
                <Grid item xs={12} sm={6} md={3} key={topic.id}>
                    <Card
                      sx={{
                        height:"100%",
                        width:"100%"
                      }}
                    >
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
                        <CardContent
                         sx={{width:"100%",height:"100%"}} 
                        >
                            <Typography variant="h5">{topic.title}</Typography>
                            <Button
                                variant="outlined"
                                onClick={() => onSelectTopic(topic.id)} 
                                sx={{ mt: 2 }}
                            >
                                View Topic Details
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default TopicsComponent;
