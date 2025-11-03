import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { Icon } from '~/components/icon';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} ${config.name}.`}
      </span>
      <span className={styles.separator}>|</span>
      <Link secondary className={styles.link} href={`https://linkedin.com/in/${config.linkedin}`} target="_blank" rel="noopener noreferrer">
        <Icon icon="linkedin" className={styles.icon} />
        LinkedIn
      </Link>
      <span className={styles.separator}>|</span>
      <Link secondary className={styles.link} href="https://hamishw.com" target="_blank" rel="noopener noreferrer">
        Design inspiré de Hamish Williams
      </Link>
    </Text>
  </footer>
);
