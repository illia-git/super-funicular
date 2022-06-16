// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

// import HeaderLayout from './layouts/header/HeaderLayout';
// import MainLayout from './layouts/main/MainLayout';

import CoursesPage from './pages/CoursesPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='*' element={<Navigate to='/login' replace />} />
				<Route path='/courses' element={<CoursesPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/registration' element={<RegistrationPage />} />
				{/* <Route index element={<CoursesPage />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
