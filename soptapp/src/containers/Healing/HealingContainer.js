import HealingComponent from '../../components/Healing/HealingComponent';
import { useEffect, useState, useRef} from 'react';
const HealingContainer = ({history}) => {
    console.log("healing container")
    const [count,setCount] = useState(0);
    useEffect (() => {
        console.log(count)
    }, [count])
    const onHandleClick = () => {
        history.push('/post');
    }
    return(
        <>
            <HealingComponent onClick = {onHandleClick} count = {count} setCount = {() => setCount(count => count+1)}/>
        </>
    )
}

export default HealingContainer;