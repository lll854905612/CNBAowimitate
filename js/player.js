
var playersData=[
    {"name":"Jaylen Adams","group":"开拓者","position":"后卫","height":"1.83","weight":"102.1","country":"美国"},
    {"name":"Steven Adams","group":"雷霆","position":"中锋","height":"2.11","weight":"120.2","country":"新西兰"},
    {"name":"Bam Adebayo","group":"热火","position":"中锋-前锋","height":"2.06","weight":"115.7","country":"美国"},
    {"name":"LaMarcus Aldridge","group":"马刺","position":"中锋-前锋","height":"2.11","weight":"113.4","country":"美国"},
    {"name":"Kyle Alexander","group":"热火","position":"前锋-中锋","height":"2.08","weight":"98.0","country":"加拿大"},
    {"name":"Nickeil Alexander-Walker","group":"鹈鹕","position":"后卫","height":"1.96","weight":"93.0","country":"加拿大"},
    {"name":"Grayson Allen","group":"灰熊","position":"后卫","height":"1.93","weight":"89.8","country":"美国"},
    {"name":"Jarrett Allen","group":"篮网","position":"中锋","height":"2.11","weight":"110.2","country":"美国"},
    {"name":"Al-Farouq Aminu","group":"魔术","position":"前锋","height":"2.03","weight":"99.8","country":"美国"},
    {"name":"Justin Anderson","group":"篮网","position":"前锋-后卫","height":"1.96","weight":"104.8","country":"美国"},
    {"name":"Kyle Anderson","group":"灰熊","position":"前锋-后卫","height":"2.06","weight":"104.3","country":"美国"}
]


function load() {
    var table = document.getElementById("data");
    table.innerHTML="<th width=\"40%\">球员</th>\n" +
        "            <th width=\"10%\">球队</th>\n" +
        "            <th width=\"15%\">位置</th>\n" +
        "            <th width=\"10%\">身高</th>\n" +
        "            <th width=\"15%\">体重</th>\n" +
        "            <th width=\"10%\">国籍</th>";
    var tbody = document.createElement("tbody");
    for(var i=0;i<playersData.length;i++){
        tbody.innerHTML += '<tr><td>'+playersData[i].name+'</td><td>'+playersData[i].group+'</td><td>'+playersData[i].position+'</td><td>'+playersData[i].height+'</td><td>'+playersData[i].weight+'</td><td>'+playersData[i].country+'</td></tr>';
    }
    table.appendChild(tbody);

    var namearr = document.getElementsByClassName("name");
    for (var i=0;i<namearr.length;i++){
        namearr[i].onclick=function () {
            var letter = this.innerHTML;

            var table = document.getElementById("data");
            table.innerHTML="";
            table.innerHTML="<th width=\"40%\">球员</th>\n" +
                "            <th width=\"10%\">球队</th>\n" +
                "            <th width=\"15%\">位置</th>\n" +
                "            <th width=\"10%\">身高</th>\n" +
                "            <th width=\"15%\">体重</th>\n" +
                "            <th width=\"10%\">国籍</th>";

            var tbody = document.createElement("tbody");

            for(var i=0;i<playersData.length;i++){
                if (playersData[i].name.indexOf(letter) != -1){
                    tbody.innerHTML += '<tr><td>'+playersData[i].name+'</td><td>'+playersData[i].group+'</td><td>'+playersData[i].position+'</td><td>'+playersData[i].height+'</td><td>'+playersData[i].weight+'</td><td>'+playersData[i].country+'</td></tr>';
                }
            }
            table.appendChild(tbody);
        }
    }
}

var contryselect = document.getElementById("contryselect").onchange=function () {
    var contry = this.value;
    var table = document.getElementById("data");
    table.innerHTML="";
    table.innerHTML="<th width=\"40%\">球员</th>\n" +
        "            <th width=\"10%\">球队</th>\n" +
        "            <th width=\"15%\">位置</th>\n" +
        "            <th width=\"10%\">身高</th>\n" +
        "            <th width=\"15%\">体重</th>\n" +
        "            <th width=\"10%\">国籍</th>";

    var tbody = document.createElement("tbody");

    for(var i=0;i<playersData.length;i++){
        if (playersData[i].country == contry){
            tbody.innerHTML += '<tr><td>'+playersData[i].name+'</td><td>'+playersData[i].group+'</td><td>'+playersData[i].position+'</td><td>'+playersData[i].height+'</td><td>'+playersData[i].weight+'</td><td>'+playersData[i].country+'</td></tr>';
        }
    }
    table.appendChild(tbody);

}

var groupselect = document.getElementById("groupselect").onchange=function () {
    var group = this.value;
    var table = document.getElementById("data");
    table.innerHTML="";
    table.innerHTML="<th width=\"40%\">球员</th>\n" +
        "            <th width=\"10%\">球队</th>\n" +
        "            <th width=\"15%\">位置</th>\n" +
        "            <th width=\"10%\">身高</th>\n" +
        "            <th width=\"15%\">体重</th>\n" +
        "            <th width=\"10%\">国籍</th>";

    var tbody = document.createElement("tbody");

    for(var i=0;i<playersData.length;i++){
        if (playersData[i].group == group){
            tbody.innerHTML += '<tr><td>'+playersData[i].name+'</td><td>'+playersData[i].group+'</td><td>'+playersData[i].position+'</td><td>'+playersData[i].height+'</td><td>'+playersData[i].weight+'</td><td>'+playersData[i].country+'</td></tr>';
        }
    }
    table.appendChild(tbody);
}