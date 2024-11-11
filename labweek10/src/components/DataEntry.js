import React, { Component } from 'react'

export default class DataEntry extends Component{

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          fullName: '',
          address: '',
          address2:'',
          city: '',
          postalCode: '',
          submit: false
        }
        this.province = ['Alberta','British Columbia','Manitoba',
          'New Brunswick','Newfoundland and Labrador','Nova Scotia',
          'Ontario','Prince Edward island','Quebec','Saskatchewan']
      }
    
      handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
          submit: true
        })
        console.log(this.state.submit)
        console.log(this.state.address2)
      };
    
      render() {
        return (
          <div>
            <h2>Data Entry Form</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Email:</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleInput} required/>
                <label>Full Name:</label>
                <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleInput} required/>
              </div>
              <div>
                <label>Address:</label>
                <input type="text" name="address" value={this.state.address} onChange={this.handleInput} required />
              </div>
              <div>
                <label>Address2:</label>
                <input type="text" name="address2" value={this.state.address2} onChange={this.handleInput}/>
              </div>
              <div>
                <label>City:</label>
                <input type="text" name="city" value={this.state.city} onChange={this.handleInput} required/>
                <label>Province:</label>
                <select name="province"onChange={this.handleInput}>
                  {
                            this.province.map((pnm) => (
                                <option key={pnm}>{pnm}</option>
                            ))
                            }
                  </select>
                <label>Postal Code:</label>
                <input type="text" name="postalCode" value={this.state.postalCode} onChange={this.handleInput} required/>
              </div>
              <button type="submit">Submit</button>
            </form>

            {this.state.submit && (
                <div style={{ marginTop: '20px' }}>
                  <h3>Submitted Data:</h3>
                  <p><strong>Email:</strong> {this.state.email}</p>
                  <p><strong>Full Name:</strong> {this.state.fullName}</p>
                  <p><strong>Address:</strong> {this.state.address}</p>
                  {this.state.address2 != '' && (
                    <p><strong>Address 2:</strong> {this.state.address2}</p>
                  )}
                  <p><strong>City:</strong> {this.state.city}</p>
                  <p><strong>Province:</strong> {this.state.province}</p>
                  <p><strong>Postal Code:</strong> {this.state.postalCode}</p>
                </div>
            )}
    
          </div>
          
        );
    }
}