
interface propButton{
    name:string
    ariaLabel?:string
    onClick?:(event:unknown)=>void
    type?:"button" | "submit" | "reset" | undefined

}
function ButtonYellow({name, ariaLabel,onClick,type='button'}:propButton){

    return(
        <button className="ui-button-y" aria-label={ariaLabel} onClick={(event)=>onClick && onClick(event)} type={type} >{name}</button>
    )
}

export default ButtonYellow