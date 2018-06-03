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

致敬轉載網路來源：

* [<span lang="zh-Hans">MathJax使用LaTeX语法编写数学公式教程</span>][1]

如何插入公式?   
LaTeX的數學公式有兩種：**行中公式**和**獨立公式。**    
行中公式放在文中與其它文字混編，    
獨立公式單獨成行。   
    
行中公式可以用如下兩種方法表示：    
```\(數學公式\)```　或　```$數學公式$```   
獨立公式可以用如下兩種方法表示：    
```\[數學公式\]```　或　```$$數學公式$$```   

例子：

* 語法：     
```$[J_\alpha(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma (m + \alpha + 1)} {\left({ \frac{x}{2} }\right)}^{2m + \alpha}]$```

* 數學輸出顯示：   
Show $[J_\alpha(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma (m + \alpha + 1)} {\left({ \frac{x}{2} }\right)}^{2m + \alpha}]$

* [語法][2]：   
```When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$```

* 數學輸出顯示：   
<p>
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</p>

[1]: https://www.zybuluo.com/knight/note/96093
[2]: https://github.com/mathjax/MathJax/blob/master/test/sample-tex.html
