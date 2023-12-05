"use client"

import { memo } from 'react';
import Image from "next/image"
import Link from "next/link";
import Div from "../Div";
import Li from "../Li";
import Ul from "../Ul";
import Button from "../Button";


if (typeof localStorage !== 'undefined') {
const authToken = (localStorage.getItem('authToken'))
  } else {
    console.log('localStorage is not available.');
  }

const Header = () => {
    const [toggle, setToggle] = useState(true)
    const [token, setToken] = useState(true)

    const pathname = usePathname()

    function handleremoveItem() {
        localStorage.removeItem('authToken')
        setToken(!token)
    }

    return (
        <header id="header" className="select-none sticky top-0 left-0 bg-[#F9F9F9] z-10 container mx-auto flex justify-between px-24 pt-[2.064rem]          xxs:flex xxs:justify-between xxs:items-center xxs:p-[2.063rem]          xs:flex xs:justify-between xs:items-center xs:p-[2.063rem]            sm:flex sm:justify-between sm:items-center sm:p-[2.063rem]          md:flex md:justify-between md:items-center md:p-[2.063rem]">
            <nav className="navbar  border-b-[0.711px] border-b-[#CBCBCB] flex justify-between items-center gap-[25.673remm]  pb-[1.101rem] w-full       xxs:flex           sm:flex sm:mx-auto sm:justify-between sm:items-center              md:flex md:mx-auto md:justify-between md:items-center md:gap-[10rem]            lg:flex lg:justify-between lg:items-center   xxl:gap-[50rem]">
                <Div className='flex justify-between items-center gap-[4.59rem]        xxs:flex xxs:justify-between xxs:items-center         sm:flex sm:justify-between sm:items-center    md:flex md:justify-between md:items-center'>
                    <Ul className="flex justify-between items-center gap-[3.377rem]         xxs:hidden       xs:hidden    header_items sm:flex sm:justify-between sm:items-center sm:gap-[0.377rem]        md:flex md:justify-between md:items-center md:gap-[1rem]">
                        <Li className="headeritem">
                            <Link href='/home' className={`hover:text-[#6C5FBC] hover:font-semibold ${pathname === '/home' ? ' h-[1.75rem] text-[#606060] inline-block mr-[0.562rem] animate-bounce' : ''}`}>
                                Home
                            </Link>
                        </Li>
                        <Li className="headeritem">
                            <Link href='/dishes' className={` hover:text-[#6C5FBC] hover:font-semibold ${pathname === '/dishes' ? 'w-[1.75rem] h-[1.75rem] text-[#606060] inline-block mr-[0.562rem] animate-bounce' : ''}`}>
                                Dishes
                            </Link>
                        </Li>
                    </Ul>
                    {toggle ? <Image className="hidden  xxs:inline-block xs:inline-block     sm:inline-block" onClick={(prev) => setToggle(!prev)} src={Bueger_Menu} alt="Bueger_Menu" /> :
                        <Div className='nav-links_Burger'>
                        </Div>}
                </Div>
                <Ul className="flex justify-between items-center gap-[0.958rem]         xxs:hidden xs:hidden sm:inline-block header_items            sm:hidden sm:justify-between sm:items-center sm:gap-[0.096rem]          md:flex md:justify-between md:items-center md:gap-[1rem]">
                    <Li className="headeritem">
                        <Link href='/cart' className={`hover:bg-[#6C5FBC] ${pathname === '/cart' ? 'w-[1.75rem] h-[1.75rem] inline-block mr-[0.562rem] animate-bounce' : ''}`}>
                            <Image src={Icon_Cart_Shopping} className="w-[1.75rem] h-[1.75rem] rounded-md hover:bg-blue-100" alt="Icon_Cart_Shopping" />
                        </Link>
                    </Li>
                    {
                        token ? <Button onClick={handleremoveItem} className="hover:text-white hover:bg-red-400 hover:font-semibold font-medium text-red-400 px-[1.189rem] py-[0.793rem] border rounded-[0.792rem]" type="button">Log Out</Button> : 
                            <>
                                <Li className="headeritem">
                                <Link href='/login' className={`hover:text-[#6C5FBC] hover:font-semibold ${pathname === '/login' ? 'text-[#606060] px-[1.189rem] py-[0.793rem] border rounded-[0.792rem] animate-bounce' : ''}`}>
                                    Login
                                </Link>
                                </Li>
                                <Li className="headeritem">
                                    <Link href='/' className={`text-[#F9F9F9] hover:font-semibold hover:text-[#6C5FBC] bg-[#6C5FBC] hover:bg-[#F9F9F9] px-[1.189rem] py-[0.793rem] border rounded-[0.792rem] ${pathname === '/register' ? ' animate-bounce' : ''}`}>
                                        SignUp
                                    </Link>
                                </Li>
                            </>
                    }
                    
                </Ul>
            </nav>
        </header >
    )
}

export default memo(Header)