import { data } from './data'

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

    constructor(type: string, name: string, images:string[] | null, specie: string, breed: string, chipNum: string) {
        this.id = this.determineId();
        this.noticeType = type;
        this.petName = name;
        this.images = images;
        this.petSpecie = specie;
        this.petBreed = breed;
        this.petDescription = 'jello';
        this.dateLost = '01/02/1234';
        this.chipNum = this.parseNumber(chipNum);
        this.petNotes = 'jello';
        this.contactNum = '123-123-1234';
        this.contactEmail = 'example@example.com';
        this.reward = true
    }

    determineId = (): number => {
        const index = data.length - 1
        const id = data[index].id + 1
        return id
    }

    parseNumber = (chipNum: string):number => {
        console.log(chipNum)
        const num = parseInt(chipNum)
        console.log(num)
        return num
    }
}

export default Notice