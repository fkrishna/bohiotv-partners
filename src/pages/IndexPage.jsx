import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Logo, Layout } from "components";

class IndexPage extends React.Component {
  componentDidMount() {
    console.log("mount");
    // if (AuthService.isLoggedIn)
  }

  render() {
    const { navigations } = this.props;
    return (
      <React.Fragment>
        <Layout
          header={<Logo />}
          topNavs={navigations.filter((nav) => nav.position === "top")}
          bottomNavs={navigations.filter((nav) => nav.position === "bottom")}
        >
          <Switch>
            {navigations.map((navigation) => (
              <Route {...navigation} />
            ))}
            <Redirect from="*" to="/upload" />
          </Switch>
        </Layout>
      </React.Fragment>
    );
  }
}

export default IndexPage;
