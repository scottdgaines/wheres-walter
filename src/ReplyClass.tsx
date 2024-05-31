class ReplyClass {
    id: number;
    username: string;
    comment: string

    constructor(id, username, reply) {
        this.id = id;
        this.username = username;
        this.comment = reply;
    }
}

export default ReplyClass