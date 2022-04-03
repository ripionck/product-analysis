import React from 'react';
import './Blocks.css';

const Blocks = () => {
    return (
        <div className="blocks-container">
            <div>
                <h1> What is Context API?</h1>
                <p>
                    The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
            </div>
            <div>
                <h1>What are Semantic Elements?</h1>
                HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, its needs changed.

                Where the internet was originally intended for sharing scientific documents, now people wanted to share other things as well. Very quickly, people started wanting to make the web look nicer.

                Because the web was not initially built to be designed, programmers used different hacks to get things laid out in different ways. Rather than using the <table></table> to describe information using a table, programmers would use them to position other elements on a page.
            </div>
            <div>
                <h1>Difference between inline block and inline block elements?</h1>
                <strong>inline</strong> The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height.
                <br />
                <strong>inline-block</strong> It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values.
                <br />
                <strong>block</strong> The element will start on a new line and occupy the full width available. And you can set width and height values.
            </div>
        </div>
    );
};

export default Blocks;