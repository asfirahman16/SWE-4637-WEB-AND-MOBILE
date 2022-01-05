import "./Book.css";

function Book(props){
    let vote_count = props.votes;
    console.log(props);
    
    function likeHandler(e){
        console.log("clicked " + props.name);
        //props.votes++;
        vote_count++;
        console.log(vote_count);
    }

    return(
        <div className="book"> 
            <img src={props.img_url} alt=""/>
            <h2>Name: {props.name}</h2>
            <p>description: {props.desc}</p>
            <span>price: {props.price}</span><br/>
            <span className="vote_count">Votes: {vote_count}</span>
            <div>
                <img onClick={likeHandler} src="assets/upvote.jpg" alt="" className="upvote_img"/>
            </div>
            {/*<p>{props.children}</p>*/}
        </div>
    )
}

export default Book; 