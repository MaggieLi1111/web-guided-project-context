import React from "react";
import { FamilyContext } from "../App";

const Siblings = (props) => {
  return (
    <section className="parents">
      <FamilyContext.Consumer>
        {(values) => (
          <>
          {values.activeFamily.siblings.map((p) => (
            <div className="person" key={p.name}>
              <img width="150" src={p.img} alt={p.name} />
              <strong>{p.name}</strong>
            </div>
          ))}
          </>
        ) }
      </FamilyContext.Consumer>      
    </section>
  );
};

export default Siblings;