import React from 'react';
import { connect } from 'react-redux';


class Rent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            returnDate : '',
            memNo : '',
            name : '',
            duration:''
        }
    }
    componentDidMount (){
        document.documentElement.scrollTop = 0;
     }

    calDate = (e) =>{
        if(e.target.value == ''){
            this.setState({
                returnDate : ""
            });
            return
        }
        let today = new Date();
        let newdate = new Date();
        newdate.setDate(today.getDate()+Number(e.target.value));
        this.setState({
            returnDate : `${newdate.getDate()}/${newdate.getMonth()+1}/${newdate.getFullYear()}`
        })
    }
    handleChange = (e) =>{
        if(e.target.name == 'duration'){
            this.calDate(e);
        }
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    allowNumbers = (e) =>{
        var reg = /^[0-9]$/;
        if(!reg.test(e.key)){
            e.preventDefault()
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
        if(duration==''){
            alert("Please Enter Valid Duration");
            return;
        }
        alert("Rented the Book Successfully");
        this.props.history.push('/home');
    }
    render(){
        return(
            <React.Fragment>
            <div className="app-container"> 
                <div className="book-grid">
                    <div className="img"></div>
                    
                <div className="absol">
                 <img src={`/img/posters/${this.props.data.poster}`} height="90%" width="400px" alt="Image" />
                </div>
               <div className='container'>   
               
                    <div className="row">
                        <div className="lable"><label>User Name</label></div>
                        <div className="data">
                        <input type='text' 
                        placeholder='User Name..' 
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        ></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="lable"><label>Membership No</label></div>
                        <div className="data">
                            <input type='text' 
                            placeholder='Membership No..' 
                            name="memNo"
                            onChange={this.handleChange}
                            value={this.state.memNo}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="lable"><label>Duration of Rental</label></div>
                        <div className="data">
                        <input type='text' 
                        placeholder='Duration of Rental..'
                        name='duration'
                        value={this.state.duration}
                        onChange={this.handleChange} 
                        onKeyPress={this.allowNumbers}
                        maxLength='3'></input></div>
                    </div>
                    <div className="row">
                        <div className="lable"><label>Return Date</label></div>
                        <div className="data"><input type='text' value={this.state.returnDate} disabled></input></div>
                    </div>
                    <div className="row">
                    <a>
                    <button className='submit' onClick={this.validate}>
                        Confirm
                    </button>
                    </a>
                    <a href='/home'>
                    <button className='submit'>
                        Cancel
                    </button>
                    </a>
                   
                        </div>
               </div>
               </div>
               </div>
                </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
       data : state.selectedBook
    };
};

export default connect(
    mapStateToProps,
    null,
)(Rent);