function Project(props) {
    const { title } = props;

    return(
        <div>
            <div style={{"display": "none"}}>
                &gt; <a>{title}</a>
            </div>
            <div style={{"display": "inline"}}>
                <h2><a>{title}</a></h2>
                {props.children}
            </div>
        </div>
    )
}

export default Project;