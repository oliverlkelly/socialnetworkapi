const firstNames = [
    'olivia',
    'emily',
    'isla',
    'freya',
    'ella',
    'amelia',
    'ava',
    'sophie',
    'grace',
    'millie',
    'lily',
    'sophia',
    'charlotte',
    'rosie',
    'aria',
    'evie',
    'maisie',
    'lucy',
    'mia',
    'eilidh',
    'ellie',
    'ivy',
    'orla',
    'jessica',
    'harper',
    'maya',
    'willow',
    'georgia',
    'daisy',
    'sofia',
    'mila',
    'isabella',
    'ruby',
    'hannah',
    'skye',
    'sienna',
    'molly',
    'hallie',
    'bonnie',
    'poppy',
    'eva',
    'esme',
    'anna',
    'ayla',
    'erin',
    'callie',
    'zara',
    'layla',
    'emma',
    'robyn',
    'chloe',
    'jack',
    'noah',
    'leo',
    'oliver',
    'harris',
    'finlay',
    'lewis',
    'james',
    'rory',
    'alexander',
    'brodie',
    'alfie',
    'charlie',
    'theo',
    'archie',
    'lucas',
    'mason',
    'finn',
    'thomas',
    'freddie',
    'max',
    'logan',
    'harry',
    'jacob',
    'blake',
    'luca',
    'oscar',
    'jude',
    'william',
    'caleb',
    'roman',
    'cameron',
    'jaxon',
    'adam',
    'joshua',
    'ollie',
    'tommy',
    'daniel',
    'ethan',
    'harrison',
    'luke',
    'arthur',
    'muhammad',
    'jamie',
    'liam',
    'reuben',
    'arlo',
    'grayson',
    'hunter',
    'kai',
    'aaron'
];
const lastNames = [
    'elsher',
    'solace',
    'levine',
    'thatcher',
    'raven',
    'bardot',
    'james',
    'hansley',
    'cromwell',
    'ashley',
    'monroe',
    'west',
    'langley',
    'daughtler',
    'madison',
    'marley',
    'ellis',
    'hope',
    'cassidy',
    'lopez',
    'jenkins',
    'poverly',
    'mckenna',
    'gonzales',
    'keller',
    'collymore',
    'stoll',
    'verlice',
    'adler',
    'huxley',
    'ledger',
    'hayes',
    'ford',
    'finnegan',
    'beckett',
    'gatlin',
    'pierce',
    'zimmerman',
    'dawson',
    'wilson',
    'adair',
    'gray',
    'curran',
    'crassus',
    'anderson',
    'adams',
    'carter',
    'hendrix',
    'lennon',
    'casper'
];
const emails = [
    '@gmail.com',
    '@yahoo.com',
    '@hotmail.com',
    '@outlook.com',
    '@live.com',
    '@icloud.com',
    '@mailinator.com',
    '@mail.com',
    '@example.com'
];

const thoughts = [
    ' had a thought!',
    ' really likes Octocats.',
    ' wonders what its like to dream.',
    ' needs a hug, desperately',
    " doesn't know how to dance?",
    ' was swallowed by a whale!',
    ' has a pet cricket.',
    ' wants to be a real child!'
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUser = () => {
    const fName = getRandomArrItem(firstNames);
    const lName = getRandomArrItem(lastNames);
    const uName = `${fName}.${lName}`
    const email = `${uName}${getRandomArrItem(emails)}`;
    return { uName, email };
}

const getRandomThoughts = (user) => {
    const rand = Math.floor(Math.random() * 3);
    let result = [];
    for(let i=0; i<rand; i++){
        const end = getRandomArrItem(thoughts);
        const name = getRandomArrItem(firstNames);
        result.push(
            {
                thoughtText: `${name}${end}`,
                username: `${user.username}`,
                email: `${user.email}`
            }
        )
    }
    return result;
}

module.exports = { getRandomUser, getRandomThoughts };