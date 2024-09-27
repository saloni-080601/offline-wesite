import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from './data';
import { Card, Grid, Typography, List, ListItem, ListItemText, Button, Container } from '@mui/material';

const TopicContent = () => {

    const { courseId, topicId } = useParams();
    const course = courses.find(index => index.id === parseInt(courseId));
    const [selectedContentId, setSelectedContentId] = useState(null);
    const topic = course.topics.find(index => index.id === parseInt(topicId));

    const getContentById = (id) => {
        return topic.content.find(item => item.id === id);
    };

    const selectedContent = selectedContentId ? getContentById(selectedContentId) : null;
    return (
        <Container maxWidth="xl" sx={{ mt: 7 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <Typography variant="h5" sx={{ fontSize: "bold" ,p:2,fontSize:"35px"}}>Topic Content</Typography>
                        <List>
                            {topic.content.map(item => (
                                <ListItem button key={item.id} onClick={() => setSelectedContentId(item.id)}>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            ))}
                        </List>
                    </Card>
                </Grid>
                <Grid item xs={12} md={9} sx={{ p: 4 }}>
                    {selectedContent ? (
                        <>
                            <Typography variant="h5">{selectedContent.description}</Typography>
                        </>
                    ) : (
                        <Typography variant="body1">Select a content item to view its description.</Typography>
                    )}
                </Grid>
            </Grid>
        </Container >
    );
};

export default TopicContent;
