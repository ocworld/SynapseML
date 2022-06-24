"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[5609],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(f,s(s({ref:t},m),{},{components:n})):a.createElement(f,s({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7796:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],i={title:"Classification - Before and After SynapseML",hide_title:!0,status:"stable"},l=void 0,p={unversionedId:"features/classification/Classification - Before and After SynapseML",id:"version-0.9.4/features/classification/Classification - Before and After SynapseML",title:"Classification - Before and After SynapseML",description:"Classification - Before and After SynapseML",source:"@site/versioned_docs/version-0.9.4/features/classification/Classification - Before and After SynapseML.md",sourceDirName:"features/classification",slug:"/features/classification/Classification - Before and After SynapseML",permalink:"/SynapseML/docs/0.9.4/features/classification/Classification - Before and After SynapseML",tags:[],version:"0.9.4",frontMatter:{title:"Classification - Before and After SynapseML",hide_title:!0,status:"stable"},sidebar:"version-0.9.4/docs",previous:{title:"Classification - Adult Census",permalink:"/SynapseML/docs/0.9.4/features/classification/Classification - Adult Census"},next:{title:"Classification - Twitter Sentiment with Vowpal Wabbit",permalink:"/SynapseML/docs/0.9.4/features/classification/Classification - Twitter Sentiment with Vowpal Wabbit"}},m={},d=[{value:"Classification - Before and After SynapseML",id:"classification---before-and-after-synapseml",level:2},{value:"1. Introduction",id:"1-introduction",level:3},{value:"2. Read the data",id:"2-read-the-data",level:3},{value:"3. Extract more features and process data",id:"3-extract-more-features-and-process-data",level:3},{value:"4a. Classify using pyspark",id:"4a-classify-using-pyspark",level:3},{value:"4b. Classify using synapseml",id:"4b-classify-using-synapseml",level:3}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"classification---before-and-after-synapseml"},"Classification - Before and After SynapseML"),(0,o.kt)("h3",{id:"1-introduction"},"1. Introduction"),(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://images-na.ssl-images-amazon.com/images/G/01/img16/books/bookstore/landing-page/1000638_books_landing-page_bookstore-photo-01.jpg",title:"Image from https://images-na.ssl-images-amazon.com/images/G/01/img16/books/bookstore/landing-page/1000638_books_landing-page_bookstore-photo-01.jpg"}),(0,o.kt)("br",null)),(0,o.kt)("p",null,"In this tutorial, we perform the same classification task in two\ndifferent ways: once using plain ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"pyspark"))," and once using the\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"synapseml"))," library.  The two methods yield the same performance,\nbut one of the two libraries is drastically simpler to use and iterate\non (can you guess which one?)."),(0,o.kt)("p",null,"The task is simple: Predict whether a user's review of a book sold on\nAmazon is good (rating > 3) or bad based on the text of the review.  We\naccomplish this by training LogisticRegression learners with different\nhyperparameters and choosing the best model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n    spark = SparkSession.builder.getOrCreate()\n')),(0,o.kt)("h3",{id:"2-read-the-data"},"2. Read the data"),(0,o.kt)("p",null,"We download and read in the data. We show a sample below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'rawData = spark.read.parquet("wasbs://publicwasb@mmlspark.blob.core.windows.net/BookReviewsFromAmazon10K.parquet")\nrawData.show(5)\n')),(0,o.kt)("h3",{id:"3-extract-more-features-and-process-data"},"3. Extract more features and process data"),(0,o.kt)("p",null,"Real data however is more complex than the above dataset. It is common\nfor a dataset to have features of multiple types: text, numeric,\ncategorical.  To illustrate how difficult it is to work with these\ndatasets, we add two numerical features to the dataset: the ",(0,o.kt)("strong",{parentName:"p"},"word\ncount")," of the review and the ",(0,o.kt)("strong",{parentName:"p"},"mean word length"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.sql.functions import udf\nfrom pyspark.sql.types import *\ndef wordCount(s):\n    return len(s.split())\ndef wordLength(s):\n    import numpy as np\n    ss = [len(w) for w in s.split()]\n    return round(float(np.mean(ss)), 2)\nwordLengthUDF = udf(wordLength, DoubleType())\nwordCountUDF = udf(wordCount, IntegerType())\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.stages import UDFTransformer\nwordLength = "wordLength"\nwordCount = "wordCount"\nwordLengthTransformer = UDFTransformer(inputCol="text", outputCol=wordLength, udf=wordLengthUDF)\nwordCountTransformer = UDFTransformer(inputCol="text", outputCol=wordCount, udf=wordCountUDF)\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml import Pipeline\ndata = Pipeline(stages=[wordLengthTransformer, wordCountTransformer]) \\\n       .fit(rawData).transform(rawData) \\\n       .withColumn("label", rawData["rating"] > 3).drop("rating")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"data.show(5)\n")),(0,o.kt)("h3",{id:"4a-classify-using-pyspark"},"4a. Classify using pyspark"),(0,o.kt)("p",null,"To choose the best LogisticRegression classifier using the ",(0,o.kt)("inlineCode",{parentName:"p"},"pyspark"),"\nlibrary, need to ",(0,o.kt)("em",{parentName:"p"},"explictly")," perform the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Process the features:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Tokenize the text column"),(0,o.kt)("li",{parentName:"ul"},"Hash the tokenized column into a vector using hashing"),(0,o.kt)("li",{parentName:"ul"},"Merge the numeric features with the vector in the step above"))),(0,o.kt)("li",{parentName:"ol"},"Process the label column: cast it into the proper type."),(0,o.kt)("li",{parentName:"ol"},"Train multiple LogisticRegression algorithms on the ",(0,o.kt)("inlineCode",{parentName:"li"},"train")," dataset\nwith different hyperparameters"),(0,o.kt)("li",{parentName:"ol"},"Compute the area under the ROC curve for each of the trained models\nand select the model with the highest metric as computed on the\n",(0,o.kt)("inlineCode",{parentName:"li"},"test")," dataset"),(0,o.kt)("li",{parentName:"ol"},"Evaluate the best model on the ",(0,o.kt)("inlineCode",{parentName:"li"},"validation")," set")),(0,o.kt)("p",null,"As you can see below, there is a lot of work involved and a lot of\nsteps where something can go wrong!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.feature import Tokenizer, HashingTF\nfrom pyspark.ml.feature import VectorAssembler\n\n# Featurize text column\ntokenizer = Tokenizer(inputCol="text", outputCol="tokenizedText")\nnumFeatures = 10000\nhashingScheme = HashingTF(inputCol="tokenizedText",\n                          outputCol="TextFeatures",\n                          numFeatures=numFeatures)\ntokenizedData = tokenizer.transform(data)\nfeaturizedData = hashingScheme.transform(tokenizedData)\n\n# Merge text and numeric features in one feature column\nfeatureColumnsArray = ["TextFeatures", "wordCount", "wordLength"]\nassembler = VectorAssembler(\n    inputCols = featureColumnsArray,\n    outputCol="features")\nassembledData = assembler.transform(featurizedData)\n\n# Select only columns of interest\n# Convert rating column from boolean to int\nprocessedData = assembledData \\\n                .select("label", "features") \\\n                .withColumn("label", assembledData.label.cast(IntegerType()))\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.evaluation import BinaryClassificationEvaluator\nfrom pyspark.ml.classification import LogisticRegression\n\n# Prepare data for learning\ntrain, test, validation = processedData.randomSplit([0.60, 0.20, 0.20], seed=123)\n\n# Train the models on the \'train\' data\nlrHyperParams = [0.05, 0.1, 0.2, 0.4]\nlogisticRegressions = [LogisticRegression(regParam = hyperParam)\n                       for hyperParam in lrHyperParams]\nevaluator = BinaryClassificationEvaluator(rawPredictionCol="rawPrediction",\n                                          metricName="areaUnderROC")\nmetrics = []\nmodels = []\n\n# Select the best model\nfor learner in logisticRegressions:\n    model = learner.fit(train)\n    models.append(model)\n    scoredData = model.transform(test)\n    metrics.append(evaluator.evaluate(scoredData))\nbestMetric = max(metrics)\nbestModel = models[metrics.index(bestMetric)]\n\n# Get AUC on the validation dataset\nscoredVal = bestModel.transform(validation)\nprint(evaluator.evaluate(scoredVal))\n')),(0,o.kt)("h3",{id:"4b-classify-using-synapseml"},"4b. Classify using synapseml"),(0,o.kt)("p",null,"Life is a lot simpler when using ",(0,o.kt)("inlineCode",{parentName:"p"},"synapseml"),"!"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"TrainClassifier"))," Estimator featurizes the data internally,\nas long as the columns selected in the ",(0,o.kt)("inlineCode",{parentName:"p"},"train"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"validation"),"\ndataset represent the features")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"FindBestModel"))," Estimator find the best model from a pool of\ntrained models by find the model which performs best on the ",(0,o.kt)("inlineCode",{parentName:"p"},"test"),"\ndataset given the specified metric")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"CompueModelStatistics"))," Transformer computes the different\nmetrics on a scored dataset (in our case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"validation")," dataset)\nat the same time"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import TrainClassifier, ComputeModelStatistics\nfrom synapse.ml.automl import FindBestModel\n\n# Prepare data for learning\ntrain, test, validation = data.randomSplit([0.60, 0.20, 0.20], seed=123)\n\n# Train the models on the \'train\' data\nlrHyperParams = [0.05, 0.1, 0.2, 0.4]\nlogisticRegressions = [LogisticRegression(regParam = hyperParam)\n                       for hyperParam in lrHyperParams]\nlrmodels = [TrainClassifier(model=lrm, labelCol="label", numFeatures=10000).fit(train)\n            for lrm in logisticRegressions]\n\n# Select the best model\nbestModel = FindBestModel(evaluationMetric="AUC", models=lrmodels).fit(test)\n\n\n# Get AUC on the validation dataset\npredictions = bestModel.transform(validation)\nmetrics = ComputeModelStatistics().transform(predictions)\nprint("Best model\'s AUC on validation set = "\n      + "{0:.2f}%".format(metrics.first()["AUC"] * 100))\n')))}u.isMDXComponent=!0}}]);