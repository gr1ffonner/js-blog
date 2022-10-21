getPosts().then(renderPosts)

function getPosts() {
    return fetch('data.json').then(response => response.json())
}

function renderPosts(posts) {
    for (const post of posts) {
        let h2 = document.createElement("h2")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let image = document.createElement('img')

        image.src = post.image
        h2.innerText = post.name
        p1.innerText = post.text
        p2.innerText = post.subtext

        postList.append(image, h2, p1, p2)
    }
}

