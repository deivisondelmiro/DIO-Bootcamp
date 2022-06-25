/* const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'));
    }, 2000);
});

console.log(myPromise); */

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'));
    }, 2000);
});

await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => + ' e agora acabou!')
        .catch((err) => console.log(err.message));

console.log(myPromise);