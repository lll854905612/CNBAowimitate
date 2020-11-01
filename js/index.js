var news = [
    "KD复刻去年经典库里：他懂自己付出的努力",
    "官宣：瑞安-史密斯以16.6亿美元收购爵士",
    "手握探花签 黄蜂有意孟菲斯大学中锋怀斯曼",
    "格林：投丢不会向球迷道歉 我不欠他们什么",
    "纳什：不会说不夺冠就是失败 运气也很重要",
    "大范：不会给锡安贴标签 他的传球不可思议",
    "戈登：我们无需重建 赢我们的都成了总冠军",
    "冲击季后赛 曝老鹰正在积极兜售首轮6号签",
    "次轮可选 热火队试训亚利桑那大学前锋纳吉"
];

var jsonAreaWest=[
    {"rank":"01","name":"w - 洛杉矶 湖人 ","win":"52","false":"19","difference":"73.2"},
    {"rank":"02","name":"x - 洛杉矶 快船 ","win":"49","false":"23","difference":"68.1"},
    {"rank":"03","name":"nw - 丹佛 掘金 ","win":"46","false":"27","difference":"63"},
    {"rank":"04","name":"sw - 休斯顿 火箭 ","win":"44","false":"28","difference":"61"},
    {"rank":"05","name":"x - 俄克拉 雷霆","win":"44","false":"28","difference":"61"},
    {"rank":"06","name":"x - 犹他 爵士 ","win":"44","false":"28","difference":"61"},
    {"rank":"07","name":"x - 达拉斯 独行侠 ","win":"43","false":"32","difference":"57.3"},
    {"rank":"08","name":"x - 波特兰 开拓者 ","win":"35","false":"39","difference":"47.3"},
    {"rank":"09","name":"孟菲斯 灰熊 ","win":"34","false":"39","difference":"46.6"},
    {"rank":"10","name":"o - 菲尼克斯 太阳 ","win":"34","false":"39","difference":"46.6"}
];

var jsonAreaEast=[
    {"rank":"01","name":"e - 密尔沃基 雄鹿 ","win":"56","false":"17","difference":"76.7"},
    {"rank":"02","name":"a - 多伦多 猛龙 ","win":"53","false":"19","difference":"73.6"},
    {"rank":"03","name":"x - 波士顿 凯尔特人 ","win":"48","false":"24","difference":"66.7"},
    {"rank":"04","name":"x - 印第安纳 步行者 ","win":"45","false":"28","difference":"61.6"},
    {"rank":"05","name":"se - 迈阿密 热火 ","win":"44","false":"29","difference":"60.3"},
    {"rank":"06","name":"x - 费城 76人 ","win":"43","false":"30","difference":"58.9"},
    {"rank":"07","name":"x - 布鲁克林 篮网 ","win":"35","false":"37","difference":"48.6"},
    {"rank":"08","name":"x - 奥兰多 魔术 ","win":"33","false":"40","difference":"45.2"},
    {"rank":"09","name":"o - 华盛顿 奇才 ","win":"25","false":"47","difference":"34.7"},
    {"rank":"10","name":"o - 夏洛特 黄蜂 ","win":"23","false":"42","difference":"35.4"}
];

function loadNews(){
    var newlist = document.getElementById("newlist");
    var ol = document.createElement("ol")
    for (var i=0;i<news.length;i++){
        var li = document.createElement("li");
        var a = document.createElement("a");
        var text = document.createTextNode(news[i]);
        a.setAttribute("href","new.html")
        li.appendChild(a);
        a.appendChild(text);
        ol.appendChild(li);
    }
    newlist.appendChild(ol);
}

var west = document.getElementById('westunion').onclick=function() {
    this.style.color="red";
    var east = document.getElementById('eastunion');
    east.style.color = "black";
    var table = document.getElementById("ranktable");
    table.innerHTML="";
    table.innerHTML="<th width=\"15%\">排名</th>\n" +
        "            <th width=\"50%\">姓名</th>\n" +
        "            <th width=\"10%\">胜</th>\n" +
        "            <th width=\"10%\">负</th>\n" +
        "            <th width=\"15%\">胜率</th>";
    var tbody = document.createElement("tbody");
    for (var i=0;i<jsonAreaWest.length;i++){
        tbody.innerHTML += '<tr><td>'+jsonAreaWest[i].rank+'</td><td>'+jsonAreaWest[i].name+'</td><td>'+jsonAreaWest[i].win+'</td><td>'+jsonAreaWest[i].false+'</td><td>'+jsonAreaWest[i].difference+'</td></tr>';
    }
    table.appendChild(tbody);
}

var east = document.getElementById('eastunion').onclick=function() {
    this.style.color="red";
    var west = document.getElementById('westunion');
    west.style.color = "black";
    var table = document.getElementById("ranktable");
    table.innerHTML="";
    table.innerHTML="<th width=\"15%\">排名</th>\n" +
        "            <th width=\"50%\">姓名</th>\n" +
        "            <th width=\"10%\">胜</th>\n" +
        "            <th width=\"10%\">负</th>\n" +
        "            <th width=\"15%\">胜率</th>";
    var tbody = document.createElement("tbody");
    for (var i=0;i<jsonAreaEast.length;i++){
        tbody.innerHTML += '<tr><td>'+jsonAreaEast[i].rank+'</td><td>'+jsonAreaEast[i].name+'</td><td>'+jsonAreaEast[i].win+'</td><td>'+jsonAreaEast[i].false+'</td><td>'+jsonAreaEast[i].difference+'</td></tr>';
    }
    table.appendChild(tbody);
}

var ul = document.getElementById('ulbanner');
ul.style.left="0px";
var nextbtn = document.getElementById("nextbtn").onclick=function () {
    var left = 0;
    var ul = document.getElementById('ulbanner');
    if (ul.style.left == "-1300px") {
        left = 0;
    }else {
        left = parseInt(ul.style.left)-650;

    }
    ul.style.left = left+'px'
}

var prebtn = document.getElementById("prebtn").onclick=function () {
    var left = 0;
    var ul = document.getElementById('ulbanner');
    if (ul.style.left == "0px") {
        left = -1300;
    }else {
        left = parseInt(ul.style.left)+650;

    }
    ul.style.left = left+'px'
}

function rightplay() {
    var left = 0;
    var ul = document.getElementById('ulbanner');
    if (ul.style.left == "-1300px") {
        left = 0;
    }else {
        left = parseInt(ul.style.left)-650;

    }
    ul.style.left = left+'px'
}

function autoplay() {
    var time = setInterval(rightplay,3000);
}

function firstunionrank() {
        var table = document.getElementById("ranktable");
        table.innerHTML="";
        table.innerHTML="<th width=\"15%\">排名</th>\n" +
            "            <th width=\"50%\">姓名</th>\n" +
            "            <th width=\"10%\">胜</th>\n" +
            "            <th width=\"10%\">负</th>\n" +
            "            <th width=\"15%\">胜率</th>";
        var tbody = document.createElement("tbody");
        for (var i=0;i<jsonAreaEast.length;i++){
            tbody.innerHTML += '<tr><td>'+jsonAreaEast[i].rank+'</td><td>'+jsonAreaEast[i].name+'</td><td>'+jsonAreaEast[i].win+'</td><td>'+jsonAreaEast[i].false+'</td><td>'+jsonAreaEast[i].difference+'</td></tr>';
        }
        table.appendChild(tbody);
}

function onload() {
    loadNews();
    autoplay();
    firstunionrank();
}