import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import {Link, Outlet, useLocation} from 'react-router-dom';
import { useEffect } from "react";

const Home = () => {
    const location = useLocation();
    useEffect(() => {
        if(location.pathname === '/') {
            document.getElementById('home').classList.remove('bg-[#5B708366]');
            document.getElementById('home').classList.add('bg-[#000000]');
            document.getElementById('home-footer').classList.remove('bg-[#5B708366]');
            document.getElementById('home-footer').classList.add('bg-[#000000]');
        }
    }, [location])
    return (
        <div className="grid h-screen">
            <div id="home" className="flex justify-center gap-44 pt-20">
            <div className="pt-24">
                <img className="w-[300px] h-[279px] select-none" src="../../../public/x-banner.svg" alt="Banner" draggable={false}/>
            </div>
            <div>
                <h1 className="text-[#E7E9EA] text-[64px] pb-10 font-bold">Happening now</h1>
                <h2 className="text-[31px] font-bold text-[#E7E9EA] pb-4">Join today.</h2>
                <div className="bg-[#FFFFFF] flex items-center gap-1 mb-2 justify-center py-2 rounded-3xl w-1/2 cursor-pointer"><FcGoogle className="text-xl"/><span className="text-[#0F1419] text-[15px] font-medium">Sign up with Google</span></div>
                <div className="bg-[#FFFFFF] flex justify-center py-2 w-1/2 rounded-3xl cursor-pointer items-center gap-1"><FaApple className="text-xl"/><span className="text-[#0F1419] font-medium">Sign up with Apple</span></div>
                <div className="flex flex-col w-1/2">
                    <div className="divider text-[15px] text-white">or</div>
                </div>
                <Link to="/signup"><button className="bg-[#1D9BF0] rounded-3xl py-2 w-1/2 text-white text-[15px] font-semibold">Create account</button></Link>
                <p className="text-[#71767B] text-[12px] pt-2 pb-14">By signing up, you agree to the <span className="text-[#1D9BF0] cursor-pointer">Terms of Service</span> and <span className="text-[#1D9BF0] cursor-pointer">Privacy <br /> Policy</span>, including <span className="text-[#1D9BF0] cursor-pointer">Cookie Use</span>.</p>
                <h3 className="text-[17px] text-[#E7E9EA] font-semibold pb-3">Already have an account?</h3>
                <div className="text-[#1D9BF0] border border-[#E7E9EA] w-1/2 py-2 rounded-3xl text-center font-semibold cursor-pointer">Sign in</div>
            </div>
        </div>
        
                {/* landing page start */}
                <div id="home-footer" className="pt-10">
                    <ul className="grid grid-cols-9 gap-2 items-center text-[13px] text-[#71767B] mx-4">
                        <li className="hover:underline"><a href="">About</a></li>
                        <li className="hover:underline"><a href="">Download the X app</a></li>
                        <li className="hover:underline"><a href="">Help Center</a></li>
                        <li className="hover:underline"><a href="">Terms of Service</a></li>
                        <li className="hover:underline"><a href="">Privacy Policy</a></li>
                        <li className="hover:underline"><a href="">Cookie Policy</a></li>
                        <li className="hover:underline"><a href="">Accessibility</a></li>
                        <li className="hover:underline"><a href="">Ads info</a></li>
                        <li className="hover:underline"><a href="">Blog</a></li>
                        <li className="hover:underline"><a href="">Carrers</a></li>
                        <li className="hover:underline"><a href="">Brand Resources</a></li>
                        <li className="hover:underline"><a href="">Advertising</a></li>
                        <li className="hover:underline"><a href="">Marketing</a></li>
                        <li className="hover:underline"><a href="">X for Business</a></li>
                        <li className="hover:underline"><a href="">Developers</a></li>
                        <li className="hover:underline"><a href="">Directory</a></li>
                        <li className="hover:underline"><a href="">Settings</a></li>
                    </ul>
                        <p className="text-center text-[13px] text-[#71767B] pt-2">© 2024 X Corp.</p>
                </div>
                {/* landing page end */}
                <Outlet></Outlet>
        </div>
    );
};

export default Home;