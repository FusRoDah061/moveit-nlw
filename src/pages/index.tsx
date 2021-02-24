import React from "react";
import { ExperienceBar } from "../components/ExperienceBar";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />
    </div>
  )
}
