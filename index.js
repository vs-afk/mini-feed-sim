let postArray = [];

function createPost(username, content) {
    let post = {
        id: 0,
        username: username,
        content: content,
        likes: 0,
        timestamp: 12342322
    };
    if (postArray.length >= 0 ) {
        post.id = post.id + 1
    }
    postArray.push(post)
}

createPost("vice", "playing golf on Friday!")
createPost("ally", "Taking the cats for a walk!")


console.log(postArray)