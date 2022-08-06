import { useState } from 'react';
import View from './components';
import { Media } from './services/graphql';

const Home = (props) => {
    const [getPerPage, setPerPage] = useState(10);
    const { data, loading, error, refetch } = Media({
        page: 1,
        perPage: getPerPage,
        type: 'ANIME',
        sort: 'FAVOURITES',
    });

    const loadMore = async () => {
        await setPerPage(getPerPage + 10);
        refetch();
    };
    return (
        <View data={data} loading={loading} loadMore={loadMore} error={error} {...props} />
    );
};

export default Home;
