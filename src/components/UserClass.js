import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state ={
        userInfo:{
            name: "",
            location: "Brno",
            url:"",
        avatar_url:""
        }
        
    }
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/tkayy729");
    const json = await data.json();
    console.log("json", json)
    this.setState({userInfo: json});
  }
  render() {
    const { login, location , url , avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img alt="picture" src ={avatar_url || null}/>
        <h2>Name: {login}</h2>
        <h3>Location: {location || "BRNO"}</h3>
        <h4>Contact: {url}</h4>
      </div>
    );
  }
}

export default UserClass;
