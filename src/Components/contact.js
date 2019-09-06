import React, { Component } from 'react';


class Contact extends Component {

    state={
        name: '',
        email: '',
        message: '',
    }

    changeHandler= e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    submitHandler = (e)=> {
        
        e.preventDefault()
        this.setState({
            name: '',
            email: '',
            message: '',
        })
    }


    render(){
        const {name, email, message}= this.state;


        return(
            <div className="contact-container">
                <form name='contact' className="contact-form" method='post'>
                <input type="hidden" name="form-name" value="contact"/>
                    <label htmlFor="" className="contact-form__label">
                        Please provide your Name:  <input 
                    name="name" 
                    type="text" 
                    placeholder="Name" 
                    className="contact-form__name input"
                    value={name}
                    onChange= {this.changeHandler}/>
                    </label>
                   
                    <label htmlFor="" className="contact-form__label">Email Address: <input  
                    name="email" 
                    type="email"  
                    placeholder="Email" 
                    className="contact-form__email input"
                    value={email}
                    onChange= {this.changeHandler}/></label>
                    
                    <label htmlFor="" className="contact-form__label">Leave Us a Note: <textarea 
                    name="message" 
                    className="contact-form__message"
                    value={message}
                    onChange= {this.changeHandler}
                    /> </label>
                    
                    <input type="submit" value="Submit" className="contact-form__submit" onClick={this.submitHandler}/>
                    
                </form>

            </div>
        )
    }
}





export default Contact;