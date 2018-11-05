import React, { Component } from 'react';
import ListItem from 'components/ListItem';
// import { getEmployees } from './api/rewardgateway'
import employeesMockData from 'api/__mockData__/employees.json'

class App extends Component {
  
  state = {
    employess: []
  }

  componentDidMount() {
    // getEmployees()
    //   .then(data => {
    //     // set employees state 
    //   })
    //   .catch(err => console.warn(err))

    this.setState({
      employees: employeesMockData.slice(0, 100)
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Employees</h1>
        <div className="container">
          { this.state.employees &&
            <>
              <div className="total">Showing {this.state.employees.length} results</div>
              <ul>
                {
                  this.state.employees.map((item, key) => (
                    <ListItem
                      name={item.name}
                      avatar={item.avatar}
                      title={item.title}
                      company={item.company}
                      bio={item.bio}
                    />
                  ))
                }
              </ul>
            </>
          }
        </div>
      </div>
    );
  }
}

export default App;
