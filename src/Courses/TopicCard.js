import React, { useState } from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const javascriptTopics = [
    {
        id: 1,
        title: "Variables in JavaScript",
        description: "Variables are containers for storing data values.",
        image: "https://cdn-icons-png.flaticon.com/512/1875/1875403.png",
        what: "A variable is a named storage for data.",
        why: "Variables allow you to store, modify, and retrieve data easily.",
        example: "let x = 5; // This creates a variable x with value 5.",
        questions: [
            { question: "What are the different types of variables in JavaScript?", answer: "JavaScript has three types of variable declarations: var, let, and const." },
            { question: "How do you declare a variable?", answer: "You can declare a variable using let, const, or var, for example, let myVariable = 10;" },
        ]
    },
    {
        id: 2,
        title: "Data Types in JavaScript",
        description: "JavaScript provides different data types to hold different types of values.",
        image: "https://cdn-icons-png.flaticon.com/512/2921/2921184.png",
        what: "Data types specify the type of data that a variable can hold.",
        why: "Understanding data types is essential for effective programming and debugging.",
        example: "let isActive = true; // Boolean type\nlet age = 30; // Number type\nlet name = 'John'; // String type",
        questions: [
            { question: "What are the primitive data types in JavaScript?", answer: "The primitive data types are undefined, null, boolean, number, string, and symbol." },
            { question: "How can you check the type of a variable?", answer: "You can use the typeof operator, e.g., typeof age returns 'number'." },
        ]
    },
    {
        id: 3,
        title: "Functions in JavaScript",
        description: "Functions are blocks of code designed to perform a particular task.",
        image: "https://cdn-icons-png.flaticon.com/512/889/889577.png",
        what: "A function is a reusable block of code that performs a task.",
        why: "Functions allow you to write modular and maintainable code.",
        example: "function add(a, b) { return a + b; }",
        questions: [
            { question: "What are function declarations?", answer: "Function declarations define a function using the function keyword." },
            { question: "What is a function expression?", answer: "A function expression defines a function as part of a larger expression, e.g., const add = function(a, b) { return a + b; }" },
        ]
    },
    {
        id: 4,
        title: "Objects in JavaScript",
        description: "Objects in JavaScript are collections of key-value pairs.",
        image: "https://cdn-icons-png.flaticon.com/512/2721/2721292.png",
        what: "Objects are used to store collections of data and more complex entities.",
        why: "Objects allow for structuring and organizing your code more effectively.",
        example: "const person = { name: 'John', age: 30 };",
        questions: [
            { question: "How do you create an object in JavaScript?", answer: "You can create an object using object literals: const obj = { key: value };" },
            { question: "What is 'this' in JavaScript?", answer: "'this' refers to the current object in a method or function call." },
        ]
    },
    {
        id: 5,
        title: "Arrays in JavaScript",
        description: "Arrays are used to store multiple values in a single variable.",
        image: "https://cdn-icons-png.flaticon.com/512/1875/1875654.png",
        what: "An array is a special variable that can hold more than one value at a time.",
        why: "Arrays help you organize and manipulate collections of data.",
        example: "const fruits = ['apple', 'banana', 'cherry'];",
        questions: [
            { question: "How do you create an array in JavaScript?", answer: "You can create an array using square brackets: const arr = [1, 2, 3];" },
            { question: "How do you access array elements?", answer: "You can access array elements using their index, e.g., arr[0] returns the first element." },
        ]
    },
    {
        id: 6,
        title: "Loops in JavaScript",
        description: "Loops are used to repeat a block of code multiple times.",
        image: "https://cdn-icons-png.flaticon.com/512/3065/3065307.png",
        what: "A loop is a control flow statement that allows code to be executed repeatedly.",
        why: "Loops help reduce repetition in your code by automating repetitive tasks.",
        example: "for (let i = 0; i < 5; i++) { console.log(i); }",
        questions: [
            { question: "What are the types of loops in JavaScript?", answer: "The main types of loops are for, while, and do-while loops." },
            { question: "How do you break out of a loop?", answer: "You can use the break statement to exit a loop prematurely." },
        ]
    },
];

const TopicsComponent = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);

    const handleBackClick = () => {
        setSelectedTopic(null);
    };

    return (
        <>
            {selectedTopic ? (
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                        {selectedTopic.title}
                    </Typography>
                    <img
                        src={selectedTopic.image}
                        alt={selectedTopic.title}
                        style={{ maxWidth: '300px', height: 'auto', marginBottom: '20px' }}
                    />
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        {selectedTopic.description}
                    </Typography>

                    <Typography variant="h6" sx={{ mb: 1 }}>What:</Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>{selectedTopic.what}</Typography>

                    <Typography variant="h6" sx={{ mb: 1 }}>Why:</Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>{selectedTopic.why}</Typography>

                    <Typography variant="h6" sx={{ mb: 1 }}>Example:</Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>{selectedTopic.example}</Typography>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography>Questions & Answers</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {selectedTopic.questions.map((q, index) => (
                                <div key={index}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{q.question}</Typography>
                                    <Typography variant="body2" sx={{ mb: 2 }}>{q.answer}</Typography>
                                </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>

                    <Button variant="contained" color="primary" onClick={handleBackClick}>
                        Back to Topics
                    </Button>
                </div>
            ) : (
                <>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        JavaScript Topics
                    </Typography>

                    <Grid container spacing={4} sx={{ padding: '20px' }}>
                        {javascriptTopics.map((topic) => (
                            <Grid item xs={12} sm={6} md={4} key={topic.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card
                                        sx={{
                                            maxWidth: 345,
                                            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
                                            transition: '0.3s',
                                            borderRadius: '15px',
                                            overflow: 'hidden',
                                            "&:hover": {
                                                boxShadow: '0px 12px 20px rgba(0, 0, 0, 0.2)',
                                                transform: 'scale(1.05)',
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            alt={topic.title}
                                            height="180"
                                            image={topic.image}
                                            sx={{
                                                objectFit: 'contain',
                                                padding: '10px',
                                                background: '#f0f0f0',
                                            }}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                                {topic.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                {topic.description}
                                            </Typography>
                                            <Button
                                                size="small"
                                                color="primary"
                                                onClick={() => setSelectedTopic(topic)}
                                            >
                                                Learn More
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </>
    );
};

export default TopicsComponent;
