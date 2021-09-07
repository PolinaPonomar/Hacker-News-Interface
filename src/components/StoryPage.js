function  StoryPage(props) {
    console.log(props.openStory);
    return (
        <p>{props.openStory.title}</p>
    );
}

export default  StoryPage;
