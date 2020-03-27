import { Etudiant } from './etudiant';

export class Absence {
    id: number;
    debut: string;
    fin: string;
    description: string;
    justification: string;
    etudiant: Etudiant;
}
