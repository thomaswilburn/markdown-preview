//shim
require("document-register-element");

//element setup
var template = require("./_template.html");
require("./markdown-complete.less");
var Preview = require("./preview");

var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
  var content = this.innerHTML.trim();
  this.innerHTML = "";
  var root = this;
  if (this.createShadowRoot) {
    root = this.createShadowRoot();
  }
  root.innerHTML = template({ text: content });
  var preview = new Preview(root);
};
proto.attachedCallback = function() {};
proto.detachedCallback = function() {};
proto.attributeChangedCallback = function() {};

document.registerElement("markdown-complete", { prototype: proto });