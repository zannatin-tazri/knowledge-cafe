import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div className='question-answer'>
            <h1 className='title'><u> Question Answer</u></h1>
            <h2>props vs state : </h2>
            <p><b>props : </b>Props is short for properties and they are used to pass data between React components. React’s data flow between components is uni-directional (from parent to child only).</p>
            <p><b>state : </b>State allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.</p>
            <h2>How does useState works ?</h2>
            <p><b>useState</b> is a function that accepts the initial state as an argument and returns a state value and a function to update this value. This ensures that the React preserves the state between re-renders.
                The useState hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these.</p>
            <h2>Purpose of useEffect other than fetching data ?</h2>
            <p><b>Fetching</b>  data from an API, communicating with a database, and sending logs to a logging service are all considered side-effects, as it's possible to have a different output for the same input. For example, your request might fail, your database might be unreachable, or your logging service might have reached its quota.<br></br>

                This is why <b>useEffect</b>  is the hook for us - by fetching data, we're making our React component impure, and useEffect provides us a safe place to write impure code.</p>

            <h2>How does React works ?</h2>
            <p><b>React</b>  is a JavaScript library that creates and maintains an in-memory representation of a UI. When a user interacts with a React application, React updates the in-memory representation and the changes are reflected in the UI.<br></br>

                React uses a virtual DOM, which is a JavaScript representation of the actual DOM. The virtual DOM is a lightweight tree that contains only the necessary information to render a UI.

                When a user interacts with a React application, React updates the virtual DOM. React then compares the virtual DOM with the actual DOM. React makes the necessary changes to the actual DOM, which are reflected in the UI.

                The virtual DOM is a JavaScript object. The object is made up of React elements. React elements are the smallest units of React applications.<br></br>

                React elements are immutable. That means they cannot be changed. Once a React element is created, it cannot be modified.

                This is why React is so fast. React only needs to update the changed element in the virtual DOM. React doesn't need to re-render the entire UI.

                React elements are also lightweight. React elements are just JavaScript objects. They don't have any additional overhead.</p>

        </div>
    );
};

export default QuestionAnswer;