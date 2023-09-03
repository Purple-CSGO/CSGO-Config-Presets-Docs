---
title: 更新日志
order: 20
---

# {{ $frontmatter.title }}

## V1.7

- CFG文件的内容顺序优化，按键设置提前，方便修改
- `ffmpeg.cfg` 大幅度修改
  - 适配 beta 版本录制优化，提升20%~60%录制速度、降低解码压力（下次hlae更新生效）
  - 增加 N/A/I 显卡加速编码预设，需要较新的显卡驱动版本，且录制层数有限制（3层？）
- 新增 `stream2.cfg` 分层设置CFG 考虑使用习惯 暂时与旧版共存
  - 支持原始、持枪、世界、物体、景深、透视、HUD、透明持枪、透明物体通道
  - 兼容reshade · 支持穿烟 · 支持去除燃烧弹黑烟 · 支持关闭HUD · 支持 ReShade 分层录制
  - 指令控制，由 `+`/`-` 前缀和若干 `+`/`-` 后缀组成，以 `raw` 通道为例：

  | 添加 | 删除 | 预览 | 开启录制 | 穿烟透明  | 关闭HUD | 去火黑烟 |
  | ---- | ---- | ---- | -------- | --------- | ------- | -------- |
  | +raw | -raw | raw  | raw-on   | raw+smoke | raw-hud | raw+fire |
- `hlae.cfg` 新增若干快捷指令，包括但不限于：
  - `-1` `-2` `-3` `+1` `+2` `+3` 快速<->跳 5~15 秒
  - `sp` `sc` · `dp` `dc` · `fp` `fc` · `cp` `cc` 对应 分层 · 击杀 · 声音 · **mirv_cmd** 的打印和清除
  - `3to1` 设置当前 tick 转到第一人称视角，用于运镜人称三转一
  - `fix` 修复卡顿 跳tick后卡顿时使用
  - `f10` `f15` `f20` ... `f100` 切换运镜FOV

## V1.6c
  
- `stream.cfg` 现可方便地修改启用/禁用通道按键 `Ins/Del`

- `stream.cfg` 加入分层预设档位功能，如 `set2` 直接设置好分离手臂的两个通道
  
- `hlae.cfg` 中参照 [Anthony Perfetto 的视频](https://www.youtube.com/watch?v=sAWkrdDRtVM) 优化顺滑度、增加了: 禁用导播镜头X光、`mute` 关闭小鸡声音的指令

> 现在不用手动在Tab栏关闭导播控制了，`x` 键在 exec hlae 后即可用

Hugely thanks again to Anthony!
## V1.6b

- 修复导出准星、持枪参数的指令，添加 `sv_max_allowed_developer`

- `stream.cfg` 中添加景深数值的调节指令 `depth1` `depth2` `depth3` 数值依次递增

- `hlae.cfg` 中添加解决远处物体消失问题的指令，添加解绑冲突按键的提示，添加更多录制fps预设

- 使用说明正式使用网站形式
