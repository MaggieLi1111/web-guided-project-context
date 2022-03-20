import React, { createContext, useContext, useReducer } from 'react';

import { reducer, setName, setLocation, initialState } from "./reducer"

import "./styles.scss"

const PersonContext = createContext()

const App = () => {

    const [person, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="App component">
            <PersonContext.Provider value={[person, setName, setLocation, dispatch]}>
                <h1>Main App</h1>
                <SubComponent1 />
            </PersonContext.Provider>
        </div >);
};

const SubComponent1 = () => {
    return (
        <div className='component'>
            <h1>SubComponent 1</h1>
            <SubComponent2/>
        </div>
    )
}

const SubComponent2 = () => {
    const [ person ] = useContext(PersonContext)

    return (
        <div className='component'>
            <h1>SubComponent 2</h1>
            <h3>Name: {person.name.title} {person.name.first} {person.name.last} </h3>
            <SubComponent3/>
        </div>
    )
}

const SubComponent3 = () => {
    const [person, setPerson, setLocation, dispatch] = useContext(PersonContext);

    const changeLocation = () => {
        dispatch(setLocation("222 N 22 Str", "Philadelphia", "PA"))
    }

    const changeName = () => {
        dispatch(setName("Mr", "Warren", "Longmire"))
    }

    return (
        <div className='component'>
            <h1>SubComponent 3</h1>
            <h3>Location: {person.location.street} {person.location.city} {person.location.state} </h3>
            <br/>
            <button onClick={changeName}>Change Name</button>
            <button onClick={changeLocation}>Change Location</button>
        </div>
    )
}
export default App;