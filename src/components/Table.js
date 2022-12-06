import React, { Component } from "react";
import "./Table.css";

export default class Table extends Component {
  render() {
    const { header, body } = this.props;
    return (
      <table id="customers">
        <tr>
          {header.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
        {body.map((obj) => (
          <tr>
            {header.map((item) => (
              <td>{obj[item]}</td>
            ))}
          </tr>
        ))}
      </table>
    );
  }
}
