import Card from '@Components/Card/Card';
import Container from '@Components/Container/Container';
import { useRouter } from 'next/router';
import styles from './Content.module.css';

function Content(props) {
    const router = useRouter();
    const pathString = ((router.asPath != '/') ? router.asPath : '/index') + '.js';

    return(
        <Container>
            <Card header={`cd pages${pathString}`}>
                <div id={styles.content} name="rightcont">
                    {props.children}
                </div>
            </Card>
        </Container>
    )
}

export default Content;