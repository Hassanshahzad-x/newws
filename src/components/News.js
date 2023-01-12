import React, { Component } from 'react'
import Item from './Item'

export class News extends Component {
   constructor(props) {
      super(props)

      this.state = {
         articles: [],
         loading: false,
         page: 1
      }
   }

   async componentDidMount() {
      let url = "https://newsapi.org/v2/everything?q=apple&from=2023-01-11&to=2023-01-11&sortBy=popularity&apiKey=f1166a120a7e4ffeaf54867f611ed98b"
      let data = await fetch(url)
      let parsed = await data.json()
      this.setState({ articles: parsed.articles })
   }

   handleNext = async () => {
      let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-12-12&sortBy=publishedAt&apiKey=f1166a120a7e4ffeaf54867f611ed98b&page=${this.state.page + 1}%pageSize=20`
      let data = await fetch(url)
      let parsed = await data.json()
      this.setState({
         articles: parsed.articles,
         page: this.state.page + 1
      })
   }

   handlePrevious = async () => {
      let url = `https://newsapi.org/v2/everything?q=apple&from=2023-01-11&to=2023-01-11&sortBy=popularity&apiKey=f1166a120a7e4ffeaf54867f611ed98b&page=${this.state.page - 1}%pageSize=20`
      let data = await fetch(url)
      let parsed = await data.json()
      this.setState({
         articles: parsed.articles,
         page: this.state.page - 1
      })

   }

   render() {
      return (
         <div className='container my-3'>
            <h2>Top Headlines</h2>

            <div className='row'>
               {this.state.articles.map((element) => {
                  return <div className='col-md-4' key={element.url}>
                     <Item title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} url={element.urlToImage} newsurl={element.url} />
                  </div>
               })}
            </div>
            <div className='container d-flex justify-content-between'>
               <button disabled={this.state.page < 1} type="button" class="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
               <button type="button" class="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
            </div>
         </div>
      )
   }
}

export default News
