const _0x3c6984=_0x4bb3;function _0x4bb3(_0x33c8c2,_0x970226){const _0x4115c4=_0x4115();return _0x4bb3=function(_0x4bb3cf,_0xf1e54){_0x4bb3cf=_0x4bb3cf-0x121;let _0x5813c0=_0x4115c4[_0x4bb3cf];return _0x5813c0;},_0x4bb3(_0x33c8c2,_0x970226);}(function(_0x1c99f7,_0x194f02){const _0x21d024=_0x4bb3,_0x42e6be=_0x1c99f7();while(!![]){try{const _0x4d66ee=parseInt(_0x21d024(0x12a))/0x1*(parseInt(_0x21d024(0x12c))/0x2)+-parseInt(_0x21d024(0x125))/0x3*(parseInt(_0x21d024(0x124))/0x4)+-parseInt(_0x21d024(0x12e))/0x5+-parseInt(_0x21d024(0x12b))/0x6*(parseInt(_0x21d024(0x129))/0x7)+parseInt(_0x21d024(0x126))/0x8*(parseInt(_0x21d024(0x133))/0x9)+parseInt(_0x21d024(0x131))/0xa*(-parseInt(_0x21d024(0x127))/0xb)+-parseInt(_0x21d024(0x122))/0xc*(-parseInt(_0x21d024(0x12d))/0xd);if(_0x4d66ee===_0x194f02)break;else _0x42e6be['push'](_0x42e6be['shift']());}catch(_0x5205f0){_0x42e6be['push'](_0x42e6be['shift']());}}}(_0x4115,0x7c87a));export const growth=Math[_0x3c6984(0x123)](Math['PI']/Math['E'],1.618)*Math['E']*0.75;export function xpRange(_0x1e3f6f,_0x37e5fb=global[_0x3c6984(0x130)]||0x1){const _0x2c66cd=_0x3c6984;if(_0x1e3f6f<0x0)throw new TypeError(_0x2c66cd(0x121));_0x1e3f6f=Math[_0x2c66cd(0x132)](_0x1e3f6f);let _0x3959d9=_0x1e3f6f===0x0?0x0:Math[_0x2c66cd(0x12f)](Math['pow'](_0x1e3f6f,growth)*_0x37e5fb)+0x1,_0x37c311=Math['round'](Math[_0x2c66cd(0x123)](++_0x1e3f6f,growth)*_0x37e5fb);return{'min':_0x3959d9,'max':_0x37c311,'xp':_0x37c311-_0x3959d9};}export function findLevel(_0x13f9d5,_0x5d7776=global[_0x3c6984(0x130)]||0x1){const _0x19a00f=_0x3c6984;if(_0x13f9d5===Infinity)return Infinity;if(isNaN(_0x13f9d5))return NaN;if(_0x13f9d5<=0x0)return-0x1;let _0x321181=0x0;do _0x321181++;while(xpRange(_0x321181,_0x5d7776)[_0x19a00f(0x128)]<=_0x13f9d5);return--_0x321181;}function _0x4115(){const _0x854003=['116292BopeOx','6HjQZkG','846416mxNRHv','33JRrUVd','min','339528CRRcri','12zuhoDy','36KPlIUr','158338GHDZYd','13iHbESM','3878355qxGwzu','round','multiplier','1837090FbIZXz','floor','54OxaLID','level\x20cannot\x20be\x20negative\x20value','7214424sGwcEb','pow'];_0x4115=function(){return _0x854003;};return _0x4115();}export function canLevelUp(_0xe2d2ab,_0x591ca0,_0x57adef=global[_0x3c6984(0x130)]||0x1){if(_0xe2d2ab<0x0)return![];if(_0x591ca0===Infinity)return!![];if(isNaN(_0x591ca0))return![];if(_0x591ca0<=0x0)return![];return _0xe2d2ab<findLevel(_0x591ca0,_0x57adef);}