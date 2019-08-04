import React, { Component } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

import { loadList } from "../../store/actions/homepageActions";
import ItemCard from "../../components/item/ItemCard";
import Navbar from "../../components/navbar/NavBar";

class HomePage extends Component {
  componentDidMount() {
    this.pgno = this.props.match.params.pgno
      ? parseInt(this.props.match.params.pgno)
      : 1;
    this.size = this.props.match.params.size
      ? parseInt(this.props.match.params.size)
      : 10;
    this.props.loadList(this.pgno, this.size);
  }

  pagination = (pages, pgno) => {
    let data = [];
    for (let j = 1; j <= pages; j++) {
      data.push(
        <li key={j} className={j === pgno ? "active" : ""}>
          <a href={"/" + j}>{j}</a>
        </li>
      );
    }

    return data;
  };
  loadItems = page => {
    console.log("loading", page);
    this.props.loadList(page, this.size);
  };
  render() {
    // console.log(this.props.list.data);

    return (
      <div className="bg-black container ">
        <div className="sticky top-0 bg-black">
          <Navbar />
        </div>
        <div>
          {this.props.display.pageNo &&
            (this.props.display.data.length < 0 ? (
              <div className="text-white p-3 w-full text-center mt-3 mb-10">
                No Items found!
              </div>
            ) : (
              <InfiniteScroll
                pageStart={1}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.props.fulldata.pagination}
                threshold={500}
              >
                <div className="flex flex-wrap content-start">
                  {this.props.display.data.map((item, index) => (
                    <ItemCard data={item} key={index.toString()} />
                  ))}
                </div>
              </InfiniteScroll>
            ))}
        </div>
        {this.props.display &&
          this.props.display.pageNo &&
          this.props.display.pagination === true && (
            <ul className="pagination text-white flex align-items-center justify-center m-5">
              {this.pagination(
                this.props.display.pages,
                this.props.display.pageNo
              )}
            </ul>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.home);
  return {
    loading: state.home.loading,
    pageIndex: state.home.pageIndex,
    fulldata: state.home.fulldata,
    display: state.home.display,
    search: state.home.searchInRedux
  };
};

export default connect(
  mapStateToProps,
  { loadList }
)(HomePage);
