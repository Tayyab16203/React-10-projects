import { ErrorMessage, Field, Form, Formik } from "formik"
import Modal from "./Modal"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import { toast } from "react-toastify"
import * as Yup from "yup";

const ContactSchemaValidation = Yup.object({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
})

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact}) => {

    const addContact = async (contact) => {
        try {
            
            const contacctRef = collection(db, "Contacts")
            await addDoc(contacctRef, contact);
            toast.success("Contact Added Successfully");
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    const updateContact = async (contact, id) => {
        try {
            
            const contacctRef = doc(db, "Contacts", id)
            await updateDoc(contacctRef, contact);
            toast.success("Contact Updated Successfully");
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose}>
            <Formik
            validationSchema={ContactSchemaValidation}
            initialValues={ 
                isUpdate ? {
                name: contact.name,
                email: contact.email,
            } : { 
                name: "",
                email: "",
            }
            }
            onSubmit={(values) => {console.log(values); isUpdate ? updateContact(values, contact.id) :  addContact(values);}}
            >
                <Form className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <Field name='name' className="border h-8"/>
                        <div className="text-red-600 text-xs">
                            <ErrorMessage name="name"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <Field name='email' className="border h-8"/>
                        <div className="text-red-600 text-xs">
                            <ErrorMessage name="email"/>
                        </div>
                    </div>
                    <button onClose={onClose} type="submit" className="self-end border bg-orange px-3 py-1.5">{isUpdate ? "Update" : "Add"} Contact</button>
                </Form>
            </Formik>
        </Modal>
    </div>
  )
}

export default AddAndUpdateContact
