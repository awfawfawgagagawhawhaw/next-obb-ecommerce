import { useState, useEffect } from 'react'
import Content from 'components/content'
import StoreProvider from 'stores'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {

	const [ mounted, setMounted ] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return mounted && (
		<StoreProvider>
			<Content>
				<Head>
					<title>Out of the Brown Box</title>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
				</Head>

				<Component { ...pageProps } />
			</Content>
		</StoreProvider>
	)
}

export default App