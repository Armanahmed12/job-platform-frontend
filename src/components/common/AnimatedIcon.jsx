import React from 'react';
import Lottie from "lottie-react";

const AnimatedIcon = ({animation, size = 300}) => {
    return (
        <Lottie animationData={animation} style={{width : size}} loop></Lottie>
    );
};

export default AnimatedIcon;