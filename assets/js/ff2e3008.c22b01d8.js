"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[7902],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1367:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"First Model",hide_title:!0,description:"First Model"},s="Your First Model",p={unversionedId:"getting_started/first_model",id:"getting_started/first_model",title:"First Model",description:"First Model",source:"@site/docs/getting_started/first_model.md",sourceDirName:"getting_started",slug:"/getting_started/first_model",permalink:"/SynapseML/docs/next/getting_started/first_model",tags:[],version:"current",frontMatter:{title:"First Model",hide_title:!0,description:"First Model"},sidebar:"docs",previous:{title:"First Example",permalink:"/SynapseML/docs/next/getting_started/first_example"},next:{title:"CognitiveServices - Analyze Text",permalink:"/SynapseML/docs/next/features/cognitive_services/CognitiveServices - Analyze Text"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Working with Jupyter Notebooks",id:"working-with-jupyter-notebooks",level:3},{value:"Importing Packages and Starting the Spark Application",id:"importing-packages-and-starting-the-spark-application",level:3},{value:"Reading in Data",id:"reading-in-data",level:3},{value:"Selecting Features and Splitting Data to Train and Test Sets",id:"selecting-features-and-splitting-data-to-train-and-test-sets",level:3},{value:"Training a Model",id:"training-a-model",level:3},{value:"Scoring and Evaluating the Model",id:"scoring-and-evaluating-the-model",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"your-first-model"},"Your First Model"),(0,i.kt)("p",null,"In this example, we construct a basic classification model to predict a person's\nincome level given demographics data such as education level or marital status.\nWe also learn how to use Jupyter notebooks for developing and running the model."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have installed the SynapseML package, either as a Docker image or on a\nSpark cluster,"),(0,i.kt)("li",{parentName:"ul"},"You have basic knowledge of Python language,"),(0,i.kt)("li",{parentName:"ul"},"You have basic understanding of machine learning concepts: training, testing,\nclassification.")),(0,i.kt)("h3",{id:"working-with-jupyter-notebooks"},"Working with Jupyter Notebooks"),(0,i.kt)("p",null,"Once you have the SynapseML package installed, open Jupyter notebooks folder in\nyour web browser"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Local Docker: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:8888")),(0,i.kt)("li",{parentName:"ul"},"Spark cluster: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<cluster-url>/jupyter"))),(0,i.kt)("p",null,'Create a new notebook by selecting "New" -> "PySpark3".  Let\'s also give the\nnotebook a friendlier name, ',(0,i.kt)("em",{parentName:"p"},"Adult Census Income Prediction"),", by clicking the\ntitle."),(0,i.kt)("h3",{id:"importing-packages-and-starting-the-spark-application"},"Importing Packages and Starting the Spark Application"),(0,i.kt)("p",null,"At this point, the notebook is not yet running a Spark application.  In the\nfirst cell, let's import some needed packages"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport pandas as pd\n")),(0,i.kt)("p",null,'Click the "run cell" button on the toolbar to start the application.  After a\nfew moments, you should see the message "SparkSession available as \'spark\'".\nNow you\'re ready to start coding and running your application.'),(0,i.kt)("h3",{id:"reading-in-data"},"Reading in Data"),(0,i.kt)("p",null,"In a typical Spark application, you'd likely work with huge datasets stored on\ndistributed file system, such as HDFS.  However, to keep this tutorial simple\nand quick, we'll copy over a small dataset from a URL.  We then read this data\ninto memory using Pandas CSV reader, and distribute the data as a Spark\nDataFrame.  Finally, we show the first 5 rows of the dataset. Copy the following\ncode to the next cell in your notebook, and run the cell."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'dataFile = "AdultCensusIncome.csv"\nimport os, urllib\nif not os.path.isfile(dataFile):\n    urllib.request.urlretrieve("https://mmlspark.azureedge.net/datasets/" + dataFile, dataFile)\ndata = spark.createDataFrame(pd.read_csv(dataFile, dtype={" hours-per-week": np.float64}))\ndata.show(5)\n')),(0,i.kt)("h3",{id:"selecting-features-and-splitting-data-to-train-and-test-sets"},"Selecting Features and Splitting Data to Train and Test Sets"),(0,i.kt)("p",null,"Next, select some features to use in our model.  You can try out different\nfeatures, but you should include ",(0,i.kt)("inlineCode",{parentName:"p"},'" income"')," as it is the label column the model\nis trying to predict.  We then split the data into a ",(0,i.kt)("inlineCode",{parentName:"p"},"train")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," sets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'data = data.select([" education", " marital-status", " hours-per-week", " income"])\ntrain, test = data.randomSplit([0.75, 0.25], seed=123)\n')),(0,i.kt)("h3",{id:"training-a-model"},"Training a Model"),(0,i.kt)("p",null,"To train the classifier model, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"synapse.ml.TrainClassifier")," class.  It\ntakes in training data and a base SparkML classifier, maps the data into the\nformat expected by the base classifier algorithm, and fits a model."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import TrainClassifier\nfrom pyspark.ml.classification import LogisticRegression\nmodel = TrainClassifier(model=LogisticRegression(), labelCol=" income").fit(train)\n')),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"TrainClassifier")," implicitly handles string-valued columns and\nbinarizes the label column."),(0,i.kt)("h3",{id:"scoring-and-evaluating-the-model"},"Scoring and Evaluating the Model"),(0,i.kt)("p",null,"Finally, let's score the model against the test set, and use\n",(0,i.kt)("inlineCode",{parentName:"p"},"synapse.ml.ComputeModelStatistics")," class to compute metrics \u2014 accuracy, AUC,\nprecision, recall \u2014 from the scored data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.train import ComputeModelStatistics\nprediction = model.transform(test)\nmetrics = ComputeModelStatistics().transform(prediction)\nmetrics.select('accuracy').show()\n")),(0,i.kt)("p",null,"And that's it: you've build your first machine learning model using the SynapseML\npackage.  For help on SynapseML classes and methods, you can use Python's help()\nfunction, for example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"help(synapse.ml.train.TrainClassifier)\n")),(0,i.kt)("p",null,"Next, view our other tutorials to learn how to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tune model parameters to find the best model"),(0,i.kt)("li",{parentName:"ul"},"Use SparkML pipelines to build a more complex model"),(0,i.kt)("li",{parentName:"ul"},"Use deep neural networks for image classification"),(0,i.kt)("li",{parentName:"ul"},"Use text analytics for document classification")))}m.isMDXComponent=!0}}]);