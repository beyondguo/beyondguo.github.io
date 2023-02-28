(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{426:function(s,t,a){"use strict";a.r(t);var n=a(44),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("「Huggingface🤗NLP笔记系列-第1集」\n最近跟着Huggingface上的NLP tutorial走了一遍，惊叹居然有如此好的讲解Transformers系列的NLP教程，于是决定记录一下学习的过程，分享我的笔记，可以算是官方教程的精简版。但最推荐的，还是直接跟着官方教程来一遍，真是一种享受。")])]),s._v(" "),a("ul",[a("li",[s._v("官方教程网址：https://huggingface.co/course/chapter1")]),s._v(" "),a("li",[s._v("本期内容对应网址：https://huggingface.co/course/chapter1/3?fw=pt")]),s._v(" "),a("li",[s._v("本系列笔记的GitHub： https://github.com/beyondguo/Learn_PyTorch/tree/master/HuggingfaceNLP")])]),s._v(" "),a("hr"),s._v(" "),a("h1",{attrs:{id:"直接使用pipeline工具做nlp任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接使用pipeline工具做nlp任务"}},[s._v("#")]),s._v(" 直接使用Pipeline工具做NLP任务")]),s._v(" "),a("p",[a("code",[s._v("Pipeline")]),s._v("是Huggingface的一个基本工具，可以理解为一个端到端(end-to-end)的一键调用Transformer模型的工具。它具备了数据预处理、模型处理、模型输出后处理等步骤，可以直接输入原始数据，然后给出预测结果，十分方便。")]),s._v(" "),a("p",[s._v("给定一个任务之后，pipeline会自动调用一个预训练好的模型，然后根据你给的输入执行下面三个步骤：")]),s._v(" "),a("ol",[a("li",[s._v("预处理输入文本，让它可被模型读取")]),s._v(" "),a("li",[s._v("模型处理")]),s._v(" "),a("li",[s._v("模型输出的后处理，让预测结果可读")])]),s._v(" "),a("p",[s._v("一个例子如下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" transformers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pipeline\n\nclf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sentiment-analysis'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nclf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Haha, today is a nice day!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("输出：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'label'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POSITIVE'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'score'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9998709559440613")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("还可以"),a("strong",[s._v("直接接受多个句子")]),s._v("，一起预测：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("clf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'good'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nice'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bad'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'label'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POSITIVE'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'score'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9998160600662231")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'label'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POSITIVE'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'score'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9998552799224854")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'label'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NEGATIVE'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'score'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.999782383441925")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("pipeline支持的"),a("strong",[s._v("task")]),s._v("包括：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v('"feature-extraction"')]),s._v(": will return a FeatureExtractionPipeline.")]),s._v(" "),a("li",[a("code",[s._v('"text-classification"')]),s._v(": will return a TextClassificationPipeline.")]),s._v(" "),a("li",[a("code",[s._v('"sentiment-analysis"')]),s._v(': (alias of "text-classification") will return a TextClassificationPipeline.')]),s._v(" "),a("li",[a("code",[s._v('"token-classification"')]),s._v(": will return a TokenClassificationPipeline.")]),s._v(" "),a("li",[a("code",[s._v('"ner"')]),s._v(' (alias of "token-classification"): will return a TokenClassificationPipeline.')]),s._v(" "),a("li",[a("code",[s._v('"question-answering"')]),s._v(": will return a QuestionAnsweringPipeline.")]),s._v(" "),a("li",[a("code",[s._v('"fill-mask"')]),s._v(": will return a FillMaskPipeline.")]),s._v(" "),a("li",[a("code",[s._v('"summarization"')]),s._v(": will return a SummarizationPipeline.")]),s._v(" "),a("li",[a("code",[s._v('"translation_xx_to_yy"')]),s._v(": will return a TranslationPipeline.")]),s._v(" "),a("li",[a("code",[s._v('"text2text-generation"')]),s._v(": will return a Text2TextGenerationPipeline.")]),s._v(" "),a("li",[a("code",[s._v('"text-generation"')]),s._v(": will return a TextGenerationPipeline.")]),s._v(" "),a("li",[a("code",[s._v('"zero-shot-classification"')]),s._v(": will return a ZeroShotClassificationPipeline.")]),s._v(" "),a("li",[a("code",[s._v('"conversational"')]),s._v(": will return a ConversationalPipeline.")])]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("下面可以可以来试试用pipeline直接来做一些任务：")]),s._v(" "),a("h2",{attrs:{id:"have-a-try-zero-shot-classification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#have-a-try-zero-shot-classification"}},[s._v("#")]),s._v(" Have a try: Zero-shot-classification")]),s._v(" "),a("p",[s._v("零样本学习，就是训练一个可以预测任何标签的模型，这些标签可以不出现在训练集中。")]),s._v(" "),a("p",[s._v("一种零样本学习的方法，就是通过NLI（文本蕴含）任务，训练一个推理模型，比如这个例子：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("premise "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Who are you voting for in 2020?'")]),s._v("\nhypothesis "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'This text is about politics.'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面有一个前提(premise)和一个假设(hypothesis)，NLI任务就是去预测，在这个premise下，hypothesis是否成立。")]),s._v(" "),a("blockquote",[a("p",[s._v("NLI (natural language inference)任务：it classifies if two sentences are logically linked across three labels (contradiction, neutral, entailment).")])]),s._v(" "),a("p",[s._v("通过这样的训练，我们可以直接把hypothesis中的politics换成其他词儿，就可以实现zero-shot-learning了。而Huggingface pipeline中的零样本学习，使用的就是在NLI任务上预训练好的模型。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("clf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zero-shot-classification'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nclf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sequences"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A helicopter is flying in the sky"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n               "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A bird is flying in the sky"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    candidate_labels"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'animal'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'machine'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# labels可以完全自定义")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("输出：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sequence'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A helicopter is flying in the sky'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'labels'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'machine'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'animal'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scores'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9938627481460571")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.006137280724942684")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sequence'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A bird is flying in the sky'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'labels'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'animal'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'machine'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scores'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9987970590591431")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0012029369827359915")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("参考阅读：")]),s._v(" "),a("ul",[a("li",[s._v("官方 Zero-shot-classification Pipeline文档：https://huggingface.co/transformers/main_classes/pipelines.html#transformers.ZeroShotClassificationPipeline")]),s._v(" "),a("li",[s._v("零样本学习简介：https://mp.weixin.qq.com/s/6aBzR0O3pwA8-btsuDX82g")])]),s._v(" "),a("h2",{attrs:{id:"have-a-try-text-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#have-a-try-text-generation"}},[s._v("#")]),s._v(" Have a try: Text Generation")]),s._v(" "),a("p",[s._v("Huggingface pipeline默认的模型都是英文的，比如对于text generation默认使用gpt2，但我们也可以指定Huggingface Hub上其他的text generation模型，这里我找到一个中文的：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("generator "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text-generation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" model"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'liam168/chat-DialoGPT-small-zh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("给一个初始词句开始生产：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("generator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'上午'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'generated_text'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'上午上班吧'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"have-a-try-mask-filling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#have-a-try-mask-filling"}},[s._v("#")]),s._v(" Have a try: Mask Filling")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("unmasker "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fill-mask'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nunmasker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'What the <mask>?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" top_k"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意不同的模型，MASK token可能不一样，不一定都是 <mask>")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("输出：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sequence'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'What the heck?'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'score'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3783760964870453")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'token'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17835")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'token_str'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' heck'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sequence'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'What the hell?'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'score'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.32931089401245117")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'token'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7105")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'token_str'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' hell'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sequence'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'What the fuck?'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'score'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.14645449817180634")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'token'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("26536")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'token_str'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' fuck'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"其他tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他tasks"}},[s._v("#")]),s._v(" 其他Tasks")]),s._v(" "),a("p",[s._v("还有很多其他的pipeline，比如NER，比如summarization，这里就不一一尝试了。")]),s._v(" "),a("p",[s._v("想看官方实例的可以参见： https://huggingface.co/course/chapter1/3?fw=pt")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("总之，我们可以看出，Huggingface提供的pipeline接口，就是一个”拿来即用“的端到端的接口，只要Huggingface Hub上有对应的模型，我们几行代码就可以直接拿来做任务了，真是造福大众啊！")]),s._v(" "),a("p",[s._v("下一篇笔记，会回顾一下Transformer模型的发展和基本架构，让我们对这些工具背后的模型更加了解。")])])}),[],!1,null,null,null);t.default=e.exports}}]);