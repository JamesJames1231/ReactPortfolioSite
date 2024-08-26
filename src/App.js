import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from "./common/navbar.js";

import LeftText from "./jumbotron/text.js";

import Cards from "./examples/cards.js";
import { useEffect, useState } from 'react';

function App() {
  const [chosen, setChosen] = useState(0);

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
      { name: 'University', value: '1' },
      { name: 'Personal', value: '2' },
      { name: 'Profesional', value: '3' },
  ];

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <div className='jumbo'>
        <Navbar className="nav"/>          
        <LeftText/>
      </div>

      <div className='main'>
        <div className='buttonGroup'>
            <h4>My Example Pojects</h4>
            <ButtonGroup>
                {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? 'outline-danger' : 'outline-info'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onClick={() => setChosen(idx)}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                    {radio.name}
                </ToggleButton>
                ))}
            </ButtonGroup>
        </div>
        <Cards vari={chosen}/>
      </div>
    </div>
  );
}

export default App;
