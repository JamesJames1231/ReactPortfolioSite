import "./background.css";
import {Image} from 'react-bootstrap';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({duration: 1200});
  }, [])

  return (
    <div className="homepage" data-aos="fade-out">
      <div className="innerHome">
        <div className="scroll" data-aos="fade" data-aos-once="false" data-aos-mirror="true" data-aos-duration="1000">
          <h1>Scroll Down</h1>
        </div>
        <div className="title">
          <Image src={"james.jpg"} width={300} className="imag"></Image>
        </div>
        
        <div className="leftTop appear" data-aos="fade-right" data-aos-anchor="#trigger-left">
          Hey, I'm James! 
        </div>

        <div class="rightTop appear" data-aos="fade-left" data-aos-anchor="#trigger-right">
          Gradute Developer!
        </div>

        <div class="middle appear" data-aos="fade-left" data-aos-anchor="#trigger-middle">
          Experience In Development,<br/>Support and Infastructure!
        </div>
      </div>

      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item" id="trigger-left">
        5
        <span>trigger left</span>
      </div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item" id="trigger-right">
        8
        <span>trigger right</span>
      </div>
        <div class="item">9</div>
        <div class="item">10</div>

        <div class="item" id="trigger-middle">
        13
        <span>trigger right</span>
        <div class="item" id="disappear">
        13
        <span>trigger right</span>
        </div>
      </div>
    </div>
  );
}

export default App;
