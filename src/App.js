import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Courses from './Component/Courses';
import Topics from './Component/CourseTopics';
import TopicContent from './Component/topicContents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses/:courseId" element={<Topics />} />
        <Route path="/courses/:courseId/topic/:topicId" element={<TopicContent />} />
      </Routes>
    </Router>
  );
}

export default App;
