import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>High Available</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate>
        Distributed stateless design, master/worker architecture, only depends on one kind of database.(MySQL/PostgreSQL/Oracle)
      </Translate>
    ),
  },
  {
    title: <Translate>high performance</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate>
        Task scheduling is accurate to the second level, and supports lightweight distributed computing. Tasks use fragmentation algorithms to support unlimited expansion.
      </Translate>

    ),
  },
  {
    title: <Translate>Timing scheduling</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
        Support distributed timing tasks, fixed-frequency tasks, high-performance second-level tasks, and timing scheduling of one-time tasks
      </Translate>
    ),
  },

  {
    title: <Translate>Distributed computing</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
        Support stand-alone, broadcast, Map, MapReduce and shard a variety of distributed programming models, easy to achieve big data distributed computing.
      </Translate>
    ),
  },

  {
    title: <Translate>Delayed task</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
        Implement high performance delayed tasks based on Redis, support multi-level storage of delayed tasks and rich task management.
      </Translate>
    ),
  },

  {
    title: <Translate>Work flow</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
        Built-in workflow scheduling engine to support visual DAG,It is convenient and efficient to realize complex task scheduling.
      </Translate>
    ),
  },


  {
    title: <Translate>Authority management</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
        Namespace design, supports rich rights management, accurate to the button level
      </Translate>
    ),
  },
  {
    title: <Translate>Alarm monitoring</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
        Comprehensive monitoring indicators, rich and timely alarm methods, easy for operators to quickly locate and solve online problems.
      </Translate>
    ),
  },
  {
    title: <Translate>Cross-language</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
        Officials provide Java/Go/PHP redundant support, as well as Spring Boot、 Gin、 Swoft and other common framework integration.
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
