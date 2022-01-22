import { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import emailjs from 'emailjs-com'
import { Store } from 'stores'
import Link from 'next/link'
import axios from 'axios'
import useSWR from 'swr'

const Items = styled.div`
	border: 1px solid hsl(230, 100%, 95%);
	grid-template-columns: 100px 1fr;
	border-radius: 5px;
	padding: 15px;
	display: grid;
	height: 150px;
	gap: 30px;

	& > div {
		position: relative;

		&:nth-child(1) {
			img {
				border-radius: 4px;
				position: absolute;
				object-fit: cover;
				cursor: pointer;
				height: 100%;
				width: 100%;
			}
		}

		&:nth-child(2) {
			grid-template-rows: auto 1fr auto;
			grid-template-columns: 1fr auto;
			display: grid;
			gap: 15px;

			span {
				display: flex;

				&:nth-child(1) {
					font-size: 1.5rem;
					font-weight: 500;
					grid-column: 1;
				}

				&:nth-child(2) {
					grid-column: 1 / span 2;
					font-size: 1.3rem;
					font-weight: 500;
					grid-row: 2;
				}

				&:nth-child(3) {
					align-items: center;
					border-radius: 4px;
					font-size: 1.3rem;
					font-weight: 500;
					grid-column: 1;
					display: flex;
					grid-row: 3;
					gap: 10px;

					button {
						background-color: hsl(230, 100%, 98%);
						border-radius: 4px;
						transition: .3s;
						height: 24px;
						width: 24px;

						&:hover {
							background-color: tomato;
							color: white;
						}
					}
				}

				&:nth-child(4) {
					color: hsl(230, 100%, 90%);
					justify-content: end;
					transition: .3s;
					cursor: pointer;

					&:hover {
						color: hsl(230, 100%, 75%);
					}
				}

				&:nth-child(5) {
					align-items: end;
					font-size: 1.5rem;
					font-weight: 800;
					display: flex;
				}
			}
		}
	}
`

const Section = styled.div`

`

const Wrapper = styled.div`
	max-width: 1066px;
	display: grid;
	width: 100%;
	gap: 30px;
`

const Container = styled.div`
	justify-content: center;
	padding-top: 70px;
	display: flex;
	width: 100%;

	${ Wrapper } {
		padding: 30px;

		${ Section } {
			&:nth-child(1) {
				display: grid;
				height: auto;
				gap: 30px;
			}

			&:nth-child(2) {
				box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
				outline: 1px solid hsl(230, 100%, 95%);
				grid-template-rows: auto 1fr;
				background-color: white;
				border-radius: 4px;
				display: grid;
				padding: 30px;
				height: auto;
				gap: 30px;

				& > div {
					grid-template-columns: 1fr 1fr;
					display: grid;
					gap: 15px;

					&:nth-child(1) {
						span {
							&:nth-child(2), &:nth-child(4), &:nth-child(6) {
								text-align: right;
							}
						}
					}

					&:nth-child(2) {
						form {
							grid-column: 1 / span 2;
							flex-direction: column;
							display: flex;
							width: 100%;
							gap: 15px;

							input {
								border: 1px solid hsl(230, 100%, 95%);
								border-radius: 4px;
								padding: 0 15px;
								height: 50px;
								width: 100%;

								&[type=submit] {
									background-color: tomato;
									border: none;
									color: white;
								}
							}
						}
					}
				}
			}
		}
	}

	@media ( min-width: 992px ) {
		${ Wrapper } {
			grid-template-columns: 1fr 300px;

			${ Section } {
				&:nth-child(1) {

				}

				&:nth-child(2) {
					max-height: 400px;
					position: sticky;
					top: 100px;
				}
			}
		}
	}
`

const Carts = () => {

	const router = useRouter()

	const { state, dispatch } = useContext(Store)
	const { session } = state
	let total = 0

	const fetcher = async (url) => await axios.get(url).then((res) => res.data)
	const { data: cart_list, error: cart_list_error } = useSWR(session ? `/api/carts/${ session.id }` : null, fetcher, { refreshInterval: 1000 })
	
	const [ userData, setUserData ] = useState({
		fullname: session && session.firstname + ' ' + session.lastname,
		products: '',
		subtotal: 0,
		shipping: 50,
		totals: 0,
		address: '',
		contact: ''
	})

	const { fullname, products, subtotal, shipping, totals, address, contact } = userData

	const HANDLE_INPUTS = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value })
	}

	const HANDLE_INCREMENT = async (userID, productID) => {
		await axios.post('/api/carts/increment', {
			userID, productID
		}).then(response => {
			
		}).catch(error => {
			
		})
	}

	const HANDLE_DECREMENT = async (userID, productID) => {
		await axios.post('/api/carts/decrement', {
			userID, productID
		}).then(response => {
			
		}).catch(error => {
			
		})
	}

	const HANDLE_REMOVE = async (userID, productUID, productID) => {
		await axios.post('/api/carts/remove', {
			userID, productUID, productID
		}).then(response => {
			
		}).catch(error => {

		})
	}

	const HANDLE_TOTAL = (price, quantity) => {
		total += (price * quantity)
	}

	useEffect(() => {
		setUserData({ ...userData, products: cart_list && cart_list.products.map(cart => cart.name) + ' ', subtotal: total, totals: (total + 50) })
	}, [ cart_list ])

	const HANDLE_ORDER = async (e) => {
		e.preventDefault()

		const template = {
			email: session.email,
			fullname: fullname,
			products: products,
			subtotal: subtotal,
			shipping: shipping,
			totals: totals,
			address: address,
			contact: contact
		}

		emailjs.send('service_sw0cc4g', 'template_cwr6zym', template, 'user_TXNfCZhJ2ob5JYLJRJkem')
		
		await axios.post('/api/carts/success', {
			userID: session.id
		})

		router.push('/success')
	}

	return (
		<Container>
			<Wrapper>
				<Section>
					{
						cart_list && cart_list.products.map(data => (
							<Items key={ data._id }>
								<div>
									<img src={ data.image } />
								</div>

								<div>
									<span>
										{ data.name }
									</span>

									<span>
										₱{ data.price }
									</span>

									<span>
										<button onClick={ () => HANDLE_DECREMENT(session && session.id, data.productID) } disabled={ data.quantity <= 1 && true }>-</button>
											{ data.quantity }
										<button onClick={ () => HANDLE_INCREMENT(session && session.id, data.productID) }>+</button>
									</span>

									<span onClick={ () => HANDLE_REMOVE(session && session.id, data._id, data.productID) }>
										✖
									</span>

									<span>
										₱{ data.price * data.quantity }.00
									</span>
								</div>
							</Items>
						))
					}
				</Section>

				<Section>
					{
						cart_list && cart_list.products.map(cart => (
							HANDLE_TOTAL(cart.price, cart.quantity)
						))
					}

					<div>
						<span>Subtotal</span><span>₱{ total }</span>
						<span>Shipping Fee</span><span>₱50</span>
						<span>Total</span><span>₱{ total + 50 }</span>
					</div>

					<div>
						<form onSubmit={ HANDLE_ORDER }>
							<input type="text" name="address" placeholder="Address" name="address" onChange={ HANDLE_INPUTS } />
							<input type="text" name="contact" placeholder="Contact" name="contact" onChange={ HANDLE_INPUTS } />
							<input type="submit" value="PLACE ORDER" />
						</form>
					</div>
				</Section>
			</Wrapper>
		</Container>
	)
}

export default Carts