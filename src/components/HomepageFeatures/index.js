import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>High reliability</Translate>,
    Svg: require('@site/static/img/home/one-1.svg').default,
    description: (
      <Translate>
        Distributed with stateless design, using the Master/Worker architecture, supports multiple databases (MySQL/PostgreSQL/Oracle)
      </Translate>
    ),
  },
  {
    title: <Translate>High performance</Translate>,
    Svg: require('@site/static/img/home/one-2.svg').default,
    description: (
      <Translate>
        System uses a consistency sharding algorithm, lock-free design, task scheduling is accurate down to the second, supporting lightweight distributed computing and unlimited horizontal scaling
      </Translate>

    ),
  },
  {
    title: <Translate>Cronjob</Translate>,
    Svg: require('@site/static/img/home/one-3.svg').default,
    description: (
      <Translate>
        Supports distributed cronjob, fixed rate tasks, high-performance second tasks, and onetime tasks
      </Translate>
    ),
  },

  {
    title: <Translate>Distributed computing</Translate>,
    Svg: require('@site/static/img/home/two-1.svg').default,
    description: (
      <Translate>
        Supports multiple distributed programming models such as standalone, broadcast, Map, MapReduce, and sharding, easy to complete distributed computing for big data
      </Translate>
    ),
  },

  {
    title: <Translate>Delay task</Translate>,
    Svg: require('@site/static/img/home/two-2.svg').default,
    description: (
      <Translate>
        High performance delay task based on Redis , support multi-level storage, and provides rich statistics and reports
      </Translate>
    ),
  },

  {
    title: <Translate>Workflow</Translate>,
    Svg: require('@site/static/img/home/two-3.svg').default,
    description: (
      <Translate>
        Supports workflow scheduling engine, visual DAG design, and easy to complete complex task scheduling
      </Translate>
    ),
  },


  {
    title: <Translate>Permission management</Translate>,
    Svg: require('@site/static/img/home/three-1.svg').default,
    description: (
      <Translate>
        User management, supports menu, button, and data permission settings, flexible management of user permissions
      </Translate>
    ),
  },
  {
    title: <Translate>Alarm monitoring</Translate>,
    Svg: require('@site/static/img/home/three-2.svg').default,
    description: (
      <Translate>
        Overall monitoring metrics, rich and alarm in time, easy to locate and resolve online problem
      </Translate>
    ),
  },
  {
    title: <Translate>Multiple languages</Translate>,
    Svg: require('@site/static/img/home/three-3.svg').default,
    description: (
      <Translate>
        Support multiple languages such as Java, Go, PHP, and Python, as well as build with frameworks such as Spring Boot, Gin, and Swoft
      </Translate>
    ),
  },





];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
