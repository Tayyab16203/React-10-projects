import { AiFillPlusCircle } from 'react-icons/ai';
import Navbar from './components/Navbar';
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from "./config/firebase.js";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ContactCard from './components/contactCard.jsx';
import AddAndUpdateContact from './components/AddAndUpdateContact.jsx';
import useDisclouse from './Hooks/useDisclouse.js';
import NotFoundContact from './components/NotFoundContact.jsx';


function App() {

  const [ contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen}  = useDisclouse();



  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "Contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactsLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactsLists);
          return contactsLists;
        });

      } catch (error) {
        console.log(error)
      }
    }
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    
    const contactsRef = collection(db, "Contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactsLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactsLists.filter((contact) => 
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);
      return filteredContacts;
    });
  }

  return (
    <>
      <div className='max-w-[370px] mx-auto'>
        <Navbar/>
        <div className='flex gap-2'>
          <div className='flex flex-grow items-center relative'>
            <FiSearch className="ml-1 absolute text-3xl text-white"/>
            <input onChange={filterContacts} type="text" className='flex-grow h-10 border border-white rounded-md bg-transparent pl-10 pr-4 text-white'/>
          </div>
          <AiFillPlusCircle onClick={onOpen} className='text-white cursor-pointer text-5xl '/>
        </div>
        <div className='mt-4 flex flex-col gap-2'>
          {contacts.length <= 0 ? <NotFoundContact/> : contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact}/>
          ))}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer position='bottom-center'/>
    </>
  )
}

export default App
