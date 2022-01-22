import { GlobalStyles } from 'components/globals'
import Headers from 'components/headers'
import Footer from 'components/footer'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Content = ({ children }) => {

	const router = useRouter()

	return (
		<>
			<GlobalStyles />
			
			<Headers />
			{ children }
			{ router.pathname !== '/profile' && <Footer /> }
		</>
	)
}

export default Content