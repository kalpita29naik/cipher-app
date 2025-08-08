import './App.css';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import EncryptionScreen from './components/EncryptionScreen';
import DecryptionScreen from './components/DecryptionScreen';

function App() {
  const [showEncryption, setShowEncryption] = useState(false);
  const toggleScreen = () => {
    setShowEncryption(!showEncryption);
  };
  return (
    <div className='text-center bg-gradient-to-br from-[#fce4ec] to-[#f8bbd0] min-h-screen'>
      <div className="flex flex-row items-center justify-center pt-10 text-[#E55050] font-bold lg:text-4xl text-3xl gap-4 font-mono">
        <h1>Encryption</h1>
        <Switch
          checked={showEncryption}
          onChange={toggleScreen}
          color='default'
          sx={{ transform: 'scale(1.5)' }}
        />
        <h1>Decryption</h1>
      </div>
      {showEncryption ? (<DecryptionScreen />) : (<EncryptionScreen />)}
    </div>
  )


}

export default App;
