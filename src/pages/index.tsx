import Head from 'next/head';

import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | spfc.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>Every news about the <span>Trikas</span>.</h1>

          <p>
            Get access to all publications <br />
            <span>for $9.90 month</span>
          </p>

          <SubscribeButton />
          
        </section>

        <img src='/images/trikas.svg' alt='Girl Coding' />
      </main>
    </>
  )
}