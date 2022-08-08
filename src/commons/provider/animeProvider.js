import { createContext } from 'react';

const MyMovieContext = createContext({
    myAnime: [],
    listMovie: [],
    setListMovie: () => {},
    setMyAnime: () => {},
});

export default MyMovieContext;
