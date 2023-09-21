
interface propButton{
    name:string
    ariaLabel?:string
    onClick?:()=>void

}
function ButtonYellow({name, ariaLabel,onClick}:propButton){

    return(
        <button className="ui-button-y" aria-label={ariaLabel} onClick={onClick} >{name}</button>
    )
}

export default ButtonYellow