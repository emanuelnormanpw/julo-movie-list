import View from './components';
import { MediaSortbyID } from './services/graphql';
import ListContext from 'commons/provider/animeProvider';
import { useContext } from 'react';

const Wishlist = (props) => {
    const { setMyAnime, myAnime } = useContext(ListContext);

    console.log('>>', myAnime);

    const { data, loading, error } = MediaSortbyID({
        id_in: [...myAnime.data],
    });

    const removeWishlist = (id) => {
        const filtered = myAnime.data.filter((item) => item !== id);
        localStorage.setItem('data', JSON.stringify(filtered));
        setMyAnime({
            data: filtered,
        });
    };

    return (
        <View data={data} loading={loading} error={error} removeWishlist={removeWishlist} {...props} />
    );
};

export default Wishlist;
