define("dojo/_base/declare dojo/Deferred dojo/_base/lang dojo/dom-construct dojo/on esri/geometry/scaleUtils esri/tasks/BufferParameters esri/tasks/query esri/tasks/QueryTask esri/tasks/IdentifyTask esri/tasks/IdentifyParameters esri/geometry/Geometry esri/tasks/GeometryService esri/geometry/webMercatorUtils esri/symbols/SimpleFillSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleMarkerSymbol esri/Color jimu/dijit/TabContainer dijit/TitlePane dijit/_WidgetsInTemplateMixin jimu/BaseWidget".split(" "),
function(z,H,r,k,v,A,B,p,q,l,h,I,C,D,w,m,x,n,E,y,F,G){return z([G,F],{tabContainer:null,baseClass:"jimu-widget-identifyMany",mapClick:null,postCreate:function(){this.inherited(arguments);this._initTabContainer();esri.config.defaults.io.proxyUrl="/website/DART/StaffMap/proxy/proxy.ashx";esri.config.defaults.io.alwaysUseProxy=!1;highlightResults_Storm=[];highlightResults_Sewer=[];highlightResults=[];shapeField1=/Shape/;shapeField2=/SHAPE/;linkValue=/http/;publicMap=!0;myMapWidth=this.map.width;myMapHeight=
this.map.height;myMapSR=this.map.spatialReference;symbol_Highlight=new w(w.STYLE_SOLID,m(m.STYLE_SOLID,new n([0,0,255]),2),new n([255,255,0,.25]));symbol_Highlight_Pt=new x(x.STYLE_SQUARE,14,new m(m.STYLE_SOLID,new n([0,0,255]),1),new n([0,0,255,.25]));queryTaskParcelGeometry=new q("https://gis.cityoftacoma.org/arcgis/rest/services/PDS/DARTparcels_PUBLIC/MapServer/3");queryParcelGeometry=new p;queryParcelGeometry.outFields=["TaxParcelNumber"];queryParcelGeometry.returnGeometry=!0;queryParcelGeometry.outSpatialReference=
myMapSR;queryBuildingTask=new q("https://gis.cityoftacoma.org/arcgis/rest/services/PDS/DARTquery_WAB_PUBLIC/MapServer/26");queryBuilding=new p;queryBuilding.returnGeometry=!1;queryBuilding.outFields="BUILDINGID PARCELNUMBER PROPERTYTYPE PRIMARYOCCUPANCYDESCRIPTION SQUAREFEET NETSQUAREFEET".split(" ");queryBuilding.orderByFields=["BUILDINGID"];publicMap||(queryTaskWetlandDoc=new q("https://gis.cityoftacoma.org/arcgis/arcgis/rest/services/Test/WetlandTest/MapServer/1"),queryWetlandDoc=new p,queryWetlandDoc.returnGeometry=
!1,queryWetlandDoc.outFields=["Document_ID","File_Number","Address","Wetland_PolygonID","Notes"],wetlandDocDiv=this.wetland_details);gsvc=new C("https://gis.cityoftacoma.org/arcgis/rest/services/Utilities/Geometry/GeometryServer");paramsBuffer=new B;paramsBuffer.distances=[-2];paramsBuffer.bufferSpatialReference=new esri.SpatialReference({wkid:102100});paramsBuffer.outSpatialReference=myMapSR;paramsBuffer.unit=esri.tasks.GeometryService.UNIT_FOOT;identifyTask=new l("https://gis.cityoftacoma.org/arcgis/rest/services/PDS/DARTquery_WAB_PUBLIC/MapServer");
identifyParams=new h;identifyParams.returnGeometry=!0;identifyParams.layerIds=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];identifyParams.layerOption=h.LAYER_OPTION_VISIBLE;identifyParams.width=myMapWidth;identifyParams.height=myMapHeight;identifyParams.spatialReference=myMapSR;identifyParams.tolerance=3;identifyTaskArsenic=new l("https://fortress.wa.gov/ecy/gisprod/arcgis/rest/services/TCP/DirtAlert/MapServer");identifyParamsArsenic=new h;identifyParamsArsenic.returnGeometry=
!1;identifyParamsArsenic.layerIds=[15];identifyParamsArsenic.layerOption=h.LAYER_OPTION_VISIBLE;identifyParamsArsenic.width=myMapWidth;identifyParamsArsenic.height=myMapHeight;identifyParamsArsenic.spatialReference=myMapSR;identifyParamsArsenic.tolerance=3;arsenicDiv=this.arsenic_details;identifyTaskStorm=new l("https://gis.cityoftacoma.org/arcgis/rest/services/PDS/DARTsewer/MapServer");identifyParamsStorm=new h;identifyParamsStorm.returnGeometry=!0;identifyParamsStorm.layerIds=[0,1,2,3];identifyParamsStorm.layerOption=
h.LAYER_OPTION_VISIBLE;identifyParamsStorm.width=myMapWidth;identifyParamsStorm.height=myMapHeight;identifyParamsStorm.spatialReference=myMapSR;identifyParamsStorm.tolerance=3;StormDiv=this.storm_details;identifyTaskSewer=new l("https://gis.cityoftacoma.org/arcgis/rest/services/PDS/DARTsewer/MapServer");identifyParamsSewer=new h;identifyParamsSewer.returnGeometry=!0;identifyParamsSewer.layerIds=[4,5,6,7];identifyParamsSewer.layerOption=h.LAYER_OPTION_VISIBLE;identifyParamsSewer.width=myMapWidth;identifyParamsSewer.height=
myMapHeight;identifyParamsSewer.spatialReference=myMapSR;identifyParamsSewer.tolerance=3;SewerDiv=this.sewer_details},startup:function(){this.inherited(arguments)},_initTabContainer:function(){var a=[];a.push({title:this.nls.tab1label,content:this.tabNode1});a.push({title:this.nls.tab2label,content:this.tabNode2});a.push({title:this.nls.tab3label,content:this.tabNode3});a.push({title:this.nls.tab4label,content:this.tabNode4});a.push({title:this.nls.tab5label,content:this.tabNode5});this.selTab=this.nls.tab1label;
this.tabContainer=new E({tabs:a,selected:this.selTab},this.tabIdentify);this.tabContainer.startup()},_removeGraphic:function(a){dojo.forEach(this.map.graphics.graphics,function(b){b&&b.id===a&&this.map.graphics.remove(b)},this)},_tabSummaries:function(a,b,e){0<b.length&&(a=-1!==a.indexOf("Parcel Details")?new y({title:a,open:!0,content:b}):new y({title:a,open:!1,content:b}),e.appendChild(a.domNode),k.place("<br>",e,"first"))},_showFeature:function(a,b){this._removeGraphic("identify");var e="Storm"==
b?highlightResults_Storm[a]:"Sewer"==b?highlightResults_Sewer[a]:highlightResults[a];"point"==e.geometry.type?e.setSymbol(symbol_Highlight_Pt):e.setSymbol(symbol_Highlight);e.geometry.spatialReference=myMapSR;e.id="identify";this.map.graphics.add(e)},_numberWithCommas:function(a){return a?a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):0},_showWetlandDocs:function(a){for(var b="<b><br>Wetland Permit Document</b>",e=0;e<a.features.length;e++){var f=a.features[e].attributes,c;for(c in f)"Document_ID"==
c?b+="<br>&nbsp;&nbsp;<a href='http://cedd031d/WetlandPermits/"+f[c]+".pdf'  title='Open document' target='_blank'>Link</a>&nbsp;&nbsp;|&nbsp;&nbsp;":"null"!=String(f[c])&&("File_Number"==c?b+="File:  <i>"+String(f[c])+"</i>":"Wetland_PolygonID"!=c&&(b+=" | "+c+":  <i>"+String(f[c])+"</i>"))}k.place(b,wetlandDocDiv)},_showWetlandDocsError:function(a){alert("Error retrieving wetland documents: "+a.message);console.error("WetlandDocs Error: ",a.message)},_processQueryResults:function(a){var b="",e=
"Building Summary";1<a.features.length&&(e+=", "+a.features.length+" buildings on parcel");var f=[];for(fieldName in a.fieldAliases)f.push(a.fieldAliases[fieldName]);for(var c=0;c<a.features.length;c++){var g=0;for(fieldName in a.features[c].attributes)1!=g&&(b=4==g||5==g?b+("&nbsp;&nbsp;"+f[g]+": <i>"+this._numberWithCommas(a.features[c].attributes[fieldName])+"</i><br>"):b+("&nbsp;&nbsp;"+f[g]+": <i>"+a.features[c].attributes[fieldName]+"</i><br>")),g++;b+="<br>"}this._tabSummaries(e,b,this.building_details)},
_formatLines:function(a,b,e){var f="";1==a?"ADDRESSID"!=b&&(f+="&nbsp;&nbsp;"+b+": <i>"+e+"</i> &nbsp;&nbsp;"):f+="&nbsp;&nbsp;"+b+": <i>"+e+"</i><br>";return f},_processIdentifyResultsStorm:function(a){var b="",e=0,f=[];highlightResults_Storm=[];for(var c=0;c<a.length;c++)if("Flow Direction"!==a[c].layerName){b+="<b><br>"+a[c].layerName+"</b><br>";"Surfacewater Manhole"==a[c].layerName&&void 0!=a[c].feature.attributes.RIMELEV&&"Null"!=a[c].feature.attributes.RIMELEV&&" "!=a[c].feature.attributes.RIMELEV&&
void 0!=a[c].feature.attributes.SUMPELEV&&"Null"!=a[c].feature.attributes.SUMPELEV&&" "!=a[c].feature.attributes.SUMPELEV&&(b+="&nbsp;&nbsp;Manhole Depth: <i>"+(a[c].feature.attributes.RIMELEV-a[c].feature.attributes.SUMPELEV).toFixed(2)+"</i><br>");var g=0;for(fieldName in a[c].feature.attributes)"Null"===a[c].feature.attributes[fieldName]||" "===a[c].feature.attributes[fieldName]||"OBJECTID"===fieldName||"ENTITYID"===fieldName||"FID"===fieldName||shapeField1.test(fieldName)||shapeField2.test(fieldName)||
(linkValue.test(a[c].feature.attributes[fieldName])?b+="&nbsp;&nbsp;<a href='"+a[c].feature.attributes[fieldName]+"' target='_blank' title='View document'>"+fieldName+"</a><br>":0==g?(b+="&nbsp;&nbsp;"+fieldName+": <span id='HighlightStorm"+e+"'></span><br>",f.push(a[e].feature.attributes[fieldName]),highlightResults_Storm.push(a[e].feature)):b+=this._formatLines(2,fieldName,a[c].feature.attributes[fieldName]),g++);e++}this._tabSummaries("Storm",b,this.storm_details);for(c=0;c<f.length;c++)a=dojo.byId("HighlightStorm"+
c),k.create("span",{innerHTML:"<i><span style='color: blue; cursor: pointer;' title='Highlight boundary'>"+f[c]+"</span></i>"},a),this.own(v(a,"click",r.hitch(this,this._showFeature,c,"Storm")))},_processIdentifyResultsSewer:function(a){var b="",e=0,f=[];highlightResults_Sewer=[];for(var c=0;c<a.length;c++)if("Flow Direction"!==a[c].layerName){b+="<b><br>"+a[c].layerName+"</b><br>";"Wastewater Manhole"==a[c].layerName&&void 0!=a[c].feature.attributes.RIMELEV&&"Null"!=a[c].feature.attributes.RIMELEV&&
" "!=a[c].feature.attributes.RIMELEV&&void 0!=a[c].feature.attributes.SUMPELEV&&"Null"!=a[c].feature.attributes.SUMPELEV&&" "!=a[c].feature.attributes.SUMPELEV&&(b+="&nbsp;&nbsp;Manhole Depth: <i>"+(a[c].feature.attributes.RIMELEV-a[c].feature.attributes.SUMPELEV).toFixed(2)+"</i><br>");var g=0;for(fieldName in a[c].feature.attributes)"Null"===a[c].feature.attributes[fieldName]||" "===a[c].feature.attributes[fieldName]||"OBJECTID"===fieldName||"ENTITYID"===fieldName||"FID"===fieldName||shapeField1.test(fieldName)||
shapeField2.test(fieldName)||(linkValue.test(a[c].feature.attributes[fieldName])?b+="&nbsp;&nbsp;<a href='"+a[c].feature.attributes[fieldName]+"' target='_blank' title='View document'>"+fieldName+"</a><br>":0==g?(b+="&nbsp;&nbsp;"+fieldName+": <span id='HighlightSewer"+e+"'></span><br>",f.push(a[e].feature.attributes[fieldName]),highlightResults_Sewer.push(a[e].feature)):b+=this._formatLines(2,fieldName,a[c].feature.attributes[fieldName]),g++);e++}this._tabSummaries("Sewer",b,this.sewer_details);
for(c=0;c<f.length;c++)a=dojo.byId("HighlightSewer"+c),k.create("span",{innerHTML:"<i><span style='color: blue; cursor: pointer;' title='Highlight boundary'>"+f[c]+"</span></i>"},a),this.own(v(a,"click",r.hitch(this,this._showFeature,c,"Sewer")))},_processIdentifyResults:function(a){var b="",e="",f="",c="",g="",h="",l="",m="",n="";highlightResults=[];var t=[],p="",u='&bull; &nbsp;<a href="https://www.bing.com/maps/?v=2&cp='+mapClick.y+"~"+mapClick.x+'&lvl=19&sty=b" target="_blank">';u=u+"Bird's Eye Photo (Microsoft Bing)</a><br>&bull; &nbsp;<a href=\"https://wspdsmap.cityoftacoma.org/website/BLUS/StreetView.htm?lat="+
(mapClick.y+"&lon="+mapClick.x+'" target="_blank">');u+="Street View Photo (Google Maps)</a>";for(var d=0;d<a.length;d++){p!=a[d].layerName&&(0!=a[d].layerId&&1!=a[d].layerId&&(b+="<b><br>"+a[d].layerName+"</b><br>"),6==a[d].layerId||22==a[d].layerId||23==a[d].layerId)&&(b+="<i>Informational purposes only and should not be used for design. Data must be field verified and updated as to its accuracy.</i><br>");var q=0;for(fieldName in a[d].feature.attributes)"Null"===a[d].feature.attributes[fieldName]||
" "===a[d].feature.attributes[fieldName]||"OBJECTID"===fieldName||"ENTITYID"===fieldName||"FID"===fieldName||shapeField1.test(fieldName)||shapeField2.test(fieldName)||(linkValue.test(a[d].feature.attributes[fieldName])?b+="&nbsp;&nbsp;<a href='"+a[d].feature.attributes[fieldName]+"' target='_blank' title='View document'>"+fieldName+"</a><br>":0==q?("Zoning District"==fieldName&&p!=a[d].layerName&&(b+='&nbsp;&nbsp;<a href="http://cms.cityoftacoma.org/Planning/Zoning%20Reference%20Guide%202016.pdf"  target="_blank" title="Zoning Descriptions">Zoning Descriptions</a><br>',
b+='&nbsp;&nbsp;<a href="http://cms.cityoftacoma.org/cityclerk/Files/MunicipalCode/Title13-LandUseRegulatoryCode.PDF"  target="_blank" title="Land Use Regulatory Code">Land Use Regulatory Code</a><br>'),"Deed"==fieldName||"Easement"==fieldName||"Vacation"==fieldName?b+="&nbsp;&nbsp;"+fieldName+": <span id='Highlight"+d+"'></span> |  <a href='http://www.govme.org/gMap/Doc/displayDoc.aspx?category=legaldocs&id="+a[d].feature.attributes[fieldName]+"' target='_blank' title='View document' >Document</a><br>":
"Kzt"==fieldName?b+="&nbsp;&nbsp;"+fieldName+": <span id='Highlight"+d+"'></span> | IBC: <i>"+a[d].feature.attributes.IBC+" mph</i> | IRC: <i>"+a[d].feature.attributes.IRC+" mph</i><br>":15==a[d].layerId?b+="&nbsp;&nbsp;"+fieldName+": <span id='Highlight"+d+"'></span> | Link: <a href='https://wspdsmap.cityoftacoma.org/website/HistoricMap/scripts/summary.asp?ID=("+a[d].feature.attributes.ID+")&map=("+a[d].feature.attributes.LAT+","+a[d].feature.attributes.LONG+")' title='Inventory Details'  target='_blank'>Inventory Details</a><br>":
1==a[d].layerId?(b+="&nbsp;&nbsp;"+fieldName+": <span id='Highlight"+d+"'></span><br>",b+='&nbsp;&nbsp;<a href="https://wsowa.ci.tacoma.wa.us/cot-itd/addressbased/permithistory.aspx?Address='+a[d].feature.attributes.Address+'&Mode=simple" target="_blank">E-Vault Document(s)</a><br>'):b+="&nbsp;&nbsp;"+fieldName+": <span id='Highlight"+d+"'></span><br>",t.push(a[d].feature.attributes[fieldName]),highlightResults.push(a[d].feature)):1<=a[d].layerId&&4>=a[d].layerId?b+=this._formatLines(1,fieldName,
a[d].feature.attributes[fieldName]):6!=a[d].layerId||publicMap||"WETLANDID"!=fieldName?"Lot Size (SF)"==fieldName?(b+="&nbsp;&nbsp;"+fieldName+": <i>"+this._numberWithCommas(a[d].feature.attributes[fieldName])+"</i><br>",b+='&nbsp;&nbsp;Links: <a href="http://epip.co.pierce.wa.us/CFApps/atr/epip/summary.cfm?parcel='+a[d].feature.attributes.Number+'" target="_blank">',b+="Assessor</a> | ",b+='<a href="http://www.govme.org/Common/MyTacoma/MyTacoma.aspx?Parcel='+a[d].feature.attributes.Number+'" target="_blank">',
b+="MyTacoma</a><br>&nbsp;<br>"):"E-Vault"==fieldName?(b+='&nbsp;&nbsp;Link: <a href="http://www.govme.org/gMap/Info/eVaultFilter.aspx?StreetIDs='+a[d].feature.attributes["E-Vault"]+'" target="_blank">',b+="E-Vault Document(s)</a><br>&nbsp;<br>"):5!=a[d].layerId&&15!=a[d].layerId&&(b+=this._formatLines(2,fieldName,a[d].feature.attributes[fieldName])):(queryWetlandDoc.where="Wetland_PolygonID = "+a[d].feature.attributes[fieldName],queryTaskWetlandDoc.execute(queryWetlandDoc,this._showWetlandDocs,this._showWetlandDocsError)),
q++);0==a[d].layerId?(e="Pierce County Assessor \u2013 Parcel Details for <br>&nbsp;&nbsp;&nbsp;&nbsp;"+a[0].feature.attributes.Number+", "+a[0].feature.attributes["Site Address"],f+=b):1==a[d].layerId?c+=b:2<=a[d].layerId&&4>=a[d].layerId?g+=b:5<=a[d].layerId&&6>=a[d].layerId||22==a[d].layerId||23==a[d].layerId?l+=b:7<=a[d].layerId&&9>=a[d].layerId?m+=b:10<=a[d].layerId&&15>=a[d].layerId?h+=b:n+=b;b="";p=a[d].layerName}this.tab2_details.innerHTML=0<l.length?l:"Nothing Found";this.tab4_details.innerHTML=
0<m.length||0<h.length?m:"Nothing Found";this.tab5_details.innerHTML=0<n.length?n:"Nothing Found";this._tabSummaries(e,f,this.parcel_details);this._tabSummaries("Permit/Site History",c,this.permit_details);this._tabSummaries("Legal Documents",g,this.legal_details);this._tabSummaries("Photo Links",u,this.linkLatLong_details);this._tabSummaries("Historic Status",h,this.historic_details);for(d=0;d<t.length;d++)a=dojo.byId("Highlight"+d),4==d?k.create("span",{innerHTML:"<i><span style='color: blue; cursor: pointer;' title='Highlight boundary'>"+
t[d].replace("Residental","Residential")+"</span></i>"},a):k.create("span",{innerHTML:"<i><span style='color: blue; cursor: pointer;' title='Highlight boundary'>"+t[d]+"</span></i>"},a),this.own(v(a,"click",r.hitch(this,this._showFeature,d)));this.generalIdNode.innerHTML=""},_tabCleanUp:function(){this.parcel_details.innerHTML="";this.building_details.innerHTML="";this.permit_details.innerHTML="";this.legal_details.innerHTML="";this.linkLatLong_details.innerHTML="";this.historic_details.innerHTML=
"";this.wetland_details.innerHTML="";this.arsenic_details.innerHTML="";this.storm_details.innerHTML="";this.sewer_details.innerHTML=""},_mapClickHandler:function(a){this._removeGraphic("identify");this._tabCleanUp();mapClick=D.webMercatorToGeographic(a.mapPoint);queryParcelGeometry.geometry=identifyParams.geometry=identifyParamsStorm.geometry=identifyParamsSewer.geometry=identifyParamsArsenic.geometry=a.mapPoint;identifyParams.mapExtent=identifyParamsStorm.mapExtent=identifyParamsSewer.mapExtent=
identifyParamsArsenic.mapExtent=this.map.extent;identifyTaskArsenic.execute(identifyParamsArsenic,function(a){0<a.length&&k.place("<b><br>Arsenic/Lead</b><br>&nbsp;&nbsp;Estimated Soil Contamination: <i>"+a[0].feature.attributes.NAME+"</i><br>",this.arsenicDiv)},function(a){console.error("Arsenic Error: "+a.message)});var b=1E4>=A.getScale(this.map);this.generalIdNode.innerHTML="<div class='dijitProgressBar dijitProgressBarEmpty dijitProgressBarIndeterminate' role='progressbar' aria-labelledby='dijit_ProgressBar_0_label' aria-valuemin='0' aria-valuemax='100' id='dijit_ProgressBar_0' widgetid='dijit_ProgressBar_0' style='display: block;'><div data-dojo-attach-point='internalProgress' class='dijitProgressBarFull' style='width: 100%;'><div class='dijitProgressBarTile' role='presentation'></div><span style='visibility:hidden'>&nbsp;</span></div><div data-dojo-attach-point='labelNode' class='dijitProgressBarLabel' id='dijit_ProgressBar_0_label'>&nbsp;</div><span data-dojo-attach-point='indeterminateHighContrastImage' class='dijitInline dijitProgressBarIndeterminateHighContrastImage' src='//js.arcgis.com/3.15/dijit/themes/a11y/indeterminate_progress.gif'></span></div>";
var e=this;queryTaskParcelGeometry.execute(queryParcelGeometry).then(function(a){0<a.features.length?(b&&(queryBuilding.where="PARCELNUMBER='"+a.features[0].attributes.TaxParcelNumber+"'",queryBuildingTask.execute(queryBuilding).then(function(a){0<a.features.length&&e._processQueryResults(a)},function(a){alert("Error retrieving building results: "+a.message);console.error("Buildings Error: "+a.message)}),k.place("<b><br>Arsenic/Lead</b><br>&nbsp;&nbsp;Link: <a href='https://fortress.wa.gov/ecy/dirtalert/'  target='_blank' title='Find EPA Document'>Soil Database (WADOE)</a> for soil sampling and replacement. <br>",
this.arsenicDiv)),paramsBuffer.geometries=[a.features[0].geometry],gsvc.buffer(paramsBuffer).then(function(a){identifyParams.geometry=identifyParamsStorm.geometry=identifyParamsSewer.geometry=a[0];identifyTaskStorm.execute(identifyParamsStorm,function(a){e._processIdentifyResultsStorm(a)},function(a){alert("Error in Storm identify, please try again.");console.error("Identify Storm Error: ",a)});identifyTaskSewer.execute(identifyParamsSewer,function(a){e._processIdentifyResultsSewer(a)},function(a){alert("Error in Sewer identify, please try again.");
console.error("Identify Sewer Error: ",a)});identifyParams.tolerance=3;identifyTask.execute(identifyParams,function(a){e._processIdentifyResults(a)},function(a){alert("Error in identify, please try again.");console.error("Identify Error: ",a)})},function(a){alert("Error retrieving parcel results: "+a.message);console.error("Parcel Buffer Error: "+a.message)})):(identifyTaskStorm.execute(identifyParamsStorm,function(a){e._processIdentifyResultsStorm(a)},function(a){alert("Error in Storm identify, please try again.");
console.error("Identify Storm Error: ",a)}),identifyTaskSewer.execute(identifyParamsSewer,function(a){e._processIdentifyResultsSewer(a)},function(a){alert("Error in Sewer identify, please try again.");console.error("Identify Sewer Error: ",a)}),identifyParams.tolerance=20,identifyTask.execute(identifyParams,function(a){e._processIdentifyResults(a)},function(a){alert("Error in identify, please try again.");console.error("Identify Error: ",a)}))},function(a){alert("Error in parcel identify, please try again.");
console.error("Parcel Geometry Error: "+a.message)})},onOpen:function(){this.generalIdNode.innerHTML=this.nls.label1+"<br>&nbsp;<br>"+this.nls.label2+"<br>&nbsp;<br>"+this.nls.label3+"<br>&nbsp;<br>";this.map.infoWindow.hide();defaultClick=this.map.onClick;this.map.onClick=null;mapClickIdentify=this.map.on("click",r.hitch(this,this._mapClickHandler))},onClose:function(){this._removeGraphic("identify");mapClickIdentify.remove();this.map.onClick=defaultClick},onMinimize:function(){console.log("onMinimize")},
onMaximize:function(){console.log("onMaximize")},onSignIn:function(a){console.log("onSignIn")},onSignOut:function(){console.log("onSignOut")}})});