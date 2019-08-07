import React,{Component} from 'react';
import Header from '../organisms/Header'
import '../../App.css' 
import image from '../Images/banner.jpg'


class frontPage extends Component {
  render() {
    return (
      <div className="App">
        <Header />        
       <img className="col-xs-12 col-sm-12 col-md-12" src={image} alt="HPD_Friendshipday_1" />
       {/* <NavBar /> */}
       {/* <Content /> */}
      {/* <Footer/> */}
        {/* <img className="col-xs-12 col-sm-12 col-md-12" src={image} alt="HPD_Friendshipday_1" />
        <NavBar />
        <Content />
        <Footer/> */}
      </div>
    );
  }

}

export default frontPage;
