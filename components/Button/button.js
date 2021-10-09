const Button = ({onClick, title, loading}) => {
    if(loading === true) {
        return <button className="btn disable" > Loading ...</button>
    }
    return(
        <button className="button-register"type="submit" onClick={onClick}>
            {title}
        </button>
    );
}

export default Button;