(this["webpackJsonpweb-file-viewer"]=this["webpackJsonpweb-file-viewer"]||[]).push([[0],{118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(30),y=a.n(r),x=a(4),i=a(8),c=a(6),o=a(5),u=a(7),l=a(31),d=a.n(l),m=(a(45),a(32)),h=a.n(m),p=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),y=0;y<n;y++)r[y]=arguments[y];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).renderDelete=function(e){return s.a.createElement("div",{className:"reader-delete"},s.a.createElement("button",{className:"circular ui  inverted mini icon  green button",onClick:function(){return a.props.removeItem(e)}},s.a.createElement("i",{className:"x icon"})))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.listOfMath.map((function(t){return"image"===t.type?s.a.createElement("div",{className:"reader-con"},s.a.createElement("div",{style:{flex:"1"}},s.a.createElement("img",{className:"reader-img",style:{width:"100%",padding:"20px"},src:t.src,alt:""})),e.renderDelete(t.index)):s.a.createElement(b,Object.assign({key:t.index},e.props,{renderDelete:e.renderDelete},t))}))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={currState:"SW",item:a.props.value,lastSave:a.props.value},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderCore",value:function(){return"math"===this.props.type?s.a.createElement(d.a,{block:!0},this.state.item):"text"===this.props.type?s.a.createElement("div",{style:{textAlign:"left",width:"100%"}},s.a.createElement(h.a,{markdown:this.state.item})):void 0}},{key:"renderIntial",value:function(){var e=this,t=this.props,a=t.index,n=t.renderDelete;return s.a.createElement("div",{className:"reader-con",key:a},s.a.createElement("div",{className:"reader-edit"},s.a.createElement("button",{className:"circular ui  inverted mini green icon button",onClick:function(){return e.setState({currState:"SE"})}},s.a.createElement("i",{className:"icon edit"}))),s.a.createElement("div",{className:"reader-body"},this.renderCore()),n(a))}},{key:"renderEditStage",value:function(){var e=this;return s.a.createElement("div",{className:"reader-con",key:this.props.index},s.a.createElement("div",{className:"reader-body"},s.a.createElement("div",{class:"ui action input"},s.a.createElement("button",{class:"ui button red",onClick:function(){return e.setState({currState:"SW",item:e.state.lastSave})}},"Cancel"),s.a.createElement("input",{type:"text",value:this.state.item,onChange:function(t){e.setState({item:t.target.value})}}),s.a.createElement("button",{class:"ui button green",onClick:function(){e.props.updateIndex(e.props.index,e.state.item),e.setState({currState:"SW",lastSave:e.state.item})}},"Save"))))}},{key:"render",value:function(){var e=this.state.currState;return"SW"===e?this.renderIntial():"SE"===e?this.renderEditStage():s.a.createElement("div",null,"Error in State")}}]),t}(n.Component),v=a(36),f=a(9),E=a.n(f),g=E.a.create({baseURL:"https://api.mathpix.com/v3",headers:{app_id:"farhanhm12_gmail_com_f5a827",app_key:"400063a44919e11449eb","Content-type":"application/json"}}),C={lines:[{points:[{x:40.3125,y:74.125},{x:40.3125,y:74.125},{x:45.3125,y:74.125},{x:51.3125,y:74.125},{x:62.3125,y:74.125},{x:75.3125,y:74.125},{x:95.3125,y:74.125},{x:120.3125,y:74.125},{x:153.3125,y:75.125},{x:186.3125,y:76.125},{x:219.3125,y:78.125},{x:252.3125,y:78.125},{x:277.3125,y:80.125},{x:304.3125,y:80.125},{x:332.3125,y:80.125},{x:357.3125,y:81.125},{x:384.3125,y:81.125},{x:406.3125,y:81.125},{x:429.3125,y:82.125},{x:453.3125,y:82.125},{x:476.3125,y:84.125},{x:498.3125,y:84.125},{x:517.3125,y:85.125},{x:532.3125,y:85.125},{x:545.3125,y:85.125},{x:557.3125,y:85.125},{x:569.3125,y:85.125},{x:581.3125,y:85.125},{x:594.3125,y:85.125},{x:607.3125,y:85.125},{x:622.3125,y:86.125},{x:637.3125,y:87.125},{x:651.3125,y:89.125},{x:666.3125,y:90.125},{x:682.3125,y:90.125},{x:695.3125,y:90.125},{x:708.3125,y:90.125},{x:722.3125,y:90.125},{x:732.3125,y:90.125},{x:743.3125,y:88.125},{x:754.3125,y:88.125},{x:763.3125,y:88.125},{x:775.3125,y:88.125},{x:784.3125,y:88.125},{x:795.3125,y:88.125},{x:806.3125,y:88.125},{x:815.3125,y:88.125},{x:824.3125,y:88.125},{x:834.3125,y:87.125},{x:843.3125,y:87.125},{x:850.3125,y:86.125},{x:855.3125,y:86.125},{x:860.3125,y:86.125},{x:864.3125,y:85.125},{x:867.3125,y:84.125},{x:869.3125,y:84.125},{x:871.3125,y:83.125},{x:873.3125,y:83.125},{x:874.3125,y:83.125},{x:875.3125,y:83.125},{x:877.3125,y:82.125},{x:879.3125,y:81.125},{x:881.3125,y:81.125},{x:883.3125,y:80.125},{x:886.3125,y:80.125},{x:887.3125,y:79.125},{x:889.3125,y:78.125},{x:891.3125,y:78.125},{x:894.3125,y:77.125},{x:896.3125,y:76.125},{x:897.3125,y:76.125},{x:898.3125,y:76.125},{x:899.3125,y:76.125},{x:900.3125,y:76.125},{x:903.3125,y:76.125},{x:904.3125,y:76.125},{x:905.3125,y:78.125},{x:905.3125,y:81.125},{x:906.3125,y:85.125},{x:906.3125,y:89.125},{x:907.3125,y:95.125},{x:908.3125,y:102.125},{x:909.3125,y:108.125},{x:910.3125,y:115.125},{x:911.3125,y:123.125},{x:912.3125,y:132.125},{x:913.3125,y:141.125},{x:914.3125,y:150.125},{x:915.3125,y:160.125},{x:916.3125,y:171.125},{x:917.3125,y:183.125},{x:918.3125,y:195.125},{x:919.3125,y:208.125},{x:920.3125,y:220.125},{x:921.3125,y:232.125},{x:921.3125,y:245.125},{x:922.3125,y:256.125},{x:922.3125,y:265.125},{x:923.3125,y:274.125},{x:923.3125,y:282.125},{x:924.3125,y:288.125},{x:925.3125,y:295.125},{x:925.3125,y:303.125},{x:926.3125,y:309.125},{x:926.3125,y:314.125},{x:927.3125,y:319.125},{x:927.3125,y:323.125},{x:927.3125,y:327.125},{x:927.3125,y:331.125},{x:928.3125,y:334.125},{x:929.3125,y:339.125},{x:929.3125,y:343.125},{x:930.3125,y:347.125},{x:930.3125,y:351.125},{x:930.3125,y:355.125},{x:931.3125,y:358.125},{x:931.3125,y:361.125},{x:931.3125,y:362.125},{x:931.3125,y:363.125},{x:931.3125,y:364.125},{x:931.3125,y:365.125},{x:931.3125,y:367.125},{x:931.3125,y:368.125},{x:931.3125,y:369.125},{x:930.3125,y:369.125},{x:929.3125,y:370.125},{x:927.3125,y:370.125},{x:923.3125,y:372.125},{x:916.3125,y:373.125},{x:905.3125,y:374.125},{x:895.3125,y:375.125},{x:881.3125,y:375.125},{x:871.3125,y:375.125},{x:861.3125,y:375.125},{x:852.3125,y:375.125},{x:844.3125,y:375.125},{x:836.3125,y:375.125},{x:827.3125,y:375.125},{x:817.3125,y:375.125},{x:807.3125,y:375.125},{x:795.3125,y:375.125},{x:782.3125,y:375.125},{x:767.3125,y:375.125},{x:753.3125,y:375.125},{x:738.3125,y:375.125},{x:725.3125,y:375.125},{x:712.3125,y:375.125},{x:698.3125,y:375.125},{x:686.3125,y:375.125},{x:675.3125,y:375.125},{x:663.3125,y:375.125},{x:651.3125,y:375.125},{x:637.3125,y:375.125},{x:623.3125,y:375.125},{x:608.3125,y:375.125},{x:594.3125,y:375.125},{x:581.3125,y:375.125},{x:568.3125,y:376.125},{x:555.3125,y:379.125},{x:543.3125,y:381.125},{x:531.3125,y:382.125},{x:519.3125,y:384.125},{x:505.3125,y:385.125},{x:493.3125,y:386.125},{x:481.3125,y:387.125},{x:469.3125,y:387.125},{x:458.3125,y:387.125},{x:446.3125,y:387.125},{x:432.3125,y:387.125},{x:420.3125,y:387.125},{x:407.3125,y:387.125},{x:395.3125,y:386.125},{x:385.3125,y:386.125},{x:374.3125,y:386.125},{x:363.3125,y:386.125},{x:353.3125,y:386.125},{x:342.3125,y:386.125},{x:333.3125,y:386.125},{x:322.3125,y:386.125},{x:310.3125,y:385.125},{x:301.3125,y:384.125},{x:289.3125,y:383.125},{x:277.3125,y:383.125},{x:266.3125,y:383.125},{x:257.3125,y:382.125},{x:246.3125,y:381.125},{x:236.3125,y:380.125},{x:228.3125,y:379.125},{x:220.3125,y:377.125},{x:210.3125,y:375.125},{x:202.3125,y:372.125},{x:193.3125,y:371.125},{x:186.3125,y:371.125},{x:180.3125,y:370.125},{x:175.3125,y:370.125},{x:172.3125,y:370.125},{x:168.3125,y:370.125},{x:165.3125,y:370.125},{x:162.3125,y:370.125},{x:158.3125,y:370.125},{x:155.3125,y:370.125},{x:151.3125,y:369.125},{x:145.3125,y:369.125},{x:141.3125,y:368.125},{x:135.3125,y:367.125},{x:131.3125,y:366.125},{x:127.3125,y:365.125},{x:122.3125,y:364.125},{x:118.3125,y:364.125},{x:116.3125,y:364.125},{x:113.3125,y:364.125},{x:111.3125,y:363.125},{x:110.3125,y:363.125},{x:109.3125,y:363.125},{x:108.3125,y:363.125},{x:107.3125,y:363.125},{x:105.3125,y:363.125},{x:104.3125,y:363.125},{x:103.3125,y:363.125},{x:101.3125,y:363.125},{x:100.3125,y:362.125},{x:98.3125,y:362.125},{x:97.3125,y:362.125},{x:95.3125,y:362.125},{x:93.3125,y:362.125},{x:92.3125,y:362.125},{x:91.3125,y:362.125},{x:89.3125,y:362.125},{x:87.3125,y:362.125},{x:85.3125,y:362.125},{x:84.3125,y:361.125},{x:80.3125,y:361.125},{x:78.3125,y:361.125},{x:75.3125,y:361.125},{x:74.3125,y:361.125},{x:73.3125,y:361.125},{x:72.3125,y:361.125},{x:72.3125,y:360.125},{x:72.3125,y:358.125},{x:72.3125,y:356.125},{x:72.3125,y:353.125},{x:72.3125,y:350.125},{x:72.3125,y:346.125},{x:72.3125,y:342.125},{x:72.3125,y:337.125},{x:73.3125,y:332.125},{x:74.3125,y:327.125},{x:74.3125,y:319.125},{x:74.3125,y:311.125},{x:74.3125,y:304.125},{x:74.3125,y:295.125},{x:75.3125,y:285.125},{x:76.3125,y:276.125},{x:76.3125,y:266.125},{x:77.3125,y:258.125},{x:77.3125,y:250.125},{x:77.3125,y:242.125},{x:77.3125,y:237.125},{x:77.3125,y:232.125},{x:76.3125,y:228.125},{x:74.3125,y:224.125},{x:74.3125,y:219.125},{x:71.3125,y:213.125},{x:70.3125,y:210.125},{x:68.3125,y:206.125},{x:66.3125,y:203.125},{x:66.3125,y:200.125},{x:65.3125,y:197.125},{x:64.3125,y:194.125},{x:64.3125,y:192.125},{x:64.3125,y:189.125},{x:64.3125,y:187.125},{x:64.3125,y:185.125},{x:64.3125,y:183.125},{x:64.3125,y:181.125},{x:64.3125,y:180.125},{x:65.3125,y:179.125},{x:65.3125,y:178.125},{x:66.3125,y:178.125},{x:68.3125,y:178.125},{x:70.3125,y:179.125},{x:72.3125,y:180.125},{x:75.3125,y:182.125},{x:78.3125,y:182.125},{x:81.3125,y:183.125},{x:85.3125,y:185.125},{x:88.3125,y:186.125},{x:92.3125,y:186.125},{x:95.3125,y:188.125},{x:100.3125,y:189.125},{x:103.3125,y:190.125},{x:106.3125,y:190.125},{x:110.3125,y:191.125},{x:113.3125,y:191.125},{x:117.3125,y:191.125},{x:122.3125,y:192.125},{x:128.3125,y:192.125},{x:133.3125,y:192.125},{x:140.3125,y:192.125},{x:147.3125,y:192.125},{x:155.3125,y:193.125},{x:162.3125,y:193.125},{x:171.3125,y:193.125},{x:179.3125,y:193.125},{x:190.3125,y:193.125},{x:202.3125,y:194.125},{x:215.3125,y:195.125},{x:228.3125,y:195.125},{x:249.3125,y:196.125},{x:274.3125,y:197.125},{x:299.3125,y:199.125},{x:324.3125,y:199.125},{x:346.3125,y:199.125},{x:367.3125,y:199.125},{x:392.3125,y:199.125},{x:417.3125,y:199.125},{x:438.3125,y:199.125},{x:460.3125,y:199.125},{x:479.3125,y:199.125},{x:494.3125,y:199.125},{x:510.3125,y:199.125},{x:523.3125,y:199.125},{x:537.3125,y:199.125},{x:550.3125,y:199.125},{x:564.3125,y:199.125},{x:579.3125,y:199.125},{x:593.3125,y:199.125},{x:610.3125,y:199.125},{x:624.3125,y:199.125},{x:643.3125,y:200.125},{x:662.3125,y:200.125},{x:687.3125,y:202.125},{x:712.3125,y:203.125},{x:735.3125,y:205.125},{x:760.3125,y:206.125},{x:783.3125,y:209.125},{x:798.3125,y:210.125},{x:811.3125,y:211.125},{x:823.3125,y:212.125},{x:832.3125,y:213.125},{x:839.3125,y:213.125},{x:846.3125,y:213.125},{x:849.3125,y:213.125},{x:853.3125,y:213.125},{x:855.3125,y:213.125},{x:857.3125,y:213.125},{x:858.3125,y:213.125},{x:860.3125,y:213.125},{x:861.3125,y:212.125}],brushColor:"#fff",brushRadius:300}],width:"100%",height:"400px"},k=["#000","#fff","#009FD6","#34CBFF","#038E3B","#66CC00","#E41326","#FF0066"],S=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),y=0;y<n;y++)r[y]=arguments[y];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={color:k[0],width:"100%",height:"400px",brushRadius:3,lazyRadius:0,source:0},a.updateMath=function(){g.post("/latex",{src:a.state.source,formats:["latex_normal"]}).then((function(e){E.a.post("https://frozen-reaches-96529.herokuapp.com/stemnotes",{latex:e.data.latex_normal,src:a.state.source}).then((function(){console.log(e)})).catch((function(e){return console.log(e.message)})),a.props.addEquation(e.data.latex_normal,a.state.source)})).catch((function(e){return console.log(e)}))},a.onChangeCanvas=function(){a.saveableCanvas&&a.setState({source:a.saveableCanvas.canvasContainer.children[1].toDataURL("image/png")})},a.render=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"cnv-tools"},s.a.createElement("div",{className:"cnv-cp_con"},k.map((function(e){return s.a.createElement("div",{key:e,className:"cnv-cp_color",style:{backgroundColor:e},onClick:function(){a.setState({color:e})}})}))),s.a.createElement("div",{className:"cnv-bs_con"},s.a.createElement("div",{className:"mini green ui button",onClick:function(){if(a.state.brushRadius>10)a.setState({brushRadius:a.state.brushRadius-10});else if(a.state.brushRadius>1)a.setState({brushRadius:a.state.brushRadius-1});else{if(.25===a.state.brushRadius)return;a.setState({brushRadius:a.state.brushRadius-.25})}}},"<"),s.a.createElement("div",{className:"ui green basic label",style:{marginRight:"6px"}},a.state.brushRadius),s.a.createElement("div",{className:"mini green ui button",onClick:function(){if(a.state.brushRadius<1)a.setState({brushRadius:a.state.brushRadius+.25});else{if(10===a.state.brushRadius)return;a.setState({brushRadius:a.state.brushRadius+1})}}},">"))),s.a.createElement("div",{className:"cnv-con"},s.a.createElement("button",{className:"mini green ui button",onClick:function(){a.saveableCanvas.loadSaveData(JSON.stringify(C)),a.onChangeCanvas()}},"Clear"),s.a.createElement("button",{onClick:a.updateMath,className:"mini green ui basic button"},"Update"),s.a.createElement("button",{className:"mini green  ui button",onClick:function(){a.saveableCanvas.undo(),a.onChangeCanvas()}},"Undo")),s.a.createElement(v.a,{onChange:a.onChangeCanvas,lazyRadius:0,canvasWidth:a.state.width,canvasHeight:a.state.height,hideGrid:!0,ref:function(e){return a.saveableCanvas=e},brushColor:a.state.color,brushRadius:a.state.brushRadius,saveData:JSON.stringify(C)}),"The canvas can be a little buggy, but as soon as your first stroke works, everythings works well!")},a}return Object(u.a)(t,e),t}(n.Component),N=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){a.setState({success:!1,url:""})},a.handleUpload=function(e){if(a.uploadInput.files[0]){var t=a.uploadInput.files[0],n=a.uploadInput.files[0].name.split(".");E.a.post("https://frozen-reaches-96529.herokuapp.com/omath",{fileName:n[0],fileType:n[1]}).then((function(e){var s=e.data.data.returnData,r=s.signedRequest,y=s.url,x=y.slice(0,"https://stemnotes.s3".length)+".us-east-2"+y.slice("https://stemnotes.s3".length),i={headers:{"Content-Type":n[1]}};E.a.put(r,t,i).then((function(){a.props.addImage(x)})).catch((function(e){console.log("ERROR "+JSON.stringify(e))}))})).catch((function(e){console.log(JSON.stringify(e))}))}},a.state={success:!1,url:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"bucket-con"},s.a.createElement("div",{className:"bucket-title"},"Choose a file to upload and then press Add to add it to the page!"),s.a.createElement("div",{className:"bucket-input"},s.a.createElement("div",{className:"ui tiny input"},s.a.createElement("input",{label:"x",onChange:this.handleChange,ref:function(t){e.uploadInput=t},type:"file"})),s.a.createElement("button",{className:"ui tiny green button",onClick:this.handleUpload},"Add to Page")))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={inputVal:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row"}},s.a.createElement("div",{className:"ui tiny input",style:{flex:"1"}},s.a.createElement("input",{label:"x",value:this.state.inputVal,onChange:function(t){e.setState({inputVal:t.target.value})}})),s.a.createElement("button",{className:"ui tiny green button",onClick:function(){e.props.addText(e.state.inputVal),e.setState({inputVal:""})}},"Add Text"))}}]),t}(n.Component),j=[{index:0,name:"Demo",selected:!0},{index:1,name:"Drawing",selected:!1}],w=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).selectTab=function(e){return function(){e!==a.state.current&&void 0!==e&&(j[a.state.current].selected=!1,j[e].selected=!0,a.setState({current:e}))}},a.renderHeaderButtons=function(){return j.map((function(e){return s.a.createElement("div",{key:e.index,onClick:a.selectTab(e.index),className:"dashboard-header_button ".concat(e.index===a.state.current?"dashboard-header_button-selected":"")},e.name)}))},a.state={current:1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderBody",value:function(){switch(this.state.current){case 1:return s.a.createElement("div",{className:"db-canvas_con"},s.a.createElement(N,{addImage:this.props.addImage}),s.a.createElement(S,{addEquation:this.props.addEquation}),s.a.createElement(O,{addText:this.props.addText}));default:return s.a.createElement("div",{style:{padding:"20px",fontSize:"20px",height:"100%"}},s.a.createElement("p",null,"Hi,",s.a.createElement("br",null),"I'm Farhan and I made this app with my friends, if you're a professor or an educator who would like to contact me about this, please email me at farhan.mohammed@ryerson.ca",s.a.createElement("br",null),s.a.createElement("br",null),"Feel free to checkout my website ",s.a.createElement("a",{href:"https://farhan.site/"},"https://farhan.site/")),s.a.createElement("iframe",{title:"Youtube demo",width:"100%",height:"300",src:"https://www.youtube.com/embed/gKgpDePcQMg"}))}}},{key:"render",value:function(){return s.a.createElement("div",{className:"dashboard"},s.a.createElement("div",{className:"dashboard-header"},this.renderHeaderButtons()),s.a.createElement("div",{className:"dashboard-body"},s.a.createElement("div",{className:"dashboard-body_sec"},this.renderBody())))}}]),t}(n.Component),R=(a(118),function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).addEquation=function(e,t){var n=a.state.eqns;""===e?n.push({index:a.state.counter,type:"image",src:t}):n.push({index:a.state.counter,type:"math",value:e}),a.setState({eqns:n,counter:a.state.counter+1})},a.addImage=function(e){var t=a.state.eqns;t.push({index:a.state.counter,type:"image",src:e}),a.setState({eqns:t,counter:a.state.counter+1})},a.addText=function(e){var t=a.state.eqns;t.push({index:a.state.counter,type:"text",value:e}),a.setState({eqns:t,counter:a.state.counter+1})},a.updateIndex=function(e,t){for(var n=a.state.eqns,s=0;s<n.length;s++)if(n[s].index===e)return n[s].value=t,void a.setState({eqns:n})},a.removeIndex=function(e){var t=a.state.eqns;t.pop(e),a.setState({eqns:t})},a.state={counter:3,eqns:[{index:1,type:"text",value:"# Welcome to OMath"},{index:2,type:"text",value:"## Please Enter an equation"},{index:0,type:"math",value:"[ x^n + y^n = z^n ]"}]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e={removeItem:this.removeIndex,updateIndex:this.updateIndex,listOfMath:this.state.eqns},t={addEquation:this.addEquation,addImage:this.addImage,addText:this.addText};return s.a.createElement("div",{className:"body"},s.a.createElement("div",{className:"page"},s.a.createElement(p,e)),s.a.createElement(w,t))}}]),t}(n.Component));y.a.render(s.a.createElement(R,null),document.getElementById("root"))},37:function(e,t,a){e.exports=a(119)}},[[37,1,2]]]);
//# sourceMappingURL=main.23619aee.chunk.js.map