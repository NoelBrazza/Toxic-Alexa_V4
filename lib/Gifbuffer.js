const _0x135196=_0x5259;function _0x5259(_0x5d64f1,_0x2ad97e){const _0x3f15a4=_0x3f15();return _0x5259=function(_0x5259cd,_0x4b1938){_0x5259cd=_0x5259cd-0x1f2;let _0x11ce99=_0x3f15a4[_0x5259cd];return _0x11ce99;},_0x5259(_0x5d64f1,_0x2ad97e);}(function(_0x1a5392,_0x3aa7e1){const _0x1fbc7f=_0x5259,_0x43f607=_0x1a5392();while(!![]){try{const _0x45e730=parseInt(_0x1fbc7f(0x200))/0x1+-parseInt(_0x1fbc7f(0x1fd))/0x2+-parseInt(_0x1fbc7f(0x1f7))/0x3+-parseInt(_0x1fbc7f(0x1f2))/0x4+-parseInt(_0x1fbc7f(0x1fa))/0x5+-parseInt(_0x1fbc7f(0x201))/0x6+parseInt(_0x1fbc7f(0x1f6))/0x7*(parseInt(_0x1fbc7f(0x1f8))/0x8);if(_0x45e730===_0x3aa7e1)break;else _0x43f607['push'](_0x43f607['shift']());}catch(_0x2084f4){_0x43f607['push'](_0x43f607['shift']());}}}(_0x3f15,0xa2c50));import _0x260356 from'fs/promises';function _0x3f15(){const _0x1df9de=['523233Wxupvl','4783902uhEXtu','.gif','1735152gimktB','random','writeFile','all','330302jqAlEs','1048845OzIqxS','536icgZeX','\x22\x20-movflags\x20faststart\x20-pix_fmt\x20yuv420p\x20-vf\x20\x22scale=trunc(iw/2)*2:trunc(ih/2)*2\x22\x20\x22','6499750QyiNjm','tmp','unlink','274642apfpJz','resolve','toString'];_0x3f15=function(){return _0x1df9de;};return _0x3f15();}import{promisify}from'util';import{exec}from'child_process';import _0x157717 from'path';const __dirname=_0x157717[_0x135196(0x1fe)](),sleep=promisify(setTimeout),GIFBufferToVideoBuffer=async _0x2004d3=>{const _0x336744=_0x135196;try{const _0x26a7b0=''+Math[_0x336744(0x1f3)]()[_0x336744(0x1ff)](0x24),_0x3aee39=_0x157717['join'](__dirname,_0x336744(0x1fb),_0x26a7b0+_0x336744(0x202)),_0x1f7b9e=_0x157717['join'](__dirname,_0x336744(0x1fb),_0x26a7b0+'.mp4');await _0x260356[_0x336744(0x1f4)](_0x3aee39,_0x2004d3);const _0x1e7c25='ffmpeg\x20-i\x20\x22'+_0x3aee39+_0x336744(0x1f9)+_0x1f7b9e+'\x22';await promisify(exec)(_0x1e7c25),await sleep(0xfa0);const _0x5554f2=await _0x260356['readFile'](_0x1f7b9e);return await Promise[_0x336744(0x1f5)]([_0x260356[_0x336744(0x1fc)](_0x3aee39),_0x260356['unlink'](_0x1f7b9e)]),_0x5554f2;}catch(_0x44c9e9){console['error'](_0x44c9e9);throw new Error('Error\x20processing\x20GIF\x20to\x20video.');}};export default GIFBufferToVideoBuffer;