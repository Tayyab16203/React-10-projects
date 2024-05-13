import React from 'react'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { HiOutlineUserCircle  } from 'react-icons/hi'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'
import useDisclouse from '../Hooks/useDisclouse'
import AddAndUpdateContact from './AddAndUpdateContact'
import { toast } from 'react-toastify'

const contactCard = ({contact}) => {
    const { isOpen, onClose, onOpen}  = useDisclouse();
    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "Contacts", id));
            toast.success("Contact Deleted Successfully");
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <div key={contact.id} className='flex gap-2 justify-between items-center p-2 rounded-lg bg-yellow '>
            <div className='flex gap-1'>
                <HiOutlineUserCircle className='text-orange text-4xl'/>
                <div>
                    <h2 className='font-medium'>{contact.name}</h2>
                    <p className='text-sm'>{contact.email}</p>
                </div>
            </div>
            <div className='flex gap-1 text-3xl'>
                <RiEditCircleLine onClick={onOpen} className='cursor-pointer'/>
                <IoMdTrash onClick={() => deleteContact(contact.id)} className='text-orange cursor-pointer'/>
            </div>
        </div>
        <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default contactCard
