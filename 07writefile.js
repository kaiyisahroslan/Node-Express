let fs = require('fs');

let message = 'I am required to fly to Pluto tomorrow using the new file at the speed of light! See you all from Pluto by end of the day!'

fs.writeFile('flymetopluto.txt', message, (error) => {
    if(error) {
        throw error;
    }

    console.log('File write is successful!');
})