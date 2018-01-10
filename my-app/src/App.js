import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ContactInput from './contact-input';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const muiTheme = getMuiTheme({
  palette: {
    color: '#E53935',
  },
  Table: {
    color: '#E53935'
  },
  stepper: {
        iconColor: '#E53935'
    }
});


class App extends Component {
  constructor () {
    super();
    this.state = {
      contacts: [],
    }
    this.addContact = this.addContact.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
  }

  addContact (object) {
    let contactArray = this.state.contacts
    contactArray.push(object)
    this.setState ({
      contacts: contactArray
    })
  }

  tempContact(event) {
    var singleContact =  {
      firstName: document.getElementById('firstname').value,
      lastName: document.getElementById('lastname').value,
      email: document.getElementById('email').value,
      number: document.getElementById('phone').value,
    }
    this.addContact(singleContact)
  }

  printList() {
    console.log(this.state.contacts)
  }

  deleteContact(num) {
    let shortList = this.state.contacts
    shortList.splice(num, 1)
    this.setState({
      contacts: shortList
    })
  }

  render() {
    let mycontacts = this.state.contacts
    const contactList = mycontacts.map ((contact, i) => {
      return (
        <TableRow key ={i}>
          <TableRowColumn>{contact.firstName}</TableRowColumn>
          <TableRowColumn>{contact.lastName}</TableRowColumn>
          <TableRowColumn>{contact.number}</TableRowColumn>
          <TableRowColumn>{contact.email}</TableRowColumn>
          <TableRowColumn> <RaisedButton label="Delete" onClick= {() => this.deleteContact(i)} labelColor='white' backgroundColor='#E53935' /></TableRowColumn>
        </TableRow>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
<MuiThemeProvider muiTheme={muiTheme}>
    <Table>
      <TableHeader displaySelectAll= {false} adjustForCheckbox={false} 	>
        <TableRow selectable='false'>
          <TableHeaderColumn>First Name </TableHeaderColumn>
          <TableHeaderColumn>Last Name </TableHeaderColumn>
          <TableHeaderColumn>Phone Number</TableHeaderColumn>
          <TableHeaderColumn>Email Address </TableHeaderColumn>
          <TableHeaderColumn/>
        </TableRow>
      </TableHeader>
      <TableBody  displayRowCheckbox={false}>
        {contactList}
      </TableBody>
    </Table>
        <ContactInput />
        <p className="App-intro">
          <button onClick= {() => this.tempContact()}> Click me </button>
          <button onClick= {()=> this.printList()}> Print List </button>
        </p>
        </MuiThemeProvider>
      </div>

    );
  }
}

export default App;
