

export default function Card({ language = {} }) {
    const { title, description } = language
    return (
        <div className="card">
            <div className="body">
                <h3 className="title">{title}</h3>
                <p className="content"> {description}</p>
            </div>
        </div>
    )
}