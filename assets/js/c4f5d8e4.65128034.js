/*! For license information please see c4f5d8e4.65128034.js.LICENSE.txt */
(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4195],{1332:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5386:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(4034),r=n(7294),o=n(2389),l=n(8578);var s=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(9558),c=n(6010),u="tabItem_2kG2";function p(e){var t,n,a,o=e.lazy,l=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,i.lx)(y,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==v&&!y.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=s(),k=b.tabGroupChoices,E=b.setTabGroupChoices,S=(0,r.useState)(v),N=S[0],_=S[1],T=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var w=k[d];null!=w&&w!==N&&y.some((function(e){return e.value===w}))&&_(w)}var Z=function(e){var t=e.currentTarget,n=T.indexOf(t),a=y[n].value;a!==N&&(C(t),_(a),null!=d&&E(d,a))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},f)},y.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":N===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:L,onFocus:Z,onClick:Z},null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},7985:function(e,t,n){"use strict";function a(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var l=document.getSelection(),s=!1;l.rangeCount>0&&(s=l.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(c){}return r.remove(),s&&(l.removeAllRanges(),l.addRange(s)),o&&o.focus(),i}n.d(t,{Z:function(){return a}})},2090:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(4034),r=n(7294),o=n(4184),l=n.n(o),s=n(842),i=n(6742),c=n(2263),u=n(4996),p={heroBanner:"heroBanner_1ZBZ",getStarted:"getStarted_3Wu-",buttons:"buttons_irzW",announcement:"announcement_1KkN",announcementDark:"announcementDark_32Yk",announcementInner:"announcementInner_2lxV",features:"features_N601",featureImage:"featureImage_3Q9E",heroImg:"heroImg_3nx1",configSnippet:"configSnippet_3M1N",configSnippets:"configSnippets_1tqa",pitch:"pitch_3jWu",loveSection:"loveSection_3CB0",loveSectionPlea:"loveSectionPlea_2KZu",loveImg:"loveImg_Xfpg",sponsorLink:"sponsorLink_CvBl",microsoftImg:"microsoftImg_3VH5",theMetImg:"theMetImg_1OdZ",mitImg:"mitImg_3uK1"},m="codeSnippet_2bdY",d=n(7356),f=n(4544),g=n(1354),y=n.n(g);var h=function(e){var t=(0,c.Z)().siteConfig.themeConfig.prism,n=void 0===t?{}:t,o=(0,r.useState)(!1),l=o[0],s=o[1];(0,r.useEffect)((function(){s(!0)}),[]);var i=(0,d.Z)().isDarkTheme,u=n.theme||y(),p=n.darkTheme||u,g=i?p:u,h=e.lang,v=void 0===h?"yaml":h,b=e.snippet;return r.createElement(f.ZP,(0,a.Z)({},f.lG,{key:l,theme:g,code:b,language:v}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.createElement("pre",{className:t+" "+m,style:n},a.map((function(e,t){return r.createElement("div",o({line:e,key:t}),e.map((function(e,t){return r.createElement("span",l({token:e,key:t}))})))})))}))},v=n(6010),b=n(7985),k=n(4973),E="codeBlockContainer_2PVH",S="codeBlockContent_RTOw",N="copyButton_39Rb",_="furtherButton_3DCU";var T=function(e){var t=(0,c.Z)().siteConfig.themeConfig.prism,n=void 0===t?{}:t,o=(0,r.useState)(!1),l=o[0],s=o[1],u=(0,r.useState)(!1),p=u[0],m=u[1];(0,r.useEffect)((function(){m(!0)}),[]);var g=(0,d.Z)().isDarkTheme,h=n.theme||y(),T=n.darkTheme||h,C=g?T:h,w=(0,r.useRef)(null),Z=e.lang,L=void 0===Z?"python":Z,P=e.config,x=e.copyBit,D=e.further,I=x||P,M=function(){(0,b.Z)(I),s(!0),setTimeout((function(){return s(!1)}),2e3)};return r.createElement(f.ZP,(0,a.Z)({},f.lG,{key:p,theme:C,code:P,language:L}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return r.createElement("div",{className:E},r.createElement("div",{className:(0,v.Z)(S,L)},r.createElement("pre",{className:""+t,style:n},a.map((function(e,t){return r.createElement("div",o({line:e,key:t}),e.map((function(e,t){return r.createElement("span",s({token:e,key:t}))})))}))),r.createElement("button",{ref:w,type:"button","aria-label":(0,k.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,v.Z)(N,"clean-btn"),onClick:M},l?r.createElement(k.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(k.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy")),D&&r.createElement(i.Z,{className:(0,v.Z)(_,"button button--outline button--primary"),to:D},"Read more")))}))},C=n(5386),w=n(1332),Z=[{label:"Cognitive Services",further:"docs/features/cognitive_services/CognitiveServices%20-%20Overview#text-analytics-sample",config:'from synapse.ml.cognitive import *\n\nsentiment_df = (TextSentiment()\n    .setTextCol("text")\n    .setLocation("eastus")\n    .setSubscriptionKey(key)\n    .setOutputCol("sentiment")\n    .setErrorCol("error")\n    .setLanguageCol("language")\n    .transform(input_df))'},{label:"Deep Learning",further:"docs/features/onnx/ONNX%20-%20Inference%20on%20Spark",config:'from synapse.ml.onnx import *\n\nmodel_prediction_df = (ONNXModel()\n    .setModelPayload(model_payload_ml)\n    .setDeviceType("CPU")\n    .setFeedDict({"input": "features"})\n    .setFetchDict({"probability": "probabilities", "prediction": "label"})\n    .setMiniBatchSize(64)\n    .transform(input_df))'},{label:"Responsible AI",further:"docs/features/responsible_ai/Model%20Interpretation%20on%20Spark",config:'from synapse.ml.explainers import *\n    \ninterpretation_df = (TabularSHAP()\n    .setInputCols(features)\n    .setOutputCol("shapValues")\n    .setTargetCol("probability")\n    .setTargetClasses([1])\n    .setNumSamples(5000)\n    .setModel(model)\n    .transform(input_df))'},{label:"LightGBM",further:"docs/features/lightgbm/about",config:"from synapse.ml.lightgbm import *\n    \nquantile_df = (LightGBMRegressor()\n    .setApplication('quantile')\n    .setAlpha(0.3)\n    .setLearningRate(0.3)\n    .setNumIterations(100)\n    .setNumLeaves(31)\n    .fit(train_df)\n    .transform(test_df))"},{label:"OpenCV",further:"docs/features/opencv/OpenCV%20-%20Pipeline%20Image%20Transformations",config:'from synapse.ml.opencv import *\n\nimage_df = (ImageTransformer()\n    .setInputCol("images")\n    .setOutputCol("transformed_images")\n    .resize(224, True)\n    .centerCrop(224, 224)\n    .normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225], color_scale_factor = 1/255)\n    .transform(input_df))'}],L=[{title:"Simple",imageUrl:"img/simple.svg",description:r.createElement(r.Fragment,null,r.createElement("p",null,"Quickly create, train, and use distributed machine learning tools in only a few lines of code."))},{title:"Scalable",imageUrl:"img/scalable.svg",description:r.createElement(r.Fragment,null,r.createElement("p",null,"Scale ML workloads to hundreds of machines on your"," ",r.createElement("a",{href:"https://spark.apache.org/"},"Apache Spark")," cluster."))},{title:"Multilingual",imageUrl:"img/multilingual.svg",description:r.createElement(r.Fragment,null,r.createElement("p",null,"Use SynapseML from any Spark compatible language including Python, Scala, R, Java, .NET and C#."))},{title:"Open",imageUrl:"img/open_source.svg",description:r.createElement(r.Fragment,null,r.createElement("p",null,"SynapseML is Open Source and can be installed and used on any Spark 3 infrastructure including your local machine, Databricks, Synapse Analytics, and others."))}];function P(e){var t=e.imageUrl,n=e.title,a=e.description,o=(0,u.Z)(t);return r.createElement("div",{className:l()("col col--6",p.feature)},o&&r.createElement("div",{className:"text--center"},r.createElement("img",{className:l()("padding-vert--md",p.featureImage),src:o,alt:n})),r.createElement("h3",null,n),r.createElement("p",null,a))}var x=function(){var e=(0,c.Z)().siteConfig,t=void 0===e?{}:e;return r.createElement(s.Z,{title:""+t.title,description:"Simple and Distributed Machine Learning",keywords:["SynapseML","Machine Learning"]},r.createElement("header",{className:l()("hero",p.heroBanner)},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:l()("col col--5 col--offset-1")},r.createElement("h1",{className:"hero__title"},t.title),r.createElement("p",{className:"hero__subtitle"},t.tagline),r.createElement("div",{className:p.buttons},r.createElement(i.Z,{className:l()("button button--outline button--primary button--lg",p.getStarted),to:(0,u.Z)("docs/getting_started/installation")},"Get Started"))),r.createElement("div",{className:l()("col col--5")},r.createElement("img",{className:p.heroImg,src:(0,u.Z)("img/logo.svg")}))))),r.createElement("main",null,r.createElement("div",{className:"container"},r.createElement("div",{className:(0,v.Z)(p.announcement,p.announcementDark)},r.createElement("div",{className:p.announcementInner},"Coming from ",r.createElement("a",{href:"https://mmlspark.blob.core.windows.net/website/index.html"},"MMLSpark"),"? We have been renamed to SynapseML!"))),r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:l()("col col--12")},Z&&Z.length&&r.createElement("section",{className:p.configSnippets},r.createElement(C.Z,{defaultValue:Z[0].label,values:Z.map((function(e,t){return{label:e.label,value:e.label}}))},Z.map((function(e,t){return r.createElement(w.Z,{key:t,value:e.label},r.createElement(T,(0,a.Z)({className:p.configSnippet},e)))}))))))),L&&L.length&&r.createElement("section",{className:p.features},r.createElement("div",{className:"container margin-vert--md"},r.createElement("div",{className:"row"},L.map((function(e,t){return r.createElement(P,(0,a.Z)({key:t},e))}))))),r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:l()(p.pitch+" col")},r.createElement("h2",null,"Installation"),r.createElement("p",null,"Written in Scala, and support multiple languages."," ",r.createElement("a",{href:"https://github.com/microsoft/SynapseML"},"Open source")," ","and cloud native."),r.createElement("p",null,"Note: SynpaseML will be built-in for"," ",r.createElement("a",{href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/spark/apache-spark-3-runtime"},"Azure Synapse soon.")),r.createElement(C.Z,{defaultValue:"Synapse",values:[{label:"Synapse",value:"Synapse"},{label:"Spark Packages",value:"Spark Packages"},{label:"Databricks",value:"Databricks"},{label:"Docker",value:"Docker"},{label:"Python",value:"Python"},{label:"SBT",value:"SBT"}]},r.createElement(w.Z,{value:"Synapse"},"SynapseML can be conveniently installed on Synapse:",r.createElement(h,{snippet:'%%configure -f\n{\n  "name": "synapseml",\n  "conf": {\n      "spark.jars.packages": "com.microsoft.azure:synapseml:0.9.2",\n      "spark.jars.repositories": "https://mmlspark.azureedge.net/maven",\n      "spark.jars.excludes": "org.scala-lang:scala-reflect,org.apache.spark:spark-tags_2.12,org.scalactic:scalactic_2.12,org.scalatest:scalatest_2.12",\n      "spark.yarn.user.classpath.first": "true"\n  }\n}',lang:"bash"}),"Please also include `synapseml==0.9.2` in your requirements.txt file for usage of PySpark. [",r.createElement("a",{href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/spark/apache-spark-manage-python-packages#pool-libraries"},"Install Python libraries in Synapse"),"]"),r.createElement(w.Z,{value:"Spark Packages"},"SynapseML can be conveniently installed on existing Spark clusters via the --packages option, examples:",r.createElement(h,{snippet:"spark-shell --packages com.microsoft.azure:synapseml:0.9.2\npyspark --packages com.microsoft.azure:synapseml:0.9.2\nspark-submit --packages com.microsoft.azure:synapseml:0.9.2 MyApp.jar",lang:"bash"}),"This can be used in other Spark contexts too. For example, you can use SynapseML in"," ",r.createElement("a",{href:"https://github.com/Azure/aztk/"},"AZTK")," by adding it to the"," ",r.createElement("a",{href:"https://github.com/Azure/aztk/wiki/PySpark-on-Azure-with-AZTK#optional-set-up-mmlspark"},".aztk/spark-defaults.conf file"),"."),r.createElement(w.Z,{value:"Databricks"},r.createElement("p",null,"To install SynapseML on the"," ",r.createElement("a",{href:"http://community.cloud.databricks.com"},"Databricks cloud"),", create a new"," ",r.createElement("a",{href:"https://docs.databricks.com/user-guide/libraries.html#libraries-from-maven-pypi-or-spark-packages"},"library from Maven coordinates")," ","in your workspace. in your workspace."),r.createElement("p",null,"For the coordinates use:",r.createElement(h,{snippet:"com.microsoft.azure:synapseml:0.9.2",lang:"bash"}),"with the resolver:",r.createElement(h,{snippet:"https://mmlspark.azureedge.net/maven",lang:"bash"}),"Ensure this library is attached to your target cluster(s)."),r.createElement("p",null,"Finally, ensure that your Spark cluster has at least Spark 2.4 and Scala 2.11."),"You can use SynapseML in both your Scala and PySpark notebooks. To get started with our example notebooks import the following databricks archive:",r.createElement(h,{snippet:"https://mmlspark.blob.core.windows.net/dbcs/SynapseMLExamplesv0.9.2.dbc",lang:"bash"})),r.createElement(w.Z,{value:"Docker"},"The easiest way to evaluate SynapseML is via our pre-built Docker container. To do so, run the following command:",r.createElement(h,{snippet:"docker run -it -p 8888:8888 -e ACCEPT_EULA=yes mcr.microsoft.com/mmlspark/release",lang:"bash"}),r.createElement("p",null,"Navigate to"," ",r.createElement("a",{href:"http://localhost:8888"},"http://localhost:8888")," in your web browser to run the sample notebooks. See the"," ",r.createElement("a",{href:"https://github.com/microsoft/SynapseML/blob/master/docs/docker.md"},"documentation")," ","for more on Docker use."),"To read the EULA for using the docker image, run",r.createElement(h,{snippet:"docker run -it -p 8888:8888 mcr.microsoft.com/mmlspark/release eula",lang:"bash"})),r.createElement(w.Z,{value:"Python"},"To try out SynapseML on a Python (or Conda) installation you can get Spark installed via pip with",r.createElement(h,{snippet:"pip install pyspark",lang:"bash"}),"You can then use pyspark as in the above example, or from python:",r.createElement(h,{snippet:'import pyspark\nspark = pyspark.sql.SparkSession.builder.appName("MyApp")\n        .config("spark.jars.packages", "com.microsoft.azure:synapseml:0.9.2")\n        .config("spark.jars.repositories", "https://mmlspark.azureedge.net/maven")\n        .getOrCreate()\nimport synapse.ml',lang:"python"})),r.createElement(w.Z,{value:"SBT"},"If you are building a Spark application in Scala, add the following lines to your build.sbt:",r.createElement(h,{snippet:'resolvers += "SynapseML" at "https://mmlspark.azureedge.net/maven"\nlibraryDependencies += "com.microsoft.azure" %% "synapseml" % "0.9.2"',lang:"jsx"}))))))))}},1354:function(e){e.exports={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["comment"],style:{color:"rgb(136, 132, 111)"}},{types:["string","changed"],style:{color:"rgb(230, 219, 116)"}},{types:["punctuation","tag","deleted"],style:{color:"rgb(249, 38, 114)"}},{types:["number","builtin"],style:{color:"rgb(174, 129, 255)"}},{types:["variable"],style:{color:"rgb(248, 248, 242)"}},{types:["function","attr-name","inserted"],style:{color:"rgb(166, 226, 46)"}}]}},4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)a.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},4544:function(e,t,n){"use strict";n.d(t,{ZP:function(){return g},lG:function(){return l}});var a=n(7410),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(7294),l={Prism:a.default,theme:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function d(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=i({},d(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?i({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),s(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,s=[],i=[s];l>-1;){for(;(o=a[l]++)<r[l];){var m=void 0,d=t[l],f=n[l][o];if("string"==typeof f?(d=l>0?d:["plain"],m=f):(d=p(d,f.type),f.alias&&(d=p(d,f.alias)),m=f.content),"string"==typeof m){var g=m.split(c),y=g.length;s.push({types:d,content:g[0]});for(var h=1;h<y;h++)u(s),i.push(s=[]),s.push({types:d,content:g[h]})}else l++,t.push(d),n.push(m),a.push(0),r.push(m.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return u(s),i}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),g=f}}]);