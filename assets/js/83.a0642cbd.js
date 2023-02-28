(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{450:function(t,s,a){"use strict";a.r(s);var i=a(44),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lime-我可以解释任何一个分类模型的预测结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lime-我可以解释任何一个分类模型的预测结果"}},[t._v("#")]),t._v(" LIME：我可以解释任何一个分类模型的预测结果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/beyond_guo/typora_pics/raw/master/typora/20210630115214-lime.png",alt:"image-20210630115214018"}})]),t._v(" "),a("ul",[a("li",[t._v("论文标题：“Why Should I Trust You?” Explaining the Predictions of Any Classifier")]),t._v(" "),a("li",[t._v("发表会议：KDD-2016")]),t._v(" "),a("li",[t._v("组织机构：华盛顿大学")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("一句话点评：\n别被猖狂的标题给唬住了，实际思想很简单。")])]),t._v(" "),a("h2",{attrs:{id:"主要贡献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要贡献"}},[t._v("#")]),t._v(" 主要贡献：")]),t._v(" "),a("p",[t._v("提出了一种技术手段，可以为"),a("strong",[t._v("任意的")]),t._v("分类模型提供预测结果的解释。")]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景：")]),t._v(" "),a("ul",[a("li",[t._v("在模型被用户使用前，用户都会十分关心模型是否真的值得信赖。")]),t._v(" "),a("li",[t._v("现实中，我们的通过目前标准的训练方式得到的模型，往往不能保证模型的可靠性。因为模型开发过程中使用的验证、测试集，可能跟实际场景差别很大。另外，我们使用的评价准则（evaluation metrics）也很局限，不能体现出很多我们关心的但难以量化的标准，例如用户的参与度、留存度。")]),t._v(" "),a("li",[t._v("由于模型开发过程中可能存在的非故意的"),a("strong",[t._v("数据泄露")]),t._v("（unintentional data leakage，比如数据集的）和"),a("strong",[t._v("数据集漂移")]),t._v("（dataset shift，指训练集和测试集分布不同），得到的模型也可能并不可靠。")])]),t._v(" "),a("p",[t._v("因此，我们需要能够对模型的预测进行解释，从而帮助我们来判断模型是否可靠。")]),t._v(" "),a("blockquote",[a("p",[t._v("何谓“"),a("strong",[t._v("解释一个预测结果")]),t._v("”，作者的定义是：通过文本的或者视觉的方式来呈现样本的具体组成部分跟模型预测结果之间的关系。")])]),t._v(" "),a("h2",{attrs:{id:"一个理想的解释器-explainer-应该是怎样的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个理想的解释器-explainer-应该是怎样的"}},[t._v("#")]),t._v(" 一个理想的解释器（explainer）应该是怎样的？")]),t._v(" "),a("p",[t._v("作者总结了四点他们认为是一个理想的解释器应该具备的性质：")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("好理解的/可解释的（interpretable）")]),t._v("\n这必然是最基本的，但"),a("strong",[t._v("在可解释的同时")]),t._v("，我们"),a("strong",[t._v("必须考虑“人是否好理解”")]),t._v("。比如，一个线性模型是可以解释的，但是如果它使用的特征有1000个，那么对人来说还是很难理解，或者不好接受。所以既要可解释，还要好理解。")]),t._v(" "),a("li",[a("strong",[t._v("局部保真性（local fidelity，locally faithful）")]),t._v("\n一般而言，想要对模型进行完全可信的解释是几乎不可能的，因为模型真正使用的特征，往往就是极度复杂的、高维的，这对于想要让我们三维生物去理解太强人锁男了。但，我们可以在局部、小范围内进行一些简单的解释。因为，我们希望至少在局部范围内，我们的解释是可信的。")]),t._v(" "),a("li",[t._v("模型无关的（model-agnostic）\n我们的解释器，应该跟具体模型无关，最好是通用的。")]),t._v(" "),a("li",[t._v('提供全局视角（global perspective）\n这一点，我没有完全理解。原文是："In addition to explaining predictions, providing a global perspective is important to ascertain trust in the model. As mentioned before, accuracy may often not be sufficient to evaluate the model, and thus we want to explain the model."')])]),t._v(" "),a("p",[t._v("总之，上面最重要的就是1、2点，这也是该论文进行方法设计的基础。")]),t._v(" "),a("h2",{attrs:{id:"方法设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法设计"}},[t._v("#")]),t._v(" 方法设计：")]),t._v(" "),a("p",[a("strong",[t._v("L")]),t._v("ocal "),a("strong",[t._v("I")]),t._v("nterpretable "),a("strong",[t._v("M")]),t._v("odel-agnostic "),a("strong",[t._v("E")]),t._v("xplanations (LIME)")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("总体的思想")]),t._v("：原始模型复杂的决策边界，在任意一个样本点的局部范围内，可以视为是线性的。那只要找到这些线性的边界，就可以对模型在该样本点出进行解释了。")])]),t._v(" "),a("h3",{attrs:{id:"_1-构建可解释的数据表示-interpretable-data-representations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-构建可解释的数据表示-interpretable-data-representations"}},[t._v("#")]),t._v(" 1. 构建可解释的数据表示（Interpretable Data Representations）")]),t._v(" "),a("p",[t._v("原始的数据，或者模型使用的特征，往往不够直观、具体。我们需要将原始的数据，转化成一种便于解释的数据表示，从而辅助我们后续的模型预测结果解释。")]),t._v(" "),a("p",[t._v("这里，作者使用的方法是，将原始数据，转化成一组由基本元素构成的"),a("strong",[t._v("0-1表示")]),t._v("。例如，对于文本来说，就是某个词是否出现这样的特征，对于图像来说，就是某个区域是否出现。")]),t._v(" "),a("p",[t._v("我画了一个图来示意这个转化过程：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/beyond_guo/typora_pics/raw/master/typora/20210630122303.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_2-选择一个天然可解释的简单模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-选择一个天然可解释的简单模型"}},[t._v("#")]),t._v(" 2. 选择一个天然可解释的简单模型")]),t._v(" "),a("p",[t._v("有一些模型天生就是可解释的，比如"),a("strong",[t._v("线性模型、决策树")]),t._v("。我们就可以利用这些简单的可解释模型来帮助我们解释复杂模型的预测结果。")]),t._v(" "),a("h3",{attrs:{id:"_3-局部采样来拟合一个局部线性模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-局部采样来拟合一个局部线性模型"}},[t._v("#")]),t._v(" 3. 局部采样来拟合一个局部线性模型")]),t._v(" "),a("h4",{attrs:{id:"局部采样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局部采样"}},[t._v("#")]),t._v(" 局部采样：")]),t._v(" "),a("p",[t._v("对原始的样本进行转换得到可解释的数据表示之后，对特征向量进行一些扰动，具体的，随机的对0-1向量中的1进行改变，改变的数量也随机。然后根据这些扰动后的向量，跟原向量的相似度，来使用不同的采样比例。直观上来讲，扰动的少的，采样会更多，扰动大的采样更少。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/beyond_guo/typora_pics/raw/master/typora/20210630122818.png",alt:"image-20210630122818855"}})]),t._v(" "),a("p",[t._v("上图直观展示了采样的方法。")]),t._v(" "),a("h4",{attrs:{id:"拟合局部线性模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拟合局部线性模型"}},[t._v("#")]),t._v(" 拟合局部线性模型：")]),t._v(" "),a("p",[t._v("希望这个可解释模型能够在"),a("strong",[t._v("局部")]),t._v("范围内尽可能接近原模型的决策边界，同时控制可解释模型的复杂度。")]),t._v(" "),a("p",[t._v("因此作者设计了这样的目标函数形式：")]),t._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("mi",[t._v("ξ")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("x")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("=")]),a("msub",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("argmin")]),a("mo",[t._v("⁡")])],1),a("mrow",[a("mi",[t._v("g")]),a("mo",[t._v("∈")]),a("mi",[t._v("G")])],1)],1),a("mspace",{attrs:{width:"1em"}}),a("mi",{attrs:{mathvariant:"script"}},[t._v("L")]),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("(")]),a("mi",[t._v("f")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("g")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msub",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Π")]),a("mi",[t._v("x")])],1),a("mo",{attrs:{fence:"true"}},[t._v(")")])],1),a("mo",[t._v("+")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("Ω")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("g")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\xi(x)=\\operatorname{argmin}_{g \\in G} \\quad \\mathcal{L}\\left(f, g, \\Pi_{x}\\right)+\\Omega(g)\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.04601em"}},[t._v("ξ")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.130248em","vertical-align":"-0.380248em"}}),a("span",{staticClass:"mop"},[a("span",{staticClass:"mop"},[a("span",{staticClass:"mord mathrm"},[t._v("argmin")])]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.23419099999999998em"}},[a("span",{staticStyle:{top:"-2.4558600000000004em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mrel mtight"},[t._v("∈")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("G")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.380248em"}},[a("span")])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathcal"},[t._v("L")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("Π")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("x")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[t._v(")")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[t._v("Ω")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])])]),t._v(" "),a("p",[t._v("其中，f是原始模型，g是我们希望得到的解释模型，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Π")]),a("mi",[t._v("x")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\Pi_{x}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("Π")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("x")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])]),t._v("是一个控制局部范围大小的东西，。L就是对g进行拟合的一个损失函数，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Ω")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("g")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\Omega(g)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[t._v("Ω")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("则是控制g的复杂度的一个惩罚项，对于决策树的话，树🌲的深度depth就反映了复杂度，对于线性模型的话，非零权重的个数就反映了复杂度。")]),t._v(" "),a("p",[t._v("在本文中，g使用的是系数的线性解释器（Sparse Linear Explanations ）：")]),t._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("mi",[t._v("g")]),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("(")]),a("msup",[a("mi",[t._v("z")]),a("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1),a("mo",{attrs:{fence:"true"}},[t._v(")")])],1),a("mo",[t._v("=")]),a("msub",[a("mi",[t._v("w")]),a("mi",[t._v("g")])],1),a("mo",[t._v("⋅")]),a("msup",[a("mi",[t._v("z")]),a("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("g\\left(z^{\\prime}\\right)=w_{g} \\cdot z^{\\prime}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.051892em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.801892em"}},[a("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])]),a("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[t._v(")")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.730558em","vertical-align":"-0.286108em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15139200000000003em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.02691em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.286108em"}},[a("span")])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("⋅")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.801892em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.801892em"}},[a("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])])])])])])]),t._v(" "),a("p",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Π")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\Pi")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("Π")])])])]),t._v("使用向量的距离来定义不同采样点的权重：")]),t._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("msub",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Π")]),a("mi",[t._v("x")])],1),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("z")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("=")]),a("mi",[t._v("exp")]),a("mo",[t._v("⁡")]),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("(")]),a("mo",[t._v("−")]),a("mi",[t._v("D")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("x")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("z")]),a("msup",[a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mn",[t._v("2")])],1),a("mi",{attrs:{mathvariant:"normal"}},[t._v("/")]),a("msup",[a("mi",[t._v("σ")]),a("mn",[t._v("2")])],1),a("mo",{attrs:{fence:"true"}},[t._v(")")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\Pi_{x}(z)=\\exp \\left(-D(x, z)^{2} / \\sigma^{2}\\right)\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("Π")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("x")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.2141179999999998em","vertical-align":"-0.35001em"}}),a("span",{staticClass:"mop"},[t._v("exp")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size1"},[t._v("(")])]),a("span",{staticClass:"mord"},[t._v("−")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"mclose"},[a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8641079999999999em"}},[a("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("2")])])])])])])])])]),a("span",{staticClass:"mord"},[t._v("/")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("σ")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8641079999999999em"}},[a("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("2")])])])])])])])])]),a("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size1"},[t._v(")")])])])])])])])]),t._v(" "),a("p",[t._v("D可以是任何的距离函数，比如对于文本数据，使用cosine距离，对于图像数据，使用L2距离。")]),t._v(" "),a("p",[t._v("然后，最终的L可以就设计成一个"),a("strong",[t._v("带权重的最小二乘损失")]),t._v("：")]),t._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("mi",{attrs:{mathvariant:"script"}},[t._v("L")]),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("(")]),a("mi",[t._v("f")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("g")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msub",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Π")]),a("mi",[t._v("x")])],1),a("mo",{attrs:{fence:"true"}},[t._v(")")])],1),a("mo",[t._v("=")]),a("munder",[a("mo",[t._v("∑")]),a("mrow",[a("mi",[t._v("z")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msup",[a("mi",[t._v("z")]),a("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1),a("mo",[t._v("∈")]),a("mi",{attrs:{mathvariant:"script"}},[t._v("Z")])],1)],1),a("msub",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Π")]),a("mi",[t._v("x")])],1),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("z")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("msup",[a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("(")]),a("mi",[t._v("f")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("z")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("−")]),a("mi",[t._v("g")]),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("(")]),a("msup",[a("mi",[t._v("z")]),a("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1),a("mo",{attrs:{fence:"true"}},[t._v(")")])],1),a("mo",{attrs:{fence:"true"}},[t._v(")")])],1),a("mn",[t._v("2")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mathcal{L}\\left(f, g, \\Pi_{x}\\right)=\\sum_{z, z^{\\prime} \\in \\mathcal{Z}} \\Pi_{x}(z)\\left(f(z)-g\\left(z^{\\prime}\\right)\\right)^{2}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathcal"},[t._v("L")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("Π")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("x")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[t._v(")")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.480449em","vertical-align":"-1.430444em"}}),a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.050005em"}},[a("span",{staticStyle:{top:"-1.8556639999999998em","margin-left":"0em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"mpunct mtight"},[t._v(",")]),a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.6828285714285715em"}},[a("span",{staticStyle:{top:"-2.786em","margin-right":"0.07142857142857144em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),a("span",{staticClass:"sizing reset-size3 size1 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])]),a("span",{staticClass:"mrel mtight"},[t._v("∈")]),a("span",{staticClass:"mord mathcal mtight",staticStyle:{"margin-right":"0.07944em"}},[t._v("Z")])])])]),a("span",{staticStyle:{top:"-3.0500049999999996em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),a("span",[a("span",{staticClass:"mop op-symbol large-op"},[t._v("∑")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.430444em"}},[a("span")])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("Π")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("x")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.801892em"}},[a("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])]),a("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[t._v(")")])]),a("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[t._v(")")])]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.0059em"}},[a("span",{staticStyle:{top:"-3.254792em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("2")])])])])])])])])])])])])])]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v("📢，这里的z'是转化后的数据，z是原始数据。即g的输入是转换后的可解释的数据表示，它要逼近的目标是原始模型在原始数据上的输出。")]),t._v(" "),a("p",[t._v("对于复杂度的话，本文使用了一种近似的更简单的方法：先用LASSO算法来控制线性模型的非零特征个数，再直接优化上面的L即可。")]),t._v(" "),a("p",[t._v("我再画一个图来示意LIME的训练过程：\n"),a("img",{attrs:{src:"https://gitee.com/beyond_guo/typora_pics/raw/master/typora/20210630132649.png",alt:"image-20210630132649900"}})]),t._v(" "),a("p",[t._v("重点注意：")]),t._v(" "),a("ul",[a("li",[t._v("这里g和f使用的训练数据是不同的，但我们希望他们的输出结果是逼近的。")]),t._v(" "),a("li",[t._v("我们是针对"),a("strong",[t._v("一个样本")]),t._v("进行解释，即给定一个样本，解释为什么模型这样预测。")]),t._v(" "),a("li",[t._v("先“转换”，再“转换回来”。")])]),t._v(" "),a("p",[t._v("理解了上面这个图，我们就发现本文的思路其实挺简单的，没那么玄乎。")]),t._v(" "),a("h2",{attrs:{id:"对一个样本的预测进行解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对一个样本的预测进行解释"}},[t._v("#")]),t._v(" 对一个样本的预测进行解释")]),t._v(" "),a("p",[t._v("训练完成后，最终得到的g，只有少数几个最重要的特征，因此解释性、可理解性很强。g的各个w可以可视化出来，看出不同特征的贡献程度。比如下面的例子：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/beyond_guo/typora_pics/raw/master/typora/20210630132408.png",alt:"image-20210630132408816"}})]),t._v(" "),a("p",[t._v("通过对两个模型，在同一个样本上的解释，我们可以发现第一个模型解释性更好，因为找到了正确的特征。而第二个模型找到的特征是错误的，这是由于训练集中的偏差导致的。")]),t._v(" "),a("p",[t._v("对于图像分类问题，也是类似的：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/beyond_guo/typora_pics/raw/master/typora/20210630133023.png",alt:"image-20210630133023569"}})]),t._v(" "),a("p",[t._v("上图的结果，是通过对g的"),a("strong",[t._v("正权重")]),t._v("对应的区域进行高亮。从而可以解释为什么模型预测出了相应的类别。")]),t._v(" "),a("h2",{attrs:{id:"一个怎么够"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个怎么够"}},[t._v("#")]),t._v(" 一个怎么够？")]),t._v(" "),a("p",[t._v("上面的内容，都是只针对一个样本的预测结果进行解释。然而，要判断模型的可靠性，我们往往需要检查很多的样本，这就很费事了。")]),t._v(" "),a("p",[t._v("因此，作者还思考了，如何用最高的效率，检查最少的样本，就能够最全面地检查模型的可靠性。")]),t._v(" "),a("p",[t._v("具体的方法，我暂时不关心，所以就不讲了。下图给出了一个大致的思路：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/beyond_guo/typora_pics/raw/master/typora/20210630133609.png",alt:"image-20210630133609684"}})]),t._v(" "),a("p",[t._v("即，我们挑选最少的样本，让他们对特征空间的覆盖程度最大。具体的算法感兴趣的话去看论文吧。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("以上就是我对论文中自认为最重要的内容的解读了。这个文章其实还挺丰富的，细节很多（虽然我也没看完），还是很值得借鉴的。")]),t._v(" "),a("p",[t._v("相关链接🔗：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://arxiv.org/pdf/1602.04938v1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("论文"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.oreilly.com/content/introduction-to-local-interpretable-model-agnostic-explanations-lime/",target:"_blank",rel:"noopener noreferrer"}},[t._v("作者亲自的解读（没我的清楚）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/marcotcr/lime",target:"_blank",rel:"noopener noreferrer"}},[t._v("github，已经封装了成熟的Python包，可直接调用"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("等我后面有需要的时候具体调用一下，看看体验如何。")])])}),[],!1,null,null,null);s.default=e.exports}}]);