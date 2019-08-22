const Pet = ({ name, animal, breed }) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed)
    ]);
};

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

ReactDOM.render(React.createElement(App, Pet), document.getElementById('root'));
