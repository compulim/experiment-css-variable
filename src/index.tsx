import { render } from 'react-dom';

import App from './ui/App';

var rootElement = document.getElementById('root');

rootElement && render(<App />, rootElement);
