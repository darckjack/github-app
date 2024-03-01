import RepoItem from "./repoItem.jsx";

const RepoList = ({repos}) => {
    return repos.map(repo=><RepoItem repo={repo} key={repo.id}/>);
}

export default RepoList;