import React from 'react'

class Form extends React.Component {

 render(){
   return (
     <div>
       <h1>Add A New Contact</h1>
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" placeholder="name"/><br/>
        <input type="email" placeholder="email"/><br/>
        <input type="tel" placeholder="phonenumber"/><br/>
        <input type="url" placeholder="linkedIN Profile"/><br/>
        <button type="submit">Submit</button>
      </form>
   </div>
   )
 }
}

export default Form 

