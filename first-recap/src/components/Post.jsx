const Post = ({ title, body }) => {
    return (
        <div className="post-card">
            <p id="author">{title}</p>
            <p id="content">{body}</p>
        </div>
    )
}


export default Post;