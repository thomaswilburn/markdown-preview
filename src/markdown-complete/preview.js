// require("ace");
var commonmark = require("commonmark");

var Preview = function(element) {
  this.textarea = element.querySelector(".editor textarea");
  this.output = element.querySelector(".preview");
  this.parser = new commonmark.Parser();
  this.renderer = new commonmark.HtmlRenderer();
  this.textarea.addEventListener("keyup", this.onKeydown.bind(this));
  this.render();
}

Preview.prototype = {
  textarea: null,
  output: null,
  parser: null,
  renderer: null,
  render: function() {
    var input = this.textarea.value.trim();
    var parsed = this.parser.parse(input);
    var html = this.renderer.render(parsed);
    this.output.innerHTML = html;
  },
  onKeydown: function() {
    this.render();
  }
}

module.exports = Preview;