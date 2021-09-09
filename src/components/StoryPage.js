import { Link } from 'react-router-dom';
import {timeConverter} from '../utils/utils';
import { Card, Button, ListGroup } from 'react-bootstrap';
import Comment from './Comment';

function  StoryPage(props) {
    return (
        <main className="content">
            <Card className="story-card">
                <Card.Body>
                    <Card.Title className="story-card__title">{props.openStory.title}</Card.Title>
                    <Card.Text>Posted {timeConverter(props.openStory.time)} by: {props.openStory.by}</Card.Text>
                    <a href={props.openStory.url} target="_blank" rel="noreferrer">
                        <Button variant="primary">Learn more</Button>
                    </a>
                </Card.Body>
            </Card>
            <Card className="story-comments">
                {props.openStory.kids ?
                (<>
                    <Card.Header>Сommented {props.openStory.kids.length} times</Card.Header>
                    <ListGroup variant="flush">
                        {
                            props.openStoryComments.map(comment => 
                                (<Comment comment={comment} key={comment.id}></Comment>)
                            )
                        }
                    </ListGroup>
                </>
                ) : (
                    <Card.Header>No comments yet :(</Card.Header>
                )}
            </Card>
        </main>      
    );
}

export default  StoryPage;
