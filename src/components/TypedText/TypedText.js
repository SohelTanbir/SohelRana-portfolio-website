import React from 'react';
// react-typed v2 exports a named `ReactTyped` component (and a `Typed` re-export).
// Import the ReactTyped component and use it as Typed for compatibility.
import { ReactTyped as Typed } from 'react-typed';

const TypedText = () => {
    return (
        <div>
            <Typed
                strings={[
                    'I am a Front-end Developer',
                    'I am a Web designer',
                    'I am a MERN Stack Developer',
                    'I am a Freelancer',]}
                typeSpeed={40}
                backSpeed={50}
                loop >
            </Typed>
        </div>
    );
};

export default TypedText;