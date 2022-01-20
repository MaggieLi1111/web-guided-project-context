import React, { useState } from "react";

import { data } from "./data";

import FamilyContext from './contexts/FamilyContext';

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  const name="adaf";
  return (
    <div className="App">
      <section className="header">
        <h1>Family Trees</h1>
        {families.map(family => (
          <button
            className={`family-button ${family.familyName ===
              activeFamily.familyName && "active"}`}
            key={family.familyName}
            onClick={() => setActiveFamily(family)}
          >
            {family.familyName}
          </button>
        ))}
      </section>
      
      
        {activeFamily && <FamilyTree />}
        <FamilyContext.Provider value={activeFamily}>
      </FamilyContext.Provider>
    </div>
  );
}