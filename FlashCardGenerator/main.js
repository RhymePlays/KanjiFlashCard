var data = [
    // {kanji: "一", radical: true, meaning: "One; 1 in Words", kun: "ひと, ひと.つ", on: "イチ, イツ"},
    // {kanji: "二", radical: true, meaning: "Two; 2 in Words", kun: "ふた, ふた.つ", on: "ニ, ジ"},
    // {kanji: "三", radical: false, meaning: "Three; 3 in Words", kun: "み, み.つ, みっ.つ", on: "サン, ゾウ"},
    // {kanji: "四", radical: false, meaning: "Four; 4 in Words", kun: "よ, よ.つ, よん", on: "シ"},
    // {kanji: "五", radical: false, meaning: "Five; 5 in Words", kun: "いつ, いつ.つ", on: "ゴ"},
    // {kanji: "六", radical: false, meaning: "Six; 6 in Words", kun: " む, む.つ, むっ.つ, むい", on: "ロク, リク"},
    // {kanji: "七", radical: false, meaning: "Seven; 7 in Words", kun: "なな, なな.つ, なの", on: "シチ"},
    // {kanji: "八", radical: true, meaning: "Eight; 8 in Words; RAD(Divide)", kun: "や, や.つ, やっ.つ, よう", on: "ゴハチ, ハツ"},
    // {kanji: "九", radical: true, meaning: "Nine; 9 in Words", kun: "ここの, ここの.つ", on: "キュウ, ク"},
    // {kanji: "十", radical: true, meaning: "Ten; 10 in Words; RAD(Complete/Perfect)", kun: "とお, と, そ", on: "ジュウ, ジッ, ジュッ"},
    // {kanji: "百", radical: false, meaning: "Hundred; 100 in Words", kun: "もも", on: "ヒャク, ビャク"},
    // {kanji: "千", radical: false, meaning: "Thousand; 1000 in Words", kun: "ち", on: "セン"},
    // {kanji: "万", radical: false, meaning: "Ten Thousand; 10,000 in Words", kun: "よろず", on: "マン, バン"},
    // {kanji: "日", radical: true, meaning: "Day; Sun; Japan; Counter for Days", kun: "ひ, -び, -か", on: "ニチ, ジツ"},
    // {kanji: "国", radical: false, meaning: "Country", kun: "くに", on: "コク"},
    // {kanji: "会", radical: false, meaning: "Meeting; Meet", kun: "あ(う)", on: "カイ"},
    {kanji: "人", radical: true, meaning: "Person", kun: "ひと", on: "ジン, ニン"},
    {kanji: "年", radical: false, meaning: "Year; Counter for Years", kun: "とし", on: "ネン"},
    {kanji: "大", radical: true, meaning: "Large; Big", kun: "おお(きい)", on: "ダイ, タイ"},
    {kanji: "本", radical: false, meaning: "Book; Present; True; Counter for long cylindrical things", kun: "もと", on: "ホン"},
    {kanji: "中", radical: false, meaning: "In; Inside; Middle; Mean; Center", kun: "なか, うち, あた(る)", on: "チュウ"},
    {kanji: "長", radical: true, meaning: "Long; Leader; Superior; Senior", kun: "なが(い), おさ", on: "チョウ"},
    {kanji: "出", radical: false, meaning: "Exit; Leave; Go out", kun: "で(る), だ(す), い(でる)", on: "シュツ, スイ"},
    {kanji: "同", radical: false, meaning: "Same, Agree, Equal", kun: "おな(じ)", on: "ドウ"},
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