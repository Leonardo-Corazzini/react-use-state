import style from "./Card.module.css"

export default function Card({ language }) {
    const { title, description } = language
    return (
        <div className={style.card}>
            <div className={style.body}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.description}> {description}</p>
            </div>
        </div>
    )
}