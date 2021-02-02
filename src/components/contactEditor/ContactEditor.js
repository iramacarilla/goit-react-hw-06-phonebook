import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import ContactEditorElement from '../contactEditorElement/ContactEditorElement'
import {connect} from 'react-redux'
import styles from '../contactEditor/ContactEditor.module.css'
import contactsAction from '../../redux/contacts/contactsAction'
import {getLocalContacts, addContact} from '../../redux/contacts/contactsAction'
import Notification from '../../components/notification/Notification'
import Logo from '../logo/Logo'
import Filter from '../filter/Filter'

const initialState = {
  name: '',
  number: '',
 
}

 class ContactEditor extends Component {
    state = {...initialState}
    state ={isVisible: false, message:''}

    componentDidMount() {
      const persistedContacts = localStorage.getItem('contacts');
      if (persistedContacts) {
          this.props.getLocalContacts(JSON.parse(persistedContacts))
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.items !== this.props.items) {
        localStorage.setItem('contacts', JSON.stringify(this.props.items));
      }
    }
   

    onHandelChange = (e) => {
      const {name, value} = e.target
      this.setState({[name]: value})
    }
      
    handelSubmit = (e) => {
    e.preventDefault();
    const search =this.props.items.find(contact => contact.name === this.state.name);
    if (search) 
      {setTimeout(()=>this.setState({isVisible: true,  message:'Contact already exists'}), 500)
        setTimeout(()=>this.setState({isVisible: false}), 2000)
        this.setState({...initialState})
      }
    else if (this.state.name === '' || this.state.number === '' ){
      setTimeout(()=>this.setState({isVisible: true, message:'Fill all fields'}), 500)
        setTimeout(()=>this.setState({isVisible: false}), 2000)
        this.setState({...initialState})
    }
    else {
      this.props.onAddForm(this.state)
      this.setState({...initialState})
      }
    }

    render() {
        return (
          <>
          <Notification isVisible={this.state.isVisible} message = {this.state.message}/>
          <CSSTransition
           in={true}
           appear={true}
           classNames={styles}
           timeout={500}
           unmountOnExit> 
           <Logo/>
           </CSSTransition>

          <ContactEditorElement name={this.state.name} number={this.state.number} 
          onChange={this.handelSubmit} onHandelChange={this.onHandelChange}/>
           </>
        )
    }
}

const mapPropsToState = state => ({
  items: state.contacts.items
})

const mapDispatchToProps = {
  onAddForm: addContact,
  getLocalContacts: getLocalContacts,
  
}


export default  connect(mapPropsToState, mapDispatchToProps)(ContactEditor)






////////////////////////////////////////////////////////////////


/*import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import {connect} from 'react-redux'
import ContactEditorElement from '../contactEditorElement/ContactEditorElement'
import Logo from '../logo/Logo'
import styles from '../contactEditor/ContactEditor.module.css'
import contactsAction from '../../redux/contacts/contactsAction'

const initialState = {
  name: '',
  number: '',
}

const ContactEditor = ({onAddForm}) => {

const[state, setState] = useState({...initialState})  

    const onHandelChange = (e) => {
        const {name} = e.target
        setState({...state, [name]: e.target.value})
      }
      
  const  handelSubmit = (e) => {
    e.preventDefault();
    
   onAddForm({name: state.name, number: state.number})
    setState({...initialState})
    }
    
  
        return (
          <div className={styles.phoneBook}>
          <CSSTransition
           in={true}
           appear={true}
           classNames={styles}
           timeout={500}
           unmountOnExit
           > 
           <Logo/>
           </CSSTransition>
          <ContactEditorElement name={state.name} number={state.number} 
          onChange={handelSubmit} onHandelChange={onHandelChange}/>
            </div>   
        )
    
}*/

/*const mapDispatchToProps = dispatch => {
  return {
    onAddForm: (name, number) => dispatch(contactsAction.addContact(name, number))
  }

}*/




