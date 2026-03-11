export default function Header(){
    return(
        <div className="w-screen flex items-center justify-between px-10 py-5 gap-5">
            <h3 className="text-3xl whitespace-nowrap">Hello Bittu!</h3>
            <button className="bg-red-500 whitespace-nowrap px-3 py-2 rounded-xl">Log out</button>
        </div>
    )
}