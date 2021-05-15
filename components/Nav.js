import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
    const router = useRouter();
    
    return (
        <div>
            <nav className="relative">
                <div className="flex px-10 space-x-10 overflow-x-scroll text-2xl sm:px-20 whitespace-nowrap sm:space-x-20 scrollbar-hide">
                    {Object.entries(requests).map(([key, { title, url }]) => (
                        <h2 key={key}
                            onClick={() => router.push(`/?genre=${key}`)}   
                        className="transition transform cursor-pointer durtation-100 last:pr-24 hover:scale-125 hover:text-white active:text-red-500">{title}</h2>
                ))}
                </div>
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#062824] h-10 w-1/12" />
            </nav>
        </div>
    )
}

export default Nav
