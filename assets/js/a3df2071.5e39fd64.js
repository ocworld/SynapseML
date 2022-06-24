"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[1465],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},342:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=r(3117),n=r(102),s=(r(7294),r(3905)),i=["components"],o={title:"Regression - Vowpal Wabbit vs. LightGBM vs. Linear Regressor",hide_title:!0,status:"stable"},l="Vowpal Wabbit and LightGBM for a Regression Problem",p={unversionedId:"features/regression/Regression - Vowpal Wabbit vs. LightGBM vs. Linear Regressor",id:"version-0.9.5/features/regression/Regression - Vowpal Wabbit vs. LightGBM vs. Linear Regressor",title:"Regression - Vowpal Wabbit vs. LightGBM vs. Linear Regressor",description:"This notebook shows how to build simple regression models by using",source:"@site/versioned_docs/version-0.9.5/features/regression/Regression - Vowpal Wabbit vs. LightGBM vs. Linear Regressor.md",sourceDirName:"features/regression",slug:"/features/regression/Regression - Vowpal Wabbit vs. LightGBM vs. Linear Regressor",permalink:"/SynapseML/docs/features/regression/Regression - Vowpal Wabbit vs. LightGBM vs. Linear Regressor",tags:[],version:"0.9.5",frontMatter:{title:"Regression - Vowpal Wabbit vs. LightGBM vs. Linear Regressor",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Regression - Flight Delays",permalink:"/SynapseML/docs/features/regression/Regression - Flight Delays"},next:{title:"AzureSearchIndex - Met Artworks",permalink:"/SynapseML/docs/features/other/AzureSearchIndex - Met Artworks"}},u={},c=[{value:"Prepare Dataset",id:"prepare-dataset",level:2},{value:"Baseline - Spark MLlib Linear Regressor",id:"baseline---spark-mllib-linear-regressor",level:2},{value:"Vowpal Wabbit",id:"vowpal-wabbit",level:2},{value:"LightGBM",id:"lightgbm",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"vowpal-wabbit-and-lightgbm-for-a-regression-problem"},"Vowpal Wabbit and LightGBM for a Regression Problem"),(0,s.kt)("p",null,"This notebook shows how to build simple regression models by using\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/VowpalWabbit/vowpal_wabbit"},"Vowpal Wabbit (VW)")," and\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/LightGBM"},"LightGBM")," with SynapseML.\nWe also compare the results with\n",(0,s.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/ml-classification-regression.html#linear-regression"},"Spark MLlib Linear Regression"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import os\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n    spark = SparkSession.builder.getOrCreate()\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import math\nfrom synapse.ml.train import ComputeModelStatistics\nfrom synapse.ml.vw import VowpalWabbitRegressor, VowpalWabbitFeaturizer\nfrom synapse.ml.lightgbm import LightGBMRegressor\nimport numpy as np\nimport pandas as pd\nfrom pyspark.ml.feature import VectorAssembler\nfrom pyspark.ml.regression import LinearRegression\nfrom sklearn.datasets import load_boston\n")),(0,s.kt)("h2",{id:"prepare-dataset"},"Prepare Dataset"),(0,s.kt)("p",null,"We use ",(0,s.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_boston.html"},(0,s.kt)("em",{parentName:"a"},"Boston house price")," dataset"),"\n.\nThe data was collected in 1978 from Boston area and consists of 506 entries with 14 features including the value of homes.\nWe use ",(0,s.kt)("inlineCode",{parentName:"p"},"sklearn.datasets")," module to download it easily, then split the set into training and testing by 75/25."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"boston = load_boston()\n\nfeature_cols = ['f' + str(i) for i in range(boston.data.shape[1])]\nheader = ['target'] + feature_cols\ndf = spark.createDataFrame(pd.DataFrame(data=np.column_stack((boston.target, boston.data)), columns=header)).repartition(1)\nprint(\"Dataframe has {} rows\".format(df.count()))\ndisplay(df.limit(10).toPandas())\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"train_data, test_data = df.randomSplit([0.75, 0.25], seed=42)\n")),(0,s.kt)("p",null,"Following is the summary of the training set."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"display(train_data.summary().toPandas())\n")),(0,s.kt)("p",null,"Plot feature distributions over different target values (house prices in our case)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"features = train_data.columns[1:]\nvalues = train_data.drop('target').toPandas()\nncols = 5\nnrows = math.ceil(len(features) / ncols)\n")),(0,s.kt)("h2",{id:"baseline---spark-mllib-linear-regressor"},"Baseline - Spark MLlib Linear Regressor"),(0,s.kt)("p",null,"First, we set a baseline performance by using Linear Regressor in Spark MLlib."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"featurizer = VectorAssembler(inputCols=feature_cols, outputCol='features')\nlr_train_data = featurizer.transform(train_data)['target', 'features']\nlr_test_data = featurizer.transform(test_data)['target', 'features']\ndisplay(lr_train_data.limit(10).toPandas())\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# By default, `maxIter` is 100. Other params you may want to change include: `regParam`, `elasticNetParam`, etc.\nlr = LinearRegression(labelCol='target')\n\nlr_model = lr.fit(lr_train_data)\nlr_predictions = lr_model.transform(lr_test_data)\n\ndisplay(lr_predictions.limit(10).toPandas())\n")),(0,s.kt)("p",null,"We evaluate the prediction result by using ",(0,s.kt)("inlineCode",{parentName:"p"},"synapse.ml.train.ComputeModelStatistics")," which returns four metrics:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mean_squared_error"},"MSE (Mean Squared Error)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Root-mean-square_deviation"},"RMSE (Root Mean Squared Error)")," = sqrt(MSE)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Coefficient_of_determination"},"R quared")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mean_absolute_error"},"MAE (Mean Absolute Error)"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"metrics = ComputeModelStatistics(\n    evaluationMetric='regression',\n    labelCol='target',\n    scoresCol='prediction').transform(lr_predictions)\n\nresults = metrics.toPandas()\nresults.insert(0, 'model', ['Spark MLlib - Linear Regression'])\ndisplay(results)\n")),(0,s.kt)("h2",{id:"vowpal-wabbit"},"Vowpal Wabbit"),(0,s.kt)("p",null,"Perform VW-style feature hashing. Many types (numbers, string, bool, map of string to (number, string)) are supported."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"vw_featurizer = VowpalWabbitFeaturizer(\n    inputCols=feature_cols,\n    outputCol='features')\n\nvw_train_data = vw_featurizer.transform(train_data)['target', 'features']\nvw_test_data = vw_featurizer.transform(test_data)['target', 'features']\ndisplay(vw_train_data.limit(10).toPandas())\n")),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/vowpalWabbit/vowpal_wabbit/wiki/Command-Line-Arguments"},"VW wiki")," for command line arguments."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Use the same number of iterations as Spark MLlib's Linear Regression (=100)\nargs = \"--holdout_off --loss_function quantile -l 7 -q :: --power_t 0.3\"\nvwr = VowpalWabbitRegressor(\n    labelCol='target',\n    args=args,\n    numPasses=100)\n\n# To reduce number of partitions (which will effect performance), use `vw_train_data.repartition(1)`\nvw_train_data_2 = vw_train_data.repartition(1).cache()\nprint(vw_train_data_2.count())\nvw_model = vwr.fit(vw_train_data_2.repartition(1))\nvw_predictions = vw_model.transform(vw_test_data)\n\ndisplay(vw_predictions.limit(10).toPandas())\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"metrics = ComputeModelStatistics(\n    evaluationMetric='regression',\n    labelCol='target',\n    scoresCol='prediction').transform(vw_predictions)\n\nvw_result = metrics.toPandas()\nvw_result.insert(0, 'model', ['Vowpal Wabbit'])\nresults = results.append(\n    vw_result,\n    ignore_index=True)\n\ndisplay(results)\n")),(0,s.kt)("h2",{id:"lightgbm"},"LightGBM"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"lgr = LightGBMRegressor(\n    objective='quantile',\n    alpha=0.2,\n    learningRate=0.3,\n    numLeaves=31,\n    labelCol='target',\n    numIterations=100)\n\n# Using one partition since the training dataset is very small\nrepartitioned_data = lr_train_data.repartition(1).cache()\nprint(repartitioned_data.count())\nlg_model = lgr.fit(repartitioned_data)\nlg_predictions = lg_model.transform(lr_test_data)\n\ndisplay(lg_predictions.limit(10).toPandas())\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"metrics = ComputeModelStatistics(\n    evaluationMetric='regression',\n    labelCol='target',\n    scoresCol='prediction').transform(lg_predictions)\n\nlg_result = metrics.toPandas()\nlg_result.insert(0, 'model', ['LightGBM'])\n\nresults = results.append(\n    lg_result,\n    ignore_index=True)\n\ndisplay(results)\n")),(0,s.kt)("p",null,"Following figure shows the actual-vs.-prediction graphs of the results:"),(0,s.kt)("img",{width:"1102",alt:"lr-vw-lg",src:"https://user-images.githubusercontent.com/42475935/64071975-4c3e9600-cc54-11e9-8b1f-9a1ee300f445.png"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"if os.environ.get(\"AZURE_SERVICE\", None) != \"Microsoft.ProjectArcadia\":\n    from matplotlib.colors import ListedColormap, Normalize\n    from matplotlib.cm import get_cmap\n    import matplotlib.pyplot as plt\n\n    f, axes = plt.subplots(nrows, ncols, sharey=True, figsize=(30,10))\n    f.tight_layout()\n    yy = [r['target'] for r in train_data.select('target').collect()]\n    for irow in range(nrows):\n        axes[irow][0].set_ylabel('target')\n        for icol in range(ncols):\n            try:\n                feat = features[irow*ncols + icol]\n                xx = values[feat]\n                axes[irow][icol].scatter(xx, yy, s=10, alpha=0.25)\n                axes[irow][icol].set_xlabel(feat)\n                axes[irow][icol].get_yaxis().set_ticks([])\n            except IndexError:\n                f.delaxes(axes[irow][icol])\n\n    cmap = get_cmap('YlOrRd')\n\n    target = np.array(test_data.select('target').collect()).flatten()\n    model_preds = [\n        (\"Spark MLlib Linear Regression\", lr_predictions),\n        (\"Vowpal Wabbit\", vw_predictions),\n        (\"LightGBM\", lg_predictions)]\n\n    f, axes = plt.subplots(1, len(model_preds), sharey=True, figsize=(18, 6))\n    f.tight_layout()\n\n    for i, (model_name, preds) in enumerate(model_preds):\n        preds = np.array(preds.select('prediction').collect()).flatten()\n        err = np.absolute(preds - target)\n\n        norm = Normalize()\n        clrs = cmap(np.asarray(norm(err)))[:, :-1]\n        axes[i].scatter(preds, target, s=60, c=clrs, edgecolors='#888888', alpha=0.75)\n        axes[i].plot((0, 60), (0, 60), linestyle='--', color='#888888')\n        axes[i].set_xlabel('Predicted values')\n        if i ==0:\n            axes[i].set_ylabel('Actual values')\n        axes[i].set_title(model_name)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"")))}d.isMDXComponent=!0}}]);