import { Link } from "react-router-dom";
import styles from "./ActionUser.module.css";

export const ActionUser = () => {
	return(
		<div className={styles.flex__actionUser}>
			 <Link to="/NewUser" className={styles.link__register}> Cadastre-se</Link>
			 <Link to="/Login" className={styles.link__btn}> Entrar </Link>
		</div>
	)
}