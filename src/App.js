import './App.css';
import { client } from './ApolloClient/client';
import { ApolloProvider } from '@apollo/client';
import { Layout, Container } from 'commons/layout';
import { Global, css } from '@emotion/react';
import { Fonts } from 'commons/fonts';

import Header from 'commons/header';
import Home from './pages/home';

function App() {
    return (
        <div className="App">
            <ApolloProvider client={client}>
                <Global
                    styles={Fonts}
                />
                <Layout>
                    <Container>
                        <Header />
                        <Home />
                    </Container>
                </Layout>
            </ApolloProvider>
        </div>
    );
}

export default App;
