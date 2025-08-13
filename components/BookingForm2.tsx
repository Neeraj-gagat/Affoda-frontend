import { RiSearchLine } from "react-icons/ri";

export const BookingForm2 = ({ city, checkIn, checkOut, guests, child }: { city: string ,checkIn:string, checkOut: string, guests:number, child?:number }) => {
    return <div className="flex md:hidden pt-20 justify-center items-center mx-1.5">
        <div className="rounded-3xl  bg-zinc-200 py-2 px-3 border w-full flex flex-row items-center justify-between">
            <div className="flex flex-col gap-0.5">
            <p className="text-[10px] font-[600] text-black">{city}</p>
            <div className="flex items-center justify-start gap-1 text-[9px]"> <div className="flex justify-center items-center gap-1"><p>{checkIn} -</p> <p>{checkOut}</p></div> <div className="flex justify-center items-center gap-1"><p>• {guests} Guests</p> {child !== undefined && <p>• {child} Childrens</p>}</div></div>
            </div>
            <div className="flex justify-center items-center">
                <RiSearchLine size={20}/>
            </div>
        </div>
    </div>
}