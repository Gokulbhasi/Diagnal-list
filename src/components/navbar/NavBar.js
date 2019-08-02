import React, { Component } from "react";
import { connect } from "react-redux";
import { searchInRedux } from "../../store/actions/searchActions";

class Navbar extends Component {
  state = {
    toggleSearch: false,
    searchTerm: ""
  };
  toggleSearch = e => {
    this.setState({ toggleSearch: !this.state.toggleSearch });
    e.preventDefault();
  };
  searchRedux = event => {
    event.persist();
    this.setState({ searchTerm: event.target.value });
    console.log(event.target.value);
    this.props.searchInRedux(event.target.value);
  };
  // }
  // const Navbar = ({ data }) => {
  render() {
    return (
      <div>
        {!this.state.toggleSearch ? (
          <div className="w-full px-2 flex items-center flex-wrap justify-between py-10">
            <div className="text-white self-start flex items-center">
              <span className="actnBtn back">
                <img src="http://localhost/diagnal/public/dummyImages/back.png" />
              </span>
              <p className="pl-2">Romantic Comedy</p>
            </div>
            <div className="self-end flex items-center">
              <span className="actnBtn back" onClick={this.toggleSearch}>
                <img src="http://localhost/diagnal/public/dummyImages/search.png" />
              </span>
            </div>
          </div>
        ) : (
          <form
            className="w-full px-2 flex items-center flex-wrap justify-between py-10"
            onSubmit={this.searchRedux}
          >
            <div className="text-white self-start flex items-center w-4/5">
              <input
                type="text"
                name="searchTerm"
                placeholder="Search"
                value={this.state.searchTerm}
                onChange={this.searchRedux}
                className="bg-transparent w-full px-2"
              />
            </div>
            <div className="self-end flex items-center w-1/5 text-right">
              <span
                className="actnBtn search mr-0 ml-auto"
                onClick={this.toggleSearch}
              >
                <img src="http://localhost/diagnal/public/dummyImages/search.png" />
              </span>
            </div>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    loading: state.home.loading,
    searchTerm: state.home.searchTerm,
    searchInRedux: state.home.searchInRedux
  };
};

export default connect(
  mapStateToProps,
  { searchInRedux }
)(Navbar);
