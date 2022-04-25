import Card from '@Components/Card/Card';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Content.module.css';

function Content(props) {
    const router = useRouter();
    const pathString = ((router.asPath != '/') ? router.asPath : '/index') + '.js';

    return(
        <div className={styles.content}>
            <div className={styles.container}>
                <Card header="cat ~/welcome.txt">
                    <p>
                        Antony % Portfolio
                    </p>
                    <p>
                        This portfolio website uses the VT323 font-family, which is Licensed under the Open Font License, and is styled after the VT320 1987 computer terminal. It&apos;s optimized for a desktop experience. The drop down display may not properly work on mobile, alongside some of the other more finnicky code, until further optimization has been done on the web-page. The website uses HTML, Javascript, and CSS through the ReactJS framework, and was built with code written by me in Visual Studio Code.
                    </p>
                    <p>
                        The basic text color is set to &apos;forestgreen&apos;, while the highlighted outlines are set to &apos;darkseagreen&apos; when on-hover. The website uses functional components and hooks as opposed to Class components, since I believe functional components are cleaner to work with. I have eslint enabled to ensure my code is not ugly. 
                    </p>
                    <p>
                        Antony % Portfolio
                    </p>
                </Card>
                <Card header="ls">
                    <p>
                        Antony % Portfolio
                    </p>
                    <ul>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/website">Website</Link>
                        </li>
                    </ul>
                    <p>
                        Antony % Portfolio
                    </p>
                </Card>
            </div>
            <div className={styles.container}>
                <Card header={`cd pages${pathString}`}>
                    <div id={styles.rightframe} name="rightcont">
                        {props.children}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Content;