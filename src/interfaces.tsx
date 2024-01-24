export interface Notice {
    noticeID: number,
    noticeType: string,
    petName: string,
    mainImage: string,
    additionalImages: string[],
    petBreed: string,
    petSpecie: string,
    petDescription: string,
    dateLost: string,
    chipNum: number,
    petNotes: string,
    contactNum: string,
    contactEmail: string,
    reward: boolean
}