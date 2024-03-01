import { useEffect ,useContext } from 'react'
import Spinner from '../layout/spinner.jsx'
import githubContext from '../../context/github/githubContext'
import {Link, useParams} from "react-router-dom";
import RepoList from "../repos/repoList.jsx";

const User = () => {
    const context = useContext(githubContext)
    let {username} = useParams();

    useEffect(() => {
        context.getUser(username);
        context.getUserRepos(username);
    },[]);

    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        html_url,
        followers,
        following,
        login,
        public_repos,
        public_gists,
        hireable,
        company,
    } = context.user;

    if(context.loading) return <Spinner/>;

    return (
        <>
            <Link to="/" className="btn btn-light">
                Back To Search
            </Link>
            Hireable: {' '} {hireable?(<i className="fas fa-check text-success"></i>):(<i className="fas fa-times-circle text-danger"></i>)}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt="avatar" className="round-img" style={{ width:'150px' }}/>
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (
                        <>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </>
                    )}
                    <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && (
                                <>
                                    <strong>Username: </strong> {login}
                                </>
                            )}
                        </li>
                        <li>
                            {company && (
                                <>
                                    <strong>Company: </strong> {company}
                                </>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <>
                                    <strong>Website: </strong> {blog}
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>

            <RepoList repos={context.repos}/>
        </>
    )
}


export default User;
