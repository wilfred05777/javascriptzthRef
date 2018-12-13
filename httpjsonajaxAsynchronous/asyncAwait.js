// ASYNC AWAIT
import function from './../react/packages/shared/describeComponentFrame';
import function from './../react/packages/react-native-renderer/src/NativeMethodsMixin';

movePlayer(100, 'Left')
    .then(()=> movePlayer(400, 'Left'))
    .then(()=> movePlayer(10, 'Right'))
    .then(()=> movePlayer(330, 'Left'))


async function playerStart(){
    const firstMove = await movePlayer(100, 'Left'); //pause
    const second = await movePlayer(400, 'Left'); //pause
    await movePlayer(10, 'Right'); //pause
    await movePlayer(330, 'Left'); //pause
} 

//promise 

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

// ASYNC AWAIT
// promise example on top is equal to async await
async function fetchUsers(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.jscon();
    console.log(data);
}


// another await example

// promise example 
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json())
    )).then(array => {
        console.log('users', array[0])
        console.log('posts', array[1])
        console.log('albums', array[2])
    }).catch('Oops');

// converting promise example to async await

const getData = async function(){
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch(err){
        console.log('oops');
    } 
    
}