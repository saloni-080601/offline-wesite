import React from "react";
import {
  Button,
  Box,
  Container,
  Typography
} from "@mui/material";

const TopicDetails = ({ topic, onBack }) => {
  if (!topic) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" color="error">
          Topic not found!
        </Typography>
      </Container>
    );
  }
  return (
    <Container sx={{ mt: 4, bgcolor: '#f9f9f9', borderRadius: '8px', p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        {topic.title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#555' }}>
        {topic.content.what}
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: '#555' }}>
        {topic.content.why}
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold', color: '#444' }}>
        Q&A
      </Typography>
      {topic.content.qa.map((item, index) => (
        <Box key={index} sx={{ mb: 2, p: 2, bgcolor: '#fff', borderRadius: '4px', boxShadow: 1 }}>
          <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>
            {item.question}
          </Typography>
          <Typography variant="body2" sx={{ color: '#333' }}>
            {item.answer}
          </Typography>
        </Box>
      ))}
      <Button
        variant="outlined"
        color="primary"
        onClick={onBack} 
        sx={{ mt: 2, '&:hover': { backgroundColor: '#3f51b5', color: '#fff' } }}
      >
        Back to Course
      </Button>
    </Container>
  );
};

export default TopicDetails;
