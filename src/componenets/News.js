import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
// import NewsImage from '../assets/news.jpg';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country : 'us',
    category : 'general',
  }

  static propTypes = {
    country : PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }

  constructor() {
    super();
    console.log("I am constructor from news ");
    this.state = {
      articles : [],
      loading : true,
      page : 1,
      totalResults : 0,
      pageSize : 12,

    }
  }

  async handleFetchArticle (page){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url).then((res)=>res.json()).catch((err)=>console.log(err));
    this.setState({articles : data.articles,
      totalResults : data.totalResults,
      loading : false,
    })
  }

  async componentDidMount() {
    console.log("cdm");
    await this.handleFetchArticle(this.state.page);
  }

  handlePrevClick = async () => {
    console.log("Previous");
    this.setState({loading : true})
    await this.handleFetchArticle(this.state.page-1);
    this.setState({
      page : this.state.page - 1,
      loading : false,
    
    })
  }

  handleNextClick = async () => {
    console.log("Next");
    this.setState({loading : true})
    await this.handleFetchArticle(this.state.page+1);
    this.setState({
      page : this.state.page + 1,
      loading : false,
    })
    
  }
  
  render() {
    return (
      <div className='container'>
        <h1 className="text-center " style={{margin : '80px 0px'}}>News Gorrilla Headlines</h1>
        
        {this.state.loading ? <div className="container"><Spinner/></div> : <></>}
        <div className="row mx-auto">
          {!this.state.loading && this.state.articles.sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt)).map((element)=>{
            return <div className="col-md-3" key={element.url}>
                <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage}  author={element.author} newsUrl={element.url} date={element.publishedAt} source={element.source.name}></NewsItem>
            </div>  
            })}
        </div>
        <div className="container d-flex  justify-content-evenly">
          <button disabled={this.state.page<=1}className="btn btn-dark my-5" onClick={this.handlePrevClick}>Previous</button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.state.pageSize)}className="btn btn-dark my-5" onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    )
  }
}

export default News
