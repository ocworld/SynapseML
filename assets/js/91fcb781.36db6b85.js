"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[1946],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return d}});var n=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(o),d=l,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return o?n.createElement(f,a(a({ref:t},c),{},{components:o})):n.createElement(f,a({ref:t},c))}));function d(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=o.length,a=new Array(r);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<r;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8993:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=o(3117),l=o(102),r=(o(7294),o(3905)),a=["components"],i={title:"SynapseML Autologging",description:"SynapseML autologging"},s=void 0,p={unversionedId:"mlflow/autologging",id:"mlflow/autologging",title:"SynapseML Autologging",description:"SynapseML autologging",source:"@site/docs/mlflow/autologging.md",sourceDirName:"mlflow",slug:"/mlflow/autologging",permalink:"/SynapseML/docs/next/mlflow/autologging",tags:[],version:"current",frontMatter:{title:"SynapseML Autologging",description:"SynapseML autologging"},sidebar:"docs",previous:{title:"Examples",permalink:"/SynapseML/docs/next/mlflow/examples"},next:{title:"Build System Commands",permalink:"/SynapseML/docs/next/reference/developer-readme"}},c={},u=[{value:"Automatic Logging",id:"automatic-logging",level:2},{value:"Configuration process in Databricks as an example",id:"configuration-process-in-databricks-as-an-example",level:2},{value:"Example for ConditionalKNNModel",id:"example-for-conditionalknnmodel",level:2}],m={toc:u};function d(e){var t=e.components,o=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"automatic-logging"},"Automatic Logging"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.mlflow.org/docs/latest/tracking.html#automatic-logging"},"MLflow automatic logging")," allows you to log metrics, parameters, and models without the need for explicit log statements.\nSynapseML supports autologging for every model in the library."),(0,r.kt)("p",null,"To enable autologging for SynapseML:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download this customized ",(0,r.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/publicwasb/log_model_allowlist.txt"},"log_model_allowlist file")," and put it at a place that your code has access to.\nFor example:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In Synapse ",(0,r.kt)("inlineCode",{parentName:"li"},"wasb://<containername>@<accountname>.blob.core.windows.net/PATH_TO_YOUR/log_model_allowlist.txt")),(0,r.kt)("li",{parentName:"ul"},"In Databricks ",(0,r.kt)("inlineCode",{parentName:"li"},"/dbfs/FileStore/PATH_TO_YOUR/log_model_allowlist.txt"),".")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Set spark configuration ",(0,r.kt)("inlineCode",{parentName:"li"},"spark.mlflow.pysparkml.autolog.logModelAllowlistFile")," to the path of your ",(0,r.kt)("inlineCode",{parentName:"li"},"log_model_allowlist.txt")," file."),(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"mlflow.pyspark.ml.autolog()")," before your training code to enable autologging for all supported models.")),(0,r.kt)("p",null,"Note:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If you want to support autologging of additional PySpark models not in the log_model_allowlist file, you can add models to the file."),(0,r.kt)("li",{parentName:"ol"},"If you've enabled autologging, then please don't write explicit ",(0,r.kt)("inlineCode",{parentName:"li"},"with mlflow.start_run()")," as it might cause multiple runs for one single model or one run for multiple models.")),(0,r.kt)("h2",{id:"configuration-process-in-databricks-as-an-example"},"Configuration process in Databricks as an example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install latest MLflow via ",(0,r.kt)("inlineCode",{parentName:"li"},"%pip install mlflow -u")),(0,r.kt)("li",{parentName:"ol"},"Upload your customized ",(0,r.kt)("inlineCode",{parentName:"li"},"log_model_allowlist.txt")," file to dbfs by clicking File/Upload Data button on Databricks UI."),(0,r.kt)("li",{parentName:"ol"},"Set Cluster Spark configuration following ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/databricks/clusters/configure#spark-configuration"},"this documentation"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spark.mlflow.pysparkml.autolog.logModelAllowlistFile /dbfs/FileStore/PATH_TO_YOUR/log_model_allowlist.txt\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Run the following before your training code, you can also customize corresponding ",(0,r.kt)("a",{parentName:"li",href:"https://www.mlflow.org/docs/latest/python_api/mlflow.pyspark.ml.html#mlflow.pyspark.ml.autolog"},"parameters")," by passing arguments to ",(0,r.kt)("inlineCode",{parentName:"li"},"autolog"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mlflow.pyspark.ml.autolog()\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"To find your experiment's results via the ",(0,r.kt)("inlineCode",{parentName:"li"},"Experiments")," tab of the MLFlow UI.",(0,r.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/adb_experiments.png",width:"1200"}))),(0,r.kt)("h2",{id:"example-for-conditionalknnmodel"},"Example for ConditionalKNNModel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.linalg import Vectors\nfrom synapse.ml.nn import *\n\ndf = spark.createDataFrame([\n    (Vectors.dense(2.0,2.0,2.0), "foo", 1),\n    (Vectors.dense(2.0,2.0,4.0), "foo", 3),\n    (Vectors.dense(2.0,2.0,6.0), "foo", 4),\n    (Vectors.dense(2.0,2.0,8.0), "foo", 3),\n    (Vectors.dense(2.0,2.0,10.0), "foo", 1),\n    (Vectors.dense(2.0,2.0,12.0), "foo", 2),\n    (Vectors.dense(2.0,2.0,14.0), "foo", 0),\n    (Vectors.dense(2.0,2.0,16.0), "foo", 1),\n    (Vectors.dense(2.0,2.0,18.0), "foo", 3),\n    (Vectors.dense(2.0,2.0,20.0), "foo", 0),\n    (Vectors.dense(2.0,4.0,2.0), "foo", 2),\n    (Vectors.dense(2.0,4.0,4.0), "foo", 4),\n    (Vectors.dense(2.0,4.0,6.0), "foo", 2),\n    (Vectors.dense(2.0,4.0,8.0), "foo", 2),\n    (Vectors.dense(2.0,4.0,10.0), "foo", 4),\n    (Vectors.dense(2.0,4.0,12.0), "foo", 3),\n    (Vectors.dense(2.0,4.0,14.0), "foo", 2),\n    (Vectors.dense(2.0,4.0,16.0), "foo", 1),\n    (Vectors.dense(2.0,4.0,18.0), "foo", 4),\n    (Vectors.dense(2.0,4.0,20.0), "foo", 4)\n], ["features","values","labels"])\n\ncnn = (ConditionalKNN().setOutputCol("prediction"))\ncnnm = cnn.fit(df)\n\ntest_df = spark.createDataFrame([\n    (Vectors.dense(2.0,2.0,2.0), "foo", 1, [0, 1]),\n    (Vectors.dense(2.0,2.0,4.0), "foo", 4, [0, 1]),\n    (Vectors.dense(2.0,2.0,6.0), "foo", 2, [0, 1]),\n    (Vectors.dense(2.0,2.0,8.0), "foo", 4, [0, 1]),\n    (Vectors.dense(2.0,2.0,10.0), "foo", 4, [0, 1])\n], ["features","values","labels","conditioner"])\n\ndisplay(cnnm.transform(test_df))\n')),(0,r.kt)("p",null,"This should log one run with a ConditionalKNNModel artifact and its parameters."),(0,r.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/autologgingRunSample.png",width:"1200"}))}d.isMDXComponent=!0}}]);