//execute
var child_process = require('child_process');
//consume var
var texto01 = process.argv[2];
var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var fs = require('fs');
//text to speech
var text_to_speech = new TextToSpeechV1({
  username: 'username',
  password: 'password'
});

var params = {
  text: texto01,
  voice: 'en-US_AllisonVoice', // Optional voice
  accept: 'audio/ogg'
};

// Pipe the synthesized text to a file
text_to_speech.synthesize(params).pipe(fs.createWriteStream('output_en.ogg'));

//exec file 
child_process.exec('/usr/bin/mplayer /home/chip/teddy_node/start.ogg && /usr/bin/mplayer /home/chip/teddy_node/output_en.ogg');
