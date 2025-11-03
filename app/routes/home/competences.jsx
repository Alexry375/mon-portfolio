import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import styles from './competences.module.css';

export function Competences({ id, sectionRef, visible }) {
  const skills = {
    'Programming Languages': [
      { name: 'Python', description: 'ML, Data Science, Backend' },
      { name: 'C', description: 'Systems, Algorithms' },
      { name: 'MATLAB', description: 'Scientific computing' },
      { name: 'OCaml', description: 'Functional programming' },
      { name: 'Ada', description: 'Real-time systems' },
      { name: 'Java', description: 'OOP, Enterprise apps' },
      { name: 'JavaScript/React', description: 'Web development' }
    ],
    'Machine Learning & AI': [
      { name: 'TensorFlow/PyTorch', description: 'Deep Learning' },
      { name: 'Computer Vision', description: 'Image processing' },
      { name: 'NLP', description: 'Natural language' },
      { name: 'Reinforcement Learning', description: 'RL algorithms' },
      { name: 'Scikit-learn', description: 'Classical ML' }
    ],
    'Tools & Tech': [
      { name: 'Docker', description: 'Containerization' },
      { name: 'Linux', description: 'System admin' },
      { name: 'SQL', description: 'Databases' },
      { name: 'Cloud (AWS/GCP)', description: 'Cloud services' }
    ],
    'Soft Skills': [
      { name: 'Project Management', description: 'Agile, Scrum' },
      { name: 'Communication', description: 'Presentation, Docs' },
      { name: 'Teamwork', description: 'Collaboration, Leadership' },
      { name: 'English', description: 'B1 - Intermediate' },
      { name: 'Japanese', description: 'Beginner' },
      { name: 'Tech Watch', description: 'Self-learning' }
    ]
  };

  return (
    <Section
      className={styles.competences}
      as="section"
      ref={sectionRef}
      id={id}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0}>
        {({ visible }) => (
          <div className={styles.content} data-visible={visible}>
            <Heading level={2} className={styles.title}>
              Skills
            </Heading>

            <div className={styles.skillsGrid}>
              {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
                <div
                  key={category}
                  className={styles.skillCategory}
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <Heading level={3} className={styles.categoryTitle}>
                    {category}
                  </Heading>
                  <div className={styles.skillsList}>
                    {categorySkills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className={styles.skill}
                        style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                      >
                        <div className={styles.skillHeader}>
                          <Text className={styles.skillName}>{skill.name}</Text>
                        </div>
                        <Text size="s" className={styles.skillDescription}>
                          {skill.description}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.additionalInfo}>
              <Text className={styles.infoText}>
                Constantly learning and deepening my ML & AI skills while maintaining a strong foundation in software development and applied math.
              </Text>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
}