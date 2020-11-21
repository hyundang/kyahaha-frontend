import HealingContainer from '../containers/Healing/HealingContainer';
import LoadingPage from './LoadingPage';

const HealingPage = ({history}) => {
    return(
        <>
            <HealingContainer history = {history}/>
        </>
    )
}

export default HealingPage;