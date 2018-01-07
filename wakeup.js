const say = require('say');
const sound = require('play-sound')();
const Wunderground = require('wunderground-api');
const weather = new Wunderground('9b24af38fa79a54d', 'Oakland', 'CA');
const prompt = require('prompt');

var weatherReport = '';
var astronomyReport = '';
var events = [];

weather.forecast('', (error, data) => {
  // TODO: get precipitation, wind
  // console.log(data);
  const today = data.simpleforecast.forecastday[0];
  console.log(today);
  weatherReport = (
    `${today.conditions} conditions. high ${today.high.fahrenheit}, low ${today.low.fahrenheit}`
  );
});

// weather.astronomy('', (error, data) => {
//   // TODO: get interesting events besides sun phase
//   const sunphase = data.sun_phase;
//
//   const sunrise = sunphase.sunrise;
//   const sunriseDate = new Date();
//   sunriseDate.setHours(parseInt(sunrise.hour));
//   sunriseDate.setMinutes(parseInt(sunrise.minute));
//   sunriseDate.setSeconds(0);
//   sunriseDate.setMilliseconds(0);
//
//   const sunset = sunphase.sunset;
//   const sunsetDate = new Date();
//   sunsetDate.setHours(parseInt(sunset.hour));
//   sunsetDate.setMinutes(parseInt(sunset.minute));
//   sunsetDate.setSeconds(0);
//   sunsetDate.setMilliseconds(0);
//
//   const now = new Date().getTime();
//   const minutesSinceSunrise = Math.round((now - sunriseDate.getTime()) / 1000 / 60);
//   const minutesUntilSunset = Math.round((sunsetDate.getTime() - now) / 1000 / 60);
//
//   astronomyReport =
//   `The sun rose ${
//     minutesSinceSunrise
//   } minutes ago, and will set ${
//     minutesUntilSunset
//   } minutes from now`;
// });
//
// const announcementSound = 'jumpsound.wav';
//
// function alarm() {
//   const alarmLoop = setInterval(() => sound.play(announcementSound), 3000);
//   prompt.message = 'Enter some text to make the sound stop'
//   prompt.delimiter = ''
//   prompt.start();
//   prompt.get([':'], (error, result) => {
//     if (result) {
//       clearInterval(alarmLoop);
//       say.speak(
//         `Welcome to daytime. ${astronomyReport}. ${weatherReport}`
//       );
//       events.forEach((event) => {
//         // schedule announcement
//       })
//     }
//   });
// }
//
// function announce(announcement, next) {
//   sound.play(announcementSound, () => {
//     say.speak(announcement, next);
//   });
// }
// //
// // function scheduleAnnouncement(date, announcement, next) {
// //   announce(announcement, next);
// // }
// //
// alarm();
