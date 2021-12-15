import React from "react";
import RepoItem from "./components";
const RepoList = ({repos}) =>(
    <div className="repoListContainer">
        {
            repos.map(repo=>(
                <RepoItem repo={repo}/>
            ))
        }
    </div>
)

export default RepoList;