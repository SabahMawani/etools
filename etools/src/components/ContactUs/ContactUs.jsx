import React,{Component} from 'react';
import axios from 'axios';
import '../redandgreen.css';
import './contactus.css';
class ContactUs extends Component{
    state = {
        username : null,
        email : null ,
        comment : '',
        submitstatus:false,
        commentstatus:false,
        emailstatus:false,
        usernamestatus:false
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})}

    handleSubmit = (e) => {
         e.preventDefault();
         const {username ,comment ,email,submitstatus,emailstatus,commentstatus,usernamestatus} = this.state ;
         if(username && comment && email)
         {
            axios.post('http://localhost:8000/contact_us/',{username,email,comment})
            .then((response)=>{
                alert("Feedback Submitted")
            })
            /**Set error in form submission*/
            .catch((error)=>{
                alert('Form submission error')
                this.setState({submitstatus:true});
            })
         }
         else
         {
            if(!username){
                this.setState({usernamestatus:true});
            }
            if(!comment){
                this.setState({commentstatus:true});
            }
            if(!email){
                this.setState({emailstatus:false});
            }
            if(!username || !email || !comment){
                this.setState({submitstatus:true})
            }
         }

    }
    render(){
        return(
            <div>{this.ContactUs()}</div>
        )
    }
    ContactUs = () =>{
        const {submitstatus,emailstatus,commentstatus,usernamestatus} = this.state ;
        return(
            <div className='l-container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='l-cont'>
                        <label htmlFor="username" >Username</label>
                        <input type="text" id="username" onChange={this.handleChange} />
                    </div>
                    {usernamestatus && <p className='Red'>Enter Username</p>}
                    <div className='l-cont'>
                        <label htmlFor="Email">Email</label>
                        <input type="Email" id="email" onChange={this.handleChange} />
                    </div>
                    {emailstatus && <p className='Red'>Enter Email</p>}
                    <div className='l-cont'>
                        <label htmlFor="Comment">Comment</label>
                        <input type="text" id="comment"  onChange={this.handleChange} />
                    </div>
                    {commentstatus && <p className='Red'>Enter Comment</p>}
                    <button type="submit" className='l-btn' >Post</button>
                    {submitstatus && commentstatus && emailstatus && usernamestatus && <p className='Green'> Thanks For Feedback</p>}
                </form>
            </div>   
        );
    }
}

export default ContactUs;