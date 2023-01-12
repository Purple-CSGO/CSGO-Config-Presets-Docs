---
title: 使用说明
order: 5
---

# {{ $frontmatter.title }}


1. **备份设置文件！备份设置文件！备份设置文件！**

   - 个人设置文件夹 `...\Steam\userdata\(32位ID)\730\local\cfg\`

   - 游戏设置文件夹 `...\Steam\steamapps\common\Counter-Strike Global Offensive\csgo\cfg\`

   > 32位->二进制位，大多8~10位十进制数字

2. ID不知道怎么办？

   - 打开 Steam 的 `添加好友` 页面，**ID=好友代码**

   - 登录 <https://steamid.io/>

     - 复制个人资料简介，如 `https://steamcommunity.com/id/1234567890/`

     - 第二行，如 SteamID3 [U:1:`146859713`] ，ID=`146859713`

3. //是"注释" 在它出现的那一行，之后的内容都不会被读取

   ```
   这是指令;    //这是注释
   ```

   如果不想用某条指令，就在指令前加上注释，或者直接删除:

   ```
   //这是指令;    //这是注释
   ```

4. 修改 `auto.cfg` 中的参数

   - 可以把游戏设置成**窗口模式**对应着改

   - **准星、持枪参数**可到创意工坊地图导出

   - 或使用下文的方法

5. 修改完成后移动到CFG文件夹（步骤1），个人CFG文件夹仅该玩家使用，方便打包；游戏CFG所有本机账号共享，请自行取舍。

## 准星&持枪参数导出

分开使用，复制到控制台，即可得到对应参数。

```
echo ;echo "==================== 准星参数 ====================";echo ;sv_max_allowed_developer 2;developer 2;
con_filter_enable 1;con_filter_text cl_crosshair;host_writeconfig;
con_filter_text cl_fix;host_writeconfig;developer 0;con_filter_enable 0;
```

```
echo ;echo "==================== 持枪参数 ====================";echo ;sv_max_allowed_developer 2;developer 2;
con_filter_enable 1;con_filter_text viewmodel;host_writeconfig;
con_filter_text cl_bob;host_writeconfig;developer 0;con_filter_enable 0;
```

## 准星分享代码

控制台使用分享代码示例：

```
apply_crosshair_code CSGO-cS6Fv-iBc8r-sroTA-4jyik-OYTSH
```

![准星代码](./img/准星代码.png)