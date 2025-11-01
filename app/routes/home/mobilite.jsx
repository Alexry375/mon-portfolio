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
      <DecoderText text="Mobilité internationale" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Je souhaite effectuer un échange académique à l'<Link href="https://www.usherbrooke.ca">Université de Sherbrooke</Link> au Canada
      pour enrichir mon parcours en intelligence artificielle. Cette université propose une maîtrise
      en informatique avec une grande flexibilité dans le choix des cours, notamment en Machine Learning.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Cette expérience internationale me permettrait d'approfondir mes connaissances techniques tout en
      découvrant de nouvelles approches pédagogiques et méthodologies de recherche nord-américaines.
      L'environnement multiculturel et l'excellence académique de Sherbrooke constituent une opportunité
      unique pour développer mes compétences et élargir ma vision de l'IA.
    </Text>
    <Text className={styles.note} data-visible={visible} size="m" as="p">
      Note: Mon projet de formation en alternance avec MODIA pourrait influencer cette décision,
      mais l'expérience internationale reste une priorité dans mon parcours académique.
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
                Découvrir le programme
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
                  Échange
                </div>
              </div>
              <div className={styles.highlights}>
                <div className={styles.highlight} data-visible={visible}>
                  <Heading level={4} className={styles.highlightTitle}>
                    Université de Sherbrooke
                  </Heading>
                  <Text className={styles.highlightText}>
                    • Programme de maîtrise flexible<br />
                    • Spécialisation en Machine Learning<br />
                    • Environnement de recherche stimulant<br />
                    • Campus francophone en Amérique du Nord
                  </Text>
                </div>
                <div className={styles.highlight} data-visible={visible} data-delay>
                  <Heading level={4} className={styles.highlightTitle}>
                    Objectifs de l'échange
                  </Heading>
                  <Text className={styles.highlightText}>
                    • Approfondir les techniques d'IA avancées<br />
                    • Découvrir de nouvelles méthodologies<br />
                    • Développer un réseau international<br />
                    • Améliorer mon anglais technique
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