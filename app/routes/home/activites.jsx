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
      <DecoderText text="Activités et passions" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Au-delà de mes études, je suis passionné par l'écosystème technologique et j'assiste
      régulièrement à des événements tech sur Toulouse. Grâce à l'application <Link href="https://www.meetup.com/fr-FR/">Meetup</Link>,
      je découvre et participe à des conférences, des hackathons et des meetups qui enrichissent
      ma culture technologique.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Ces événements, comme les TEDx Toulouse ou les conférences sur l'IA et le développement,
      me permettent de rester à la pointe des dernières innovations, d'échanger avec des
      professionnels du secteur et d'élargir mon réseau dans la communauté tech toulousaine.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Pour maintenir un équilibre sain entre travail intellectuel et activité physique, je pratique
      régulièrement la calisthénie chez moi. Cette discipline, basée sur le poids du corps, me permet
      de rester en forme tout en développant force, mobilité et discipline - des qualités qui se
      reflètent également dans mon approche du développement et de la résolution de problèmes.
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
      description: 'Conférences inspirantes sur l\'innovation et la technologie',
      frequency: '2-3 fois par an',
      icon: '🎤'
    },
    {
      type: 'Meetup',
      title: 'Toulouse Data Science',
      description: 'Rencontres autour du Machine Learning et de la Data Science',
      frequency: 'Mensuel',
      icon: '📊'
    },
    {
      type: 'Conférence',
      title: 'DevFest Toulouse',
      description: 'Festival des développeurs avec talks et ateliers pratiques',
      frequency: 'Annuel',
      icon: '💻'
    },
    {
      type: 'Hackathon',
      title: 'Hackathons étudiants',
      description: 'Compétitions de coding et projets innovants en équipe',
      frequency: 'Trimestriel',
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
                  Ce que ces activités m'apportent
                </Heading>
                <div className={styles.benefitsList}>
                  <div className={styles.benefit} data-visible={visible}>
                    <Text className={styles.benefitText}>
                      <strong>Veille technologique :</strong> Découverte des dernières tendances
                      et innovations en IA et développement
                    </Text>
                  </div>
                  <div className={styles.benefit} data-visible={visible} data-delay="100">
                    <Text className={styles.benefitText}>
                      <strong>Networking :</strong> Rencontres avec des professionnels et
                      étudiants partageant les mêmes passions
                    </Text>
                  </div>
                  <div className={styles.benefit} data-visible={visible} data-delay="200">
                    <Text className={styles.benefitText}>
                      <strong>Apprentissage continu :</strong> Acquisition de nouvelles
                      compétences et perspectives différentes
                    </Text>
                  </div>
                  <div className={styles.benefit} data-visible={visible} data-delay="300">
                    <Text className={styles.benefitText}>
                      <strong>Inspiration :</strong> Motivation pour lancer mes propres
                      projets innovants
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
                  Événements
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