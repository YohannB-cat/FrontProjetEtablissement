import { Etudiant } from './etudiant';

export class AbsenceDto {
    debut: string;
    description: string;
    fin: string;
    justification: string;
    etudiant: Etudiant;
}
