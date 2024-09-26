import React from "react";
import {
  Box,
  Container,
  Typography
} from "@mui/material";
const TopicDetails = ({ topic }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom >
        {topic.title}
      </Typography>
      <Typography variant="body1">
        {topic.content.what}
      </Typography>
      <Typography variant="body1">
        {topic.content.why}
      </Typography>
      <Typography variant="h6">
        Q&A
      </Typography>
      {topic.content.qa.map((item, index) => (
        <Box key={index}>
          <Typography variant="body2">
            {item.question}
          </Typography>
          <Typography variant="body2">
            {item.answer}
          </Typography>
        </Box>
      ))}
    </Container>
  );
};

export default TopicDetails;
