const FaqItem = (props) => {

    return (
        <div className="wrapper_1">
            <button className="toggle_1">
                <p style={{ color: `${props.open ? "#FF5A1F" : ""}` }} > {props.question}</p>
                <i className="fa fa-plus icon" onClick={() => props.click(props.id)}></i>
            </button>
            <div className={`content_1 ${props.open && "show"}`}>
                <p>{props.answer}</p>
            </div>
        </div>
    );
};

export default FaqItem;


// components
// containers/pages