function ButtonSubmit({
    onClick=()=>{}
}:{
    onClick:()=>void
}){
    return(
        <div className="buttonsubmit"
            onClick={onClick}
        >
            Create Account
        </div>
    )
}

export default ButtonSubmit;