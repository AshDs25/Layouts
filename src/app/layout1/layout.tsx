'use client';
import NavBar from '@/components/layout1/NavBar';
import SideBar from '@/components/layout1/Sidebar';
import OverLay from '@/components/layout1/OverLay';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import '@/style/_app.scss';
import { useEffect, useState } from 'react';

// export const metadata = {
//     title:'Layout 1| Grid sidebar navbar main-content layout',
//     description:'Responsive layout with sidebar and navbar'
// }

export default function LayoutRoot1RootLayout({
    children, 
}:{
    children: React.ReactNode
}) {



    const [isToggled,setIsToggled] = useState(true);
    const isMobile = useMediaQuery('(max-width: 1024px)');

    const handleToggle = () => {
        setIsToggled(prev => !prev);
    }

    useEffect(() => {
        console.log(isMobile)
        if(isMobile){
            console.log("isMobile first render",isMobile)
            setIsToggled(false);
        }
    },[])




    // useEffect(()=>{
    //     if(!isToggled && !isMobile){
    //         setIsToggled(true);
    //     }
    // },[isToggled,isMobile])

    return (

       <>
         <div className={`content-wrapper`}>
                    <NavBar handleToggle={handleToggle} isToggled={isToggled}/>
                    <SideBar isToggled={isToggled} handleToggle={handleToggle} isMobile={isMobile}/>
                    <main className="container-body">{children}</main>
                </div>
                <OverLay isToggled={isToggled}/>
       </>
               
    )
}