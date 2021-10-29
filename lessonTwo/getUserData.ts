class User {
    username: 'String';
    avatarUrl: 'String';

    constructor(
        username: 'String',
        avatarUrl: 'String',
    ) {
        this.username = username;
        this.avatarUrl = avatarUrl;
    }
}

const value: unknown = {
    username: '12345',
    avatarUrl: 'image.gif'
}

if (value instanceof User) {
    console.log(value.username);
}

export function dataUser(v: unknown): v is User {
    return typeof value === 'object'
    && 'username' in value
    && 'avatar' in value
}
