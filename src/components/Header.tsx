import InfoCard from "./InfoCard";

interface HeaderProps {
}

export default function Header(props: HeaderProps) {
    let title = "UM TITULO AQUI"
    let describe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    return (
        <header >
            <InfoCard title={title} describe={describe} color="bg-blue-950" textColor="text-white"/>
        </header>
    )
}