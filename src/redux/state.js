let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 11 },
        ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dima' },
            { id: 2, name: "Valera" },
            { id: 3, name: "Sasha" },
            { id: 4, name: "Maxim" },
        ],
        messages: [
            {
                id: 1,
                message: "Hi",
            },
            { id: 2, message: "Hi is are you?" },
            { id: 3, message: "Yo" },
        ],
    },
};

export let addPost = (postMessage) => {
    debugger
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
};

export default state;