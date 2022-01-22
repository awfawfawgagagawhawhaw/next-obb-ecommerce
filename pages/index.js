import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useRouter } from 'next/router'
import emailjs from 'emailjs-com'
import Link from 'next/link'

const scale = keyframes`
	0% {
		transform: scale(1);
	}

	50% {
		transform: scale(1.1);
	}

	100% {
		transform: scale(1);
	}
`

const Items = styled.div`
	
`

const Wrapper = styled.div`
	max-width: 1366px;
	display: grid;
	width: 100%;
`

const Section = styled.div`
	justify-content: center;
	display: flex;
	width: 100%;
`

const Container = styled.div`
	display: grid;
	width: 100%;
	gap: 30px;

	${ Section } {
		padding: 0 30px;
		height: auto;

		${ Wrapper } {
			gap: 30px;
		}

		&:nth-child(1) {
			${ Wrapper } {
				padding-top: 100px;

				${ Items } {
					&:nth-child(1) {
						justify-content: center;
						flex-direction: column;
						align-items: center;
						text-align: center;
						padding: 100px 0;
						display: flex;
						gap: 30px;

						h1 {
							line-height: 55px;
							font-size: 5.0rem;
							font-weight: 900;

							span {
								color: tomato;
							}
						}

						p {
							color: hsl(230, 25%, 25%);
							font-size: 1.5rem;
						}

						button {
							background-color: tomato;
							color: hsl(0, 0%, 100%);
							align-items: center;
							border-radius: 4px;
							font-size: 1.3rem;
							font-weight: 500;
							padding: 0 15px;
							display: flex;
							height: 50px;
							gap: 15px;
						}
					}

					&:nth-child(2) {
						align-items: center;
						overflow: hidden;
						display: flex;
						padding: 50px;

						img {
							animation: ${ scale } 5s linear infinite;
							object-fit: cover;
							width: 100%;
						}
					}
				}
			}
		}

		&:nth-child(2) {
			${ Wrapper } {
				${ Items } {
					&:nth-child(1) {
						border-radius: 4px;
						position: relative;
						overflow: hidden;

						div {
							background: linear-gradient(to top, black, transparent);
							flex-direction: column;
							justify-content: end;
							align-items: center;
							position: absolute;
							padding: 50px;
							display: flex;
							height: 100%;
							width: 100%;
							z-index: 1;
							gap: 30px;

							h1 {
								color: white;
							}

							button {
								background-color: transparent;
								border: 3px solid white;
								font-size: 1.3rem;
								font-weight: 500;
								padding: 0 30px;
								color: white;
								height: 50px;
							}
						}

						img {
							animation: ${ scale } 5s linear infinite;
							object-fit: cover;
							height: 100%;
							width: 100%;
						}
					}

					&:nth-child(2) {
						grid-template-columns: repeat(2, 1fr);
						grid-template-rows: repeat(3, 250px);
						display: grid;
						gap: 30px;

						& > div {
							border-radius: 4px;
							position: relative;
							overflow: hidden;

							& > img {
								position: absolute;
								object-fit: cover;
								cursor: pointer;
								transition: 3s;
								height: 100%;
								width: 100%;

								&:hover {
									transform: scale(1.3);
								}
							}

							&:hover {
								& > div {
									opacity: 1;
								}
							}
						}
					}
				}
			}
		}

		&:nth-child(3) {
			${ Wrapper } {
				${ Items } {
					&:nth-child(1) {
						grid-template-columns: repeat(2, 1fr);
						grid-template-rows: repeat(3, 250px);
						display: grid;
						gap: 30px;

						& > div {
							border-radius: 4px;
							position: relative;
							overflow: hidden;

							& > img {
								position: absolute;
								object-fit: cover;
								cursor: pointer;
								transition: 3s;
								height: 100%;
								width: 100%;

								&:hover {
									transform: scale(1.3);
								}
							}
						}
					}

					&:nth-child(2) {
						border-radius: 4px;
						position: relative;
						overflow: hidden;

						div {
							background: linear-gradient(to top, black, transparent);
							flex-direction: column;
							justify-content: end;
							align-items: center;
							position: absolute;
							padding: 50px;
							display: flex;
							height: 100%;
							width: 100%;
							z-index: 1;
							gap: 30px;

							h1 {
								color: white;
							}

							button {
								background-color: transparent;
								border: 3px solid white;
								font-size: 1.3rem;
								font-weight: 500;
								padding: 0 30px;
								color: white;
								height: 50px;
							}
						}

						img {
							animation: ${ scale } 5s linear infinite;
							object-fit: cover;
							height: 100%;
							width: 100%;
						}
					}
				}
			}
		}

		&:nth-child(4) {
			background-color: hsl(230, 30%, 10%);

			${ Wrapper } {
				padding: 30px 0;

				${ Items } {
					&:nth-child(1) {
						grid-template-rows: auto 1fr auto;
						display: grid;
						gap: 30px;

						& > div {
							&:nth-child(1) {
								h1 {
									font-size: 5.0rem;
									font-weight: 800;
									color: tomato;
								}

								p {
									color: hsl(230, 100%, 95%);
									font-size: 1.5rem;
								}
							}

							&:nth-child(2) {
								justify-content: center;
								flex-direction: column;
								align-items: start;
								display: flex;
								gap: 30px;

								div {
									color: hsl(0, 0%, 100%);
									align-items: center;
									display: flex;
									gap: 15px;

									svg {
										color: tomato;
									}
								}
							}

							&:nth-child(3) {
								display: flex;
								gap: 30px;

								span {
									svg {
										cursor: pointer;
										color: tomato;
									}
								}
							}
						}
					}

					&:nth-child(2) {
						background-color: white;
						border-radius: 5px;

						form {
							grid-template-rows: auto auto 1fr auto;
							grid-template-columns: 1fr 1fr;
							padding: 30px;
							display: grid;
							height: 100%;
							gap: 30px;

							div {
								flex-direction: column;
								display: flex;
								gap: 10px;

								label {
									font-size: 1.3rem;
									font-weight: 600;
								}

								span {
									outline: 1px solid hsl(230, 100%, 95%);
									align-items: center;
									border-radius: 4px;
									position: relative;
									padding: 0 15px;
									display: flex;
									height: 50px;
									gap: 15px;

									svg {
										color: hsl(230, 100%, 90%);
										position: absolute;
									}

									input {
										padding-right: 15px;
										padding-left: 40px;
										border: none;
										width: 100%;
									}
								}

								&:nth-child(3) {
									span {
										background-color: hsl(230, 100%, 98%);
										padding: 15px;
										height: 100%;

										textarea {
											background-color: transparent;
											font-family: inherit;
											font-size: 1.3rem;
											line-height: 20px;
											border: none;
											height: 100%;
											width: 100%;
											resize: none;
										}
									}
								}
							}

							& > * {
								grid-column: 1 / span 2;
							}

							& > *:last-child {
								grid-column: 2;
							}

							& > input {
								background-color: tomato;
								color: hsl(0, 0%, 100%);
								border-radius: 4px;
								height: 50px;
							}
						}
					}
				}
			}
		}
	}

	@media ( min-width: 992px ) {
		gap: 0;

		${ Section } {
			padding: 0 50px;
			height: 100vh;

			${ Wrapper } {
				grid-template-columns: 1fr 1fr;
				padding: 100px 0 30px 0;
				gap: 50px;
			}

			&:nth-child(1) {
				${ Wrapper } {
					${ Items } {
						&:nth-child(1) {
							align-items: start;
							text-align: left;
							padding: 0;

							h1 {
								line-height: 85px;
								font-size: 8.0rem;
							}

							p {
								font-size: 1.8rem;
							}
						}

						&:nth-child(2) {

						}
					}
				}
			}

			&:nth-child(2) {
				${ Wrapper } {
					${ Items } {
						&:nth-child(1) {

						}

						&:nth-child(2) {
							grid-template-columns: repeat(3, 1fr);
							grid-template-rows: repeat(2, 1fr);
						}
					}
				}
			}

			&:nth-child(3) {
				${ Wrapper } {
					${ Items } {
						&:nth-child(1) {
							grid-template-columns: repeat(3, 1fr);
							grid-template-rows: repeat(2, 1fr);
						}

						&:nth-child(2) {
							
						}
					}
				}
			}

			&:nth-child(4) {
				${ Wrapper } {
					grid-template-columns: 1fr 400px;
					padding: 100px 0 30px 0;

					${ Items } {
						&:nth-child(1) {
							z-index: 1;
						}

						&:nth-child(2) {
							position: relative;

							& > div {
								border-bottom-left-radius: 5px;
								border-top-left-radius: 5px;
								background-color: tomato;
								top: calc(37px / 2);
								position: absolute;
								height: 500px;
								width: 250px;
								left: -250px;
							}
						}
					}
				}
			}
		}
	}
`

