import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import styles from './mobilite.module.css';

const MobiliteText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Mobility" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Planning an exchange at <Link href="https://www.usherbrooke.ca">Université de Sherbrooke</Link> in Canada to dive deeper into AI. They offer a flexible CS master's with strong Machine Learning courses.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I want to experience North American research methods and expand my AI perspective in a multicultural environment.
    </Text>
    <Text className={styles.note} data-visible={visible} size="m" as="p">
      Note: My apprenticeship project with MODIA might affect this timeline, but international experience remains a priority.
    </Text>
  </Fragment>
);

export const Mobilite = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.mobilite}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <MobiliteText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="https://www.usherbrooke.ca/admission/programme/654/maitrise-en-informatique/"
                target="_blank"
                rel="noopener noreferrer"
                icon="arrow-right"
              >
                View program
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Exchange
                </div>
              </div>
              <div className={styles.highlights}>
                <div className={styles.highlight} data-visible={visible}>
                  <Heading level={4} className={styles.highlightTitle}>
                    Université de Sherbrooke
                  </Heading>
                  <Text className={styles.highlightText}>
                    • Flexible master's program<br />
                    • ML specialization<br />
                    • Strong research environment<br />
                    • French campus in North America
                  </Text>
                </div>
                <div className={styles.highlight} data-visible={visible} data-delay>
                  <Heading level={4} className={styles.highlightTitle}>
                    Goals
                  </Heading>
                  <Text className={styles.highlightText}>
                    • Advanced AI techniques<br />
                    • New methodologies<br />
                    • International network<br />
                    • Improve technical English
                  </Text>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};