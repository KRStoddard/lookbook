import React from 'react'

class ContactCard extends React.Component {

 render(){
   const {id, name, email, number, linkedIn} = this.props.contact
   return (
   <div className="contact-card" id={id}>
     <input type="checkbox" onChange={this.props.checkChange}/> Important
     <h2>{name}</h2>
     <p>{email}</p>
     <p>{number}</p>
     {linkedIn !== "" ?
     <>
     <a href={linkedIn}>linkedIn</a><br/>
     </>
     :
     null
     }
     
     <button onClick={this.props.deleteContact}>Delete Contact</button>
   </div>
   )
 }
}

export default ContactCard
