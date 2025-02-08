import Button from "../common/Button/Button";
import styles from "./Hero.module.css";

const Hero = ({ specific_id, specific_status, data }) => {
  const { title, budget, isrotate, revenue, year, producer, director, release_date, cinema, image_url, img_alt, id, status, description, trailar } = data;

  {
    if (id === specific_id || status === specific_status) {
      return (
        <div className={styles.hw}>
          <div className={`${ styles.hiw } ${ !isrotate ? styles.rotate : '' }`}>
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
              <p>About : {description}</p>
              <Button btnLayout={'ss'} btnLink={trailar} btnText={'Watch Trailer'} />
            </div>
          </div>
        </div>
      );
    }
  }
};

export default Hero;
