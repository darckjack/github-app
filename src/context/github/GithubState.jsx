import {useReducer} from 'react'
import axios from 'axios'
import githubContext from './githubContext'
import githubReducer from './githubReducer'
import { SEARCH_USERS,SET_LOADING,CLEAR_USERS,GET_REPOS,GET_USER } from '../types'

const GithubState = props => {
  const initialState = {
    users:[],
    user:{},
    repos:[],
    loading:false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search User
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };


  // Get USer
  const getUser = async userName => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    dispatch({type:GET_USER, payload:res.data});
  };

  // Get Repos
  const getUserRepos = async userName => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc`
    );

    dispatch({
      type:GET_REPOS,
      payload:res.data,
    });
  };


  // Clear Users
  const userClear = () => dispatch({type:CLEAR_USERS});

  // Set Loading
  const setLoading = () => dispatch({type:SET_LOADING})

  return <githubContext.Provider 
    value={
      {users: state.users,
      user: state.user,
      repos:state.repos,
      loading: state.loading,
      searchUsers,
      userClear,
      getUser,
      getUserRepos
      }
    }
  >
  {props.children}
  </githubContext.Provider>
}


export default GithubState;