// setTimeout(function(){
//     console.log('I Promised to run this after 1s')
//         setTimeout(function(){
//             console.log('I Promised to run this after 2s')
//         },1000)
// },1000)
//
// ----------------------------------------------------------
// const wait = () => new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000)
// } )
// wait().then(()=>{
//     console.log('I promised to run after 1s')
//     return wait()
// }).then(()=>console.log('I promised to run after 2s'))
//----------------------------------------------------------
//----------------------------------------------------------
const wait =()=> new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000)
}) 
wait().then(()=>{
    console.log('LOG1:','I Promised to run after 1s');
    return wait()
})
.then(()=>{
    console.log('LOG2:', 'I Promised to run after 2s')
})