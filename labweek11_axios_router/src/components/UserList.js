import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class UserList extends Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }
    
    getUsers = async() =>{
        //End point that want to be use
        const userUrl = "https://jsonplaceholder.typicode.com/users"
        try {
            const response = await axios.get(userUrl)
            // console.log(response.data)
            this.setState({users:response.data})
            return response.data
        } catch (error) {
            console.log(error)            
        }
    }

    //this will only call one time
    componentDidMount(){
        this.getUsers()
    }

    submitData = async () =>{
        try {
            await axios.post("https://jsonplaceholder.typicode.com/users", 
                {
                    username: "admin",
                    password: 'pwd'
                })
            
        } catch (error) {
            console.log(error)
        }
        
    }


  render() {
    return (
      <div>
        <h3>UserList</h3>
        {
            
            this.state.users.map((user) => (
                <p key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></p>
            ))
        }
        <button onClick={this.submitData}>add</button>
      </div>
    )
  }
}
