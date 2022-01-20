window.addEventListener("load", event => main());


const createInfospot = (x,y,size,texte,panorama) => {
    const infospot = new PANOLENS.Infospot();
    infospot.position.set(x,y,size);
    infospot.addHoverText(texte);
    panorama.add(infospot);
    infospot.addEventListener('click', () => {
        infospot.focus();
    });
}

const createInfospotChangePano = (x,y,size,texte,panorama1,panorama2,viewer) => {
    const infospot = new PANOLENS.Infospot();
    infospot.position.set(x,y,size);
    infospot.addHoverText(texte);
    panorama1.add(infospot);
    infospot.addEventListener('click', () => {
        viewer.setPanorama(panorama2); 
        viewer.add(panorama2);
    });
}


const createInfospotSound = (x,y,size,texte,panorama,source) => {
    const infospot = new PANOLENS.Infospot();
    infospot.position.set(x,y,size);
    infospot.addHoverText(texte);
    panorama.add(infospot);
    infospot.addEventListener('click', () => {
        infospot.focus();
        let sound = document.createElement("audio");
        sound.src = source;
        sound.play();
    });
}

const main = () => {
    const panorama1 = new PANOLENS.ImagePanorama('https://demo.sirv.com/pannellum/bma-1.jpg');
    const panorama2 = new PANOLENS.ImagePanorama('https://pannellum.org/images/alma.jpg');
    const viewer = new PANOLENS.Viewer();
    viewer.add(panorama1);
    
    //Infospot Panorama 1
    createInfospotChangePano(1000,1000,-5000,'Satellite',panorama1,panorama2,viewer);
    createInfospot(1000,500,-5000,'LA',panorama1);
    createInfospotSound(1000,0,-5000,'Mario',panorama1,'./son/Here We Go Mario Sound Effect.mp3');
    
    const image1 = new PANOLENS.Infospot();
    image1.position.set(500,500,-5000);
    image1.addHoverElement(document.getElementById('x'));
    panorama1.add(image1);

    const video1 = new PANOLENS.Infospot();
    video1.position.set(0,500,-5000);
    video1.addHoverElement(document.getElementById('vid1'),100);
    panorama1.add(video1);

    //Infospot Panorama 2
    createInfospotChangePano(1000,1000,-5000,'Monument',panorama2,panorama1,viewer);
    createInfospot(1000,500,-5000,'LA',panorama2);
    createInfospotSound(1000,0,-5000,'Pikachu',panorama2,'./son/Pikachu.mp3');

    const image2 = new PANOLENS.Infospot();
    image2.position.set(500,500,-5000);
    image2.addHoverElement(document.getElementById('y'));
    panorama2.add(image2);

    const video2 = new PANOLENS.Infospot();
    video2.position.set(0,500,-5000);
    video2.addHoverElement(document.getElementById('vid2'),100);
    panorama2.add(video2);
}