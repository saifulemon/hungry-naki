import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>The Best Pizza in Town</h1>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsam nisi aut, dignissimos iste eligendi esse. Dolor molestias ea nihil doloremque distinctio! Repudiandae neque cupiditate possimus cum, accusamus quam est!</p>
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </section>
    );
};

export default PizzaList;