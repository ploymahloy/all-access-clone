import Head from 'next/head';
import styles from '../styles/Home.module.css';

import DefaultLayout from '../layouts/DefaultLayout';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>All Access Clone</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<DefaultLayout></DefaultLayout>
		</div>
	);
}
