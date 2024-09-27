import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from './data';
import { Card, Grid, Typography, List, ListItem, ListItemText, Button, Container } from '@mui/material';

const TopicContent  = () => {

    const { courseId, topicId } = useParams();
    const course = courses.find(index => index.id === parseInt(courseId));
    const [selectedContentId, setSelectedContentId] = useState(null);

    if (!course) {
        return (
            <Typography variant="h6">Course not found</Typography>
        );
    }
    const topic = course.topics.find(index => index.id === parseInt(topicId));
    if (!topic) {
        return <Typography variant="h6">Topic not found</Typography>;
    }

    const getContentById = (id) => {
        return topic.content.find(item => item.id === id);
    };

    const selectedContent = selectedContentId ? getContentById(selectedContentId) : null;
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Card >
                        <Typography variant="h5">Content</Typography>
                        <List>
                            {topic.content.map(item => (
                                <ListItem button key={item.id} onClick={() => setSelectedContentId(item.id)}>
                                    <ListItemText primary={item.description} />
                                </ListItem>
                            ))}
                        </List>
                    </Card>
                </Grid>
                <Grid item xs={12} md={9}>
                    {selectedContent ? (
                        <div>
                            <Typography variant="h5">{selectedContent.description}</Typography>
                        </div>
                    ) : (
                        <Typography variant="body1">Select a content item to view its description.</Typography>
                    )}
                </Grid>
            </Grid>
        </Container >
    );
};

export default TopicContent;
