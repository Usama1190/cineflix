import Button from "../common/Button/Button"
import styles from './Error.module.css'

const Error = () => {
  return (
    <div className={styles.ew}>
      <div className={styles.efw}>
        <h1>404</h1>
      </div>
      <div className={styles.esw}>
        <h2>Sorry, Page Not Found</h2>
        <p>The page you requested could not found</p>
        <Button btnLayout={'sf'} btnLink={'/'} btnText={'Go Back Home'} />
      </div>
    </div>
  )
}

export default Error
