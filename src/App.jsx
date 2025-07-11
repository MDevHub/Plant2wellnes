import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/Layout/NavBar'
import Footer from './Components/Layout/Footer'
import MainPage from './Components/MainPage'
// import WhatsAppButton from './Components/Layout/WhatsAppButton '



export default function App() {
	return (
		<Router>
			<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
				<NavBar />
				{/* <WhatsAppButton /> */}
				<main style={{ flexGrow: 1 }}>
					<Routes>
						<Route path="/" element={<MainPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	)
}
