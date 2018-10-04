import React, { Component } from 'react'; 
import './App.css';
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from './responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';

class App extends Component {
  render() {
    return (
      <div>
        <h2>My Breakpoints!</h2>
        
        <DesktopBreakpoint>
          <h3>DesktopBreakpoint!</h3>
          <img src="https://9to5mac.com/wp-content/uploads/sites/6/2018/03/apple-13-inch-macbook-air.jpg"></img>
        </DesktopBreakpoint>

        <TabletBreakpoint>
          <h3>TabletBreakpoint!</h3>
          <img src="https://multimedia.bbycastatic.ca/multimedia/products/500x500/103/10389/10389497.jpg"></img>
        </TabletBreakpoint>

        <PhoneBreakpoint>
          <h3>PhoneBreakpoint</h3>
          <img src="https://www.t-mobile.nl/Consumer/media/images/shop/telefoons/apple-iphone-x-64gb-zwart-duofront.png"></img>
        </PhoneBreakpoint>
      </div>
    );
  }
}

export default App;
