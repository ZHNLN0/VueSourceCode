var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
tagRE = defaultTagRE

match = tagRE.exec('前面{{ world }}后面')
console.log(match)