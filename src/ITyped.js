import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';

const ITyped = ({ cursor, typeSpeed, text }) => {
    const ref = useRef(null);

    useEffect(() => {
        init(ref.current, {
            showCursor: cursor,
            typeSpeed: typeSpeed,
            strings: text
        });
    }, []);

    return (
        <div ref={ref}></div>
    );
};

export default ITyped;