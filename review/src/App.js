import React, { useState, createContext, useContext } from 'react';
import data from './data';

const PersonContext = createContext();

const App = ()=> {
    const [person, setPerson] = useState(data);
    return(<div className="App component">
        <PersonContext.Provider value={[person, setPerson]}>
            <h1>Main App</h1>
            <SubComp1 />
        </PersonContext.Provider>
    </div>);
};

const SubComp1 = (props) => {
    const { person, setPerson } = props;
    
    const handleClick = () => {
        setPerson({
            ...person,
            location: {
                street: "3333 N 33rd Street",
                city: "Philadelphia",
                state: "PA",
                postcode: "19191"
            }
        });
    }

    return(<div className="component">
        <h1>Sub Comp 1</h1>
        <h2>{person.name.title} {person.name.first} {person.name.last}</h2>
        <button onClick={handleClick}>Change Location</button>
        <SubComp2 person={person} setPerson={setPerson}/>
    </div>)
}

const SubComp2 = (props) => {
    const { person, setPerson } = props;
    return(<div className="component">
        <h1>Sub Comp 2</h1>
        <SubComp3 person={person} setPerson={setPerson}/>
    </div>)
}

const SubComp3 = (props) => {
    const { person, setPerson } = props;

    const handleClick = ()=> {
        setPerson({
            ...person,
            name: {
                title: "Mx",
                first: "Person",
                last: "Person"
            }
        });
    }

    return(<div className="component">
        <h1>Sub Comp 3</h1>
        <h2>{person.location.street} {person.location.city}, {person.location.state} {person.location.postcode}</h2>
        <button onClick={handleClick}>Change Name</button>
    </div>)
}

export default App;