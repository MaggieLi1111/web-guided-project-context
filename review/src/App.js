import React, { useState } from 'react';
import data from './data';

const App = ()=> {
    const [person, setPerson] = useState(data);
    return(<div className="App component">
        <h1>Main App</h1>
        <SubComp1 person={person}/>
    </div>);
};

const SubComp1 = (props) => {
    const { person } = props;
    
    return(<div className="component">
        <h1>Sub Comp 1</h1>
        <h2>{person.name.title} {person.name.first} {person.name.last}</h2>
        <SubComp2/>
    </div>)
}

const SubComp2 = () => {
    return(<div className="component">
        <h1>Sub Comp 2</h1>
        <SubComp3/>
    </div>)
}

const SubComp3 = () => {
    return(<div className="component">
        <h1>Sub Comp 3</h1>
    </div>)
}

export default App;