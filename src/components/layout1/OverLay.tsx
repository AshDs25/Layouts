export default function OverLay({isToggled=false}:{isToggled:boolean}){
    return(
        <div className={`overlay ${isToggled?'':'close'}`}></div>
    )
}