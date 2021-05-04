import React from 'react';
import Typed from 'react-typed';

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