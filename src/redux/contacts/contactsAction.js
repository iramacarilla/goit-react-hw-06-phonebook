import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";


export const addContact = createAction('contacts/add', (data) => ({
    payload: {
        ...data,
        id: uuidv4(),
    }}))
export const deleteContact = createAction('contacts/delete')
export const getFilter = createAction('contacts/filter')
export const getLocalContacts = createAction('contacts/localContacts')

 






/*import { v4 as uuidv4 } from "uuid";
import contactActions from './contactsActionsTypes'

  const addContact = (data) => ({
    type: contactActions.ADD_CONTACT,
    payload: {
        ...data,
        id: uuidv4(),
    }
    
    })
    export const deleteContact = id => ({
        type: contactActions.DELETE_CONTACT,
        payload: {
            id,
        }
        
        })
       export const getFilter = value => ({
            type: contactActions.FILTER_CONTACTS,
            payload: {
                value,
            }
            
            })
        const setAlert = () => ({
            type: contactActions.SET_ALERT,   
            })

            
   export default {
    addContact,
    setAlert
    
    
   } */

