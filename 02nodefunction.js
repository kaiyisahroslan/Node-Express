// Generic function definition
function welcomeBasic() {
    console.log('I  am in space craft!');
};

// Arrow function definition
const welcomeArrow = () => {
    console.log('I am in alien spcae craft');
};

const welcomeArrowMessage = (message) => {
    console.log(message);
}

welcomeBasic();
welcomeArrow();
welcomeArrowMessage('Journey to Mars has started!');
welcomeArrowMessage('In next 4 hours, we will land on mars');