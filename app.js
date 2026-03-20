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

function getFeed() {
    console.log(postArray)
}

let feedCon = document.getElementById("feed-container");

function renderFeed() {
    feedCon.textContent = ""
    for (let i = 0; i < postArray.length; i++) {
        let userfeed = document.createElement("div")
        let contfeed = document.createElement("div")
        let likefeed = document.createElement("div")
        let likebtn1 = document.createElement("button")

        likebtn1.textContent = "Likes"
        likebtn1.style.padding = "6px 12px"
        likebtn1.style.backgroundColor = "lightgrey"
        likebtn1.style.marginBottom = "20px"
        

        likebtn1.addEventListener("click", function() {
            postArray[i].likes++
            likefeed.textContent = postArray[i].likes
        })


        userfeed.textContent = postArray[i].username
        contfeed.textContent = postArray[i].content
        likefeed.textContent = postArray[i].likes

        feedCon.append(userfeed)
        feedCon.append(contfeed)
        feedCon.append(likefeed)
        feedCon.append(likebtn1)
    }
}

let subuserinfo = document.getElementById("userinfo")
let subpostinfo = document.getElementById("postinfo")
let subpostbtn = document.getElementById("postbtn")

subpostbtn.addEventListener("click", function() {
    createPost(subuserinfo.value,subpostinfo.value)
    renderFeed()
    subuserinfo.value = ""
    subpostinfo.value = ""
})

createPost("vince", "Playing 18 holes on Friday!")
createPost("ally", "Taking the cats for a walk!")
// createPost("sookie","Where's my cricket!")
// createPost("Nadja", "Lets watch Intersteller!")
// createPost("Lilith", "Looking for a new bonnet!")
// createPost("Hina", "Has anyone seen Fish? Or lambchop?")

// likePost(3)
// likePost(2)

sortByLikes()
// getFeed()
getPostByUser("sookie")

renderFeed()





