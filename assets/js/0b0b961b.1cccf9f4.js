"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[191],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),p=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,f=u["".concat(m,".").concat(g)]||u[g]||c[g]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9953:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],s={title:"OpenCV - Pipeline Image Transformations",hide_title:!0,status:"stable",name:"OpenCV - Pipeline Image Transformations"},m=void 0,p={unversionedId:"features/opencv/OpenCV - Pipeline Image Transformations",id:"features/opencv/OpenCV - Pipeline Image Transformations",title:"OpenCV - Pipeline Image Transformations",description:"OpenCV - Pipeline Image Transformations",source:"@site/docs/features/opencv/OpenCV - Pipeline Image Transformations.md",sourceDirName:"features/opencv",slug:"/features/opencv/OpenCV - Pipeline Image Transformations",permalink:"/SynapseML/docs/next/features/opencv/OpenCV - Pipeline Image Transformations",tags:[],version:"current",frontMatter:{title:"OpenCV - Pipeline Image Transformations",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"About",permalink:"/SynapseML/docs/next/features/spark_serving/about"},next:{title:"Classification - Adult Census with Vowpal Wabbit",permalink:"/SynapseML/docs/next/features/classification/Classification - Adult Census with Vowpal Wabbit"}},l={},c=[{value:"OpenCV - Pipeline Image Transformations",id:"opencv---pipeline-image-transformations",level:2}],u={toc:c};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"opencv---pipeline-image-transformations"},"OpenCV - Pipeline Image Transformations"),(0,o.kt)("p",null,"This example shows how to manipulate the collection of images.\nFirst, the images are downloaded to the local directory.\nSecond, they are copied to your cluster's attached HDFS."),(0,o.kt)("p",null,"The images are loaded from the directory (for fast prototyping, consider loading a fraction of\nimages). Inside the dataframe, each image is a single field in the image column. The image has\nsub-fields (path, height, width, OpenCV type and OpenCV bytes)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n\n    spark = SparkSession.builder.getOrCreate()\n\nimport synapse.ml\nimport numpy as np\nfrom synapse.ml.opencv import toNDArray\nfrom synapse.ml.io import *\n\nimageDir = "wasbs://publicwasb@mmlspark.blob.core.windows.net/sampleImages"\nimages = spark.read.image().load(imageDir).cache()\nimages.printSchema()\nprint(images.count())\n')),(0,o.kt)("p",null,"We can also alternatively stream the images with a similiar api.\nCheck the ",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html"},"Structured Streaming Programming Guide"),"\nfor more details on streaming."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import time\n\nimageStream = spark.readStream.image().load(imageDir)\nquery = (\n    imageStream.select("image.height")\n    .writeStream.format("memory")\n    .queryName("heights")\n    .start()\n)\ntime.sleep(3)\nprint("Streaming query activity: {}".format(query.isActive))\n')),(0,o.kt)("p",null,"Wait a few seconds and then try querying for the images below.\nNote that when streaming a directory of images that already exists it will\nconsume all images in a single batch. If one were to move images into the\ndirectory, the streaming engine would pick up on them and send them as\nanother batch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'heights = spark.sql("select * from heights")\nprint("Streamed {} heights".format(heights.count()))\n')),(0,o.kt)("p",null,"After we have streamed the images we can stop the query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from py4j.protocol import Py4JJavaError\n\ntry:\n    query.stop()\nexcept Py4JJavaError as e:\n    print(e)\n")),(0,o.kt)("p",null,"When collected from the ",(0,o.kt)("em",{parentName:"p"},"DataFrame"),", the image data are stored in a ",(0,o.kt)("em",{parentName:"p"},"Row"),", which is Spark's way\nto represent structures (in the current example, each dataframe row has a single Image, which\nitself is a Row).  It is possible to address image fields by name and use ",(0,o.kt)("inlineCode",{parentName:"p"},"toNDArray()")," helper\nfunction to convert the image into numpy array for further manipulations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from PIL import Image\nimport matplotlib.pyplot as plt\n\ndata = images.take(3)  # take first three rows of the dataframe\nim = data[2][0]  # the image is in the first column of a given row\n\nprint("image type: {}, number of fields: {}".format(type(im), len(im)))\nprint("image path: {}".format(im.origin))\nprint("height: {}, width: {}, OpenCV type: {}".format(im.height, im.width, im.mode))\n\narr = toNDArray(im)  # convert to numpy array\nprint(images.count())\nplt.imshow(Image.fromarray(arr, "RGB"))  # display the image inside notebook\n')),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageTransformer")," for the basic image manipulation: resizing, cropping, etc.\nInternally, operations are pipelined and backed by OpenCV implementation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.opencv import ImageTransformer\n\ntr = (\n    ImageTransformer()  # images are resized and then cropped\n    .setOutputCol("transformed")\n    .resize(size=(200, 200))\n    .crop(0, 0, height=180, width=180)\n)\n\nsmall = tr.transform(images).select("transformed")\n\nim = small.take(3)[2][0]  # take third image\nplt.imshow(Image.fromarray(toNDArray(im), "RGB"))  # display the image inside notebook\n')),(0,o.kt)("p",null,"For the advanced image manipulations, use Spark UDFs.\nThe SynapseML package provides conversion function between ",(0,o.kt)("em",{parentName:"p"},"Spark Row")," and\n",(0,o.kt)("em",{parentName:"p"},"ndarray")," image representations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import udf\nfrom synapse.ml.opencv import ImageSchema, toNDArray, toImage\n\n\ndef u(row):\n    array = toNDArray(row)  # convert Image to numpy ndarray[height, width, 3]\n    array[:, :, 2] = 0\n    return toImage(array)  # numpy array back to Spark Row structure\n\n\nnoBlueUDF = udf(u, ImageSchema)\n\nnoblue = small.withColumn("noblue", noBlueUDF(small["transformed"])).select("noblue")\n\nim = noblue.take(3)[2][0]  # take second image\nplt.imshow(Image.fromarray(toNDArray(im), "RGB"))  # display the image inside notebook\n')),(0,o.kt)("p",null,"Images could be unrolled into the dense 1D vectors suitable for CNTK evaluation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.image import UnrollImage\n\nunroller = UnrollImage().setInputCol("noblue").setOutputCol("unrolled")\n\nunrolled = unroller.transform(noblue).select("unrolled")\n\nvector = unrolled.take(1)[0][0]\nprint(type(vector))\nlen(vector.toArray())\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"")))}g.isMDXComponent=!0}}]);