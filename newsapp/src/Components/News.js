import React, { Component } from 'react';
import About from './About';
import NewsItem from './NewsItem';

export default class News extends Component {

    // constructor(){
    //     super();
    //     this.state = {
    //         articles: [],
    //         loading: false
    //     }
    // }
    // async componentDidMount(){
    //     let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6f401e534ba24d9cb7b33dd25f69fasa";
    //     let data = await fetch(url); //try-catch
    //     let parseData = await data.json()
    //     this.setState({articles: parseData.articles})
    // }

    constructor(){
      // console.log("constructor is called");
      super();
      this.state = {
        count: 0,
        mount: true,
      };
    }
    
    componentDidMount(){
      // console.log(this.state.count);
    }
  
    increaseCount(){
      this.setState({count: this.state.count + 1});
    }

    
    render() {
      // console.log("render is called");
      return (
        <div className="container my-3">
            <About counter={this.state.count} />
            <button onClick={() => this.increaseCount()}>Click me</button>   
            {/* this.increaseCount.bind(this) */}

            {/* <div className="row">
                {this.state.articles.map((item) => {
                    return <div className="col-md-4"  key={item.url}>
                    <NewsItem title={item.title} description={item.description} url={item.urlToImage} newsUrl={item.url}/>
                </div>
                })}
                  
              </div> */}
        </div>
      )
    }
}
