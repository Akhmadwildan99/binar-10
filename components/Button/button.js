export default function Button({onClick, title, isLoading}) {
    if(isLoading) {
        <button className="btn disable" >
            Loading ...
        </button>
    }
    return(
        <button className="button-register"type="submit" onClick={onClick}>
            {title}
        </button>
    );
}