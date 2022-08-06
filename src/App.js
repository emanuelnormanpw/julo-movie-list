import './App.css';
import { client } from './ApolloClient/client';
import { ApolloProvider } from '@apollo/client';

import Home from './pages/home';

function App() {
    return (
        <div className="App">
            <ApolloProvider client={client}>
                <Home />
            </ApolloProvider>
        </div>
    );
}

export default App;
