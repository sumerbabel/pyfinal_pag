
interface propButtonBase{
    name:string
    ariaLabel?:string
    onClick:(event:unknown)=>void
    color?:string
    backgroundColor?:string
    
}
function ButtonBase({name, ariaLabel,onClick, color='white',backgroundColor='grey'}:propButtonBase){

    return(
        <button className="ui-button-y" aria-label={ariaLabel} onClick={(event)=>onClick(event)}
        style={{backgroundColor:backgroundColor, color:color}}
        >{name}</button>
    )
}

export default ButtonBase