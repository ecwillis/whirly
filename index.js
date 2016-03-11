
module.exports = function(text) {
  
  if (text === 'welcome') {
    text = text + ' Frank please!';
  }

  text = text.toUpperCase();

  return text.split();
}
