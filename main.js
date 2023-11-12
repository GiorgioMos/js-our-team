
const members = [
    {
        name: "Wayne Barnett",
        position: "Founder & CEO",
        photo: createPhotoElement("./img/wayne-barnett-founder-ceo.jpg")
    },
    {
        name: "Angela Caroll",
        position: "Chief Editor",
        photo: createPhotoElement("./img/angela-caroll-chief-editor.jpg")
    },
    {
        name: "Walter Gordon",
        position: "Ofiice Manager",
        photo: createPhotoElement("./img/walter-gordon-office-manager.jpg")
    },
    {
        name: "Angela Lopez",
        position: "Social Media Manager",
        photo: createPhotoElement("./img/angela-lopez-social-media-manager.jpg")
    },
    {
        name: "Scott Estrada",
        position: "Developer",
        photo: createPhotoElement("./img/scott-estrada-developer.jpg")
    },
    {
        name: "Barbara Ramos",
        position: "Graphic Designer",
        photo: createPhotoElement("./img/barbara-ramos-graphic-designer.jpg")
    },
];

function createPhotoElement(image) {
    const photo = document.createElement("img");
    photo.src = image;
    return photo;
}

function appendImage(photo) {
    document.querySelector(".container").appendChild(photo);
}

for (const member of members) {
    appendImage(member.photo);
}




// devo mettere ogni immagine in un div separato 

