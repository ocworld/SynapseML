"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[7302],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),f=r,b=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(3117),r=a(7294),o=a(2389),l=a(3060),s=a(6010),i="tabItem_LplD";function c(e){var t,a,o,c=e.lazy,u=e.block,p=e.defaultValue,m=e.values,f=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),d=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.lx)(d,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===p?p:null!=(t=null!=p?p:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==w&&!d.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+d.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.UB)(),k=h.tabGroupChoices,g=h.setTabGroupChoices,T=(0,r.useState)(w),V=T[0],O=T[1],_=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var N=k[f];null!=N&&N!==V&&d.some((function(e){return e.value===N}))&&O(N)}var Z=function(e){var t=e.currentTarget,a=_.indexOf(t),n=d[a].value;n!==V&&(C(t),O(n),null!=f&&g(f,n))},z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=_.indexOf(e.currentTarget)+1;a=_[n]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;a=_[r]||_[_.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},b)},d.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:V===t?0:-1,"aria-selected":V===t,key:t,ref:function(e){return _.push(e)},onKeyDown:z,onFocus:Z,onClick:Z},o,{className:(0,s.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":V===t})}),null!=a?a:t)}))),c?(0,r.cloneElement)(v.filter((function(e){return e.props.value===V}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==V})}))))}function u(e){var t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},1989:function(e,t,a){var n=a(7294),r=a(2263);t.Z=function(e){var t=e.className,a=e.py,o=e.scala,l=e.sourceLink,s=(0,r.Z)().siteConfig.customFields.version,i="https://mmlspark.blob.core.windows.net/docs/"+s+"/pyspark/"+a,c="https://mmlspark.blob.core.windows.net/docs/"+s+"/scala/"+o;return n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("strong",null,"Python API: "),n.createElement("a",{href:i},t)),n.createElement("td",null,n.createElement("strong",null,"Scala API: "),n.createElement("a",{href:c},t)),n.createElement("td",null,n.createElement("strong",null,"Source: "),n.createElement("a",{href:l},t)))))}},3624:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return k},frontMatter:function(){return b},metadata:function(){return d},toc:function(){return w}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),l=a(9877),s=a(8215),i=a(1989),c=["components"],u=[{value:"VectorZipper",id:"vectorzipper",level:2},{value:"VowpalWabbitClassifier",id:"vowpalwabbitclassifier",level:2},{value:"VowpalWabbitFeaturizer",id:"vowpalwabbitfeaturizer",level:2},{value:"VowpalWabbitInteractions",id:"vowpalwabbitinteractions",level:2}],p={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vectorzipper"},"VectorZipper"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\ndf = spark.createDataFrame([\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f")\n], ["action1", "action2"])\n\nactionOneFeaturizer = (VowpalWabbitFeaturizer()\n    .setInputCols(["action1"])\n    .setOutputCol("sequence_one"))\n\nactionTwoFeaturizer = (VowpalWabbitFeaturizer()\n    .setInputCols(["action2"])\n    .setOutputCol("sequence_two"))\n\nseqDF = actionTwoFeaturizer.transform(actionOneFeaturizer.transform(df))\n\nvectorZipper = (VectorZipper()\n    .setInputCols(["sequence_one", "sequence_two"])\n    .setOutputCol("out"))\n\ndisplay(vectorZipper.transform(seqDF))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\n\nval df = (Seq(\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f")\n    ).toDF("action1", "action2"))\n\nval actionOneFeaturizer = (new VowpalWabbitFeaturizer()\n    .setInputCols(Array("action1"))\n    .setOutputCol("sequence_one"))\n\nval actionTwoFeaturizer = (new VowpalWabbitFeaturizer()\n    .setInputCols(Array("action2"))\n    .setOutputCol("sequence_two"))\n\nval seqDF = actionTwoFeaturizer.transform(actionOneFeaturizer.transform(df))\n\nval vectorZipper = (new VectorZipper()\n    .setInputCols(Array("sequence_one", "sequence_two"))\n    .setOutputCol("out"))\n\ndisplay(vectorZipper.transform(seqDF))\n')))),(0,o.kt)(i.Z,{className:"VectorZipper",py:"synapse.ml.vw.html#module-synapse.ml.vw.VectorZipper",scala:"com/microsoft/azure/synapse/ml/vw/VectorZipper.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VectorZipper.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"vowpalwabbitclassifier"},"VowpalWabbitClassifier"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.vw import *\n\nvw = (VowpalWabbitClassifier()\n      .setNumBits(10)\n      .setLearningRate(3.1)\n      .setPowerT(0)\n      .setLabelConversion(False))\n"))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import com.microsoft.azure.synapse.ml.vw._\n\nval vw = (new VowpalWabbitClassifier()\n      .setNumBits(10)\n      .setLearningRate(3.1)\n      .setPowerT(0)\n      .setLabelConversion(false))\n")))),(0,o.kt)(i.Z,{className:"VowpalWabbitClassifier",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitClassifier",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitClassifier.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitClassifier.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"vowpalwabbitfeaturizer"},"VowpalWabbitFeaturizer"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\nfeaturizer = (VowpalWabbitFeaturizer()\n      .setStringSplitInputCols(["in"])\n      .setPreserveOrderNumBits(2)\n      .setNumBits(18)\n      .setPrefixStringsWithColumnName(False)\n      .setOutputCol("features"))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\n\nval featurizer = (new VowpalWabbitFeaturizer()\n      .setStringSplitInputCols(Array("in"))\n      .setPreserveOrderNumBits(2)\n      .setNumBits(18)\n      .setPrefixStringsWithColumnName(false)\n      .setOutputCol("features"))\n')))),(0,o.kt)(i.Z,{className:"VowpalWabbitFeaturizer",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitFeaturizer",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitFeaturizer.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitFeaturizer.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"vowpalwabbitinteractions"},"VowpalWabbitInteractions"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\ninteractions = (VowpalWabbitInteractions()\n    .setInputCols(["v1"])\n    .setOutputCol("out"))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\nimport org.apache.spark.ml.linalg._\n\ncase class Data(v1: Vector, v2: Vector, v3: Vector)\n\nval df = spark.createDataFrame(Seq(Data(\n  Vectors.dense(Array(1.0, 2.0, 3.0)),\n  Vectors.sparse(8, Array(5), Array(4.0)),\n  Vectors.sparse(11, Array(8, 9), Array(7.0, 8.0))\n)))\n\nval interactions = (new VowpalWabbitInteractions()\n    .setInputCols(Array("v1"))\n    .setOutputCol("out"))\n\ndisplay(interactions.transform(df))\n')))),(0,o.kt)(i.Z,{className:"VowpalWabbitInteractions",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitInteractions",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitInteractions.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitInteractions.scala",mdxType:"DocTable"}))}m.isMDXComponent=!0;var f=["components"],b={title:"Transformers - Vowpal Wabbit",sidebar_label:"Vowpal Wabbit",hide_title:!0},v="Vowpal Wabbit",d={unversionedId:"documentation/transformers/transformers_vw",id:"version-0.9.4/documentation/transformers/transformers_vw",title:"Transformers - Vowpal Wabbit",description:"",source:"@site/versioned_docs/version-0.9.4/documentation/transformers/transformers_vw.md",sourceDirName:"documentation/transformers",slug:"/documentation/transformers/transformers_vw",permalink:"/SynapseML/docs/0.9.4/documentation/transformers/transformers_vw",tags:[],version:"0.9.4",frontMatter:{title:"Transformers - Vowpal Wabbit",sidebar_label:"Vowpal Wabbit",hide_title:!0},sidebar:"version-0.9.4/docs",previous:{title:"OpenCV",permalink:"/SynapseML/docs/0.9.4/documentation/transformers/transformers_opencv"},next:{title:"Deep Learning",permalink:"/SynapseML/docs/0.9.4/documentation/transformers/transformers_deep_learning"}},y={},w=[].concat(u),h={toc:w};function k(e){var t=e.components,a=(0,r.Z)(e,f);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vowpal-wabbit"},"Vowpal Wabbit"),(0,o.kt)(m,{mdxType:"VW"}))}k.isMDXComponent=!0}}]);