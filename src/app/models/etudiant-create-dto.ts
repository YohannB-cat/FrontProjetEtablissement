import { SexeEnum } from '../enums/sexe-enum.enum';

export class EtudiantCreateDto {
    adress: string;
    city: string;
    identity: number;
    mail: string;
    name: string;
    phone: number;
    postalCode: number;
    s: SexeEnum;
    surname: string;
}
