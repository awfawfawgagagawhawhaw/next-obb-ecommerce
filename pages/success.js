import { useContext } from 'react'
import styled from 'styled-components'
import { Store } from 'stores'

const Container = styled.div`
	background-color: tomato;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 70px;
	color: white;
	display: flex;
	height: 100vh;
	width: 100%;
	gap: 30px;

	svg {
		height: 100px;
		width: 100px;
	}
`

const Success = () => {

	const { state } = useContext(Store)
	const { session } = state

	return (
		<Container>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
			<h1>ORDER SUCCESS</h1>
			<p>check your email address { session && session.email }</p>
		</Container>
	)
}

export default Success