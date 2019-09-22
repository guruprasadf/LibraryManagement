import React from 'react';

export default class Return extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            memNo:''
        }
    }
    validate = () =>{
        const {name,memNo,duration} = this.state;
        if(name==''){
            alert("Please Enter Valid User Name");
            return;
        }
        if(memNo==''){
            alert("Please Enter Valid Membership Number");
            return;
        }
        alert(" Successfully Returned the Book");
        this.props.history.push('/home');
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(  
            <div className="app-container"> 
            <div className="book-grid">
                <div className="img">
                
                </div>
            
            
        
        <div className='containerReturn'>   
               
        <div className="row">
            <div className="lable"><label>User Name</label></div>
            <div className="data">
                <input type='text' placeholder='User Name..' name='name' value={this.state.name} onChange={this.handleChange}></input></div>
        </div>
        <div className="row">
            <div className="lable"><label>Membership No</label></div>
            <div className="data">
                <input type='text' placeholder='Membership No..' name='memNo' value={this.state.memNo} onChange={this.handleChange}></input></div>
        </div>
        
                    <button className='submit' onClick={this.validate}>
                        Return
                    </button>
        
        <a href='/home'>
        <button className='submit'>
            Cancel
        </button>
        </a>
        </div></div>
        </div>)
    }
}