import Story from './Story';

function Main(props) {
    return (
        <main className="content">
            {
                props.storiesIds.slice(0,100).map(id => 
                    ( <Story id={id} key={id}/> )
                )
            }
        </main>
    );
}

export default Main;
