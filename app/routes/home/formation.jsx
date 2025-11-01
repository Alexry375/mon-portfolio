import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Image } from '~/components/image';
import n7Logo from '/Logo-toulouse-inp-N7.png';
import styles from './formation.module.css';

export function Formation({ id, sectionRef, visible }) {
  return (
    <Section
      className={styles.formation}
      as="section"
      ref={sectionRef}
      id={id}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0}>
        {({ visible }) => (
          <div className={styles.content} data-visible={visible}>
            <Heading level={2} className={styles.title}>
              Formation
            </Heading>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelinePeriod}>2023 - 2026</div>
                <div className={styles.timelineContent}>
                  <div className={styles.institutionHeader}>
                    <Image
                      src={n7Logo}
                      alt="Logo ENSEEIHT"
                      className={styles.logo}
                      style={{ width: '80px', height: 'auto' }}
                    />
                    <div>
                      <Heading level={3} className={styles.institution}>
                        ENSEEIHT - Toulouse INP
                      </Heading>
                      <Text className={styles.degree}>
                        Diplôme d'Ingénieur en Sciences du Numérique
                      </Text>
                    </div>
                  </div>
                  <Text className={styles.description}>
                    Formation d'excellence en ingénierie informatique avec une spécialisation
                    en Intelligence Artificielle et Machine Learning. Apprentissage approfondi
                    des mathématiques appliquées, de l'algorithmique avancée et des systèmes
                    distribués. Projets pratiques en développement logiciel et en data science.
                  </Text>
                  <div className={styles.highlights}>
                    <Text size="s" className={styles.highlight}>
                      • Délégué de groupe
                    </Text>
                    <Text size="s" className={styles.highlight}>
                      • Spécialisation IA et Deep Learning
                    </Text>
                    <Text size="s" className={styles.highlight}>
                      • Projets en équipe multidisciplinaire
                    </Text>
                  </div>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelinePeriod}>2021 - 2023</div>
                <div className={styles.timelineContent}>
                  <Heading level={3} className={styles.institution}>
                    Lycée Franklin Roosevelt - Reims
                  </Heading>
                  <Text className={styles.degree}>
                    Classes Préparatoires MPI (Mathématiques, Physique, Informatique)
                  </Text>
                  <Text className={styles.description}>
                    Formation intensive en mathématiques et sciences physiques avec une forte
                    composante informatique. Développement d'une rigueur scientifique et d'une
                    capacité d'abstraction mathématique. Programmation en Python, OCaml et C,
                    étude des structures de données et de la complexité algorithmique.
                  </Text>
                  <div className={styles.highlights}>
                    <Text size="s" className={styles.highlight}>
                      • Excellence en mathématiques et informatique
                    </Text>
                    <Text size="s" className={styles.highlight}>
                      • Admis aux concours des grandes écoles d'ingénieurs
                    </Text>
                    <Text size="s" className={styles.highlight}>
                      • Projets de programmation avancée
                    </Text>
                  </div>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelinePeriod}>2021</div>
                <div className={styles.timelineContent}>
                  <Heading level={3} className={styles.institution}>
                    Baccalauréat Général
                  </Heading>
                  <Text className={styles.degree}>
                    Mention Très Bien
                  </Text>
                  <Text className={styles.description}>
                    Spécialités Mathématiques et Sciences de l'Ingénieur
                  </Text>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
}