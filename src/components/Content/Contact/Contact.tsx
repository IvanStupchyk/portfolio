import React from "react"
import s from './contact.module.scss'

export const Contact = () => {
    return (
        <div className={s.contactContainer}>
            <form method={'POST'} action={'https://formspree.io/f/mgerkvjq'}>
                <ul>
                    <li>
                        <input placeholder={'Name'} type={'text'} name={'name'}/>
                    </li>
                    <li>
                        <input placeholder={'Email'} type={'email'} name={'email'}/>
                    </li>
                    <li>
                        <textarea placeholder={'Message'} name={'message'}></textarea>
                    </li>
                    <li>
                        <button type={'submit'}>Send Message</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}
