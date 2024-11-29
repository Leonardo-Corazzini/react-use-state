import languages from "../../languages";


export default function Button() {
    return (
        languages.map((language) => (
            <button key={language.id}>{language.title}</button>
        )

        )
    )
}