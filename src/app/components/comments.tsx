import styles from "../styles/comments.module.css";

const Comments = () => {
  return (
    <section className={styles.sec1}>
      <div className={styles.content}>
        <div className={styles.firstcolumn}>
          <div className={styles.contentname}>
            <input type="text" className={styles.name} />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.labels}>Name</label>
          </div>
          <div className={styles.contentemail}>
            <input type="text" className={styles.name} />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.labels}>Email</label>
          </div>
        </div>

        <div className={styles.secondcolumn}>
          <div className={styles.contentaddress}>
            <input type="text" className={styles.name} />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.labels}>address</label>
          </div>
          <div className={styles.contentnumber}>
            <input type="text" className={styles.name} />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.labels}>tel</label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
