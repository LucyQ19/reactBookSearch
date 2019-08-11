import React from 'react';

const Container = ({ fluid, children }) => (
    <main>
        <div className={`container${fluid ? '-fluid' : ""}`}>
            { children }
         </div>
    </main>
);

export default Container;
    