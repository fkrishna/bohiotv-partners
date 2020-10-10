import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// import 3rd Party Lib
import "uikit/dist/css/uikit.min.css";
import Uikit from "uikit/dist/js/uikit.min.js";
import Icons from 'uikit/dist/js/uikit-icons';
Uikit.use(Icons);


class App extends Component {

  componentWillMount() {

    // listening for route change
    // this.unlisten = this.props.history.listen((location, action) => {
    //   this.action = action;
    //   this.props.onUrlChange(location, action);
    // });
  }

  render() {
    return (
      <React.Fragment>
        <div className="uk-light">
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
