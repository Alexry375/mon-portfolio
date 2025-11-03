import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="100"
      height="60"
      viewBox="0 0 60 40"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          {/* Letter A */}
          <path d="M 5 35 L 12 10 L 19 35 M 8 25 L 16 25" />
          {/* Letter B */}
          <path d="M 30 10 L 30 35 M 30 10 Q 40 10 40 17.5 Q 40 22.5 30 22.5 M 30 22.5 Q 42 22.5 42 28.75 Q 42 35 30 35" />
        </clipPath>
      </defs>
      <text
        x="2"
        y="34"
        className={styles.text}
        style={{ fontFamily: 'Fascinate Inline, cursive', fontSize: '36px', fontWeight: '400', letterSpacing: '-2px' }}
      >
        AB
      </text>
      {highlight && (
        <text
          x="2"
          y="34"
          className={styles.highlight}
          style={{ fontFamily: 'Fascinate Inline, cursive', fontSize: '36px', fontWeight: '400', letterSpacing: '-2px' }}
        >
          AB
        </text>
      )}
    </svg>
  );
});
