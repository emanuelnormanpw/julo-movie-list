import { useState } from 'react';
import { useParams } from 'react-router-dom';
import View from './components';
import { detailMovie } from './services/graphql';

const Detail = (props) => {
    let params = useParams();
    const [getPerPage, setPerPage] = useState(12);
    const { data, loading, error, refetch } = detailMovie({
        page: 1,
        perPage: getPerPage,
        id: params.movieId,
    });

    return (
        <View data={data} loading={loading} error={error} {...props} />
    );
};

export default Detail;
