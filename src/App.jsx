import React from 'react';

const App = () => {
    return (
        <div>
            <h1>Your Application</h1>
            <Packages />
            <Products />
            <Services />
        </div>
    );
};

const Packages = () => {
    return <div>Packages Component</div>;
};

const Products = () => {
    return <div>Products Component</div>;
};

const Services = () => {
    return <div>Services Component</div>;
};

export default App;