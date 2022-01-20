import React, { useReducer, createContext, useContext } from 'react';

import { reducer, initialState } from './reducer';
import { setName, setLocation} from './reducer';

const PersonContext = createContext();

const App = ()=> {
    const [person, dispatch] = useReducer(reducer, initialState);
    
    return(<div className="App component">
        <PersonContext.Provider value={{person, dispatch}}>
            <h1>Main App</h1>
            <SubComp1 />
        </PersonContext.Provider>
    </div>);
};

const SubComp1 = () => {
    const { person, dispatch } = useContext(PersonContext);
    
    const handleClick = () => {
        dispatch(setLocation({
            street: "3333 N 33rd Street",
            city: "Philadelphia",
            state: "PA",
            postcode: "19191"
        }));

        // setPerson({
        //     ...person,
        //     location: {
        //         street: "3333 N 33rd Street",
        //         city: "Philadelphia",
        //         state: "PA",
        //         postcode: "19191"
        //     }
        // });
    }

    console.log(person);
    
    return(<div className="component">
        <h1>Sub Comp 1</h1>
        <h2>{person.name.title} {person.name.first} {person.name.last}</h2>
        <button onClick={handleClick}>Change Location</button>
        {/* <SubComp2/> */}
    </div>)
}

const SubComp2 = () => {
    return(<div className="component">
        <h1>Sub Comp 2</h1>
        <SubComp3 />
    </div>)
}

const SubComp3 = () => {
    const {person, setPerson} = useContext(PersonContext);

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