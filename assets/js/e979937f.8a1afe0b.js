"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4474],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4939:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var n=a(3117),r=a(102),s=(a(7294),a(3905)),o=["components"],i={title:"Datasets",hide_title:!0,sidebar_label:"Datasets"},l="Datasets Used in Sample Jupyter Notebooks",c={unversionedId:"reference/datasets",id:"version-0.9.5/reference/datasets",title:"Datasets",description:"Adult Census Income",source:"@site/versioned_docs/version-0.9.5/reference/datasets.md",sourceDirName:"reference",slug:"/reference/datasets",permalink:"/SynapseML/docs/reference/datasets",tags:[],version:"0.9.5",frontMatter:{title:"Datasets",hide_title:!0,sidebar_label:"Datasets"},sidebar:"docs",previous:{title:"CyberML",permalink:"/SynapseML/docs/reference/cyber"},next:{title:"Vagrant",permalink:"/SynapseML/docs/reference/vagrant"}},p={},m=[{value:"Adult Census Income",id:"adult-census-income",level:2},{value:"Book Reviews from Amazon",id:"book-reviews-from-amazon",level:2},{value:"CIFAR-10 Images",id:"cifar-10-images",level:2},{value:"Flight On-Time Performance",id:"flight-on-time-performance",level:2}],d={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"datasets-used-in-sample-jupyter-notebooks"},"Datasets Used in Sample Jupyter Notebooks"),(0,s.kt)("h2",{id:"adult-census-income"},"Adult Census Income"),(0,s.kt)("p",null,"A small dataset that can be used to predict income level of a person given\ndemographic features.  The dataset is a comma-separated file with 15 columns and\n32561 rows.  The columns have numeric and categorical string types."),(0,s.kt)("p",null,"The example dataset is available\n",(0,s.kt)("a",{parentName:"p",href:"https://mmlspark.azureedge.net/datasets/AdultCensusIncome.csv"},"here"),"; the\noriginal dataset is from ",(0,s.kt)("a",{parentName:"p",href:"https://archive.ics.uci.edu/ml/datasets/Adult"},"the UCI Machine Learning\nRepository"),".  The example dataset\nhas been cleaned of rows with missing values."),(0,s.kt)("p",null,"Reference: ",(0,s.kt)("em",{parentName:"p"},"Kohavi, R., Becker, B., (1996)"),", ","\\","\n\xa0\xa0\xa0\xa0",(0,s.kt)("a",{parentName:"p",href:"http://archive.ics.uci.edu/ml"},"UCI Machine Learning Repository"),", Irvine, CA, ","\\","\n\xa0\xa0\xa0\xa0University of California, School of Information and Computer Science."),(0,s.kt)("h2",{id:"book-reviews-from-amazon"},"Book Reviews from Amazon"),(0,s.kt)("p",null,"This dataset can be used to predict sentiment of book reviews.  The dataset is a\ntab-separated file with 2 columns (",(0,s.kt)("inlineCode",{parentName:"p"},"rating"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"text"),") and 10000 rows.  The\n",(0,s.kt)("inlineCode",{parentName:"p"},"rating")," column has integer values of 1, 2, 4 or 5, and the ",(0,s.kt)("inlineCode",{parentName:"p"},"text")," column\ncontains free-form text strings in English language.  You can use\n",(0,s.kt)("inlineCode",{parentName:"p"},"synapse.ml.TextFeaturizer")," to convert the text into feature vectors for machine\nlearning models (",(0,s.kt)("a",{parentName:"p",href:"../../features/other/TextAnalytics%20-%20Amazon%20Book%20Reviews/"},"see\nexample"),")."),(0,s.kt)("p",null,"The example dataset is available\n",(0,s.kt)("a",{parentName:"p",href:"https://mmlspark.azureedge.net/datasets/BookReviewsFromAmazon10K.tsv"},"here"),";\nthe original dataset is available from ",(0,s.kt)("a",{parentName:"p",href:"http://www.cs.jhu.edu/~mdredze/datasets/sentiment/"},"Dredze's\npage"),".  The example dataset\nhas been sampled down to 10000 rows."),(0,s.kt)("p",null,"Reference: ",(0,s.kt)("em",{parentName:"p"},"Biographies, Bollywood, Boom-boxes and Blenders: Domain Adaptation\nfor Sentiment Classification"),", ","\\","\n\xa0\xa0\xa0\xa0John Blitzer, Mark Dredze, and Fernando Pereira ","\\","\n\xa0\xa0\xa0\xa0Association of Computational Linguistics (ACL), 2007."),(0,s.kt)("h2",{id:"cifar-10-images"},"CIFAR-10 Images"),(0,s.kt)("p",null,"A collection of small labeled images.  This dataset can be used to train and\nevaluate deep neural network models for image classification.  The dataset\nconsists of 60000 32-by-32 RGB images, labeled into 10 categories."),(0,s.kt)("p",null,"The example dataset is available\n",(0,s.kt)("a",{parentName:"p",href:"https://mmlspark.azureedge.net/datasets/CIFAR10/cifar-10-python.tar.gz"},"here"),";\nthe original dataset is available ",(0,s.kt)("a",{parentName:"p",href:"https://www.cs.toronto.edu/~kriz/cifar.html"},"Krizhevsky's\npage"),".  The dataset has been\npackaged into a gzipped tar archive."),(0,s.kt)("p",null,"Reference: ",(0,s.kt)("a",{parentName:"p",href:"https://www.cs.toronto.edu/~kriz/learning-features-2009-TR.pdf"},(0,s.kt)("em",{parentName:"a"},"Learning Multiple Layers of Features from Tiny\nImages")),", ","\\","\n\xa0\xa0\xa0\xa0Alex Krizhevsky, Mater thesis, 2009."),(0,s.kt)("h2",{id:"flight-on-time-performance"},"Flight On-Time Performance"),(0,s.kt)("p",null,"A medium-small dataset of U.S. passenger flight records from September 2012 that\ncan be used to predict flight arrival delays.  The dataset is a comma-separated\nfile with 13 columns that have numeric and categorical string types.  The\ndataset has 490199 rows total, and 485430 rows if records with missing values \u2014\nmostly diverted flights \u2014 are excluded."),(0,s.kt)("p",null,"The example dataset is available\n",(0,s.kt)("a",{parentName:"p",href:"https://mmlspark.azureedge.net/datasets/On_Time_Performance_2012_9.csv"},"here"),";\nthe original data is available from ",(0,s.kt)("a",{parentName:"p",href:"http://www.transtats.bts.gov/DL_SelectFields.asp?Table_ID=236&DB_Short_Name=On-Time"},"the TranStats web\nsite"),".\nThe example dataset contains a subset of columns from original data, to trim the\ndata size."),(0,s.kt)("p",null,"Reference: ",(0,s.kt)("em",{parentName:"p"},"TranStats data collection"),", ","\\","\n\xa0\xa0\xa0\xa0Bureau of Transportation Statistics, ","\\","\n\xa0\xa0\xa0\xa0U.S. Department of Transportation."))}u.isMDXComponent=!0}}]);