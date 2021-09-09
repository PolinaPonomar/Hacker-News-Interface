import Story from './Story';
import { Spinner } from 'react-bootstrap';

function Main(props) {
    return (
        <main className="content">
            {props.isSpinnerActive ? (
                <Spinner className="spinner" animation="border" variant="dark"/>
            ) : (
                props.stories.map(item => {
                    if (item !== null) {
                        return ( <Story story={item} key={item.id} onOpenStory={props.onOpenStory}/> )
                    }
                })
            )}
            
        </main>
    );
}

export default Main;
