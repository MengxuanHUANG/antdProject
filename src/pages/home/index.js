import {PureComponent} from 'react';
import {SampleCard} from '../../components/sampleCard.js';

class HomePage extends PureComponent{
    render(){
        return(
            <div>
                <SampleCard/>
            </div>
        );
    }
}

export default HomePage;