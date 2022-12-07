import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from 'components/layout';

export default function Home() {
  return (
    <Layout>
      <p>this page is for home</p>
    </Layout>
  );
}
