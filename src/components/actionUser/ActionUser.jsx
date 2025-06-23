import { Link } from "react-router-dom";

import styles from "styled-components";

const Container = styles.div`
	display: flex;
	align-items: center;
	gap: 20px;
	justify-content: center;

		@media(max-width: 768px){
			align-items: center;
			justify-content: start;
		}
`;

const ItemLink = styles.span`
	text-decoration:underline;
`;

const ItemBtn = styles.button`
	background-color: var(--primary);
	color: white;
	border-radius:6px;
	border:0;
	padding: .5em 2rem;

	&:hover{
		cursor: pointer;
		opacity:.8;
		transition: .3s;
	}
`;

export const ActionUser = () => {
  return (
    <Container>
      <Link to="/NewUser">
        <ItemLink>Cadastre-se</ItemLink>
      </Link>
      <Link to="/Login">
        <ItemBtn>Entrar</ItemBtn>
      </Link>
    </Container>
  );
};
