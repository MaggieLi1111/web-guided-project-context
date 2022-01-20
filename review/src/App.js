import React, { useState } from 'react';
import data from './data';

const App = ()=> {
    return(<div className="App component">
        <h1>Main App</h1>
        <SubComp1/>
    </div>);
};

const SubComp1 = () => {
    return(<div className="component">
        <h1>Sub Comp 1</h1>
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