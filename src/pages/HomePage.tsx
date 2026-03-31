import BlogList from "../components/BlogList";
import Header from "../components/Header";

const HomePage = () => {
    return (
        <div>
            <div className="h-screen bg-white">
                <Header/>
                <div className='relative mt-15'>
                    <BlogList/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;