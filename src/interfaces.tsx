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
}