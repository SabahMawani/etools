import React,{Component} from 'react';
class ContactUs extends Component{
    state = {
        username : null,
        Email : null ,
        Comment : ''
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})}

    handleSubmit = (e) => {
         e.preventDefault();
        alert("Feedback Submitted")
    }
    render(){
        return(
            <div>{this.ContactUs()}</div>
        )
    }
    ContactUs = () =>{
        return(
            <div>
                <div class='container'>
                    <div class='row'>
                        <div class='col-lg-3 col-3'></div>
                        <div class='col-lg-6 col-6'>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label htmlFor="Email">Email</label>
                                <input type="Email" id="Email" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label htmlFor="Comment">Comment</label>
                                <input type="text" id="Comment"  onChange={this.handleChange} />
                            </div>
                            <button type="submit">Post</button>
                        </form>
                        </div>
                        <div class='col-lg-3 col-3'></div>
                    </div>
                </div>

            </div>   
        );
    }
}

export default ContactUs;