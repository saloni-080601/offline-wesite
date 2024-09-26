import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Courses from './Component/Courses';
import CourseTopics from './Component/CourseTopics';
import TopicContent from "./Component/topicContents";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseTopics />} />
        <Route path="/courses/:courseId/topics/:topicId" element={<TopicContent />} /> {/* New route for TopicContent */}
      </Routes>
    </Router>
  );
};

export default App;
