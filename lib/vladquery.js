function VladQuery(selector) {
  if(!(this instanceof VladQuery)) return new VladQuery(selector);
  this.elements = document.querySelectorAll(selector);

}

window.A = VladQuery;
 

VladQuery.prototype.each = function(callback) {
  for(var i = 0; i < this.elements.length; i++){
    callback(this.elements[i],i)
  }
}

VladQuery.prototype.html = function(html) {
  if (!html) {
    return this.elements[0].innerHTML;
  } else {
    this.each(function(element) {
      element.innerHTML = html;
    });
  } 
}

VladQuery.prototype.css = function(css) {
  for(var i = 0, keys = Object.keys(css); i < keys.length; i++ ){
    var key = keys[i];
    var value = css[key];
    this.each(function(element){
      element.style[key] = value;

     });
  } 
}

VladQuery.prototype.val = function(val) {
  this.each(function(element) {
    element.value = val;
  });
}
