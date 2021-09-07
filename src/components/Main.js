import Story from './Story';

function Main(props) {
    return (
        <main className="content">
            {
                props.stories.map(story => 
                    ( <Story story={story} key={story.id} onOpenStory={props.onOpenStory}/> )
                )
            }
        </main>
    );
}

export default Main;
