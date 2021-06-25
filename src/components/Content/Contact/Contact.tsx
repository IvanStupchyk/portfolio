import React, {FormEvent, useState} from "react"
import s from './contact.module.scss'
import emailjs from 'emailjs-com';
import { Redirect } from "react-router-dom";

export const Contact = () => {
    const [emailValue, setEmailValue] = useState<string>('')
    const addEmailValue = (e: FormEvent<HTMLInputElement>) => setEmailValue(e.currentTarget.value)
    const [redirect, setRedirect] = useState<boolean>(false)

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_71mxfzn', 'template_qykplqn', e.target, 'user_x8MUhgpMeP3eUIMAHfgzE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

        setTimeout(() => {
            setRedirect(true)
            alert('Message sent')
        }, 1000)
    }

    if (redirect) {
        return <Redirect to={'/portfolio'}/>
    }

    return (
        <div className={s.contactContainer}>
            <h5>Get in Touch</h5>
            <form method={'POST'} onSubmit={sendEmail}>
                <ul>
                    <li>
                        <input placeholder={'Name'} type={'text'} name={'name'}/>
                    </li>
                    <li>
                        <input value={emailValue} onInput={addEmailValue} placeholder={'Email'} type={'email'} name={'email'} />
                    </li>
                    <li>
                        <textarea placeholder={'Message'} name={'message'} />
                    </li>
                    <li>
                        <button className={s.btnSubmit} type={'submit'} disabled={!emailValue}>Send Message</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}
