import { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import View from './components';
import { Media } from './services/graphql';
import ListContext from 'commons/provider/animeProvider';

const Home = (props) => {
    const navigate = useNavigate();
    let [getPerPage, setPerPage] = useState(12);
    let [page, setPage] = useState(1);
    const { setListMovie, setMyAnime } = useContext(ListContext);
    const { data, loading, error } = Media({
        page: page,
        perPage: getPerPage,
        type: 'ANIME',
        sort: 'FAVOURITES',
    },
    {
        onCompleted: (data) => {
            setListMovie((prev) => {
                return {
                    ...prev,
                    data: [
                        ...data.Page.media,
                    ],
                };
            });
        },
    });

    let localStrorage = JSON.parse(localStorage.getItem('data'));

    const addToWishlist = (e, id) => {
        e.preventDefault();
        let arr = [];
        let lastID = 0;

        if (localStrorage) {
            let lastItem = localStrorage[localStrorage.length - 1];
            if (lastItem !== undefined) {
                lastID = parseInt(lastItem.id, 10) + 1;
            }
        }

        if (localStrorage === null) {
            arr.push(id);
            localStorage.setItem('data', JSON.stringify(arr));
            setMyAnime({
                data: arr,
            });
            navigate('/wishlist', { replace: true });
        } else {
            let findDuplicateID = localStrorage.includes(id) || false;

            if (!findDuplicateID) {
                arr = JSON.parse(localStorage.getItem('data'));
                arr.push(id);
                setMyAnime({
                    data: arr,
                });
                localStorage.setItem('data', JSON.stringify(arr));
                navigate('/wishlist');
            }
        }
    };
    const nextPage = () => {
        if (page <= data.Page.pageInfo.total) {
            setPage(page += 1);
            setPerPage(12);
            window.scrollTo(0, 0);
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(page -= 1);
            setPerPage(12);
            window.scrollTo(0, 0);
        }
    };

    return (
        <View
            page={page}
            nextPage={nextPage}
            prevPage={prevPage}
            data={data}
            loading={loading}
            addToWishlist={addToWishlist}
            error={error}
            {...props}
        />
    );
};

export default Home;
