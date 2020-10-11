import React from "react";
import { Column, GHOSTS, ghostMatches } from "./data";
import "./App.css";

export const App = (): React.ReactElement => {
  const [columns, setColumns] = React.useState<Array<string>>([]);

  const toggleColumn = (name: string): void => {
    if (columns.indexOf(name) === -1) {
      setColumns([name, ...columns]);
    } else {
      setColumns(columns.filter((c) => c !== name));
    }
  };

  return (
    <div className="large-container">
      <table className="centered">
        <thead>
          <tr>
            <th>Type</th>
            {Object.entries(Column).map(([short, long]: [string, string]) => (
              <th
                key={short}
                className={`cursor-pointer ${
                  columns.indexOf(short) !== -1 ? "column-selected" : ""
                }`}
                onClick={(): void => toggleColumn(short)}
              >
                {long}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {GHOSTS.map((ghost) => {
            return (
              <tr key={ghost.name}>
                <td
                  className={
                    !ghostMatches(ghost, columns) ? "row-crossed-out" : ""
                  }
                >
                  {ghost.name}
                </td>
                <td
                  className={
                    columns.indexOf("box") !== -1 ? "column-selected" : ""
                  }
                >
                  {ghost.evidence.box ? "X" : ""}
                </td>
                <td
                  className={
                    columns.indexOf("fingerprints") !== -1
                      ? "column-selected"
                      : ""
                  }
                >
                  {ghost.evidence.fingerprints ? "X" : ""}
                </td>
                <td
                  className={
                    columns.indexOf("writing") !== -1 ? "column-selected" : ""
                  }
                >
                  {ghost.evidence.writing ? "X" : ""}
                </td>
                <td
                  className={
                    columns.indexOf("orbs") !== -1 ? "column-selected" : ""
                  }
                >
                  {ghost.evidence.orbs ? "X" : ""}
                </td>
                <td
                  className={
                    columns.indexOf("emf") !== -1 ? "column-selected" : ""
                  }
                >
                  {ghost.evidence.emf ? "X" : ""}
                </td>
                <td
                  className={
                    columns.indexOf("freezing") !== -1 ? "column-selected" : ""
                  }
                >
                  {ghost.evidence.freezing ? "X" : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="padding"></div>
      <p>
        <strong>Instructions</strong>: Mouse over tiles to highlight columns and
        rows. Click a piece of evidence along the top to highlight that evidence
        and show which ghosts match.
      </p>
    </div>
  );
};
