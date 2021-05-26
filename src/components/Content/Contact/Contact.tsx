import React, {FormEvent, useState} from "react"
import s from './contact.module.scss'

export const Contact = () => {
    const [emailValue, setEmailValue] = useState<string>('')

    const addEmailValue = (e: FormEvent<HTMLInputElement>) => setEmailValue(e.currentTarget.value)

    return (
        <div className={s.contactContainer}>
            <h5>Get in Touch</h5>
            <form method={'POST'} action={'https://formspree.io/f/mgerkvjq'}>
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
