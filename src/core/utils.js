// import * as moment from "moment"
// import "moment-duration-format";


// export function parseDuration(sec) {
//   return moment.duration(sec, 'seconds').format("hh:mm:ss")
// }

export function strFormat(str, limit = 30) {
  const begin = 0, end = limit
  if (str.length > limit)
    return str.slice(begin, end).toLowerCase() + '...'
  return str
}

export function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function metricFormat(number) {
  return number
}

export function serialize(obj) {
  return btoa(JSON.stringify(obj))
}

export function toCamelCase(text) {
  return text.toLowerCase().split(' ').map((word, index) => {
    if (index != 0) return word.charAt(0).toUpperCase() + word.slice(1)
    else return word;
  }).join(' ').replace(/\s/g, '')
}