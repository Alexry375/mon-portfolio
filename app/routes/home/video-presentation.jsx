import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import styles from './video-presentation.module.css';

export function VideoPresentation({ id, sectionRef, visible }) {
  return (
    <Section
      className={styles.videoPres}
      as="section"
      ref={sectionRef}
      id={id}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0}>
        {({ visible }) => (
          <div className={styles.content} data-visible={visible}>
            <Heading level={2} className={styles.title}>
              Présentation de mon e-portfolio
            </Heading>
            <div className={styles.videoContainer}>
              <div className={styles.videoPlaceholder}>
                <Text size="l" className={styles.placeholderText}>
                  Vidéo de présentation à venir
                </Text>
                <Text size="m" className={styles.placeholderSubtext}>
                  Dans cette vidéo, je présente mon parcours, mes projets et mes ambitions dans le domaine du Machine Learning et de l'Intelligence Artificielle.
                </Text>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
}