// ==UserScript==
// @name         ScombZ-Utilities-for-UserScript
// @namespace    https://twitter.com/yudai1204
// @version      3.1.0
// @description  より快適なScombZライフのために、サイドメニュー、テスト、ログイン等を改善します
// @author       @yudai1204
// @match        https://scombz.shibaura-it.ac.jp/*
// @match        https://adfs.sic.shibaura-it.ac.jp/adfs/ls/*
// @match        http://syllabus.sic.shibaura-it.ac.jp/*
// @match        https://scomb.shibaura-it.ac.jp/*
// @icon         https://scombz.shibaura-it.ac.jp/favicon.ico
// @updateURL    https://raw.githubusercontent.com/yudai1204/ScombZ-Utilities/dev/scombz-utilities.user.js
// @downloadURL  https://raw.githubusercontent.com/yudai1204/ScombZ-Utilities/dev/scombz-utilities.user.js
// @grant        none
// @license      MIT
// ==/UserScript==

//
// Escape Codec Library: ecl.js (Ver.041208)
//
// Copyright (C) http://nurucom-archives.hp.infoseek.co.jp/digital/
//

const EscapeEUCJP=function(str){
    return str.replace(/[^*+.-9A-Z_a-z-]/g,function(s){
        var c=s.charCodeAt(0);
        return (c<128?(c<16?"%0":"%")+c.toString(16):65376<c&&c<65440?"%8E%"+(c-65216).toString(16):(c=JCT8836.indexOf(s))<0?"%A1%A6":"%"+((c-(c%=94))/94+161).toString(16)+"%"+(c+161).toString(16)).toUpperCase()
    })
};
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */
 !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).marked={})}(this,function(r){"use strict";function i(e,t){for(var u=0;u<t.length;u++){var n=t[u];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var u=0,n=new Array(t);u<t;u++)n[u]=e[u];return n}function b(e,t){var u,n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var u=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(u="Object"===u&&e.constructor?e.constructor.name:u)||"Set"===u?Array.from(e):"Arguments"===u||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length)return n&&(e=n),u=0,function(){return u>=e.length?{done:!0}:{done:!1,value:e[u++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}r.defaults=e();function u(e){return t[e]}var n=/[&<>"']/,l=/[&<>"']/g,a=/[<>"']|&(?!#?\w+;)/,o=/[<>"']|&(?!#?\w+;)/g,t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function D(e,t){if(t){if(n.test(e))return e.replace(l,u)}else if(a.test(e))return e.replace(o,u);return e}var c=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function x(e){return e.replace(c,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}var h=/(^|[^\[])\^/g;function p(u,e){u="string"==typeof u?u:u.source,e=e||"";var n={replace:function(e,t){return t=(t=t.source||t).replace(h,"$1"),u=u.replace(e,t),n},getRegex:function(){return new RegExp(u,e)}};return n}var f=/[^\w:]/g,Z=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function g(e,t,u){if(e){try{n=decodeURIComponent(x(u)).replace(f,"").toLowerCase()}catch(e){return null}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return null}var n;t&&!Z.test(u)&&(e=u,F[" "+(n=t)]||(O.test(n)?F[" "+n]=n+"/":F[" "+n]=k(n,"/",!0)),t=-1===(n=F[" "+n]).indexOf(":"),u="//"===e.substring(0,2)?t?e:n.replace(q,"$1")+e:"/"===e.charAt(0)?t?e:n.replace(L,"$1")+e:n+e);try{u=encodeURI(u).replace(/%25/g,"%")}catch(e){return null}return u}var F={},O=/^[^:]+:\/*[^/]*$/,q=/^([^:]+:)[\s\S]*$/,L=/^([^:]+:\/*[^/]*)[\s\S]*$/;var A={exec:function(){}};function d(e){for(var t,u,n=1;n<arguments.length;n++)for(u in t=arguments[n])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e}function C(e,t){var u=e.replace(/\|/g,function(e,t,u){for(var n=!1,r=t;0<=--r&&"\\"===u[r];)n=!n;return n?"|":" |"}).split(/ \|/),n=0;if(u[0].trim()||u.shift(),0<u.length&&!u[u.length-1].trim()&&u.pop(),u.length>t)u.splice(t);else for(;u.length<t;)u.push("");for(;n<u.length;n++)u[n]=u[n].trim().replace(/\\\|/g,"|");return u}function k(e,t,u){var n=e.length;if(0===n)return"";for(var r=0;r<n;){var i=e.charAt(n-r-1);if(i!==t||u){if(i===t||!u)break;r++}else r++}return e.slice(0,n-r)}function E(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function m(e,t){if(t<1)return"";for(var u="";1<t;)1&t&&(u+=e),t>>=1,e+=e;return u+e}function B(e,t,u,n){var r=t.href,t=t.title?D(t.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?(n.state.inLink=!0,e={type:"link",raw:u,href:r,title:t,text:i,tokens:n.inlineTokens(i,[])},n.state.inLink=!1,e):{type:"image",raw:u,href:r,title:t,text:D(i)}}var w=function(){function e(e){this.options=e||r.defaults}var t=e.prototype;return t.space=function(e){e=this.rules.block.newline.exec(e);if(e&&0<e[0].length)return{type:"space",raw:e[0]}},t.code=function(e){var t,e=this.rules.block.code.exec(e);if(e)return t=e[0].replace(/^ {1,4}/gm,""),{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:k(t,"\n")}},t.fences=function(e){var t,u,e=this.rules.block.fences.exec(e);if(e)return u=function(e,t){if(null===(e=e.match(/^(\s+)(?:```)/)))return t;var u=e[1];return t.split("\n").map(function(e){var t=e.match(/^\s+/);return null!==t&&t[0].length>=u.length?e.slice(u.length):e}).join("\n")}(t=e[0],e[3]||""),{type:"code",raw:t,lang:e[2]&&e[2].trim(),text:u}},t.heading=function(e){var t,u,e=this.rules.block.heading.exec(e);if(e)return t=e[2].trim(),/#$/.test(t)&&(u=k(t,"#"),!this.options.pedantic&&u&&!/ $/.test(u)||(t=u.trim())),u={type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:[]},this.lexer.inline(u.text,u.tokens),u},t.hr=function(e){e=this.rules.block.hr.exec(e);if(e)return{type:"hr",raw:e[0]}},t.blockquote=function(e){var t,e=this.rules.block.blockquote.exec(e);if(e)return t=e[0].replace(/^ *>[ \t]?/gm,""),{type:"blockquote",raw:e[0],tokens:this.lexer.blockTokens(t,[]),text:t}},t.list=function(e){var t=this.rules.block.list.exec(e);if(t){var u,n,r,i,s,l,a,o,D,c,h,p=1<(g=t[1].trim()).length,f={type:"list",raw:"",ordered:p,start:p?+g.slice(0,-1):"",loose:!1,items:[]},g=p?"\\d{1,9}\\"+g.slice(-1):"\\"+g;this.options.pedantic&&(g=p?g:"[*+-]");for(var F=new RegExp("^( {0,3}"+g+")((?:[\t ][^\\n]*)?(?:\\n|$))");e&&(h=!1,t=F.exec(e))&&!this.rules.block.hr.test(e);){if(u=t[0],e=e.substring(u.length),a=t[2].split("\n",1)[0],o=e.split("\n",1)[0],this.options.pedantic?(i=2,c=a.trimLeft()):(i=t[2].search(/[^ ]/),c=a.slice(i=4<i?1:i),i+=t[1].length),s=!1,!a&&/^ *$/.test(o)&&(u+=o+"\n",e=e.substring(o.length+1),h=!0),!h)for(var A=new RegExp("^ {0,"+Math.min(3,i-1)+"}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))"),d=new RegExp("^ {0,"+Math.min(3,i-1)+"}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"),C=new RegExp("^( {0,"+Math.min(3,i-1)+"})(```|~~~)");e&&(a=D=e.split("\n",1)[0],this.options.pedantic&&(a=a.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!C.test(a))&&!this.rules.block.heading.test(a)&&!A.test(a)&&!d.test(e);){if(a.search(/[^ ]/)>=i||!a.trim())c+="\n"+a.slice(i);else{if(s)break;c+="\n"+a}s||a.trim()||(s=!0),u+=D+"\n",e=e.substring(D.length+1)}f.loose||(l?f.loose=!0:/\n *\n *$/.test(u)&&(l=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(c))&&(r="[ ] "!==n[0],c=c.replace(/^\[[ xX]\] +/,"")),f.items.push({type:"list_item",raw:u,task:!!n,checked:r,loose:!1,text:c}),f.raw+=u}f.items[f.items.length-1].raw=u.trimRight(),f.items[f.items.length-1].text=c.trimRight(),f.raw=f.raw.trimRight();for(var k=f.items.length,E=0;E<k;E++){this.lexer.state.top=!1,f.items[E].tokens=this.lexer.blockTokens(f.items[E].text,[]);var x=f.items[E].tokens.filter(function(e){return"space"===e.type}),m=x.every(function(e){for(var t,u=0,n=b(e.raw.split(""));!(t=n()).done;)if("\n"===t.value&&(u+=1),1<u)return!0;return!1});!f.loose&&x.length&&m&&(f.loose=!0,f.items[E].loose=!0)}return f}},t.html=function(e){var t,e=this.rules.block.html.exec(e);if(e)return t={type:"html",raw:e[0],pre:!this.options.sanitizer&&("pre"===e[1]||"script"===e[1]||"style"===e[1]),text:e[0]},this.options.sanitize&&(t.type="paragraph",t.text=this.options.sanitizer?this.options.sanitizer(e[0]):D(e[0]),t.tokens=[],this.lexer.inline(t.text,t.tokens)),t},t.def=function(e){e=this.rules.block.def.exec(e);if(e)return e[3]&&(e[3]=e[3].substring(1,e[3].length-1)),{type:"def",tag:e[1].toLowerCase().replace(/\s+/g," "),raw:e[0],href:e[2],title:e[3]}},t.table=function(e){e=this.rules.block.table.exec(e);if(e){var t={type:"table",header:C(e[1]).map(function(e){return{text:e}}),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(t.header.length===t.align.length){t.raw=e[0];for(var u,n,r,i=t.align.length,s=0;s<i;s++)/^ *-+: *$/.test(t.align[s])?t.align[s]="right":/^ *:-+: *$/.test(t.align[s])?t.align[s]="center":/^ *:-+ *$/.test(t.align[s])?t.align[s]="left":t.align[s]=null;for(i=t.rows.length,s=0;s<i;s++)t.rows[s]=C(t.rows[s],t.header.length).map(function(e){return{text:e}});for(i=t.header.length,u=0;u<i;u++)t.header[u].tokens=[],this.lexer.inline(t.header[u].text,t.header[u].tokens);for(i=t.rows.length,u=0;u<i;u++)for(r=t.rows[u],n=0;n<r.length;n++)r[n].tokens=[],this.lexer.inline(r[n].text,r[n].tokens);return t}}},t.lheading=function(e){var e=this.rules.block.lheading.exec(e);if(e)return e={type:"heading",raw:e[0],depth:"="===e[2].charAt(0)?1:2,text:e[1],tokens:[]},this.lexer.inline(e.text,e.tokens),e},t.paragraph=function(e){var e=this.rules.block.paragraph.exec(e);if(e)return e={type:"paragraph",raw:e[0],text:"\n"===e[1].charAt(e[1].length-1)?e[1].slice(0,-1):e[1],tokens:[]},this.lexer.inline(e.text,e.tokens),e},t.text=function(e){var e=this.rules.block.text.exec(e);if(e)return e={type:"text",raw:e[0],text:e[0],tokens:[]},this.lexer.inline(e.text,e.tokens),e},t.escape=function(e){e=this.rules.inline.escape.exec(e);if(e)return{type:"escape",raw:e[0],text:D(e[1])}},t.tag=function(e){e=this.rules.inline.tag.exec(e);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):D(e[0]):e[0]}},t.link=function(e){e=this.rules.inline.link.exec(e);if(e){var t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;var u=k(t.slice(0,-1),"\\");if((t.length-u.length)%2==0)return}else{u=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var u=e.length,n=0,r=0;r<u;r++)if("\\"===e[r])r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&--n<0)return r;return-1}(e[2],"()");-1<u&&(r=(0===e[0].indexOf("!")?5:4)+e[1].length+u,e[2]=e[2].substring(0,u),e[0]=e[0].substring(0,r).trim(),e[3]="")}var n,u=e[2],r="";return this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u))&&(u=n[1],r=n[3]):r=e[3]?e[3].slice(1,-1):"",u=u.trim(),B(e,{href:(u=/^</.test(u)?this.options.pedantic&&!/>$/.test(t)?u.slice(1):u.slice(1,-1):u)&&u.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}},t.reflink=function(e,t){var u;if((u=this.rules.inline.reflink.exec(e))||(u=this.rules.inline.nolink.exec(e)))return(e=t[(e=(u[2]||u[1]).replace(/\s+/g," ")).toLowerCase()])&&e.href?B(u,e,u[0],this.lexer):{type:"text",raw:t=u[0].charAt(0),text:t}},t.emStrong=function(e,t,u){void 0===u&&(u="");var n=this.rules.inline.emStrong.lDelim.exec(e);if(n&&(!n[3]||!u.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))){var r=n[1]||n[2]||"";if(!r||""===u||this.rules.inline.punctuation.exec(u)){var i=n[0].length-1,s=i,l=0,a="*"===n[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(a.lastIndex=0,t=t.slice(-1*e.length+i);null!=(n=a.exec(t));)if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6])if(o=o.length,n[3]||n[4])s+=o;else if((n[5]||n[6])&&i%3&&!((i+o)%3))l+=o;else if(!(0<(s-=o))){var o=Math.min(o,o+s+l);if(Math.min(i,o)%2)return D=e.slice(1,i+n.index+o),{type:"em",raw:e.slice(0,i+n.index+o+1),text:D,tokens:this.lexer.inlineTokens(D,[])};var D=e.slice(2,i+n.index+o-1);return{type:"strong",raw:e.slice(0,i+n.index+o+1),text:D,tokens:this.lexer.inlineTokens(D,[])}}}}},t.codespan=function(e){var t,u,n,e=this.rules.inline.code.exec(e);if(e)return n=e[2].replace(/\n/g," "),t=/[^ ]/.test(n),u=/^ /.test(n)&&/ $/.test(n),n=D(n=t&&u?n.substring(1,n.length-1):n,!0),{type:"codespan",raw:e[0],text:n}},t.br=function(e){e=this.rules.inline.br.exec(e);if(e)return{type:"br",raw:e[0]}},t.del=function(e){e=this.rules.inline.del.exec(e);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2],[])}},t.autolink=function(e,t){var u,e=this.rules.inline.autolink.exec(e);if(e)return t="@"===e[2]?"mailto:"+(u=D(this.options.mangle?t(e[1]):e[1])):u=D(e[1]),{type:"link",raw:e[0],text:u,href:t,tokens:[{type:"text",raw:u,text:u}]}},t.url=function(e,t){var u,n,r,i;if(u=this.rules.inline.url.exec(e)){if("@"===u[2])r="mailto:"+(n=D(this.options.mangle?t(u[0]):u[0]));else{for(;i=u[0],u[0]=this.rules.inline._backpedal.exec(u[0])[0],i!==u[0];);n=D(u[0]),r="www."===u[1]?"http://"+n:n}return{type:"link",raw:u[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}},t.inlineText=function(e,t){e=this.rules.inline.text.exec(e);if(e)return t=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):D(e[0]):e[0]:D(this.options.smartypants?t(e[0]):e[0]),{type:"text",raw:e[0],text:t}},e}(),y={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:A,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/},v=(y.def=p(y.def).replace("label",y._label).replace("title",y._title).getRegex(),y.bullet=/(?:[*+-]|\d{1,9}[.)])/,y.listItemStart=p(/^( *)(bull) */).replace("bull",y.bullet).getRegex(),y.list=p(y.list).replace(/bull/g,y.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+y.def.source+")").getRegex(),y._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",y._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,y.html=p(y.html,"i").replace("comment",y._comment).replace("tag",y._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),y.paragraph=p(y._paragraph).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",y._tag).getRegex(),y.blockquote=p(y.blockquote).replace("paragraph",y.paragraph).getRegex(),y.normal=d({},y),y.gfm=d({},y.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),y.gfm.table=p(y.gfm.table).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",y._tag).getRegex(),y.gfm.paragraph=p(y._paragraph).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",y.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",y._tag).getRegex(),y.pedantic=d({},y.normal,{html:p("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",y._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:A,paragraph:p(y.normal._paragraph).replace("hr",y.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",y.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()}),{escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:A,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:A,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/});function j(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function _(e){for(var t,u="",n=e.length,r=0;r<n;r++)t=e.charCodeAt(r),u+="&#"+(t=.5<Math.random()?"x"+t.toString(16):t)+";";return u}v._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",v.punctuation=p(v.punctuation).replace(/punctuation/g,v._punctuation).getRegex(),v.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,v.escapedEmSt=/\\\*|\\_/g,v._comment=p(y._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),v.emStrong.lDelim=p(v.emStrong.lDelim).replace(/punct/g,v._punctuation).getRegex(),v.emStrong.rDelimAst=p(v.emStrong.rDelimAst,"g").replace(/punct/g,v._punctuation).getRegex(),v.emStrong.rDelimUnd=p(v.emStrong.rDelimUnd,"g").replace(/punct/g,v._punctuation).getRegex(),v._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,v._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,v._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,v.autolink=p(v.autolink).replace("scheme",v._scheme).replace("email",v._email).getRegex(),v._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,v.tag=p(v.tag).replace("comment",v._comment).replace("attribute",v._attribute).getRegex(),v._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,v._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,v._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,v.link=p(v.link).replace("label",v._label).replace("href",v._href).replace("title",v._title).getRegex(),v.reflink=p(v.reflink).replace("label",v._label).replace("ref",y._label).getRegex(),v.nolink=p(v.nolink).replace("ref",y._label).getRegex(),v.reflinkSearch=p(v.reflinkSearch,"g").replace("reflink",v.reflink).replace("nolink",v.nolink).getRegex(),v.normal=d({},v),v.pedantic=d({},v.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:p(/^!?\[(label)\]\((.*?)\)/).replace("label",v._label).getRegex(),reflink:p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",v._label).getRegex()}),v.gfm=d({},v.normal,{escape:p(v.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),v.gfm.url=p(v.gfm.url,"i").replace("email",v.gfm._extended_email).getRegex(),v.breaks=d({},v.gfm,{br:p(v.br).replace("{2,}","*").getRegex(),text:p(v.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var z=function(){function u(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||r.defaults,this.options.tokenizer=this.options.tokenizer||new w,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,(this.tokenizer.lexer=this).inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};e={block:y.normal,inline:v.normal};this.options.pedantic?(e.block=y.pedantic,e.inline=v.pedantic):this.options.gfm&&(e.block=y.gfm,this.options.breaks?e.inline=v.breaks:e.inline=v.gfm),this.tokenizer.rules=e}u.lex=function(e,t){return new u(t).lex(e)},u.lexInline=function(e,t){return new u(t).inlineTokens(e)};var e,t,n=u.prototype;return n.lex=function(e){var t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens},n.blockTokens=function(r,t){var u,e,i,n,s=this;for(void 0===t&&(t=[]),r=this.options.pedantic?r.replace(/\t/g,"    ").replace(/^ +$/gm,""):r.replace(/^( *)(\t+)/gm,function(e,t,u){return t+"    ".repeat(u.length)});r;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(function(e){return!!(u=e.call({lexer:s},r,t))&&(r=r.substring(u.raw.length),t.push(u),!0)})))if(u=this.tokenizer.space(r))r=r.substring(u.raw.length),1===u.raw.length&&0<t.length?t[t.length-1].raw+="\n":t.push(u);else if(u=this.tokenizer.code(r))r=r.substring(u.raw.length),!(e=t[t.length-1])||"paragraph"!==e.type&&"text"!==e.type?t.push(u):(e.raw+="\n"+u.raw,e.text+="\n"+u.text,this.inlineQueue[this.inlineQueue.length-1].src=e.text);else if(u=this.tokenizer.fences(r))r=r.substring(u.raw.length),t.push(u);else if(u=this.tokenizer.heading(r))r=r.substring(u.raw.length),t.push(u);else if(u=this.tokenizer.hr(r))r=r.substring(u.raw.length),t.push(u);else if(u=this.tokenizer.blockquote(r))r=r.substring(u.raw.length),t.push(u);else if(u=this.tokenizer.list(r))r=r.substring(u.raw.length),t.push(u);else if(u=this.tokenizer.html(r))r=r.substring(u.raw.length),t.push(u);else if(u=this.tokenizer.def(r))r=r.substring(u.raw.length),!(e=t[t.length-1])||"paragraph"!==e.type&&"text"!==e.type?this.tokens.links[u.tag]||(this.tokens.links[u.tag]={href:u.href,title:u.title}):(e.raw+="\n"+u.raw,e.text+="\n"+u.raw,this.inlineQueue[this.inlineQueue.length-1].src=e.text);else if(u=this.tokenizer.table(r))r=r.substring(u.raw.length),t.push(u);else if(u=this.tokenizer.lheading(r))r=r.substring(u.raw.length),t.push(u);else if(i=r,this.options.extensions&&this.options.extensions.startBlock&&!function(){var t=1/0,u=r.slice(1),n=void 0;s.options.extensions.startBlock.forEach(function(e){"number"==typeof(n=e.call({lexer:this},u))&&0<=n&&(t=Math.min(t,n))}),t<1/0&&0<=t&&(i=r.substring(0,t+1))}(),this.state.top&&(u=this.tokenizer.paragraph(i)))e=t[t.length-1],n&&"paragraph"===e.type?(e.raw+="\n"+u.raw,e.text+="\n"+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=e.text):t.push(u),n=i.length!==r.length,r=r.substring(u.raw.length);else if(u=this.tokenizer.text(r))r=r.substring(u.raw.length),(e=t[t.length-1])&&"text"===e.type?(e.raw+="\n"+u.raw,e.text+="\n"+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=e.text):t.push(u);else if(r){var l="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(l);break}throw new Error(l)}return this.state.top=!0,t},n.inline=function(e,t){this.inlineQueue.push({src:e,tokens:t})},n.inlineTokens=function(r,t){var u,e,i,n,s,l,a=this,o=(void 0===t&&(t=[]),r);if(this.tokens.links){var D=Object.keys(this.tokens.links);if(0<D.length)for(;null!=(n=this.tokenizer.rules.inline.reflinkSearch.exec(o));)D.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,n.index)+"["+m("a",n[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(n=this.tokenizer.rules.inline.blockSkip.exec(o));)o=o.slice(0,n.index)+"["+m("a",n[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(n=this.tokenizer.rules.inline.escapedEmSt.exec(o));)o=o.slice(0,n.index)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;r;)if(s||(l=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(function(e){return!!(u=e.call({lexer:a},r,t))&&(r=r.substring(u.raw.length),t.push(u),!0)})))if(u=this.tokenizer.escape(r))r=r.substring(u.raw.length),t.push(u);else if(u=this.tokenizer.tag(r))r=r.substring(u.raw.length),(e=t[t.length-1])&&"text"===u.type&&"text"===e.type?(e.raw+=u.raw,e.text+=u.text):t.push(u);else if(u=this.tokenizer.link(r))r=r.substring(u.raw.length),t.push(u);else if(u=this.tokenizer.reflink(r,this.tokens.links))r=r.substring(u.raw.length),(e=t[t.length-1])&&"text"===u.type&&"text"===e.type?(e.raw+=u.raw,e.text+=u.text):t.push(u);else if(u=this.tokenizer.emStrong(r,o,l))r=r.substring(u.raw.length),t.push(u);else if(u=this.tokenizer.codespan(r))r=r.substring(u.raw.length),t.push(u);else if(u=this.tokenizer.br(r))r=r.substring(u.raw.length),t.push(u);else if(u=this.tokenizer.del(r))r=r.substring(u.raw.length),t.push(u);else if(u=this.tokenizer.autolink(r,_))r=r.substring(u.raw.length),t.push(u);else if(!this.state.inLink&&(u=this.tokenizer.url(r,_)))r=r.substring(u.raw.length),t.push(u);else if(i=r,this.options.extensions&&this.options.extensions.startInline&&!function(){var t=1/0,u=r.slice(1),n=void 0;a.options.extensions.startInline.forEach(function(e){"number"==typeof(n=e.call({lexer:this},u))&&0<=n&&(t=Math.min(t,n))}),t<1/0&&0<=t&&(i=r.substring(0,t+1))}(),u=this.tokenizer.inlineText(i,j))r=r.substring(u.raw.length),"_"!==u.raw.slice(-1)&&(l=u.raw.slice(-1)),s=!0,(e=t[t.length-1])&&"text"===e.type?(e.raw+=u.raw,e.text+=u.text):t.push(u);else if(r){var c="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(c);break}throw new Error(c)}return t},n=u,t=[{key:"rules",get:function(){return{block:y,inline:v}}}],(e=null)&&i(n.prototype,e),t&&i(n,t),Object.defineProperty(n,"prototype",{writable:!1}),u}(),$=function(){function e(e){this.options=e||r.defaults}var t=e.prototype;return t.code=function(e,t,u){var n,t=(t||"").match(/\S*/)[0];return this.options.highlight&&null!=(n=this.options.highlight(e,t))&&n!==e&&(u=!0,e=n),e=e.replace(/\n$/,"")+"\n",t?'<pre><code class="'+this.options.langPrefix+D(t,!0)+'">'+(u?e:D(e,!0))+"</code></pre>\n":"<pre><code>"+(u?e:D(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,u,n){return this.options.headerIds?"<h"+t+' id="'+(this.options.headerPrefix+n.slug(u))+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,u){var n=t?"ol":"ul";return"<"+n+(t&&1!==u?' start="'+u+'"':"")+">\n"+e+"</"+n+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n"+(t=t&&"<tbody>"+t+"</tbody>")+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var u=t.header?"th":"td";return(t.align?"<"+u+' align="'+t.align+'">':"<"+u+">")+e+"</"+u+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,u){if(null===(e=g(this.options.sanitize,this.options.baseUrl,e)))return u;e='<a href="'+D(e)+'"';return t&&(e+=' title="'+t+'"'),e+=">"+u+"</a>"},t.image=function(e,t,u){if(null===(e=g(this.options.sanitize,this.options.baseUrl,e)))return u;e='<img src="'+e+'" alt="'+u+'"';return t&&(e+=' title="'+t+'"'),e+=this.options.xhtml?"/>":">"},t.text=function(e){return e},e}(),S=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,u){return""+u},t.image=function(e,t,u){return""+u},t.br=function(){return""},e}(),T=function(){function e(){this.seen={}}var t=e.prototype;return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var u=e,n=0;if(this.seen.hasOwnProperty(u))for(n=this.seen[e];u=e+"-"+ ++n,this.seen.hasOwnProperty(u););return t||(this.seen[e]=n,this.seen[u]=0),u},t.slug=function(e,t){void 0===t&&(t={});e=this.serialize(e);return this.getNextSafeSlug(e,t.dryrun)},e}(),R=function(){function u(e){this.options=e||r.defaults,this.options.renderer=this.options.renderer||new $,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new S,this.slugger=new T}u.parse=function(e,t){return new u(t).parse(e)},u.parseInline=function(e,t){return new u(t).parseInline(e)};var e=u.prototype;return e.parse=function(e,t){void 0===t&&(t=!0);for(var u,n,r,i,s,l,a,o,D,c,h,p,f,g,F,A,d="",C=e.length,k=0;k<C;k++)if(o=e[k],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(!1!==(A=this.options.extensions.renderers[o.type].call({parser:this},o))||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)))d+=A||"";else switch(o.type){case"space":continue;case"hr":d+=this.renderer.hr();continue;case"heading":d+=this.renderer.heading(this.parseInline(o.tokens),o.depth,x(this.parseInline(o.tokens,this.textRenderer)),this.slugger);continue;case"code":d+=this.renderer.code(o.text,o.lang,o.escaped);continue;case"table":for(l=D="",r=o.header.length,u=0;u<r;u++)l+=this.renderer.tablecell(this.parseInline(o.header[u].tokens),{header:!0,align:o.align[u]});for(D+=this.renderer.tablerow(l),a="",r=o.rows.length,u=0;u<r;u++){for(l="",i=(s=o.rows[u]).length,n=0;n<i;n++)l+=this.renderer.tablecell(this.parseInline(s[n].tokens),{header:!1,align:o.align[n]});a+=this.renderer.tablerow(l)}d+=this.renderer.table(D,a);continue;case"blockquote":a=this.parse(o.tokens),d+=this.renderer.blockquote(a);continue;case"list":for(D=o.ordered,E=o.start,c=o.loose,r=o.items.length,a="",u=0;u<r;u++)f=(p=o.items[u]).checked,g=p.task,h="",p.task&&(F=this.renderer.checkbox(f),c?0<p.tokens.length&&"paragraph"===p.tokens[0].type?(p.tokens[0].text=F+" "+p.tokens[0].text,p.tokens[0].tokens&&0<p.tokens[0].tokens.length&&"text"===p.tokens[0].tokens[0].type&&(p.tokens[0].tokens[0].text=F+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:F}):h+=F),h+=this.parse(p.tokens,c),a+=this.renderer.listitem(h,g,f);d+=this.renderer.list(a,D,E);continue;case"html":d+=this.renderer.html(o.text);continue;case"paragraph":d+=this.renderer.paragraph(this.parseInline(o.tokens));continue;case"text":for(a=o.tokens?this.parseInline(o.tokens):o.text;k+1<C&&"text"===e[k+1].type;)a+="\n"+((o=e[++k]).tokens?this.parseInline(o.tokens):o.text);d+=t?this.renderer.paragraph(a):a;continue;default:var E='Token with "'+o.type+'" type was not found.';if(this.options.silent)return void console.error(E);throw new Error(E)}return d},e.parseInline=function(e,t){t=t||this.renderer;for(var u,n,r="",i=e.length,s=0;s<i;s++)if(u=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(!1!==(n=this.options.extensions.renderers[u.type].call({parser:this},u))||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(u.type)))r+=n||"";else switch(u.type){case"escape":r+=t.text(u.text);break;case"html":r+=t.html(u.text);break;case"link":r+=t.link(u.href,u.title,this.parseInline(u.tokens,t));break;case"image":r+=t.image(u.href,u.title,u.text);break;case"strong":r+=t.strong(this.parseInline(u.tokens,t));break;case"em":r+=t.em(this.parseInline(u.tokens,t));break;case"codespan":r+=t.codespan(u.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(u.tokens,t));break;case"text":r+=t.text(u.text);break;default:var l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}return r},u}();function I(e,u,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof u&&(n=u,u=null),E(u=d({},I.defaults,u||{})),n){var r,i=u.highlight;try{r=z.lex(e,u)}catch(e){return n(e)}var s=function(t){var e;if(!t)try{u.walkTokens&&I.walkTokens(r,u.walkTokens),e=R.parse(r,u)}catch(e){t=e}return u.highlight=i,t?n(t):n(null,e)};if(!i||i.length<3)return s();if(delete u.highlight,!r.length)return s();var l=0;return I.walkTokens(r,function(u){"code"===u.type&&(l++,setTimeout(function(){i(u.text,u.lang,function(e,t){if(e)return s(e);null!=t&&t!==u.text&&(u.text=t,u.escaped=!0),0===--l&&s()})},0))}),void(0===l&&s())}try{var t=z.lex(e,u);return u.walkTokens&&I.walkTokens(t,u.walkTokens),R.parse(t,u)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",u.silent)return"<p>An error occurred:</p><pre>"+D(e.message+"",!0)+"</pre>";throw e}}I.options=I.setOptions=function(e){return d(I.defaults,e),e=I.defaults,r.defaults=e,I},I.getDefaults=e,I.defaults=r.defaults,I.use=function(){for(var e=arguments.length,t=new Array(e),u=0;u<e;u++)t[u]=arguments[u];var n,r=d.apply(void 0,[{}].concat(t)),o=I.defaults.extensions||{renderers:{},childTokens:{}};t.forEach(function(s){if(s.extensions&&(n=!0,s.extensions.forEach(function(r){if(!r.name)throw new Error("extension name required");var i;if(r.renderer&&(i=o.renderers?o.renderers[r.name]:null,o.renderers[r.name]=i?function(){for(var e=arguments.length,t=new Array(e),u=0;u<e;u++)t[u]=arguments[u];var n=r.renderer.apply(this,t);return n=!1===n?i.apply(this,t):n}:r.renderer),r.tokenizer){if(!r.level||"block"!==r.level&&"inline"!==r.level)throw new Error("extension level must be 'block' or 'inline'");o[r.level]?o[r.level].unshift(r.tokenizer):o[r.level]=[r.tokenizer],r.start&&("block"===r.level?o.startBlock?o.startBlock.push(r.start):o.startBlock=[r.start]:"inline"===r.level&&(o.startInline?o.startInline.push(r.start):o.startInline=[r.start]))}r.childTokens&&(o.childTokens[r.name]=r.childTokens)})),s.renderer){var e,l=I.defaults.renderer||new $;for(e in s.renderer)!function(r){var i=l[r];l[r]=function(){for(var e=arguments.length,t=new Array(e),u=0;u<e;u++)t[u]=arguments[u];var n=s.renderer[r].apply(l,t);return n=!1===n?i.apply(l,t):n}}(e);r.renderer=l}if(s.tokenizer){var t,a=I.defaults.tokenizer||new w;for(t in s.tokenizer)!function(r){var i=a[r];a[r]=function(){for(var e=arguments.length,t=new Array(e),u=0;u<e;u++)t[u]=arguments[u];var n=s.tokenizer[r].apply(a,t);return n=!1===n?i.apply(a,t):n}}(t);r.tokenizer=a}var u;s.walkTokens&&(u=I.defaults.walkTokens,r.walkTokens=function(e){s.walkTokens.call(this,e),u&&u.call(this,e)}),n&&(r.extensions=o),I.setOptions(r)})},I.walkTokens=function(e,l){for(var a,t=b(e);!(a=t()).done;)!function(){var t=a.value;switch(l.call(I,t),t.type){case"table":for(var e=b(t.header);!(u=e()).done;){var u=u.value;I.walkTokens(u.tokens,l)}for(var n,r=b(t.rows);!(n=r()).done;)for(var i=b(n.value);!(s=i()).done;){var s=s.value;I.walkTokens(s.tokens,l)}break;case"list":I.walkTokens(t.items,l);break;default:I.defaults.extensions&&I.defaults.extensions.childTokens&&I.defaults.extensions.childTokens[t.type]?I.defaults.extensions.childTokens[t.type].forEach(function(e){I.walkTokens(t[e],l)}):t.tokens&&I.walkTokens(t.tokens,l)}}()},I.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");E(t=d({},I.defaults,t||{}));try{var u=z.lexInline(e,t);return t.walkTokens&&I.walkTokens(u,t.walkTokens),R.parseInline(u,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+D(e.message+"",!0)+"</pre>";throw e}},I.Parser=R,I.parser=R.parse,I.Renderer=$,I.TextRenderer=S,I.Lexer=z,I.lexer=z.lex,I.Tokenizer=w,I.Slugger=T;var A=(I.parse=I).options,P=I.setOptions,Q=I.use,U=I.walkTokens,M=I.parseInline,N=I,X=R.parse,G=z.lex;r.Lexer=z,r.Parser=R,r.Renderer=$,r.Slugger=T,r.TextRenderer=S,r.Tokenizer=w,r.getDefaults=e,r.lexer=G,r.marked=I,r.options=A,r.parse=N,r.parseInline=M,r.parser=X,r.setOptions=P,r.use=Q,r.walkTokens=U,Object.defineProperty(r,"__esModule",{value:!0})});

JCT11280=Function('var a="zKV33~jZ4zN=~ji36XazM93y!{~k2y!o~k0ZlW6zN?3Wz3W?{EKzK[33[`y|;-~j^YOTz$!~kNy|L1$353~jV3zKk3~k-4P4zK_2+~jY4y!xYHR~jlz$_~jk4z$e3X5He<0y!wy|X3[:~l|VU[F3VZ056Hy!nz/m1XD61+1XY1E1=1y|bzKiz!H034zKj~mEz#c5ZA3-3X$1~mBz$$3~lyz#,4YN5~mEz#{ZKZ3V%7Y}!J3X-YEX_J(3~mAz =V;kE0/y|F3y!}~m>z/U~mI~j_2+~mA~jp2;~m@~k32;~m>V}2u~mEX#2x~mBy+x2242(~mBy,;2242(~may->2&XkG2;~mIy-_2&NXd2;~mGz,{4<6:.:B*B:XC4>6:.>B*BBXSA+A:X]E&E<~r#z+625z s2+zN=`HXI@YMXIAXZYUM8X4K/:Q!Z&33 3YWX[~mB`{zKt4z (zV/z 3zRw2%Wd39]S11z$PAXH5Xb;ZQWU1ZgWP%3~o@{Dgl#gd}T){Uo{y5_d{e@}C(} WU9|cB{w}bzvV|)[} H|zT}d||0~{]Q|(l{|x{iv{dw}(5}[Z|kuZ }cq{{y|ij}.I{idbof%cu^d}Rj^y|-M{ESYGYfYsZslS`?ZdYO__gLYRZ&fvb4oKfhSf^d<Yeasc1f&a=hnYG{QY{D`Bsa|u,}Dl|_Q{C%xK|Aq}C>|c#ryW=}eY{L+`)][YF_Ub^h4}[X|?r|u_ex}TL@YR]j{SrXgo*|Gv|rK}B#mu{R1}hs|dP{C7|^Qt3|@P{YVV |8&}#D}ef{e/{Rl|>Hni}R1{Z#{D[}CQlQ||E}[s{SG_+i8eplY[=[|ec[$YXn#`hcm}YR|{Ci(_[ql|?8p3]-}^t{wy}4la&pc|3e{Rp{LqiJ],] `kc(]@chYnrM`O^,ZLYhZB]ywyfGY~aex!_Qww{a!|)*lHrM{N+n&YYj~Z b c#e_[hZSon|rOt`}hBXa^i{lh|<0||r{KJ{kni)|x,|0auY{D!^Sce{w;|@S|cA}Xn{C1h${E]Z-XgZ*XPbp]^_qbH^e[`YM|a||+=]!Lc}]vdBc=j-YSZD]YmyYLYKZ9Z>Xcczc2{Yh}9Fc#Z.l{}(D{G{{mRhC|L3b#|xK[Bepj#ut`H[,{E9Yr}1b{[e]{ZFk7[ZYbZ0XL]}Ye[(`d}c!|*y`Dg=b;gR]Hm=hJho}R-[n}9;{N![7k_{UbmN]rf#pTe[x8}!Qcs_rs[m`|>N}^V})7{^r|/E}),}HH{OYe2{Skx)e<_.cj.cjoMhc^d}0uYZd!^J_@g,[[[?{i@][|3S}Yl3|!1|eZ|5IYw|1D}e7|Cv{OHbnx-`wvb[6[4} =g+k:{C:}ed{S]|2M]-}WZ|/q{LF|dYu^}Gs^c{Z=}h>|/i|{W]:|ip{N:|zt|S<{DH[p_tvD{N<[8Axo{X4a.^o^X>Yfa59`#ZBYgY~_t^9`jZHZn`>G[oajZ;X,i)Z.^~YJe ZiZF^{][[#Zt^|]Fjx]&_5dddW]P0C[-]}]d|y {C_jUql] |OpaA[Z{lp|rz}:Mu#]_Yf6{Ep?f5`$[6^D][^u[$[6^.Z8]]ePc2U/=]K^_+^M{q*|9tYuZ,s(dS{i=|bNbB{uG}0jZOa:[-]dYtu3]:]<{DJ_SZIqr_`l=Yt`gkTnXb3d@kiq0a`Z{|!B|}e}Ww{Sp,^Z|0>_Z}36|]A|-t}lt{R6pi|v8hPu#{C>YOZHYmg/Z4nicK[}hF_Bg|YRZ7c|crkzYZY}_iXcZ.|)U|L5{R~qi^Uga@Y[xb}&qdbd6h5|Btw[}c<{Ds53[Y7]?Z<|e0{L[ZK]mXKZ#Z2^tavf0`PE[OSOaP`4gi`qjdYMgys/?[nc,}EEb,eL]g[n{E_b/vcvgb.{kcwi`~v%|0:|iK{Jh_vf5lb}KL|(oi=LrzhhY_^@`zgf[~g)[J_0fk_V{T)}I_{D&_/d9W/|MU[)f$xW}?$xr4<{Lb{y4}&u{XJ|cm{Iu{jQ}CMkD{CX|7A}G~{kt)nB|d5|<-}WJ}@||d@|Iy}Ts|iL|/^|no|0;}L6{Pm]7}$zf:|r2}?C_k{R(}-w|`G{Gy[g]bVje=_0|PT{^Y^yjtT[[[l!Ye_`ZN]@[n_)j3nEgMa]YtYpZy].d-Y_cjb~Y~[nc~sCi3|zg}B0}do{O^{|$`_|D{}U&|0+{J3|8*]iayx{a{xJ_9|,c{Ee]QXlYb]$[%YMc*]w[aafe]aVYi[fZEii[xq2YQZHg]Y~h#|Y:thre^@^|_F^CbTbG_1^qf7{L-`VFx Zr|@EZ;gkZ@slgko`[e}T:{Cu^pddZ_`yav^Ea+[#ZBbSbO`elQfLui}.F|txYcbQ`XehcGe~fc^RlV{D_0ZAej[l&jShxG[ipB_=u:eU}3e8[=j|{D(}dO{Do[BYUZ0/]AYE]ALYhZcYlYP/^-^{Yt_1_-;YT`P4BZG=IOZ&]H[e]YYd[9^F[1YdZxZ?Z{Z<]Ba2[5Yb[0Z4l?]d_;_)a?YGEYiYv`_XmZs4ZjY^Zb]6gqGaX^9Y}dXZr[g|]Y}K aFZp^k^F]M`^{O1Ys]ZCgCv4|E>}8eb7}l`{L5[Z_faQ|c2}Fj}hw^#|Ng|B||w2|Sh{v+[G}aB|MY}A{|8o}X~{E8paZ:]i^Njq]new)`-Z>haounWhN}c#{DfZ|fK]KqGZ=:u|fqoqcv}2ssm}.r{]{nIfV{JW)[K|,Z{Uxc|]l_KdCb%]cfobya3`p}G^|LZiSC]U|(X|kBlVg[kNo({O:g:|-N|qT}9?{MBiL}Sq{`P|3a|u.{Uaq:{_o|^S}jX{Fob0`;|#y_@[V[K|cw[<_ }KU|0F}d3|et{Q7{LuZttsmf^kYZ`Af`}$x}U`|Ww}d]| >}K,r&|XI|*e{C/a-bmr1fId4[;b>tQ_:]hk{b-pMge]gfpo.|(w[jgV{EC1Z,YhaY^q,_G[c_g[J0YX]`[h^hYK^_Yib,` {i6vf@YM^hdOKZZn(jgZ>bzSDc^Z%[[o9[2=/YHZ(_/Gu_`*|8z{DUZxYt^vuvZjhi^lc&gUd4|<UiA`z]$b/Z?l}YI^jaHxe|;F}l${sQ}5g}hA|e4}?o{ih}Uz{C)jPe4]H^J[Eg[|AMZMlc}:,{iz}#*|gc{Iq|/:|zK{l&}#u|myd{{M&v~nV};L|(g|I]ogddb0xsd7^V})$uQ{HzazsgxtsO^l}F>ZB]r|{7{j@cU^{{CbiYoHlng]f+nQ[bkTn/}<-d9q {KXadZYo+n|l[|lc}V2{[a{S4Zam~Za^`{HH{xx_SvF|ak=c^[v^7_rYT`ld@]:_ub%[$[m](Shu}G2{E.ZU_L_R{tz`vj(f?^}hswz}GdZ}{S:h`aD|?W|`dgG|if{a8|J1{N,}-Ao3{H#{mfsP|[ bzn+}_Q{MT{u4kHcj_q`eZj[8o0jy{p7}C|[}l){MuYY{|Ff!Ykn3{rT|m,^R|,R}$~Ykgx{P!]>iXh6[l[/}Jgcg{JYZ.^qYfYIZl[gZ#Xj[Pc7YyZD^+Yt;4;`e8YyZVbQ7YzZxXja.7SYl[s]2^/Ha$[6ZGYrb%XiYdf2]H]kZkZ*ZQ[ZYS^HZXcCc%Z|[(bVZ]]:OJQ_DZCg<[,]%Zaa [g{C00HY[c%[ChyZ,Z_`PbXa+eh`^&jPi0a[ggvhlekL]w{Yp^v}[e{~;k%a&k^|nR_z_Qng}[E}*Wq:{k^{FJZpXRhmh3^p>de^=_7`|ZbaAZtdhZ?n4ZL]u`9ZNc3g%[6b=e.ZVfC[ZZ^^^hD{E(9c(kyZ=bb|Sq{k`|vmr>izlH[u|e`}49}Y%}FT{[z{Rk}Bz{TCc/lMiAqkf(m$hDc;qooi[}^o:c^|Qm}a_{mrZ(pA`,}<2sY| adf_%|}`}Y5U;}/4|D>|$X{jw{C<|F.hK|*A{MRZ8Zsm?imZm_?brYWZrYx`yVZc3a@f?aK^ojEd {bN}/3ZH]/$YZhm^&j 9|(S|b]mF}UI{q&aM]LcrZ5^.|[j`T_V_Gak}9J[ ZCZD|^h{N9{~&[6Zd{}B}2O|cv]K}3s}Uy|l,fihW{EG`j_QOp~Z$F^zexS`dcISfhZBXP|.vn|_HYQ|)9|cr]<`&Z6]m_(ZhPcSg>`Z]5`~1`0Xcb4k1{O!bz|CN_T{LR|a/gFcD|j<{Z._[f)mPc:1`WtIaT1cgYkZOaVZOYFrEe[}T$}Ch}mk{K-^@]fH{Hdi`c*Z&|Kt{if[C{Q;{xYB`dYIX:ZB[}]*[{{p9|4GYRh2ao{DS|V+[zd$`F[ZXKadb*A] Ys]Maif~a/Z2bmclb8{Jro_rz|x9cHojbZ{GzZx_)]:{wAayeDlx}<=`g{H1{l#}9i|)=|lP{Qq}.({La|!Y{i2EZfp=c*}Cc{EDvVB|;g}2t{W4av^Bn=]ri,|y?|3+}T*ckZ*{Ffr5e%|sB{lx^0]eZb]9[SgAjS_D|uHZx]dive[c.YPkcq/}db{EQh&hQ|eg}G!ljil|BO]X{Qr_GkGl~YiYWu=c3eb}29v3|D|}4i||.{Mv})V{SP1{FX}CZW6{cm|vO{pS|e#}A~|1i}81|Mw}es|5[}3w{C`h9aL]o{}p[G`>i%a1Z@`Ln2bD[$_h`}ZOjhdTrH{[j_:k~kv[Sdu]CtL}41{I |[[{]Zp$]XjxjHt_eThoa#h>sSt8|gK|TVi[Y{t=}Bs|b7Zpr%{gt|Yo{CS[/{iteva|cf^hgn}($_c^wmb^Wm+|55jrbF|{9^ q6{C&c+ZKdJkq_xOYqZYSYXYl`8]-cxZAq/b%b*_Vsa[/Ybjac/OaGZ4fza|a)gY{P?| I|Y |,pi1n7}9bm9ad|=d{aV|2@[(}B`d&|Uz}B}{`q|/H|!JkM{FU|CB|.{}Az}#P|lk}K{|2rk7{^8^?`/|k>|Ka{Sq}Gz}io{DxZh[yK_#}9<{TRdgc]`~Z>JYmYJ]|`!ZKZ]gUcx|^E[rZCd`f9oQ[NcD_$ZlZ;Zr}mX|=!|$6ZPZYtIo%fj}CpcN|B,{VDw~gb}@hZg`Q{LcmA[(bo`<|@$|o1|Ss}9Z_}tC|G`{F/|9nd}i=}V-{L8aaeST]daRbujh^xlpq8|}zs4bj[S`J|]?G{P#{rD{]I`OlH{Hm]VYuSYUbRc*6[j`8]pZ[bt_/^Jc*[<Z?YE|Xb|?_Z^Vcas]h{t9|Uwd)_(=0^6Zb{Nc} E[qZAeX[a]P^|_J>e8`W^j_Y}R{{Jp__]Ee#e:iWb9q_wKbujrbR}CY`,{mJ}gz{Q^{t~N|? gSga`V_||:#mi}3t|/I`X{N*|ct|2g{km}gi|{={jC}F;|E}{ZZjYf*frmu}8Tdroi{T[|+~}HG{cJ}DM{Lp{Ctd&}$hi3|FZ| m}Kr|38}^c|m_|Tr{Qv|36}?Up>|;S{DV{k_as}BK{P}}9p|t`jR{sAm4{D=b4pWa[}Xi{EjwEkI}3S|E?u=X0{jf} S|NM|JC{qo^3cm]-|JUx/{Cj{s>{Crt[UXuv|D~|j|d{YXZR}Aq}0r}(_{pJfi_z}0b|-vi)Z mFe,{f4|q`b{}^Z{HM{rbeHZ|^x_o|XM|L%|uFXm}@C_{{Hhp%a7|0p[Xp+^K}9U{bP}: tT}B|}+$|b2|[^|~h{FAby[`{}xgygrt~h1[li`c4vz|,7p~b(|mviN}^pg[{N/|g3|^0c,gE|f%|7N{q[|tc|TKA{LU}I@|AZp(}G-sz{F |qZ{}F|f-}RGn6{Z]_5})B}UJ{FFb2]4ZI@v=k,]t_Dg5Bj]Z-]L]vrpdvdGlk|gF}G]|IW}Y0[G| /bo|Te^,_B}#n^^{QHYI[?hxg{[`]D^IYRYTb&kJ[cri[g_9]Ud~^_]<p@_e_XdNm-^/|5)|h_{J;{kacVopf!q;asqd}n)|.m|bf{QW|U)}b+{tL|w``N|to{t ZO|T]jF}CB|0Q{e5Zw|k |We}5:{HO{tPwf_uajjBfX}-V_C_{{r~gg|Ude;s+}KNXH}! `K}eW{Upwbk%ogaW}9EYN}YY|&v|SL{C3[5s.]Y]I]u{M6{pYZ`^,`ZbCYR[1mNg>rsk0Ym[jrE]RYiZTr*YJ{Ge|%-lf|y(`=[t}E6{k!|3)}Zk} ][G{E~cF{u3U.rJ|a9p#o#ZE|?|{sYc#vv{E=|LC}cu{N8`/`3`9rt[4|He{cq|iSYxY`}V |(Q|t4{C?]k_Vlvk)BZ^r<{CL}#h}R+[<|i=}X|{KAo]|W<`K{NW|Zx}#;|fe{IMr<|K~tJ_x}AyLZ?{GvbLnRgN}X&{H7|x~}Jm{]-| GpNu0}.ok>|c4{PYisrDZ|fwh9|hfo@{H~XSbO]Odv]%`N]b1Y]]|eIZ}_-ZA]aj,>eFn+j[aQ_+]h[J_m_g]%_wf.`%k1e#Z?{CvYu_B^|gk`Xfh^M3`afGZ-Z|[m{L}|k3cp[it ^>YUi~d>{T*}YJ{Q5{Jxa$hg|%4`}|LAgvb }G}{P=|<;Ux{_skR{cV|-*|s-{Mp|XP|$G|_J}c6cM{_=_D|*9^$ec{V;|4S{qO|w_|.7}d0|/D}e}|0G{Dq]Kdp{}dfDi>}B%{Gd|nl}lf{C-{y}|ANZr}#={T~|-(}c&{pI|ft{lsVP}){|@u}!W|bcmB{d?|iW|:dxj{PSkO|Hl]Li:}VYk@|2={fnWt{M3`cZ6|)}|Xj}BYa?vo{e4|L7|B7{L7|1W|lvYO}W8nJ|$Vih|{T{d*_1|:-n2dblk``fT{Ky|-%}m!|Xy|-a{Pz}[l{kFjz|iH}9N{WE{x,|jz}R {P|{D)c=nX|Kq|si}Ge{sh|[X{RF{t`|jsr*fYf,rK|/9}$}}Nf{y!1|<Std}4Wez{W${Fd_/^O[ooqaw_z[L`Nbv[;l7V[ii3_PeM}.h^viqYjZ*j1}+3{bt{DR[;UG}3Og,rS{JO{qw{d<_zbAh<R[1_r`iZTbv^^a}c{iEgQZ<exZFg.^Rb+`Uj{a+{z<[~r!]`[[|rZYR|?F|qppp]L|-d|}K}YZUM|=Y|ktm*}F]{D;g{uI|7kg^}%?Z%ca{N[_<q4xC]i|PqZC]n}.bDrnh0Wq{tr|OMn6tM|!6|T`{O`|>!]ji+]_bTeU}Tq|ds}n|{Gm{z,f)}&s{DPYJ`%{CGd5v4tvb*hUh~bf]z`jajiFqAii]bfy^U{Or|m+{I)cS|.9k:e3`^|xN}@Dnlis`B|Qo{`W|>||kA}Y}{ERYuYx`%[exd`]|OyiHtb}HofUYbFo![5|+]gD{NIZR|Go}.T{rh^4]S|C9_}xO^i`vfQ}C)bK{TL}cQ|79iu}9a];sj{P.o!f[Y]pM``Jda^Wc9ZarteBZClxtM{LW}l9|a.mU}KX}4@{I+f1}37|8u}9c|v${xGlz}jP{Dd1}e:}31}%3X$|22i<v+r@~mf{sN{C67G97855F4YL5}8f{DT|xy{sO{DXB334@55J1)4.G9A#JDYtXTYM4, YQD9;XbXm9SX]IB^4UN=Xn<5(;(F3YW@XkH-X_VM[DYM:5XP!T&Y`6|,^{IS-*D.H>:LXjYQ0I3XhAF:9:(==.F*3F1189K/7163D,:@|e2{LS36D4hq{Lw/84443@4.933:0307::6D7}&l{Mx657;89;,K5678H&93D(H<&<>0B90X^I;}Ag1{P%3A+>><975}[S{PZE453?4|T2{Q+5187;>447:81{C=hL6{Me^:=7ii{R=.=F<81;48?|h8}Uh{SE|,VxL{ST,7?9Y_5Xk3A#:$%YSYdXeKXOD8+TXh7(@>(YdXYHXl9J6X_5IXaL0N?3YK7Xh!1?XgYz9YEXhXaYPXhC3X`-YLY_XfVf[EGXZ5L8BXL9YHX]SYTXjLXdJ: YcXbQXg1PX]Yx4|Jr{Ys4.8YU+XIY`0N,<H%-H;:0@,74/:8546I=9177154870UC]d<C3HXl7ALYzXFXWP<<?E!88E5@03YYXJ?YJ@6YxX-YdXhYG|9o{`iXjY_>YVXe>AYFX[/(I@0841?):-B=14337:8=|14{c&93788|di{cW-0>0<097/A;N{FqYpugAFT%X/Yo3Yn,#=XlCYHYNX[Xk3YN:YRT4?)-YH%A5XlYF3C1=NWyY}>:74-C673<69545v {iT85YED=64=.F4..9878/D4378?48B3:7:7/1VX[f4{D,{l<5E75{dAbRB-8-@+;DBF/$ZfW8S<4YhXA.(5@*11YV8./S95C/0R-A4AXQYI7?68167B95HA1*<M3?1/@;/=54XbYP36}lc{qzSS38:19?,/39193574/66878Yw1X-87E6=;964X`T734:>86>1/=0;(I-1::7ALYGXhF+Xk[@W%TYbX7)KXdYEXi,H-XhYMRXfYK?XgXj.9HX_SX]YL1XmYJ>Y}WwIXiI-3-GXcYyXUYJ$X`Vs[7;XnYEZ;XF! 3;%8;PXX(N3Y[)Xi1YE&/ :;74YQ6X`33C;-(>Xm0(TYF/!YGXg8 9L5P01YPXO-5%C|qd{{/K/E6,=0144:361:955;6443@?B7*7:F89&F35YaX-CYf,XiFYRXE_e{}sF 0*7XRYPYfXa5YXXY8Xf8Y~XmA[9VjYj*#YMXIYOXk,HHX40YxYMXU8OXe;YFXLYuPXP?EB[QV0CXfY{:9XV[FWE0D6X^YVP*$4%OXiYQ(|xp|%c3{}V`1>Y`XH00:8/M6XhQ1:;3414|TE|&o@1*=81G8<3}6<|(f6>>>5-5:8;093B^3U*+*^*UT30XgYU&7*O1953)5@E78--F7YF*B&0:%P68W9Zn5974J9::3}Vk|-,C)=)1AJ4+<3YGXfY[XQXmT1M-XcYTYZXCYZXEYXXMYN,17>XIG*SaS|/eYJXbI?XdNZ+WRYP<F:R PXf;0Xg`$|1GX9YdXjLYxWX!ZIXGYaXNYm6X9YMX?9EXmZ&XZ#XQ>YeXRXfAY[4 ;0X!Zz0XdN$XhYL XIY^XGNXUYS/1YFXhYk.TXn4DXjB{jg|4DEX]:XcZMW=A.+QYL<LKXc[vV$+&PX*Z3XMYIXUQ:ZvW< YSXFZ,XBYeXMM)?Xa XiZ4/EXcP3%}&-|6~:1(-+YT$@XIYRBC<}&,|7aJ6}bp|8)K1|Xg|8C}[T|8Q.89;-964I38361<=/;883651467<7:>?1:.}le|:Z=39;1Y^)?:J=?XfLXbXi=Q0YVYOXaXiLXmJXO5?.SFXiCYW}-;|=u&D-X`N0X^,YzYRXO(QX_YW9`I|>hZ:N&X)DQXP@YH#XmNXi$YWX^=!G6YbYdX>XjY|XlX^XdYkX>YnXUXPYF)FXT[EVTMYmYJXmYSXmNXi#GXmT3X8HOX[ZiXN]IU2>8YdX1YbX<YfWuZ8XSXcZU%0;1XnXkZ_WTG,XZYX5YSX Yp 05G?XcYW(IXg6K/XlYP4XnI @XnO1W4Zp-9C@%QDYX+OYeX9>--YSXkD.YR%Q/Yo YUX].Xi<HYEZ2WdCE6YMXa7F)=,D>-@9/8@5=?7164;35387?N<618=6>7D+C50<6B03J0{Hj|N9$D,9I-,.KB3}m |NzE0::/81YqXjMXl7YG; [.W=Z0X4XQY]:MXiR,XgM?9$9>:?E;YE77VS[Y564760391?14941:0=:8B:;/1DXjFA-564=0B3XlH1+D85:0Q!B#:-6&N/:9<-R3/7Xn<*3J4.H:+334B.=>30H.;3833/76464665755:/83H6633:=;.>5645}&E|Y)?1/YG-,93&N3AE@5 <L1-G/8A0D858/30>8<549=@B8] V0[uVQYlXeD(P#ID&7T&7;Xi0;7T-$YE)E=1:E1GR):--0YI7=E<}n9|aT6783A>D7&4YG7=391W;Zx<5+>F#J39}o/|cc;6=A050EQXg8A1-}D-|d^5548083563695D?-.YOXd37I$@LYLWeYlX<Yd+YR A$;3-4YQ-9XmA0!9/XLY_YT(=5XdDI>YJ5XP1ZAW{9>X_6R(XhYO65&J%DA)C-!B:97#A9;@?F;&;(9=11/=657/H,<8}bz|j^5446>.L+&Y^8Xb6?(CYOXb*YF(8X`FYR(XPYVXmPQ%&DD(XmZXW??YOXZXfCYJ79,O)XnYF7K0!QXmXi4IYFRXS,6<%-:YO(+:-3Q!1E1:W,Zo}Am|n~;3580534*?3Zc4=9334361693:30C<6/717:<1/;>59&:4}6!|rS36=1?75<8}[B|s809983579I.A.>84758=108564741H*9E{L{|u%YQ<%6XfH.YUXe4YL@,>N}Tv|ve*G0X)Z;/)3@A74(4P&A1X:YVH97;,754*A66:1 D739E3553545558E4?-?K17/770843XAYf838A7K%N!YW4.$T19Z`WJ*0XdYJXTYOXNZ 1XaN1A+I&Xi.Xk3Z3GB&5%WhZ1+5#Y[X<4YMXhQYoQXVXbYQ8XSYUX4YXBXWDMG0WxZA[8V+Z8X;D],Va$%YeX?FXfX[XeYf<X:Z[WsYz8X_Y]%XmQ(!7BXIZFX]&YE3F$(1XgYgYE& +[+W!<YMYFXc;+PXCYI9YrWxGXY9DY[!GXiI7::)OC;*$.>N*HA@{C|}&k=:<TB83X`3YL+G4XiK]i}(fYK<=5$.FYE%4*5*H*6XkCYL=*6Xi6!Yi1KXR4YHXbC8Xj,B9ZbWx/XbYON#5B}Ue}+QKXnF1&YV5XmYQ0!*3IXBYb71?1B75XmF;0B976;H/RXU:YZX;BG-NXj;XjI>A#D3B636N;,*%<D:0;YRXY973H5)-4FXOYf0:0;/7759774;7;:/855:543L43<?6=E,.A4:C=L)%4YV!1(YE/4YF+ F3%;S;&JC:%/?YEXJ4GXf/YS-EXEYW,9;E}X$}547EXiK=51-?71C%?57;5>463553Zg90;6447?<>4:9.7538XgN{|!}9K/E&3-:D+YE1)YE/3;37/:05}n<}:UX8Yj4Yt864@JYK..G=.(A Q3%6K>3(P3#AYE$-6H/456*C=.XHY[#S.<780191;057C)=6HXj?955B:K1 E>-B/9,;5.!L?:0>/.@//:;7833YZ56<4:YE=/:7Z_WGC%3I6>XkC*&NA16X=Yz2$X:Y^&J48<99k8}CyB-61<18K946YO4{|N}E)YIB9K0L>4=46<1K0+R;6-=1883:478;4,S+3YJX`GJXh.Yp+Xm6MXcYpX(>7Yo,/:X=Z;Xi0YTYHXjYmXiXj;*;I-8S6N#XgY}.3XfYGO3C/$XjL$*NYX,1 6;YH&<XkK9C#I74.>}Hd`A748X[T450[n75<4439:18A107>|ET}Rf<1;14876/Yb983E<5.YNXd4149>,S=/4E/<306443G/06}0&}UkYSXFYF=44=-5095=88;63844,9E6644{PL}WA8:>)7+>763>>0/B3A545CCnT}Xm|dv}Xq1L/YNXk/H8;;.R63351YY747@15YE4J8;46;.38.>4A369.=-83,;Ye3?:3@YE.4-+N353;/;@(X[YYD>@/05-I*@.:551741Yf5>6A443<3535;.58/86=D4753442$635D1>0359NQ @73:3:>><Xn?;43C14 ?Y|X611YG1&<+,4<*,YLXl<1/AIXjF*N89A4Z576K1XbJ5YF.ZOWN.YGXO/YQ01:4G38Xl1;KI0YFXB=R<7;D/,/4>;$I,YGXm94@O35Yz66695385.>:6A#5}W7n^4336:4157597434433<3|XA}m`>=D>:4A.337370?-6Q96{`E|4A}C`|Qs{Mk|J+~r>|o,wHv>Vw}!c{H!|Gb|*Ca5}J||,U{t+{CN[!M65YXOY_*B,Y[Z9XaX[QYJYLXPYuZ%XcZ8LY[SYPYKZM<LMYG9OYqSQYM~[e{UJXmQYyZM_)>YjN1~[f3{aXFY|Yk:48YdH^NZ0|T){jVFYTZNFY^YTYN~[h{nPYMYn3I]`EYUYsYIZEYJ7Yw)YnXPQYH+Z.ZAZY]^Z1Y`YSZFZyGYHXLYG 8Yd#4~[i|+)YH9D?Y^F~Y7|-eYxZ^WHYdYfZQ~[j|3>~[k|3oYmYqY^XYYO=Z*4[]Z/OYLXhZ1YLZIXgYIHYEYK,<Y`YEXIGZI[3YOYcB4SZ!YHZ*&Y{Xi3~[l|JSY`Zz?Z,~[m|O=Yi>??XnYWXmYS617YVYIHZ(Z4[~L4/=~[n|Yu{P)|];YOHHZ}~[o33|a>~[r|aE]DH~[s|e$Zz~[t|kZFY~XhYXZB[`Y}~[u|{SZ&OYkYQYuZ2Zf8D~[v}% ~[w3},Q[X]+YGYeYPIS~[y}4aZ!YN^!6PZ*~[z}?E~[{3}CnZ=~[}}EdDZz/9A3(3S<,YR8.D=*XgYPYcXN3Z5 4)~[~}JW=$Yu.XX~] }KDX`PXdZ4XfYpTJLY[F5]X~[2Yp}U+DZJ::<446[m@~]#3}]1~]%}^LZwZQ5Z`/OT<Yh^ -~]&}jx[ ~m<z!%2+~ly4VY-~o>}p62yz!%2+Xf2+~ly4VY-zQ`z (=] 2z~o2",C={" ":0,"!":1},c=34,i=2,p,s=[],u=String.fromCharCode,t=u(12539);while(++c<127)C[u(c)]=c^39&&c^92?i++:0;i=0;while(0<=(c=C[a.charAt(i++)]))if(16==c)if((c=C[a.charAt(i++)])<87){if(86==c)c=1879;while(c--)s.push(u(++p))}else s.push(s.join("").substr(8272,360));else if(c<86)s.push(u(p+=c<51?c-16:(c-55)*92+C[a.charAt(i++)]));else if((c=((c-86)*92+C[a.charAt(i++)])*92+C[a.charAt(i++)])<49152)s.push(u(p=c<40960?c:c|57344));else{c&=511;while(c--)s.push(t);p=12539}return s.join("")')();

JCT8836=JCT11280.substring(0,8836);

//defaultOptions
const defaultOptions = {
    year : null,
    fac : null,
    clickLoginBtn: true,
    adfsSkip: true,
    exitSidemenu: true,
    styleSidemenu: true,
    styleExamBtn: true,
    styleExamImg: false,
    addSubTimetable: true,
    changeReportBtn: true,
    styleDialog: false,
    hideCompletedReports: true,
    syllBtn: true,
    changeLogout: true,
    setMaxWidth: true,
    pageTopBtn : true,
    mouseDown: true,
    tasklistDisplay: true,
    styleNowPeriod: true,
    displayName: false,
    layoutHome:true,
    nickname: '',
    timesBtnValue:'mode1',
    sliderBarMax: 600,
    tasklistTranslate: 0,
    fixHeadShadow: true,
    deadlinemode: 'relative-absoluteLong',
    notepadMode: true,
    ddSubmission: false,
    headLinkTo: "/portal/home",
    updateClear: false,
    maxTaskDisplay: 15,
    darkmode : 'relative',
    dadbugFix: true,
    defaultInputName: 'AA00000_山田太郎',
    adjustTimetableData : {
        eraseSat : false,
        erase6: false,
        erase7: false,
        dispClassroom : false,
        timetableCentering : false
    },
    remomveDirectLink : true,
    maxWidthPx:{
        subj: 1280,
        lms: 1280
    },
    TaskGetTime: 1,
    tasklistData: [],
    surveyListData: [],
    specialSubj: 0,
    tasklistTranslate: 0,
    deadlinemode: 'absolute-relative',
    maxTaskDisplay: 16,
    hiddenTasks: []
};
//localget localset関数
function utlstorageGet(object,func){
    const storageData = JSON.parse(decodeURIComponent(localStorage.getItem("scombzUtilities:settings")));
    console.log("デフォルトのデータ");
    console.log(object);
    console.log("保存されているのデータ");
    console.log(storageData);
    console.log("結合したデータ");
    console.log(Object.assign(object,storageData));
    func(Object.assign(object,storageData));
}
function utlstorageSet(object,func){
    const storageData = JSON.parse(decodeURIComponent(localStorage.getItem("scombzUtilities:settings")));
    const newData = encodeURIComponent(JSON.stringify(Object.assign(storageData,object)));
    localStorage.setItem("scombzUtilities:settings",newData);
    func();
}

/* ======================= メイン ======================= */
const $$version = "3.0.1"; //バージョン
const $$reacquisitionMin = 20;      //再取得までの時間(分)
    //初期設定ロード
    if(localStorage.getItem("scombzUtilities:settings") === null){
        localStorage.setItem("scombzUtilities:settings",encodeURIComponent(JSON.stringify(defaultOptions)));
        console.log("初期化されたデータを読み込みました。");
    }
    utlstorageGet(defaultOptions, function(items){
        if(location.hostname == "scomb.shibaura-it.ac.jp"){
            console.log("旧Scomb");
            scombLogin();
        }
        if(location.hostname == "adfs.sic.shibaura-it.ac.jp"){
            console.log("adfs");
            //ADFSだったらadfs.jsに飛ばす
            adfsLoaded();
        }
        if(location.hostname == "syllabus.sic.shibaura-it.ac.jp"){
            //シラバスだったらsyllabus.jsに飛ばす
            syllabusLoaded(items.year , items.fac);
        }
        if(location.hostname == 'scombz.shibaura-it.ac.jp'){
            //設定ボタン
            utilitiesSettings();
            //帰ってきて芝猫
            topShibaneko();
            //ページ上部にある固定ヘッダのキモい影を直す
            if(items.fixHeadShadow === true){
                fixHeadShadow();
            }
            //HOMEをレイアウト
            if(items.layoutHome === true){
            layoutHome();
            }
            //ログインボタン自動クリック
            if(items.clickLoginBtn === true){
                clickLoginBtn();
            }
            //サイドメニューを閉じる
            if(items.exitSidemenu === true){
                exitSidemenu();
            }
            //サイドメニューのスタイル変更
            if(items.styleSidemenu === true){
                styleSidemenu();
            //メニューを展開したときの時間割 (オフだった場合はグレーレイヤーだけ表示) , メニュー横に課題一覧を表示
                subTimetable(items.addSubTimetable , items.tasklistDisplay , $$version,$$reacquisitionMin);
            }
            //課題一覧取得
            if( items.tasklistDisplay === true ){
            getTaskLists($$reacquisitionMin);
            surveyLinkScroll();
            };
            //テストのスタイル変更
            if(items.styleExamBtn === true){
                styleExam();
                styleSurveys();
            }
            if(items.styleExamImg === true){
                styleExamImg();
            }
            //完了したレポートをカレンダーに表示しない
            if(items.hideCompletedReports === true){
                hideCompletedReports();
            }
            //ダイアログを大きくする
            if(items.styleDialog === true){
                styleDialog();
            }
            //レポート提出ボタンの変更
            if(items.changeReportBtn === true){
                changeReportBtn();
            }
            //ログアウト画面の変更
            if(items.changeLogout === true){
                changeLogout();
            }
            //画面横幅最大値の変更
            if(items.setMaxWidth === true){
                maxWidthOnSubjPage();
            }
            //ページトップボタンの表示有無
            if(items.pageTopBtn === true){
                remomvePageTop();
            }

            //ホイールクリックをできる機能
            if(items.mouseDown === true){
            mouseEvents();
            }
            //シラバスリンクボタンを表示
            if(items.syllBtn === true){
                //学年、学部が未入力の時はエラー表示
                if(items.year !== null && items.fac !== null){
                    displaySyllabus(items.year , items.fac);
                }else{
                    displaySyllabusError();
                }
            }
            //現在の授業を目立たせる
            if(items.styleNowPeriod === true){
                styleNowPeriod();
            }
            //表示名を変更
            if(items.displayName === true){
                removeName();
            }
            //メモ機能
            if(items.notepadMode === true){
                notepad(items.tasklistDisplay);
                addMarkdownToSubj();
            }

            //LMSの調整
            adjustTimetable(items.adjustTimetableData, items.addSubTimetable);

            //D&Dで課題提出
            if(items.ddSubmission === true){
                ddSub();
            }

            //通知を削除するボタン
            if(items.updateClear === true){
                updateClear();
            }
            //ダイレクトリンクを消す
            if(items.remomveDirectLink === true){
                remomveDirectLink();
            }
            //D&D状態での課題削除バグの修正
            if(items.dadbugFix === true){
            submissionBugFix();
            }
            //出席表示の削除
            if(items.attendance !== 'none'){
                attendanceRemove(items.attendance);
            }
            //アンケートに過去のアンケートを表示
            if(items.pastSurvey === true){
                pastSurvey();
            }
            //ダークモードの適用
            darkmodeLayout(items.darkmode);
            //クリックして名前隠す
            clickHideName();
            console.log('すべての機能の実行が完了しました');
        }
    });

/* ====================================================== */
//SETTINGS PAGE
function utilitiesSettings(){
    const pageBanner = document.getElementById("page_head");
    if(pageBanner){
        const spControlMenu = pageBanner.querySelector(".page-head-navi-sp");
        const pcControlMenu = pageBanner.querySelector(".page-head-navi");
            if(spControlMenu){
                spControlMenu.querySelector(".control-menu").insertAdjacentHTML("afterBegin",`
                <li class="control-list">
                    <a class="control-menu-colomn utilities-setting-btn" href="javascript:void(0);">
                        Utilities Settings
                    </a>
                </li>
                `);
            }
            if(pcControlMenu){
                pcControlMenu.querySelector(".page-head-navi-unordered-list").insertAdjacentHTML("afterBegin",`
                <li class="page-head-navi-list">
					<a class="page-head-navi-colomn utilities-setting-btn" href="javascript:void(0);">
                        Utilities Settings
                    </a>
				</li>
                `);
            }
        document.head.insertAdjacentHTML("beforeEnd",`
            <style>
            .utilities-settings-layer {
                width: 100%;
                height: 100%;
                position: fixed;
                z-index: 20;
                background: #0007;
                top: 0;
                left: 0;
            }
            .utilities-settings-body{
                position: fixed;
                width: 95%;
                height: 85vh;
                background-color:#fff;
                top: 50%;
                left: 50%;
                transform: translateY(-50%) translateX(-50%);
                z-index: 25;
            }
            textarea#utilitiesJsonArea {
                display: block;
                margin: 6px auto;
                width: calc(100% - 30px);
                height: calc(100% - 180px);
            }
            .utilities-settings-underbtn {
                width: 60%;
                height: 35px;
                display: block;
                margin: 5px auto;
            }
            .utilities-settings-body > h1 {
                font-size: 20px;
                margin: 3px;
                display: block;
                text-align: center;
            }
            .utilities-settings-body > p {
                margin: 0 auto;
                text-align: center;
            }
            #pageMain{
            overflow-x:hidden;
            margin-top: 59px;
            }
            #page_head{
            position: fixed;
            }
            .sidemenu-hide{
            min-width:480px;
            }
            .page-main #graylayer{
            margin-top: -59px;
            }
            @media (max-width: 480px){
                .page-main {
                min-width:480px;
                }
            }
            @media (max-width:899px){
                #subTimetable{
                    display:none !important;
                }
                #subTaskList{
                    margin:10px auto;
                    display: block;
                    opacity: 1;
                    visibility: visible;
                    min-width: 400px !important;
                    box-shadow: 5px 5px 5px #c2c2c2;
                }
                .subk-column:nth-child(3n+1) {
                    width: fit-content !important;
                    display:block;
                    padding:1px 2px;
                    border:1px solid #ccc;
                    border-radius:10px;
                }
                .subk-column:nth-child(3n+2) {
                    width: 100% !important;
                    display:block;
                }
                .subk-deadline{
                    display: block;
                    float:left !important;
                    margin:4px 0 0 15px !important;
                }
                .relative-deadline-time{
                    display:inline-block !important;
                }
                .subk-line{
                    height:75px !important;
                }
                .manadd-column-name{
                    display:block !important;
                }
            }
            </style>
        `);
        const settingsLayer = document.createElement("div");
        settingsLayer.classList.add("utilities-settings-layer");
        settingsLayer.style.display = "none";
        document.body.appendChild(settingsLayer);
        const settingsBtns = document.getElementsByClassName("utilities-setting-btn");
        for(const settingsBtn of settingsBtns){
            settingsBtn.addEventListener("click",function(){
                settingsLayer.style.display = "block";
            });
        }
        const jsondatastr = JSON.stringify(JSON.parse(decodeURIComponent(localStorage.getItem("scombzUtilities:settings"))), null , "\t")
        settingsLayer.insertAdjacentHTML("afterBegin",`
        <div class="utilities-settings-body">
        <h1>ScombZ Utilities Settings</h1>
        <p>詳細は<a href="https://yudai1204.github.io/ScombZ-Utilities/">公式サイト</a>へ</p>
        <textarea id="utilitiesJsonArea">${jsondatastr}</textarea>
        <input type="button" value="INITIALIZE" class="utilities-settings-underbtn" id="utilitiesSettingsInitBtn">
        <input type="button" value="SAVE" class="utilities-settings-underbtn" id="utilitiesJsonSaveBtn">
        <input type="button" value="CLOSE" class="utilities-settings-underbtn" id="utilitiesSettingsCloseBtn">
        </div>
        `);
        document.getElementById("utilitiesSettingsCloseBtn").addEventListener("click",function(){
            settingsLayer.style.display = "none";
        });
        document.getElementById("utilitiesJsonSaveBtn").addEventListener("click",function(){
            const jsonarea = document.getElementById("utilitiesJsonArea");
            if(jsonarea){
                let jsonError = false;
                try {
                    JSON.parse(jsonarea.value);
                } catch (error) {
                    alert("正しいJSON形式ではありません。");
                    jsonError = true;
                }
                if(!jsonError){
                    localStorage.setItem("scombzUtilities:settings",encodeURIComponent(jsonarea.value));
                    console.log("SAVED");
                    console.log(JSON.parse(jsonarea.value));
                    alert("保存しました");
                    settingsLayer.style.display = "none";
                }
            }else{
                console.log("ERROR");
            }
        });
        const initBtn = document.getElementById("utilitiesSettingsInitBtn");
        if(initBtn){
            const jsonarea = document.getElementById("utilitiesJsonArea");
            initBtn.addEventListener("click",function(){
                if(window.confirm("設定を初期化してもよろしいですか？")){
                    jsonarea.value = JSON.stringify(defaultOptions, null , "\t");
                    localStorage.setItem("scombzUtilities:settings",encodeURIComponent(JSON.stringify(defaultOptions)));
                    setTimeout(function(){
                        location.reload();
                    },500);
                }
            });
        }
    }
}

//ログインボタンクリック
function clickLoginBtn(){
    'use strict';
    if (location.href == 'https://scombz.shibaura-it.ac.jp/login'){
        window.onload = function(){
            console.log("ログインボタンをクリックします");
            document.querySelector('.login-btn:nth-child(1)').click();
            console.log("ログインボタンをクリックしました");
        };
    }
    return;
}
//名前をクリックして表示を消す
function clickHideName(){
    "use strict";
    const $loginViewName = document.getElementsByClassName("login-view-name")[0];
    if($loginViewName){
        $loginViewName.insertAdjacentHTML("beforeend",`<style>.name-hidden{opacity:0;}</style>`);
        $loginViewName.addEventListener("click", function(){
            if($loginViewName.classList.contains("name-hidden")){
                $loginViewName.classList.remove("name-hidden");
                $loginViewName.style.opacity = "1";
            }else{
                $loginViewName.classList.add("name-hidden");
                $loginViewName.style.opacity = "0";
            }
        });
    }
}
//ページ上部にある固定ヘッダのキモい影を直す
function fixHeadShadow(){
    const $headIdList=[
        'page_head',
        'examTimer',
        'survey_timer'
    ];
    for (const $headId of $headIdList) {
        if(document.getElementById($headId)){
            document.getElementById($headId).style.boxShadow = "rgb(60 64 67 / 30%) 0px 1px 2px, rgb(60 64 67 / 15%) 0px 2px 6px 2px";
        }
    }
    return;
}
//ホームのレイアウト
function layoutHome(){
    "use strict";
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/portal/home")){
        console.log("homeを検知しました");
        document.head.insertAdjacentHTML("beforeEnd",`
        <style>
        @media screen and (min-width: 1800px){
            .portal-link-list-li{
                min-width:440px;
            }
        }
        .downloadFile.roo.portal-banner-list-li-img.portal-banner-img.portal-banner-img-contain{
            transition:opacity 150ms;
        }
        .downloadFile.roo.portal-banner-list-li-img.portal-banner-img.portal-banner-img-contain:hover{
            opacity:0.6;
        }
        .portal-left {
            width: calc(100% - 310px);
            padding: 0 24px 35px 20px;
            float: left;
        }
        @media screen and (max-width: 970px) {
            .portal-left {
                width: 100%;
            }
        }
        @media screen and (min-width: 971px) {
            .portal-right {
                /* background-color: #E2E7E8; */
                padding: 0 34px 35px 24px;
                position: absolute;
                right: 11px;
                top: 96px;
                width: 310px;
                list-style: none;
                padding: 0;
            }
        }
        @media screen and (min-width:1280px){
            .portal-left{
                max-width: 950px;
                float:none !important;
                margin-left: calc(50vw - 650px);
            }
            .portal-right{
                right: calc(50vw - 625px);
            }
        }
        #top_links{
            overflow: visible;
        }
        </style>
        `);
        //リンクをすべて表示する
        const $school_link_list =  document.getElementById('school_link_list');
        if($school_link_list){
            setTimeout(() =>{
                $school_link_list.querySelector(".portal-link-bottom a").click();
            },300);
        }
        //学年歴ボタンを作る
        const $exportGoogleBtn = document.querySelector(".portal-calendar-event-export.calendar_ics_download");
        if($exportGoogleBtn){
            $exportGoogleBtn.insertAdjacentHTML("afterEnd",`<a class="portal-calendar-event-add-a" href="https://www.shibaura-it.ac.jp/campus_life/school_calendar/" target="_blank" rel="noopener noreferrer" style="border-top: 1px dotted #FFF;">学年歴を見る</a>`);
        }
        //カレンダーの下にリンク集を追加する
        const $top_attention = document.getElementById("top_attention");
        if($top_attention){
            console.log("注目コンテンツを取得しました");
            $top_attention.insertAdjacentHTML("beforeBegin",`
            <dl id="right-links" class="portal-subblock portal-subblock-dl-initial">
                        <dt class="portal-top-subblock-title portal-subblock-title portal-notice-title">重要リンク</dt>
                        <dd class="portal-subblock-link">
                            <div>
                                <a class="portal-subblock-link-main-a" href="https://ami.sic.shibaura-it.ac.jp/" target="_blank" rel="noopener noreferrer">AMI</a>
                            </div>
                        </dd>
                        <dd class="portal-subblock-link">
                            <div>
                                <a class="portal-subblock-link-main-a" href="http://sgsot.sic.shibaura-it.ac.jp/" target="_blank" rel="noopener noreferrer">S*gsot</a>
                            </div>
                        </dd>
                        <dd class="portal-subblock-link">
                            <div>
                                <a class="portal-subblock-link-main-a" href="https://supereigo2.sic.shibaura-it.ac.jp/sso/" target="_blank" rel="noopener noreferrer">新スーパー英語</a>
                            </div>
                        </dd>
                        <dd class="portal-subblock-link">
                            <div>
                                <a class="portal-subblock-link-main-a" href="https://scomb.shibaura-it.ac.jp/portal/dologin" target="_blank" rel="noopener noreferrer">旧Scomb</a>
                            </div>
                        </dd>
                        <dd class="portal-subblock-link">
                            <div>
                                <a style="color: #231815;text-decoration: none;" href="#school_link_list">もっと見る</a>
                            </div>
                        </dd>


                    </dl>
            `);
        }
    }
    return;
}
//ページトップボタン
function remomvePageTop(){
    const $pagetopBtn = document.querySelector('.page-top-btn');
    if($pagetopBtn){
        $pagetopBtn.remove();
    }
    return;
}
//ダイレクトリンク
function remomveDirectLink(){
    const $directLink = document.querySelector('.page-directlink');
    if($directLink){
        $directLink.remove();
    }
    return;
}
//芝猫表示
function topShibaneko(){
    if(location.href=="https://scombz.shibaura-it.ac.jp/login"){
        const $topLogo = document.querySelector(".sitelogo");
        if($topLogo){
            console.log("にゃーん");
            $topLogo.insertAdjacentHTML("beforeBegin",`
            <div style="text-align:center;"><img src="https://scomb.shibaura-it.ac.jp/theme1/skin/common/img/007.jpg" alt="slide1" style="width:960px;height:153px;"></div>
            `);
        }
    }
}
//ログアウト画面変更
function changeLogout(){
    'use strict';
    if(location.href == 'https://scombz.shibaura-it.ac.jp/logout'){
        console.log("ログアウト画面を変更します");
        window.addEventListener('load', function(){
            const $logoutMainContent = document.getElementById('logout');
            const $logoutButton = document.querySelector('.btn-logout');
            if($logoutMainContent && $logoutButton){
                $logoutButton.style.background = "#f43c49";
                $logoutButton.style.border = "1px solid #ff0000";
                $logoutButton.style.boxShadow = "none";
                $logoutButton.style.fontWeight="bold";

                $logoutMainContent.style.width = '100%';
                $logoutMainContent.style.margin = '0 auto';
                $logoutMainContent.style.minWidth = '0';
                $logoutButton.insertAdjacentHTML('afterEnd',`
                <style>
                .btn-back{
                    margin-top:10px;
                    width:300px;
                    box-shadow:none;
                }
                @media (max-width: 480px){
                    .btn-back {
                        width: 200px;
                    }
                }
                </style>
                <br><a class="btn-inline btn-back btn-color btn-txt" href="#" onclick="history.back(-1);return false;" >戻る</a>
                `);
            }
        });
    }
    console.log("ログアウト画面を変更しました");
    return;
}
/* メニューを閉じる */
function exitSidemenu(){
    'use strict';
    const $closeButton = document.getElementById('sidemenuClose');
    if($closeButton){
        console.log('メニューを閉じます');
        //一時的にサイドメニューのtransitionを無効化する
        document.getElementById('sidemenu').style.transition = 'none';
        $closeButton.click();
        //逆に開く問題の修正
        if( !(document.getElementById('sidemenu').classList.contains('sidemenu-close')) ){
            document.getElementById('sidemenu').classList.add('sidemenu-close');
        }
        if( !(document.getElementById('pageMain').classList.contains('sidemenu-hide')) ){
            document.getElementById('pageMain').classList.add('sidemenu-hide');
        }
        if( !(document.getElementById('pageMain').classList.contains('sidemenu-hide')) ){
            document.getElementById('pageMain').classList.add('sidemenu-hide');
        }
        //サイドメニューのtransitionをデフォルトに復元する
        document.getElementById('sidemenuOpen').addEventListener('click', function(){
            document.getElementById('sidemenu').style.transition = '';
        }, { once: true, capture: true });
        console.log('メニューを閉じました');
    }
    return;
}
/* サイドメニューカスタマイズ */
function styleSidemenu(){
    'use strict';
    if(document.getElementById('sidemenu') === null){
        return;
    }
    console.log('サイドメニューのスタイル変更を開始します');
    //head追加
    const $head = document.head;
    $head.insertAdjacentHTML('beforeEnd',`
    <style type="text/css">
        
        .page-main #graylayer{
            width:100%;
            height:100%;
            position:fixed;
            z-index:11;
            background:#0007;
            opacity:1;
            visibility:visible;
            transition:opacity 300ms;
            }
        .sidemenu-hide.page-main #graylayer{
            width:100%;
            height:100%;
            position:fixed;
            z-index:11;
            background:#0007;
            opacity:0;
            visibility:hidden;
        }
        .page-main .usFooter{
            position:fixed;
            bottom:0;
            right:5px;
            font-size:8px;
            color:#000000;
            visibility:visible;
            z-index:15;
        }
        .sidemenu-hide.page-main .usFooter{
            visibility:hidden;
        }

        .sidemenu-open.hamburger-icon{
            display:block;
        }
        .sidemenu-pull,.sidemenu-link,.sidemenu-head,.sidemenu-close{
            width:301px;
        }
        .mainmenu-head-logo{
            position:fixed;
            text-align:center;
            top:2px;
            width:55px;
            height:55px;
            border-radius: 27.5px;
            visibility:hidden;
        }
        .mainmenu-head-logo:hover{
            background:#e0e0e0;
        }

        @media (min-width:900px){
            .mainmenu-head-logo{
                left:calc(50vw - 27.5px);
                visibility:visible;
            }
            .page-main .subtimetableBody{
                position:fixed;
                Top:10px;
                right:10px;
                font-size:15px;
                color:#000000;
                visibility:visible;
                z-index:15;
                display:visible;
                opacity:1;
                transition:opacity 300ms;
            }
            .sidemenu-hide.page-main .subtimetableBody{
                opacity:0;
                visibility:hidden;
                transition:opacity 300ms;
            }
        }
        @media (max-width:899px){
            .subtimetableBody{
                opacity:0;
                visibility:hidden;
                transition:opacity 300ms;
            }
        }
        img.scombz-icon{
            object-fit: cover;
            width:66%;
            height:100%;
            object-position: 1% 100%;
        }
        @media(max-width:480px){
            .mainmenu-head-logo{
                right:0px;
            }
            .sidemenu-pull,.sidemenu-link,.sidemenu-head,.sidemenu-close{
                width:280px;
            }
            .pagetop-head{
                top:0;
                left:195px;
                width:calc(100% - 195px);
                height:100%;
                position:absolute;
                display:block;
            }
        }
        .sidemenu-close {
            transform: translateX(-100%);
        }
        .sidemenu-link.sidemenu-lms-link.sidemenu-link-txt{
            background:#fff;
        }
        .sidemenu-link.sidemenu-lms-link.sidemenu-link-txt:hover{
            background:#f0f0f0;
        }
        #sidemenu{
            box-shadow:none;
            overflow-y:auto;
            position:fixed;
            top:0;
            left:0;
            float:left;
            z-index:100;
        }
        #pageMain{
            position:absolute;
            top:0;
            left:0;
            width:100%;
        }
        .sidemenu-head{
            height:60px;
        }
        .sidemenu-logo{
            height:60px;
            width:115px;
            padding-top:0;
            margin:0 auto;
        }
        #sidemenuClose{
            left:0;
            top:0;
        }
        .sidemenu-link{
            height:50px;
        }
        .sidemenu-pull{
            height:53px;
            padding:17px 40px 12px 81px;
        }
        a.control-menu-colomn:hover{
            background-color: #66666609;
        }
        .header-notification{
            min-width: 46.5px;
            text-align: center;
        }
    </style>
    `);
    //LMSページ飛び出る問題
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=" && document.body.clientWidth > 480)){
        const contentsDetails = document.querySelectorAll(".contents-detail");
        for(const contentsDetail of contentsDetails){
            if(contentsDetail.parentNode.parentNode && contentsDetail.parentNode.parentNode.classList.contains("block") && contentsDetail.parentNode.parentNode.classList.contains("clearfix")){
                setTimeout(() =>{
                    contentsDetail.parentNode.style.height = contentsDetail.clientHeight+'px';
                    if(contentsDetail.parentNode.previousElementSibling)
                        contentsDetail.parentNode.previousElementSibling.style.height = contentsDetail.clientHeight+'px';
                    },300);
            }
        }
    }
    //ヘッダ中心にアイコンを表示 ヘッダをクリックで一番上へ
    utlstorageGet({
        headLinkTo: "/portal/home"
    },function(items){
        const $pageHead = document.getElementById('page_head');
        if($pageHead){
            $pageHead.insertAdjacentHTML('beforeEnd',`
            <a href="${items.headLinkTo}" id="pagetop-head-logo"><div class="mainmenu-head-logo"><img src="/sitelogo" class="scombz-icon" alt="Top"></div></a>
            `);
        }
    });
    //サイドメニューの開閉ボタンを変える
    const $closeButton = document.getElementById('sidemenuClose');
    if($closeButton){
        $closeButton.classList.add('hamburger-icon');
        $closeButton.innerHTML = '<div class="hamburger-line"></div>\n<div class="hamburger-line"></div>\n<div class="hamburger-line"></div>';
    }
    //お知らせ、アンケートを直リンクにする
    //お知らせ(ついでにborder-topもつけてスタイル直す)
    const $infoButton = document.querySelector(".sidemenu-link.sidemenu-lms-link.sidemenu-link-txt.info-color.sidemenu-icon.info-icon");
    if ($infoButton){
        $infoButton.href = "https://scombz.shibaura-it.ac.jp/portal/home/information/list";
        $infoButton.style.borderTop = "1px solid #CCC";
        $infoButton.removeAttribute("onclick");
    }
    //アンケート
    const $questionnaire = document.querySelector(".sidemenu-link.sidemenu-lms-link.sidemenu-link-txt.questionnaire-color.sidemenu-icon.questionnaire-icon");
    if ($questionnaire){
        $questionnaire.href = "https://scombz.shibaura-it.ac.jp/portal/surveys/list";
        $questionnaire.removeAttribute("onclick");
    }
    //お知らせ、アンケートが表示されてないとき追加する
    const $comBtn = document.querySelector(".sidemenu-link.sidemenu-lms-link.sidemenu-link-txt.community-search-color.sidemenu-icon.search-icon");
    if($comBtn && !$infoButton && !$questionnaire){
        $comBtn.insertAdjacentHTML('afterEnd',`
        <br>
        <a class="sidemenu-link sidemenu-lms-link sidemenu-link-txt info-color sidemenu-icon info-icon " href="https://scombz.shibaura-it.ac.jp/portal/home/information/list" style="height: 50px;border-top: 1px solid #CCC;">お知らせ</a>
        <a class="sidemenu-link sidemenu-lms-link sidemenu-link-txt questionnaire-color sidemenu-icon questionnaire-icon" href="https://scombz.shibaura-it.ac.jp/portal/surveys/list" style="height: 50px;">アンケート</a>
        `);
    }
    console.log('サイドメニューのスタイルを変更しました');
    return;
}
/* ScombZ Utilities */
/* addSubTimetable.js */

//LMS取得&表示
function subTimetable($timetableDisplay,$tasklistDisplay,$$version,$$reacquisitionMin){
    'use strict';
    if(document.getElementById('pageMain') === null){
        return;
    }
    if($timetableDisplay === true){
        if(location.href == 'https://scombz.shibaura-it.ac.jp/lms/timetable'){
            getSubTimetable();
        }
        console.log('グレーレイヤー&時間割を追加します');
        displaySubTimetable($$version);
        console.log('グレーレイヤー&時間割を追加しました');
    }else{
        console.log('グレーレイヤーを追加します');
        displayGrayLayer($$version);
        console.log('グレーレイヤーを追加しました');
    }
    if( $tasklistDisplay === true ){
        console.log('メニュー課題表示を開始します');
        utlstorageGet({
            TaskGetTime: 0
        },function(items){
            if(Number(Date.now()) > Number(items.TaskGetTime) + $$reacquisitionMin * 1000 * 60  || (location.href == "https://scombz.shibaura-it.ac.jp/lms/course/report/submission" &&  document.querySelector(".contents-detail.contents-complete")) || (location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/examination/take?complete")&&  document.querySelector(".contents-detail.contents-complete")) ){
                setTimeout(function(){
                    console.log("遅延表示設定");
                    displayTaskListsOnGrayLayer();
                },1500);
            }else{
            displayTaskListsOnGrayLayer();
            }
            console.log('メニュー横に課題を表示しました');
        });
    }
    return;
}

//------------LMS情報取得------------
//全角数字→半角数字にする関数
function han2Zenkaku($str) {
    return $str.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}
//LMSから情報を取得してJSON化する関数
function getSubTimetable(){
    //時間割じゃなくてスケジュールだったら取得できないので取得しない
    if(!document.getElementById('displayMode1') || !document.getElementById('displayMode1').checked) {
        return;
    }
    //取得する
    console.log('LMSを取得開始します');
    const $courseList = document.querySelectorAll('.timetable-course-top-btn');
    if($courseList[0]){
        //JSON生成
        const $timetableData = [];
        let futei = 0;
        for(const $course of $courseList) {
            const $timetableClassData={};
            for(let $yobicolNum = 1 ; $yobicolNum < 7 ; $yobicolNum++){
                if( $course.parentNode.parentNode.className.indexOf($yobicolNum+'-yobicol') != -1 ){
                    $timetableClassData.day = $yobicolNum,
                    $timetableClassData.time = Number(jigenInt($course.parentNode.parentNode.parentNode.firstElementChild.innerHTML));
                    if(!$timetableClassData.time){
                        $timetableClassData.time = Number($course.parentNode.parentNode.parentNode.firstElementChild.innerHTML.slice(-1));
                    }
                    break;
                }
                if($yobicolNum == 6){
                    $timetableClassData.day = -1;
                    $timetableClassData.time = -1; // 曜日時限不定履修
                    futei++;
                }
            }
            $timetableClassData.id = $course.getAttribute("id");
            $timetableClassData.name = $course.innerHTML;
            $timetableClassData.classroom = $course.nextElementSibling.firstElementChild.getAttribute("title");
            const $courseTeacherList = $course.nextElementSibling.firstElementChild.querySelectorAll("span");
            const $courseTeachers =[];
            for(const $teacher of $courseTeacherList){
                if(!($teacher.hasAttribute("class"))){
                    $courseTeachers.push($teacher.innerHTML.replace(",  ",""));
                }
            }
            $timetableClassData.teacher= $courseTeachers;
            $timetableData.push($timetableClassData);
        }
        $timetableData.push({
            day:-2,
            time:-2,
            name:"授業は存在しません"
        });
        $timetableData.push({
            termYear: Number(String(document.getElementById("nendo").querySelector("[selected]").value)),
            termPhase: (document.getElementById("kikanCd").querySelector("[selected]").value === '10')?1:2
        });
        console.log('LMSを取得しました\n\n'+JSON.stringify($timetableData));
        utlstorageSet({
            timetableData : $timetableData,
            specialSubj : futei
        },function(){
            console.log('LocalStorageに保存しました');
            }
        );
        //JSON生成完了
    }
    return;
}

//------------LMS情報表示------------
function displaySubTimetable($$version){
    'use strict';
    utlstorageGet({
        timetableData : null
    },function(item){
        if(item.timetableData == null){
            console.log('時間割情報が存在しません');
            displayGrayLayer($$version);
        }else{
            console.log('LocalStrageのアクセスに成功しました');
            const $timetableData = item.timetableData;
            console.log('JSONファイルを読み込みました'+JSON.stringify($timetableData));
            let $subTimetable =`
            <style type="text/css">
                .SubTimetable {
                    text-align:center;
                    decolation:none;
                    font-size:100%;
                }
                @media(max-width:1281px){
                    .SubTimetable {
                        font-size:90%;
                    }
                }
                td.SubTimetable , th.SubTimetable {
                    width:calc((100vw - 300px)/7);
                    height:4vh;
                    background:#EDF3F7;
                }
                td.SubTimetable:nth-child(1) , th.SubTimetable:nth-child(1) {
                    width:30px;
                    background:#ec9c93;
                }
                th.SubTimetable{
                    background:#bea87b;
                    height:30px;
                }
                a.SubTimetable{
                    display:block;
                    width:100%;
                    height:100%;
                    min-height:40px;
                }
                a.SubTimetable:hover{
                    background:rgba(206, 213, 217,0.5);
                }
                .subtimetableBodyCulm{
                    background:rgba(255,255,255,0.5);
                }
            </style>
            <div class="subtimetableBody">
            <div class="subtimetableBodyCulm">
            <table  id = "subTimetable" class="SubTimetable">
                <thead>
                    <tr>
                        <th class="SubTimetable"></th>
                        <th class="SubTimetable">月</th>
                        <th class="SubTimetable">火</th>
                        <th class="SubTimetable">水</th>
                        <th class="SubTimetable">木</th>
                        <th class="SubTimetable">金</th>
                        <th class="SubTimetable">土</th>
                    </tr>
                </thead>
                <tbody>`;
            console.log('LMSを表示します');
            let num=0;
            //通常授業
            for(let i=0; i<7; i++){ //i=時限
                $subTimetable+='<tr>';
                for(let j=0; j<7; j++){ //j=曜日
                    let $subjData = (j==0) ? i+1 : '';
                    if( $timetableData[num].day == j && $timetableData[num].time == i+1 ){
                        //2Q、4Qのことを考える
                        if( $timetableData[num+1].day == j && $timetableData[num+1].time == i+1 ){
                            console.log('クォーター制授業を検出しました 曜日:'+j+' 時間:'+i);
                            $subjData = `
                            <a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num].id}" class="SubTimetable" style="color:#000000;text-decoration:none;white-space: nowrap;text-overflow:ellipsis;overflow:hidden;font-size:80%;height:calc(50% - 2px);min-height:30px;"><span class="subTimetable">${$timetableData[num].name}</span></a>
                            <a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num+1].id}" class="SubTimetable" style="color:#000000;text-decoration:none;margin-top:1px;border-top:1px solid #ccc; white-space: nowrap;text-overflow:ellipsis;overflow:hidden;font-size:80%;height:calc(50% - 2px);min-height:30px;"><span class="subTimetable">${$timetableData[num+1].name}</span></a>`;
                            num++;
                        }else{//2Q,4Qが存在しないとき
                            console.log('通常授業を検出しました 曜日:'+j+' 時間:'+i);
                            $subjData = `<a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num].id}" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">${$timetableData[num].name}</span></a>`;
                        }
                        num++;
                    }
                    $subTimetable+=`<td class="SubTimetable">${$subjData}</td>`;
                }
                $subTimetable+='</tr>';
            }
            $subTimetable += `</tbody></table></div>`;
            //曜日時間不定授業
            if($timetableData[num].day != -1){
                console.log('読み取り完了 課外授業なし day:'+$timetableData[num].day);
            }else{
                console.log('曜日時間不定授業・集中講座を検出しました');
                $subTimetable+= `
                <div class="subtimetableBodyCulm"><table class="SubTimetable" style="margin-top:10px;">
                <tr class="SubTimetable">
                    <th class="SubTimetable">その他の授業</th>
                </tr>`;
                for(;$timetableData[num].day == -1;num++){
                $subTimetable+=`
                    <tr>
                        <td class="SubTimetable" style="background:#EDF3F7;width:calc((100vw - 300px)/5);height:4vh;"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num].id}" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">${$timetableData[num].name}</span></a></td>
                    </tr>`;
                }
                $subTimetable+=`</table></div>`;
                console.log('読み取り完了 課外授業あり day:'+$timetableData[num].day);
            }
            $subTimetable+=`</div>`;
            console.log('時間割の生成に成功しました\nコマ数:'+num);

            document.getElementById('pageMain').insertAdjacentHTML('beforeEnd',`
            <div id="graylayer" onclick="document.getElementById('sidemenuClose').click();"></div>
            <p class="usFooter">ScombZ Utilities US版 ver.${$$version}<br><a style="color:#000000;" href="https://github.com/yudai1204/ScombZ-Utilities" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            `+$subTimetable);
        }
    });
    return;
}
//時間割のないグレーレイヤーの表示関数
function displayGrayLayer($$version){
    'use strict';
    document.getElementById('pageMain').insertAdjacentHTML('beforeEnd',`
            <div id="graylayer" onclick="document.getElementById('sidemenuClose').click();"></div>
            <p class="usFooter">ScombZ Utilities ver.${$$version}<br><a style="color:#000000;" href="https://github.com/yudai1204/ScombZ-Utilities" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            `);
    return;
}
//課題一覧の表示
function displayTaskListsOnGrayLayer(){
    utlstorageGet({
        TaskGetTime: 1,
        tasklistData: [],
        surveyListData: [],
        manualTasklist: [],
        specialSubj: 0,
        tasklistTranslate: 0,
        deadlinemode: 'absolute-relative',
        maxTaskDisplay: 16,
        hiddenTasks: [],
        undisplayFutureTaskDays: 365,
        highlightDeadline : true
    },function(items){
        if(items.TaskGetTime && items.tasklistData){
            console.log("LocalStorageを読み込みました\n課題一覧を表示します");
            //JSONファイル展開
            console.log(items.tasklistData);
            const $tasklistObj = items.tasklistData;
            const $surveyListObj = items.surveyListData;
            //JSONから表示高さ生成
            const $subTimetable = document.getElementsByClassName("subtimetableBody");
            let timetableHeight = 5;
            let timetableminHeight = 0;
            if($subTimetable[0]){
                timetableHeight = 40;
                timetableminHeight = 350;
                if(Number(items.specialSubj) > 0){
                    timetableHeight += 10*Number(items.specialSubj);
                    timetableminHeight += 60*Number(items.specialSubj);
                }
            }
            //メイン生成部分
            let kadaiListHTML=``;
            //アンケート一覧と課題一覧を統合する
            for(const $survey of $surveyListObj){
                if(Number(Date.parse($survey.deadline)) < Number(Date.now())){
                    continue;
                }
                for(let i=0;;i++){
                    //tasklistを読み切ったら最後に挿入して終了
                    if(!$tasklistObj[i]){
                        $tasklistObj.push($survey);
                        break;
                    }
                    //tasklist内に挿入位置を発見したらそこに挿入して終了
                    if( Number(Date.parse($survey.deadline)) < Number(Date.parse($tasklistObj[i].deadline)) ){
                        console.log("SPLICED:"+i);
                        $tasklistObj.splice(i,0,$survey);
                        break;
                    }
                }

            }
            //自作課題一覧を統合する
            for(const $manTask of items.manualTasklist){
                if(Number(Date.parse($manTask.deadline)) < Number(Date.now())){
                    continue;
                }
                for(let i=0;;i++){
                    //tasklistを読み切ったら最後に挿入して終了
                    if(!$tasklistObj[i]){
                        $tasklistObj.push($manTask);
                        break;
                    }
                    //tasklist内に挿入位置を発見したらそこに挿入して終了
                    if( Number(Date.parse($manTask.deadline)) < Number(Date.parse($tasklistObj[i].deadline)) ){
                        console.log("SPLICED:"+i);
                        $tasklistObj.splice(i,0,$manTask);
                        break;
                    }
                }
            }
            //課題・テスト・アンケート一覧
            let deadline='XXXX/XX/XX XX:XX:XX';
            if(!$tasklistObj[0]){
                kadaiListHTML +=`<div class="subk-line">未提出課題は存在しないか、取得できません。</div>`;
            }else{
                const nowUnix = Date.now();
                for(let i=0,j=0; $tasklistObj[i] && i<items.maxTaskDisplay+1 -j; i++){
                    //先の課題は表示しない
                    if((Number(Date.parse($tasklistObj[i].deadline)) - Number(nowUnix))/60000 > 60*24*(1+Number(items.undisplayFutureTaskDays))){
                        break;
                    }
                    //非表示に設定されているものはスキップ
                    if(items.hiddenTasks.includes($tasklistObj[i].id)){
                        j++;
                        continue;
                    }
                    if($tasklistObj[i].data === null && !$tasklistObj[i+1]){
                        kadaiListHTML+=`<div class="subk-line">未提出課題は存在しません。</div>`;
                        break;
                    }
                    if($tasklistObj[i].data === null)continue;
                    //絶対表示
                    deadline = ($tasklistObj[i].deadline.length > 17) ? $tasklistObj[i].deadline : $tasklistObj[i].deadline+":00";
                    if(items.deadlinemode.includes('absoluteShort'))
                        deadline = $tasklistObj[i].deadline.slice(6,-3);
                    //相対表示
                    if(items.deadlinemode.includes('relative') && $tasklistObj[i].deadline != "" ){
                        if(items.deadlinemode == 'relative'){
                            const nowUnix = Date.now();
                            const relativeDeadline = (Number(Date.parse($tasklistObj[i].deadline)) - Number(nowUnix))/60000;
                            if(relativeDeadline < 0){
                                deadline = "期限切れ";
                            }else if(relativeDeadline < 180){
                                deadline = '残り約'+Math.floor(relativeDeadline)+'分';
                            }else if(relativeDeadline < 60*24){
                                deadline = '残り約'+Math.floor(relativeDeadline/60)+'時間';
                            }else{
                                deadline = '残り約'+Math.floor(relativeDeadline/(60*24))+'日';
                            }
                        }else{
                            const relativeDeadline = (Number(Date.parse($tasklistObj[i].deadline)) - Number(nowUnix))/60000;
                            if(relativeDeadline < 0){
                                deadline = "期限切れ";
                            }else if(relativeDeadline < 180){
                                deadline = '<span class="relative-deadline-time">残約'+Math.floor(relativeDeadline)+'分</span>'+deadline;
                            }else if(relativeDeadline < 60*24){
                                deadline = '<span class="relative-deadline-time">残約'+Math.floor(relativeDeadline/60)+'時間</span>'+deadline;
                            }else{
                                deadline = '<span class="relative-deadline-time">残約'+Math.floor(relativeDeadline/(60*24))+'日</span>'+deadline;
                            }
                        }
                    }
                    //近い時間の課題を目立たせる
                    let highlightMark = "";
                    if(items.highlightDeadline === true){
                        highlightMark = "highlightMark";
                        const relativeDeadline = (Number(Date.parse($tasklistObj[i].deadline)) - Number(nowUnix))/60000;
                        if(relativeDeadline < 60*12){
                            highlightMark = 'today shorttime highlightMark';
                        }else if(relativeDeadline < 60*24){
                            highlightMark = 'today highlightMark';
                        }else if(relativeDeadline < 60*24*3){
                            highlightMark = 'a-few-days highlightMark';
                        }else if(relativeDeadline < 60*24*7){
                            highlightMark = 'a-week highlightMark';
                        }
                    }
                    //link生成
                    let subjlink = "",tasklink = "";
                    if($tasklistObj[i].id.includes("manual")){
                        subjlink = ($tasklistObj[i].subjlink.includes("http")) ? $tasklistObj[i].subjlink : "https://"+$tasklistObj[i].subjlink;
                        tasklink = ($tasklistObj[i].tasklink.includes("http")) ? $tasklistObj[i].tasklink : "https://"+$tasklistObj[i].tasklink;
                    }else{
                        subjlink = $tasklistObj[i].link;
                        tasklink = $tasklistObj[i].link;
                        if(subjlink === undefined) {
                            subjlink = $tasklistObj[i].url;
                            tasklink = $tasklistObj[i].suvurl || subjlink+"#questionnaire";
                        }else{
                            subjlink = String((subjlink.includes("/report/"))?subjlink.slice(subjlink.indexOf('idnumber=')+9,subjlink.indexOf('&reportId')):subjlink.slice(subjlink.indexOf('idnumber=')+9,subjlink.indexOf('&examinationId')));
                            subjlink = "https://scombz.shibaura-it.ac.jp/lms/course?idnumber="+subjlink;
                        }
                    }
                    kadaiListHTML += `
                    <div class="subk-line ${highlightMark}">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="${subjlink}">${$tasklistObj[i].course}</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="${tasklink}"><span class="subk-link">${$tasklistObj[i].title}</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time">${deadline}</div><a class="subk-remove-btn" data-value="${$tasklistObj[i].id}" href="javascript:void(0);"></a></div>
                    </div>`;
                }
            }
            const lastgettime =  `${new Date(items.TaskGetTime).toLocaleDateString('ja-JP')} ${new Date(items.TaskGetTime).toLocaleTimeString('ja-JP').slice(0,-3)}`;
            //合体させてHTMLをつくる
            let kadaiHTML =`
            <style>
                #subTaskList{
                    top: max(${timetableHeight}vh,${timetableminHeight}px);
                    transform: translateY(${items.tasklistTranslate}px);
                    background: rgba(255,255,255,0.5);
                    width: 60vw;
                    min-width: 550px;
                    padding: 2px;
                }
                #add-task-manual{
                    display:inline-block;
                    font-weight: bold;
                    font-size:90%;
                    text-decoration:underline;
                    color:#222;
                    margin-left:10px;
                }
                #add-task-manual:hover{
                    background-color:#7773;
                }
                .task-get-time{
                    display:inline-block;
                    font-weight: normal;
                    font-size: 80%;
                    text-decoration:none;
                    color:#222;
                }
                .subk-head-right-contents{
                    display: inline-block;
                    float:right;
                    margin-top:-2px;
                }
                .subk-box{
                    margin:0;
                }
                .subk-head{
                    margin:0;
                    padding:4px;
                    background:#fff;
                    border-bottom:2px solid #ccc;
                    font-size:15px;
                    padding-left:10px;
                    font-weight:bold;
                    height:23px;
                }
                .subk-line{
                    height:25px;
                    padding:2px;
                    margin:0;
                    background:#fff;
                    border-bottom:1px solid #ccc;
                }
                .subk-line:nth-child(2n){
                    background:#FFFAF0;
                }
                .subk-subjname{
                    font-size:12px;
                    padding:2px;
                    width:100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                div.subk-link{
                    padding:2px 2px 0px 2px;
                    font-size:14px;
                    margin-left:10px;
                    max-width:100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                a.subk-link{
                    display: inline-block;
                    min-width:80%;
                    height:100%;
                    color: #111;
                }
                a.subk-link:hover span.subk-link{
                    background:rgba(0,0,100,0.1);
                }
                .subk-deadline{
                    margin-top:2px;
                    margin-right:4px;
                    font-size:14px;
                    float:right;
                }
                .subk-column{
                    margin:0;
                    padding:0;
                    float:left
                }
                .subk-column:nth-child(3n+1){
                    width:30%;
                    float:left;
                }
                .subk-column:nth-child(3n+2){
                    min-width:160px;
                    width:calc(70% - 270px);
                }
                .relative-deadline-time{
                    font-size:80%;
                    margin-right:20px;
                    color:#f00;
                }
                .highlightMark .relative-deadline-time{
                    color:#999;
                }
                .today.highlightMark .relative-deadline-time,.today.highlightMark .subk-deadline-time{
                    color:#f00;
                    font-weight:bold;
                    font-size: 91%;
                }
                .shorttime.highlightMark,.shorttime.highlightMark .subk-deadline-time{
                    background-color:#faa;
                }
                .a-few-days.highlightMark .relative-deadline-time,.a-few-days.highlightMark .subk-deadline-time{
                    color:#f22;
                }
                .a-week.highlightMark .relative-deadline-time{
                    color:#333;
                }
                .subk-subjname-link{
                    color: #000;
                    text-decoration: none;
                }
                .subk-subjname-link:hover{
                    color: #222;
                    text-decoration: underline;
                }
                .subk-remove-btn{
                    display: inline-block;
                    float:right;
                    width:15px;
                    height:15px;
                    margin-left:5px;
                    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20version%3D%221.1%22%20id%3D%22_x32_%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22width%3A%2032px%3B%20height%3A%2032px%3B%20opacity%3A%201%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%234B4B4B%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpolygon%20class%3D%22st0%22%20points%3D%22512%2C52.535%20459.467%2C0.002%20256.002%2C203.462%2052.538%2C0.002%200%2C52.535%20203.47%2C256.005%200%2C459.465%20%0A%09%0952.533%2C511.998%20256.002%2C308.527%20459.467%2C511.998%20512%2C459.475%20308.536%2C256.005%20%09%22%20style%3D%22fill%3A%20rgb(24%2C%2024%2C%2024)%3B%22%3E%3C%2Fpolygon%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A');
                    background-size:8px;
                    background-repeat:no-repeat;
                    background-position: center center;
                    background-color:#faa6;
                    background-blend-mode:lighten;
                    border-radius:100px;
                }
                .subk-remove-btn:hover{
                    background-color:#f776;
                }
                .subk-deadline-time{
                    display: inline-block;
                }
                @media(max-width:1080px){
                    .relative-deadline-time{
                        display:none;
                    }
                    .subk-column:nth-child(3n+2){
                        width:calc(70% - 160px);
                    }
                    .subk-remove-btn{
                        display:none;
                    }
                }
            </style>
            <div class="subtimetableBody" id="subTaskList">
            <div class="subk-box">
                <div class="subk-head">
                課題一覧
                    <div class="subk-head-right-contents">
                        <a class="task-get-time" id="reloadTasks" href="javascript:void(0);">最終更新:${lastgettime}</a>
                        <a id="add-task-manual" href="javascript:void(0);">追加</a>
                    </div>
                </div>
                ${kadaiListHTML}
            </div>
            </div>
            `;
            const manualAddTaskLayerHTML=`
            <style>
                #manAddtaskSelectBackground{
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    z-index: 120;
                    background: #0007;
                    top: 0;
                    left: 0;
                    display:none;
                }
                #manAddtaskSelectLayer{
                    position: fixed;
                    width: 80%;
                    height: 70vh;
                    background-color:#fff;
                    top: 50%;
                    left: 50%;
                    transform: translateY(-50%) translateX(-50%);
                    z-index: 125;
                    text-align:center;
                    padding:30px;
                    display:none;
                }
                .manadd-column{
                    box-shadow: 0 0 3px #777;
                    border-radius: 10px;
                    padding:10px;
                    margin:10px;
                    text-align:left;
                }
                .manadd-column > div{
                    display: block;
                    margin:10px;
                }
                .manadd-column > div > input[type="text"]{
                    width:100%;
                }
                .manadd-column-name{
                    margin-right:10px;
                    display:inline-block;
                    width:120px;
                }

            </style>
            <div id="manAddtaskSelectBackground"></div>
            <div id="manAddtaskSelectLayer">
                <h1>課題手動追加</h1>
                <form onsubmit="return false;">
                <div class="manadd-column">
                    <div><span class="manadd-column-name">科目名</span><input type="text" id="manAddtaskSubjname" required></div>
                    <div><span class="manadd-column-name">科目リンク</span><input type="text" id="manAddtaskSubjlink" required></div>
                </div>
                <div class="manadd-column">
                    <div><span class="manadd-column-name">課題タイトル</span><input type="text" id="manAddtaskTaskname" required></div>
                    <div><span class="manadd-column-name">課題リンク</span><input type="text" id="manAddtaskTasklink" required></div>
                </div>
                <div class="manadd-column">
                    <span class="manadd-column-name">締め切り</span>
                    <input type="date" id="manAddtaskDeadlineDate" required>
                    <input type="time" id="manAddtaskDeadlineTime" required>
                </div>
                <div>
                    <button id="manAddtaskConfirm" type="submit">追加する</button>
                    <button onclick="javascript:document.getElementById('manAddtaskSelectBackground').click();">キャンセル</button>
                </div>
                </form>
            </div>
            </div>
            `;
            if(document.getElementById('pageMain')){
                document.getElementById('pageMain').insertAdjacentHTML('beforeend',kadaiHTML+manualAddTaskLayerHTML);
            }
            //手動追加
            document.getElementById("add-task-manual").addEventListener("click",function(){
                document.getElementById("manAddtaskSelectBackground").style.display = "block";
                document.getElementById("manAddtaskSelectLayer").style.display = "block";
            });
            document.getElementById("manAddtaskSelectBackground").addEventListener("click",function(){
                document.getElementById("manAddtaskSelectBackground").style.display = "none";
                document.getElementById("manAddtaskSelectLayer").style.display = "none";
            });
            document.getElementById("manAddtaskConfirm").addEventListener("click",function(){
                const manSubjname = document.getElementById("manAddtaskSubjname").value;
                const manSubjlink = document.getElementById("manAddtaskSubjlink").value;
                const manTaskname = document.getElementById("manAddtaskTaskname").value;
                const manTasklink = document.getElementById("manAddtaskTasklink").value;
                const manTaskdate = document.getElementById("manAddtaskDeadlineDate").value.replace(/-/g,"/");
                const manTasktime = document.getElementById("manAddtaskDeadlineTime").value;
                if(manSubjname && manSubjlink && manTaskname && manTasklink && manTaskdate && manTasktime){
                    utlstorageGet({
                        manualTasklist: []
                    },function(items){
                        const manualTasklist = items.manualTasklist;
                        const nowTasklist = {
                            "course": manSubjname,
                            "title": manTaskname,
                            "tasklink": manTasklink,
                            "subjlink": manSubjlink,
                            "id": "manual"+String(Date.now()),
                            "deadline": `${manTaskdate} ${manTasktime}`
                        };
                        manualTasklist.push(nowTasklist);
                        utlstorageSet({
                            manualTasklist: manualTasklist
                        },function(){
                            window.confirm("保存成功しました。\n更新結果を表示するにはページをリロードしてください。");
                            document.getElementById('manAddtaskSelectBackground').click();
                            //入力欄初期化
                            document.getElementById("manAddtaskSubjname").value
                            = document.getElementById("manAddtaskSubjlink").value
                            = document.getElementById("manAddtaskTaskname").value
                            = document.getElementById("manAddtaskTasklink").value
                            = document.getElementById("manAddtaskDeadlineDate").value
                            = document.getElementById("manAddtaskDeadlineTime").value
                            = null;
                            //FireFoxのみ(?)バグが発生するので対策
                            if(window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1){
                                console.log("FIREFOX BUGFIX");
                                setTimeout(function(){
                                    const widgetlayer = document.querySelector(".ui-widget-overlay");
                                    const widgetcontent = document.querySelector(".ui-widget-content");
                                    if(widgetlayer && widgetcontent){
                                        console.log("widget true");
                                        widgetlayer.remove();
                                        widgetcontent.remove();
                                    }
                                },100);
                            }
                        });
                    });
                }
            });
            //課題一覧のリロード
            document.getElementById('reloadTasks').addEventListener("click",function(){
                getTaskLists(0);
                alert("更新結果を表示するにはページをリロードしてください");
            });
            //削除ボタン
            const rmBtns = document.getElementsByClassName("subk-remove-btn");
            console.log(rmBtns.length);
            for(const rmBtn of rmBtns){
                rmBtn.addEventListener("click",function(){
                    console.log("clicked");
                    if(window.confirm("この項目を削除しますか？\n削除した項目は設定から復元できます")){
                        utlstorageGet({
                            hiddenTasks: []
                        },function(rmitem){
                            const hiddenTasks = rmitem.hiddenTasks;
                            hiddenTasks.push(rmBtn.getAttribute("data-value"));
                            utlstorageSet({hiddenTasks: hiddenTasks},
                                function(){
                                    rmBtn.parentNode.parentNode.remove();
                            });
                        });
                    }
                });
            }
            console.log(items.hiddenTasks);
            //一定以上期間が過ぎた自作課題を削除
            {
                const removedManualTasklist = [];
                for(const manTask of items.manualTasklist){
                    if( Number(Date.parse(manTask.deadline)) >= Number(Date.now()) ){
                        removedManualTasklist.push(manTask);
                    }
                }
                utlstorageSet({
                    manualTasklist: removedManualTasklist
                },function(){
                    if(removedManualTasklist.length != items.manualTasklist.length)
                    console.log("=========manual list has updated.=========");
                });
            }
        }
    });
}
function jigenInt($str){
    return han2Zenkaku($str.charAt(0));
}
function getNowPeriod(){
    'use strict';
    const $now = new Date();
    const $periodList = [
        540,
        650,
        800,
        910,
        1020,
        1130
        ]
        const $nowNum = Number($now.getHours())*60+Number($now.getMinutes());
        for (let i = 0; i < $periodList.length ; i++) {
            if( $nowNum >= $periodList[i] && $nowNum <= $periodList[i]+100 ){
                //授業時間内
                return i + Number($now.getDay())*10;
            }
        }
        return -1;
}
//課題一覧のアンケートからリンクしたときにアンケートまでスクロールしてくれるようにする関数
function surveyLinkScroll() {
    if (location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=") && location.href.includes("questionnaire")){
        setTimeout(function(){
            window.location.href = ("#questionnaire");
        },300);
    }
}
/* ScombZ Utilities */
/* adfs.js */
//ADFSスキップ
function adfsLoaded(){
    'use strict';
        if (document.domain == 'adfs.sic.shibaura-it.ac.jp'){
            const $adfsButton = document.getElementById("continueButton");
            const $adfsPin = document.getElementById("pin");
            const $hasAdfsButton = $adfsButton !== null;
            const $requiresPin = $hasAdfsButton && $adfsPin !==null;
            if ($requiresPin) {
                console.log("ADFSの2段階認証が有効なため、スキップしません");
            } else if ($hasAdfsButton) {
                console.log("ADFSをスキップします");
                $adfsButton.click();
                console.log("ADFSをスキップしました");
            } else {
                console.log("ADFSのエラーページであるため、スキップしません");
            }
        }
    return;
}
/* ScombZ Utilities */
/* adjustTimetable.js */
/* Kyo_s_s */

function adjustTimetable(data, addSubTimetable){
    'use strict';
    let addcss = '<style type="text/css">';

    if(location.href === 'https://scombz.shibaura-it.ac.jp/lms/timetable'){
        // 土曜日削除
        if(data.eraseSat === true){
            const sats = Array.from(document.getElementsByClassName('6-yobicol'));
            for(const sat of sats) sat.remove();

        }

        // 5, 6限削除
        const TableDataRow = Array.from(document.getElementsByClassName('div-table-data-row'));
        if(TableDataRow.length > 0 && data.erase6) TableDataRow[5].remove();
        if(TableDataRow.length > 0 && data.erase7) TableDataRow[6].remove();

        // 教室名表示
        if(data.dispClassroom === true){
            const TableCellDetail = Array.from(document.getElementsByClassName('div-table-cell-detail'));
            for(const cell of TableCellDetail){
                let classroom = cell.firstElementChild.title;
                cell.firstElementChild.innerHTML = '<p style = "white-space: nowrap; overflow : hidden; text-overflow: ellipsis;">' + classroom + '</p>';
            }
        }

        // センタリング
        if(data.timetableCentering === true){
            addcss += `
                .div-table{
                    text-align: center;
                }
            `;
        }
    }

    if(data.eraseSat === true){
        addcss += `
            th.SubTimetable:nth-child(7), td.SubTimetable:nth-child(7) {
                display: none;
            }
        `;
    }

    addcss += '</style>';
    document.head.insertAdjacentHTML('beforeEnd', addcss);



    // subTimetable の 5, 6限削除
    if(addSubTimetable === true){
        const existingTimetable = setInterval(function(){
            if(document.getElementById('subTimetable')){
                clearInterval(existingTimetable);
                const Timetablerows = Array.from(document.getElementById('subTimetable').rows);
                if(data.erase6) Timetablerows[6].remove();
                if(data.erase7) Timetablerows[7].remove();
            }
        },100);
    }
    // alert('adjusttimeTableが終了');
}
/* ScombZ Utilities */
/* attendance.js */
//場所を無駄にとる出席表示を削除
//3つのモード
function attendanceRemove(item){
    'use strict';
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=")){
        if (item === 'only'){
            console.log("※表示の場合出席を削除");
            let attendanceKome = document.querySelector("#attendance > div.block-contents > div > div:nth-child(3) > div:nth-child(1) > div.course-view-attendance-status > label");
            if (attendanceKome != null){
                if (attendanceKome.textContent == "※"){
                    let attendance = document.querySelector("#attendance");
                    attendance.remove();
                }
            }
        }else if (item === 'all'){
            console.log("無条件で出席を削除")
            let attendance = document.querySelector("#attendance");
            if (attendance != null){
                attendance.remove();
            }
        }
    }
}
/* ScombZ Utilities */
/* changeReportBtn.js */
//提出ボタンのユーザビリティ向上
function changeReportBtn(){
    'use strict';
    if (location.href.includes("scombz.shibaura-it.ac.jp/lms/course/report/submission")){
        ////課題提出完了時にAjax通信をして課題一覧を更新
        if(document.querySelector(".contents-detail.contents-complete")){
            console.log("課題提出完了ページを検出");
            setTimeout(function(){
                getTaskLists(0);
            },500);
        }
        //時間入力バーを作る
        createTimeTempBtn();
        //自動入力ボタンを作る
        autoInputNameOnReport();
        //ボタンを変える
        document.head.insertAdjacentHTML('beforeEnd',`
        <style>
        .block-under-area .block-under-area-btn{
            margin:0 auto;
        }
        .block-under-area .block-under-area-btn .btn-color{
            display: grid;
            place-items: center;
            margin:10px auto;
            width:100%;
            min-width:140px;
            min-height:50px;
            box-shadow:none;
        }
        .block-under-area .block-under-area-btn #backPage,#back,#backBtn{
            color:#545555;
            background:#fff;
            font-size:90%;
            border:1px solid #ccc;
            min-height:40px;
            box-shadow:none;
        }
        .block-under-area .block-under-area-btn #backPage:hover,#back:hover{
            border:1px solid #999;
            box-shadow:0 0 3px #888;
        }
        .block-under-area .block-under-area-btn #submitButton,#report_submission_btn,#report_submission_btn_bugfix{
            color:#fff;
            background:#4892e0;
            font-weight:bold;
            font-size:110%;
            border:1px solid #ccc;
        }
        .time-select-btn{
            padding:2px 10px;
        }
        #confirm_dialog{
            min-height:90px !important;
        }
        #confirm_dialog .block-popup{
            padding-bottom:none !important;
        }
        .ui-dialog-buttonset.commonDialogButtonArea{
            transform:translateX(6px);
        }
        .report-submission-area,.dadSubmissionBlock{
            padding: 8px 6px 6px 20px;
            border-radius: 10px;
            margin: 5px;
            width: calc(100% - 10px);
            box-shadow: 0 0 3px #999;
        }
        .fileSelectName,.dad_fileSelectName{
            font-weight: bold;
        }
        </style>
        `);
    const $submitBtnArea = document.querySelector('.block-under-area-btn');
    if($submitBtnArea){
        $submitBtnArea.style.maxWidth = "450px";
        if($submitBtnArea.childElementCount == 2){
            $submitBtnArea.firstElementChild.id = $submitBtnArea.firstElementChild.id || "back";
            $submitBtnArea.appendChild($submitBtnArea.children[0]);
        }
    }
    if(document.querySelector('.page-directlink'))
        document.querySelector('.page-directlink').remove();
    }
    return;
}
//課題提出時の作成にかかった時間をマウス操作だけで入力できるようにボタンとバーを付ける
function createTimeTempBtn(){
    'use strict';
    console.log('createTimeTempBtn');
    const $timeBoxes = document.getElementsByName("creationTime");
    utlstorageGet({
        sliderBarMax: 600,
        timesBtnValue: 'mode1'
    },function(items){
        const mins=[
            [10,30,60,100,200,300,600],
            [10,30,60,120,180,300,600],
            [10,20,30,60,90,120,180],
            [10,60,120,180,300,600,1000]
        ][Number(items.timesBtnValue.slice(-1))-1];
        for(const $timeBox of $timeBoxes){
            if($timeBox.type != "hidden"){
                $timeBox.parentNode.parentNode.parentNode.insertAdjacentHTML('beforeEnd',`
                <style>
                .minBtn{
                    margin:2px 0;
                    padding:2px 4px;
                    min-width:50px;
                    font-size:14px;
                }
                .minBtnArea,minBarArea{
                    width:100%;
                }
                .min-slider-bar{
                    margin:10px 25px;
                    width:90%;
                    max-width:500px;
                }
                </style>
                <div class="minBtnArea">
                <input type="button" value="${mins[0]}分" class="minBtn" style="margin-left:25px"/>
                <input type="button" value="${mins[1]}分" class="minBtn"/>
                <input type="button" value="${mins[2]}分" class="minBtn"/>
                <input type="button" value="${mins[3]}分" class="minBtn"/>
                <input type="button" value="${mins[4]}分" class="minBtn"/>
                <input type="button" value="${mins[5]}分" class="minBtn"/>
                <input type="button" value="${mins[6]}分" class="minBtn"/>
                </div>
                <div class="minBarArea">
                <input type="range" min="0" max="${items.sliderBarMax}" step="30" class="min-slider-bar">
                </div>
                `);
                if(!$timeBox.value){
                    $timeBox.value = 0;
                }
                const $minBtns = document.getElementsByClassName("minBtn");
                const $minSliderBars = document.getElementsByClassName("min-slider-bar");
                for(let i = 0; i < $minBtns.length; i++) {
                    $minBtns[i].addEventListener("click",function() {
                        for(const $minSliderBar of $minSliderBars){
                            $minSliderBar.value = $timeBox.value = mins[i%($minBtns.length/2)];
                        }
                    });
                }
                for(const $minSliderBar of $minSliderBars){
                    $minSliderBar.value = $timeBox.value;
                    $minSliderBar.addEventListener('input',(e)=>{
                        $timeBox.value = $minSliderBar.value;
                    },false);
                }
            }
        }
    });
    return;
}
//課題提出時名前自動入力
function autoInputNameOnReport(){
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/report/submission") && document.getElementById("toDragAndDrop") && document.getElementById("report_submission_btn")){
        utlstorageGet({
            defaultInputName: "AA00000_山田太郎"
        },function(items){
            const $nameInputs = document.querySelectorAll('input[name="fileName"]');
            console.log("自動入力ボタンを挿入します");
            for(const $nameInput of $nameInputs){
                $nameInput.previousElementSibling.insertAdjacentHTML("beforeEnd",`
                <input type="button" class="autoInputNameBtn" value="自動入力" onclick="javascript:this.parentNode.nextElementSibling.value='${items.defaultInputName}';"></input>
                `);
            }
        });
    }
}
/* ScombZ Utilities */
/* clearButton.js */
//更新通知を削除するボタンの追加

function updateClear(){
    'use strict';

    let buttonUl = document.getElementsByClassName("page-head-notification-area clearfix")[0];
    if (buttonUl){
        console.log("更新通知を削除するボタン追加");
        let button = document.createElement("li");

        let buttonLink = document.createElement("a");
        buttonLink.className = "btn-header-info btnControl";
        buttonLink.id = "ctrl_btn_clear";
        buttonLink.href = "javascript:void(0);"

        var buttonSpan = document.createElement("span");
        buttonSpan.className = "header-icon-space";

        buttonLink.appendChild(buttonSpan);
        buttonLink.insertAdjacentHTML("beforeEnd",`
        <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="opacity: 1;" xml:space="preserve" class="header-img">
        <title>通知削除</title>
        <style type="text/css">
            .st0{fill:#4B4B4B;}
        </style>
        <g>
            <path class="st0" d="M439.114,69.747c0,0,2.977,2.1-43.339-11.966c-41.52-12.604-80.795-15.309-80.795-15.309l-2.722-19.297
                C310.387,9.857,299.484,0,286.642,0h-30.651h-30.651c-12.825,0-23.729,9.857-25.616,23.175l-2.722,19.297
                c0,0-39.258,2.705-80.778,15.309C69.891,71.848,72.868,69.747,72.868,69.747c-10.324,2.849-17.536,12.655-17.536,23.864v16.695
                h200.66h200.677V93.611C456.669,82.402,449.456,72.596,439.114,69.747z" style="fill: rgb(75, 75, 75);"></path>
            <path class="st0" d="M88.593,464.731C90.957,491.486,113.367,512,140.234,512h231.524c26.857,0,49.276-20.514,51.64-47.269
                l25.642-327.21H62.952L88.593,464.731z M342.016,209.904c0.51-8.402,7.731-14.807,16.134-14.296
                c8.402,0.51,14.798,7.731,14.296,16.134l-14.492,239.493c-0.51,8.402-7.731,14.798-16.133,14.288
                c-8.403-0.51-14.806-7.722-14.296-16.125L342.016,209.904z M240.751,210.823c0-8.42,6.821-15.241,15.24-15.241
                c8.42,0,15.24,6.821,15.24,15.241v239.492c0,8.42-6.821,15.24-15.24,15.24c-8.42,0-15.24-6.821-15.24-15.24V210.823z
                M153.833,195.608c8.403-0.51,15.624,5.894,16.134,14.296l14.509,239.492c0.51,8.403-5.894,15.615-14.296,16.125
                c-8.403,0.51-15.624-5.886-16.134-14.288l-14.509-239.493C139.026,203.339,145.43,196.118,153.833,195.608z" style="fill: rgb(75, 75, 75);"></path>
        </g>
        </svg>
        `)

        button.className = "header-clear";

        buttonUl.insertAdjacentHTML('beforeBegin',`
        <style>
        .header-clear {
            margin-right: 10px;
            float: left;
            margin-top: 5px;
            margin-left: 10px;
        }

        .header-icon-space {
            background-color: transparent;
            width: 13px;
            height: 13px;
            display: inline-block;
            position: relative;
            top: -21px;
            left: 40px;
            border-radius: 50%;
            border: white solid 2px;
        }
        </style>
        `);

        button.appendChild(buttonLink);
        buttonUl.appendChild(button);
        //ボタン追加終了

        //ボタン部分のレイアウト調整
        //透明の赤丸を入れている
        let headerButton = document.getElementsByClassName("btn-header-info btnControl");
        for (let i=0;i<headerButton.length;i++){
            if (headerButton[i].getElementsByTagName("span").length == 0){
                buttonSpan = document.createElement("span");
                buttonSpan.className = "header-icon-space";
                headerButton[i].insertBefore(buttonSpan,headerButton[i].getElementsByClassName("header-img")[0])
            }
        }
    }
    $(function(){
        $("#ctrl_btn_clear").click(function(){
            console.log("更新通知削除ボタンがクリックされました");
            let postData="";
            let updateInfoId;
            if (document.querySelectorAll("#ctrl_menu_notification > li").length > 1 && window.confirm("通知を削除しますか？")) {

                $.get("https://scombz.shibaura-it.ac.jp/updateinfo",
                function(data){
                    console.log("通知の取得に成功しました");
                    const parser = new DOMParser();
                    data = parser.parseFromString(data, 'text/html');

                    postData += "_csrf="+data.querySelector('input[name="_csrf"]').value;
                    postData += '&_method='+data.querySelector('input[name="_method"]').value
                    updateInfoId = data.querySelectorAll('input[name="deleteUpdateInfoList"]');

                    for(let i=0;i<updateInfoId.length;i++){
                        postData+="&deleteUpdateInfoList="+updateInfoId[i].value;
                    }
                    console.log(postData)

                    $.post("https://scombz.shibaura-it.ac.jp/updateinfo",postData,
                    function(){
                        console.log("通知の削除に成功しました");
                        let notifi = document.querySelectorAll("#ctrl_menu_notification > li");
                        for (let i=0;i<notifi.length-1;i++){
                            notifi[i].remove();
                        }
                        document.querySelector("#ctrl_btn_notification > span").className = "header-icon-space";

                    })
                })
            }else{
                console.log("通知はありませんでした");
            }

        })
    })
}
//ScombZバグ修正 D&D時に課題削除できないバグを修正
function submissionBugFix(){
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/report/submission") &&
    document.querySelectorAll("#toDragAndDrop").length == 1 &&
    document.querySelectorAll("#submissionFileResult").length == 1){
        console.log("D&D状態のバグ修正開始");
        let reportBtn = document.querySelector("#report_submission_btn");
        reportBtn.style.display = "none";
        reportBtn.insertAdjacentHTML("beforebegin",`
        <a id="report_submission_btn_bugfix" class="under-btn btn-txt btn-color">確認画面に進む</a>
        `)
    }

    function dadFileAreaAddDiv(){
        document.querySelector("#dad_file_area").insertAdjacentHTML("beforeEnd",`
                <div style="display:none;" id="DaDfix">
                <input type="file" class="fileSelectInput" name="uploadFiles" style="display : none;">
                <input type="hidden" class="originalFileName" name="originalFileName" value="">
                <input type="hidden" name="fileId" value="0">
                <input type="hidden" name="rowCounter" value="1">
                <input type="text" name="fileName" class="input input-box">
                <input type="text" name="comment" class="input input-box"></div>`
                );
    }

    function DaDCheck() {
        if (document.querySelector("#dad_file_area > div") == null){
        dadFileAreaAddDiv();
        }else{
            let dadFix = document.querySelectorAll("#DaDfix");
            if (dadFix.length != 1 || dadFix[0].id != "DaDfix"){
                for (let i=0;i<dadFix.length;i++){
                    dadFix[i].remove();
                }
            }
        }
        document.querySelector("#report_submission_btn").click();
    }

    $(document).ready(function () {
    $("#report_submission_btn_bugfix").click(function (){
        console.log("変更されたボタンをクリック");
        DaDCheck();});
    })
}

/* ScombZ Utilities */
/* getTaskLists.js */
function getTaskLists($$reacquisitionMin){
    'use strict';
    //科目ページにアンケートのボタン挿入
    insertSurveyBtnOnSubj();
    //課題取得
    if(location.href == 'https://scombz.shibaura-it.ac.jp/lms/task'){
        getTasksOnTaskpage();
    }else{
        getTasksByAdjax($$reacquisitionMin);
    }
    return;
}
function getTasksOnTaskpage(){
    'use strict';
    console.log('課題一覧ページを検出しました');
    const $taskList = document.getElementById("taskList");
    if($taskList){
        const $taskListsObj = [];
        $taskListsObj.push({
            data: null
        });
        const $tasks = $taskList.querySelectorAll(".result_list_line");
        for(const $task of $tasks){
            const $taskObj = {};
            $taskObj.course   = $task.querySelector(".course").innerHTML;
            $taskObj.title    = $task.querySelector(".tasklist-title a:nth-child(1)").innerHTML;
            $taskObj.link     = $task.querySelector(".tasklist-title a:nth-child(1)").href;
            $taskObj.deadline = $task.querySelector(".tasklist-deadline .deadline").innerHTML;
            $taskObj.id       =  $taskObj.link.includes('idnumber=') && $taskObj.link.slice($taskObj.link.indexOf('idnumber=')+9).replace(/&|Id=/g,'');
            if(!$taskObj.link.includes("https://scombz.shibaura-it.ac.jp")){
                $taskObj.link = "https://scombz.shibaura-it.ac.jp" + $taskObj.link;
            }
            $taskListsObj.push($taskObj);
        }
        console.log('課題一覧を取得しました:\n'+JSON.stringify($taskListsObj));
        utlstorageSet({
            tasklistData : $taskListsObj
        },function(){
            console.log('課題一覧をLocalStorageに保存しました');
            }
        );
    }
    return;
}
function getTasksByAdjax($$reacquisitionMin){
    'use strict';
    //現在時刻と前回取得日時を取得して比較
    const $nowUnix = Date.now();
    utlstorageGet({
        TaskGetTime : 0
    },function(item){
        if(Number(item.TaskGetTime) + $$reacquisitionMin*1000*60 > Number($nowUnix) || location.href.includes("https://scombz.shibaura-it.ac.jp/login")){
            console.log(`前回日時: ${new Date(item.TaskGetTime).toLocaleString()}\n現在日時: ${new Date($nowUnix).toLocaleString()}\n${$$reacquisitionMin}分経過していないため、再取得をスキップします`);
        }else{
            console.log(`前回日時: ${new Date(item.TaskGetTime).toLocaleString()}\n現在日時: ${new Date($nowUnix).toLocaleString()}`);
            console.log("課題取得を開始します");
            setTimeout(function(){
            //Ajax通信
            //jQueryを使って実装
                $(function() {
                    console.log("Getting Tasks Data By Ajax");
                    $.ajax({
                        type: "GET",
                        url: "https://scombz.shibaura-it.ac.jp/lms/task",
                        dataType:"html"
                    })
                    .then(
                        //通信成功時
                        function(data) {
                            console.log("課題一覧ページAjax読み込み成功");
                            const $taskListsObj = [];

                            for (let i = 0 ; $(data).find(".result_list_line .course").eq(i).html() ; i++){
                                const $taskObj = {};
                                $taskObj.course   =  $(data).find(".result_list_line .course").eq(i).html();
                                $taskObj.title    =  $(data).find(".result_list_line .tasklist-title a").eq(i*2).html();
                                $taskObj.link     =  $(data).find(".result_list_line .tasklist-title a").eq(i*2).attr('href');
                                $taskObj.id       =  $taskObj.link.includes('idnumber=') && $taskObj.link.slice($taskObj.link.indexOf('idnumber=')+9).replace(/&|Id=/g,'');
                                $taskObj.deadline =  $(data).find(".result_list_line .tasklist-deadline .deadline").eq(i).html();
                                if(!$taskObj.link.includes("https://scombz.shibaura-it.ac.jp")){
                                    $taskObj.link = "https://scombz.shibaura-it.ac.jp" + $taskObj.link;
                                }
                                $taskListsObj.push($taskObj);
                            }
                            if(!$taskListsObj[0]){
                                //課題完了か確認
                                if($(data).find(".no-data").eq(0).html()){
                                    $taskListsObj.push({
                                        data: null
                                    });
                                }else{
                                //エラー時
                                    $taskListsObj.push({
                                        course: "取得ERROR",
                                        title: "課題一覧ページ",
                                        link: "https://scombz.shibaura-it.ac.jp/lms/task",
                                        deadline: ""
                                    });
                                }
                            }
                            console.log("課題一覧をAjaxで取得しました: \n"+JSON.stringify($taskListsObj));
                            utlstorageSet({
                                TaskGetTime: $nowUnix,
                                tasklistData : $taskListsObj
                            },function(){
                                console.log('課題一覧と現在時刻をLocalStorageに保存しました');
                                }
                            );
                        },
                        //通信失敗時
                        function(){
                            console.log("課題一覧ページ読み込み失敗");
                        }
                    );
                });
                //アンケート取得
                getSurveysByAjax();
            },100);
        }
    });
    return;
}

//アンケートを取得するかどうかの設定を科目別ページに挿入
function insertSurveyBtnOnSubj(){
    if (location.href.includes('scombz.shibaura-it.ac.jp/lms/course?idnumber=')){
        const $courseTitle = document.querySelector('.course-title-txt');
        if($courseTitle && !document.getElementById("noticeSurvey")){
            console.log('授業別ページを検出しました\nアンケート取得是非を挿入します');
            const $nameInt = $courseTitle.innerHTML.indexOf(' ', $courseTitle.innerHTML.indexOf(' ') + 2);
            const $courseName = $courseTitle.innerHTML.slice($nameInt+1);
            console.log("科目name:"+$courseName);
            setTimeout(function(){
                //const courseTopForm = document.getElementById("courseTopForm");
                $courseTitle.parentNode.insertAdjacentHTML('beforeEnd',`
                <style>
                .ItemBox-CheckBox-Input {
                    display: none;
                    /* inputタグは非表示にする */
                }
                .ItemBox-CheckBox-Label {
                    display: inline-block;
                    position: relative;
                    margin: 4px;
                    width: 56px;
                    height: 24px;
                    border-radius: 80px;
                    background: #d0d2d9;
                    /* チェックされていない時の背景色 */
                    cursor: pointer;
                    transition: .2s ease;
                    /* 円が動くスピードを指定 */
                }

                .ItemBox-CheckBox-Input:checked+.ItemBox-CheckBox-Label {
                    background: #416bc9;
                    /* チェックされた時の背景色 */
                }

                .ItemBox-CheckBox-Label:before {
                    content: '';
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    border-radius: 80px;
                    width: 20px;
                    height: 20px;
                    background: #fff;
                    transition: .2s ease;
                    /* 円が動くスピードを指定 */
                }

                .ItemBox-CheckBox-Input:checked+.ItemBox-CheckBox-Label:before {
                    left: 33px;
                }
                .noticeSurveyBox{
                    margin-left: 42px;
                }
                .noticeSurveyBox > span{
                    position: relative;
                    top:-12px;
                    margin-right: 5px;
                }
                </style>
                <div class="noticeSurveyBox">

                    <input class="ItemBox-CheckBox-Input" type="checkbox" id="noticeSurvey"><label class="ItemBox-CheckBox-Label" for="noticeSurvey"></label>
                    <span>この科目のアンケートを課題一覧に表示する</span>
                </div>
                    `);
                const pageurl = location.href;
                utlstorageGet({
                    noticeSurvey : [
                        {
                            name: $courseName,
                            value: false,
                            url: pageurl
                        }
                    ]
                },function(items){
                    let newNoticeSurvey = items.noticeSurvey;
                    let subscipt = items.noticeSurvey.findIndex( (element) => element.name == $courseName);
                    //もし保存されたデータの中に該当科目の情報が存在しなかったら追加する
                    //subscipt: 添え字
                    if(subscipt === -1) {
                        newNoticeSurvey.push({
                            name: $courseName,
                            value: false,
                            url: pageurl
                        });
                        subscipt = newNoticeSurvey.findIndex( (element) => element.name == $courseName);
                    }
                    //storageに保存されたオンオフ情報を復元
                    document.getElementById('noticeSurvey').checked = newNoticeSurvey[subscipt].value;
                    //値の変更時にstorageに保存する
                    document.getElementById('noticeSurvey').addEventListener("change",function(){
                        newNoticeSurvey[subscipt].value = document.getElementById('noticeSurvey').checked;
                        utlstorageSet({
                            noticeSurvey : newNoticeSurvey
                        },function(){
                            console.log("値を変更しました");
                            console.log(newNoticeSurvey);
                        });
                    });
                });

            },200);
        }
    }
}

//アンケートAjax取得
function getSurveysByAjax(){
    console.log("アンケート取得を開始します");
    setTimeout(function(){
        //Ajax通信
        //jQueryを使って実装
            $(function() {
                console.log("Getting Surveys Data By Ajax");
                $.ajax({
                    type: "GET",
                    url: "https://scombz.shibaura-it.ac.jp/portal/surveys/list",
                    dataType:"html"
                })
                .then(
                    //通信成功時
                    function(data) {
                        console.log("アンケート一覧ページAjax読み込み成功");
                        const $taskListsObj = [];
                        const $pastSurveyList = [];
                        for (let i = 0 ; $(data).find("#portalSurveysForm .result-list").eq(i).html() ; i++){
                            if($(data).find("#portalSurveysForm .result-list .survey-list-title").eq(i).find(".portal-surveys-status-end-color").length > 0){
                                console.log("SKIPPED->"+$(data).find("#portalSurveysForm .result-list .survey-list-title").eq(i).find(".template-name").html());
                                continue;
                            }
                            const $taskObj = {};
                            $taskObj.title    =  $(data).find("#portalSurveysForm .result-list .survey-list-title .template-name").eq(i).html();
                            $taskObj.course   =  $(data).find("#portalSurveysForm .result-list .survey-list-address span").eq(i).html();
                            $taskObj.startline=  $(data).find("#portalSurveysForm .result-list .survey-list-update").eq(i).find("span").eq(0).html();
                            $taskObj.deadline =  $(data).find("#portalSurveysForm .result-list .survey-list-update").eq(i).find("span").eq(2).html();
                            $taskObj.id       =  'survey' + $(data).find("#portalSurveysForm .result-list #listSurveyId").eq(i).val();
                            if(Number($(data).find("#portalSurveysForm .result-list #listIdnumber").eq(i).val().length) > 3){
                                $taskObj.suvurl   =  `https://scombz.shibaura-it.ac.jp/lms/course/surveys/take?surveyId=${$(data).find("#portalSurveysForm .result-list #listSurveyId").eq(i).val()}${"&idnumber="+$(data).find("#portalSurveysForm .result-list #listIdnumber").eq(i).val()}`;
                            }else{
                                $taskObj.suvurl   =  `https://scombz.shibaura-it.ac.jp/portal/surveys/take?surveyId=${$(data).find("#portalSurveysForm .result-list #listSurveyId").eq(i).val()}`;
                            }
                            $taskListsObj.push($taskObj);
                            $pastSurveyList.push($taskObj);
                        }
                        console.log("アンケート一覧をAjaxで取得しました: \n"+JSON.stringify($taskListsObj));
                        //アンケート取得設定でオンになっているもののみに絞り込む
                        utlstorageGet({
                            pastSurveyList: [],
                            noticeSurvey:[
                                {
                                    name : "ScombZ Utilities",
                                    value : true,
                                    url : "https://scombz.shibaura-it.ac.jp"
                                }
                            ]
                        },function(items){
                            //過去のデータ
                            const oldPastSurveyList = items.pastSurveyList;
                            for(const $taskObj of $taskListsObj){
                                if(!oldPastSurveyList[0]){
                                    oldPastSurveyList.push($taskObj);
                                    continue;
                                }
                                let flag = false;
                                for(const oldPastSurvey of oldPastSurveyList){
                                    if(oldPastSurvey.id == $taskObj.id){
                                        flag = true;
                                        break;
                                    }
                                }
                                if(flag === false){
                                    oldPastSurveyList.push($taskObj);
                                }
                            }
                            while(oldPastSurveyList.length > 100){   //100件を超えた過去のデータは破棄
                                oldPastSurveyList.shift();
                            }
                            //readableSubjectsにオンになっている科目名をいれる
                            const readableSubjects = [];
                            const $surveyList = [];
                            for(const subjects of items.noticeSurvey){
                                if(subjects.value === true){
                                    readableSubjects.push({
                                        name: subjects.name,
                                        url: subjects.url
                                    });
                                }
                            }
                            console.log("オンになっている科目一覧");
                            console.log(readableSubjects);
                            //readableSubjectsに含まれていたらstorageに保存する配列に追加
                            for(const subjects of $taskListsObj){
                                if (readableSubjects.findIndex( (element) => element.name === subjects.course) !== -1){
                                    subjects.url = readableSubjects[readableSubjects.findIndex( (element) => element.name === subjects.course)].url;
                                    $surveyList.push(subjects);
                                }
                            }
                            //storageに保存
                            console.log("アンケート一覧から取得した、オンになっている科目のアンケート");
                            console.log(JSON.stringify($surveyList));
                            console.log($surveyList);
                            utlstorageSet({
                                surveyListData : $surveyList,
                                pastSurveyList : oldPastSurveyList
                            },function(){
                                console.log('アンケート一覧をLocalStorageに保存しました');
                                }
                            );
                        });
                    },
                    //通信失敗時
                    function(){
                        console.log("読み込み失敗");
                    }
                );
            });
        },100);
}
/* ScombZ Utilities */
/* hideCompletedReports.js */

//提出済み課題
//将来的にはhas()を使用
function hideCompletedReports(){
    'use strict';
    if(location.href.includes('https://scombz.shibaura-it.ac.jp/portal/home')){
        console.log('提出済課題非表示 実行開始');
        const $finRepList = document.querySelectorAll('.portal-subblock-mark-finish');
        for(const $finRep of $finRepList){
            $finRep.parentNode.parentNode.style.display = 'none';
        }
        console.log('提出済課題非表示 実行終了');
    }
    return;
}
function homepageLoaded(){
    if(location.href.includes("https://yudai1204.github.io/ScombZ-Utilities/updates.html")){
        console.log("Update Release Note");
        document.querySelector("#updates .heading").insertAdjacentHTML("afterend",`
            <style type="text/css">
            #link_to_extention {
                display: block;
                position: fixed;
                right: 30px;
                bottom: 30px;
                color: #fff;
                background-color: #595;
                font-size: 20px;
                padding: 10px 30px;
                border-radius: 30px;
            }
            </style>
            <a href="javascript:void(0);" id="link_to_extention">Utilitiesの設定へ</a>
        `);
        document.getElementById("link_to_extention").addEventListener("click", function(){

        });
    }
}
/* ScombZ Utilities */
/* layout.js */
//ページ最大横幅
function maxWidthOnSubjPage(){
    'use strict';
    if(location.href.includes("lms/course?idnumber=") && location.href.length < 80){
        console.log('科目ページの最大横幅を変更します');
        utlstorageGet({
            maxWidthPx:{
                subj: 1280
            }
        },function(items){
            document.head.insertAdjacentHTML('beforeEnd',`
            <style type="text/css">
            #courseTopForm{
                max-width: ${items.maxWidthPx.subj}px;
                margin: 0 auto;
            }
            @media(min-width:${items.maxWidthPx.subj+1}px){
                .course-header{
                    border-left:1px solid #ccc;
                    border-right:1px solid #ccc;
                }
            }
            </style>
            `);
            console.log(`最大横幅は${items.maxWidthPx.subj}pxに設定されました`);
        });
    }

    else if(location.href == "https://scombz.shibaura-it.ac.jp/lms/timetable"){
        console.log('LMSの最大横幅を変更します');
        utlstorageGet({
            maxWidthPx:{
                lms: 1280
            }
        },function(items){
            document.head.insertAdjacentHTML('beforeEnd',`
            <style type="text/css">
            #timetable{
                max-width: ${items.maxWidthPx.lms}px;
                margin: 0 auto;
            }
            </style>
            `);
            console.log(`最大横幅は${items.maxWidthPx.lms}pxに設定されました`);
        });
    }
    else if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/report/submission")){
        console.log('課題ページの最大横幅を変更します');
        utlstorageGet({
            maxWidthPx:{
                task: 1280
            }
        },function(items){
            document.head.insertAdjacentHTML('beforeEnd',`
            <style type="text/css">
            #pageContents{
                max-width: ${items.maxWidthPx.task}px;
                margin: 0 auto;
            }
            .block{
                margin: 40px 24px 0 34px;
            }
            </style>
            `);
            console.log(`最大横幅は${items.maxWidthPx.task}pxに設定されました`);
        });
    }
    return;
}
//現在時刻のコマを目立たせる
function styleNowPeriod() {
    const $nowperiod = getNowPeriod();
    console.log("現在のコマ: "+$nowperiod);
    if($nowperiod == -1){
        return;
    }
    if(location.href == "https://scombz.shibaura-it.ac.jp/lms/timetable"){
        console.log("LMSの現在のコマを目立たせます");
        const $courseList = document.querySelectorAll('.timetable-course-top-btn');
        for(const $course of $courseList) {
            for(let $yobicolNum = 1 ; $yobicolNum < 7 ; $yobicolNum++){
                if( $course.parentNode.parentNode.className.indexOf($yobicolNum+'-yobicol') != -1 ){
                    if($yobicolNum*10 + Number(jigenInt($course.parentNode.parentNode.parentNode.firstElementChild.innerHTML)) -1 == $nowperiod){
                        $course.classList.add("now-period");
                        $course.parentNode.parentNode.style.color ="#000";
                        $course.innerHTML =`<style>.now-period{background:rgb(91 237 146);}</style><span id="nowPeriod" style="font-size:6px;font-weight:normal;color:#000;display:inline-block;background-color:#fff;padding:2px;border-radius:10px;transform:translate(-3px,-4px)">NOW</span>`+$course.innerHTML;
                        break;
                    }
                }
            }
        }
    }
    return;
}
//名前を消す
function removeName(){
    "use strict";
    console.log("名前を変更します");
    const $loginViewName = document.querySelector(".login-view-name");
    if($loginViewName){
        utlstorageGet({
            nickname: ""
        },function(items){
            console.log("名前を取得しました:"+items.nickname);
            $loginViewName.innerHTML= items.nickname;
        });
    }
}
//ダークモード
function darkmodeLayout(mode){
    if(mode === 'normal'){
        console.log("ダークモードは設定されません");
        return;
    }else{
        console.log("ダークモードを挿入します\nmode: ",mode);
        let darkmode = `
        /* ScombZ Darkmode CSS v0.6 */
        /* styled by うだい */
        /*背景、全体設定*/
        :root{
        color-scheme: dark;
        }
        body{
        color:#aaa;
        }
        #pageMain,.login-view,.login{
        background-color: rgb(30, 32, 33);
        }
        .btn,.btn-color{
        border:1px solid #666;
        }
        /*ログインページ*/
        .login-btn.red-btn-color.btn-txt{
        background-color: rgb(168, 21, 21);
        border-color: rgb(152, 19, 19);
        box-shadow: rgb(140 63 63) 0px 1px 3px 1px;
        color: rgb(232, 230, 227);
        }
        .own-auth,.login-auth{
        border: 1px solid #5C5C5C !important;
        }
        /*ログアウトページ*/
        .logout-body {
        background-color: rgb(40, 45, 51);
        }
        .logout-select-box {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(58 63 66) 5px 5px 5px;
        border-color: rgb(65, 71, 73);
        }
        /*ヘッダ*/
        .sitelogo > img{
        filter: drop-shadow(0 0px 4px #fff);
        }
        #page_head{
        background-color: #303134;
        box-shadow: #6665 0px 1px 2px, #6662 0px 2px 6px 2px !important;
        }
        .page-head-navi-colomn{
        color: #abaaaa;
        }
        .header-img{
        filter: invert();
        }
        .mainmenu-head-logo:hover{
        background:#444;
        }
        .control-menu {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(98 103 106) 0px 0px 5px;
        }
        .header-control-color:nth-child(2n+1) {
        background-color: rgb(24, 26, 27);
        }
        .header-control-color:nth-child(2n) {
        background-color: rgb(35, 38, 40);
        }
        .header-control-colomn > .info_title,.header-control-colomn{
        color: rgb(179, 172, 162);
        }
        /*フッタ*/
        #page_foot{
        background-color: #303134;
        }
        /*サイドメニュー関連*/

        .sidemenu-logo > a > img{
        filter: drop-shadow(0 0px 4px #fff);
        }
        .hamburger-icon .hamburger-line {
        background-color: #ecedea;
        }

        .header-new-icon{
        background-color:#d00a;
        border: #303134 solid 2px;
        }
        .sidemenu{
        background-color:#303134;
        border-right: none;
        }
        .sidemenu-link.sidemenu-lms-link.sidemenu-link-txt{
        background-color:#38393b;
        }
        .sidemenu-link.sidemenu-lms-link.sidemenu-link-txt:hover{
        background-color:#505154;
        }
        .sidemenu-head{
        background-color:#303134;
        border-bottom:1px solid #444c;
        filter:grayscale(40%);
        }
        .sidemenu-link-txt{
        color:#ccc;
        }
        .sidemenu-link{
        border-bottom:1px solid #444;
        border-top:none !important;
        }
        .sidemenu-pull {
        background-color: rgba(26, 29, 30, 0.19);
        color: rgb(210, 206, 200);
        border-bottom-color: rgb(48, 52, 54);
        text-decoration-color: initial;
        }
        .sidemenu-list-txt {
        text-decoration-color: initial;
        color: rgb(232, 230, 227);
        }
        .sidemenu-list-colomn {
        background-color: rgb(34, 37, 38);
        border-bottom-color: rgb(72, 78, 81);
        }
        .sidemenu-list-colomn:hover {
        background-color: rgb(44, 47, 48);
        }
        /*サブ時間割関連*/
        .page-main .subtimetableBody {
        color: rgb(232, 230, 227);
        }
        .subtimetableBodyCulm{
        background-color:rgba(160,160,160,0.5) !important;
        }
        td.SubTimetable, th.SubTimetable{
        background-color:rgb(31, 34, 35) !important;
        }
        th.SubTimetable{
        background-color:rgb(85, 71, 42) !important;
        }
        td.SubTimetable:nth-child(1), th.SubTimetable:nth-child(1){
        background-color:rgb(108, 28, 19) !important;
        }
        td.SubTimetable > a{
        color:#ccc !important;
        }
        a.SubTimetable:hover{
        background:rgb(41,44,45) !important;
        }
        .subk-head,.note-line.note-head{
        background-color:rgb(31, 34, 35) !important;
        color: #ddd !important;
        border-bottom:2px solid rgba(160,160,160,0.5) !important;
        }
        .subk-subjname-link,a.subk-link,.subk-deadline,.memo-add,.memo-remove{
        color: #bbb !important;
        }
        .subk-line,.note-line{
        background-color:rgb(41, 44, 45) !important;
        color: #ccc !important;
        border-bottom:1px solid rgba(160,160,160,0.5) !important;
        }
        .note-head{
        border-top: 1px solid #333 !important;
        }
        .noteInput.inputmode{
        background-color:#333 !important;
        border:1px solid #999;
        }
        /*LMSページ関連*/
        .timetable-course-top-btn{
        background-color: rgb(33, 78, 57);
        border-bottom-color: rgb(56, 112, 37);
        box-shadow: rgb(51 55 57) 0px 1px 4px;
        }
        #nowPeriod{
        color:#000 !important;
        }
        .div-table-cell-detail {
        background-color: rgb(24, 26, 27);
        border-bottom-color: rgb(70, 76, 78);
        border-right-color: rgb(70, 76, 78);
        }
        .div-table-cell {
        border-color: rgb(66, 72, 74) rgb(66, 72, 74) rgb(66, 72, 74) rgb(48, 52, 54);
        color:#aaa !important;
        }
        .div-table-colomn-period-color {
        background-color: rgb(108, 28, 19);
        border-bottom-color: rgb(34, 59, 56);
        }
        .input {
        border-color: rgb(71, 77, 80);
        }
        .yobi-color1,.yobi-color3,.yobi-color5 {
        background-color: rgb(134, 111, 66);
        }
        .yobi-color2,.yobi-color4,.yobi-color6 {
        background-color: rgb(93, 78, 46);
        }
        .div-table-head-color {
        color: rgb(232, 230, 227);
        border-left-color: rgb(34, 59, 76);
        }
        /*メインページ*/
        .portal-subblock-mark-finish{
        background-color:#fff4;
        }
        .portal-subblock-link > div > a{
        color:#aaa !important;
        }
        .portal-subblock,.information-area,.login-body,.login-block {
        background-color: #333;
        box-shadow: #444 5px 5px 5px;
        }
        .portal-subblock-list {
        border-bottom-color: rgb(72, 78, 81);
        }
        .result-list:nth-child(2n-1) {
        background-color: rgb(24, 26, 27);
        }
        .result-list:nth-child(2n) {
        background-color: rgb(31, 34, 35);
        }
        .portal-subblock-list-main a,.portal-subblock-list-sub {
        color: rgb(214, 211, 205);
        text-decoration-color: initial;
        }
        .portal-calendar {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(58 63 66) 5px 5px 5px;
        }
        .portal-calendar-day-td-a {
        color: rgb(214, 211, 205);
        text-decoration-color: initial;
        }
        .portal-calendar-month,.portal-calendar-week {
        background-color: rgba(25, 127, 46,0.6);
        border-top-color: rgba(5, 210, 74,0.6);
        }
        .portal-calendar-event-contents,.portal-calendar-event-pull {
        color: rgb(182, 180, 187);
        background-color: rgb(74, 61, 36);
        border-top-color: rgb(109, 90, 54);
        }
        .portal-calendar-booking {
        background-color: rgb(53, 76, 98);
        }
        .portal-calendar-today {
        background-color: rgb(142, 13, 13);
        }
        .portal-calendar-event-add-a, .portal-calendar-event-export-a {
        color: rgb(182, 180, 187);
        background-color: #195627;
        text-decoration-color: initial;
        }
        .portal-calendar-event-add-a:hover, .portal-calendar-event-export-a:hover {
        background-color: #094617;
        text-decoration-color: initial;
        }
        .portal-top-subblock-title {
        color: rgb(101, 225, 127);
        }
        .portal-info-tab-name {
        background-color: rgb(78, 77, 73);
        }
        .portal-subblock-title {
        font-weight: bold;
        position: relative;
        margin-bottom: 25px;
        border-bottom: solid 4px #1f9f3a;
        }
        .top_personal_pull::after, .top_kamoku_pull::after, .top_etc_pull::after,.portal-questionnaire-title::after,.portal-banner-title::after,.portal-notice-title::after,.portal-notice-title::after,.portal-attention-title::after,.timetable-title-txt:after {
        border-bottom-color: rgb(44, 111, 73);
        }
        .portal-info-tab-select {
        background-color: rgb(114, 92, 44);
        }
        .portal-subblock-link-main-a {
        color: rgb(214, 211, 205);
        }
        .portal-subblock-link-subtitle {
        color: rgb(214, 211, 205);
        background-color: #222;
        border-top-color: rgb(67, 72, 75);
        border-bottom-color: rgb(67, 72, 75);
        }
        /*科目別ページ関連*/
        .ql-editor > p > span{
        color:#aaa !important;
        }
        .course-view-header-btn-area{
        border-top-color:rgb(98, 102, 105);
        }
        .course-header{
        background-color: #333;
        box-shadow: #444 5px 5px 5px;
        }
        .white-btn-color{
        background-color:#111;
        box-shadow:0px 2px 3px 1px #222;
        color:#ddd;
        border:none;
        }
        .course-view-header-btn-color{
        background-color:#c00a;
        }
        .block {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(58 63 66) 5px 5px 5px;
        }
        .block-contents {
        background-color: rgb(24, 26, 27);
        }
        .contents-tag {
        border-bottom-color: rgb(58, 62, 65);
        }
        .contents-list {
        border-top-color: initial;
        }
        .course-result-list {
        border-bottom-color: rgb(58, 62, 65);
        }
        .course-result-list:nth-of-type(2n+1) {
        background-color: rgb(24, 26, 27);
        }
        .course-result-list:nth-of-type(2n) {
        background-color: rgb(31, 34, 35);
        }
        .link-txt {
        color: rgb(86, 142, 241);
        text-decoration-color: initial;
        }
        .material-sub-color {
        background-color: rgb(59, 60, 30);
        }
        .block-title.block-cube{
        filter: contrast(150%);
        filter: opacity(60%);
        }
        .control-menu .control-list:nth-child(2n-1) {
        background-color: rgb(24, 26, 27);
        }
        .control-menu .control-list:nth-child(2n) {
        background-color: rgb(34, 36, 37);
        }
        .control-menu .control-list > .control-menu-colomn{
        color:#aaa !important;
        }
        .btn-control:hover:before {
        background-color: rgba(24, 26, 27, 0.4);
        }
        /*ダイアログ*/
        .ui-widget.ui-widget-content {
        border-color: rgb(64, 70, 72);
        }
        .ui-widget-header {
        border-color: rgb(58, 62, 65);
        background-image: initial;
        background-color: rgb(36, 39, 41);
        color: rgb(200, 195, 188);
        }
        .ui-widget-content {
        border-color: rgb(58, 62, 65);
        background-image: initial;
        background-color: rgb(24, 26, 27);
        color: rgb(200, 195, 188);
        }
        .information-popup-block {
        box-shadow: rgb(58 63 66) 0px 0px 15px;
        }
        .information-popup-block {
        background-color: rgb(24, 26, 27) !important;
        box-shadow: rgb(58 63 66) 5px 5px 5px !important;
        }
        .contents-vertical {
        border-bottom-color: rgb(98, 102, 105);
        }
        .course-title-txt {
        border-top-color: rgb(98, 102, 105);
        }
        .course-header-detail {
        border-top-color: rgb(98, 102, 105);
        }
        .information-color {
        background-color: #ac732d !important;
        }
        .contents-title {
        border-top-color: rgb(59, 64, 66);
        }
        /*アンケート*/
        #survey_timer{
        background-color: rgb(41, 45, 46);
        box-shadow: rgb(58 63 66) 0px 5px 5px;
        }
        .survey-color{
        background-color:#9f6215;
        }
        /*課題提出*/
        .input-checkbox:checked:after {
        border-color: #ccc;
        opacity: 1.0;
        }
        .report-submission-link-area {
        background-color: rgb(31, 34, 35);
        }
        .report-color {
        background-color: rgb(136, 12, 12);
        }
        .block-under-area .block-under-area-btn #submitButton, #report_submission_btn,.block-under-area .block-under-area-btn #takebtn,.block-under-area .block-under-area-btn .takeConfirm,.block-under-area .block-under-area-btn #submit{
        background-color: #545555 !important;
        }
        .block-under-area .block-under-area-btn #backPage, #back, #backBtn, #backbtn,.block-under-area .block-under-area-btn .tempSaveBtn,.block-under-area .block-under-area-btn .backbutton{
        background-color: #333 !important;
        color:#aaa !important;
        }
        .result-list {
        border-bottom-color: rgb(58, 62, 65);
        }
        .block-popup {
        background-color: rgb(24, 26, 27);
        }
        .drag-drop-area {
        background-color: rgb(38, 41, 43) !important;
        color: rgba(232, 230, 227, 0.35) !important;
        }
        /*コミュニティ*/
        .participating-community-list-li .participating-community-list-li-img{
        filter: invert();
        }
        .community-header {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(58 63 66) 0px 7px 5px;
        }
        /*課題一覧*/
        div.result_list_content .result_list_line:nth-of-type(2n+1) {
        background-color: rgb(24, 26, 27);
        }
        .result_list .result_list_line {
        color: rgb(179, 172, 162);
        border-bottom-color: rgb(58, 62, 65);
        }
        .result_list .result_list_tag {
        color: rgb(210, 206, 200);
        border-bottom-color: rgb(58, 62, 65);
        }
        /*オンライン授業情報*/
        .week-label {
        background-color: rgb(24, 26, 27);
        }
        .week-checked {
        background-color: rgb(50, 54, 56);
        }
        /*テスト*/
        .examination-color {
        background-color: #003560;
        }
        .timer-btn-area {
        background-color: rgb(41, 45, 46);
        }
        .input-radio:checked:after {
        opacity: 1.0;
        background-color: #aaa;
        }
        .large-timer-number,.small-timer-number {
        background-color: #111;
        color:#999;
        }
        .input-box{
            color :#eee;
        }
        .portal-subblock-bottom-a,.portal-survey-content-part-left,.portal-survey-content-right{
            color:#c4c5c5;
        }
        .ItemBox-CheckBox-Label{
            background-color:#000 !important;
        }
        .ItemBox-CheckBox-Input:checked+.ItemBox-CheckBox-Label {
            background: #1b449f !important;
        }
        .subk-remove-btn {
            background-color: #0aa6 !important;
            background-blend-mode: darken !important;
            filter: invert(1);
        }
        .examination-question-answer-input-box{
            color:#ddd;
        }
        .relative-deadline-time{
            color:#a00 !important;
        }
        .highlightMark .relative-deadline-time{
            color:#555 !important;
        }
        .today.highlightMark .relative-deadline-time,.today.highlightMark .subk-deadline-time{
            color:#f00 !important;
        }
        .shorttime.highlightMark,.shorttime.highlightMark .subk-deadline-time{
            background-color: rgb(100, 44, 45) !important;
        }
        .a-few-days.highlightMark .relative-deadline-time,.a-few-days.highlightMark .subk-deadline-time{
            color:#e22 !important;
        }
        .a-week.highlightMark .relative-deadline-time{
            color:#999 !important;
        }
        .task-get-time,#add-task-manual{
            color:#ccc !important;
        }
        #manAddtaskSelectLayer{
            background-color:#333 !important;
        }
            `;
        if(mode === 'relative'){
            darkmode = "@media (prefers-color-scheme: dark) {\n" + darkmode + "}";
        }
        if(document.head)
            document.head.insertAdjacentHTML('beforeend',`<style type="text/css">`+darkmode+"</style>");
    }
    return;
}
//D&Dで課題を出す
function ddSub(){
    "use strict";
    if (location.href.includes("scombz.shibaura-it.ac.jp/lms/course/report/submission")){

        console.log("ドラッグ&ドロップに変更します");
        let DragAndDrop = document.getElementById("toDragAndDrop");
        if (DragAndDrop){
            setTimeout(function(){
                DragAndDrop.click();
            },300)
        }
    }
}
/* ScombZ Utilities */
/* mouseEvent.js */
function mouseEvents(){
    'use strict';
    const dlLinks = document.querySelectorAll(".material-file-name");
    const dlFiles = document.querySelectorAll(".downloadFile");
    const LMSLinks = document.querySelectorAll(".timetable-course-top-btn");
    const courseInfo = document.querySelectorAll(".course-view-information-name");
    if(dlLinks){
        mousedownClick(dlLinks);
    }
    if(dlFiles){
        mousedownClick(dlFiles);
    }
    if(courseInfo){
        mousedownClick(courseInfo);
    }
    for(const LMSLink of LMSLinks) {
        LMSLink.addEventListener('mousedown', function(event){
            switch (event.which) {
            case 2:
                console.log('リンクホイールクリック検知');
                window.open("https://scombz.shibaura-it.ac.jp/lms/course?idnumber="+LMSLink.getAttribute("id"));
                break;
            case 3:
                console.log('リンク右クリ検知');
                break;
            default:
                console.log('リンクのクリックを検知');
            }
        });
    }
    return;
}

