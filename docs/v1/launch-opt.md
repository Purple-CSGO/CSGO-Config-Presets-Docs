---
title: 启动项
order: 10
---

# {{ $frontmatter.title }}

> CFG内容的最后有 `host_writeconfig` 才能在启动时写入设置

| 启动项                                              | 含义                     |
| ------------------------------------------------ | ---------------------- |
| -novid                                           | 关闭过场动画                 |
| -nojoy                                           | 关闭摇杆                   |
| +exec auto.cfg                                   | 加载 `auto.cfg` 根据文件名调整  |
| -perfectworld                                    | 启动国服                   |
| -worldwide                                       | 启动国际服                  |
| -high                                            | 高优先级                   |
| -fullscreen                                      | 全屏                     |
| -windowed                                        | 窗口化                    |
| -noborder                                        | 窗口无边框                  |
| -refresh 240  或 -freq 240                       | 刷新率 `240hz` 根据显示器调整    |
| -w 1920 -h 1080                                  | 分辨率 `1920x1080` 根据偏好调整 |
| -tickrate 128 +cl_cmdrate 128 +cl_updaterate 128 | 128tick                |
