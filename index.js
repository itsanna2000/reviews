const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://64.media.tumblr.com/12d0d8dedcc57836fbd589c3dfe28baa/04a215d92c16bfa5-8a/s400x600/108fe275709c12ee317c3b1531c65234e420733c.png",
        text: "1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://styles.redditmedia.com/t5_2upgy/styles/communityIcon_ojsjmqfbajqa1.png",
        text: "2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        id: 3,
        name: "rome season",
        job: "back end developer",
        img: "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/27/17/asset/6fb7244cbf3e/sub-buzz-6280-1653672969-7.png",
        text: "3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        id: 4,
        name: "sarah jones",
        job: "ux designer",
        img: "https://pbs.twimg.com/media/FgcVD04XEAoXVmj.jpg",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    }
];

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const text = document.getElementById('text')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    showReview()
});

function showReview() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;    
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showReview();
})

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showReview();
})