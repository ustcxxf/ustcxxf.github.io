---
title: 笔记模板
author: 柴琎 BA23009016
affiliation: 中国科学技术大学 工程科学学院精密机械与精密仪器系 仿生智能机器人实验室 BIR-Lab
date: 2025-08-02
---
<font face="华文楷体">

<div align="center">
  <span style="font-size:40px; font-weight:bold;">Markdown笔记模板</span>
</div>
<div align="center">
  <span style="font-size:25px; font-weight:bold;">柴琎 BA23009016</span>
</div>
 <center><font size=5></font></center>
 <center><font size=4>中国科学技术大学 仿生智能机器人实验室BIR-Lab</font></center>

<center><font size=5>2025.08.02</font></center>



> 📌 学习使用Markdown的基本功能
<div align="center">
  <span style="font-size:40px; font-weight:bold;">
  <center><font face="黑体" size=5>目录
  </font></center></span>
</div>

<!-- Ctrl + Shift + P找到对All in one的设置-->
- [一、准备工作](#一准备工作)
- [二、基本语法](#二基本语法)
- [三、其他操作](#三其他操作)
- [四、导出为PDF文档](#四导出为pdf文档)
- [五、补充](#五补充)
- [参考资料](#参考资料)
---

## 一、准备工作 
1. **安装VSCode**
2. **下载必要的插件**
   - Markdown All in One
   - Markdown Preview Enhanced
   - Markdown PDF
   - Paste Image
3. 创建.md文档，打开同步预览功能，开始编辑
## 二、基本语法
1. **标题**
   #一级标题（井号后有空格）
   ##二级标题
   ...
2. **引用**
> 编辑Markdown很好玩！（似乎比Latex更友好的样子）
> >引用的嵌套
3. **列表**
    1. 无序列表与嵌套
    - 列表1（横杠）
    * 列表2（星号）
    + 列表3（加号）
        - 嵌套1
          - 嵌套2
    1. 有序列表（带数字）
    2. 有序列表嵌套
        1. 嵌套2
    3. TodoList
    - [ ] a
    - [x] b
4. **表格**

   - 用Markdown写表格

    |左对齐 | 居中对齐 | 右对齐 |
    | :---- | :----: | ----: |
    | a | b | c|

    - 用Html写表格[^1]
<div class="center">
<table>
  <thead>
    <tr>
      <th>列标题1</th>
      <th>列标题2</th>
      <th>列标题3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>行1，列1</td>
      <td>行1，列2</td>
      <td>行1，列3</td>
    </tr>
    <tr>
      <td>行2，列1</td>
      <td>行2，列2</td>
      <td>行2，列3</td>
    </tr>
  </tbody>
</table>
</div>

1. **段落**
    - 换行？——两个以上空格后回车/空一个行
    - 分割线——三个*
    ***
    - 字体

        |字体| 代码 | 
        | :----:  | :----: |
        | *斜体* | * * |
        | **粗体** | ** ** |
        | ==高亮== | == == |
        | ***粗斜体***  | *** *** |
        | ~~删除~~ | ~~ ~~ |
        | <u>下划线</u>| ```<u> </u>``` |

    - 脚注
    本教程链接[^2]来自[B站视频](https://www.bilibili.com/video/BV1bK4y1i7BY/?share_source=copy_web&vd_source=1b7c7c358b36a96a651458ed336203c2)

2. **代码**
   1. 多行代码
    ```C++
    #include <iostream>
    using namespace std;
    int main()
    {
        print("Hello world!");
    }
    ```
   2. 单行代码
`print("Hello world!");`
1. **超链接**
   - [更多使用教程参考菜鸟教程-Markdown](https://www.runoob.com/markdown/md-tutorial.html)
   - [更多其他语言等教程（菜鸟教程）](https://www.runoob.com/)
2. **图片**
![picture_test](markdowntest.jpg)

<center><font size=3><b>图1</b> 用<b>Markdown</b>插入图片</font></center>

<center><img src="markdowntest.jpg" alt="picture_test" width="75%"/></center>

<center><font size=3><b>图2</b> 用<b>Html</b>插入图片并调整图片大小</font></center>

## 三、其他操作
1. **插入latex公式**
    - 行内显示公式$f(x)=ax^2+bx+c$
    - 块内显示公式
        $$
        \begin{Bmatrix}
        a & b\\
        c & d 
        \end{Bmatrix}
        $$
2. **html/css语法**[^3]
    - **Ctrl+Shift+P搜索**
    "Markdown Preview Enhanced: Customize Css" 
    - 缩进与空格```&emsp;```：插入空格或者在文本开头用于缩进&emsp;注意不要忘记分号
    - 居中：
      - 格式1：```<center>内容</center> ```
      - 格式2：```<p align=center>内容</p> ```
      - 格式3：```<div align=center>内容</div>```
    - 字体颜色、大小、字体类型：```<font color="" size=6 face="">字体颜色、大小、字体类型</font>```
    - 图片：```<img src="url" width="400" height="400" alt="" title="" style="50%;"/>```
      - src：该图片的网址
      - alt：是图片没有加载成功时，显示的文字
      - title：该图片的标题
      - style：设置缩放
    - 空白行：
      - 格式1（使用块标签，撑开一行，如p、div）：```<p></p>```/```<div></div> ```
      - 格式2（ 简单点的方法，就直接使用 br 标签）：```内容1<br/><br/>内容2```
    - ...进一步到[菜鸟教程-HTML](https://www.runoob.com/html/html-tutorial.html)中学习
3. **个性化设置**
File-Preference-Settings
## 四、导出为PDF文档
1. 使用Markdown PDF(不推荐)
   1. 表格无法在中间显示
   2. 公式也无法显示（仍未Latex公式样子）
2. **在预览窗口右键点击选择Open in Browser - 再手动另存为PDF**

## 五、补充
- 其他参考教程[使用Stackedit网页端【8分钟让你快速掌握Markdown】](https://www.bilibili.com/video/BV1JA411h7Gw/?share_source=copy_web&vd_source=1b7c7c358b36a96a651458ed336203c2)。



<!-- 后面为参考资料部分-->
## <center><font>参考资料</font></center>

[^1]: [Markdown预览使表格居中的方法]https://zhuanlan.zhihu.com/p/66321296

[^2]: [全网最详细Markdown入门使用教程-40分钟教会你用免费的vscode做出好看的笔记] https://www.bilibili.com/video/BV1bK4y1i7BY/?share_source=copy_web&vd_source=1b7c7c358b36a96a651458ed336203c2

[^3]: [Markdown使用技巧总结——缩进，空格，字体，颜色，字号，图片等]https://zhuanlan.zhihu.com/p/271394570