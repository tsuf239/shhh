var searchLine = document.getElementById('search-box');
var results = document.getElementById('results');
var open = document.getElementById('open');
var logo = document.getElementById('logo');

if( window.innerWidth > 798) {
    // window.location.replace("https://www.youtube.com");
}

logo.onclick = () => {window.location.reload()};

searchLine.onchange = function(e){
    results.innerHTML= '';
    var query = e.target.value;
    if(query.trim() === ""){
        open.style.display = 'block';
        return;
    }
    axios({
        method: 'post',
        url:'/ytobg',
        data: {q: query}
    }).then((res)=>{
        open.style.display = 'none';
        initResults(res.data);
    });

function initResults(resArr) {
    results.innerHTML= '';
    if (resArr.length === 0) {
        results.innerHTML= '<h2 style=\"color: #ddd\">no results :(<h2>'
    } else {
    resArr.forEach(elm => {
    results.innerHTML+="<div class=\"one-result\"><h2>"+elm.title+"</h2><p><span>&#xf017;</span> "+elm.timestamp+"</p><audio controls>"+
    "<source src=\"/ytobg.mp3?id="+elm.videoId+"\" type=\"audio/mpeg\">"+
"</audio></div>";
});
    }

}

}