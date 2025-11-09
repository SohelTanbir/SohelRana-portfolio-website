import React from 'react';
// react-typed v2 exports a named `ReactTyped` component (and a `Typed` re-export).
// Import the ReactTyped component and use it as Typed for compatibility.
import { ReactTyped as Typed } from 'react-typed';

const TypedText = () => {
    const roles = [
        'MERN Stack Developer',
        'Tech Stack I work with:',
        'React.js',
        'Next.js',
        'Redux Toolkit',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS',
    ];
    return (
        <div>
            <p className="profile-title">
                <Typed
                    strings={roles}
                    typeSpeed={80}
                    backSpeed={40}
                    backDelay={2000}
                    loop >
                </Typed>
            </p>

        </div>
    );
};

export default TypedText;