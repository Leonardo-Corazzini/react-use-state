import Button from "./Button/Button"
import Card from "./Card/Card"
import languages from "../languages"
import { useState } from "react"

const none =
{
    title: "none",
    description: "nessun elemento selezionato"
}

export default function Main() {

    const [clickLanguage, setClickLanguage] = useState(null)

    return (
        <>
            {/* <Button languages={languages} /> */}
            {languages.map((language) => (
                <Button key={language.id} language={language} callback={() => setClickLanguage(language)} isActive={clickLanguage === language} />
            )
            )}
            <Card language={clickLanguage ? clickLanguage : none} />

        </>

    )
}