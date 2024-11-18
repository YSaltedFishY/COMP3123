import React from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function UserDetails() {
    const{userid} = useParams()
    var [user, setUser] = useState([])
    
    const getUsers = async() =>{
        //End point that want to be use
        const userUrl = `https://jsonplaceholder.typicode.com/users/${userid}`
        try {
            const response = await axios.get(userUrl)
            setUser(response.data)
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error)            
        }
    }

    useEffect(()=>{

        getUsers()

        return() =>{
            console.log("After useEffect")
        }
        //This will only load the component first loaded
    },[])

  return (
    <div>
      <h2>UserDetails</h2>
      {
        JSON.stringify(user)
      }

    </div>
  )
}
