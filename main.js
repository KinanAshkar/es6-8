// Create The First Promise:

const myPromise = new Promise((resolve, reject) => {
    let connect = true;
    if(connect){
        resolve("connection established");
    }else{
        reject(Error("connection faild"));
    }
}).then(
        (myResolved) => console.log(myResolved),
        (myRejected) => console.log(myRejected)
    );

//  Other Example
// let resolved = myResolved => console.log(myResolved);
// let rejected = myRejected => console.log(myRejected);

// myPromise.then(resolved, rejected);

// _____________________________