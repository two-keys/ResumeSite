import { useState } from "react";

function Project(props) {
    const { title } = props;

    const [isOpen, setOpen] = useState(false);

    return(
        <div>
            <h2>&gt; <a onClick={() => setOpen(!isOpen)}>{title}</a></h2>
            <div style={{"display": (isOpen) ? "inline" : "none"}}>
                {props.children}
            </div>
        </div>
    )
}

export default Project;