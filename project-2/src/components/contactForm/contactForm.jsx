import Button from "../button/button"
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa"
import { HiMail } from 'react-icons/hi'
import contactimg from '/images/contact.svg'
import { useState } from "react";

const contactForm = () => {

    const [ name,setName ] = useState("Tayyab")
    const [ email,setEmail ] = useState("example@gmail.com")
    const [ text,setText ] = useState("Do some codeing")

    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

    }

  return (
    <section  className="container max-w-[1000px] mx-auto flex gap-[10px] mt-[20px]">
        <div className="flex flex-col gap-[24px]">
            <div className="flex gap-[32px] ">
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage className="text-[24px]"/>}/>
                <Button text="VIA CALL" icon={<FaPhoneAlt className="text-[24px]"/>}/>
            </div>
            <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail className="text-[24px]"/>}/>
            <form onSubmit={onSubmit} className="flex flex-col gap-[20px]">
                <div>
                    <label htmlFor="name" className="relative px-[10px] top-[12px] font-medium left-[30px] bg-white">Name</label>
                    <input type="text" name="name" className="w-full px-[10px] py-2 border-[2px] rounded border-gray-300 outline-none"/>
                </div>
                <div>
                    <label htmlFor="email" className="relative px-[10px] top-[12px] font-medium left-[30px] bg-white">E-mail</label>
                    <input type="email" name="email" className="w-full px-[10px] py-2 border-[2px] rounded border-gray-300 outline-none"/>
                </div>
                <div>
                    <label htmlFor="text" className="relative px-[10px] top-[12px] font-medium left-[30px] bg-white">TEXT</label>
                    <textarea rows='4' name="text" className="w-full px-[10px] py-2 border-[2px] rounded border-gray-300 outline-none"/>
                </div>
                <div className="flex justify-end">
                    <Button text="Submit" />
                </div>
                <div>
                    <p className="text-slate-600"> <span className="font-medium text-lg text-black">Name:</span> {name}</p>
                    <p className="text-slate-600"> <span className="font-medium text-lg text-black">Email:</span> {email}</p>
                    <p className="text-slate-600"> <span className="font-medium text-lg text-black">About:</span> {text}</p>
                </div>
            </form> 
        </div>
        <div>
            <img src={contactimg} alt="contact" />
        </div>
    </section>
  )
}

export default contactForm
