interface FooterProps {
}

export default function Footer(props: FooterProps) {
    return (
        <footer className={`w-full mt-5 p-10 text-white`} >
            <div className="flex justify-center">
                <small className="font-semibold uppercase">developed by</small> 
            </div>
            <div className="flex justify-center">
               <small className="font-semibold">RUAN CORREA</small> 
            </div> 
        </footer>
    )
}