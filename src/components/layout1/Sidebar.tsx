import { FaRegNewspaper } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdInfoOutline } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";

export default function SideBar({isToggled=true,handleToggle,isMobile}:{isToggled:boolean,handleToggle: ()=> void,isMobile:boolean}){
    return (
        <div className={`sidebar ${isToggled || !isMobile ? '':'close'}`}>
            <section className="pro-name d-flex align-items-center   justify-content-between">
                <span className="title">Layout 1</span>  
                {/* <TbLayoutDashboard className="toggle-btn text-2xl" onClick={handleToggle}/> */}
            </section>
            <section>
                <ul>
                    <li>
                        <span className="logo"><FiHome/></span>
                        <span className="title">Home</span>
                    </li>
                    <li>
                        <span className="logo"><FaRegNewspaper/></span>
                        <span className="title">Content</span>
                    </li>
                    <li>
                        <span className="logo"><MdInfoOutline/></span>
                        <span className="title">About</span>
                    </li>
                </ul>
            </section>
            
        </div>
    )
}