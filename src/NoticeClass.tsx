import { data } from './data'

class NoticeClass {
    id: number;
    noticeType: string;
    petName: string;
    images: string[] | [];
    petSpecie: string;
    petBreed: string;
    petSex: string;
    petDescription: string;
    dateLost: string;
    chipNum: number;
    petNotes: string;
    contactNum: string;
    contactEmail: string;
    reward: boolean | null;

    constructor(type: string, reward: boolean | null, name: string, images:string[] | null, specie: string, breed: string,  sex: string, petDescription: string, chipNum: string, petNotes: string, contactNum: string, contactEmail:string) {
        this.id = this.determineId();
        this.noticeType = type;
        this.petName = name;
        this.images = images;
        this.petSpecie = specie;
        this.petBreed = breed;
        this.petSex = sex;
        this.petDescription = petDescription;
        this.dateLost = '01/02/1234';
        this.chipNum = this.parseNumber(chipNum);
        this.petNotes = petNotes;
        this.contactNum = '123-123-1234';
        this.contactEmail = 'example@example.com';
        this.reward = reward;
        this.contactNum = contactNum;
        this.contactEmail = contactEmail;
    }

    determineId = (): number => {
        const index = data.length - 1
        const id = data[index].id + 1
        return id
    }

    parseNumber = (chipNum: string):number => {
        const num = parseInt(chipNum)
        return num
    }
}

export default NoticeClass