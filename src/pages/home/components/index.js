const HomeView = (props) => {
    const { data, error } = props;
    console.log('>>', data, error);
    return (
        <div>Home</div>
    );
};

export default HomeView;
