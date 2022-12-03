import Content from "./Content";
import Header from "./Header";

interface LayoutProps {
    children?: JSX.Element
}

export default function Layout(props: LayoutProps): JSX.Element {
    return (
        <div className={`
            absolute flex flex-col
            top-0 bottom-0 left-0 right-0 m-auto p-0 max-h-[40rem] max-w-[22rem]
            md:max-h-[44rem] md:max-w-[32rem]
            bg-[#557153] shadow-2xl rounded-2xl
        `}>
            <Header />
            <Content>{props.children}</Content>
        </div>
    )
}