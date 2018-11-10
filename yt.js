const app = require('./server').app;
const ytSearch = require('yt-search');
const ytdl = require('ytdl-core');



app.get('/ytobg.mp3',(req,res,err)=>{
    // console.log('id='+req.query.id);
    if(err) {
       console.log(err); 
    }
    
var id = req.query.id ? req.query.id : 'vecSVX1QYbQ';
res.writeHead(200, {
    'Content-Type': 'audio/mpeg'})

    ytdl('https://www.youtube.com/watch?v='+id, {filter: 'audioonly'}).pipe(res);
//fs.createReadStream('audioVideo.mp3').pipe(res);
});

//{q: searchWord}
app.post('/ytobg',(req,res,err)=>{
    // console.log(req.body);
    ytSearch( req.body.q, function ( err, r ) {
        if ( err ) throw err
       
        const videos = r.videos
       
        res.json(videos.filter(e=>e.videoId).slice(0,9));
      } )
});