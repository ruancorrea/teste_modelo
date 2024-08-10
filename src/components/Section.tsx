import ImageCard from "./ImageCard";

interface SectionProps {
}

export default function Section(props: SectionProps) {
    return (
        <section className="mt-3">
            Hello World.
            <ImageCard />
        </section>
    )
}