import './App.css';
import { client } from './ApolloClient/client';
import { ApolloProvider } from '@apollo/client';
import { Layout, Container } from 'commons/layout';
import { Global, css } from '@emotion/react';
import { Fonts } from 'commons/fonts';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { BrowserRouter as Routes,
    Route,
    Outlet,
    Link,
    useRoutes } from 'react-router-dom';

import ListContext from 'commons/provider/animeProvider';
import Header from 'commons/header';
import Navigation from 'commons/navigation';
import NotFound from 'commons/notFound';
import Home from './pages/home';
import Detail from 'pages/detail';
import Wishlist from 'pages/wishlist';
import { useState } from 'react';

config.autoAddCss = false;

const Router = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/detail/:movieId', element: <Detail /> },
        { path: '/wishlist', element: <Wishlist /> },
        { path: '*', element: <NotFound /> },
    ]);
    return routes;
};

function App() {
    config.autoAddCss = false;
    const [myAnime, setMyAnime] = useState({
        data: JSON.parse(localStorage.getItem('data')) || [],
    });
    const [listMovie, setListMovie] = useState({
        loading: false,
        data: [],
    });
    return (
        <div className="App">
            <ApolloProvider client={client}>
                <Global
                    styles={Fonts}
                />
                <Routes>
                    <ListContext.Provider value={{ myAnime, setMyAnime, listMovie, setListMovie }}>
                        <Layout>
                            <Container>
                                <Header />
                                <Router />
                            </Container>
                        </Layout>
                        <Navigation />
                    </ListContext.Provider>
                </Routes>
            </ApolloProvider>
        </div>
    );
}

export default App;
