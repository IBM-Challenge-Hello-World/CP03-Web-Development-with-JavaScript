// SlideShow 911gt3

var imagensGT3 = [
    '/imagens/porsche-911gt3-fronta.jpg',
    '/imagens/porsche-911gt3-traseira.jpg',
    '/imagens/porsche-911gt3-painel.jpg',
    '/imagens/porsche-911gt3-console.jpg',
    '/imagens/porsche-911gt3-traseira-close.jpg',
];

var IndexGT3 = 0;
var timeGT3 = 2000;

function slideShowGT3() {
    document.getElementById('gt3').src = imagensGT3[IndexGT3];
    IndexGT3++;
    if (IndexGT3 == imagensGT3.length) { IndexGT3 = 0; }
    setTimeout("slideShowGT3()", timeGT3);
}
slideShowGT3();

// SlideShow turboS

var imagensTurboS = [
    '/imagens/porsche-911TurboS-frontal.jpg',
    '/imagens/porsche-911TurboS-traseira-lateral.jpg',
    '/imagens/porsche-911TurboS-interior.jpg',
    '/imagens/porsche-911TurboS-traseira.jpg',
    '/imagens/porsche-911TurboS-console.jpg',
    '/imagens/porsche-911TurboS-bancos.jpg'
];

var IndexTurboS = 0;
var timeTurboS = 2000;

function slideShowTurboS() {
    document.getElementById('turboS').src = imagensTurboS[IndexTurboS];
    IndexTurboS++;
    if (IndexTurboS == imagensTurboS.length) { IndexTurboS = 0; }
    setTimeout("slideShowTurboS()", timeTurboS);
}
slideShowTurboS();

// SlideShow Civic SI

var imagensCivicSI = [
    '/imagens/honda-civicSI-frontal.jpg',
    '/imagens/honda-civicSI-traseira-lateral.jpg',
    '/imagens/honda-civicSI-motor.jpg',
    '/imagens/honda-civicSI-interior.jpg',
    '/imagens/honda-civicSI-bancos.jpg'

];

var IndexCivicSI = 0;
var timeCivicSI = 2000;

function slideShowCivicSI() {
    document.getElementById('civicSI').src = imagensCivicSI[IndexCivicSI];
    IndexCivicSI++;
    if (IndexCivicSI == imagensCivicSI.length) { IndexCivicSI = 0; }
    setTimeout("slideShowCivicSI()", timeCivicSI);
}
slideShowCivicSI();

// SlideShow A35s

var imagensA35s = [
    '/imagens/mercedez-a35Amg-frontal.jpg',
    '/imagens/mercedez-a35Amg-traseira-lateral.jpg',
    '/imagens/mercedez-a35Amg-interior.jpg',
    '/imagens/mercedez-a35Amg-bancos.jpg',

];

var IndexA35s = 0;
var timeA35s = 2000;

function slideShowA35s() {
    document.getElementById('a35s').src = imagensA35s[IndexA35s];
    IndexA35s++;
    if (IndexA35s == imagensA35s.length) { IndexA35s = 0; }
    setTimeout("slideShowA35s()", timeA35s);
}
slideShowA35s();

// SlideShow Ferrari 488GTB

var imagens488GTB = [
    '/imagens/ferrari-488GTB-frontal.jpg',
    '/imagens/ferrari-488GTB-traseira.jpg',
    '/imagens/ferrari-488GTB-traseira_lateral.jpg',
    '/imagens/ferrari-488GTB-bancos.jpg',
    '/imagens/ferrari-488GTB-motor.jpg',
    '/imagens/ferrari-488GTB-volante.jpg'

];

var Index488GTB = 0;
var time488GTB = 2000;

function slideShow488GTB() {
    document.getElementById('488GTB').src = imagens488GTB[Index488GTB];
    Index488GTB++;
    if (Index488GTB == imagens488GTB.length) { Index488GTB = 0; }
    setTimeout("slideShow488GTB()", time488GTB);
}
slideShow488GTB();

// SlideShow Ferrari 458spider

var imagens458spider = [
    '/imagens/ferrari-458-frontal.jpg',
    '/imagens/ferrari-458-interior.jpg',
    '/imagens/ferrari-458-traseira-lateral.jpg',
    '/imagens/ferrari-458-painel.jpg',

];

var Index458spider = 0;
var time458spider = 2000;

function slideShow458spider() {
    document.getElementById('458spider').src = imagens458spider[Index458spider];
    Index458spider++;
    if (Index458spider == imagens458spider.length) { Index458spider = 0; }
    setTimeout("slideShow458spider()", time458spider);
}
slideShow458spider();

// Slide Show VW GTI

var imagensGTI = [
    '../imagens/gti-frontal.jpg',
    '../imagens/gti-traseira.jpg',
    '../imagens/gti-interna.jpg',
    '../imagens/gti-laterial.jpg',
    '../imagens/gti-painel.jpg',
];

var IndexGTI = 0;
var timeGTI = 2000;

function slideShowGTI() {
    document.getElementById('GTI2').src = imagensGTI[IndexGTI];
    IndexGTI++;
    if (IndexGTI == imagensGTI.length) { IndexGTI = 0; }
    setTimeout("slideShowGTI()", timeGTI);
}
slideShowGTI();

// Slide Show BMW M440i

var imagensM440i = [
    '/imagens/bmw-m440i-frontal.jpg',
    '/imagens/bmw-m440i-interior.jpg',
    '/imagens/bmw-m440i-painel.jpg',
    '/imagens/bmw-m440i-traseira-lateral.jpg',
];

var IndexM440i = 0;
var timeM440i = 2000;

function slideShowM440i() {
    document.getElementById('m440i2').src = imagensM440i[IndexM440i];
    IndexM440i++;
    if (IndexM440i == imagensM440i.length) { IndexM440i = 0; }
    setTimeout("slideShowM440i()", timeM440i);
}
slideShowM440i();