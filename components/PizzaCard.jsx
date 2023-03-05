import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
    return (
        <section className={styles.container}>
            <Image src="/images/pizza.png" width="200" height="200"/>
            <h1 className={styles.title}>Fiori Di Zucca</h1>
            <span className={styles.title}>$19.50</span>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsam nisi aut, dignissimos iste eligendi esse. Dolor molestias ea nihil doloremque distinctio! Repudiandae neque cupiditate possimus cum, accusamus quam est!</p>
        </section>
    );
};

export default PizzaCard;