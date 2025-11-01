import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { Formation } from './formation';
import { Competences } from './competences';
import { Mobilite } from './mobilite';
import { Engagement } from './engagement';
import { Activites } from './activites';
import { VideoPresentation } from './video-presentation';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Assets pour le projet GIFTED
import giftedLogo from '/Gifted_logo-removebg-preview.png';
import giftedShot from '/Shot_Gifted.jpeg';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Étudiant Ingénieur en Sciences du Numérique',
    description: `Portfolio d'${config.name} — Étudiant ingénieur à l'ENSEEIHT, passionné par le Machine Learning et l'Intelligence Artificielle.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const videoPres = useRef();
  const formation = useRef();
  const experiences = useRef();
  const competences = useRef();
  const mobilite = useRef();
  const engagement = useRef();
  const activites = useRef();

  useEffect(() => {
    const sections = [intro, videoPres, formation, experiences, competences, mobilite, engagement, activites];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    if (intro.current) {
      indicatorObserver.observe(intro.current);
    }

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      <VideoPresentation
        id="video-presentation"
        sectionRef={videoPres}
        visible={visibleSections.includes(videoPres.current)}
      />

      <Formation
        id="formation"
        sectionRef={formation}
        visible={visibleSections.includes(formation.current)}
      />

      <ProjectSummary
        id="experiences"
        sectionRef={experiences}
        visible={visibleSections.includes(experiences.current)}
        title="GIFTED - Application de recommandation de cadeaux par IA"
        description="Développement d'une application mobile innovante utilisant l'intelligence artificielle pour recommander des cadeaux personnalisés. Intégration d'APIs e-commerce et création d'algorithmes de personnalisation avancés."
        buttonText="Voir la démo (Coming soon)"
        buttonLink="#"
        model={{
          type: 'laptop',
          alt: 'Application GIFTED - Recommandation de cadeaux par IA',
          textures: [
            {
              srcSet: `${giftedShot} 800w, ${giftedShot} 1920w`,
              placeholder: giftedShot,
            },
          ],
        }}
      />

      <Competences
        id="competences"
        sectionRef={competences}
        visible={visibleSections.includes(competences.current)}
      />

      <Mobilite
        id="mobilite"
        sectionRef={mobilite}
        visible={visibleSections.includes(mobilite.current)}
      />

      <Engagement
        id="engagement"
        sectionRef={engagement}
        visible={visibleSections.includes(engagement.current)}
      />

      <Activites
        id="activites"
        sectionRef={activites}
        visible={visibleSections.includes(activites.current)}
      />

      <Footer />
    </div>
  );
};