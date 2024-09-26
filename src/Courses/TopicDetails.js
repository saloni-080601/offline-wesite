// import React from "react";
// import {
//   Box,
//   Container,
//   Typography
// } from "@mui/material";

// const TopicDetails = ({ topic }) => {
//   return (
//     <Container sx={{ mt: 4, mb: 4, p: 2, backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: 2 }}>
//       <Typography variant="h4" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
//         {topic.title}
//       </Typography>
//       <Typography variant="body1" sx={{ mb: 2 }}>
//         {topic.content.what}
//       </Typography>
//       <Typography variant="body1" sx={{ mb: 2 }}>
//         {topic.content.why}
//       </Typography>
//       <Typography variant="h6" sx={{ mt: 4, mb: 2, color: '#007BFF' }}>
//         Q&A
//       </Typography>
//       {topic.content.qa.map((item, index) => (
//         <Box key={index} sx={{ mb: 3, padding: 2, border: '1px solid #ddd', borderRadius: '4px' }}>
//           <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#555' }}>
//             {item.question}
//           </Typography>
//           <Typography variant="body2" sx={{ color: '#666' }}>
//             {item.answer}
//           </Typography>
//         </Box>
//       ))}
//     </Container>
//   );
// };

// export default TopicDetails;


import React from "react";
import {
  Box,
  Container,
  Typography
} from "@mui/material";
import {
  containerStyle1,
  titleStyle,
  paragraphStyle,
  qaSectionTitleStyle,
  qaBlockStyle,
  questionStyle,
  answerStyle
} from './style'; 

const TopicDetails = ({ topic }) => {
  return (
    <Container sx={containerStyle1}>
      <Typography variant="h4" gutterBottom sx={titleStyle}>
        {topic.title}
      </Typography>

      <Typography variant="body1" sx={paragraphStyle}>
        {topic.content.what}
      </Typography>

      <Typography variant="body1" sx={paragraphStyle}>
        {topic.content.why}
      </Typography>

      <Typography variant="h6" sx={qaSectionTitleStyle}>
        Q&A
      </Typography>

      {topic.content.qa.map((item, index) => (
        <Box key={index} sx={qaBlockStyle}>
          <Typography variant="body2" sx={questionStyle}>
            {item.question}
          </Typography>

          <Typography variant="body2" sx={answerStyle}>
            {item.answer}
          </Typography>
        </Box>
      ))}
    </Container>
  );
};

export default TopicDetails;
