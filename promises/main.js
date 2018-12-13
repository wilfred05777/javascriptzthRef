el.addEventListener("click", submitForm);

//calback pyramid of doom
movePlayer(100, 'left', function(){
	movePlayer(400, 'left', function(){
		movePlayer(10, 'Right', function(){
			movePlayer(330, 'Left', function(){
			});
		});
	});
});


//another example 
grabTweets('twitter/wilfrederdo', (error, wilfredtweet)=>{
	if(error){
		throw Error;
	}
	displayTweets(wilfredtweets)
	grabTweets('Twitter/elonmusk', (error, elontweets)=>{
		if(error){
			throw Error;
		}
		displayTweets(elonTweets)
		grabTweets('twitter/vitalbuterin', (error,vitalikTweets)=>{
			if (error){
				throw Error;
			}
			displayTweets(vitalbuterinl)
		})
	})
})



// Promise syntax

const promise = new Promise((resolve, reject)=>{
	if (true){
		resolve('Stuff Worked');
	}
	else{
		reject('Error, it broke!');
	}
})

const promise2 = new Promise((resolve, reejct)=>{
	setTimeout(resolve, 100, 'Hi!')
})
const promise3 = new Promise((resolve, reejct)=>{
	setTimeout(resolve, 1000, 'Pookie!')
})
const promise4 = new Promise((resolve, reejct)=>{
	setTimeout(resolve, 3000, 'Is it me you are looking for?!')
})
// promise.then(result => console.log(result));

Promise.all([promise, promise2, promise3, promise4]).then(values => {
		console.log(values);
	})


promise
	.then(result => result + '!')
	.then(result2 =>{
		throw Error
		console.log(result2);
	})
	.catch(() => console.log('error!'))


promise
	.then(result => {
		throw Error
		return result + '!'
	})
	.then(result2 =>{
		console.log(result2);
	})
	.catch(() => console.log('error!'))

promise
	.then(result => result + '!')
	.then(result2 => result2 + '?')
	.catch(()=>console.log('error!'))
	.then(result3 => {
		console.log(result3 + '!');
	})


// -- real world application for promise

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
	return fetch(url).then(resp=>resp.json())
})).then(results =>{
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
})