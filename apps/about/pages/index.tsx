import styles from './index.module.css';
import { LinkComponent } from '@micro-fe/components';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <h1>About Page</h1>
      <LinkComponent href="/" text="Goto Home Microfrontend" />
    </div>
  );
}

export default Index;
