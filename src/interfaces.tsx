export interface NoticeInterface {
    id: number,
    noticeType: string,
    petName: string,
    images: string[],
    petBreed: string,
    petSpecie: string,
    petSex: string,
    petDescription: string,
    dateLost: string,
    chipNum: number,
    petNotes: string,
    contactNum: string,
    contactEmail: string,
    reward: boolean | null
    comments: Comment[]
}

export interface Comment {
    id: number,
    username: string,
    comment: string,
    replies: Reply[]
}

export interface Reply {
    id: number,
    username: string,
    comment: string;
}