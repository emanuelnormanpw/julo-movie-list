import './App.css';
import { client } from './ApolloClient/client';
import { ApolloProvider } from '@apollo/client';
import { Layout, Container } from 'commons/layout';
import { Global, css } from '@emotion/react';
import { Fonts } from 'commons/fonts';

import { BrowserRouter as Routes,
    Route,
    Outlet,
    Link,
    useRoutes } from 'react-router-dom';

import Header from 'commons/header';
import Home from './pages/home';
import Navigation from 'commons/navigation';
import NotFound from 'commons/notFound';
import Detail from 'pages/detail';

const Router = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/detail/:movieId', element: <Detail /> },
        { path: '*', element: <NotFound /> },
    ]);
    return routes;
};

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
                        <Routes>
                            <Router />
                        </Routes>
                    </Container>
                    <Navigation />
                </Layout>
            </ApolloProvider>
        </div>
    );
}

export default App;
