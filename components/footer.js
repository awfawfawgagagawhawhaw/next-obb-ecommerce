import styled from 'styled-components'
import Link from 'next/link'

const Items = styled.div`
	align-items: center;
	flex-direction: column;
	color: white;
	display: flex;
	gap:20px;
`

const Section = styled.div`
	
`

const Container = styled.div`
	background-color: hsl(230, 30%, 15%);
	display: grid;
	padding: 50px;
	height: auto;
	width: 100%;
	gap: 50px;

	${ Section } {
		&:nth-child(1) {
			grid-template-columns: 1fr;
			display: grid;
			gap: 30px;

			${ Items } {
				&:nth-child(1) {
					img {
						height: 150px;
						width: 150px;
					}
				}

				&:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4) {
					p {
						font-size: 1.3rem;
						cursor: pointer;
					}
				}
			}
		}

		&:nth-child(2) {
			justify-content: center;
			display: flex;

			p {
				font-size: 1.3rem;
				color: white;
			}
		}
	}

	@media ( min-width: 992px ) {
		padding: 50px;

		${ Section } {
			&:nth-child(1) {
				grid-template-columns: repeat(4, 1fr);
			}
		}
	}
`

const Footer = () => {
	return (
		<Container>
			<Section>
				<Items>
					<h3>Out of the Brown Box</h3>
					<p>Visit our local store</p>

					<img src="logo.png" />
				</Items>

				<Items>
					<h3>Links</h3>

					<Link href="/">
						<p>HOME</p>
					</Link>

					<Link href="/#products">
						<p>PRODUCTS</p>
					</Link>

					<Link href="/#contact">
						<p>CONTACT</p>
					</Link>
				</Items>

				<Items>
					<h3>You can pay through</h3>
					<p>Cash On Delivery</p>
					<p>G - Cash</p>
					<p>PayPal</p>
				</Items>

				<Items>
					<h3>Connect with us</h3>
					<p>Facebook</p>
					<p>Twitter</p>
					<p>Instagram</p>
				</Items>
			</Section>

			<Section>
				<p>Copyright 2022 All rights reserved. - Ecommerce Website</p>
			</Section>
		</Container>
	)
}

export default Footer