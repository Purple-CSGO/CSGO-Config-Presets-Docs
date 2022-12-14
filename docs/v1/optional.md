---
title: 可选指令
order: 50
---

# {{ $frontmatter.title }}

Purp1e(@[Purple-CSGO](https://space.bilibili.com/73115492))制作

## 设置分辨率和全屏

- `0 ` 全屏

- `1` 窗口

```
mat_setvideomode 1920 1080 0;
```

启动项

```
+mat_setvideomode 1920 1080 0
```

---

## Virre准星

```
cl_crosshair_drawoutline "0"
cl_crosshair_dynamic_maxdist_splitratio "0.35"
cl_crosshair_dynamic_splitalpha_innermod "1"
cl_crosshair_dynamic_splitalpha_outermod "0.5"
cl_crosshair_dynamic_splitdist "7"
cl_crosshair_friendly_warning "1"
cl_crosshair_outlinethickness "0.5"
cl_crosshair_sniper_show_normal_inaccuracy "0"
cl_crosshair_sniper_width "1"
cl_crosshair_t "0"
cl_crosshairalpha "255"
cl_crosshaircolor "5"
cl_crosshaircolor_b "255"
cl_crosshaircolor_g "255"
cl_crosshaircolor_r "255"
cl_crosshairdot "0"
cl_crosshairgap "0.000000"
cl_crosshairgap_useweaponvalue "0"
cl_crosshairsize "4.000000"
cl_crosshairstyle "4"
cl_crosshairthickness "0.500000"
cl_crosshairusealpha "1"
cl_fixedcrosshairgap "3"
```

## 鼠标中键切换滚轮跳和切枪(声音提示)

```
//────────────────   鼠标中键切换滚轮跳和切枪(声音提示)   ──────────────────
bind mouse3 bhop;           // "mouse3" 鼠标中键 可修改
alias bhop bhop_on;
alias bhop_on "alias bhop bhop_off;bind mwheelup +jump;bind mwheeldown +jump;playvol ui/beepclear 0.8;echo ------> behop_on <------";
alias bhop_off "alias bhop bhop_on;bind mwheelup invprev;bind mwheeldown invnext;playvol ui/weapon_cant_buy 0.8;echo ------> behop_off <------";
behop_on            // 默认中键滚轮跳  on改成off->默认中键切枪
```

## 一键切换灵敏度

```
//─────────────────────    一键切换灵敏度   ────────────────────────
bind "mouse3" sens
alias sens sens_h
alias sens_h "alias sens sens_l;sensitivity 1.32"
alias sens_l "alias sens sens_h;sensitivity 2.41"
```

## 开关显示网络参数

```
bind tab "+showscores;shownetg";    //Tab键开关显示网络参数 !有延迟
alias shownetg shownetg_on
alias shownetg_on "alias shownetg shownetg_off;net_graph 1"
alias shownetg_off "alias shownetg shownetg_on;net_graph 0"
```

----

贴吧 @风起天澜555 提供的指令

## 快速扔包

```
//───────────────────────    快速扔包    ──────────────────────────
alias +bgwb "slot3;use weapon_knife;use weapon_c4;drop;"
alias -bgwb "slot2;slot1;"
bind v +bgwb
```

## 一键fr

```
//──────────────────    转圈圈（沙鹰，爪刀，蝴蝶刀等等）   ───────────────
alias +fr "+reload;" 
alias -fr "-reload;+lookatweapon"
bind r "+fr"     //R键一键fr
```

## 切刀并检视

```
//───────────────────────    切刀并检视    ──────────────────────────
alias "+qdjs" "slot3;xjumpthrow_off"
alias "-qdjs" "+lookatweapon;"
bind "3" "+qdjs"
```

----

## 屏幕左上角显示伤害

```
//───────────────────    屏幕↖显示伤害(声音提示)   ──────────────────────
bind F8 display;        // F8键  可修改       【粉色 FF25FFFF 黄色 FFD700FF 绿色 008000FF 红色 AF0000FF】 <可替换>
alias display display_on;    //        【浅蓝 00FFFFFF 紫色 8A2BE2FF 橙色 FF7F50FF 白色 FFFFFFFF】        ↓
alias display_on "alias display display_off;con_filter_enable 2;developer 1;playvol ui/beepclear 0.8;log_color General 00FFFFFF;con_filter_text_out Player:";
alias display_off "alias display display_on;con_filter_enable 0;developer 0;playvol ui/weapon_cant_buy 0.8;log_color General FFFFFFFF";
con_filter_text "Damage ";
```

## WASD切换UI颜色

改数字换颜色

```
bind "w" "+forward;swaphud;cl_hud_color 1";
bind "a" "+moveleft;cl_hud_color 2";
bind "s" "+back;cl_hud_color 3";
bind "d" "+moveright;cl_hud_color 4";
```

## 杀马特WASD切换UI颜色

> 用之前三思

```
//给绑定按键的指令""最后加上;swaphud或者;swap即可让其他按键也切换UI或准星的颜色
//WASD更改UI颜色
bind "w" "+forward;swaphud";
bind "a" "+moveleft;swaphud";
bind "s" "+back;swaphud";
bind "d" "+moveright;swaphud";
alias    "swaphud"    "hud0";
alias    "hud0"    "cl_hud_color 0;alias swaphud hud1";
alias    "hud1"    "cl_hud_color 1;alias swaphud hud2";
alias    "hud2"    "cl_hud_color 2;alias swaphud hud3";
alias    "hud3"    "cl_hud_color 3;alias swaphud hud4";
alias    "hud4"    "cl_hud_color 4;alias swaphud hud5";
alias    "hud5"    "cl_hud_color 5;alias swaphud hud6";
alias    "hud6"    "cl_hud_color 6;alias swaphud hud7";
alias    "hud7"    "cl_hud_color 7;alias swaphud hud8";
alias    "hud8"    "cl_hud_color 8;alias swaphud hud9";
alias    "hud9"    "cl_hud_color 9;alias swaphud hud0";
```

---

## 杀马特左键切换准星颜色

> 用之前三思

```
//鼠标左键更改准星颜色 红绿黄蓝青粉紫白黑
bind  "mouse1" "+attack;swap";
alias "swap"   "red";
alias "red"    "cl_crosshaircolor 0;alias swap green";
alias "green"  "cl_crosshaircolor 1;alias swap yellow";
alias "yellow" "cl_crosshaircolor 2;alias swap blue";
alias "blue"   "cl_crosshaircolor 3;alias swap cyan";
alias "cyan"   "cl_crosshaircolor 4;alias swap pink";
alias "pink"   "cl_crosshaircolor 5;cl_crosshaircolor_b 255;cl_crosshaircolor_r 255;cl_crosshaircolor_g 0;alias swap purple";
alias "purple" "cl_crosshaircolor 5;cl_crosshaircolor_b 255;cl_crosshaircolor_r 150;cl_crosshaircolor_g 0;alias swap white";
alias "white"  "cl_crosshaircolor 5;cl_crosshaircolor_b 255;cl_crosshaircolor_r 255;cl_crosshaircolor_g 255;alias swap black";
alias "black"  "cl_crosshaircolor 5;cl_crosshaircolor_b 0;cl_crosshaircolor_r 0;cl_crosshaircolor_g 0;alias swap red";
```

---

## 开关式投掷准星

```
bind  "mouse4"   "xh";        // "mouse4" 后侧键 可修改
alias "xh"       "xh_throw"
alias "xh_throw" "alias xh xh_norm;exec crosshair_throw.cfg";
alias "xh_norm"  "alias xh xh_throw;exec crosshair.cfg";
```

---

## 开放式麦克风

```
bind  mouse5  "mic";    // "mouse5" 前侧键 可修改
alias mic     "mic_on";
alias mic_on  "alias mic mic_off;+voicerecord";
alias mic_off "alias mic mic_on;-voicerecord";
```

## 跳投  |  投掷物准星  |  个性左右手  |  快速切换道具

- 这几个功能的按键有重合之处，为方便使用，特地分成几种不同的情况。
- 找到你对应的情况，把代码复制，覆盖 `auto.cfg` 对应的部分。

### ① 使用【防误触跳投+自动投掷物准星+个性左右手+快速切换道具】

```
//───────────────────     快速切换道具(未开启)    ────────────────────────
//bind z "use weapon_knife;use weapon_smokegrenade;xjumpthrow";            //烟
//bind x "use weapon_knife;use weapon_flashbang;xjumpthrow";            //闪
//bind c "use weapon_knife;use weapon_hegrenade;xjumpthrow";            //雷
//bind v "use weapon_knife;use weapon_molotov;use weapon_incgrenade;xjumpthrow";    //火
//──────────    防误触跳投+自动投掷物准星+个性化左右手(声音提示)    ────────────
bind  Capslock +jumpthrow;        // "Capslock"键跳投 [可修改]
bind  mouse1 +atk;
bind  mouse2 +atk2;
alias +jumpthrow;
alias -jumpthrow -jump;
alias jpthrow "+jump;-atk;-atk2"
alias +atk "+attack;+ack"
alias -atk  "-attack;-ack"
alias +ack;alias -ack;
alias +atk2 "+attack2;+ack2"
alias -atk2  "-attack2;-ack2"
alias +ack2;alias -ack2;
alias ack_1 "exec crosshair_throw;alias +jumpthrow jpthrow;alias -ack ack_2"
alias ack_2 "exec crosshair;alias +jumpthrow;alias -ack;alias +ack"
alias ack2_1 "exec crosshair_throw;alias +jumpthrow jpthrow;alias -ack2 ack2_2"
alias ack2_2 "exec crosshair;alias +jumpthrow;alias -ack2;alias +ack2"
alias xjumpthrow "alias +ack ack_1;alias +ack2 ack2_1";
alias xjumpthrow_off "alias +ack;alias +ack2;exec crosshair"
//──────────────────       个性化左右手(声音提示)       ─────────────────────
bind  v    "xchange"            // "v"键 切换档位 [可修改]
alias left "cl_righthand 0"        // s1=数字1|主武器    s2=数字2|副武器    s3=数字3|刀    s4=数字4|道具    s5=数字5|炸弹
alias right "cl_righthand 1"        // left=左手 right=右手
alias xchange xchange_on        // 开启档<1左手2345右手>   关闭档<12345右手>   [可修改]
alias xchange_on "alias xchange xchange_off;alias s1 left    ;alias s2 right  ;alias s3 right  ;alias s4 right  ;alias s5 right  ;playvol ui/beepclear 0.8"//←开启档设置
alias xchange_off "alias xchange xchange_on;alias s1 right  ;alias s2 right  ;alias s3 right  ;alias s4 right  ;alias s5 right  ;playvol ui/weapon_cant_buy 0.8"//←关闭档设置
xchange_off;    // 默认关闭档 [可修改]
bind 1 "slot1;s1;xjumpthrow_off"
bind 2 "slot2;s2;xjumpthrow_off"
bind 3 "slot3;s3;xjumpthrow_off"
bind 4 "slot4;s4;xjumpthrow"
bind 5 "slot5;s5;xjumpthrow_off"
//═════════════════════════════════════════════════════════════
```

### ② 只使用【防误触跳投+自动投掷物准星】

```
//──────────────────    防误触跳投+自动投掷物准星    ────────────────────
bind  Capslock +jumpthrow;        // "Capslock"键跳投 [可修改]
bind  mouse1   +atk;
bind  mouse2   +atk2;
alias +jumpthrow;
alias -jumpthrow -jump;
alias jpthrow "+jump;-atk;-atk2"
alias +atk "+attack;+ack"
alias -atk  "-attack;-ack"
alias +ack;alias -ack;
alias +atk2 "+attack2;+ack2"
alias -atk2  "-attack2;-ack2"
alias +ack2;alias -ack2;
alias ack_1 "exec crosshair_throw;alias +jumpthrow jpthrow;alias -ack ack_2"
alias ack_2 "exec crosshair;alias +jumpthrow;alias -ack;alias +ack"
alias ack2_1 "exec crosshair_throw;alias +jumpthrow jpthrow;alias -ack2 ack2_2"
alias ack2_2 "exec crosshair;alias +jumpthrow;alias -ack2;alias +ack2"
alias xjumpthrow "alias +ack ack_1;alias +ack2 ack2_1";
alias xjumpthrow_off "alias +ack;alias +ack2;exec crosshair"
bind  1 "slot1;xjumpthrow_off"
bind  2 "slot2;xjumpthrow_off"
bind  3 "slot3;xjumpthrow_off"
bind  4 "slot4;xjumpthrow"
bind  5 "slot5;xjumpthrow_off"
//═════════════════════════════════════════════════════════════
```

### ③ 只使用【自动投掷物准星】仅兼容基本双键跳投

```
//──────────────────    自动投掷物准星    ────────────────────
alias +atk "+attack;+ack"
alias -atk  "-attack;-ack"
alias +ack;alias -ack;
alias +atk2 "+attack2;+ack2"
alias -atk2  "-attack2;-ack2"
alias +ack2;alias -ack2;
alias ack_1 "exec crosshair_throw;alias -ack ack_2"
alias ack_2 "exec crosshair;alias -ack;alias +ack"
alias ack2_1 "exec crosshair_throw;alias -ack2 ack2_2"
alias ack2_2 "exec crosshair;alias -ack2;alias +ack2"
alias autoxh "alias +ack ack_1;alias +ack2 ack2_1";
alias autoxh_off "alias +ack;alias +ack2;exec crosshair"
bind  1 "slot1;autoxh_off"
bind  2 "slot2;autoxh_off"
bind  3 "slot3;autoxh_off"
bind  4 "slot4;autoxh"
bind  5 "slot5;autoxh_off"
bind  mouse1 +atk;
bind  mouse2 +atk2;
//═════════════════════════════════════════════════════════════
```

### ④ 只使用【个性化左手】

```
//───────────────────   个性化左右手(声音提示)   ────────────────────────
bind  v xchange            // "v"键 切换档位 [可修改]
alias left "cl_righthand 0"        // s1=数字1|主武器    s2=数字2|副武器    s3=数字3|刀    s4=数字4|道具    s5=数字5|炸弹
alias right "cl_righthand 1"        // left=左手 right=右手
alias xchange xchange_on        // 开启档<1左手2345右手>   关闭档<12345右手>   [可修改]
alias xchange_on "alias xchange xchange_off;alias s1 left    ;alias s2 right  ;alias s3 right  ;alias s4 right  ;alias s5 right  ;playvol ui/beepclear 0.8"//←开启档设置
alias xchange_off "alias xchange xchange_on;alias s1 right  ;alias s2 right  ;alias s3 right  ;alias s4 right  ;alias s5 right  ;playvol ui/weapon_cant_buy 0.8"//←关闭档设置
xchange_off;    // 默认关闭档 [可修改]
bind  1 "slot1;s1"
bind  2 "slot2;s2"
bind  3 "slot3;s3"
bind  4 "slot4;s4"      
bind  5 "slot5;s5"
//═════════════════════════════════════════════════════════════
```

### ⑤ 只使用【快速切换道具】

```
//───────────────────     快速切换道具(未开启)    ────────────────────────
//bind z "use weapon_knife;use weapon_smokegrenade";            //烟
//bind x "use weapon_knife;use weapon_flashbang";            //闪
//bind c "use weapon_knife;use weapon_hegrenade";            //雷
//bind v "use weapon_knife;use weapon_molotov;use weapon_incgrenade";    //火
//═════════════════════════════════════════════════════════════
```

### ⑥ 使用【防误触跳投+自动投掷物准星+个性左右手】

```
//──────────    防误触跳投+自动投掷物准星+个性化左右手(声音提示)    ────────────
bind  Capslock +jumpthrow;        // "Capslock"键跳投 [可修改]
bind  mouse1 +atk;
bind  mouse2 +atk2;
alias +jumpthrow;
alias -jumpthrow -jump;
alias jpthrow "+jump;-atk;-atk2"
alias +atk "+attack;+ack"
alias -atk  "-attack;-ack"
alias +ack;alias -ack;
alias +atk2 "+attack2;+ack2"
alias -atk2  "-attack2;-ack2"
alias +ack2;alias -ack2;
alias ack_1 "exec crosshair_throw;alias +jumpthrow jpthrow;alias -ack ack_2"
alias ack_2 "exec crosshair;alias +jumpthrow;alias -ack;alias +ack"
alias ack2_1 "exec crosshair_throw;alias +jumpthrow jpthrow;alias -ack2 ack2_2"
alias ack2_2 "exec crosshair;alias +jumpthrow;alias -ack2;alias +ack2"
alias xjumpthrow "alias +ack ack_1;alias +ack2 ack2_1";
alias xjumpthrow_off "alias +ack;alias +ack2;exec crosshair"
//──────────────────       个性化左右手(声音提示)       ─────────────────────
bind v xchange            // "v"键 切换档位 [可修改]
alias left "cl_righthand 0"        // s1=数字1|主武器    s2=数字2|副武器    s3=数字3|刀    s4=数字4|道具    s5=数字5|炸弹
alias right "cl_righthand 1"        // left=左手 right=右手
alias xchange xchange_on        // 开启档<1左手2345右手>   关闭档<12345右手>   [可修改]
alias xchange_on "alias xchange xchange_off;alias s1 left    ;alias s2 right  ;alias s3 right  ;alias s4 right  ;alias s5 right  ;playvol ui/beepclear 0.8"//←开启档设置
alias xchange_off "alias xchange xchange_on;alias s1 right  ;alias s2 right  ;alias s3 right  ;alias s4 right  ;alias s5 right  ;playvol ui/weapon_cant_buy 0.8"//←关闭档设置
xchange_off;    // 默认关闭档 [可修改]
bind 1 "slot1;s1;xjumpthrow_off"
bind 2 "slot2;s2;xjumpthrow_off"
bind 3 "slot3;s3;xjumpthrow_off"
bind 4 "slot4;s4;xjumpthrow"
bind 5 "slot5;s5;xjumpthrow_off"
//═════════════════════════════════════════════════════════════
```

### ⑦ 使用【防误触跳投+自动投掷物准星+快速切换道具】

```
//───────────────────     快速切换道具(未开启)    ────────────────────────
//bind z "use weapon_knife;use weapon_smokegrenade;xjumpthrow";            //烟
//bind x "use weapon_knife;use weapon_flashbang;xjumpthrow";            //闪
//bind c "use weapon_knife;use weapon_hegrenade;xjumpthrow";            //雷
//bind v "use weapon_knife;use weapon_molotov;use weapon_incgrenade;xjumpthrow";    //火
//──────────────────    防误触跳投+自动投掷物准星    ─────────────────────
bind  Capslock +jumpthrow;        // "Capslock"键跳投 [可修改]
bind  mouse1 +atk;
bind  mouse2 +atk2;
alias +jumpthrow;
alias -jumpthrow -jump;
alias jpthrow "+jump;-atk;-atk2"
alias +atk "+attack;+ack"
alias -atk  "-attack;-ack"
alias +ack;alias -ack;
alias +atk2 "+attack2;+ack2"
alias -atk2  "-attack2;-ack2"
alias +ack2;alias -ack2;
alias ack_1 "exec crosshair_throw;alias +jumpthrow jpthrow;alias -ack ack_2"
alias ack_2 "exec crosshair;alias +jumpthrow;alias -ack;alias +ack"
alias ack2_1 "exec crosshair_throw;alias +jumpthrow jpthrow;alias -ack2 ack2_2"
alias ack2_2 "exec crosshair;alias +jumpthrow;alias -ack2;alias +ack2"
alias xjumpthrow "alias +ack ack_1;alias +ack2 ack2_1";
alias xjumpthrow_off "alias +ack;alias +ack2;exec crosshair"
bind  1 "slot1;xjumpthrow_off"
bind  2 "slot2;xjumpthrow_off"
bind  3 "slot3;xjumpthrow_off"
bind  4 "slot4;xjumpthrow"
bind  5 "slot5;xjumpthrow_off"
//═════════════════════════════════════════════════════════════
```
