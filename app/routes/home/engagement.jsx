import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import styles from './engagement.module.css';

const EngagementText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Engagement civique" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      En tant que délégué à l'ENSEEIHT, je représente mes camarades auprès de
      l'administration et participe activement à l'amélioration de notre formation. Ce rôle
      me permet de développer mes compétences en leadership, en communication et en négociation.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      J'assure la bonne communication entre élèves et l'équipe pédagogique. Cette expérience
      m'a appris l'importance de l'écoute active et de la diplomatie dans la résolution de problèmes.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Je suis également membre de l'association Genius7, l'association entrepreneuriale de l'ENSEEIHT,
      qui accompagne et soutient les projets innovants des étudiants. Cette implication me permet de
      développer mon esprit entrepreneurial et de participer à un écosystème dynamique d'innovation.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Mon engagement a débuté dès le lycée : gestion du club journalistique, chef du pôle musique pour
      l'association ETM (Every Talent Matters), DJ lors du bal de première. Pendant ma prépa, j'ai
      développé un bot Discord pour faciliter l'organisation des sessions d'étude collectives et renforcer
      la cohésion de la promotion.
    </Text>
  </Fragment>
);

export const Engagement = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.engagement}
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
              <EngagementText visible={visible} titleId={titleId} />
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
                  Engagement
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};