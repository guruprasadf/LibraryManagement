import React from 'react';
import  BookCard from './BookCard';
import data from '../Assets/data.json'
class Container extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            initialItems: data.books,
            items: data.books
        }
    }
    filterList = (event) =>{
        let updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
          return item.title.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }
    render() { 
        return (
            <div className="app-container"> 
              <div className="topnav">
                <a className='title' href="">Library </a>
               
                <input className='input' type="text" placeholder="Search Books.." onChange={this.filterList}/>
                <a href="/return" className="returns"> Return Books </a>
              </div>
                { this.state.items.length > 0 &&
                <div className="book-grid">
                    <div className="img"></div>
                    {this.state.items.map((data,i)=>{
                        return <BookCard key ={i} data={data} {...this.props} />
                    })}
                </div>}   
               { this.state.items.length == 0 &&
                   <div className="noMatch">
                         No Match Found
                  </div>
               } 
            </div>
        )
    }
}

export default Container;