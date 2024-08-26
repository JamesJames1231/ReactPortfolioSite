import "./cards.css";
import Image from 'react-bootstrap/Image';

import Data1 from './1.json';



function App({vari}) {

    if(vari == 0){
        return (
            <div class="wrapper">
                <div class="scroll-cards">
                    {Data1.one.map((cards, cardID)=> (
                        <article class="scroll-cards__item" aria-label="Wie - 1">
                            <h2>{cards.name}</h2>
                            <div class="in">
                                <p>{cards.value}</p>
                                <Image src="page1.png" className="image" width={350} height={300} fluid />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        )
    }
    else if(vari == 1){
        return (
            <div class="wrapper">
                <div class="scroll-cards">
                    {Data1.two.map((cards, cardID)=> (
                        <article class="scroll-cards__item" aria-label="Wie - 1">
                            <h2>{cards.name}</h2>
                            <div class="in">
                                <p>{cards.value}</p>
                                <Image src="page1.png" className="image" width={350} height={300} fluid />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div class="wrapper">
            <div class="scroll-cards">
                {Data1.three.map((cards, cardID)=> (
                    <article class="scroll-cards__item" aria-label="Wie - 1">
                        <h2>{cards.name}</h2>
                        <div class="in">
                            <p>{cards.value}</p>
                            <Image src="page1.png" className="image" width={350} height={300} fluid />
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default App;
