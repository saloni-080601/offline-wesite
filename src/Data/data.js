// data.js
import css from "../Assets/css.png";
import javascript from "../Assets/javascript_logo.png";
import react from "../Assets/react.png";
import python from "../Assets/python-alt.png";
import img1 from "../Assets/if_else_5fc3176c7b.jpg";
import img2 from "../Assets/variables_66049a7b8e.jpg";
import img3 from "../Assets/intro_c9cc87a9b3.jpg";
import img4 from "../Assets/lists_101_6996e5acc4.jpg";
import img5 from "../Assets/loops_101_608858b2e8.jpg";
import english from "../Assets/softSkills.svg";
import typesOfBrackets from "../Assets/types_of_brackets.png";
export const courses = [
    {
        id: 1,
        name: 'Python',
        description: 'Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991. Here are some key features and characteristics of Python:',
        img: python,
        topics: [
            {
                id: 1,
                title: 'Introduction to Python',
                img: img1,
                content: [
                    {
                        id: 1,
                        title: "How to begin",
                        description: [
                            { id: 1, Question: "Anyone can do anything", text: "We all know that starting to learn something takes hardwork and time but it's beneficial in the end. Many of us are often confused about whether we should learn programming or not. Well programming is not about just getting a job, it helps us develop our creativity, logical thinking and many more. For example the following video introduces some famous personalities for whom programming is not a career but a way of living. Hope you'd enjoy this video." },
                            { id: 2, Question: "How to begin this course?", text: "When you will move forward in this course, you will find examples of python code in different ways. You have to run these examples onpython shell. Openpython shellin your laptop." },
                            {
                                Example: "Code Example",
                                code: `$ python`,
                            },
                            {
                                id: 3,
                                Example: "Code Example",
                                code: `print("This line will be printed in python.")\nprint("This, another line will also be printed in python.")\nprint(2 + 5)\ni = 0\nprint(i)\nwhile i < 100:\n    print("I will be printed again and again. :)")`,
                                text: "Select the code given above, press Ctrl + C together so that the code will be copied and then you can go to the terminal and paste this code by pressing Ctrl + Shift + V on the terminal.If you will run this code line by line, you will be able to understand the code line by line. This complete code is doing 4-5 different tasks, how can we break this code into parts and understand it, this method is given below and it is going to help you in the future. This is the first line, run this line on the terminal, you will be able to see something on the terminal.",
                            },
                            {
                                id: 4,
                                Example: "Code Example",
                                code: `print("This line will be printed in python.")`,
                                text: "Please run this second code on the Terminal and see what happens there?",
                            }
                            , {
                                id: 5,
                                Example: "Code Example",
                                code: `print("This, another line will also be printed in python.")`,
                                text: "Now run this line separately on the Terminal and see what happens there?",
                            },
                            {
                                id: 6,
                                Example: "Code Example",
                                code: `print(2 + 5)`,
                                text: "Now copy-paste this code together on the Terminal and see what happens there?"
                            },
                            {
                                id: 7,
                                Example: "Code Example",
                                code: `print("This line will be printed in python.")\nprint("This, another line will also be printed in python.")\nprint(2 + 5)`,
                                text: "What is happening in this line, you will be able to understand later? But run this code and try to understand.",
                            },
                            {
                                id: 8,
                                Example: "Code Example",
                                code: `i = 0\nprint(i)`,
                                text: "Copy-paste this on Terminal and to stop this press Ctrl + C together on the Terminal.",
                            },
                            {
                                id: 9,
                                Example: "Code Example",
                                code: `i = 0\nwhile i < 100:\n    print("I will be printed again and again.:)")`,
                                text: "Now run this code and try to identify the difference between the code given above and below.",
                            },
                            {
                                id: 10,
                                Example: "Code Example",
                                code: `i = 0\nwhile i < 100:\n    print("I will be printed again and again:)")\n    i = i + 1`,
                                text: "Now run this code together and to stop this code what will you do?",
                            },
                            {
                                id: 11,
                                Example: "Code Example",
                                text: "Now think that what will you do to stop the code given above? Similarly, in this way, only codes will be written in the whole course. You will be required to run the code this way only. To run this code you need to open an application named Terminal on your laptop. After opening it, you need to type the python code and then run it.",
                                code: `print("This line will be printed in python.")\nprint("This, another line will also be printed in python.")\nprint(2 + 5)\ni = 0\nprint(i)\nwhile i < 100:\n    print("I will be printed again and again.:)")`,
                            },
                            {
                                id: 12,
                                Question: "Very Important Rules",
                                text: "Execute each example onpython shell. If you are not doing this you are making a fool of yourself. By copy-pasting the code, you will not be able to understand it properly. You should write each code by yourself and then run it. Words written in UPPER CASE orbold lettersare very important. Learn them, you will come across them many times. During the course you need to answer some questions at many places. To give answers you can upload the file.",

                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "why",
                        description: [

                            { id: 1, Question: "What are the feature of coding", id: 1, text: 'When we want to send a file like an image, audio or video file, we sometimes compresses it or the software or website we use compresses it for us. This compression is necessary so that less space and data is used to store and send those files. In the following video Aloe Blacc, a singer, songwriter and entertainer who also created his website by himself, explains how compressions of files happens through coding and why it is useful. Coding has practical applications in many industries, for example following video discusses use of coding in medical science and how it can save lives, in this video Joshua was treated in one day, thanks to algorithms they used to analyse his gene sequence which is impossible to figure out otherwise.' },
                            { id: 2, Question: "Difference Between Python2 and Python3" },
                            {
                                id: 3,
                                Question: "Code Example",
                                code: `Print "Hello World"`,
                                text: "1. This is old version of python .2. Python2 has one print statement.3. In Python2 while printing we write like this ,4. In Python2 we use raw_input for user input."
                            },
                            {
                                id: 4,
                                text: "5. Python2 has 31 keywords .Python3 1. This is the new version of python .2. Python3 has one print() .",
                                Question: "In Python3 me while printing we use parentheses () .",
                                code: `age = int(raw_input("enter your age"))`,
                                text: "3. In Python3 we use input for user's input .",
                            },
                            {
                                id: 5,
                                Question: "Code Example",
                                code: `print("Hello World")`,
                                text: "3. In Python3 we use input for user's input .",
                            },
                            {
                                Question: "Code Example",
                                code: `age = int(input("please enter your age"))`,
                                text1: "5. Python3 has 33 keywords .",
                            }
                        ]
                    },
                    {
                        id: 3,
                        title: "WhatDoComputersDo",
                        description: [
                            { Question: "What Do Computers Do?", text: 'In our human history, there have been some great inventions that have brought progress in the lives of humans and have also provided direction to it. Ex:WHEEL Humans were not able to lift or carry heavy loads to longer distances. This was due to human physical limitations.By the invention of WHEEL, humans were able to carry very heavy loads as well as to travel long distances also.The world became smaller to us. Hence, the invention of WHEEL solved lots of problems. Now, we can even meet our relatives staying far off and transportation of goods also became easier. Another great invention that brought a drastic change in human history-COMPUTER. Just as WHEELS removed our physical limitations, similarly COMPUTERS helped in expanding our brain capacity or mental limitations. The human brain can solve many complex tasks/problems. But if our brain continuously solves these complex problems, our brain will start getting tired or bored. Our brain will start making mistakes and it becomes difficult for us to solve the problem. Just as wheels removed our physical limitations, the invention of computers, helped in removing our mental limitations. By giving instructions to the Computer, we can make them perform complex tasks, continuously without making any mistakes and without getting tired. Computers don’t have their brain so they can’t think, we have to give instructions to them to make them solve any complex problem.  Let s see the following video where May Li(Designer and Inventor) and Nat(Designer at Xbox) explains what computers are, how they works and how we are surrounded by computers now. Hope you did enjoy it. Read and search the following questions.-- What did you learn about computers?-- What are theapplicationsof computers? What kinds of problems do theseapplicationssolve? Think about what kind of instructions were given to computers for theseapplications?' }
                        ]
                    },
                    {
                        id: 4,
                        title: "WhatIsProgramming",
                        description: [
                            { Question: "What is Programming?", text: "By givinginstructionsto the computer,we can make the computers solve complex problems.A set ofinstructionsgiven to the computer is called aprogram.The Process of giving instructions to the computer is called programming. Doesn't it sound simple that we give instructions(program) to the computer and the computer follows these instructions to solve a complex problem? Giving instructions to the computer is called programming. :) But there is a small problem. Computers cannot understand our language like (Hindi, Tamil, Kannada). Computers can only understand the machine language which is made of 0 and 1. So, it becomes difficult for us to communicate with the computer in machine language. Then how can we give instructions to the computer?  Therefore, to solve this problem we made some languages like(Java, Python, JavaScript) so that we can easily give instructions to the computer. Computers can easily convert these languages into machine language with the help of “another program called a compiler.” To give instructions to the computer we need to learn any of these given languages. In this course, we are going to learn the python language. We will use python language to give instructions to the computer. In the following video Erica(Engineering Manager at Amazon) and Jerome(Program Manager at Xbox) explains how computer hardware like circuits, CPU, etc are controlled by codes that we write. Basically how harware and software works together to execute a task. Bill Gates, co-founder of Microsoft and creator of Windows OS, explains how OS works. Hope you'd enjoy it. Assignment Have you ever given instructions to anybody or taken instructions from anybody. Can we call that aprogram? Search for Python language and its applications? How many people in the world use Java?" }
                        ]
                    },
                    {
                        id: 6,
                        title: "basic-definitions_definitions-part-1",
                        description: [
                            { Question: "Definitions", Question1: "Binary Numbers", text: "Binary numbers are known as machine language or low level language, binary numbers are made of 0 and 1 which humans cannot understand but computers can. Limor, founder of Adafruit Industries which is one of the best sellers of electronics components, parts, tools, microcontrollers and many more. Federico is a software developer at Microsoft, one of the current tech giants. Lets hear from Limor and Federico in the following video about how computers works on 0s and 1s, and how computers understands commands given by us through lines of code." }
                        ]
                    },
                    {
                        id: 7,
                        title: "basic-definitions_definition-part-2",
                        description: [
                            { id: 1, Question: "Definitions", Question1: "Binary Numbers", text: "Binary numbers are known as machine language or low level language, binary numbers are made of 0 and 1 which humans cannot understand but computers can. Limor, founder of Adafruit Industries which is one of the best sellers of electronics components, parts, tools, microcontrollers and many more. Federico is a software developer at Microsoft, one of the current tech giants. Lets hear from Limor and Federico in the following video about how computers works on 0s and 1s, and how computers understands commands given by us through lines of code." },
                            { id: 2, Question: "Interpreter", text: "It checks the code line by line and the line at which error is present, interpreter stops the code at that line and shows the name of error.Interpreter converts high level language to low level language with the help of which the computer is able to run the code. Interpreter is used for Python and Ruby programming languages." }
                            , {
                                id: 3,
                                Question: "Code Example",
                                code: `a = megha\nprint(a)`,
                                text: "NameError: name 'megha' is not defined. In this example, you saw that I have taken a variable named 'a' and assigned/given a string value to it, but I forgot to put \"\" (quote). So, Python was not able to identify the type of value I gave to the variable 'a'. Therefore, the interpreter stopped the code at the line that contained the error and displayed the error.",
                                title: "Compiler",
                                text1: "Compiler is a software that scans the complete code in one go and if the code contains any error, then it shows the error at the end of the code.Whereas the interpreter, stops the code at the line that contains error. Compiler is used in C and C++ programming languages.",
                                title1: "Case Sensitive",
                                text2: "Case sensitive means that the text that we have typed should be exactly same as we type it anywhere in the code.",
                            },
                            {
                                id: 4,
                                Question: "Output :-",
                                Question: "Code Example",
                                code: `var = 5\nprint(Var)`,
                                title: "Error/ Bugs",
                                title1: "When we make any mistake while writing the code, that mistake is called error/bug.",
                                text: "Var is not defined For example ,in the above example ,we have assigned a variable namedvarand while printing we typedVar, so an error was displayed because in python var and Var are different. In python small letters and capital letters are considered different.Note- You can click this link to study case sensitive in detail"
                            },
                            {
                                id: 5,
                                text: "SyntaxError: unexpected EOF while parsing",
                                Question: "Code Example",
                                code: `num = 5\nprint(num`
                            },
                            {
                                id: 6,
                                text: "SyntaxError: invalid syntax In this example you saw that while printing I forgot to put parenthesis so it showed us a syntax error which means our code has some mistake/error.",
                                Question: "Code Example",
                                code: `num = 5\nprint "a"`,
                                title: "Debugs",
                                text: "Debug means to solve bug/error in the given code or removing the error from the code and writing the correct code which is as per the syntax.",
                            },
                            {
                                id: 7,
                                Question: "Code Example",
                                code: `num = 5\nprint(num)`,
                                title: "Output :-5"
                            },
                            {
                                id: 8,
                                title: "Output :-2",
                                title1: "Source code is that code which humans can easily understand.",
                                text1: "Source code",
                                text: "As you saw in the bug example there was a bug present in the second code so we debugged that code.",
                                Question: "Code Example",
                                code: `num = 2\nprint(num)`
                            },
                            {
                                id: 9,
                                Question: "Code Example",
                                code: `name = "python"\nprint(name)`,
                                title: "Output :-python",
                                text: "In this example you saw that we have taken a variable named asnameand we have stored python in it.Ypu can easily read and understand this code .This code is called source code/ main code.",
                                img: typesOfBrackets
                            }

                        ]
                    },
                    {
                        id: 8,
                        title: "ipython",
                        description: [
                            {
                                id: 1,
                                Question: "Now we will learn about iPython",
                                title: "Difference between python and iPython",
                                title1: "First with iPython",
                                text1: "First, on the Terminal write ipython and pressEnter.Now, write cd Downloads in it and pressEnter.Then write ls and pressEnter.You will be able to see all thefolder and filesthat you kept under the Downloads folder.Now to come outside the iPython shell write quit inside the shell and pressEnter.Now we will do the same thing with python Write ipython on the Terminal and pressEnter Now write cd Downloads and pressEnter.",
                                text: "Here we will learn about, what is ipython and why do we use it? When you write python on the Terminal, thenpython shellopens on the Terminal. You write your python code on thepython shellto run it.iPython also does the same work but it provides some extra features. Some of those features we will study below:",
                            },
                            {
                                id: 2,
                                title: "Now we will do the same thing with python",
                                code: `>>> cd Downloads\n  File "", line 1\n\tcd Downloads\n\t\t       ^\nSyntaxError: invalid syntax\n>>>`,
                                text: "Write ipython on the Terminal and pressEnter Now write cd Downloads and pressEnter.",
                                text1: "You will be able to see something like this on the Terminal?This means you cannot go to theDownloadsfolder with the help ofpython shell.For this, you need to come out of thepython shelland for that, you need to type quit on thepython shell.Now after coming outside type cd Downloads and then type ls you will be able to see whatever is present in the Downloads.You cannot change yourfolderby using a normalpython shell. For that, you need to come out of thepython shell. But you can easily change thefolderinside this python shell so that you don't need to come out of theiPython shell. And when you will type inpython shell.",
                                Question: "Code Example",
                            },
                            {
                                id: 3,
                                Question: "Code Example",
                                code: `>>> if True:\n...\n`,
                                text: "Then note that the cursor (**|**)comes without any space after this ... .But if you will type it iniPython shellthen it will show like this.",
                            },
                            {
                                id: 4,
                                Question: "Code Example",
                                code: `In [1]: if True:\n   ...:	 |\n`,
                                title: "Very Important Rules",
                                text1: "Run every example on iPython shell. If you don't do this you will make a fool of yourself.To copy-paste and run the code will not help you in understanding the code. You have to run every code by yourself.Words written in UPPER CASE orbold lettersare very important. Learn them, you will come across them many times. During the course You need to answer some questions at times. To answer those questions you can always upload a file.",
                                text: "Then you will see that the cursor (|)` comes after some spaces.We call thisIndentation. When you will write the code for the first time50% errorwill be there because of lack ofIndentation.Hence, iPython makes the life of an engineer very easy by providing extra features. When iPython opens you can write code in it. If you are copy-pasting the code from somewhere then press Ctrl + C to copy-paste and open iPython and type %paste for pasting the code."
                            },
                            {
                                id: 5,
                                Question: "Some Code Samples",
                                Question1: "Example 1:-",
                                text: "In this section, some code samples are given. To get comfortable with iPython, you can run them on ipython.",
                            },
                            {
                                id: 6,
                                Question: "Code Example 1",
                                code: `print("It will print this.")\nprint("Cool Stuff " * 10)\n`
                            },
                            {
                                id: 7,
                                Question: "Code Example 2",
                                code: `time = input("Is it morning or evening? (morning/evening) ")\nif time == "morning":\n    print("Let's go for a run!")\nelif time == "evening":\n    print("Let's go out for a coffee.")\nelse:\n    print("I did not understand what input you put?")\n`
                            }
                        ]
                    },
                    {
                        id: 9,
                        title: "indentation",
                        description: [
                            {
                                id: 1,
                                Question: "What is Indentation?",
                                text: "Please have a look at the code given below. Now think about the output of this code without running.",
                            },
                            {
                                id: 2,
                                Question: "Code Example",
                                text: "What answer did you think? Please copy-paste this code, save it in a file, and run this code. You will notice that this code will not print any output but will give an error. To understand this error, we need to think from the point of view of Python. Python will run this program as follows: In the first line, it will put the value 10 in 'a'. In the second line, Python will check whether multiplying 'a' by 2 gives a result equal to 20 or not. Until the third line, Python will know that multiplying 'a' by 2 will yield 20. However, Python gets confused at this point; it does not understand whether it should only print 'Variable a when multiplied by 2 gives 20' or if it needs to run the code given below as well. Humans can easily understand this, but the computer encounters an error. We will write this program correctly as follows:",
                                code: `a = 10\nif a * 2 == 20:\n    print("Variable a when multiplied by 2 gives 20.")\nelse:\n    print("Variable a when multiplied by 2 does not give 20.")\n`
                            },
                            {
                                id: 3,
                                Question: "Code Example",
                                code: "a = 10\nif a * 2 == 20:\n\tprint(\"Variable a when multiplied by 2 gives 20.\")\nelse:\n\tprint(\"Variable a when multiplied by 2 does not give 20.\")\n"
                            },
                            {
                                id: 4,
                                text: "When python will run this correct code, then its brain will work like this. In the first line it will put the value 10 in \"a\". In the second line python will check that whether multiplying a by 2 gives a result equal to 20 or not. In the third line, python will print \"Variable a when multiplied by 2 gives 20\". Now, you will think that python prints this line in this code then why it did not print in the previous example. But, see a little care that the third line has started after some space. These spaces are called indent in python. Now, python understands that on multiplying a by 2 we get 20, if this",
                            },
                            {
                                id: 5,
                                Question: "Code Example",
                                code: "File \"\", line 3\n\tprint(\"a variable ko 2 se multiply kar ke 20 aata hai\")\n\t\t^\nIndentationError: expected an indented block\n"
                            },
                            {
                                id: 6,
                                Question: "One more example",
                                text: "We will take more examples and understand them clearly. First, run the code given below. After that read the text given below.",
                            },
                            {
                                id: 7,
                                Question: "Code Example",
                                code: "counter = 1\nwhile counter < 10:\n\tprint(\"The counter is \" + str(counter))\n\tcounter = counter + 1\n\tprint('--------')\n"
                            },
                            {
                                id: 8,
                                text: `In this program, in the last 3 lines (‘print "The counter is" + str(counter)’, 
                                ‘counter = counter + 1’, ‘print "--------"’) if there is no indentation then python will not be able to understand 
                                that after while loop what it has to run? Python will get confused and will give an error. To indent a python code 
                                is very important. If you see the program, you will realize that the code is divided into different parts: 
                                In the first part, the counter variable is defined and we write the line while counter < 10. In the second part, 
                                we have written that code which will run after for loop again and again till the for loop is running. The different 
                                parts of code are called code blocks and in python to indent these blocks we use a tab. To understand this, save 
                                the given code in a new file and see what output comes and how that output is different from the output of the 
                                code given above. After this discussion about what happened?`
                            }
                            ,
                            {
                                id: 9,
                                Question: "Code Example",
                                code: "counter = 1\nwhile counter < 10:\n\tprint(\"The counter is \" + str(counter))\n\tcounter = counter + 1\n\tprint('--------')\n"
                            },
                            {
                                id: 10,
                                Question: "Note :-",
                                text: "Whenever you write the code, then your editor should indent the code, but if it does not do that, then you can use the Tab key for indenting."
                            },
                            {
                                id: 11,
                                Question: "Note :-",
                                text: "You can also use the Space key for indentation. Space key is difficult to use, as many errors occur due to its use, just because of this many errors occur, that is why many Developers(Software Engineer) use Tab so that minor errors do not occur."
                            },
                            {
                                id: 12,
                                Question: "Multiple Levels of Indentation",
                                text: "In a given indented code block there can be another indented code block. Study this code and understand and tell how the output comes? Try to run this code and see if you thought correctly about the output or not. If not then use your brain to think about it more."
                            },
                            {
                                id: 13,
                                Question: "Code Example",
                                code: "counter = 1\nwhile counter < 10:\n\tif counter % 2 == 0:\n\t\tprint(\"Counter is an even number.\")\n\tprint(\"The counter is \" + str(counter))\n\tcounter = counter + 1\nprint('--------')\n"
                            }
                            ,
                            {
                                id: 14,
                                text: "Please see here that in this code, 2 levels of indented code blocks exist.\n\nAfter the first level, 'if counter % 2 == 0' is present.\n\nIn the second level, 'print(\"Counter is an even number.\")' is present.\n\nHere, Python will run the 'print(\"Counter is an even number.\")' statement only when the value of counter is an even number inside the loop."
                            }
                        ]
                    },
                    {
                        id: 10,
                        title: "comments",
                        description: [
                            { id: 1, Question: "Comments", text: "We can write comments in any program . When weruntheprogramthese comments do not getexecuted. Comments are written for our understanding, and for the people who are working on that code with us or people with whom we will work later etc. For the understanding of all these people, comments are used." },
                            {
                                id: 2,
                                Question: "Code Example",
                                code: `print("This will be printed.")\nprint("This line will also be printed.")\n# This is a comment.\n# You can write it for your ease.\n# Any line that starts with "#" (hash) is called a comment.\n# We write these lines as programmers, for our own ease. Computer ignores them.\nprint("Computer will not be able to read above comments, but will print this line.")`
                            },
                            {
                                id: 3,
                                Question: "What does your program do, is very important to write in comments in a given technical language?",
                                text: "Many times we have seen that the students who don't write comments properly during interviews, they get a very negative feedback in interviews.If you make this as a habit then your own understanding will improve and in future you will not face any problem."
                            }
                        ]
                    },
                    {
                        id: 11,
                        title: "Practice Question",
                        description: 'Practice question to test your understanding of the previous sections.'
                    },
                    {
                        id: 12,
                        title: "Practice Question",
                        description: 'Another practice question for further learning.'
                    },
                    {
                        id: 13,
                        title: "Practice Question",
                        description: 'Practice question for reinforcing key concepts.'
                    },
                    {
                        id: 14,
                        title: "Practice Question",
                        description: 'Continue practicing with this question.'
                    },
                    {
                        id: 15,
                        title: "Practice Question",
                        description: 'Another question to test your skills.'
                    },
                    {
                        id: 16,
                        title: "Practice Question",
                        description: 'Use this question to assess your understanding.'
                    },
                    {
                        id: 17,
                        title: "Practice Question",
                        description: 'Further practice to sharpen your Python knowledge.'
                    },
                    {
                        id: 18,
                        title: "Practice Question",
                        description: 'More practice for mastering Python basics.'
                    },
                    {
                        id: 19,
                        title: "Practice Question",
                        description: 'Keep practicing with this question.'
                    },
                    {
                        id: 20,
                        title: "Practice Question",
                        description: 'Reinforce your learning with this question.'
                    },
                    {
                        id: 21,
                        title: "Practice Question",
                        description: 'Final practice question to complete the section.'
                    }
                ]
            },
            {
                id: 2,
                img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*qJ2zZ3fiP3E4QlTc4HKd5A.png",
                title: "variable",
                content: [
                    {
                        id: 1,
                        title: "variables_variables-intro",
                        description: [
                            {
                                id: 1,
                                Question: "What are Variables ?",
                                text: "VARIABLEis a memory/location in which the data is stored. Whose value we can change that is called a VARIABLE. You can give any name to theVARIABLEand you can store anything in the variable.Just as we can store 123 in a VARIABLE named as variable_x.Similarly we can put 9999 in a VARIABLE named as a.As you remember that 123 and 9999 are INTEGERS."
                            },
                            {
                                id: 2,
                                Question: "Code Example",
                                code: "variable_x = 123\na = 9999\n# Let's see what happens when we print variable_x and a.\nprint(variable_x, a)\n\ncounter = 1\nwhile counter < 10:\n\tif counter % 2 == 0:\n\t\tprint(\"Counter is an even number.\")\n\tprint(\"The counter is \" + str(counter))\n\tcounter = counter + 1\nprint('--------')\n"
                            },
                            {
                                id: 3,
                                Question: "Output :-123,9999",
                                text: "We can give another value to variable_x, by this variable_x will be updated. As you can see below that we have given a value 9.9 to the variable_x now."
                            },
                            {
                                id: 4,
                                Question: "Code Example",
                                code: "variable_x = 9.9\n# Now print variable_x to see its value.\nprint(variable_x)\n"
                            },
                            {
                                id: 5,
                                Question: "Output :-9.9",
                                text: "As you remember that 9.9 is float. That means we can give different values to a variable. Value of a is not changed because we have not updated it. Now we can update a and make a new variable b."
                            },
                            {

                                id: 6,
                                Question: "Now you know in a variable we can store some data but how computer store data do you know",
                                code: "a = 'hello world'\nb = 'navgurukul'\n# Now print them to see the output.\nprint(variable_x, a, b)\n"
                            },
                            {
                                id: 7,
                                Question: "Output :-hello,world,navgurukul",

                            },
                            {
                                id: 8,
                                Question: "Code Example",
                                code: "a = 3\nb = 4\nc = a * b\na = b * c\nb = a + c\nc = a + b + c\n"
                            },
                            {
                                id: 9,
                                Question: "Code Example",
                                code: "a = 1\nb = 2\nb = a\n"
                            },
                            {
                                id: 10,
                                Question: "Code Example",
                                code: "a = 7\nb = 8 * 4\nb = a\n"
                            },
                            {
                                id: 11,
                                Question: "Code Example",
                                code: "a = 1\nb = 2\nc = b\nb = a\na = c\n"
                            },
                            {
                                id: 12,
                                Question: "Code Example",
                                code: "a = 1\nb = a * 2\nc = b * 2\na = c * 2\n"
                            },
                            {
                                id: 13,
                                Question: "Code Example",
                                code: "a = 100\na = a + 50\na = a / 3\na = a * 2\n"
                            },
                            {
                                id: 13,
                                Question: "Code Example",
                                code: "a = 10\nb = 10\nc = a * b\na = c - b\nb = c + a\nc = a * c\n"
                            }
                        ]

                    },
                    {
                        id: 2,
                        title: "variables_variables-question",
                        description: [
                            {
                                id: 1,
                                Question: "Variable Example",
                                text: "To answer any question you can upload the file.Remember python file extension is .py.Just for your ease we have broken up this question into multiple parts. But you have to do the submission in single file only."
                            },
                            {
                                id: 2,
                                Question: "Example Part 1",
                                text: "1. Assign an INTEGER value to a variable named as variable_nav.2. Then print the variable_nav."
                            },
                            {
                                id: 3,
                                Question: "Code Example",
                                code: "variable_nav = 50\nprint(variable_nav)\n"
                            },
                            {
                                id: 4,
                                Question: "Output :50",
                                text: "1. Take a new variable named as gurukul and assign any STRING value to it.2. Assign a FLOAT value to variable_nav and set it.3. Now print the value of variable_nav and gurukul."
                            },
                            {
                                id: 5,
                                Question: "Code Example",
                                code: "gurukul = \"hii\"\nvariable_nav = 67.78\nprint(gurukul)\nprint(variable_nav)\n"
                            },
                            {
                                id: 6,
                                Question: "Output :-hii67.78",
                            }
                        ]
                    },
                    {
                        id: 3,
                        title: "variables_variables-naming-rules",
                        description: [
                            {
                                id: 1,
                                Question: "Naming rules for a VARIABLE",
                                text: "In Python for naming variables, some rules are followed. If we do not follow these rules, then theprogramis not going to be correct.",
                            },
                            {
                                id: 2,
                                Question: "Keep these 3 rules always in your mind:",
                                text: "The name starts with either some - Letter or an _ (underscore).Only letters, underscore or numbers can be present in the Name (no special characters).It is Case Sensitive (means var, VAR, Var are different variables).Correct Names- variable, var123, var_12, _var, _12Incorrect Names- var@iable, 123var, var.123Different Names- varX, varx, Varx, VarX"
                            },
                            {
                                id: 3,
                                Question: "Activity :",
                                text: "In Python shell, try to put values in the Incorrect variable names. See how python gives errors."
                            }
                        ]
                    },
                    {
                        id: 4,
                        title: "variables_variables-naming-conventions",
                        description: [
                            {
                                id: 1,
                                Question: "Variables naming conventions",
                                text: "It is very important to give correct name to a Variable.If you don't give names properly, then nobody will be able to read your Code, as they won't be able to understand that for what purpose the variable is used?camelCase,PascalCase,snake_case,UPPER_CASE,kebab-case.are five most popular cases for naming.You can read in detail about thecaseshere.In Python, we usually use :"
                            },

                        ]
                    },
                    {
                        id: 5,
                        title: "variables_variables-naming-question1",
                        description: [
                            {
                                id: 1,
                                Question: "Variables naming Example-1",
                                text: "Assign FLOAT value to a VARIABLE named as var_12.Assign STRING value to a VARIABLE named as_var.Assign INTEGER value to a VARIABLE named as_12.After doing the above 3 steps, print those three variables."
                            },
                            {
                                id: 2,
                                Question: "Code Example",
                                code: "var_12 = 56.67\n_var = \"hii\"\n_12 = 56\nprint(var_12)\nprint(_var)\nprint(_12)\n"
                            },
                            {
                                id: 3,
                                Question: "Output :-56.67hii56"
                            }

                        ]
                    },
                    {
                        id: 6,
                        title: "variables_variables-naming-question2",
                        description: [
                            {
                                id: 1,
                                Question: "Variables naming Example-1",
                                text: "Assign FLOAT value to a VARIABLE named as var_12. Assign STRING value to a VARIABLE named as_var.Assign INTEGER value to a VARIABLE named as_12.After doing the above 3 steps, print those three variables."
                            },
                            {
                                id: 2,
                                Question: "Code Example",
                                code: "var_12 = 56.67\n_var = \"hii\"\n_12 = 56\nprint(var_12)\nprint(_var)\nprint(_12)\n"
                            },
                            {
                                id: 3,
                                Question: "Output :-56.67hii56"
                            }

                        ]
                    },
                    {
                        id: 7,
                        title: "variables_variables-naming-question3",
                        description: [
                            {
                                id: 1,
                                Question: "Variables naming Example-2",
                            },
                            {
                                id: 2,
                                Question: "Example",
                                text: "Assign INTEGER value to a VARIABLE named as 123var.If your code runs easily, then upload it. If it does not run then put the reason in the comment and upload the code."
                            },
                            {
                                id: 4,
                                Question: "Code Example",
                                code: "123var = 100\nprint(123var)\n"
                            },
                            {
                                id: 5,
                                Question: "Output: -SyntaxError: invalid syntax"
                            }
                        ]
                    },
                    {
                        id: 8,
                        title: "variables_variables-naming-question4",
                        description: [
                            {
                                id: 1,
                                Question: "Variables naming Example-3",
                                text: "Example Assign an INTEGER value to a VARIABLE named as var.123.If your code runs easily, then upload it. If it does not run then put the reason in the comment and then upload the code."
                            },
                            {
                                id: 2,
                                Question: "Code Example",
                                code: "var.123 = 56\nprint(var.123)\n"
                            },
                            {
                                id:1,
                                Question:"Output :-SyntaxError: invalid syntax"

                            }

                        ]
                    },
                    {
                        id: 9,
                        title: "variables_Assessment",
                        description:[
                           {
                            id:1,
                            Question:"Variable Exercise",
                            text:"Please give the quiz with proper details to understand how much of this course did you understand."
                           }

                        ]
                    },
                    {
                        id: 10,
                        title: "Practice Question"
                    },
                    {
                        id: 11,
                        title: "Practice Question"
                    },
                    {
                        id: 12,
                        title: "Practice Question"
                    },
                    {
                        id: 13,
                        title: "Practice Question"
                    },
                    {
                        id: 14,
                        title: "Practice Question"
                    },
                    {
                        id: 15,
                        title: "Practice Question"
                    },
                    {
                        id: 16,
                        title: "Practice Question"
                    },
                    {
                        id: 17,
                        title: "Practice Question"
                    },
                    {
                        id: 18,
                        title: "Practice Question"
                    },
                    {
                        id: 19,
                        title: "Practice Question"
                    }
                ]
            },
            {
                id: 3,
                title: 'Data Type',
                img: img3,
                content: [
                    {
                        id: 1,
                        title: 'Introduction to Data Types',

                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        title: 'Types of Data Types',
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                    {
                        id: 3,
                        title: 'Data Type Conversion',
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                    {
                        id: 4,
                        title: 'Data Type Question 1',
                        description: 'Practice question to test your understanding of data types.'
                    },
                    {
                        id: 5,
                        title: 'Data Type Question 2',
                        description: 'Practice question to test your understanding of data types.'
                    },
                    {
                        id: 6,
                        title: 'Data Type Question 3',
                        description: 'Practice question to test your understanding of data types.'
                    },
                    {
                        id: 7,
                        title: 'Data Type Question 4',
                        description: 'Practice question to test your understanding of data types.'
                    },
                    {
                        id: 8,
                        title: 'Data Type Assessment',
                        description: 'Assessment to test your understanding of data types.'
                    },
                    {
                        id: 9,
                        title: 'Practice Question 1',
                        description: 'Practice question to test your understanding of data types.'
                    },
                    {
                        id: 10,
                        title: 'Practice Question 2',
                        description: 'Practice question to test your understanding of data types.'
                    },
                    {
                        id: 11,
                        title: 'Practice Question 3',
                        description: 'Practice question to test your understanding of data types.'
                    },
                    {
                        id: 12,
                        title: 'Practice Question 4',
                        description: 'Practice question to test your understanding of data types.'
                    },
                    {
                        id: 13,
                        title: 'Practice Question 5',
                        description: 'Practice question to test your understanding of data types.'
                    },
                    {
                        id: 14,
                        title: 'Practice Question 6',
                        description: 'Practice question to test your understanding of data types.'
                    },
                    {
                        id: 15,
                        title: 'Practice Question 7',
                        description: 'Practice question to test your understanding of data types.'
                    },
                    {
                        id: 16,
                        title: 'Practice Question 8',
                        description: 'Practice question to test your understanding of data types.'
                    },
                    {
                        id: 17,
                        title: 'Practice Question 9',
                        description: 'Practice question to test your understanding of data types.'
                    },
                    {
                        id: 18,
                        title: 'Practice Question 10',
                        description: 'Practice question to test your understanding of data types.'
                    },
                ]
            },
            {
                id: 5,
                title: 'Operators',
                img: img5,
                content: [
                    {
                        id: 1,
                        title: "",
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        title: "",
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 6,
                title: 'IF ELSE',
                img: img1,
                content: [
                    {
                        id: 1,
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 7,
                title: 'Loop',
                img: img5,
                content: [
                    {
                        id: 1,
                        title: "Introduction to Python",
                        description: [
                            { text: 'This section covers the basics of Python programming.' }
                        ]
                    },
                    {
                        id: 2,
                        title: "Why Learn Python?",
                        description: [
                            { text: 'This section covers why learning Python is important.' }
                        ]
                    }
                ]
            },
            {
                id: 8,
                title: 'List useing Python',
                img: img1,
                content: [
                    {
                        id: 1,
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 9,
                title: 'Introduction to Dictionary ',
                img: img2,
                content: [
                    {
                        id: 1,
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            },
            {
                id: 10,
                img: img4,
                title: 'Funtions',
                content: [
                    {
                        id: 1,
                        description: 'Explore how to control the flow of your programs using if statements, loops, and functions.'
                    },
                    {
                        id: 2,
                        description: 'Understand the use of break and continue statements in loops.'
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'CSS',
        description: 'Master CSS for styling websites.',
        img: css,
        topics: [
            {
                id: 1,
                title: 'CSS Basics',
                img: img1,
                content: [
                    {
                        id: 1,
                        description: 'Discover the fundamentals of CSS and how to style your web pages.'
                    },
                    {
                        id: 2,
                        description: 'Learn how to use selectors, properties, and values.'
                    },
                ]
            },
            {
                id: 2,
                img: img2,
                title: 'Box Model',
                content: [
                    {
                        id: 1,
                        description: 'Learn about the CSS box model and how padding, margins, and borders affect layout.'
                    },
                    {
                        id: 2,
                        description: 'Understand content, padding, border, and margin areas.'
                    },
                ]
            },
            {
                id: 3,
                img: img5,
                title: 'Flexbox and Grid Layouts',
                content: [
                    {
                        id: 1,
                        description: 'Understand modern layout techniques using Flexbox and CSS Grid.'
                    },
                    {
                        id: 2,
                        description: 'Learn about responsive design with Flexbox and Grid.'
                    },
                ]
            }
        ]
    },

    {
        id: 3,
        name: 'JavaScript',
        description: 'Understand the fundamentals of JavaScript.',
        img: javascript,
        topics: [
            {
                id: 1,
                title: 'JavaScript Introduction',
                content: [
                    {
                        id: 1,
                        description: 'Dive into JavaScript, covering syntax, variables, and basic functions.'
                    },
                    {
                        id: 2,
                        description: 'Learn about the document object model (DOM) and how to manipulate it with JavaScript.'
                    },
                ]
            },
            {
                id: 2,
                title: 'JS Varible ',
                content: [
                    {
                        id: 1,
                        description: 'Learn about different types of functions in JavaScript and the concept of scope.'
                    },
                    {
                        id: 2,
                        description: 'Understand the difference between global and local scope.'
                    },
                ]
            },

            {
                id: 3,
                title: 'JS Data type',
                content: [
                    {
                        id: 1,
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            },
            {
                id: 4,
                title: 'JS operation',
                content: [
                    {
                        id: 1,
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            },
            {
                id: 5,
                title: 'JS If else',
                content: [
                    {
                        id: 1,
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            },
            {
                id: 6,
                title: ' JS Loop',
                content: [
                    {
                        id: 1,
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            },
            {
                id: 7,
                title: ' JS Arrays',
                content: [
                    {
                        id: 1,
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            },
            {
                id: 8,
                title: ' JS Objects',
                content: [
                    {
                        id: 1,
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            },
            {
                id: 9,
                title: ' JS Funtions',
                content: [
                    {
                        id: 1,
                        description: 'Explore asynchronous programming in JavaScript, including callbacks, promises, and async/await.'
                    },
                    {
                        id: 2,
                        description: 'Learn how to handle asynchronous operations in your code.'
                    },
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'React.js',
        description: 'Build dynamic user interfaces with React.',
        img: react,
        topics: [
            {
                id: 1,
                img: img1,
                title: 'Introduction to React',
                content: [
                    {
                        id: 1,
                        description: 'Understand the core concepts of React and how to create your first React application.'
                    },
                    {
                        id: 2,
                        description: 'Learn about components, props, and state management.'
                    },
                ]
            },
            {
                id: 2,
                img: img2,
                title: 'Components and Props',
                content: [
                    {
                        id: 1,
                        description: 'Learn how to build reusable components and pass data through props.'
                    },
                    {
                        id: 2,
                        description: 'Understand the importance of component hierarchy and reusability.'
                    },
                ]
            },
            {
                id: 3,
                img: img3,
                title: 'State Management',
                content: [
                    {
                        id: 1,
                        description: 'Explore different ways to manage state in React applications.'
                    },
                    {
                        id: 2,
                        description: 'Learn about useState, useReducer, and context API for state management.'
                    },
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'Spoken English',
        description: 'English is a great tool needed to navigate the tech world and also in an International setting. Whether you are a total beginner or already know some English, prepare for the challenge with our Spoken English classes and online courses.',
        img: english,
        topics: [
            {
                id: 1,
                img: img3,
                title: 'Spoken English',
                content: [
                    {
                        id: 1,
                        description: 'Understand the core concepts of React and how to create your first React application.'
                    },
                    {
                        id: 2,
                        description: 'Learn about components, props, and state management.'
                    },
                ]
            },


        ]
    }

];