import './App.css';
import {ReactComponent as RevivirLogo } from '../src/assets/images/revivirlogo.svg';

function App() {
  return (
    <div className='logo-container'>
      <RevivirLogo className='logo'/>
     {/* <img src={comingSoon} alt='Studio Revivir: Web Design and Development Website coming soon!'></img>*/}
    </div>
  );
}

export default App;
