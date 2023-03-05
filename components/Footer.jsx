import styles from "../styles/Footer.module.css";
import Image from 'next/image'

const Footer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.item}>
        <Image src="/images/bg.png" layout='fill' alt='' objectFit="cover"/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
        <div className={styles.motto}>
          <h2>OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.</h2>
        </div>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> NewYork, 30258
            <br /> (602) 467-1250
          </p>
          <p className={styles.text}>
            1654 R. Pki Road #120.
            <br /> London, 3799
            <br /> (789) 257-1247
          </p>
          <p className={styles.text}>
            1654 R. Hami Road #404.
            <br /> Canada, 47536
            <br /> (7898) 0257-1248
          </p>
          <p className={styles.text}>
            1654 R. Galy Road #589.
            <br /> Dhaka, 7825
            <br /> (736) 97-5841
          </p>
        </div>
        <div className={styles.card}>
        <h1 className={styles.title}>WORKING HOURS</h1>
        <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY UNTIL SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer