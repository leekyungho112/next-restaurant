import Head from 'next/head';
import Image from 'next/image';
import PizzaList from '../components/PizzaList';
import Slide from '../components/Slide';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slide />
      <PizzaList />
    </div>
  );
}
