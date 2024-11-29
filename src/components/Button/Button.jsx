import { useState } from "react"
import Card from "../Card/Card"



export default function Button({ languages }) {

    const [clickLanguage, setClickLanguage] = useState({})



    return (
        <>
            {languages.map((language) => (
                <button onClick={() => setClickLanguage(language)} key={language.id}>{language.title}</button>
            )

            )}

            <Card language={clickLanguage} />
        </>
    )
}