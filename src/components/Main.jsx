import Button from "./Button/Button"
import Card from "./Card/Card"
import languages from "../languages"
import { useState } from "react"

const none =
{
    title: "nessun elemento selezionato",
    description: "Premi un pulsante per avere informazione riguardanti quell'argomento."
}

export default function Main() {

    const [clickLanguage, setClickLanguage] = useState(null)

    return (
        <>
            {/* <Button languages={languages} /> */}
            <div className="container">
                <div className="row">
                    <div className="button-section">
                        {languages.map((language) => (
                            <Button key={language.id} language={language} callback={() => setClickLanguage(language)} isActive={clickLanguage === language} />
                        )
                        )}
                    </div>
                    <div className="card-section">
                        <Card language={clickLanguage ? clickLanguage : none} />
                    </div>
                </div>



            </div>


        </>

    )
}