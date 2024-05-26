import { Reply } from './interfaces'

class CommentClass {
    id: number;
    username: string;
    comment: string;
    replies: Reply[]

    constructor(id, username, comment) {
        this.id = id;
        this.username = username;
        this.comment = comment;
        this.replies = []
    }
}

export default CommentClass