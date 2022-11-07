`use strict`

//Creare l’array di oggetti con le informazioni fornite.

const members = [
    {
        'NameMember' : "Wayne Barnett",
        'role' : 'Founder & CEO',
        'imgSource': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'NameMember' : "Angela Caroll",
        'role' : 'Chief Editor',
        'imgSource': 'angela-caroll-chief-editor.jpg'
    },
    {
        'NameMember' : "Walter Gordon",
        'role' : 'Office Manager',
        'imgSource': 'walter-gordon-office-manager.jpg'
    },
    {
        'NameMember' : "Angela Lopez",
        'role' : 'Social Media Manager',
        'imgSource': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'NameMember' : "Scott Estrada",
        'role' : 'Developer',
        'imgSource': 'scott-estrada-developer.jpg'
    },
    {
        'NameMember' : "Barbara Ramos",
        'role' : 'Graphic Designer',
        'imgSource': 'barbara-ramos-graphic-designer.jpg'
    }
    
];


for (let i = 0; i < members.length; i++) {

    //Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.
    const team = members[i];
    // console.log(team);

    //Stampare le stesse informazioni su DOM sottoforma di stringhe
    const memberTeam = document.createElement(`li`);
    memberTeam.innerHTML = team.members;
    document.getElementById(`list`).append(memberTeam);
}



//BONUS 1:Trasformare la stringa foto in una immagine effettiva

//BONUS 2:Organizzare i singoli membri in card/schede.