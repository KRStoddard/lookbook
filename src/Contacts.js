import React from 'react'
import ContactCard from './ContactCard'

export default class Contacts extends React.Component{

    renderContacts = () => {
        return this.props.contacts.map(contact => {
            return <ContactCard key={contact.id} contact={contact} deleteContact={this.props.deleteContact} checkChange={this.props.checkChange}/>
        })
    }
    render(){
        return(
            <div>
                {this.renderContacts()}
            </div>
        )
    }
}