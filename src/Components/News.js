import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=${this.props.apiKey}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        };
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        document.title = `NewsMonkey - ${this.props.category.charAt(0).toUpperCase()}${this.props.category.slice(1)}`;
    }

    async handlePrevClick() {
        this.setState({
            page: this.state.page - 1
        });
        this.updateNews();
    }

    async handleNextClick() {
        this.setState({
            page: this.state.page + 1
        });
        this.updateNews();
    }

    fetchMoreData = async() => {
        this.setState({
            page: this.state.page + 1
        });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=${this.props.apiKey}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
    }

    render() {
        return (
            <>
                <h3 className='my-3 text-center'>NewsMonkey - Today's Top Headlines on {this.props.category.charAt(0).toUpperCase()}{this.props.category.slice(1)}!</h3>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                         {<div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>}
                    </div>
                </InfiniteScroll >
            {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} type="button" className="btn btn-light"> &#x2B9C; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &#x2B9E;</button>
                    </div> */}
            </>
        )
    }
}

NewsItem.defaultProps = {
    title: 'Default Title',
    description: 'No description available',
};

NewsItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default News
