import React, { Component } from "react";
import { connect } from "react-redux";

import { loadList } from "../../store/actions/homepageActions";
import ItemCard from "../../components/item/ItemCard";

class HomePage extends Component {
  componentDidMount() {
    this.props.loadList(this.props.pageIndex);
  }

  render() {
    console.log(this.props.list.data);

    return (
      <div className="bg-black container flex flex-wrap content-start px-4">
        {this.props.list.data &&
          this.props.list.data.map((item, index) => (
            <ItemCard data={item} key={index.toString()} />
          ))}
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
