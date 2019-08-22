import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'Adopt me!'),
        React.createElement(Pet, { name: 'garfield', animal: 'cat', breed: 'fat' }),
        React.createElement(Pet, {
            name: 'mbuku',
            animal: 'rabbit',
            breed: 'white'
        }),
        React.createElement(Pet, {
            name: 'Babu',
            animal: 'dog',
            breed: 'chihuahua'
        })
    ]);
};

render(React.createElement(App, Pet), document.getElementById('root'));
