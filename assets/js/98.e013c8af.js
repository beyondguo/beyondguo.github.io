(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{468:function(t,a,i){"use strict";i.r(a);var n=i(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"数据地图-使用training-dynamics来映射和诊断数据集"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#数据地图-使用training-dynamics来映射和诊断数据集"}},[t._v("#")]),t._v(" 数据地图---使用Training Dynamics来映射和诊断数据集")]),t._v(" "),i("p",[t._v("最近看到一篇很有趣的文章，发表于EMNLP-20，作者团队主要来自AllenAI：\n"),i("strong",[t._v("Dataset Cartography: Mapping and Diagnosing Datasets with Training Dynamics")])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/beyondguo/mdnice_pictures/typora/202207111632762.png",alt:"image-20220711163225702"}})]),t._v(" "),i("p",[t._v("我们以往的关注点主要在模型身上，这篇文章则是关注于我们的训练数据集，希望通过模型训练过程中的一些动态指标——training dynamics，来发掘数据集的一些性质，比如不同样本的难易程度，从而帮助我们更好地训练模型。这其实是Data-centric方向中的data selection要考虑的主要问题之一。")]),t._v(" "),i("p",[t._v("曾经我介绍过另一篇分析训练过程中的example forgetting现象的文章，这篇文章则是在此基础上更进一步，用一种更精细化的方式，来可视化我们的数据集。")]),t._v(" "),i("p",[t._v("论文的核心方法，用一句话就可以介绍完毕：")]),t._v(" "),i("blockquote",[i("p",[t._v("假设我们训练一个分类模型N个epoch，针对每一个sample，在每个epoch结束后，我们都记录该sample在正确类别上的概率。然后在训练结束后，我们对这N个概率，"),i("strong",[t._v("我们计算概率的均值和标准差，分别记为confidence和variability，构成该sample的坐标，这样就可以绘制数据地图（dataset cartography）")]),t._v("。")])]),t._v(" "),i("p",[t._v("下面是使用SNLI数据集绘制的数据地图：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/beyondguo/mdnice_pictures/typora/202207111642242.png",alt:"image-20220711164244205"}})]),t._v(" "),i("p",[t._v("上图大致可以分为三个区域：")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("easy-to-learn")]),t._v("：是confidence较高，但是variability较低的区域")]),t._v(" "),i("li",[i("strong",[t._v("hard-to-learn")]),t._v("：是confidence较低，variability也较低的区域")]),t._v(" "),i("li",[i("strong",[t._v("ambiguous")]),t._v("：是variability较高的区域")])]),t._v(" "),i("p",[t._v("从名字就可以看出这三个区域的样本，拥有不同的性质。")]),t._v(" "),i("p",[t._v("接下来作者做了一个实验，只使用某一个区域的样本进行训练，看看分别有什么样的效果：")]),t._v(" "),i("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/beyondguo/mdnice_pictures/typora/202207111646077.png",alt:"image-20220711164618052"}}),t._v(" "),i("p",[t._v("上面这个表中，作者只选取了1/3的样本，来跟全量样本的训练进行对比。high-confidence就是指easy-to-learn的样本。可以看出：")]),t._v(" "),i("ul",[i("li",[t._v("只使用easy的样本，效果会很差，比随机选1/3的结果都差；")]),t._v(" "),i("li",[t._v("只使用hard的样本，效果不错，在OOD上甚至可以超过100%训练样本")]),t._v(" "),i("li",[t._v("只使用ambiguous样本，在所有subset中效果最好")])]),t._v(" "),i("p",[t._v("在其他数据集上，也有类似的现象：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/beyondguo/mdnice_pictures/typora/202207111651156.png",alt:"image-20220711165159114"}})]),t._v(" "),i("p",[t._v("作者进一步做了一些实验，来探究三个区域样本的功能，发现：")]),t._v(" "),i("ul",[i("li",[t._v("easy样本，虽然对模型性能的贡献不大，但是如果完全不使用的话，模型的收敛会很困难")]),t._v(" "),i("li",[t._v("ambiguous的贡献基本上是最大的")]),t._v(" "),i("li",[t._v("hard样本贡献也很大，但是里面可能包含很多noise，如果数据错标的话，基本都出现在hard区域")])]),t._v(" "),i("p",[t._v("以上就差不多是论文的内容了，其实很简单，但是这样的一个数据地图，其实可以帮助我们进一步观察数据集的特点，帮助我们从data-centric的角度去做出改进。")]),t._v(" "),i("p",[t._v("笔者自己也跑了一下在SST2数据集上的数据地图，分别使用一个大模型和一个小模型，发现差异明显：")]),t._v(" "),i("p",[t._v("下图是使用RoBERTa-large的效果：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/beyondguo/mdnice_pictures/typora/202207111658106.png",alt:"image-20220711165857066"}})]),t._v(" "),i("p",[t._v("下图则是使用BERT-tiny的效果：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/beyondguo/mdnice_pictures/typora/202207111700970.png",alt:"image-20220711170022925"}})]),t._v(" "),i("p",[t._v("还是挺有意思的，通过这些差异，也许我们可以进一步地发现数据集中的一些特点。")]),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("原作者的GitHub：https://github.com/allenai/cartography\n然而这个repo好久没有维护了，很难直接运行，所以我使用最新版的transformers库复现了一下：\nhttps://github.com/beyondguo/TrainingDynamics\n欢迎大家star，跑跑看。")])])}),[],!1,null,null,null);a.default=e.exports}}]);