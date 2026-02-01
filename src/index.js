
// where the magic happens

var oldStorage = oldStorage|| {};


const HOUR = 3600000;
const MINUTE = 60000; 
const DAY = 86400000;
const HOUR2 = 7200000;
const HOUR3 = 10800000;
const HOUR4 = 14400000;
const HOUR5 = 18000000;
const HOUR6 = 21600000;
const HOUR7 = 25200000;
const HOUR8 = 28800000;
const HOUR9 = 32400000;
const HOUR10 = 36000000;
const HOUR11 = 39600000;
const HOUR12 = 43200000;
const HOUR13 = 46800000;
const HOUR14 = 50400000;
const HOUR15 = 54000000;
const HOUR16 = 57600000;
const HOUR17 = 61200000;
const HOUR18 = 64800000;
const HOUR19 = 68400000;
const HOUR20 = 72000000;
const HOUR21 = 75600000;
const HOUR22 = 79200000;
const HOUR23 = 82800000;


oldStorage.expireIn = function (key, value, expirationTime) {
 // set key value pairs and expirationTime

   const item = {
    value,
    expires: Date.now() + expirationTime
  };
   localStorage.setItem(key, JSON.stringify(item));
  
 }

 oldStorage.isExpired = function(key) {

      const item = JSON.parse(localStorage.getItem(key));
      if (Date.now() > item.expires) {
         localStorage.removeItem(key)
         return null
      } if (!item) {
         return null
      } else {
         return item.value
      }
 }
 


module.exports = {
  expireIn: oldStorage.expireIn,
  isExpired: oldStorage.isExpired,
  HOUR,
  MINUTE,
  DAY,
  HOUR2,
  HOUR3,
  HOUR4,
  HOUR5,
  HOUR6,
  HOUR7,
  HOUR8,
  HOUR9,
  HOUR10,
  HOUR11,
  HOUR12,
  HOUR13,
  HOUR14,
  HOUR15,
  HOUR16,
  HOUR17,
  HOUR18,
  HOUR19,
  HOUR20,
  HOUR21,
  HOUR22,
  HOUR23
}