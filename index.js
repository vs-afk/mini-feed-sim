let postArray = [];

function createPost(username, content) {
    let post = {
        id: 0,
        username: username,
        content: content,
        likes: 0,
        timestamp: 0
    };

    for (let i = 0; i <= postArray.length; i++) {
        post.id = i;
    }

    post.timestamp = post.id * 2

    postArray.push(post);
}

createPost("vice", "playing golf on Friday!")
createPost("ally", "Taking the cats for a walk!")
createPost("sookie","Where's my cricket!")
createPost("Nadja", "Lets watch Intersteller!")




function likePost(x) {
    for (let n = 0;n < postArray.length; n++ ) {
        if (n === x) {
            post.id =+1
        };
    }
}

likePost(3)

console.log(postArray)
