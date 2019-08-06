import React,{Component} from 'react';
import FrontPage from './Pages/frontPage'
import AddBalance from './Pages/addBalance'

class App extends Component {
  render() {
    return (
      <div className="App">
       <FrontPage/>
        <AddBalance/>
      </div>
    );
  }

}

export default App;
