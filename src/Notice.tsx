class Notice {
    id: number;
    noticeType: string;
    petName: string;
    images: string[] | [];
    petSpecie: string;
    petBreed: string;
    petDescription: string;
    dateLost: string;
    chipNum: number;
    petNotes: string;
    contactNum: string;
    contactEmail: string;
    reward: boolean;

    constructor(id: number, type: string, name: string, images:string[] | null, specie: string, breed: string) {
        this.id = id;
        this.noticeType = type;
        this.petName = name;
        this.images = images;
        this.petSpecie = specie;
        this.petBreed = breed;
        this.petDescription = 'jello';
        this.dateLost = '01/02/1234';
        this.chipNum = 1234;
        this.petNotes = 'jello';
        this.contactNum = '123-123-1234';
        this.contactEmail = 'example@example.com';
        this.reward = true
    }
}

export default Notice