import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/Layout/NavBar'
import Footer from './Components/Layout/Footer'
import CursorFollower from './Components/Layout/CursorFollower'
import Home from './Components/Home'



export default function App() {
	return (
		<Router>
			<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
				<NavBar />
				<CursorFollower />
				<main style={{ flexGrow: 1 }}>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	)
}
