import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Image } from '~/components/image';
import { useState } from 'react';
import n7Logo from '/Logo-toulouse-inp-N7.png';
import styles from './formation.module.css';

export function Formation({ id, sectionRef, visible }) {
  const [videoRevealed, setVideoRevealed] = useState(false);
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
              Engineering Courses
            </Heading>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelinePeriod}>2023 - 2026</div>
                <div className={styles.timelineWithVideo}>
                  <div className={styles.timelineContent}>
                    <div className={styles.institutionHeader}>
                      <Image
                        src={n7Logo}
                        alt="ENSEEIHT Logo"
                        className={styles.logo}
                        style={{ width: '80px', height: 'auto' }}
                      />
                      <div>
                        <Heading level={3} className={styles.institution}>
                          ENSEEIHT - Toulouse INP
                        </Heading>
                        <Text className={styles.degree}>
                          Engineering Degree in Computer Science
                        </Text>
                      </div>
                    </div>
                    <Text className={styles.description}>
                      Specializing in AI and Deep Learning. Covering applied math, algorithms, and distributed systems through hands-on projects.
                    </Text>
                    <div className={styles.highlights}>
                      <Text size="s" className={styles.highlight}>
                        • Class representative
                      </Text>
                      <Text size="s" className={styles.highlight}>
                        • AI & Deep Learning track
                      </Text>
                      <Text size="s" className={styles.highlight}>
                        • Team projects in software dev
                      </Text>
                    </div>
                  </div>
                  <div className={styles.videoWrapper}>
                    <div
                      className={styles.videoContainer}
                      onMouseEnter={() => setVideoRevealed(true)}
                      data-revealed={videoRevealed}
                    >
                      <iframe
                        src={videoRevealed ? "https://drive.google.com/file/d/1DzoiV7Jl-muLI-nqtlfcXDe0_4AB-WAS/preview" : "about:blank"}
                        className={styles.videoIframe}
                        allow="autoplay"
                        title="Introduction video"
                      />
                    </div>
                    <Text size="s" className={styles.videoCaption}>
                      Video presentation
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
                    Preparatory Classes MPI (Math, Physics, CS)
                  </Text>
                  {' '}
                  <Text className={styles.description}>
                    Intensive math and CS training. Coded in Python, OCaml, and C. Studied data structures and algorithmic complexity.
                  </Text>
                  <div className={styles.highlights}>
                    <Text size="s" className={styles.highlight}>
                      • Strong math & CS background
                    </Text>
                    <Text size="s" className={styles.highlight}>
                      • Admitted to top engineering schools
                    </Text>
                  </div>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelinePeriod}>2021</div>
                <div className={styles.timelineContent}>
                  <Heading level={3} className={styles.institution}>
                    Baccalauréat
                  </Heading>
                  <Text className={styles.degree}>
                    High Honors (Mention Très Bien)
                  </Text>
                  {' '}
                  <Text className={styles.description}>
                    Math & Engineering specializations
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