// TopicsComponent.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";

// Styled Card Component with Animation
const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[10],
  },
}));

const TopicsComponent = ({ topics }) => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      {topics.map((topic) => (
        <Grid item xs={12} sm={6} md={4} key={topic.id}>
          <StyledCard>
            {topic.image && (
              <CardMedia
                component="img"
                height="240"
                width="100%"
                sx={{p:4}}
                image={topic.image}
                alt={topic.title}
              />
            )}
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {topic.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {topic.description}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopicsComponent;
