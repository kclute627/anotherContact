import React, { Component } from 'react';
import NetlifyForm from 'react-netlify-form'


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


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
   

    submitHandler = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => this.setState({
            name: '',
            email: '',
            message: '',
        }))
          .catch(error => alert(error));
  
        e.preventDefault();
      };


    render(){
        const {name, email, message}= this.state;


        return(
            <div className="contact-container">
                <form name='contact' className="contact-form" method='post' >
                <input type="hidden" name="form-name" value="contact"/>
                <p className="">
                     <label htmlFor="" className="contact-form__label">
                        Please provide your Name:  <input 
                    name="name" 
                    type="text" 
                    placeholder="Name" 
                    className="contact-form__name input"
                    value={name}
                    onChange= {this.changeHandler}/>
                    </label>
                </p>
                <p className="">
                    <label htmlFor="" className="contact-form__label">Email Address: <input  
                    name="email" 
                    type="email"  
                    placeholder="Email" 
                    className="contact-form__email input"
                    value={email}
                    onChange= {this.changeHandler}/></label>
                </p>
                   <p className="">
                        
                    <label htmlFor="" className="contact-form__label">Leave Us a Note: <textarea 
                    name="message" 
                    className="contact-form__message"
                    value={message}
                    onChange= {this.changeHandler}
                    /> </label>
                   </p>
                   <p className="">
                       <button type="submit" value="Submit" className="contact-form__submit" onClick={this.submitHandler}>Send</button>\
                   </p>
                   
                    
                   
                    
                    
                    
                </form>

            </div>
        )
    }
}





export default Contact;