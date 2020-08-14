import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';

const ITyped = ({ className, strings, showCursor, typeSpeed,
    backDelay, backSpeed, startDelay,
    loop, placeholder, disableBackTyping, cursorChar }) => {

    const ref = useRef(null);

    useEffect(() => {
        init(ref.current, {
            showCursor: showCursor,
            typeSpeed: typeSpeed,
            strings: strings,
            backDelay: backDelay,
            backSpeed: backSpeed,
            startDelay: startDelay,
            loop: loop,
            disableBackTyping: disableBackTyping,
            cursorChar: cursorChar,
            placeholder: placeholder
        });
    }, []);

    return (
        <div className={className} ref={ref}></div>
    );
};

export default ITyped;