import styles from "../styles/contacts.module.css";

const Contacts = () => {
  return (
    <section className={styles.sec1}>
      <div className={styles.divh1}>
        <h1 className={styles.contactsh1}>Contacts</h1>
      </div>

      <section className={styles.sec2}>
        <div className={styles.div1}>
          <div className={styles.div1sub}>
            <div className={styles.circle}>1</div>
            <h3>
              Call this number (876)454-9844 to order Sand, Grit, Steel, Cement
              etc.{" "}
            </h3>
          </div>
        </div>

        <div className={styles.div22}>
          <div className={styles.circle}>2</div>

          <h3 className={styles.div2h2}>
            This is our electronics store number you can call and check if we
            have what you need. Office tel: (876)631-2975
          </h3>
        </div>

        <div className={styles.div3}>
          <div className={styles.circle}>3</div>

          <h3 className={styles.div3h3}>
            This is our hardware store number call this number and make your
            contruction enquiry. tel: (876)837-8766
          </h3>
        </div>
      </section>
    </section>
  );
};

export default Contacts;
