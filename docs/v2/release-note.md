---
title: 更新日志
order: 20
---

# {{ $frontmatter.title }}

## v2.6d

### 游戏相关
- 优化默认rate参数，调整到 4Mbit/s，添加提示
- 帧生成时间警告阈值默认为144fps，添加提示
- 添加残局模式快捷键 `Y` 一键关闭语音聊天避免干扰
- 适配雷达缩放的一键切换，快捷键 `J`
- 添加雷达缩放切换、方形外观、模糊背景等指令
- 添加控制台的快捷键绑定，方便玩家修改
- 修改默认最大帧数为400
- 添加数据包缓冲的指令
- 添加运镜平滑的指令，默认关闭
- 添加狙击枪瞄准时的扩散范围显示指令，默认关闭
- 添加屏蔽、动态头像、捐赠快捷键、观察时hud颜色覆盖等指令
- 添加预测击中、爆头、布娃娃的指令，默认关闭
- 添加“简化按键通话”优化性能，添加其他玩家语音音量的指令

### 集锦相关
- 修复了动画卡顿修复指令不生效的问题
- 修复部分地图的过曝问题，即 `mat_tonemap_uncap_exposure 1`
- 新增天空贴图切换功能，快捷键 `K`，玩家语音切换合并到快捷键 `'`
- 加入自定义持枪视角参数的示例和文档，不受默认参数范围限制
- 简化帮助提示指令的名称，屏蔽玩家语音 `mute_hint` -> `mt`，修改玩家名称 `rp_hint` -> `rp`
- 默认关闭运镜平滑，默认调用 `ffmpeg.cfg` 不用再手动输入 `exec ffmpeg`

::: info 注意
因为CS2指令系统变动，现在需要在主界面 `exec hlae` 后再进入录像
:::

## v2.6c

### 游戏相关
- 加入均衡器和声道独立相关指令
- 优化默认音量设置
- 优化默认rate参数，调整到 2Mbit/s 缓解网络问题导致的“滑步”问题
- 尝试修改跳投 -> 分离的左键和右键跳投 (默认分别为 `Q` 和 `H`)

### 集锦相关
- 加入修复demo动画卡顿指令 `mirv_fix animations`
- 加入替换玩家名称 `mirv_replace_name`
- 加入 `tv_nochat 1` 相关功能
- 使用 `r_drawworld` 实现透视效果
- 为去除闪光 `mirv_noflash` 提供绑定/指令
- 加入 `mirv_endofmatch` 屏蔽比赛最后的计分板
- 修复：默认记录镜头路径
- 修复：屏蔽玩家语音相关功能
- 加入分层录制相关逻辑，添加 `raw` 和 `depth` 层，使用通道名称作为指令切换录制开关
- 调整 depth 层的深度参数


## V2.6b

本次更新涉及若干集锦录制相关的改进

- 添加指令 block 屏蔽所有击杀信息，快捷键 `\`
- 修复低录制帧率时录像播放速度加快的问题
- 降低录制参数的GOP，缓解剪辑卡顿问题
- 加入解决开局饱和度降低的滤镜的切换指令 `post`
- 加入 `Prores 422HQ` 录制预设 `phq`
- 加入 `noflash` 切换消除闪光效果
- 加入 `mirv_fix time` 修复UI等效果
- 加入 `mirv_fov` 的切换指令：正常角度 ↔ 广角，快捷键 `=`
- 加入切换CS2玩家语音的快捷键 `'`
- 更新启动项说明
- 完善雷达切换


## V2.6a

### 更新内容
- 添加跳投指令，添加简易大跳指令（一起按c+空格）
- 开启hlae录制时记录镜头路径（便于加载路径补录素材）
- 添加投掷物视角与轨迹预览；添加x键切换透视；修复死亡后身上无道具的问题 by @lzy1677 in https://github.com/Purple-CSGO/CS2-Config-Presets/pull/9


## V2.6

### General

