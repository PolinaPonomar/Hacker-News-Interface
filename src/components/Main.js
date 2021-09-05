import Story from './Story';

function Main(props) {
    return (
        <>
            {
                props.storiesIds.slice(0,100).map(id => 
                    ( <Story id={id} key={id}/> )
                )
            }
        </>
    );
}

export default Main;
