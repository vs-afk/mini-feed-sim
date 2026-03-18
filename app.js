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


function likePost(x) {
    for (let i = 0; i <postArray.length; i++ ) {
        if (postArray[i].id === x) {
            postArray[i].likes++;
        }
    }
}

function sortByNewest() {
    postArray.sort((a,b) => b.timestamp - a.timestamp);
}

function sortByLikes() {
    postArray.sort((a,b) => b.likes - a.likes)
}

function getPostByUser(name) {
    let findName
    for (let i = 0; i < postArray.length; i++) {
        if (postArray[i].username === name) {
            findName = postArray[i].content;
            console.log(findName);
        }
    }
}

// function getFeed() {
//     console.log(postArray)
// }

let feedCon = document.getElementById("feed-container");

function renderFeed() {
    for (let i = 0; i <= postArray; i++) {
        i = document.createElement("p");
        
    }
}




createPost("vice", "playing golf on Friday!")
createPost("ally", "Taking the cats for a walk!")
createPost("sookie","Where's my cricket!")
createPost("Nadja", "Lets watch Intersteller!")

likePost(3)
likePost(2)

sortByLikes()
// getFeed()
getPostByUser("sookie")

renderFeed()



