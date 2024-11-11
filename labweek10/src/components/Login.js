import React, { Component } from "react"

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
            firstname: '',
            lastname: '',
            city:''
        }
        this.countries = ['Canada','USA','Mexico']
    }

    handleClick(e){
        //preventDefault needed for each event
        e.preventDefault();
        alert(`Hello World : ${e.target.name} - ${e.target.value}`)
        
    }

    handleInput = (e) =>{
        e.preventDefault();
        const {name, value} = e.target
        
        this.setState({
            //this keeps the older object
            ...this.state,
            [name]: value
        })

        console.log(`${this.state.firstname}`)
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <div>
                
                <h2>Login</h2>
                    <form onSubmit={this.handleSubmit}>
                    First Name: <input type='test' name='firstname' value={this.state.firstname} onChange={this.handleInput} placeholder='Enter first name'></input> <br/>
                    Last Name: <input type='test' name='lastname' value={this.state.lastname} onChange={this.handleInput} placeholder='Enter last name'></input> <br/>
                    Country: <select name='country' onChange={this.handleInput}>
                        {
                            this.countries.map((cnm) => (
                                <option key={cnm}>{cnm}</option>
                            ))
                        }
                    </select>
                    City: <select name ='city' value={this.state.city} onChange={this.handleInput}>
                        <option value='TOR'>Toronto</option>
                        <option value='VAN'>Vancouver</option>
                        <option value='MKR'>Markham</option>
                    </select>
                    <input type='submit' value='Login'/>
                    
                    </form>
                    <button value='TEST' name='btnSubmit' onClick={this.handleClick}>Submit</button>
                </div>




                <p>{ this.state.firstname}</p>
                <p>{JSON.stringify(this.state)}</p>
            </div>

            
        )
    }
}