function mousedownClick(items){
    for(const item of items){
        item.addEventListener('mousedown', function(event){
            switch (event.which) {
            case 2:
                console.log('リンクホイールクリック検知');
                item.click();
                break;
            case 3:
                console.log('リンク右クリ検知');
                break;
            default:
                console.log('リンクのクリックを検知');
            }
        });
    }
    return;
}
/* ScombZ Utilities */
/* mouseEvent.js */

function notepad(tasklistDisplay){
    //メモを追加・削除する
    //メモを表示する
    //課題一覧表示がある場合
    if (tasklistDisplay === true){
        //課題一覧が追加されているかわからないため、setIntervalで待ってから追加する
        const existingTaskList = setInterval(function(){
            if(document.getElementById("subTaskList")){
                clearInterval(existingTaskList);
                displayNotepad();
            }
        },100);
    }else{
        displayNotepad();
    }
    return;
}
function displayNotepad(){
    utlstorageGet({
        notepadData:[],
        addSubTimetable: true,
        tasklistTranslate: 0,
        specialSubj: 0,
        styleSidemenu: true
    },function(items){
        if(items.styleSidemenu !== true){
            return;
        }
        console.log("メモ表示を開始します");
        let newNotepadData = items.notepadData;
        if(!document.getElementById("subTaskList")){
            //時間割も課題リストもないとき
            console.log("課題リストが見つかりません");
            let timetableHeight = 5;
            let timetableminHeight = 0;
            if(items.addSubTimetable){
            //時間割はあるが課題リストがないとき
                console.log("時間割が見つかりました");
                timetableHeight = 40;
                timetableminHeight = 350;
                if(Number(items.specialSubj) > 0){
                    timetableHeight += 10*Number(items.specialSubj);
                    timetableminHeight += 60*Number(items.specialSubj);
                }
            }
            //課題リストがないときは、先にsubTaskListを追加する
            if(document.getElementById('pageMain')){
                document.getElementById('pageMain').insertAdjacentHTML('beforeend',`<style>
                #subTaskList{
                    top: max(${timetableHeight}vh,${timetableminHeight}px);
                    transform: translateY(${items.tasklistTranslate}px);
                    background: rgba(255,255,255,0.5);
                    width: 60vw;
                    min-width: 500px;
                    padding: 2px;
                }
                </style>
                <div class="subtimetableBody" id="subTaskList"></div>`);
            }else{
                console.log("エラー: pageMainが見つかりません");
                return;
            }
        }
        //subTaskListノードにメモを追加
        const $subTaskList = document.getElementById("subTaskList");
        if($subTaskList){
            let memoHTML = '';
            for(const memoIndex of items.notepadData){
                memoHTML += `<div class="note-line">
                <div class="note-title">${memoIndex.title}</div>
                <div class="note-index">${memoIndex.index}</div>
                <a class="memoRemove" href="javascript:void(0);"><div class="memo-remove">削除</div></a>
                <div class="note-kara"></div>
                </div>
                `;
            }
            const notepadhtml = `
            <style>
            .note-line{
                padding:2px;
                margin:0;
                background:#fff;
                border-bottom:1px solid #ccc;
            }
            .note-line:nth-child(2n){
                background:#FFFAF0;
            }
            .note-head{
                font-size:15px;
                border-bottom: 2px solid #ccc;
                border-top: 1px solid #ccc;
                font-weight:bold;
                padding-left: 10px;
            }
            .note-title{
                display:block;
                width:calc(30% - 4px);
                font-size:15px;
                float:left;
                overflow:hidden;
                margin:0;
            }
            .note-index{
                display:block;
                font-size:14px;
                width:calc(69% - 30px);
                float:left;
                margin:0;
            }
            .memo-remove{
                width:30px;
                margin:0;
                float:left;
                font-weight:normal;
                color:#222;
                text-decoration: underline;
            }
            .note-kara{
                clear:left;
            }
            .memo-add{
                float:right;
                color:#222;
                text-decoration: underline;
            }
            </style>
            <div class="note-line note-head">
                ユーザーメモ
                <a id="memoAdd" href="javascript:void(0);"><div class="memo-add">追加する</div></a>
            </div>
            ${memoHTML}
            `;
            $subTaskList.insertAdjacentHTML("beforeend",notepadhtml);
            document.getElementById('pageMain').insertAdjacentHTML('beforeEnd',`
            <style>
            .noteInput{
                width:60vw;
                height:60vh;
                position:fixed;
                z-index:102;
                background:#fff;
                visibility:hidden;
                right:20vw;
                top:20vh;
            }
            .noteInput.inputmode{
                width:60vw;
                height:60vh;
                position:fixed;
                z-index:101;
                background:#fff;
                visibility:visible;
                right:20vw;
                top:20vh;
                border-radius:5px;
            }
            .noteInputLayer{
                width:100%;
                height:100%;
                margin:0;
                padding:0;
                z-index:101;
                background:#0009;
                position:fixed;
                top:0;
                left:0;
                visibility:hidden;
            }
            .noteInputLayer.inputmode{
                visibility:visible;
            }
            .noteInputTitle{
                width:80%;
                height:80px;
                margin:0 auto;
                display:block;
            }
            .noteInputIndex{
                width:80%;
                height:calc(100% - 220px);
                margin:0 auto;
                display:block;
            }
            .noteInput h4{
                margin:0;
            }
            .noteInput h1{
                margin:0;
                text-align:center;
                margin-top:10px
            }
            .noteInput input[type="text"]{
                width:100%;
                height:28px;
                font-size:16px;
            }
            .noteInput textarea{
                width:100%;
                height:calc(100% - 16px);
                font-size:14px;
            }
            div.noteSaveBtn{
                width:100%;
                text-align:center;
                margin-top:3.5%;
            }
            input[type="button"]#noteSaveBtn{
                width:50%;
                height:4vh;
                min-width:120px;
                min-height:20px;
                min-height:40px;
            }
            .in-note-link{
                color:#00F;
            }
            </style>
            <div id="noteInputLayer" class="noteInputLayer notelayer"></div>
            <div class="noteInput notelayer">
            <h1>メモを追加</h1>
            <div class="noteInputTitle"><h4>タイトル</h4><input type="text" id="noteInputTitle" value="新規メモ"></div>
            <div class="noteInputIndex"><h4>本文</h4><textarea id="noteInputIndex">リンクを作れます 例:[[https://google.co.jp]]</textarea></div>
            <div class="noteSaveBtn"><input type="button" value="保存する" id="noteSaveBtn"></div>
            </div>
            `);
            const notelayers = document.getElementsByClassName("notelayer");
            const noteInputlayer = document.getElementById("noteInputLayer");
            const noteSaveBtn = document.getElementById('noteSaveBtn');
            //保存ボタンをクリックしたとき
            if(noteSaveBtn){
                noteSaveBtn.addEventListener('click',function(){
                    function escapeNotepad(input){
                        let data = input.replace(/"|<|>/g,' ').replace("\n","<br>");
                        while( data.includes("[[") && data.includes("]]") ){
                            const url = data.slice(data.indexOf("[[")+2 , data.indexOf("]]") );
                            data = data.replace("[[",`<a href="${url}" target="_blank" rel="noopener noreferrer" class="in-note-link">`).replace("]]","</a>");
                        }
                        return data;
                    };
                    let noteInputTitleDataEsc = escapeNotepad(document.getElementById("noteInputTitle").value);
                    let noteInputIndexDataEsc = escapeNotepad(document.getElementById("noteInputIndex").value);
                    const newNote = {
                        title: noteInputTitleDataEsc,
                        index: noteInputIndexDataEsc
                    };
                    //追加したメモを保存する
                    newNotepadData.push(newNote);
                    utlstorageSet({
                        notepadData : newNotepadData
                        },function(){
                            console.log("新規メモを保存しました");
                    });
                    //新規メモを閉じる
                    noteInputlayer.click();
                    //追加したメモを表示する
                    const noteLine = document.getElementsByClassName("note-line");
                    if(noteLine[0]){
                        //すでにメモがあるとき
                        noteLine[noteLine.length-1].insertAdjacentHTML("afterEnd",`
                            <div class="note-line">
                            <div class="note-title">${noteInputTitleDataEsc}</div>
                            <div class="note-index">${noteInputIndexDataEsc}</div>
                            <div class="note-kara"></div>
                            </div>
                        `);
                    }else{
                        //メモが一個もないとき
                        document.getElementsByClassName("note-head")[0].insertAdjacentHTML("afterEnd",`
                            <div class="note-line">
                            <div class="note-title">${noteInputTitleDataEsc}</div>
                            <div class="note-index">${noteInputIndexDataEsc}</div>
                            <div class="note-kara"></div>
                            </div>
                        `);
                    }
                    //入力欄を初期化
                    document.getElementById("noteInputTitle").value = "新規メモ";
                    document.getElementById("noteInputIndex").value = "";
                });
            }
            //グレーレイヤークリック時に入力モードを閉じる
            noteInputlayer.addEventListener("click",function(){
                for(const notelayer of notelayers){
                    notelayer.classList.remove("inputmode");
                }
            });
            document.getElementById("memoAdd").addEventListener("click",function(){
                //メモ追加時
                for(const notelayer of notelayers){
                    notelayer.classList.add("inputmode");
                }
                //Ctrl+SとCtrl+Enterで保存する
                $(window).bind('keydown', function(e) {
                    if (e.ctrlKey || e.metaKey) {
                        if(e.keyCode == 13 || e.keyCode == 83){
                            if(document.querySelector(".noteInput").classList.contains("inputmode")){
                                e.preventDefault();
                                document.getElementById("noteSaveBtn").click();
                                console.log("SAVED");
                            }
                        }
                    }
                });
            });
            const memoList = document.getElementsByClassName("memoRemove");
            for(let i = 0; i < memoList.length; i++){
                memoList[i].addEventListener("click",function(){
                    //メモ削除時
                    //非表示にする
                    memoList[i].parentNode.style.display = "none";
                    //データを削除する
                    newNotepadData.splice(i,1);
                    utlstorageSet({
                        notepadData : newNotepadData
                    },function(){
                        console.log("削除完了");
                    });
                });
            }
        }
    });
    return;
}
/* ScombZ Utilities */
/* oldScomb.js */
function scombLogin(){
    if(location.href == "https://scomb.shibaura-it.ac.jp/portal/index"){
        const $scombLoginBtns = document.querySelectorAll("strong");
        for(const $scombLoginBtn of $scombLoginBtns){
            if($scombLoginBtn.innerHTML.includes("ScombZ")){
                $scombLoginBtn.parentNode.parentNode.parentNode.insertAdjacentHTML("afterBegin",`
                <a href="https://scomb.shibaura-it.ac.jp/portal/dologin" style="margin-bottom:5px;">
                                <span>
                                    <strong>学生ログイン</strong>
                                </span>
                            </a>
                `);
            }
        }
    }
}
/* ScombZ Utilities */
/* styleDialog.js */
function styleDialog(){
    'use strict';
    //お知らせダイアログ処理
    const dialogObserver = new MutationObserver((mutations) => {
        const $infoDialog = document.querySelector('[aria-describedby="infoDetailView"]');
        const $progressDialog = document.querySelector('[aria-describedby="progress_dialog"]');
        const $notificationDialog = document.querySelector('[aria-describedby="info_detail_view2"]');
        const $courseDialog = document.querySelector('[aria-describedby="info_detail_view"]');
        const $virusDialog = document.querySelector('[aria-describedby="ui-id-1"]');

        const $widgetOverlay = document.getElementsByClassName('ui-widget-overlay')[0];

        const $contentAppendCSSText = 'max-height: calc(90vh - 40px)!important; height: calc(90vh - 40px);';
        const $dialogAppendCSSText = 'position: fixed; inset: 0; margin: auto; width: 960px; height: fit-content;';

        //  ポータルホームのダイアログの処理
        if ($infoDialog && !$progressDialog && $infoDialog.style.display !== 'none'){
            document.getElementById('infoDetailView').style.cssText += $contentAppendCSSText;
            $infoDialog.style.cssText += $dialogAppendCSSText;
            $widgetOverlay.addEventListener('click', function(){
                $infoDialog.querySelector('.commonDialogButtonArea button.under-btn.btn-color.btn-txt.ui-button.ui-corner-all.ui-widget').click();
            }, { once: true });
            styleadd();
        }

        //  お知らせのダイアログの処理
        if ($notificationDialog && $notificationDialog.style.display !== 'none'){
            document.getElementById('info_detail_view2').style.cssText += $contentAppendCSSText;
            $notificationDialog.style.cssText += $dialogAppendCSSText;
            $widgetOverlay.addEventListener('click', function(){
                $notificationDialog.querySelector('.commonDialogButtonArea button.under-btn.btn-color.btn-txt.ui-button.ui-corner-all.ui-widget').click();
            }, { once: true });
            styleadd();
        }

        //  LMSの授業詳細ページ＆コミュニティ詳細ページのダイアログの処理
        if ($courseDialog && $courseDialog.style.display !== 'none'){
            document.getElementById('info_detail_view').style.cssText += $contentAppendCSSText;
            $courseDialog.style.cssText += $dialogAppendCSSText;
            $widgetOverlay.addEventListener('click', function(){
                $courseDialog.querySelector('.commonDialogButtonArea button.under-btn.btn-color.btn-txt.ui-button.ui-corner-all.ui-widget').click();
            }, { once: true });
            styleadd();
        }

    });

    const config = {
        childList: true
    }

    const target = document.body;

    dialogObserver.observe(target, config);

    function styleadd(){
        document.head.insertAdjacentHTML('beforeEnd',`
        <style>
            .information-popup-block{
                box-shadow: 0 0 15px #c2c2c2;
            }
            .ui-widget-overlay.ui-front{
                background: #000;
                opacity: .5;
            }
        </style>
        `);
    };

    return;
}
/* ScombZ Utilities */
/* styleExam.js */
//テスト改善
function styleExam(){
    'use strict';
    if (location.href.includes("scombz.shibaura-it.ac.jp/lms/course/examination/take")){
        //テストを受ける前の画面
        if(document.querySelector(".block-under-area-btn") && document.querySelector(".block-under-area-btn").innerHTML.includes("受験する")){
            console.log('テスト受験確認画面');
            document.head.insertAdjacentHTML('beforeEnd',`
            <style>
            .block-under-area .block-under-area-btn{
                margin:0 auto;
            }
            .block-under-area .block-under-area-btn .btn-color{
                display: grid;
                place-items: center;
                margin:10px auto;
                width:100%;
                min-width:140px;
                min-height:50px;
                box-shadow:none;
            }
            .block-under-area .block-under-area-btn #backbtn,#back{
                color:#545555;
                background:#fff;
                font-size:90%;
                border:1px solid #ccc;
                min-height:40px;
            }
            .block-under-area .block-under-area-btn #backbtn:hover,#back:hover{
                border:1px solid #999;
                box-shadow:0 0 3px #888;
            }
            .block-under-area .block-under-area-btn #takebtn{
                color:#fff;
                background:#4892e0;
                font-weight:bold;
                font-size:110%;
                border:1px solid #ccc;
            }
            #confirm_dialog{
                min-height:90px !important;
            }
            #confirm_dialog .block-popup{
                padding-bottom:none !important;
            }
            .ui-dialog-buttonset.commonDialogButtonArea{
                transform:translateX(6px);
            }
            </style>
            `);
            const $submitBtnArea = document.querySelector('.block-under-area-btn');
            $submitBtnArea.style.maxWidth = "450px";
            if($submitBtnArea.childElementCount == 2){
                $submitBtnArea.appendChild($submitBtnArea.children[0]);
            }
            if(document.querySelector('.page-directlink'))
                document.querySelector('.page-directlink').remove();
        }
        //テスト中の画面
        if((document.querySelector(".block-under-area-btn") && document.querySelector(".block-under-area-btn").innerHTML.includes("一時保存する"))){
            console.log("テスト中画面");
            const $examTimer = document.getElementById('examTimer');
            window.onbeforeunload = function(e) {
                if($examTimer && $examTimer.querySelector("a.tempSaveBtn") && $examTimer.querySelector("a.tempSaveBtn").classList.contains("disabled")){
                    window.onbeforeunload = null;
                }else{
                    e.returnValue = "ページを離れようとしています。よろしいですか？";
                }
            }
            document.head.insertAdjacentHTML('beforeEnd',`
            <style>
            .block-under-area .block-under-area-btn{
                margin:0 auto;
            }
            .block-under-area .block-under-area-btn .btn-color{
                display: grid;
                place-items: center;
                margin:10px auto;
                width:100%;
                min-width:140px;
                min-height:50px;
                box-shadow:none;
            }
            .block-under-area .block-under-area-btn .takeConfirm{
                color:#fff;
                background:#4892e0;
                font-weight:bold;
                font-size:110%;
                border:1px solid #ccc;
            }
            .block-under-area .block-under-area-btn .tempSaveBtn{
                color:#545555;
                background:#fff;
                font-weight:bold;
                border:1px solid #ccc;
                min-height:40px;
                box-shadow:none;
            }
            .block-under-area .block-under-area-btn .tempSaveBtn:hover{
                border:1px solid #999;
                box-shadow:0 0 3px #888;
            }
            .take-save-temp-area{
                display:block;
            }
            </style>
            `);
            const $submitBtnArea = document.querySelector('.block-under-area-btn');
            $submitBtnArea.style.maxWidth = "450px";
            //押しても大丈夫なボタン
            const $confirmBtn = document.querySelector(".block-under-area .block-under-area-btn .takeConfirm");
            if($confirmBtn){
                $confirmBtn.addEventListener("click", function(){
                    window.onbeforeunload = null;
                });
            }

            if($examTimer && $examTimer.querySelector("a.takeConfirm")){
                $examTimer.querySelector("a.takeConfirm").addEventListener("click",function() {
                    window.onbeforeunload = null;
                });
            }
            if($submitBtnArea.childElementCount == 2){
                $submitBtnArea.appendChild($submitBtnArea.children[0]);
            }
            if(document.querySelector('.page-directlink'))
                document.querySelector('.page-directlink').remove();
            //毎分自動保存
            setInterval(function() {
                const $saveBtn = document.querySelector(".block-under-area .block-under-area-btn .tempSaveBtn");
                if($saveBtn && $examTimer && $examTimer.querySelector("a.tempSaveBtn") && !$examTimer.querySelector("a.tempSaveBtn").classList.contains("disabled")){
                    $saveBtn.click();
                    console.log("上書き保存 Auto");
                }
            },60000);//秒数
            //Ctrl+Sで自動保存
            $(window).bind('keydown', function(e) {
                if (e.ctrlKey || e.metaKey) {
                    switch (String.fromCharCode(e.which).toLowerCase()) {
                    case 's':
                        e.preventDefault();
                        const $saveBtn = document.querySelector(".block-under-area .block-under-area-btn .tempSaveBtn");
                        if($saveBtn && $examTimer && $examTimer.querySelector("a.tempSaveBtn") && !$examTimer.querySelector("a.tempSaveBtn").classList.contains("disabled")){
                            $saveBtn.click();
                            console.log("上書き保存 ctrl+S");
                        }
                        break;
                    }
                }
            });
        }
        //テスト提出確認画面
        if(location.href == "https://scombz.shibaura-it.ac.jp/lms/course/examination/take?confirm"){
            console.log('テスト提出確認画面');
            window.onbeforeunload = function(e) {
                e.returnValue = "ページを離れようとしています。よろしいですか？";
            }
            document.head.insertAdjacentHTML('beforeEnd',`
            <style>
            .block-under-area .block-under-area-btn{
                margin:0 auto;
            }
            .block-under-area .block-under-area-btn .btn-color{
                display: grid;
                place-items: center;
                margin:10px auto;
                width:100%;
                min-width:140px;
                min-height:50px;
                box-shadow:none;
            }
            .block-under-area .block-under-area-btn .backbutton{
                color:#545555;
                background:#fff;
                font-size:90%;
                border:1px solid #ccc;
                min-height:40px;
            }
            .block-under-area .block-under-area-btn .backbutton:hover{
                border:1px solid #999;
                box-shadow:0 0 3px #888;
            }
            .block-under-area .block-under-area-btn #submit{
                color:#fff;
                background:#4892e0;
                font-weight:bold;
                font-size:110%;
                border:1px solid #ccc;
            }
            </style>
            `);
            const $submitBtnArea = document.querySelector('.block-under-area-btn');
            $submitBtnArea.style.maxWidth = "450px";
            if($submitBtnArea.childElementCount == 2){
                $submitBtnArea.appendChild($submitBtnArea.children[0]);
            }
            const $confirmBtnList = document.querySelectorAll(".block-under-area .block-under-area-btn a");
            for(const $confirmBtn of $confirmBtnList){
                $confirmBtn.addEventListener("click", function(){
                    window.onbeforeunload = null;
                });
            }
            if(document.querySelector('.page-directlink'))
                document.querySelector('.page-directlink').remove();
        }
        //テストを受け終わった画面
        //すでに受けたテストを参照する画面
        if(location.href.includes("examination/take?complete")){
            console.log('テスト完了画面');
            document.head.insertAdjacentHTML('beforeEnd',`
            <style>
            .block-under-area .block-under-area-btn{
                margin:0 auto;
            }
            .block-under-area .block-under-area-btn .btn-color{
                display: grid;
                place-items: center;
                margin:10px auto;
                min-width:140px;
                min-height:50px;
                box-shadow:none;
                max-width: 440px;
            }
            </style>
            `);
            if(document.querySelector('.page-directlink'))
                document.querySelector('.page-directlink').remove();
            //提出完了時にAjax通信をして課題一覧を更新
            console.log("テスト提出完了ページを検出");
            setTimeout(function(){
                getTaskLists(0);
            },500);
        }
    }
    return;
}

function styleExamImg(){
    'use strict';
    if (location.href.includes('examination/take') && document.body.clientWidth > 480){
            console.log('テスト画像改善を実行します');
            const $exa_contsize = document.getElementById('examQuestionSubblock') || document.getElementById('pageContents');
            const $exa_examImgList = document.querySelectorAll('.downloadFile');
            const $exa_cheadList = document.querySelectorAll('.contents-header');
            const $exa_img = document.querySelector('.exam-question-img');
            const $exa_footer = document.getElementById('page_foot');
            const $exa_timer = document.getElementById('examTimer');
            if ($exa_footer){
                $exa_footer.style.visibility = 'hidden';
            }

            for (const $exa_chead of $exa_cheadList){
                $exa_chead.style.width = '8%';
                $exa_chead.style.background = '#f6f6ff';
            }
            if ($exa_img){
                for (const $exa_examImg of $exa_examImgList){
                    $exa_examImg.style.maxHeight = '100vh';
                    $exa_examImg.style.boxShadow= '0 0 1px #000000 ';
                }
                $exa_examImgList[0].style.maxHeight = '95vh';
                $exa_examImgList[0].style.maxWidth = '50vw';
                $exa_examImgList[0].style.position = 'fixed';
                $exa_examImgList[0].style.right= '1px';
                $exa_examImgList[0].style.top= '5vh';
                $exa_examImgList[0].style.boxShadow= '0 0 1px #000000 ';
                if ($exa_contsize) {
                    $exa_contsize.style.width = document.body.clientWidth - $exa_examImgList[0].clientWidth - 3 + 'px';
                }
                if($exa_timer){
                $exa_timer.style.width = document.body.clientWidth - $exa_examImgList[0].clientWidth + 'px';
                }
            }
            console.log('テスト画像改善の実行が完了しました');
    }
    return;
}
/* ScombZ Utilities */
/* styleSurveys.js */
//アンケート改善
function styleSurveys(){
    'use strict';
    if (location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/surveys/take")){
        //アンケート提出確認画面・アンケート画面
        const $submitBtnArea = document.querySelector('.block-under-area-btn');
        if($submitBtnArea){
            console.log('アンケート画面');
            document.head.insertAdjacentHTML('beforeEnd',`
            <style>
            .block-under-area .block-under-area-btn{
                margin:0 auto;
            }
            .block-under-area .block-under-area-btn .btn-color{
                display: grid;
                place-items: center;
                margin:10px auto;
                width:100%;
                min-width:140px;
                min-height:50px;
                box-shadow:none;
            }
            .block-under-area .block-under-area-btn .backbutton{
                color:#545555;
                background:#fff;
                font-size:90%;
                border:1px solid #ccc;
                min-height:40px;
            }
            .block-under-area .block-under-area-btn .backbutton:hover{
                border:1px solid #999;
                box-shadow:0 0 3px #888;
            }
            .block-under-area .block-under-area-btn .submit{
                color:#fff;
                background:#4892e0;
                font-weight:bold;
                font-size:110%;
                border:1px solid #ccc;
            }
            .textarea-add-box{
                resize: vertical;
            }
            </style>
            `);
            $submitBtnArea.style.maxWidth = "450px";
            //アンケート提出確認画面
            if($submitBtnArea.childElementCount == 2){
                $submitBtnArea.children[1].classList.add("submit");
                $submitBtnArea.appendChild($submitBtnArea.children[0]);
            }
        }
    }
}
//アンケート一覧に過去のアンケートを追加
function pastSurvey(){
    if(location.href === "https://scombz.shibaura-it.ac.jp/portal/surveys/list"){
        utlstorageGet({
            pastSurveyList: []
        },function(items){

            let pastSurveyList = `
            <style>
            .past-survey-list-link{
                color:#777
            }
            </style>
            `;
            for(const pastSurvey of items.pastSurveyList){
                pastSurveyList += `
                <div
                    class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp template-list-sp">
                    <div class="survey-list-title title-text-height">
                        <a href="${pastSurvey.suvurl}" class="past-survey-list-link"><span class="template-name">${pastSurvey.title}</span></a>
                    </div>
                    <div class="survey-list-update">
                        <span>${pastSurvey.startline}</span>
                        <span>～</span>
                        <span>${pastSurvey.deadline}</span>
                    </div>
                    <div class="survey-list-resultdate">
                    </div>
                    <div class="survey-list-address">
                        <span>${pastSurvey.course}</span>
                    </div>
                </div>
                `;
            }
            const insertPastSurvery = setInterval(
                function(){
                    const insertingNode = document.getElementById("surveylist").parentNode.parentNode.parentNode;
                    if(insertingNode){
                        clearInterval(insertPastSurvery);
                        insertingNode.insertAdjacentHTML("afterEnd",
                            `
                            <div class="block flex clearfix">
                                <div class="block-title survey-color block-cube">
                                    <div class="block-title-txt cube-block-title-txt course-top-icon survey-icon">過去のアンケート一覧</div>
                                </div>
                                <div class="block-contents">
                                    <div class="contents-detail">
                                        <div>
                                            <div>
                                                <div
                                                    class="contents-list contents-display-flex contents-tag contents-header-txt sp-contents-hidden">
                                                    <div class="survey-list-title bold-txt">アンケートタイトル</div>
                                                    <div class="survey-list-update bold-txt">アンケート期間・期限</div>
                                                    <div class="survey-list-resultdate bold-txt">結果公開期間</div>
                                                    <div class="survey-list-address bold-txt">登録部署</div>
                                                    <div class="survey-list-btn bold-txt"></div>
                                                </div>
                                                <form>
                                                    <div class="contents-list">
                                                        ${pastSurveyList}
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `);
                        console.log("過去アンケート挿入完了");
                    }
                }
            ,300);
        });
    }
}
/* ScombZ Utilities */
/* syllabus.js */
function syllabusLoaded($settings_year , $settings_fac){
    'use strict';
    if(location.href.includes("namazu") && location.href.includes("ajaxmode=true")){
        console.log("ScombZからのシラバスへの遷移を検出しました");
        const $sylSubjLink = document.getElementById("hit_1");
        const $sylSubDDTag = document.getElementsByTagName("a");
        const $sylSubjLink2 = document.getElementById("hit_2");
        let $suggestSubj = '';
        const $namazuHeader = document.querySelector(".namazu-result-header");
        let $autoredirect = true;
        if( document.getElementsByTagName("dt")[15])  {
            //スコアが近いものが複数あった時の処理
            const $dltag =String(document.getElementsByTagName("dl")[2].innerHTML);
            const $score1 = 5+$dltag.indexOf("スコア:");
            const $score2 = 5+$dltag.indexOf("スコア:",$score1+1);
            const $score1word = Number($dltag.slice($score1,$dltag.indexOf(")",$score1+1)));//1つ目のスコア
            const $score2word = Number($dltag.slice($score2,$dltag.indexOf(")",$score2+1)));//2つ目のスコア
            if($namazuHeader){
            $namazuHeader.insertAdjacentHTML('beforeEnd',`
                <style type="text/css">
                    .result-list-box{
                        padding:10px;
                        border:2px solid #ccc;
                        border-radius:10px;
                    }
                    .result-alert{
                        padding:10px 10px 10px 30px;
                        background:#eee;
                        margin:10px;
                        border:2px solid #ccc;
                        border-radius:10px;
                    }
                    strong.keyword {
                        color:#337ab7;
                    }
                    .gakkaname{
                        font-weight:bold;
                        font-size:80%;
                        background:#eee;
                        border:1px solid #ccc;
                        width:fit-content;
                        padding:4px;
                        border-radius:3px;
                        margin-right:2px;
                        margin-bottom:3px;
                        display:inline-block;
                    }
                    .gakkaname-area{
                        padding-top:5px;
                        border-top:1px solid #ccc;
                        width:100%;
                    }
                </style>
                    <div class="result-alert">
                    <h1>複数の類似したシラバスデータを検出しました</h1>
                    <h3>以下の一覧から該当する科目を選択してください</h3>
                    </div>
                `);
                console.log("類似度: "+ ($score1word-$score2word));
                if($score1word-$score2word < 6){
                    const $sylSubjLink3 = document.getElementById("hit_3");
                    if ($sylSubjLink2 && $sylSubjLink3){
                        $autoredirect = false;
                    }
                    if($dltag.includes(`<dt><strong class="keyword">1</strong>`)){
                        let $buggingArea = $dltag.slice(0,$score1-7);
                        $buggingArea = $buggingArea.slice($buggingArea.indexOf("href"));
                        $buggingArea = `<dt>1.<strong><a id="hit_1" `+$buggingArea;
                        document.getElementsByTagName("dl")[2].innerHTML = $buggingArea+$dltag.slice($score1-7);
                        console.log("置換します");
                    }
                    document.getElementsByTagName("dl")[2].classList.add("result-list-box");
                    $namazuHeader.setAttribute('id', 'searchResult');
                    document.querySelector(".namazu-result-footer").insertAdjacentHTML('afterEnd',`
                    <div style="width:100%;height:50vh;">
                    </div>
                    `);
                    window.location.href = "#searchResult";
                    //Ajax通信
                    const hitarea = document.querySelector(".namazu-result-header").innerHTML.indexOf("<!-- HIT -->");
                    const the_number_of_hit = Number(document.querySelector(".namazu-result-header").innerHTML.slice(hitarea+12 , hitarea+17).replace(/[^0-9]/g,''));
                    for(let i = 0; i < 20 && i < the_number_of_hit ; i++){
                        let link = $sylSubDDTag[21+i*2].innerHTML;
                        if(!link.includes("http")){
                            link = $sylSubDDTag[22+i*2].innerHTML;
                        }
                        getDepartment(link,i+1);
                    }
                    //Ajax関数定義
                    function getDepartment(URL,cnt){
                        async function getDepResponse() {
                            const res = await fetch(URL);
                            const data = await res.text();
                            return data;
                        }
                        getDepResponse()
                            .then(data => {
                                let gakkaID = (data.includes(`<div id="KamokuCD">`))?data.slice( data.indexOf(`<div id="KamokuCD">`)+19 , data.indexOf(`<div id="KamokuCD">`)+21 ):undefined;
                                console.log({URL});
                                console.log(cnt+": "+gakkaID);
                                document.getElementsByTagName("dt")[12+cnt].insertAdjacentHTML('afterBegin',`<div class="gakkaname-area">${gakkaIDtoStr(gakkaID)}</div>`);
                            })
                            .catch(err => {
                                return err;
                            });
                    }
                }
            }
        }
            //検索からの自動リンク
            $suggestSubj = '';
            if ($sylSubjLink2){
                $suggestSubj += "?suggesting=true&sug1l="+$sylSubjLink2.href.substring($sylSubjLink2.href.length - 14);
            }
            if($autoredirect){
                if($sylSubjLink){
                    console.log("科目ページに遷移します by ID");
                    window.location.href = `${$sylSubjLink.href}${$suggestSubj}`;
                }else if($sylSubDDTag[22]){
                    console.log("科目ページに遷移します by Tag");
                    window.location.href = `${$sylSubDDTag[22].innerHTML}${$suggestSubj}`;
                }else{
                    console.log("科目が見つかりませんでした");
                    $namazuHeader.setAttribute('id', 'searchResult');
                    if(location.href.includes("null")){
                        $namazuHeader.insertAdjacentHTML('beforeEnd',`
                        <div style="height:100vh;">
                        <h1>ScombZ Utilitiesの拡張機能で学部・学年が設定されていません。<br>
                        <a href="javascript:void(0);" id="link_to_extention">拡張機能設定</a>から設定してください</h1>
                        </div>
                        `);
                    }
                    document.getElementById("link_to_extention").addEventListener("click", function(){
                        if(document.getElementsByClassName("utilities-setting-btn")[0]){
                            document.getElementsByClassName("utilities-setting-btn")[0].click();
                        }
                    });
                    $namazuHeader.insertAdjacentHTML('beforeEnd',`
                    <div style="height:100vh;">
                    <h1>シラバスデータの取得に失敗しました</h1>
                    <h3>該当する科目が見つかりませんでした。科目名に記号が含まれているとうまく見つからない場合があります。\nお手数おかけしますが、シラバス内で直接お探しください。</h3>
                    <h3><a href="http://syllabus.sic.shibaura-it.ac.jp/">シラバスへ</a></h3>
                    </div>
                    `);
                    window.location.href = "#searchResult";
                }
                console.log("redirect:"+$autoredirect);
            }
    }else if(location.href.includes(`${$settings_year}/${$settings_fac}/`) && location.href.includes("?suggesting=true")){
        //もしかしてを…表示する
        //jQueryを使って実装
        $(function() {
            console.log("SUGGESTING");
            var urlPrm = new Object;
            var urlSearch = location.search.substring(1).split('&');
            for(let i=0;urlSearch[i];i++) {
                var kv = urlSearch[i].split('=');
                urlPrm[kv[0]]=kv[1];
            }
            $.ajax({
                type: "GET",
                url: urlPrm.sug1l,
                dataType:"html"
            })
            .then(
                //通信成功時
                function(data) {
                    console.log("読み込み成功");
                    const sug1n = $(data).find("span.kamoku").html();
                    let $suggest = '<div class="suggest">';
                        $suggest += `<a href="${urlPrm.sug1l}" style="margin:1px 10px;">${sug1n}</a>`;
                        console.log("挿入中");
                        document.body.insertAdjacentHTML(`afterBegin`,`<p style="margin-top:50px;">こちらの教科をお探しですか？</p>${$suggest}
                        `);
                    },
                function(){
                    console.log("読み込み失敗");
                }
            );
        });
    }else if(location.href.includes("Matrix")){
        //見やすくする by とくめいっ！
        console.log("シラバスのスタイルを変更します");
        window.addEventListener('load', function(){
            const $list1 = document.querySelector(".table_sticky thead tr td");
            if($list1){
                $list1.style.position = "static";
                let li = document.querySelectorAll(".table_sticky thead:nth-child(2) tr:nth-child(1) th");
                for (const l of li){
                    l.style.position = "static";
                }
            }
            const $list2 = document.querySelectorAll(".table_sticky thead:nth-child(2) tr:nth-child(2) th");
            if($list2[0]){
                for (const li2 of $list2){
                    li2.style.position = "static";
                }
            }
            console.log("変更が完了しました");
        });
    }
    return;
}
function gakkaIDtoStr(gakkaID) {
    let str = "";
    if(gakkaID.includes('A')){
        str += '<div class="gakkaname">機械工学科</div>';
    }
    if(gakkaID.includes('B')){
        str += '<div class="gakkaname">機械機能工学科</div>';
    }
    if(gakkaID.includes('C')){
        str += '<div class="gakkaname">材料工学科</div>';
    }
    if(gakkaID.includes('D')){
        str += '<div class="gakkaname">応用科学科</div>';
    }
    if(gakkaID.includes('E')){
        str += '<div class="gakkaname">電気工学科</div>';
    }
    if(gakkaID.includes('F')){
        str += '<div class="gakkaname">情報通信工学科</div>';
    }
    if(gakkaID.includes('G')){
        str += '<div class="gakkaname">電子工学科</div>';
    }
    if(gakkaID.includes('H')){
        str += '<div class="gakkaname">土木工学科</div>';
    }
    if(gakkaID.includes('L')){
        str += '<div class="gakkaname">情報工学科</div>';
    }
    if(gakkaID.includes('P')){
        str += '<div class="gakkaname">電子情報システム学科</div>';
    }
    if(gakkaID.includes('Q')){
        str += '<div class="gakkaname">機械制御システム学科</div>';
    }
    if(gakkaID.includes('R')){
        str += '<div class="gakkaname">環境システム学科</div>';
    }
    if(gakkaID.includes('N')){
        str += '<div class="gakkaname">生命科学科</div>';
    }
    if(gakkaID.includes('V')){
        str += '<div class="gakkaname">数理科学科</div>';
    }
    if(str.length < 2){
        str = '<div class="gakkaname">学科指定なし</div>';
    }
    if(gakkaID === undefined){
        str = "";
    }
    return str;
}
/* ScombZ Utilities */
/* syllBtn.js */
function displaySyllabus(year , fac){
    'use strict';
    if (location.href.includes('scombz.shibaura-it.ac.jp/lms/course?idnumber=')){
        console.log('授業別ページを検出しました\nシラバスのデータと連携します');
        const $courseTitle = document.querySelector('.course-title-txt');
        if($courseTitle){
            //タイトルを取得
            console.log($courseTitle.innerHTML);
            //科目IDを除外し、科目名だけを抽出
            const $nameInt = $courseTitle.innerHTML.indexOf(' ', $courseTitle.innerHTML.indexOf(' ') + 2);
            let $courseName = $courseTitle.innerHTML.slice($nameInt+1);
            /*検索精度向上アルゴリズム
            科目名に数字が入っていたとき
                数字はシラバス検索システムではエラーの要因、英数字と日本語の間をスペースで分割することで検索精度向上することが分かった
                →数字を含む科目名の場合スペースを数字の前に挿入するという処理を実行　[基礎情報演習１Ｂ]→[基礎情報演習 １Ｂ]
            科目名に数字がないとき
                教科名を+Subject"教科名"で検索に投げることで、教科の名前のみで合致するか検索するようになるためそれを挿入
                スペースで区切られていたり、数字が入っている科目の場合はこれだと検索できない場合が多かったので数字がないときとは処理を分岐
            記号が入っている科目
                スペースに置換
            特定の科目
                特定の文字列に変換
            */
                $courseName = specificCourse($courseName);
                $courseName = $courseName.replace(/＆/g," ");
                $courseName = $courseName.replace(/．/g," ");
                $courseName = $courseName.replace(/・/g," ");
                $courseName = $courseName.replace(/（/g," ");
                $courseName = $courseName.replace(/）/g," ");
                $courseName = $courseName.replace(/／/g," ");
            let $courseNameStr ='';
            let $courseNameStrEnc ='';
            if( $courseName.search(/[０-９]|[0-9]/) > 0){
                $courseNameStr = $courseName.slice(0,$courseName.search(/[０-９]|[0-9]/));
                $courseNameStr = $courseNameStr + ' ' +$courseName.slice($courseName.search(/[０-９]|[0-9]/));
                $courseNameStrEnc = EscapeEUCJP($courseNameStr);
            }else if(!($courseName.includes(' '))){
                $courseNameStr = `subject:"${$courseName}"`;
                $courseNameStrEnc = `%2B${EscapeEUCJP($courseNameStr)}`;
            }else{
                $courseNameStr = $courseName;
                $courseNameStrEnc = EscapeEUCJP($courseNameStr);
            }
            console.log('授業検索名を決定しました['+$courseNameStr+']');
            console.log("EUC-JPに変換中");
            $courseTitle.parentNode.insertAdjacentHTML('beforeEnd',`<a href="http://syllabus.sic.shibaura-it.ac.jp/namazu/namazu.cgi?ajaxmode=true&query=${$courseNameStrEnc}&whence=0&idxname=`+year+`%2F`+fac+`&max=20&result=normal&sort=score#:~:text=%E6%A4%9C%E7%B4%A2%E7%B5%90%E6%9E%9C,-%E5%8F%82%E8%80%83%E3%83%92%E3%83%83%E3%83%88%E6%95%B0"  target="_blank" rel="noopener noreferrer" class="btn btn-square btn-square-area btn-txt white-btn-color" style="margin-left:40px;margin-bottom:5px;">シラバスを表示</a>
                <span style="margin-left:35px;margin-bottom:10px;font-size:60%;">※自動検索で関連付けているため、違う教科のシラバスが開かれることがあります。</span>
                `);
        }
        console.log("シラバスリンクの挿入が完了しました");
    }
    return;
}
function displaySyllabusError(){
    'use strict';
    if (location.href.includes('scombz.shibaura-it.ac.jp/lms/course?idnumber=')){
        const $courseTitle = document.querySelector('.course-title-txt');
        $courseTitle.parentNode.insertAdjacentHTML('beforeEnd',`<span style="color:red;padding: 12px 30px 10px 34px">シラバス表示をするには、<a href="javascript:void(0);" id="link_to_extention_syll">拡張機能設定</a>から、学年と学部を設定してください。</span>`);
        document.getElementById("link_to_extention_syll").addEventListener("click", function(){
            if(document.getElementsByClassName("utilities-setting-btn")[0]){
                document.getElementsByClassName("utilities-setting-btn")[0].click();
            }
        });
    }
    return;
}
function specificCourse(courseName) {
    if (courseName.includes("ＷｒｉｔｉｎｇI")){
        courseName = courseName.replace("ＷｒｉｔｉｎｇI","Ｗｒｉｔｉｎｇ I");
    }
    if (courseName == "Ｈ．Ｃ．インタラクション"){
        courseName = "インタラクション";
    }
    return courseName;
}
//マークダウンメモ
function addMarkdownToSubj(){
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=")){
        // URLを取得
        const pageurl = new URL(window.location.href);
        const idnum = pageurl.searchParams.get('idnumber');
        document.querySelector(".contents-title").insertAdjacentHTML("beforeBegin",
        `
        <style>
            #mdNotepadAdd{
                display: inline-block;
                width: 1.2em;
                height: 1.2em;
                background-image: url(data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPy0tPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+Cgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Il94MzFfMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0id2lkdGg6IDI1NnB4OyBoZWlnaHQ6IDI1NnB4OyBvcGFjaXR5OiAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM3NDE0OTt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ1NS4yOTUsMjA3LjUxNnYtMC4yM2wtMzcuMzUxLDM3LjQwMnYyMTMuMjE0YzAsOC41ODItNy4yNSwxNS44MjQtMTUuODI4LDE1LjgyNEg1My4xNzYKCQljLTQuMjAzLDAtOC4xNjUtMS42OC0xMS4wODItNC42NTZjLTIuOTk2LTIuOTAyLTQuNzM4LTYuOTU0LTQuNzM4LTExLjE2OFYxMDguOTYxYzAtOC43MjYsNy4wOTgtMTUuODI4LDE1LjgyMS0xNS44MjhIMjY1LjU3CgkJbDIxLjgxNi0yMS43ODFsMTUuNTktMTUuNDA2aC0wLjE2MWwwLjE2MS0wLjE2aC0yNDkuOEMyMy44NTUsNTUuNzg2LDAsNzkuNjQxLDAsMTA4Ljk2MXYzNDguOTQxCgkJYzAsMTQuMTUyLDUuNTQ3LDI3LjQ4OCwxNS42NTYsMzcuNTk0YzkuOTg1LDEwLjA0NiwyMy4zMDksMTUuNTg2LDM3LjUyLDE1LjU4NmgzNDguOTRjMjkuMzI4LDAsNTMuMTc5LTIzLjg1OSw1My4xNzktNTMuMTc5CgkJVjMxMS4xOGwwLjExOC0xMDMuNzgxTDQ1NS4yOTUsMjA3LjUxNnoiPjwvcGF0aD4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MzAuODExLDMyLjYzM2MtMi4wOTQtMi4xMDItNC44NC0zLjE2NC03LjUyNy0zLjE2NGMtMi41MzEsMC4wMDQtNS4wMTksMC45MzgtNi45MDIsMi44MjFMMTM4LjQxNCwzMTAuMDk0CgkJTDc5Ljk3Myw0MjMuNjMyYy0xLjE4LDMuNzc0LDEuODk0LDcuNDc3LDUuNTY2LDcuNDc3YzAuNTM4LDAsMS4wOTgtMC4wODIsMS42NTYtMC4yNThMMjAwLjgsMzcyLjQ0OUw0NzguNzcyLDk0LjY0NQoJCWMzLjg5LTMuODksMy43MzgtMTAuMzUyLTAuMzM2LTE0LjQzTDQzMC44MTEsMzIuNjMzeiBNMTE2LjMxMiwzOTQuNDM3bDM2LjQwNi03MC43MjZsMjYuMzgyLDI2LjM2N2w4LjAzMSw4LjA5NGwtMzkuMjUsMjAuMTgKCQlMMTE2LjMxMiwzOTQuNDM3eiBNMTk5LjY1NiwzNDYuODA0bC0zNS41ODYtMzUuNTY2TDQyMy40MjksNTIuMDMybDM1LjU4NiwzNS41N2wtMjU3Ljg5LDI1Ny43MzRMMTk5LjY1NiwzNDYuODA0eiI+PC9wYXRoPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTUwNy4wNjUsMzkuNTc5bC0zMy43NTgtMzMuNzNjLTMuMjg1LTMuMjg5LTcuNTk0LTQuOTMtMTEuOTA2LTQuOTNjLTQuMzEyLDAtOC42MjUsMS42NDUtMTEuOTE0LDQuOTI2CgkJbC0xMS44MDEsMTEuNzkzdjAuMDA0bDAsMGwtMC4xMTgsMC4xMWw1Ny41ODIsNTcuNTQ2bDExLjkxNC0xMS45MDJDNTEzLjY0Nyw1Ni44MTcsNTEzLjY0Myw0Ni4xNTMsNTA3LjA2NSwzOS41Nzl6Ij48L3BhdGg+CjwvZz4KPC9zdmc+Cg==);
                background-repeat: no-repeat;
                background-size: contain;
                margin-left:1em;
                margin-top:-0.1em;
                float:left;
                cursor:pointer;
            }
            #mdNotepadAdd:hover{
                opacity:0.7;
            }
            #mdNotepadMd{
                width: 100%;
                height: auto;
                min-height: 100px;
                font-size: 15px;
                resize: vertical;
            }
            .md-exp{
                font-size: 12px;
            }
            .md-exp:nth-child(1) a{
                color:#777;
            }
            #mdNotepadArea{
                font-size:14px;
                font-weight:normal;
            }
        </style>
        <div class="contents-title">
            <div class="contents-title-txt">
                <div class="course-view-title-txt" style="min-height:1em;">
                    <span style="float:left;">メモ</span><span id="mdNotepadAdd"></span>
                </div>
                <div id="mdNotepadArea"></div>
            </div>
        </div>
        `
        );
        const mdNotepadArea = document.getElementById("mdNotepadArea");
        loadSubjNotepad();
        function loadSubjNotepad(){
            utlstorageGet({
                mdNotepadData : []
            },function(items){
                console.log(items.mdNotepadData);
                while(mdNotepadArea.lastChild){
                    mdNotepadArea.removeChild(mdNotepadArea.lastChild);
                }
                let mdvalue = "";
                for(const mdNote of items.mdNotepadData){
                    if(mdNote.id == idnum){
                        mdvalue = mdNote.value;
                        break;
                    }
                }
                
                mdNotepadArea.insertAdjacentHTML("beforeEnd",marked.parse(mdvalue));
            });
        }
        //クリックイベント
        document.getElementById("mdNotepadAdd").addEventListener("click",function(){
            utlstorageGet({
                mdNotepadData : []
            },function(items){
                while(mdNotepadArea.lastChild){
                    mdNotepadArea.removeChild(mdNotepadArea.lastChild);
                }
                const mdNotepad = document.createElement("textarea");
                mdNotepad.id = "mdNotepadMd";
                let mdvalue = "";
                for(const mdNote of items.mdNotepadData){
                    if(mdNote.id == idnum){
                        mdvalue = mdNote.value;
                        break;
                    }
                }
                mdNotepad.value = mdvalue;
                mdNotepadArea.insertAdjacentHTML("beforeend",`
                <div>
                <p class="md-exp">
                    <a href="https://qiita.com/kamorits/items/6f342da395ad57468ae3" target="_blank" rel="noopener noreferrer">マークダウン形式</a>で記入することができます。<br>色を付けたい場合は<a href="https://qiita.com/twipg/items/d8043cd4681a2780c160" target="_blank" rel="noopener noreferrer">こちら</a>を参考に。
                </p>
                </div>
                `);
                mdNotepadArea.appendChild(mdNotepad);
                mdNotepadArea.insertAdjacentHTML("beforeend",`
                    <div class="md-exp">
                        <a id="mdSaveButton" class="btn btn-inline btn-file-margin btn-txt btn-color">保存する</a>
                        <a id="mdCancelButton" class="btn btn-inline btn-file-margin btn-txt btn-color">キャンセル</a>
                    </div>
                `);
                document.getElementById("mdSaveButton").addEventListener("click",function(){
                    utlstorageGet({
                        mdNotepadData : []
                    },function(item){
                        let mdNotepadDataNew = item.mdNotepadData;
                        for(let i = 0; i < mdNotepadDataNew.length; i++){
                            if(mdNotepadDataNew[i].id == idnum){
                                mdNotepadDataNew[i].value = mdNotepad.value;
                                break;
                            }
                            if( i === mdNotepadDataNew.length-1){
                                mdNotepadDataNew.push({
                                    id: idnum,
                                    value: mdNotepad.value
                                });
                                break;
                            }
                        }
                        if(mdNotepadDataNew.length === 0){
                            mdNotepadDataNew.push({
                                id: idnum,
                                value: mdNotepad.value
                            });
                        }
                        console.log(mdNotepadDataNew);
                        utlstorageSet({
                            mdNotepadData: mdNotepadDataNew
                        },()=>{
                            console.log("Saved");
                            loadSubjNotepad();
                        });
                    })
                });
                document.getElementById("mdCancelButton").addEventListener("click",function(){
                    loadSubjNotepad();
                });
            });
        });
    }
}