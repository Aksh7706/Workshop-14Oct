const posts = [
    { title: 'Blog One', body: 'This is my first blog' },
    { title: 'Blog Two', body: 'This is my second blog' },
];

function getPosts() {
    setTimeout(function() {
        posts.forEach(function(post) {
            console.log(post.title);
        })
    }, 1000);
}

// getPosts();

// console.log("I am learning about asynchronous fnxn");

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000);
// }

// createPost({ title: 'Blog Three', body: 'This is my third blog' });


// With Callback ////////////////////////////////////////////////////////

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// createPost({ title: 'Blog Three', body: 'This is my third blog' }, getPosts);


// Promises /////////////////////////////////////////////////////////////

// function createPost(post) {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;

//             if (!error) {
//                 resolve(console.log('Data updated at database'));
//             } else {
//                 reject('Error: You are totally fuc**d up')
//             }
//         }, 2000);
//     });
// }

// createPost({ title: 'Blog Three', body: 'This is my third blog' }).then(getPosts).catch(err => console.log(err));


// Async / Await ////////////////////////////////////////////////////////

// async function getData() {
//     await createPost({ title: 'Blog Three', body: 'This is my third blog' });
//     getPosts();
// }

// getData();