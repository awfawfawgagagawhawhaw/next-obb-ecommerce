import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import { Store } from 'stores'
import Link from 'next/link'
import axios from 'axios'
import useSWR from 'swr'

const Text = styled.span`
	font-size: 1.3rem;
	font-weight: 500;
	cursor: pointer;
`

const Icons = styled.span`
	display: grid !important;
	place-items: center;
	position: relative;
	cursor: pointer;
	height: 40px;
	width: 40px;

	& > span {
		background-color: tomato;
		color: hsl(0, 0%, 100%);
		place-items: center;
		border-radius: 50%;
		position: absolute;
		font-size: 1.1rem;
		font-weight: 500;
		display: grid;
		height: 20px;
		width: 20px;
		right: 3px;
		top: 3px;
	}

	img {
		height: 40px;
		width: 40px;
	}
`

const Section = styled.div`
	display: flex;
`

const Wrapper = styled.div`
	max-width: 1366px;
	display: grid;
	width: 100%;
`

const Container = styled.div`
	background-color: hsl(0, 0%, 100%);
	justify-content: center;
	position: fixed;
	display: flex;
	width: 100%;
	z-index: 9;

	${ Wrapper } {
		border-bottom: 1px solid hsl(230, 100%, 98%);
		flex-direction: column;
		padding: 0 30px;
		height: auto;

		${ Section } {
			&:nth-child(1) {
				grid-template-columns: auto 1fr auto auto;
				align-items: center;
				display: grid;
				height: 70px;
				gap: 30px;
			}

			&:nth-child(2) {
				padding: ${ props => props.useMenu ? '30px' : '0' };
				height: ${ props => props.useMenu ? '280px' : '0' };
				opacity: ${ props => props.useMenu ? '1' : '0' };
				flex-direction: column;
				align-items: center;
				overflow: hidden;
				transition: .5s;
				display: flex;
				gap: 30px;

				${ Icons } {
					display: none !important;
				}
			}
		}
	}

	@media ( min-width: 992px ) {
		${ Wrapper } {
			grid-template-columns: auto 1fr;
			padding: 0 50px;
			gap: 30px;

			${ Section } {
				&:nth-child(1) {
					display: flex;
					gap: 0;

					${ Icons } {
						&:nth-child(2), &:nth-child(3), &:nth-child(4) {
							display: none !important;
						}
					}
				}

				&:nth-child(2) {
					justify-content: flex-end;
					flex-direction: row;
					display: flex;
					height: auto;
					opacity: 1;
					padding: 0;

					${ Icons } {
						display: grid !important;
					}
				}
			}
		}
	}
`

const Headers = () => {

	const router = useRouter()

	const { state, dispatch } = useContext(Store)
	const { session } = state

	const fetcher = async (url) => await axios.get(url).then((res) => res.data)
	const { data: cart_list, error: cart_list_error } = useSWR(session ? `/api/carts/${ session.id }` : null, fetcher, { refreshInterval: 1000 })

	const [ useMenu, setUseMenu ] = useState(false)

	const HANDLE_SIGNOUT = () => {
		router.push('/')
		Cookies.remove('SESSION')
		dispatch({ type: 'SESSION', payload: null })
	}

	return (
		<Container useMenu={ useMenu }>
			<Wrapper>
				<Section>
					<Link href="/">
						<Icons>
							<img src="logo.png" />
						</Icons>
					</Link>

					<span></span>

					<Link href="/carts">
						<Icons>
							{ cart_list && cart_list.products.length >= 1 && <span>{ cart_list.products.length }</span> }
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg>
						</Icons>
					</Link>

					<Icons onClick={ () => useMenu ? setUseMenu(false) : setUseMenu(true) }>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
					</Icons>
				</Section>

				<Section>
					<Link href="/">
						<Text>
							HOME
						</Text>
					</Link>

					<Link href="/#products">
						<Text>
							PRODUCTS
						</Text>
					</Link>

					<Link href="/#contact">
						<Text>
							CONTACT
						</Text>
					</Link>

					{
						session && session ? 
						<>
							<Link href="/carts">
								<Icons>
									{ cart_list && cart_list.products.length >= 1 && <span>{ cart_list.products.length }</span> }
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg>
								</Icons>
							</Link>
							
							<Text onClick={ HANDLE_SIGNOUT } style={{ backgroundColor: 'tomato', color: 'white', padding: '10px 15px', borderRadius: '4px' }}>
								SIGN OUT
							</Text>
							
						</>
						:
						<>
							<Link href="/accounts">
								<Text>
									ACCOUNTS
								</Text>
							</Link>

							<Link href="/">
								<Icons>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg>
								</Icons>
							</Link>
						</>
					}
				</Section>
			</Wrapper>
		</Container>
	)
}

export default Headers