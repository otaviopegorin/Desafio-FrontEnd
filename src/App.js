import React, { Component } from "react";
import Header from "./components/header";
import axios from "axios";
import Form from "./components/form";
import "./App.css";
import RepoList from "./components/repoList";
class App extends Component {
  state={
    user:"",
    repos:[],
    error:"",
    loading:false
  };

  changeUser = user => {
    this.setState({user})
  }

  searchUser = async () => {
    const {user} = this.state;
    this.setState({loading:true});
    try{
      const{data:repos}=await axios.get("https://api.github.com/users/"+user+"/repos");
      console.log(repos);
      this.setState({repos, error:"",loading:false});
    }
    catch(error){
      this.setState({error:"Usuário não encontrado!!",
    repos:[],loading:false});
    }

   
  }
  render() {
    return (
      <div className="app">
        <Header/>
        <Form
          changeUser={this.changeUser}
          user={this.state.user}
          error={this.state.error}
          loading={this.state.loading}
          buttonAction={this.searchUser}
        />
        <RepoList repos={this.state.repos}/>
      </div>
    );
  }
}

export default App;
