import Comment from './Comment';

function Comments(props) {

    return (
        <>
            { props.kidsComments.map(comment => 
                (<Comment comment={comment} key={comment.id}></Comment>)
            )}
        </>
    );
}

export default Comments;
