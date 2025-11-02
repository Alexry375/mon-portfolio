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
              Video Introduction
            </Heading>
            <div className={styles.videoContainer}>
              <div className={styles.videoPlaceholder}>
                <Text size="l" className={styles.placeholderText}>
                  Introduction video coming soon
                </Text>
                <Text size="m" className={styles.placeholderSubtext}>
                  In this video, I present my journey, projects, and ambitions in Machine Learning and Artificial Intelligence.
                </Text>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
}