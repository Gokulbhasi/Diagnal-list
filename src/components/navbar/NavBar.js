import React, { Component } from "react";
import { connect } from "react-redux";
import { searchInRedux } from "../../store/actions/searchActions";

class Navbar extends Component {
  state = {
    toggleSearch: false,
    searchTerm: ""
  };
  toggleSearch = e => {
    this.props.searchInRedux("");
    this.setState({ toggleSearch: !this.state.toggleSearch });
    e.preventDefault();
  };
  searchRedux = event => {
    event.persist();
    this.setState({ searchTerm: event.target.value });
    this.props.searchInRedux(event.target.value);
  };
  // }
  // const Navbar = ({ data }) => {
  render() {
    return (
      <div className=" h-48 text-5xl">
        {!this.state.toggleSearch ? (
          <div className="w-full px-2 flex items-center flex-wrap justify-between py-20">
            <div className="text-white self-start flex items-center w-4/5">
              <span className="actnBtn back">
                <img
                  src="http://localhost/diagnal/public/dummyImages/back.png"
                  alt="next"
                />
              </span>
              <p className="pl-2 truncate">Romantic Comedy</p>
            </div>
            <div className="self-end flex items-center w-1/5">
              <span className="actnBtn back" onClick={this.toggleSearch}>
                <img
                  src="http://localhost/diagnal/public/dummyImages/search.png"
                  alt="search"
                />
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
                <img
                  src="http://localhost/diagnal/public/dummyImages/search.png"
                  alt="search"
                />
              </span>
            </div>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.home.loading,
    searchTerm: state.home.searchTerm,
    display: state.home.display,
    searchInRedux: state.home.searchInRedux
  };
};

export default connect(
  mapStateToProps,
  { searchInRedux }
)(Navbar);
