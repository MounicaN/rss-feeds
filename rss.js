var color="";
function topNews(){
    var url="http://feeds.reuters.com/reuters/INtopNews";
    loadXML(url);
}
function businessNews(){
    url="http://feeds.reuters.com/reuters/INbusinessNews";
    loadXML(url);
}
function southAsia(){
    url="http://feeds.reuters.com/reuters/INsouthAsiaNews";
    loadXML(url);
}
function worldNews(){
    url="http://feeds.reuters.com/reuters/INworldNews";
    loadXML(url);
}
function entertainment(){
    url="http://feeds.reuters.com/reuters/INentertainmentNews";
    loadXML(url);
}
function hollywood(){
    url="http://feeds.reuters.com/reuters/INhollywood";
    loadXML(url);
}
function sports(){
    url="http://feeds.reuters.com/reuters/INsportsNews";
    loadXML(url);
}
function cricket(){
    url="http://feeds.reuters.com/reuters/INcricketNews";
    loadXML(url);
}
function f1(){
    url="http://feeds.reuters.com/reuters/INformulaOne";
    loadXML(url);
}
function golf(){
    url="http://feeds.reuters.com/reuters/INgolf";
    loadXML(url);
}
function technology(){
    url="http://feeds.reuters.com/reuters/INtechnologyNews";
    loadXML(url);
}
function health(){
    url="http://feeds.reuters.com/reuters/INhealth";
    loadXML(url);
}
function lifestyle(){
    url="http://feeds.reuters.com/reuters/INlifestyle";
    loadXML(url);
}
function oddlyenough(){
    url="http://feeds.reuters.com/reuters/INoddlyEnoughNews";
    loadXML(url);
}
function loadXML(url){   
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();
    var xmlDoc = xhttp.responseXML;
    var data=xmlDoc.getElementsByTagName("item");
    var list="<ul>";
    var title,description,pubdate,link;
    for(var i=0;i<data.length;i++){
        title=data[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        description=data[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
        pubdate=data[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
        link=data[i].getElementsByTagName("guid")[0].childNodes[0].nodeValue;
        list+="<li><a href="+link+">"+title+"</a><br><br>"+"<b>"+pubdate+"</b>"+"<br><br>"+description+"</li><hr>";
    }
    list+="</ul>";
    document.getElementById("demo").innerHTML=list;
}