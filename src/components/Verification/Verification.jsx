import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";


const Verification = () => {
    const location = useLocation();

    useEffect(() => {
        document.getElementById('my_modal_3').showModal();
    }, [])

    useEffect(() => {
    if(location.pathname === '/signup') {
        document.getElementById('home').classList.add('bg-[#5B708366]');
        document.getElementById('home-footer').classList.add('bg-[#5B708366]');
    }
    }, [location])

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box bg-[#000000] px-11">
                <form method="dialog">
                <Link to="/signup"><button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2"><FaArrowLeft className="text-xl text-white"/></button></Link>
                </form>
                <img className="w-[28px] h-[26px] mx-auto" src="../../../public/x-banner.svg" alt="" />
                <h3 className="text-[#E7E9EA] text-[31px] font-semibold pt-7">We sent you a code</h3>
                <p className="text-[#717B7C] text-[15px] pb-10">Enter it below to verify mdkhalidhossen730@gmail.com.</p>
                <input className="mb-0 py-3 pl-2 bg-[#000000] border border-gray-500 rounded w-full" type="number" name="" id="" placeholder="Verification Code"/> 
                <p className="hover:underline text-[#1B9DF0] mb-40 pt-1 text-[13px]">Didn't receive email?</p>
                <Link to="/numberverificaton"><button className="text-[#0F1419] bg-white py-2.5 w-full rounded-3xl text-[17px] font-semibold">Next</button></Link>
            </div>
            </dialog>
        </div>
    );
};

export default Verification;