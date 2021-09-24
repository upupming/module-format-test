# module-format-test

Comparison of ES Module & CommonJS & AMD & UMD & iife bundling method.

## Mount to Global Window

If using UMD, if you are not using CJS and AMD, your library will be mounted to global window object (`self` in the source code), see: https://github.com/upupming/module-format-test/blob/74b79372aceb724eb1c41694c352f70458b6b8f3/out.umd.js#L17-L17

## Ref

1. https://zhuanlan.zhihu.com/p/75980415
