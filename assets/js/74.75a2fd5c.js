(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{444:function(s,t,a){"use strict";a.r(t);var n=a(44),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"msra-面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msra-面试题"}},[s._v("#")]),s._v(" MSRA 面试题")]),s._v(" "),a("ul",[a("li",[s._v("2022.1.19")]),s._v(" "),a("li",[s._v("面试老师：Bartuer Zhou")]),s._v(" "),a("li",[s._v("整理：郭必扬")])]),s._v(" "),a("h3",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目：")]),s._v(" "),a("p",[s._v("一副扑克（54张牌），现在又拿一副，随机抽一张，跟原来那副混在一起（即有55张牌），洗牌。")]),s._v(" "),a("p",[s._v("要求：设计一个算法，把重复的牌找出来。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 翻译题目：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" random\nm "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随机抽取的一张牌")]),s._v("\nA "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nrandom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("shuffle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"算法1-遍历计数法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法1-遍历计数法"}},[s._v("#")]),s._v(" 算法1：遍历计数法")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" f1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wrong'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("计算平均耗时：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("timeit f1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("12.6 µs ± 52.8 ns per loop (mean ± std. dev. of 7 runs, 100000 loops each)\n")])])]),a("h2",{attrs:{id:"算法2-通过哈希表记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法2-通过哈希表记录"}},[s._v("#")]),s._v(" 算法2：通过哈希表记录")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    dic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" dic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            dic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" f2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wrong'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("计算平均耗时：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("timeit f2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("2.1 µs ± 8.73 ns per loop (mean ± std. dev. of 7 runs, 100000 loops each)\n")])])]),a("h2",{attrs:{id:"算法3-巧妙利用问题特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法3-巧妙利用问题特性"}},[s._v("#")]),s._v(" 算法3：巧妙利用问题特性")]),s._v(" "),a("p",[s._v("原始的牌1-54的和是固定的，所以重复的那一张牌的数，就一定等于加牌后的求和减去原始的求和。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" f3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wrong'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("timeit f3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("358 ns ± 1.76 ns per loop (mean ± std. dev. of 7 runs, 1000000 loops each)\n")])])]),a("p",[s._v("使用numpy的求和可以更快(理论上，但在Mac M1上测试发现更慢)：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" numpy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" np\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("int8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" f4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wrong'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("timeit f4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("1.71 µs ± 4.98 ns per loop (mean ± std. dev. of 7 runs, 1000000 loops each)\n")])])]),a("h3",{attrs:{id:"下附各种求和函数的对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下附各种求和函数的对比"}},[s._v("#")]),s._v(" 下附各种求和函数的对比：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("timeit "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("319 ns ± 0.15 ns per loop (mean ± std. dev. of 7 runs, 1000000 loops each)\n")])])]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("timeit "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("4.58 µs ± 29.2 ns per loop (mean ± std. dev. of 7 runs, 100000 loops each)\n")])])]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("timeit np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("1.55 µs ± 2.54 ns per loop (mean ± std. dev. of 7 runs, 1000000 loops each)\n")])])]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("timeit d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("718 ns ± 2.08 ns per loop (mean ± std. dev. of 7 runs, 1000000 loops each)\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结：")]),s._v(" "),a("p",[s._v("Mac M1 测试结果：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("算法")]),s._v(" "),a("th",[s._v("耗时")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("遍历计数法")]),s._v(" "),a("td",[s._v("12.6 µs ± 52.8 ns")])]),s._v(" "),a("tr",[a("td",[s._v("通过哈希表记录")]),s._v(" "),a("td",[s._v("2.1 µs ± 8.73 ns")])]),s._v(" "),a("tr",[a("td",[s._v("求和相减")]),s._v(" "),a("td",[a("strong",[s._v("358 ns")]),s._v(" ± 1.76 ns")])]),s._v(" "),a("tr",[a("td",[s._v("求和相减(np)")]),s._v(" "),a("td",[s._v("1.71 µs ± 4.98 ns per")])])])]),s._v(" "),a("p",[s._v("Windows Intel Xeon W-2123 CPU 3.60GHz 测试结果：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("算法")]),s._v(" "),a("th",[s._v("耗时")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("遍历计数法")]),s._v(" "),a("td",[s._v("26.8 μs ± 752 ns")])]),s._v(" "),a("tr",[a("td",[s._v("通过哈希表记录")]),s._v(" "),a("td",[s._v("4.58 μs ± 149 ns")])]),s._v(" "),a("tr",[a("td",[s._v("求和相减")]),s._v(" "),a("td",[a("strong",[s._v("663 ns")]),s._v(" ± 4.92 ns")])]),s._v(" "),a("tr",[a("td",[s._v("求和相减(np)")]),s._v(" "),a("td",[s._v("4.43 μs ± 184 ns")])])])]),s._v(" "),a("p",[a("strong",[s._v("在Mac M1上和Windows Intel上的测试结果在rank上一致")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);