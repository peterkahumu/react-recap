const Post = ({ title, body }) => {
    return (
        <div className="post-card">
            <p id="title">{title}</p>
            <p id="body">{body}</p>
        </div>
    )
}


export default Post;