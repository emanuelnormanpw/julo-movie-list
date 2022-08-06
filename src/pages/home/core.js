import View from './components';
import { MediaTrend } from './services/graphql';

const Home = (props) => {
    const a = 1;
    const { data, loading, error } = MediaTrend({
        mediaId: 1,
    });
    return (
        <View data={data} error={error} {...props} />
    );
};

export default Home;
