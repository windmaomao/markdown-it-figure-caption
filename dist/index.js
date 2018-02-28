'use strict';

module.exports = function markdownItFigureCaption(md, config) {
  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    config = config || {};

    var token = tokens[idx];
    var srcIndex = token.attrIndex('src');
    var url = token.attrs[srcIndex][1];
    var caption = token.content;

    var target = generateTargetAttribute(config.target);
    var linkClass = generateClass(config.linkClass);
    var imgClass = generateClass(config.imgClass);

    return '\n      <figure>\n        <img src="' + url + '" alt="' + caption + '" />\n        <figcaption>' + caption + '</figcaption>\n      </figure>\n    ';
  };
};

function generateClass(className) {
  if (!className) return '';

  return ' class="' + className + '"';
}

function generateTargetAttribute(target) {
  target = target || '_self';

  return ' target="' + target + '"';
}
