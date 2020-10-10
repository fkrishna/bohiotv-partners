import React from "react";
import { Link } from "react-router-dom";

import { toCamelCase } from "core/utils";

class Table extends React.Component {
  render() {
    const { header, data } = this.props;
    return (
      <table className="uk-table uk-table-divider uk-table-striped">
        <thead>
          <tr>
            {header &&
              header.map(headerName => (
                <th className="uk-text-emphasis">{headerName}</th>
              ))}
          </tr>
        </thead>
        <tfoot>
          <tr>
            {header &&
              header.map(headerName => (
                <th className="uk-text-emphasis">{headerName}</th>
              ))}
          </tr>
        </tfoot>
        <tbody>
          {data && data.map(d => this._renderTableData(d))}
          {this.props.children}
        </tbody>
      </table>
    );
  }

  _renderTableData = data => {
    let { header, action } = this.props;
    return (
      <tr>
        {header.map(name => {
          let _key = toCamelCase(name);
          let value = null;
          if (data.hasOwnProperty(_key)) value = data[_key];
          return <td className="uk-text-capitalize">{value}</td>;
        })}
        {action ? <td>{action(data)}</td> : null}
      </tr>
    );
  };
}

Table.defaultProps = {
  header: [],
  data: null,
  action: null
};

export default Table;

//  { <td className="uk-text-capitalize">{data.title}</td>

//         <td>{data.lastUpdated}</td>
//         <td className="uk-text-capitalize">{data.published}</td> */}
// {/* {tableDataAction} */}
// {/* {values && values.map(v => <td className="uk-text-capitalize">{v}</td>)} */}
// {/* data.array.forEach(key, value => {console.log(key, value)}); */}
// {/* {header &&
// header.map(key => {
//   return <td>{data["title"]}</td>;
// })}
