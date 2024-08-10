interface FooterProps {
}

export default function Footer(props: FooterProps) {
    return (
        <footer className={`bg-slate-800 w-full p-10 text-gray-200`} >
            <div className="flex justify-center">
                <small className="font-semibold uppercase">developed by</small> 
            </div>
            <div className="flex justify-center">
               <small className="font-semibold">RUAN CORREA</small> 
            </div> 
        </footer>
    )
}