import Search from "../users/search.jsx";
import UserList from "../users/userList.jsx";
import Navbar from "../layout/navbar.jsx";

const Home = () =>
    <>
        <Navbar title="Github Search" icon="fab fa-github" />
        <Search />
        <UserList />
    </>

export default Home;