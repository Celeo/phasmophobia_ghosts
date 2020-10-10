import React, { useState } from "react";
import { Ghost, GHOSTS } from "./data";
import "./App.css";

export const App = (): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ghosts, setGhosts] = useState<Array<Ghost>>(GHOSTS);

  return (
    <div className="large-container">
      <table className="centered">
        <thead>
          <tr>
            <th>Type</th>
            <th>Spirit Box</th>
            <th>Fingerprints</th>
            <th>Book writing</th>
            <th>Ghost Orbs</th>
            <th>EMF 5</th>
            <th>Freezing</th>
          </tr>
        </thead>
        <tbody>
          {ghosts.map((ghost) => {
            return (
              <tr key={ghost.name}>
                <td>{ghost.name }</td>
                <td>{ghost.evidence.box ? "X" : ""}</td>
                <td>{ghost.evidence.fingerprints ? "X" : ""}</td>
                <td>{ghost.evidence.writing ? "X" : ""}</td>
                <td>{ghost.evidence.orbs ? "X" : ""}</td>
                <td>{ghost.evidence.emf ? "X" : ""}</td>
                <td>{ghost.evidence.freezing ? "X" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
