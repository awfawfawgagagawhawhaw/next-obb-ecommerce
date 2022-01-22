import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	*, *::before, *::after {
		letter-spacing: 0.03rem;
		box-sizing: border-box;
		outline: 0;
		padding: 0;
		margin: 0;
	}

	::-webkit-scrollbar {
		width: 0;
	}

	html {
		scroll-behavior: smooth;
		font-size: 62.5%;
	}

	body {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		background-color: hsl(0, 0%, 100%);
		font-family: 'Inter', sans-serif;
		color: hsl(230, 30%, 10%);
		font-size: 1.6rem;
		line-height: 1.5;
	}

	button, input {
		font-family: inherit;
		color: inherit;
	}

	button, input[type=button], input[type=submit] {
		cursor: pointer;
		border: none;
	}

	input::-ms-reveal, input::-ms-clear {
		display: none;
	}

	[disabled] {
		cursor: not-allowed;
	}
`