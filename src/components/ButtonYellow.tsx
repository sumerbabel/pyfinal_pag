
interface propButton{
    name:string
    ariaLabel?:string
    onClick:(event:unknown)=>void

}
function ButtonYellow({name, ariaLabel,onClick}:propButton){

    return(
        <button className="ui-button-y" aria-label={ariaLabel} onClick={(event)=>onClick(event)} >{name}</button>
    )
}

export default ButtonYellow