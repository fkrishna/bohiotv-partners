import React from "react";
import { Link } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";

// services
import PartnerService from "core/service";

// components
import Table from "shared/components/Table";
import LoadingSpinner from "components/LoadingSpinner";

class AnalyticPage extends React.Component {
  tableHeader = ["title", "watch time", "views"];

  constructor(props) {
    super(props);
    this.state = {
      reports: [
        {
          title: "Chomeco",
          watchTime: "2800",
          views: "9550",
        },
        {
          title: "Millionaire Par Erreur",
          watchTime: "3500",
          views: "1200",
        },
      ],
    };
  }

  componentDidMount() {
    // trackPromise(
    //   PartnerService.analytics()
    //     .then((res) => {
    //       this.setState({ reports: res.data.payload }, (_) => {
    //         console.log(this.state.reports);
    //       });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       alert("an unexpected error occured");
    //     })
    // );
  }

  render() {
    return (
      <React.Fragment>
        <div className="uk-margin-top">
          <h2>Analytics</h2>
          <p>The total watch time (minutes) and total views</p>
          <ul class="uk-child-width-expand" uk-tab="true">
            <li class="uk-active">
              <a href="#">Movies</a>
            </li>
            <li class="uk-active">
              <a href="#">Series</a>
            </li>
          </ul>
        </div>
        {this._renderTable()}
        <LoadingSpinner type="Oval" size="45" />
      </React.Fragment>
    );
  }

  _renderTable() {
    const { reports } = this.state;
    let el = null;
    if (reports && reports.length !== 0)
      el = <Table header={this.tableHeader} data={reports} />;
    return <React.Fragment>{el}</React.Fragment>;
  }
}

export default AnalyticPage;
