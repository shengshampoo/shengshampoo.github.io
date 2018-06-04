---
published: true 
title: 藉由 MathJax使用 LaTeX語法編寫數學公式教程
layout: post 
tags: [MathJax, LaTeX] 
categories: [MathJax] 
--- 

### <font color="red">藉由 MathJax使用 LaTeX語法編寫數學公式教程</font> 

<script defer src="https://cdnjs.loli.net/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML"></script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]}
  });
</script>

致敬轉載翻閱臨摹的資料來源，內容：

* [<span lang="zh-Hans">MathJax使用LaTeX语法编写数学公式教程</span>][1]

#### 如何插入公式

LaTeX的數學公式有兩種：    
**行中公式**和**獨立公式。**    
行中公式放在文中與其它文字混編，    
獨立公式單獨成行。   
    
行中公式可以用如下兩種方法表示：    
```\(Math Formulas\)```　    
或　```$Math Formulas$```   
獨立公式可以用如下兩種方法表示：    
```\[Math Formulas\]```   
或　```$$Math Formulas$$```   

例子：

* 語法：     
<pre class="prettyprint lang-tex">
$[J_\alpha(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma (m + \alpha + 1)} {\left({ \frac{x}{2} }\right)}^{2m + \alpha}]$
</pre>

* 數學輸出顯示：   
<p>$[J_\alpha(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma (m + \alpha + 1)} {\left({ \frac{x}{2} }\right)}^{2m + \alpha}]$</p>

* [語法][2]：   
<pre class="prettyprint lang-tex">
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</pre>

* 數學輸出顯示：   
<p>
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</p>

#### 如何插入公式大括號   

* 語法 1：   
<pre class="prettyprint lang-tex">
$$ f(x)=\left\{
\begin{aligned}
x & = & \cos(t) \\
y & = & \sin(t) \\
z & = & \frac xy
\end{aligned}
\right.
$$
</pre>

* 數學輸出顯示：     
<p>
$$ f(x)=\left\{
\begin{aligned}
x & = & \cos(t) \\
y & = & \sin(t) \\
z & = & \frac xy
\end{aligned}
\right.
$$
</p>

* 語法 2：   
<pre class="prettyprint lang-tex">
$$ F^{HLLC}=\left\{
\begin{array}{rcl}
F_L       &      & {0      <      S_L}\\
F^*_L     &      & {S_L \leq 0 < S_M}\\
F^*_R     &      & {S_M \leq 0 < S_R}\\
F_R       &      & {S_R \leq 0}
\end{array} \right. $$
</pre>

* 數學輸出顯示：     
<p>
$$ F^{HLLC}=\left\{
\begin{array}{rcl}
F_L       &      & {0      <      S_L}\\
F^*_L     &      & {S_L \leq 0 < S_M}\\
F^*_R     &      & {S_M \leq 0 < S_R}\\
F_R       &      & {S_R \leq 0}
\end{array} \right. $$
</p>

#### 如何輸入上下標   

**^** 表示上標，   
**_** 表示下標。   
如果上下標的內容多於一個字符，   
要用 **{}** 把這些內容括起來當成一個整體。   
上下標是可以嵌套的，    
也可以同時使用。    

* 語法：   
<pre class="prettyprint lang-tex">
$x^{y^z}=(1+{\rm e}^x)^{-2xy^w}$
</pre>

* 數學輸出顯示：     
<p>$x^{y^z}=(1+{\rm e}^x)^{-2xy^w}$</p>

如果要在左右兩邊都有上下標，
可以用```\sideset```命令。

* 語法：   
<pre class="prettyprint lang-tex">
$\sideset{^1_2}{^3_4}\bigotimes$
</pre>

* 數學輸出顯示：     
<p>$\sideset{^1_2}{^3_4}\bigotimes$</p>

* 語法：   
<pre class="prettyprint lang-tex">
$$\max_{k}$$
</pre>

* 數學輸出顯示：     
<p>$$\max_{k}$$</p>

* 語法：   
<pre class="prettyprint lang-tex">
$$\mathop{argmax}_{K}$$
</pre>

* 數學輸出顯示：     
<p>$$\mathop{argmax}_{K}$$</p>

#### 如何輸入括號和分隔符

**()** 、**[]** 和 **|** 表示自己，
**{}** 表示 {}。
當要顯示大號的括號或分隔符時，
要用```\left```和```\right```命令。

* 語法：   
<pre class="prettyprint lang-tex">
$f(x,y,z) = 3y^2z \left( 3+\frac{7x+5}{1+y^2} \right)$
</pre>

* 數學輸出顯示：     
<p>$f(x,y,z) = 3y^2z \left( 3+\frac{7x+5}{1+y^2} \right)$</p>

有時候要用```\left.``` 或```\right.```進行匹配而不顯示本身。     

* 語法：   
<pre class="prettyprint lang-tex">
$\left. \frac{{\rm d}u}{{\rm d}x} \right| _{x=0}$$
</pre>

* 數學輸出顯示：     
<p>$\left. \frac{{\rm d}u}{{\rm d}x} \right| _{x=0}$</p>

#### 如何輸入分數

[1]: https://www.zybuluo.com/knight/note/96093
[2]: https://github.com/mathjax/MathJax/blob/master/test/sample-tex.html
