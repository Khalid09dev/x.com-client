import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Signup = () => {
    const location = useLocation();
    const [input, setInput] = useState(false);

    useEffect(() => {
        document.getElementById('my_modal_3').showModal();
    }, [])

    useEffect(() => {
    if(location.pathname === '/signup') {
        document.getElementById('home').classList.add('bg-[#5B708366]');
        document.getElementById('home-footer').classList.add('bg-[#5B708366]');
    }
    }, [location])

    const handleToggleEmailNumber = () => {
        setInput(!input);
    }
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box bg-[#000000] px-14">
                <form method="dialog">
                <Link to="/"><button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕</button></Link>
                </form>
                <img className="w-[28px] h-[26px] mx-auto" src="../../../public/x-banner.svg" alt="" />
                <h3 className="text-[#E7E9EA] text-[31px] font-semibold py-7">Create your account</h3>
                <input className="mb-6 py-3 pl-2 bg-[#000000] border border-gray-500 rounded w-full" type="text" name="" id="" placeholder="Name"/> <br />
                <input className="py-3 pl-2 bg-[#000000] border border-gray-500 w-full rounded" type={input ? 'number' : 'email'} name="" id="" placeholder={input ? 'Phone' : 'Email'}/>
                <p onClick={handleToggleEmailNumber} className="hover:underline text-[#1B9DF0] text-right pt-3">Use {input ? 'email' : 'phone'} instead</p>

                <h6 className="text-[#E7E9EA] text-[15px] font-semibold pb-2">Date of birth</h6>
                <p className="text-[#71767B] text-[14px] leading-4 pb-6">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>

                <div className="flex gap-4 pb-10">
                    <select className="select select-bordered w-2/5 bg-[#000000]">
                        <option disabled selected>Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <select className="select select-bordered w-1/4 bg-[#000000]">
                        <option disabled selected>Day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    <select className="select select-bordered w-1/4 bg-[#000000]">
                        <option disabled selected>Year</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                    </select>
                </div>
                <button disabled className="text-[#0F1419] bg-white py-2.5 w-full rounded-3xl text-[17px] font-semibold">Next</button>
            </div>
            </dialog>
        </div>
    );
};

export default Signup;