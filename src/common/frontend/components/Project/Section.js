import Scroller from '@Components/Scroller/Scroller';

function Section(props) {
    const { title } = props;

    return(
        <div>
            <hr />
            <h3>{title}</h3>
            <hr />
            <Scroller>
                {props.children}
            </Scroller>
        </div>
    )
}

export default Section;