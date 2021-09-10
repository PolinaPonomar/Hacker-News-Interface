import { useState, useEffect } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import Comment from './Comment';
import {timeConverter} from '../utils/utils';

function  StoryPage(props) {
    const [clickToUpdate, setClickToUpdate] = useState(false);
    const [updateOnceAMinute, setUpdateOnceAMinute] = useState(false);

    useEffect(() => {
        props.onUpdateComments(props.openStory);
    }, [clickToUpdate]);

    useEffect(() => {
        setTimeout( () => {
            setUpdateOnceAMinute(!updateOnceAMinute);
            props.onUpdateComments(props.openStory);
        }, 60000);
    }, [updateOnceAMinute]);

    function handleClick() {
        setClickToUpdate(!clickToUpdate);
    };
    
    return (
        <main className="content">
            <Card className="story-card">
                <Card.Body>
                    <Card.Title className="story-card__title">{props.openStory.title}</Card.Title>
                    <Card.Text>
                        <span className="text-accent">Posted </span>{timeConverter(props.openStory.time)} 
                        <span className="text-accent"> by </span>{props.openStory.by}
                    </Card.Text>
                    <a href={props.openStory.url} target="_blank" rel="noreferrer">
                        <Button variant="primary">Learn more</Button>
                    </a>
                </Card.Body>
            </Card>
            <Card className="story-comments">
                {props.openStory.kids ?
                (<>
                    <Card.Header className="story-comments__header">
                        <p className="story-comments__title">Сommented {props.openStory.kids.length} times</p>
                        <button type="button" className="refresh-button refresh-button__small" onClick={handleClick}></button>
                    </Card.Header>
                    <ListGroup variant="flush">
                        {
                            props.openStoryComments.map(comment => 
                                (<Comment 
                                    comment={comment} 
                                    key={comment.id}>
                                </Comment>)
                            )
                        }
                    </ListGroup>
                </>
                ) : (
                    <Card.Header className="story-comments__header">
                        <p className="story-comments__title">No comments yet :(</p>
                        <button type="button" className="refresh-button refresh-button__small" onClick={handleClick}></button>
                    </Card.Header>
                )}
            </Card>
        </main>      
    );
}

export default  StoryPage;
