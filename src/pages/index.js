import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';
import LogoPng from '@site/static/img/logo.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <div className={styles.logoEffect}>
          <img src={LogoPng}></img>
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          <Translate>A distributed Task scheduling, High performance delayed tasks and lightweight Computing Framework</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg margin-right--lg"
            to="/docs/intro">
            <Translate>Start</Translate>
          </Link>

          <Link
            className="button button--outline button--primary button--lg m-2"
            to="/docs/intro">
            <Translate>Experience</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
