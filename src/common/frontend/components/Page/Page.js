import Head from 'next/head'
import styles from './Page.module.css'
import Content from '@Components/Content/Content';
import Sidebar from '@Components/Sidebar/Sidebar';

function Page(props) {
  return (
    <div className={styles.page}>
      <Head>
        <title>Antony Sanchez</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Sidebar />
        <Content>
          {props.children}
        </Content>
      </div>
    </div>
  )
}

export default Page;