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
                        This portfolio website uses the VT323 font-family, which is Licensed under the Open Font License, and is styled after the VT320 1987 computer terminal. It&apos;s optimized for a desktop experience. The drop down display may not properly work on mobile, alongside some of the other more finnicky code, until further optimization has been done on the web-page. Currently, the website&apos;s index file is under 10 KB in size and will likely not go over 1 MB in total size with further modification. The website uses HTML, Javascript, CSS, and was built with code written by me in Visual Studio 2019.
                    </p>
                    <p>
                        The basic text color is set to &apos;forestgreen&apos;, while the highlighted outlines are set to &apos;darkseagreen&apos; when on-hover. The dropdown makes use of nested menus and &apos;nth-child&apos; CSS pseudo-elements to work with visibility.
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
                            <a href="subpages/Projects.html" target="rightcont">Projects</a>
                        </li>
                        <li>
                            <a href="subpages/Designs.html" target="rightcont">Designwork</a>
                        </li>
                        <li>
                            <a href="subpages/Website.html" target="rightcont">Website</a>
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