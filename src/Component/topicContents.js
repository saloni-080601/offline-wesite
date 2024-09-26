import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import {topicContents} from "./data";

const TopicContent = () => {
    const { courseId, topicId } = useParams();
    const content = topicContents[courseId]?.[topicId];

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Content for Course {courseId}, Topic {topicId}
            </Typography>
            <Typography variant="body1">
                {content ? content : 'No content available'}
            </Typography>
        </Box>
    );
};

export default TopicContent;
