import React, { Component } from "react";
import { connect } from "react-redux";

import { loadList } from "../../store/actions/homepageActions";
import ItemCard from "../../components/item/ItemCard";
import Navbar from "../../components/navbar/NavBar";

class HomePage extends Component {
  componentDidMount() {
    this.props.loadList(this.props.pageIndex);
  }

  render() {
    console.log(this.props.list.data);

    return (
      <div className="bg-black container ">
        <div className=" ">
          <Navbar />
        </div>
        <div className="flex flex-wrap content-start">
          {this.props.list.data &&
            this.props.list.data.map((item, index) => (
              <ItemCard data={item} key={index.toString()} />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.home.loading,
    pageIndex: state.home.pageIndex,
    list: state.home.list
  };
};

export default connect(
  mapStateToProps,
  { loadList }
)(HomePage);
