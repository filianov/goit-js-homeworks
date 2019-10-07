// strange code for generate IDs
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}
function* generateUserId() {
    yield* generateSequence(500, 1000);
}
function* generateMassageId() {
    yield* generateSequence(5000, 10000);
}

const userIds = generateUserId();
const messageIds = generateMassageId();

const getUserId = () => userIds.next().value;
const getMessageId = () => messageIds.next().value;
// end of strange code (it is JS generators)

class Message {
    constructor(text, fromUser, toUser) {
        this.id = getMessageId();
        this.text = text;
        this.fromUser = fromUser;
        this.toUser = toUser;
    }
}

class User {
    constructor(name, socialNetwork) {
        this.name = name;
        this.id = getUserId();
        this.friendList = [];
        this.messages = [];
        this.socialNetwork = socialNetwork;
    }
    sendMessage(message, toUser) {
        const newMessage = new Message(message, this.name, toUser.id);
        this.socialNetwork.deliverMassage(newMessage);
    }
    receiveMessage(message) {
        this.messages.push(message);
    }
}

class SocialNetwork {
    constructor() {
        this.users = [];
        this.messages = [];
        this._name = 'Facebook';
    }
    createUser(name) {
        const newUser = new User(name, this); // this use in class User, method sendMessage()
        this.users.push(newUser);
        return newUser;
    }

    deliverMassage(newMessage) {
        this.messages.push(newMessage);
        const receiveUserId = newMessage.toUser;
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === receiveUserId) {
                this.users[i].receiveMessage(newMessage);
                break;
            }
        }
    }
}

class Group {
    createGroup() {
        
    }

const socialNetwork = new SocialNetwork();

const userVasya = socialNetwork.createUser('Vasya');
const userPetya = socialNetwork.createUser('Petya');

userVasya.sendMessage('Hello Petya', userPetya);
userPetya.sendMessage('Hello Vasya', userPetya);

console.log('userPetya.messages', userPetya.messages);
console.log('socialNetwork.messages', socialNetwork.messages);

// HOME WORK
// create 5 users
// implement GROUP in SocialNetwork
// create group and add 3 this users, in one user invoke method createGroup(user1, user2, ....)
// implement method sendMessageToGroup
// add the other two as friends to each other, in other words, implement method addFriend()

const userVika = socialNetwork.createUser('Vika');
const userLina = socialNetwork.createUser('Lina');
const userLuda = socialNetwork.createUser('Luda');
