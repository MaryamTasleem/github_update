// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Simulate an API request
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password })
//     })
//     .then(response => {
//         if (response.ok) {
//             return response.json(); // If response is successful, parse JSON
//         }
//         throw new Error('Login failed');
//     })
//     .then(data => {
//         // Simulate a successful login by showing a welcome message
//         alert(`Welcome, ${username}!`);
//         console.log('Login successful', data);
//     })
//     .catch(error => {
//         // Display an error message
//         document.getElementById('message').innerText = error.message;
//     });
// });



// Simulated posts data
const posts = [
    { id: 1, content: 'This is my first post!', likes: 0, comments: [] },
    { id: 2, content: 'Just had a great lunch.', likes: 0, comments: [] },
    { id: 3, content: 'Excited for the weekend!', likes: 0, comments: [] }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login success
    if (username && password) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('timelineContainer').style.display = 'flex';
        loadPosts();
    } else {
        document.getElementById('message').innerText = 'Invalid credentials';
    }
});

function loadPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Clear previous posts

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <p>${post.content}</p>
            <p><strong>Likes:</strong> <span id="likes-${post.id}">${post.likes}</span></p>
            <button onclick="likePost(${post.id})">Like</button>
            <div>
                <input type="text" class="comment-input" placeholder="Add a comment..." id="comment-${post.id}">
                <button onclick="addComment(${post.id})">Comment</button>
            </div>
            <ul id="comments-${post.id}"></ul>
        `;
        postsContainer.appendChild(postDiv);
    });
}

function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    post.likes++;
    document.getElementById(`likes-${post.id}`).innerText = post.likes;
}

function addComment(postId) {
    const commentInput = document.getElementById(`comment-${postId}`);
    const commentText = commentInput.value;

    if (commentText) {
        const post = posts.find(p => p.id === postId);
        post.comments.push(commentText);
        loadPosts();
        commentInput.value = ''; // Clear input
    }
}

document.getElementById('logoutBtn').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'flex';
    document.getElementById('timelineContainer').style.display = 'none';
});



























