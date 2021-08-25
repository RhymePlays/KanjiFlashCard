var data = [
    {kanji: "一", radical: true, meaning: "One; 1 in Words", kun: "ひと, ひと.つ", on: "イチ, イツ"},
    {kanji: "二", radical: true, meaning: "Two; 2 in Words", kun: "ふた, ふた.つ", on: "ニ, ジ"},
    {kanji: "三", radical: false, meaning: "Three; 3 in Words", kun: "み, み.つ, みっ.つ", on: "サン, ゾウ"},
    {kanji: "四", radical: false, meaning: "Four; 4 in Words", kun: "よ, よ.つ, よん", on: "シ"},
    {kanji: "五", radical: false, meaning: "Five; 5 in Words", kun: "いつ, いつ.つ", on: "ゴ"},
]

function createCard(kanji, radical, meaning, kun, on){
    let card = document.createElement("div");
    card.className = "card";

    let kanjiDisplay = document.createElement("div");
    kanjiDisplay.className = "kanjiDisplay";
    kanjiDisplay.innerText = kanji;
    let radicalMark = document.createElement("div");
    radicalMark.className = "radicalMark";
    radicalMark.innerText = "Radical";
    radicalMark.style.display = radical? "block":"none"
    let kanjiMeaning = document.createElement("div");
    kanjiMeaning.className = "kanjiMeaning";
    kanjiMeaning.innerHTML = meaning;
    let kunSpelling = document.createElement("div");
    kunSpelling.className = "kunSpelling";
    kunSpelling.innerText = "KUN "+kun;
    let kunVsOn = document.createElement("hr");
    kunVsOn.className = "kunVsOn";
    let onSpelling = document.createElement("div");
    onSpelling.className = "onSpelling";
    onSpelling.innerText = "ON "+on;
    let qrDisplay = document.createElement("div");
    qrDisplay.className = "qrDisplay";

    new QRCode(qrDisplay, {
        text: kanji,
        colorDark: "#ffffff",
        colorLight: "#00000000",
        height: 176,
        width: 176
    })

    card.append(kanjiDisplay, radicalMark, kanjiMeaning, kunSpelling, kunVsOn, onSpelling, qrDisplay)
    return card
}

for (i in data){
    document.getElementById('booty').append(createCard(data[i].kanji, data[i].radical, data[i].meaning, data[i].kun, data[i].on))
}