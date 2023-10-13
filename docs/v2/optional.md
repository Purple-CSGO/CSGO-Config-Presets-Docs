---
title: 可选指令
order: 50
---

# {{ $frontmatter.title }}

Purp1e(@[Purple-CSGO](https://space.bilibili.com/73115492))制作

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

## WASD切换UI颜色

改数字换颜色

```
bind "w" "+forward;cl_hud_color 1";
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
