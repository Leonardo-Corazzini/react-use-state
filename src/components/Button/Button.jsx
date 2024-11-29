// import { useState } from "react"
// import Card from "../Card/Card"
import style from "./Button.module.css"


export default function Button({ language, callback, isActive }) {

    // const [clickLanguage, setClickLanguage] = useState({})
    const { title } = language



    return (
        <>
            {/* {languages.map((language) => (
                <button onClick={() => setClickLanguage(language)} key={language.id}>{language.title}</button>
            )

            )}

            <Card language={clickLanguage} /> */}
            <button className={`${style.button} ${isActive ? style.active : undefined}`} onClick={callback}>{title}</button>
        </>
    )
}