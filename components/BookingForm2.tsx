import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";

export const BookingForm2 = ({ city, checkIn, checkOut, guests, child }: { city: string ,checkIn:string, checkOut: string, guests:number, child?:number }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isActive) {
          // Lock scroll
          document.body.style.overflow = "hidden";
        } else {
          // Restore scroll
          document.body.style.overflow = "auto";
        }
      
        // Cleanup in case component unmounts
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [isActive]);

    return (
    <>
    <button onClick={() => (
        setIsActive(!isActive)
    )} >
        <div className="flex md:hidden pt-20 justify-center items-center mx-1.5">
        <div className="rounded-3xl  bg-zinc-200 py-2 px-3 border w-full flex flex-row items-center justify-between gap-2">
            <div className="flex flex-col gap-0.5">
            <p className="text-[10px] font-[600] text-start text-black">{city}</p>
            <div className="flex items-center justify-start gap-1 text-[9px]"> <div className="flex justify-center items-center gap-1"><p>{checkIn} -</p> <p>{checkOut}</p></div> <div className="flex justify-center items-center gap-1"><p>• {guests} Adults</p> {child !== undefined && <p>• {child} Childrens</p>}</div></div>
            </div>
            <div className="flex justify-end items-center">
                <RiSearchLine size={20}/>
            </div>
        </div>
    </div>
    </button>
    {isActive && <div>
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-hidden">
            <div className="flex flec-col items-center justify-center">
                <div className="bg-affoda-blue flex justify-between w-full text-white text-[14px] font-[500] p-5">
                    <div className="flex justify-start cursor-pointer" onClick={() => (setIsActive(!isActive))}><IoIosArrowBack size={20}/> </div>
                    <div className="flex justify-start px-25"><p className="-translate-x-7">Edit Search</p></div>
                </div>
            </div>
        </div>
    </div> }
    </>
  );
}