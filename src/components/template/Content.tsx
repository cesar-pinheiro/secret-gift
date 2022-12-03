
interface ContentProps {
    children?: JSX.Element
}

export default function Content(props: ContentProps): JSX.Element {
    return (
        <main className={`
            flex flex-col h-full mb-20 items-center justify-center

        `}>
            {props.children}
        </main>
    )
} 