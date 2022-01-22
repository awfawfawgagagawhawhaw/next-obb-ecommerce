import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Store } from 'stores'
import axios from 'axios'

const Message = styled.div`
	background-color: coral;
	color: hsl(0, 0%, 100%);
	align-items: center;
	border-radius: 5px;
	font-size: 1.5rem;
	font-weight: 500;
	position: fixed;
	display: flex;
	padding: 30px;
	bottom: 30px;
	height: auto;
	width: auto;
	z-index: 1;
	left: 30px;
	gap: 15px;
`

const Items = styled.div`
	
`

const Section = styled.div`
	
`

const Wrapper = styled.div`
	grid-template-rows: auto auto;
	max-width: 1066px;
	padding: 30px 0;
	display: grid;
	height: 100%;
	width: 100%;
	gap: 30px;
`

const Container = styled.div`
	padding-top: 70px !important;
	justify-content: center;
	position: relative;
	min-height: 100vh;
	padding: 0 30px;
	display: flex;
	width: 100%;

	${ Wrapper } {
		${ Section } {
			display: grid;

			&:nth-child(1) {
				grid-template-columns: 1fr auto;
				align-items: center;

				& > span {
					font-size: 2.0rem;
					font-weight: 800;
				}

				& > select {
					border-radius: 4px;
					padding: 0 15px;
					cursor: pointer;
					height: 50px;
				}
			}

			&:nth-child(2) {
				grid-template-columns: repeat(2, 1fr);
				gap: 30px;

				&:nth-child(1) {

				}

				&:nth-child(2) {
					${ Items } {
						& > div {
							&:nth-child(1) {
								justify-content: center;
								border-radius: 4px;
								position: relative;
								overflow: hidden;
								cursor: pointer;
								display: flex;
								height: 250px;

								img {
									position: absolute;
									object-fit: cover;
									transition: 3s;
									height: 100%;
									width: 100%;
								}

								button {
									background-color: tomato;
									color: hsl(0, 0%, 100%);
									border-radius: 4px;
									position: absolute;
									font-size: 1.3rem;
									font-weight: 500;
									transition: .5s;
									padding: 0 15px;
									bottom: -50px;
									height: 40px;
									z-index: 1;
								}
							}

							&:nth-child(2) {
								padding: 15px 0;
								display: grid;
								gap: 5px;

								& > span {
									&:nth-child(1) {
										font-size: 1.5rem;
										font-weight: 700;
									}

									&:nth-child(2) {
										color: hsl(230, 25%, 25%);
										font-size: 1.5rem;
									}
								}
							}

							&:hover {
								&:nth-child(1) {
									img {
										transform: scale(1.3);
									}
									button {
										bottom: 30px;
									}
								}
							}
						}
					}
				}
			}
		}
	}

	@media ( min-width: 992px ) {
		padding: 0 50px;

		${ Wrapper } {
			${ Section } {
				&:nth-child(2) {
					grid-template-columns:  repeat(4, 1fr);

					&:nth-child(1) {

					}

					&:nth-child(2) {
						${ Items } {
							& > div {
								&:nth-child(1) {
									height: 350px;
								}

								&:nth-child(2) {

								}
							}
						}
					}
				}
			}
		}
	}
`

const ProductLists = () => {

	const router = useRouter()

	const { state, dispatch } = useContext(Store)
	const { session } = state

	const [ message, setMessage ] = useState('')
	const [ useLoading, setUseLoading ] = useState(false)
	const [ useMessage, setUseMessage ] = useState(false)

	const products = [
		{
			id: 1,
			image: 'B1.jpeg',
			name: 'Mad For Math',
			price: 300
		},

		{
			id: 2,
			image: 'B2.jpeg',
			name: 'The One And Only Ivan',
			price: 250
		},

		{
			id: 3,
			image: 'B3.jpeg',
			name: 'Big Life Journal',
			price: 300
		},

		{
			id: 4,
			image: 'B4.jpeg',
			name: 'The Encyclopedia Of Animals',
			price: 250
		},

		{
			id: 5,
			image: 'B5.jpeg',
			name: 'Why Do I Have To Eat My Greens',
			price: 150
		},

		{
			id: 6,
			image: 'B6.jpeg',
			name: 'When I Grow Up...',
			price: 150
		},

		{
			id: 7,
			image: 'B7.jpeg',
			name: 'In My Heart',
			price: 150
		},

		{
			id: 8,
			image: 'B8.jpeg',
			name: "Alice's Maze",
			price: 200
		},

		{
			id: 9,
			image: 'B9.jpeg',
			name: 'We Are Together',
			price: 150
		},

		{
			id: 10,
			image: 'B10.jpeg',
			name: 'Capital',
			price: 200
		},

		{
			id: 11,
			image: 'B11.jpeg',
			name: 'Very First Sight Words And Sentences',
			price: 200
		},

		{
			id: 12,
			image: 'B12.jpeg',
			name: 'ABCs Of The WEB',
			price: 300
		}
	]

	const HANDLE_CART = async (id, image, name, price) => {
		setMessage('Loading please wait...')
		setUseLoading(true)

		if ( session === null ) {
			router.push('/accounts')
			return
		}

		await axios.post('/api/carts/add', {
			userID: session.id, productID: id, image, name, price
		}).then(response => {
			setMessage('Book successfully added to cart.')
			setUseMessage(true)
		}).catch(error => {

		})
	}

	useEffect(() => {

		let timer = setTimeout(() => {
			setUseMessage(false)
		}, 3000)

		return () => {
			clearTimeout(timer)
		}

	}, [ useMessage ])

	return (
		<Container>
			{
				useMessage && useLoading && 
				<Message>
					{
						message === 'Loading please wait...' ? 
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
						:
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
					}
					{ message }
				</Message>
			}

			<Wrapper>
				<Section>
					<span>ALL BOOKS</span>

					<select>
						<option>DEFAULT SORTING</option>
						<option value="1">Latest Books</option>
						<option value="1">Price 200</option>
						<option value="1">Price 200</option>
					</select>
				</Section>

				<Section>
					{
						products.map(product => (
							<Items key={ product.id }>
								<div>
									<button onClick={ () => HANDLE_CART(product.id, product.image, product.name, product.price) }>ADD TO CART</button>

									<img src={ product.image } />
								</div>

								<div>
									<span>{ product.name }</span>
									<span>₱{ product.price }</span>
								</div>
							</Items>
						))
					}
				</Section>
			</Wrapper>
		</Container>
	)
}

export default ProductLists