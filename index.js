let postArray = [];

function createPost(username, content) {
    let post = {
        id: 1,
        username: username,
        content: content,
        likes: 0,
        timestamp: 12342322
    };
    
    postArray.push(post)
}

createPost("vice", "playing golf on Friday!")



console.log(postArray)