移除帧数基准测试的 `bench.cfg`，已由专门的[测试项目](https://github.com/Purple-CSGO/cs2-fps-benchmark)替代

### auto.cfg

- 移除失效的跳投和大跳指令
- 关闭版本信息
- `P` 键发刀 `.drop`
- 补充 MVP 音量的指令 `snd_mvp_volume 0`
- 默认开启医疗针 `x`

### hlae.cfg

- 默认关闭版本信息
- 默认关闭准星跟随
- 默认开启玩家语音 `tv_listen_voice_indices -1`
- 补充 MVP 音量的指令 `snd_mvp_volume 0`
- 助攻切换指令 `ass` 和 关闭各类声音指令 `mute` 加上控制台提示
- 增加一键独显玩家击杀信息，切换第一人称视角后使用，快捷键 `J`，关闭时清空所有击杀信息
- 增加玩家信息查看和屏蔽语音提示功能，快捷键 `L`，可查看userid、xuid、观察按键（数字x切换到对应玩家），提示如何屏蔽某个玩家的语音，并提供快捷指令，`m1`, `m2` 等指令屏蔽对应 #用户id 的玩家，`um` 取消所有屏蔽

### demo.cfg

- 默认关闭版本信息
- 默认关闭准星跟随
- 默认开启玩家语音
- 补充 MVP 音量的指令 `snd_mvp_volume 0`
- 助攻切换指令 `ass` 和 关闭各类声音指令 `mute` 加上控制台提示

### ffmpeg.cfg

- 引入av1 n卡硬件编码预设 `nav1` 和 `nav1s`，适用于RTX40系显卡
- 所有1号编码加入一个**拉伸到16:9**的预设，结尾加 `s`，如 `n1s`，录制时保持视频高度不变，宽度自动拉伸到 `高度*16/9`

> 已适配最新版本hlae，下载整合包并配置后可以使用景深、SSR “打蜡”等效果

## v2.5a

### auto.cfg

- 适配cs2更新，增加 `cl_teamid_overhead_mode` 的选项说明
- 增加自定义指令 `auto` `demo` `solo` 方便快速使用cfg
- 增加第一人称视角曳光弹的开关指令，默认开启

### demo.cfg & hlae.cfg

- 修复准星问题 `exec crosshair_throw` 替换为推荐的默认准星
- 默认关闭道具准星功能，避免影响录像

### hlae.cfg

- 增加 `mirv_reshade enabled 1` 指令，启用 Reshade 功能

> 已适配最新版本hlae，下载整合包并配置后可以使用景深、SSR “打蜡”等效果

## V2.5

### auto.cfg

- 加入左右手切换快捷键 `H`，加入默认左右手指令
- 加入游戏内置投掷物准星指令和各类道具单独开关和出现等待时长的指令，先前的投掷物准星默认关闭
- 替换准星代码指令 `apply_crosshair_code` 相关指令，改为 `exec crosshair_throw`
- 加入退回所有物品快捷键 `backspace` 后退键
- 移除已失效的 `cl_usenewbob` 指令

### crosshair_throw.cfg

- 重新加回，因为 `apply_crosshair_code` 已失效

### demo.cfg & hlae.cfg

- 替换准星代码指令 `apply_crosshair_code` 相关指令，改为 `exec crosshair_throw`

## v2.4b

### auto.cfg

- 修复 `cl_hud_telemetry_serverrecvmargin_graph_show 0` 的文字说明，默认值改为0不显示

### hlae.cfg

- 添加 `telementry` 相关指令，默认关闭所有相关数值显示
- 录像专用准星用准星代码和 `apply_crosshair_code` 替代
- 优化指令顺序，使用者几乎不用改动的「功能实现代码」放在最后

### demo.cfg

- 修复缺少的鼠标侧键快放、慢放快捷键
- 优化指令顺序，使用者几乎不用改动的「功能实现代码」放在最后

## v2.4a

### hlae.cfg

- 补充缺失的 `↑` `↓` HLAE录制的控制台提示

### bench.cfg

- 更新 24.2.26 最新的基准测试demo `benchmark_inferno_v1.dem` @7040tick
- 补充注释说明，其他地图/版本的demo可通过修改 L18 和 L21 适配

## v2.4

### auto.cfg

- 添加网络/帧数据相关指令：如文字/图表形式显示、帧生成时间、LOSS、延迟和它们的警告阈值
- 添加手臂摇晃指令 `cl_usenewbob`，设置为 `0` 或 `false` 使用CSGO旧版摇晃
- 投掷物准星用 `apply_crosshair_code` 指令替代，删除 `crosshair_throw.cfg`
- 添加均衡器（自然、清脆、平滑）指令
- 修复队伍中颜色的说明
- 删除无用参数

### demo.cfg

- 添加原 `hlae.cfg` 中的 `mute`、限制FPS、助攻显示、快进快退、录屏快捷慢放指令
- 添加打开/关闭 demoui 的快捷键 `q`
- demo专用准星用代码简化

### hlae.cfg

> [HLAE 2.155.0](https://github.com/advancedfx/advancedfx/releases/tag/v2.155.0) 开始支持CS2的 `mirv_streams` 屏幕录制和FFmpeg

- 添加启用屏幕录制、录制文件保存位置的指令
- 添加 demoui 快捷键 `q`
- 添加 时间点tick 的标记功能快捷键：`y` 标记当前时间， `u` 跳转标记，不同demo的标记是独立的
- 添加快捷键 `[` `]` 控制运镜的时间整体回退/快进 0.25s
- 添加快捷指令 `pos` 和 `time` 分别设置当前位置/时间点为运镜的起始位置/时间
- 鼠标侧键调整播放速度功能增加10%和1600%档位
- 添加定时指令：`F5` 当前tick开始录制、`F6`当前tick结束录制、`F7`打印 mirv_cmd 信息，`F8`清除所有mirv_cmd
- 添加快捷键 `Insert` 打印运镜信息
- 添加快捷键 `↑` `↓` 控制HLAE录制的开始和结束
- 添加小键盘 `0~9` 移除对应数字编号的机位
- 默认开启运镜和轨迹显示
- 添加快捷指令 `60fps` `300fps` 等，用于切换HLAE录制帧率，默认 `60fps`
- 添加狙击镜边缘效果的指令
- 添加快捷键 `F10` 加载 FFMPEG 录制预设CFG

### ffmpeg.cfg *new

- 移植CSGO预设的 `ffmpeg.cfg`，适配CS2，支持Intel、Nvidia、AMD三种显卡加速格式，和 Apple Prores 422 & 4444

### solo.cfg

- solo模式购买时间调整为 10s

### bench.cfg

- 新增帧数基准测试CFG，仅需修改 [18行](https://github.com/Purple-CSGO/CS2-Config-Presets/blob/master/bench.cfg#L18) 的开始时间以适配不同demo
- 基准测试demo近期会更新到网盘中
