import { useState } from 'react';
import View from './components';
import { Media } from './services/graphql';

const Home = (props) => {
    const [getPerPage, setPerPage] = useState(12);
    const { data, loading, error, refetch } = Media({
        page: 1,
        perPage: getPerPage,
        type: 'ANIME',
        sort: 'FAVOURITES',
    });

    const loadMore = async () => {
        await setPerPage(getPerPage + 12);
        refetch();
    };
    return (
        <View data={data} loading={loading} loadMore={loadMore} error={error} {...props} />
    );
};

export default Home;
