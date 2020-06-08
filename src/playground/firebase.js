import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDesAatuiqg8O6LobxBwufbwul9dB2pDsQ",
    authDomain: "expensify-2c9f4.firebaseapp.com",
    databaseURL: "https://expensify-2c9f4.firebaseio.com",
    projectId: "expensify-2c9f4",
    storageBucket: "expensify-2c9f4.appspot.com",
    messagingSenderId: "1062655689803",
    appId: "1:1062655689803:web:64ba516583a8357a31b9ce",
    measurementId: "G-EBLDG5ZJ20"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach(child => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         })
//     });
//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: '5',
//     note: '5',
//     amount: 5,
//     createdAt: 5
// });

// database.ref('notes/-M9B0G8kPlcoKIkZZSzW').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native'
// })

// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (e) => {
//     console.log('Error fetching data', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// })

// setTimeout(() => {
//     database.ref('age').set(25);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(27);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Donald Chen',
//     age: 24,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'San Francisco',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle').set(null);

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     })
//     .catch((e) => {
//         console.log('This failed', e);
//     });

