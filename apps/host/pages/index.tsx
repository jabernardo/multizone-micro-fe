import styles from './index.module.css';
import { LinkComponent } from '@micro-fe/components'

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <h1>Host App</h1>
      <LinkComponent href="/about" text="Goto About MicroFrontend" />
    </div>
  );
}

export default Index;
