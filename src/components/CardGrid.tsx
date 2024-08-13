interface CardGridProps {
    content: string
}

export default function CardGrid (props: CardGridProps) {
    return (
        <div className="card">
            {props.content}
        </div>
    )
}