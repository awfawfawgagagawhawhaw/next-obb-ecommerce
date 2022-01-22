import { useState, useContext } from 'react'
import styled from 'styled-components'
import { Store } from 'stores'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const Text = styled.div`
	align-items: center;
	font-size: 1.3rem;
	font-weight: 500;
	cursor: pointer;
	display: flex;
	gap: 15px;
`

const Section = styled.div`
	
`

const Wrapper = styled.div`
	max-width: 1366px;
	padding: 0 30px;
	display: grid;
	height: 100%;
	width: 100%;
`

const Container = styled.div`
	justify-content: center;
	padding-top: 70px;
	display: flex;
	height: auto;
	width: 100%;

	${ Wrapper } {
		grid-template-rows: auto 1fr;
		gap: 30px;

		${ Section } {
			&:nth-child(1) {
				padding-top: 30px;

				& > div {
					box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
					outline: 1px solid hsl(230, 100%, 95%);
					background-color: white;
					flex-direction: column;
					border-radius: 5px;
					padding: 30px;
					display: flex;
					gap: 30px;
				}
			}

			&:nth-child(2) {
				padding-top: 30px;
			}
		}
	}

	@media ( min-width: 992px ) {
		height: 100vh;

		${ Wrapper } {
			grid-template-columns: 250px 1fr;
			grid-template-rows: 1fr;
			padding: 0 50px;
		}
	}
`

const Profile = () => {

	const router = useRouter()

	const { state, dispatch } = useContext(Store)
	const { session } = state

	const [ useMenu1, setUseMenu1 ] = useState(true)
	const [ useMenu2, setUseMenu2 ] = useState(false)
	const [ useMenu3, setUseMenu3 ] = useState(false)
	const [ useMenu4, setUseMenu4 ] = useState(false)

	const HANDLE_SIGNOUT = () => {
		router.push('/')
		Cookies.remove('SESSION')
		dispatch({ type: 'SESSION', payload: null })
	}

	return (
		<Container>
			<Wrapper>
				<Section>
					<div>
						<Text onClick={ () => !useMenu1 && setUseMenu1(true) || setUseMenu2(false) || setUseMenu3(false) || setUseMenu4(false) }>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
							PROFILE
						</Text>

						<Text onClick={ () => !useMenu2 && setUseMenu1(false) || setUseMenu2(true) || setUseMenu3(false) || setUseMenu4(false) }>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 12H3M12 3v18"/></svg>
							ORDERS
						</Text>

						<Text onClick={ () => !useMenu3 && setUseMenu1(false) || setUseMenu2(false) || setUseMenu3(true) || setUseMenu4(false) }>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
							ADDRESS
						</Text>

						<Text onClick={ () => !useMenu4 && setUseMenu1(false) || setUseMenu2(false) || setUseMenu3(false) || setUseMenu4(true) }>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
							SETTINGS
						</Text>

						<Text onClick={ HANDLE_SIGNOUT }>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"/></svg>
							SIGN OUT
						</Text>
					</div>
				</Section>

				{
					useMenu1 && 
					<Section>
						profile
					</Section>
				}

				{
					useMenu2 && 
					<Section>
						orders
					</Section>
				}

				{
					useMenu3 && 
					<Section>
						address
					</Section>
				}

				{
					useMenu4 && 
					<Section>
						settings
					</Section>
				}
			</Wrapper>
		</Container>
	)
}

export default Profile