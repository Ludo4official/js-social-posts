const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

console.log(posts);

const container = document.getElementById('container')

for (let index = 0; index < posts.length; index++) {
    const element = posts[index];

    container.innerHTML += `<div class="post">
                                <div class="post__header">
                                    <div class="post-meta">                    
                                        <div class="post-meta__icon">
                                        <img class="profile-pic" src="${element.media}" alt="${element.author.name}">                    
                                        </div>
                                        <div class="post-meta__data">
                                            <div class="post-meta__author">${element.author.name}</div>
                                            <div class="post-meta__time">${element.created}</div>
                                        </div>                    
                                    </div>
                                </div>
                                <div class="post__text">${element.content}
                                </div>
                                    <div class="post__image">
                                        <img src="${element.media}" alt="">
                                    </div>
                                <div class="post__footer">
                                    <div class="likes js-likes">
                                        <div class="likes__cta">
                                            <a class="like-button  js-like-button" data-postid="1">
                                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                <span class="like-button__label">Mi Piace</span>
                                            </a>
                                        </div>
                                        <div class="likes__counter">
                                            Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                                        </div>
                                    </div> 
                                </div>`          

}

let likeButton = document.querySelectorAll('.js-like-button')
const likedPosts = []
let likesCounter = document.querySelector('js-likes-counter');
let likesCounterOne = document.getElementById('like-counter-1')

likeButton.forEach((singleButton, index) => {

    singleButton.addEventListener('click', 
    
        function() {
            
            console.log('Cliccato mi piace sul post numero:', index);
            this.classList.add('like-button--liked');
            likedPosts.push(index);
            console.log('Totale dei post ai quali hai messo mi piace:', likedPosts)

        }
    );
});












