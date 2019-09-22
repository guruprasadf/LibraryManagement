import React from 'react';
import { connect } from 'react-redux';

class BookCard extends React.Component{
    constructor(props){
        super(props);
            this.state={
                available: true
            }
        
    }
    assetClick  = (event) =>{
          this.props.setData(this.props.data);
          this.props.history.push('/rent');
    }

    onChange = (e) =>{
        if(e.target.checked){
            this.setState({
                [e.target.name] : true 
            })
        }else{
            this.setState({
                [e.target.name] : false 
            })
        }
       
    }
    render(){
        return(
            <div className="book-card">
                <div className="image-container">
                    { <img src={`/img/posters/${this.props.data.poster}`} height="100%" width="100%" alt="Image" /> 
                    }
                </div>
                <div className="description">
                    <h4> {this.props.data.title} </h4>
                   
                    <p>
                    {this.props.data.description}
                    </p>
                    <button className={this.state.available?'button' : 'button disable'} onClick={this.assetClick}
                     disabled={!this.state.available}
                    >
                        Rent Book
                    </button>
                    <label class="switch">
                        <input type="checkbox" 
                            name='available' 
                            checked={this.state.available}
                            onChange={this.onChange}
                        >
                        </input>
                    <div class="slider round">
                        <span className={this.state.available? 'on':'off'}>
                            {this.state.available?'Available':'Not Available'}
                        </span>
                        
                    </div>
                    </label>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    setData: (data) => {dispatch({ type: 'SET_DATA',payload:data})},  
});
export default connect(
    null,
    mapDispatchToProps,
)(BookCard);