import React from 'react';
import './App.css';
import Form from './Form'
import Contacts from './Contacts'


class App  extends React.Component {

  constructor(){
    super()
    this.state={
      contacts: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/contacts')
    .then(resp => resp.json())
    .then(contacts => {this.setState({contacts: contacts})})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.addToDatabase(e)
    
  }

  addToDatabase = e => {
    let child = e.target.children
    const info = {name: child[0].value, email: child[2].value, number: child[4].value, linkedIn: child[6].value}
    
    const reqObj = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"name": info.name, "email": info.email, "number": info.number, "linkedIn": info.linkedIn})
    }
    console.log(reqObj)
    fetch('http://localhost:3000/contacts', reqObj)
    .then(resp => resp.json())
    .then(contact => this.addContact(contact))
  }

  addContact = contact => {
    this.setState({contacts: [...this.state.contacts, contact]})
  }

  deleteContact = e => {
    let id = e.target.parentNode.id
    fetch(`http://localhost:3000/contacts/${id}`, {method: "DELETE"})
    .then(resp => this.showDelete(id))
  }

showDelete = Oldid => {
  const newContacts = this.state.contacts.filter(contact => (parseInt(contact.id, 10)) !== (parseInt(Oldid, 10)))
  this.setState({contacts: newContacts})
}

checkChange = e => {
  e.target.parentNode.className = "important"
}

 render(){
   return (
    <div className="App">
      <header className="App-header">
       <Form handleSubmit={this.handleSubmit}/>
       <Contacts checkChange={this.checkChange} contacts={this.state.contacts} deleteContact={this.deleteContact}/>
      </header>
    </div>
   )
 }
}

export default App
