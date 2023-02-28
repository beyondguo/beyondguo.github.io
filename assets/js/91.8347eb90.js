(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{465:function(t,a,s){"use strict";s.r(a);var v=s(44),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用v-usable-information来理解数据集难度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用v-usable-information来理解数据集难度"}},[t._v("#")]),t._v(" 使用V-Usable Information来理解数据集难度")]),t._v(" "),s("p",[t._v("今天介绍一篇 ICML'22 的 outstanding paper:")]),t._v(" "),s("p",[s("strong",[t._v("Understanding dataset difficulty with V-usable information")]),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/beyondguo/mdnice_pictures/typora/202207281505418.png",alt:"image-20220728150516516"}})]),t._v(" "),s("p",[t._v("一作在 Twitter 上给出的简介：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/beyondguo/mdnice_pictures/typora/202207281513139.png",alt:"image-20220728151354084"}})]),t._v(" "),s("blockquote",[s("p",[t._v("已经有很多的工作在视图解释模型，但是很少有工作去解释数据集。")])]),t._v(" "),s("p",[t._v("这篇文章就是数据集角度的一个探索，提出使用 "),s("strong",[t._v("V-Usable Information")]),t._v(" 来理解数据集难度。"),s("strong",[t._v("V 代表模型")]),t._v("，所以大意就是“"),s("strong",[t._v("模型可以使用的信息量")]),t._v("”来反映数据集的难度。下面我们来看看具体如何操作的。")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("我们一般是如何评价数据集的难度呢？比方同样是分类任务，AGNews 和 20NewsGroup 大家肯定都很熟悉，我们使用 BERT 去训练一下，对比一下不同数据集的准确率，准确率越高的，可以认为这个任务越简单。")]),t._v(" "),s("p",[t._v("然而，这样对比，并不是那么靠谱，有这么几个原因：")]),t._v(" "),s("ul",[s("li",[t._v("不同数据集，可能类别个数不同（e.g. 一个2分类，一个10分类，accuracy不具备可比性）；")]),t._v(" "),s("li",[t._v("不同数据集，可能类别平衡程度不同（e.g. 同样是accuracy=70%，但是其中一个数据集本身数据很平衡，一个很不平衡，那也无法比较）")])]),t._v(" "),s("p",[t._v("还有其他的原因，导致我们很难在“同一标准”上对比两个模型的难度。")]),t._v(" "),s("p",[t._v("（当然，也有一些工作，从 training dynamics 的角度去分析样本的难度，比如前面介绍过的 EMNLP'20 的工作 Dataset Cartography，就是对训练过程中的样本的预测概率的变化，来考察样本难度的。在还有很多工作，从 loss、gradient、forgetfulness 等等角度去考察。我们把这些方法放在后面对比讨论。）")]),t._v(" "),s("h2",{attrs:{id:"信息量-vs-难度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#信息量-vs-难度"}},[t._v("#")]),t._v(" 信息量 vs. 难度")]),t._v(" "),s("p",[t._v("首先思考个问题：")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("信息量如果不变的话，难度可以改变吗？—— 答案是：可以改变。")])])]),t._v(" "),s("p",[t._v("这个问题很有意思，也是这篇文章让我最印象深刻的一个点，作者在 introduction 部分讲了一个例子：")]),t._v(" "),s("p",[t._v("假设一个模型族 V，可以学习到把一个句子 X 跟某个情感 Y 对应上（就是情感分类任务），那么就意味着 X 中蕴含了关于情感 Y 的信息，这些信息被 V 利用，才能使得 V 可以正确分类。")]),t._v(" "),s("p",[t._v("如果我们对 X 进行一定的改变，比如“"),s("strong",[t._v("加密")]),t._v("”，而且是唯一的一对一的那种加密，那么 X 中蕴含的关于 Y 的信息量改变了吗？——"),s("strong",[t._v("根据香农信息论，信息量实际上没有改变")]),t._v("。")]),t._v(" "),s("p",[t._v("但是，对于模型 V 来说，加密后的 X——X'，变得更难了，变得更加“难以利用了”，所以"),s("strong",[t._v("虽然信息量并没有改变，但是对于模型 V 来说，难度确实增加了")]),t._v("。")]),t._v(" "),s("p",[t._v("举一个更加实际的例子，我们熟练掌握了中文，那么做中文阅读理解肯定也十分简单，但如果把文章都翻译成英文再让我们做，我们就不一定会做了。从中文到英文，信息量并没有变，我们没都修改、丢失任务信息，只是表达方式不一样了，但是对于我们来说任务却变难了。")]),t._v(" "),s("h2",{attrs:{id:"v-usable-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-usable-information"}},[t._v("#")]),t._v(" V-usable information")]),t._v(" "),s("h2",{attrs:{id:"pointwise-difficulty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pointwise-difficulty"}},[t._v("#")]),t._v(" Pointwise Difficulty")])])}),[],!1,null,null,null);a.default=r.exports}}]);