import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../Data/data';
import { Divider, Box, Card, Grid, Typography, List, ListItem, ListItemText, Container, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { classs } from './style';

const TopicContent = () => {

    const { courseId, topicId } = useParams();
    const course = courses.find(index => index.id === parseInt(courseId));
    const [selectedContentId, setSelectedContentId] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const topic = course ? course.topics.find(index => index.id === parseInt(topicId)) : null;
    useEffect(() => {
        if (topic && topic.content.length > 0) {
            setSelectedContentId(topic.content[0].id);
        }
    }, [topic]);

    const getContentById = (id) => {
        return topic.content.find(item => item.id === id);
    };

    const selectedContent = selectedContentId ? getContentById(selectedContentId) : null;

    return (
        <Container maxWidth="xl" >
            <IconButton
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <MenuIcon />
            </IconButton>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}
                    sx={{
                        display: { xs: isSidebarOpen ? 'block' : 'none', md: 'block' },
                        position: { md: 'fixed' },
                        top: { md: 0 },
                        height: { xs: 'auto', md: '100vh' },
                        overflowY: 'auto'
                    }}>
                    <Card>
                        <Typography variant="h5" sx={{ p: 2 }}>Content</Typography>
                        <Divider />
                        <List>
                            {topic.content.map(item => (
                                <React.Fragment key={item.id}>
                                    <Divider />
                                    <ListItem button onClick={() => setSelectedContentId(item.id)}>
                                        <ListItemText
                                            sx={{ fontWeight: 'bold', fontSize: '30px' }}
                                            primary={item.title}
                                        />

                                    </ListItem>
                                </React.Fragment>
                            ))}
                        </List>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} sx={{ marginLeft: { md: '30%' }, height: { xs: 'auto', md: '100vh' } }}>
                    {selectedContent ? (
                        <Box>
                            {Array.isArray(selectedContent.description) && selectedContent.description.length > 0 ? (
                                selectedContent.description.map((descItem, index) => (
                                    <Box key={index} >
                                        <Typography
                                            sx={classs.Subtitle}
                                            variant='h3'
                                        >
                                            {descItem.Question}
                                        </Typography>
                                        {descItem.vasualize && (
                                            <Typography >{descItem.vasualize}</Typography>
                                        )}
                                        <Typography
                                            sx={classs.title}
                                            variant='h3'
                                        >{descItem.visualize}</Typography>
                                        <Typography variant='h6'>{descItem.Example}</Typography>
                                        {descItem.code && (
                                            <Typography sx={{ mt: 2 }} component="pre" style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
                                                {descItem.code}
                                            </Typography>
                                        )}
                                        <Typography
                                            sx={classs.text}
                                            variant='h5'
                                        >
                                            {descItem.text}
                                        </Typography>
                                        <Typography
                                            sx={classs.Subtitle}
                                            variant='h3'
                                        >{descItem.title}</Typography>
                                        <Typography
                                            sx={classs.text}
                                            variant='h4'
                                        >{descItem.title1}</Typography>
                                        <Typography
                                            sx={classs.text}
                                            variant='h5'
                                        >
                                            {descItem.text1}
                                        </Typography>
                                        <img scr={descItem.img}></img>
                                        
                                    </Box>
                                ))
                            ) : (
                                <Typography variant="body1">No description available.</Typography>
                            )}
                        </Box>
                    ) : (
                        <Typography variant="body1">Select a content item to view its description.</Typography>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default TopicContent;
