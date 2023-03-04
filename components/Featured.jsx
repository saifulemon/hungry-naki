import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const [index, setIndex,] = useState(0);
  const images = [
    "/images/pixel1.jpg",
    "/images/pixel2.jpg",
    "/images/pixel3.jpeg",
  ];

  const handleArrow = (direction) => {
    if(direction === "l"){
      setIndex(index !== 0 ? index - 1 : 2)
    }
    if(direction === "r"){
      setIndex(index !== 2 ? index + 1 : 0)
    }
    console.log(index);
  }
  return (
    <section className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow('l')}>
        <Image src="/images/arrowl.png" alt="" width="100" height="80" objectFit="contain" />
      </div>
      <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image
              src={img}
              alt=""
              className={styles.banner}
              layout= "fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow('r')}>
        <Image src="/images/arrowr.png" alt="" width="100" height="80" objectFit="contain" />
      </div>
    </section>
  );
};

export default Featured;