const Home = () => {

	const router = useRouter()

	const [ userData, setUserData ] = useState({
		name: '', email: '', message: ''
	})

	const { name, email, message } = userData

	const HANDLE_INPUTS = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value })
	}

	const HANDLE_MESSAGE = (e) => {
		e.preventDefault()
		
		const template = {
			name: name,
			email: email,
			message: message
		}

		router.push('/')
		setUserData({ ...userData, name: '', email: '', message: '' })
		emailjs.send('service_sw0cc4g', 'template_61p0dek', template, 'user_TXNfCZhJ2ob5JYLJRJkem')
	}

	return (
		<Container>
			<Section>
				<Wrapper>
					<Items>
						<h1>Give a Hoot,<br /> <span>Read A Book!</span></h1>
						<p>A satisfied customer is the best business strategy of all.</p>
						
						<Link href="/products">
							<button>
								EXPLORE NOW
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
							</button>
						</Link>
					</Items>

					<Items>
						<img src="ChildrenReadingBooks.png" />
					</Items>
				</Wrapper>
			</Section>

			<Section id="products">
				<Wrapper>
					<Items>
						<div>
							<h1>LATEST BOOKS</h1>
							
							<Link href="/products">
								<button>VIEW ALL</button>
							</Link>
						</div>

						<img src="banner.jpg" />
					</Items>

					<Items>
						<div>
							<img src="B1.jpeg" />
						</div>

						<div>
							<img src="B2.jpeg" />
						</div>

						<div>
							<img src="B3.jpeg" />
						</div>

						<div>
							<img src="B4.jpeg" />
						</div>

						<div>
							<img src="B5.jpeg" />
						</div>

						<div>
							<img src="B6.jpeg" />
						</div>
					</Items>
				</Wrapper>
			</Section>

			<Section>
				<Wrapper>
					<Items>
						<div>
							<img src="B7.jpeg" />
						</div>

						<div>
							<img src="B8.jpeg" />
						</div>

						<div>
							<img src="B9.jpeg" />
						</div>

						<div>
							<img src="B10.jpeg" />
						</div>

						<div>
							<img src="B11.jpeg" />
						</div>

						<div>
							<img src="B12.jpeg" />
						</div>
					</Items>

					<Items>
						<div>
							<h1>POPULAR BOOKS</h1>
							
							<Link href="/products">
								<button>VIEW ALL</button>
							</Link>
						</div>

						<img src="banner.jpg" />
					</Items>
				</Wrapper>
			</Section>

			<Section id="contact">
				<Wrapper>
					<Items>
						<div>
							<h1>Contact Us</h1>
							<p>Fill up the form and our Team will get back<br /> to you within 24 hours.</p>
						</div>

						<div>
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
								+639123456789
							</div>

							<div>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
								outofthebrownbox@gmail.com
							</div>

							<div>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
								Las Pinas City
							</div>
						</div>

						<div>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
							</span>

							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
							</span>

							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/></svg>
							</span>
						</div>
					</Items>

					<Items>
						<form onSubmit={ HANDLE_MESSAGE }>
							<div>
								<label htmlFor="name">Your Name</label>

								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
									<input type="text" id="name" name="name" onChange={ HANDLE_INPUTS } defaultValue={ name } />
								</span>
							</div>

							<div>
								<label htmlFor="email">Email Address</label>

								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
									<input type="email" id="email" name="email" onChange={ HANDLE_INPUTS } defaultValue={ email } />
								</span>
							</div>

							<div>
								<label htmlFor="message">Message</label>

								<span>
									<textarea id="message" placeholder="message" name="message" onChange={ HANDLE_INPUTS }  defaultValue={ message } >
										
									</textarea>
								</span>
							</div>

							<input type="submit" value="Send Message" />
						</form>

						<div>
							
						</div>
					</Items>
				</Wrapper>
			</Section>
		</Container>
	)
}

export default Home