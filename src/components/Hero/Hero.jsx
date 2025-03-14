import Button from "../common/Button/Button";
import styles from "./Hero.module.css";

const Hero = ({ data }) => {
  const {
    title,
    budget,
    isrotate,
    revenue,
    year,
    producer,
    director,
    release_date,
    cinema,
    image_url,
    img_alt,
    description,
    trailer,
  } = data;

  return (
    <div className={`${styles.hw} ${!isrotate ? styles.hsw : ""}`}>
      <div className={`${styles.hiw} ${!isrotate ? styles.rotate : ""}`}>
        <div className={styles.hi}>
          <img src={image_url} alt={img_alt} />
        </div>

        <div className={styles.hc}>
          <h1>{title}</h1>
          <h2>Cinema: {cinema}</h2>
          <h4>Release Date : {release_date}</h4>
          <h4>Year : {year}</h4>
          <h4>Producer : {producer}</h4>
          <h4>Director : {director}</h4>
          <h4>Budget : {budget}</h4>
          <h4>Renevue : {revenue}</h4>
          <h4>About : {description}</h4>
          <Button
            btnLayout={"ss"}
            btnLink={trailer}
            btnText={"Watch Trailer"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
