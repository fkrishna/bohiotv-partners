import React from "react";

class SearchNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  render() {
    return this.renderSearchBar();
  }

  renderSearchBar() {
    return (
      <React.Fragment>
        {this.renderLargerDevices()}
        {this.renderSmallerDevices()}
      </React.Fragment>
    );
  }

  renderLargerDevices() {
    return (
      <div className="uk-visible@m">
        <div className="uk-navbar-item">
          <form
            method="GET"
            className="uk-search uk-search-navbar"
            onSubmit={e => {
              this.props.onSubmit(e, this.input.current.value);
            }}
          >
            <button
              type="submit"
              className="uk-search-icon-flip"
              uk-search-icon="true"
            ></button>
            <input
              className="uk-search-input"
              type="search"
              placeholder="Enter movie title..."
              ref={this.input}
            />
          </form>
        </div>
      </div>
    );
  }

  renderSmallerDevices() {
    return (
      <div className="uk-hidden@m">
        <a
          href="#"
          className="nav-overlay"
          uk-search-icon="true"
          uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
          ratio="1.2"
        ></a>

        <div className="nav-overlay uk-navbar-left uk-flex-1" hidden={true}>
          <div className="uk-navbar-item uk-width-expand">
            <form className="uk-search uk-search-navbar uk-width-1-1">
              <input
                className="uk-search-input uk-text-center"
                type="search"
                placeholder="Enter movie title..."
                autoFocus
              />
            </form>
          </div>
          <a
            href="#"
            className="uk-navbar-toggle"
            uk-close="true"
            uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
          ></a>
        </div>
      </div>
    );
  }
}

export default SearchNavBar;
