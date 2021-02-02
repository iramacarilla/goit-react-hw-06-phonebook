import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;




/*import {combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import contactsReducer from './contacts/contactsReducer'



const rootReducer = combineReducers({
    contacts: contactsReducer,
})
const store = createStore(rootReducer, composeWithDevTools())

export default store;

/* const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')
  const [isVisible, setIsVisible] = useState(false);*/