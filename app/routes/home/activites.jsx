import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import styles from './activites.module.css';

const ActivitesText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Sports & Activities" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I attend tech events in Toulouse using <Link href="https://www.meetup.com/fr-FR/">Meetup</Link> - TEDx, AI conferences, and hackathons. Great for staying updated and networking.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      For balance, I practice calisthenics at home. Keeps me fit and focused.
    </Text>
  </Fragment>
);

export const Activites = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  const events = [
    {
      type: 'TEDx',
      title: 'TEDx Toulouse',
      description: 'Innovation & tech talks',
      frequency: '2-3 times/year',
      icon: '🎤'
    },
    {
      type: 'Meetup',
      title: 'Toulouse Data Science',
      description: 'ML & Data Science meetups',
      frequency: 'Monthly',
      icon: '📊'
    },
    {
      type: 'Conference',
      title: 'DevFest Toulouse',
      description: 'Dev festival with talks & workshops',
      frequency: 'Yearly',
      icon: '💻'
    },
    {
      type: 'Hackathon',
      title: 'Student Hackathons',
      description: 'Coding competitions',
      frequency: 'Quarterly',
      icon: '🚀'
    }
  ];

  return (
    <Section
      className={styles.activites}
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
              <ActivitesText visible={visible} titleId={titleId} />
              <div className={styles.benefits}>
                <Heading level={4} className={styles.benefitsTitle} data-visible={visible}>
                  What I gain
                </Heading>
                <div className={styles.benefitsList}>
                  <div className={styles.benefit} data-visible={visible}>
                    <Text className={styles.benefitText}>
                      <strong>Tech trends:</strong> Latest AI & dev innovations
                    </Text>
                  </div>
                  <div className={styles.benefit} data-visible={visible} data-delay="100">
                    <Text className={styles.benefitText}>
                      <strong>Networking:</strong> Meeting pros and students
                    </Text>
                  </div>
                  <div className={styles.benefit} data-visible={visible} data-delay="200">
                    <Text className={styles.benefitText}>
                      <strong>Learning:</strong> New skills & perspectives
                    </Text>
                  </div>
                  <div className={styles.benefit} data-visible={visible} data-delay="300">
                    <Text className={styles.benefitText}>
                      <strong>Inspiration:</strong> Ideas for my own projects
                    </Text>
                  </div>
                </div>
              </div>
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
                  Events
                </div>
              </div>
              <div className={styles.eventsGrid}>
                {events.map((event, index) => (
                  <div
                    key={event.title}
                    className={styles.eventCard}
                    data-visible={visible}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className={styles.eventHeader}>
                      <span className={styles.eventIcon}>{event.icon}</span>
                      <span className={styles.eventType}>{event.type}</span>
                    </div>
                    <Heading level={5} className={styles.eventTitle}>
                      {event.title}
                    </Heading>
                    <Text size="s" className={styles.eventDescription}>
                      {event.description}
                    </Text>
                    <Text size="s" className={styles.eventFrequency}>
                      {event.frequency}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};