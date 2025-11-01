import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import styles from './competences.module.css';

export function Competences({ id, sectionRef, visible }) {
  const skills = {
    'Langages de programmation': [
      { name: 'Python', description: 'Machine Learning, Data Science, Backend' },
      { name: 'C', description: 'Programmation système, Algorithmes' },
      { name: 'MATLAB', description: 'Calcul scientifique, Simulations' },
      { name: 'OCaml', description: 'Programmation fonctionnelle' },
      { name: 'Ada', description: 'Programmation temps réel' },
      { name: 'Java', description: 'POO, Applications entreprise' },
      { name: 'JavaScript/React', description: 'Développement web' }
    ],
    'Machine Learning & IA': [
      { name: 'TensorFlow/PyTorch', description: 'Deep Learning' },
      { name: 'Computer Vision', description: 'Traitement d\'image' },
      { name: 'NLP', description: 'Traitement du langage naturel' },
      { name: 'Reinforcement Learning', description: 'Apprentissage par renforcement' },
      { name: 'Scikit-learn', description: 'ML classique' }
    ],
    'Outils & Technologies': [
      { name: 'Git', description: 'Versioning, Collaboration' },
      { name: 'Docker', description: 'Conteneurisation' },
      { name: 'Linux', description: 'Administration système' },
      { name: 'SQL', description: 'Bases de données' },
      { name: 'Cloud (AWS/GCP)', description: 'Services cloud' }
    ],
    'Compétences transversales': [
      { name: 'Gestion de projet', description: 'Agile, Scrum' },
      { name: 'Communication', description: 'Présentation, Documentation' },
      { name: 'Travail en équipe', description: 'Collaboration, Leadership' },
      { name: 'Anglais', description: 'B2/C1 - Professionnel' },
      { name: 'Japonais', description: 'Niveau débutant - Cours à l\'ENSEEIHT' },
      { name: 'Veille technologique', description: 'Curiosité, Auto-formation' }
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
              Compétences
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
                En constante évolution, je m'efforce d'approfondir mes connaissances
                en Machine Learning et Intelligence Artificielle tout en maintenant
                une solide base en développement logiciel et en mathématiques appliquées.
              </Text>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
}