
function adicionarLike() {
    likeCount++
    document.getElementById("likeCount").innerText = "Likes: " + likeCount;
}

function adicionarDislike() {
    dislikeCount++
    document.getElementById("dislikeCount").innerText = "Dislikes: " + dislikeCount;
    let likeCount = 0;
    let dislikeCount = 0;

}
