function createPost() {
    const input = document.getElementById("postInput");

    if (input.value.trim() === "") {
        alert("Please enter a post");
        return;
    }

    const posts = document.getElementById("posts");

    const post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
        <h3>Sakthi Sree</h3>
        <p>${input.value}</p>

        <button onclick="likePost(this)">
            ❤️ Like <span>0</span>
        </button>

        <div class="comment-section">
            <input type="text" placeholder="Add Comment">
            <button onclick="addComment(this)">Comment</button>
            <ul></ul>
        </div>
    `;

    posts.prepend(post);

    input.value = "";
}

function likePost(button) {
    let count = button.querySelector("span");
    count.textContent = parseInt(count.textContent) + 1;
}

function addComment(button) {
    const commentInput =
        button.parentElement.querySelector("input");

    const commentList =
        button.parentElement.querySelector("ul");

    if (commentInput.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = commentInput.value;

    commentList.appendChild(li);

    commentInput.value = "";
}