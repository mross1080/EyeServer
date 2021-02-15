var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let currentEyeVideoIndex = 0
let currentEyeVideoUrl = "eye.mp4"
let eyeVideos = ["2.mp4","3.mp4","4.mp4","5.mp4","6.mp4"]

setInterval(function(){
  currentEyeVideoIndex = currentEyeVideoIndex + 1
  if (currentEyeVideoIndex >= eyeVideos.length) {
    currentEyeVideoIndex = 0
  }

  

},10000)

router.get('/a', function(req, res, next) {
  
  let jsonResponse = { currentEyeVideoUrl: eyeVideos[currentEyeVideoIndex], 
    currentIndex: currentEyeVideoIndex }
  console.log("Returning ", jsonResponse)
  res.json(jsonResponse);
});

module.exports = router;
