import PartComponent from '../../components/Main/PartComponent';


const PartContainer = ({onClick, id, onHandleMouseOver, onHandleMouseLeave, partInfo}) => {
    
    return(
        <>
            <PartComponent 
                partInfo={partInfo}
                id={id}
                onClick={onClick}
                onHandleMouseOver={onHandleMouseOver}
                onHandleMouseLeave={onHandleMouseLeave}/>
        </>
    );
}

export default PartContainer;