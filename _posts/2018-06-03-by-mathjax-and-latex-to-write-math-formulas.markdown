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

----

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
  
* 語法 3：   
<pre class="prettyprint lang-tex">
$$f(x)=
\begin{cases}
0& \text{x=0}\\
1& \text{x!=0}
\end{cases}$$
</pre>

* 數學輸出顯示：     
<p>
$$f(x)=
\begin{cases}
0& \text{x=0}\\
1& \text{x!=0}
\end{cases}$$
</p>  

----

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

----

#### 如何輸入括號和分隔符

**()** 、**[]** 和 **|** 表示自己，   
**{}** 表示 {}。   
當要顯示大號的括號或分隔符時，   
要用 ```\left``` 和    
```\right``` 命令。    

* 語法：   
<pre class="prettyprint lang-tex">
$f(x,y,z) = 3y^2z \left( 3+\frac{7x+5}{1+y^2} \right)$
</pre>

* 數學輸出顯示：     
<p>$f(x,y,z) = 3y^2z \left( 3+\frac{7x+5}{1+y^2} \right)$</p>

有時候要用 ```\left.``` 或 ```\right.```進行匹配而不顯示本身。   

* 語法： 
<pre class="prettyprint lang-tex">$\left. \frac{ {\rm d}u}{ {\rm d}x} \right| _{x=0}$</pre>

* 數學輸出顯示：    
<p>$\left. \frac{ {\rm d}u}{ {\rm d}x} \right| _{x=0}$</p>


----

#### 如何輸入分數

* 語法： 
<pre class="prettyprint lang-tex">$\frac{1}{3}$</pre>
<pre class="prettyprint lang-tex">$1 \over 3$</pre>

* 數學輸出顯示：
<p>$\frac{1}{3}$ 和 $1 \over 3$</p>   

----

#### 如何輸入開根號

* 語法： 
<pre class="prettyprint lang-tex">$\sqrt{2}$</pre>
<pre class="prettyprint lang-tex">$\sqrt[n]{3}$</pre> 

* 數學輸出顯示：
<p>$\sqrt{2}$ 和 $\sqrt[n]{3}$</p>   

----

#### 如何輸入省略號

數學公式中常見的省略號有兩種，   
```\ldots``` 表示與文本底線對齊的省略號，   
```\cdots``` 表示與文本中線對齊的省略號。   

* 語法： 
<pre class="prettyprint lang-tex">$f(x_1,x_2,\ldots,x_n) = x_1^2 + x_2^2 + \cdots + x_n^2$</pre>

* 數學輸出顯示：
<p>$f(x_1,x_2,\ldots,x_n) = x_1^2 + x_2^2 + \cdots + x_n^2$</p>

----

#### 如何輸入向量

* 語法： 
<pre class="prettyprint lang-tex">$\vec{a} \cdot \vec{b}=0$</pre>

* 數學輸出顯示：
<p>$\vec{a} \cdot \vec{b}=0$</p>

----

#### 如何輸入積分

* 語法： 
<pre class="prettyprint lang-tex">$\int_0^1 x^2 {\rm d}x$</pre>

* 數學輸出顯示：
<p>$\int_0^1 x^2 {\rm d}x$</p>

-----

#### 如何輸入極限函數

* 語法： 
<pre class="prettyprint lang-tex">$\lim\limits_{n \rightarrow +\infty} \frac{1}{n(n+1)}$</pre> 
<pre class="prettyprint lang-tex">$$\lim_{n \rightarrow +\infty} \frac{1}{n(n+1)}$$</pre>

* 數學輸出顯示：
<p>$\lim\limits_{n \rightarrow +\infty} \frac{1}{n(n+1)}$</p>
<p>$$\lim_{n \rightarrow +\infty} \frac{1}{n(n+1)}$$</p>

> 注:在latex中輸入極限，主要的一種形式是使用```\lim``` ，  
輸出的就是極限的原樣。  
如果在$*****$環境中，  
使用上下標起不到作用，  
在```$$******$$```中使用下標，  
會使下標部分出現在limit之下。  
在文章中間，  
使用這種形式的極限，  
可以選擇使用這種形式 ```\lim\limits_{t \to \infty }{x(t)}.```  
上下極限的輸入textfriend裡面直接就有。  
另外一點需要注意的是，  
極限的下標如果有多行的話，  
使用斷行，  
有幾種方法：  
可以使用```array``` 或者```substack``` 命令，  
也可以使用```\stackrel{top}{bot}``` 或者```mathop``` 命令。  

-----

#### 如何輸入累加、累乘運算

* 語法： 
<pre class="prettyprint lang-tex">$\sum_{i=0}^n \frac{1}{i^2}$</pre> 
<pre class="prettyprint lang-tex">$\prod_{i=0}^n \frac{1}{i^2}$</pre>

* 數學輸出顯示：
<p>$\sum_{i=0}^n \frac{1}{i^2}$</p>
<p>$\prod_{i=0}^n \frac{1}{i^2}$</p>

----

#### 如何進行公式應用

* 語法： 
<pre class="prettyprint lang-tex">$r = r_F+ \beta(r_M – r_F) + \epsilon$</pre> 

* 數學輸出顯示：
<p>$r = r_F+ \beta(r_M – r_F) + \epsilon$</p>

----

#### 如何輸入希臘字母

<pre class="prettyprint lang-tex">
\alpha　A　\beta　B　\gamma　\Gamma　\delta　\Delta　\epsilon　E 
\varepsilon　　\zeta　Z　\eta　H　\theta　\Theta　\vartheta 
\iota　I　\kappa　K　\lambda　\Lambda　\mu　M　\nu　N 
\xi　\Xi　o　O　\pi　\Pi　\varpi　　\rho　P 
\varrho　　\sigma　\Sigma　\varsigma　　\tau　T　\upsilon　\Upsilon 
\phi　\Phi　\varphi　　\chi　X　\psi　\Psi　\omega　\Omega
</pre>

<table id="table" >
  <tr>
    <th>語法：</th>
    <th>數學輸出顯示</th>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>


[1]: https://www.zybuluo.com/knight/note/96093
[2]: https://github.com/mathjax/MathJax/blob/master/test/sample-tex.html
