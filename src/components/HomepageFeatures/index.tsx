import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easier to Read, Code and Think',
    Svg: require('@site/static/img/code-svgrepo-com.svg').default,
    description: (
      <>
        Spinach gives tools to abstract quantum algorithms and make code reusable.
      </>
    ),
  },
  {
    title: 'One Language for All Platforms',
    Svg: require('@site/static/img/flow-tree-svgrepo-com.svg').default,
    description: (
      <>
        Using tket as a backend, spinach can compile to code executable on any quantum computer.
      </>
    ),
  },
  {
    title: 'Simulate a quantum computer',
    Svg: require('@site/static/img/experiment-svgrepo-com.svg').default,
    description: (
      <>
        Spinach is also usable as a python library and compatible with jupyter for quantum simulation.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
