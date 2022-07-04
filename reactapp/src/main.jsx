import { render } from 'preact';
import { Home } from './Pages/Home';
import './Styles/global.css';
import './Pages/Home/styles.css'

render(<Home />, document.getElementById('app'))
