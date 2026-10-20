import{m as At,G as Me}from"./Dialogs-QF8w7vO0.js";const{mxCylinder:L,mxUtils:p,mxRectangle:P,mxCellRenderer:M,mxActor:c,mxConstants:y,mxPoint:n,mxPerimeter:F,mxStyleRegistry:$,mxConnectionConstraint:s,mxShape:V,mxRhombus:ae,mxRectangleShape:z,mxHexagon:ht,mxEllipse:C,mxDoubleEllipse:pt,mxArrowConnector:Ke,mxConnector:wt,mxMarker:re,mxEdgeStyle:ut,mxLabel:Lt,mxImageShape:Ft,mxSwimlane:Fe,mxLine:kt,mxTriangle:Pt,mxCloud:_t,mxArrow:Nt,mxElbowEdgeHandler:Dt}=At;(function(){function Q(){Fe.call(this)}p.extend(Q,Fe),Q.prototype.getLabelBounds=function(e){var i=this.getTitleSize();return i==0?V.prototype.getLabelBounds.apply(this,arguments):Fe.prototype.getLabelBounds.apply(this,arguments)},Q.prototype.paintVertexShape=function(e,i,o,t,a){var r=this.getTitleSize();r==0?z.prototype.paintBackground.apply(this,arguments):(Fe.prototype.paintVertexShape.apply(this,arguments),e.translate(-i,-o)),this.paintForeground(e,i,o,t,a)},Q.prototype.paintForeground=function(e,i,o,t,a){if(this.state!=null){var r=this.flipH,l=this.flipV;if(this.direction==y.DIRECTION_NORTH||this.direction==y.DIRECTION_SOUTH){var f=r;r=l,l=f}e.rotate(-this.getShapeRotation(),r,l,i+t/2,o+a/2);var g;g=this.scale,i=this.bounds.x/g,o=this.bounds.y/g,t=this.bounds.width/g,a=this.bounds.height/g,this.paintTableForeground(e,i,o,t,a)}},Q.prototype.paintTableForeground=function(e,i,o,t,a){var r=this.state.view.graph,l=r.getActualStartSize(this.state.cell),f=r.model.getChildCells(this.state.cell,!0);if(f.length>0){var g=p.getValue(this.state.style,"rowLines","1")!="0",h=p.getValue(this.state.style,"columnLines","1")!="0";if(g)for(var d=1;d<f.length;d++){var u=r.getCellGeometry(f[d]);u!=null&&(e.begin(),e.moveTo(i+l.x,o+u.y),e.lineTo(i+t-l.width,o+u.y),e.end(),e.stroke())}if(h)for(var w=r.model.getChildCells(f[0],!0),d=1;d<w.length;d++){var u=r.getCellGeometry(w[d]);u!=null&&(e.begin(),e.moveTo(i+u.x+l.x,o+l.y),e.lineTo(i+u.x+l.x,o+a-l.height),e.end(),e.stroke())}}},M.registerShape("table",Q);function D(){L.call(this)}p.extend(D,L),D.prototype.size=20,D.prototype.darkOpacity=0,D.prototype.darkOpacity2=0,D.prototype.paintVertexShape=function(e,i,o,t,a){var r=Math.max(0,Math.min(t,Math.min(a,parseFloat(p.getValue(this.style,"size",this.size))))),l=Math.max(-1,Math.min(1,parseFloat(p.getValue(this.style,"darkOpacity",this.darkOpacity)))),f=Math.max(-1,Math.min(1,parseFloat(p.getValue(this.style,"darkOpacity2",this.darkOpacity2))));e.translate(i,o),e.begin(),e.moveTo(0,0),e.lineTo(t-r,0),e.lineTo(t,r),e.lineTo(t,a),e.lineTo(r,a),e.lineTo(0,a-r),e.lineTo(0,0),e.close(),e.end(),e.fillAndStroke(),this.outline||(e.setShadow(!1),l!=0&&(e.setFillAlpha(Math.abs(l)),e.setFillColor(l<0?"#FFFFFF":"#000000"),e.begin(),e.moveTo(0,0),e.lineTo(t-r,0),e.lineTo(t,r),e.lineTo(r,r),e.close(),e.fill()),f!=0&&(e.setFillAlpha(Math.abs(f)),e.setFillColor(f<0?"#FFFFFF":"#000000"),e.begin(),e.moveTo(0,0),e.lineTo(r,r),e.lineTo(r,a),e.lineTo(0,a-r),e.close(),e.fill()),e.begin(),e.moveTo(r,a),e.lineTo(r,r),e.lineTo(0,0),e.moveTo(r,r),e.lineTo(t,r),e.end(),e.stroke())},D.prototype.getLabelMargins=function(e){if(p.getValue(this.style,"boundedLbl",!1)){var i=parseFloat(p.getValue(this.style,"size",this.size))*this.scale;return new P(i,i,0,0)}return null},M.registerShape("cube",D);var j=Math.tan(p.toRadians(30)),O=(.5-j)/2;function Z(){c.call(this)}p.extend(Z,c),Z.prototype.size=20,Z.prototype.redrawPath=function(e,i,o,t,a){var r=Math.min(t,a/j);e.translate((t-r)/2,(a-r)/2+r/4),e.moveTo(0,.25*r),e.lineTo(.5*r,r*O),e.lineTo(r,.25*r),e.lineTo(.5*r,(.5-O)*r),e.lineTo(0,.25*r),e.close(),e.end()},M.registerShape("isoRectangle",Z);function ce(){L.call(this)}p.extend(ce,L),ce.prototype.size=20,ce.prototype.redrawPath=function(e,i,o,t,a,r){var l=Math.min(t,a/(.5+j));r?(e.moveTo(0,.25*l),e.lineTo(.5*l,(.5-O)*l),e.lineTo(l,.25*l),e.moveTo(.5*l,(.5-O)*l),e.lineTo(.5*l,(1-O)*l),e.end()):(e.translate((t-l)/2,(a-l)/2),e.moveTo(0,.25*l),e.lineTo(.5*l,l*O),e.lineTo(l,.25*l),e.lineTo(l,.75*l),e.lineTo(.5*l,(1-O)*l),e.lineTo(0,.75*l),e.close(),e.end())},M.registerShape("isoCube",ce);function ke(){L.call(this)}p.extend(ke,L),ke.prototype.redrawPath=function(e,i,o,t,a,r){var l=Math.min(a/2,Math.round(a/8)+this.strokewidth-1);(r&&this.fill!=null||!r&&this.fill==null)&&(e.moveTo(0,l),e.curveTo(0,2*l,t,2*l,t,l),r||(e.stroke(),e.begin()),e.translate(0,l/2),e.moveTo(0,l),e.curveTo(0,2*l,t,2*l,t,l),r||(e.stroke(),e.begin()),e.translate(0,l/2),e.moveTo(0,l),e.curveTo(0,2*l,t,2*l,t,l),r||(e.stroke(),e.begin()),e.translate(0,-l)),r||(e.moveTo(0,l),e.curveTo(0,-l/3,t,-l/3,t,l),e.lineTo(t,a-l),e.curveTo(t,a+l/3,0,a+l/3,0,a-l),e.close())},ke.prototype.getLabelMargins=function(e){return new P(0,2.5*Math.min(e.height/2,Math.round(e.height/8)+this.strokewidth-1),0,0)},M.registerShape("datastore",ke);function ie(){L.call(this)}p.extend(ie,L),ie.prototype.size=30,ie.prototype.darkOpacity=0,ie.prototype.paintVertexShape=function(e,i,o,t,a){var r=Math.max(0,Math.min(t,Math.min(a,parseFloat(p.getValue(this.style,"size",this.size))))),l=Math.max(-1,Math.min(1,parseFloat(p.getValue(this.style,"darkOpacity",this.darkOpacity))));e.translate(i,o),e.begin(),e.moveTo(0,0),e.lineTo(t-r,0),e.lineTo(t,r),e.lineTo(t,a),e.lineTo(0,a),e.lineTo(0,0),e.close(),e.end(),e.fillAndStroke(),this.outline||(e.setShadow(!1),l!=0&&(e.setFillAlpha(Math.abs(l)),e.setFillColor(l<0?"#FFFFFF":"#000000"),e.begin(),e.moveTo(t-r,0),e.lineTo(t-r,r),e.lineTo(t,r),e.close(),e.fill()),e.begin(),e.moveTo(t-r,0),e.lineTo(t-r,r),e.lineTo(t,r),e.end(),e.stroke())},M.registerShape("note",ie);function ge(){V.call(this)}p.extend(ge,V),ge.prototype.isoAngle=15,ge.prototype.paintVertexShape=function(e,i,o,t,a){var r=Math.max(.01,Math.min(94,parseFloat(p.getValue(this.style,"isoAngle",this.isoAngle))))*Math.PI/200,l=Math.min(t*Math.tan(r),a*.5);e.translate(i,o),e.begin(),e.moveTo(t*.5,0),e.lineTo(t,l),e.lineTo(t,a-l),e.lineTo(t*.5,a),e.lineTo(0,a-l),e.lineTo(0,l),e.close(),e.fillAndStroke(),e.setShadow(!1),e.begin(),e.moveTo(0,l),e.lineTo(t*.5,2*l),e.lineTo(t,l),e.moveTo(t*.5,2*l),e.lineTo(t*.5,a),e.stroke()},M.registerShape("isoCube2",ge);function Ee(){V.call(this)}p.extend(Ee,V),Ee.prototype.size=15,Ee.prototype.paintVertexShape=function(e,i,o,t,a){var r=Math.max(0,Math.min(a*.5,parseFloat(p.getValue(this.style,"size",this.size))));e.translate(i,o),r==0?(e.rect(0,0,t,a),e.fillAndStroke()):(e.begin(),e.moveTo(0,r),e.arcTo(t*.5,r,0,0,1,t*.5,0),e.arcTo(t*.5,r,0,0,1,t,r),e.lineTo(t,a-r),e.arcTo(t*.5,r,0,0,1,t*.5,a),e.arcTo(t*.5,r,0,0,1,0,a-r),e.close(),e.fillAndStroke(),e.setShadow(!1),e.begin(),e.moveTo(t,r),e.arcTo(t*.5,r,0,0,1,t*.5,2*r),e.arcTo(t*.5,r,0,0,1,0,r),e.stroke())},M.registerShape("cylinder2",Ee);function Pe(){c.call(this)}p.extend(Pe,c),Pe.prototype.redrawPath=function(e,i,o,t,a){var r=.5;e.moveTo(0,0),e.quadTo(t/2,a*r,t,0),e.quadTo(t*(1-r),a/2,t,a),e.quadTo(t/2,a*(1-r),0,a),e.quadTo(t*r,a/2,0,0),e.end()},M.registerShape("switch",Pe);function H(){L.call(this)}p.extend(H,L),H.prototype.tabWidth=60,H.prototype.tabHeight=20,H.prototype.tabPosition="right",H.prototype.redrawPath=function(e,i,o,t,a,r){var l=Math.max(0,Math.min(t,parseFloat(p.getValue(this.style,"tabWidth",this.tabWidth)))),f=Math.max(0,Math.min(a,parseFloat(p.getValue(this.style,"tabHeight",this.tabHeight)))),g=p.getValue(this.style,"tabPosition",this.tabPosition);r?(g=="left"?(e.moveTo(0,f),e.lineTo(l,f)):(e.moveTo(t-l,f),e.lineTo(t,f)),e.end()):(g=="left"?(e.moveTo(0,0),e.lineTo(l,0),e.lineTo(l,f),e.lineTo(t,f)):(e.moveTo(0,f),e.lineTo(t-l,f),e.lineTo(t-l,0),e.lineTo(t,0)),e.lineTo(t,a),e.lineTo(0,a),e.lineTo(0,f),e.close(),e.end())},M.registerShape("folder",H);function le(){c.call(this)}p.extend(le,c),le.prototype.size=30,le.prototype.isRoundable=function(){return!0},le.prototype.redrawPath=function(e,i,o,t,a){var r=Math.max(0,Math.min(t,Math.min(a,parseFloat(p.getValue(this.style,"size",this.size))))),l=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;this.addPoints(e,[new n(r,0),new n(t,0),new n(t,a),new n(0,a),new n(0,r)],this.isRounded,l,!0),e.end()},M.registerShape("card",le);function oe(){c.call(this)}p.extend(oe,c),oe.prototype.size=.4,oe.prototype.redrawPath=function(e,i,o,t,a){var r=a*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"size",this.size)))),l=1.4;e.moveTo(0,r/2),e.quadTo(t/4,r*l,t/2,r/2),e.quadTo(t*3/4,r*(1-l),t,r/2),e.lineTo(t,a-r/2),e.quadTo(t*3/4,a-r*l,t/2,a-r/2),e.quadTo(t/4,a-r*(1-l),0,a-r/2),e.lineTo(0,r/2),e.close(),e.end()},oe.prototype.getLabelBounds=function(e){if(p.getValue(this.style,"boundedLbl",!1)){var i=p.getValue(this.style,"size",this.size),o=e.width,t=e.height;if(this.direction==null||this.direction==y.DIRECTION_EAST||this.direction==y.DIRECTION_WEST){var a=t*i;return new P(e.x,e.y+a,o,t-2*a)}else{var r=o*i;return new P(e.x+r,e.y,o-2*r,t)}}return e},M.registerShape("tape",oe);function se(){c.call(this)}p.extend(se,c),se.prototype.size=.3,se.prototype.getLabelMargins=function(e){return p.getValue(this.style,"boundedLbl",!1)?new P(0,0,0,parseFloat(p.getValue(this.style,"size",this.size))*e.height):null},se.prototype.redrawPath=function(e,i,o,t,a){var r=a*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"size",this.size)))),l=1.4;e.moveTo(0,0),e.lineTo(t,0),e.lineTo(t,a-r/2),e.quadTo(t*3/4,a-r*l,t/2,a-r/2),e.quadTo(t/4,a-r*(1-l),0,a-r/2),e.lineTo(0,r/2),e.close(),e.end()},M.registerShape("document",se);var mt=L.prototype.getCylinderSize;L.prototype.getCylinderSize=function(e,i,o,t){var a=p.getValue(this.style,"size");return a!=null?t*Math.max(0,Math.min(1,a)):mt.apply(this,arguments)},L.prototype.getLabelMargins=function(e){if(p.getValue(this.style,"boundedLbl",!1)){var i=p.getValue(this.style,"size",.15)*2;return new P(0,Math.min(this.maxHeight*this.scale,e.height*i),0,0)}return null};function q(){c.call(this)}p.extend(q,c),q.prototype.size=.2,q.prototype.fixedSize=20,q.prototype.isRoundable=function(){return!0},q.prototype.redrawPath=function(e,i,o,t,a){var r=p.getValue(this.style,"fixedSize","0")!="0",l=r?Math.max(0,Math.min(t,parseFloat(p.getValue(this.style,"size",this.fixedSize)))):t*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"size",this.size)))),f=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;this.addPoints(e,[new n(0,a),new n(l,0),new n(t,0),new n(t-l,a)],this.isRounded,f,!0),e.end()},M.registerShape("parallelogram",q);function U(){c.call(this)}p.extend(U,c),U.prototype.size=.2,U.prototype.fixedSize=20,U.prototype.isRoundable=function(){return!0},U.prototype.redrawPath=function(e,i,o,t,a){var r=p.getValue(this.style,"fixedSize","0")!="0",l=r?Math.max(0,Math.min(t*.5,parseFloat(p.getValue(this.style,"size",this.fixedSize)))):t*Math.max(0,Math.min(.5,parseFloat(p.getValue(this.style,"size",this.size)))),f=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;this.addPoints(e,[new n(0,a),new n(l,0),new n(t-l,0),new n(t,a)],this.isRounded,f,!0)},M.registerShape("trapezoid",U);function ze(){c.call(this)}p.extend(ze,c),ze.prototype.size=.5,ze.prototype.redrawPath=function(e,i,o,t,a){e.setFillColor(null);var r=t*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"size",this.size)))),l=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;this.addPoints(e,[new n(t,0),new n(r,0),new n(r,a/2),new n(0,a/2),new n(r,a/2),new n(r,a),new n(t,a)],this.isRounded,l,!1),e.end()},M.registerShape("curlyBracket",ze);function $e(){c.call(this)}p.extend($e,c),$e.prototype.redrawPath=function(e,i,o,t,a){e.setStrokeWidth(1),e.setFillColor(this.stroke);var r=t/5;e.rect(0,0,r,a),e.fillAndStroke(),e.rect(2*r,0,r,a),e.fillAndStroke(),e.rect(4*r,0,r,a),e.fillAndStroke()},M.registerShape("parallelMarker",$e);function k(e,i){this.canvas=e,this.canvas.setLineJoin("round"),this.canvas.setLineCap("round"),this.defaultVariation=i,this.originalLineTo=this.canvas.lineTo,this.canvas.lineTo=p.bind(this,k.prototype.lineTo),this.originalMoveTo=this.canvas.moveTo,this.canvas.moveTo=p.bind(this,k.prototype.moveTo),this.originalClose=this.canvas.close,this.canvas.close=p.bind(this,k.prototype.close),this.originalQuadTo=this.canvas.quadTo,this.canvas.quadTo=p.bind(this,k.prototype.quadTo),this.originalCurveTo=this.canvas.curveTo,this.canvas.curveTo=p.bind(this,k.prototype.curveTo),this.originalArcTo=this.canvas.arcTo,this.canvas.arcTo=p.bind(this,k.prototype.arcTo)}k.prototype.moveTo=function(e,i){this.originalMoveTo.apply(this.canvas,arguments),this.lastX=e,this.lastY=i,this.firstX=e,this.firstY=i},k.prototype.close=function(){this.firstX!=null&&this.firstY!=null&&(this.lineTo(this.firstX,this.firstY),this.originalClose.apply(this.canvas,arguments)),this.originalClose.apply(this.canvas,arguments)},k.prototype.quadTo=function(e,i,o,t){this.originalQuadTo.apply(this.canvas,arguments),this.lastX=o,this.lastY=t},k.prototype.curveTo=function(e,i,o,t,a,r){this.originalCurveTo.apply(this.canvas,arguments),this.lastX=a,this.lastY=r},k.prototype.arcTo=function(e,i,o,t,a,r,l){this.originalArcTo.apply(this.canvas,arguments),this.lastX=r,this.lastY=l},k.prototype.lineTo=function(e,i){if(this.lastX!=null&&this.lastY!=null){let m=function(S){return typeof S=="number"?S?S<0?-1:1:S===S?0:NaN:NaN};var o=Math.abs(e-this.lastX),t=Math.abs(i-this.lastY),a=Math.sqrt(o*o+t*t);if(a<2){this.originalLineTo.apply(this.canvas,arguments),this.lastX=e,this.lastY=i;return}var r=Math.round(a/10),l=this.defaultVariation;r<5&&(r=5,l/=3);for(var f=m(e-this.lastX)*o/r,g=m(i-this.lastY)*t/r,h=o/a,d=t/a,u=0;u<r;u++){var w=f*u+this.lastX,v=g*u+this.lastY,T=(Math.random()-.5)*l;this.originalLineTo.call(this.canvas,w-T*d,v-T*h)}this.originalLineTo.call(this.canvas,e,i),this.lastX=e,this.lastY=i}else this.originalLineTo.apply(this.canvas,arguments),this.lastX=e,this.lastY=i},k.prototype.destroy=function(){this.canvas.lineTo=this.originalLineTo,this.canvas.moveTo=this.originalMoveTo,this.canvas.close=this.originalClose,this.canvas.quadTo=this.originalQuadTo,this.canvas.curveTo=this.originalCurveTo,this.canvas.arcTo=this.originalArcTo},V.prototype.defaultJiggle=1.5;var vt=V.prototype.beforePaint;V.prototype.beforePaint=function(e){vt.apply(this,arguments),e.handJiggle==null&&(e.handJiggle=this.createHandJiggle(e))};var Tt=V.prototype.afterPaint;V.prototype.afterPaint=function(e){Tt.apply(this,arguments),e.handJiggle!=null&&(e.handJiggle.destroy(),delete e.handJiggle)},V.prototype.createComicCanvas=function(e){return new k(e,p.getValue(this.style,"jiggle",this.defaultJiggle))},V.prototype.createHandJiggle=function(e){return!this.outline&&this.style!=null&&p.getValue(this.style,"comic","0")!="0"?this.createComicCanvas(e):null},ae.prototype.defaultJiggle=2;var St=z.prototype.isHtmlAllowed;z.prototype.isHtmlAllowed=function(){return!this.outline&&(this.style==null||p.getValue(this.style,"comic","0")=="0"&&p.getValue(this.style,"sketch",urlParams.rough=="1"?"1":"0")=="0")&&St.apply(this,arguments)};var xt=z.prototype.paintBackground;z.prototype.paintBackground=function(e,i,o,t,a){if(e.handJiggle==null||e.handJiggle.constructor!=k)xt.apply(this,arguments);else{var r=!0;if(this.style!=null&&(r=p.getValue(this.style,y.STYLE_POINTER_EVENTS,"1")=="1"),r||this.fill!=null&&this.fill!=y.NONE||this.stroke!=null&&this.stroke!=y.NONE){if(!r&&(this.fill==null||this.fill==y.NONE)&&(e.pointerEvents=!1),e.begin(),this.isRounded){var l=0;if(p.getValue(this.style,y.STYLE_ABSOLUTE_ARCSIZE,0)=="1")l=Math.min(t/2,Math.min(a/2,p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2));else{var f=p.getValue(this.style,y.STYLE_ARCSIZE,y.RECTANGLE_ROUNDING_FACTOR*100)/100;l=Math.min(t*f,a*f)}e.moveTo(i+l,o),e.lineTo(i+t-l,o),e.quadTo(i+t,o,i+t,o+l),e.lineTo(i+t,o+a-l),e.quadTo(i+t,o+a,i+t-l,o+a),e.lineTo(i+l,o+a),e.quadTo(i,o+a,i,o+a-l),e.lineTo(i,o+l),e.quadTo(i,o,i+l,o)}else e.moveTo(i,o),e.lineTo(i+t,o),e.lineTo(i+t,o+a),e.lineTo(i,o+a),e.lineTo(i,o);e.close(),e.end(),e.fillAndStroke()}}};var Mt=z.prototype.paintForeground;z.prototype.paintForeground=function(e,i,o,t,a){e.handJiggle==null&&Mt.apply(this,arguments)};function he(){z.call(this)}p.extend(he,z),he.prototype.size=.1,he.prototype.isHtmlAllowed=function(){return!1},he.prototype.getLabelBounds=function(e){if(p.getValue(this.state.style,y.STYLE_HORIZONTAL,!0)==(this.direction==null||this.direction==y.DIRECTION_EAST||this.direction==y.DIRECTION_WEST)){var i=e.width,o=e.height,t=new P(e.x,e.y,i,o),a=i*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"size",this.size))));if(this.isRounded){var r=p.getValue(this.style,y.STYLE_ARCSIZE,y.RECTANGLE_ROUNDING_FACTOR*100)/100;a=Math.max(a,Math.min(i*r,o*r))}return t.x+=Math.round(a),t.width-=Math.round(2*a),t}return e},he.prototype.paintForeground=function(e,i,o,t,a){var r=t*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"size",this.size))));if(this.isRounded){var l=p.getValue(this.style,y.STYLE_ARCSIZE,y.RECTANGLE_ROUNDING_FACTOR*100)/100;r=Math.max(r,Math.min(t*l,a*l))}r=Math.round(r),e.begin(),e.moveTo(i+r,o),e.lineTo(i+r,o+a),e.moveTo(i+t-r,o),e.lineTo(i+t-r,o+a),e.end(),e.stroke(),z.prototype.paintForeground.apply(this,arguments)},M.registerShape("process",he);function _e(){z.call(this)}p.extend(_e,z),_e.prototype.paintBackground=function(e,i,o,t,a){e.setFillColor(y.NONE),e.rect(i,o,t,a),e.fill()},_e.prototype.paintForeground=function(e,i,o,t,a){},M.registerShape("transparent",_e);function A(){c.call(this)}p.extend(A,ht),A.prototype.size=30,A.prototype.position=.5,A.prototype.position2=.5,A.prototype.base=20,A.prototype.getLabelMargins=function(){return new P(0,0,0,parseFloat(p.getValue(this.style,"size",this.size))*this.scale)},A.prototype.isRoundable=function(){return!0},A.prototype.redrawPath=function(e,i,o,t,a){var r=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2,l=Math.max(0,Math.min(a,parseFloat(p.getValue(this.style,"size",this.size)))),f=t*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"position",this.position)))),g=t*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"position2",this.position2)))),h=Math.max(0,Math.min(t,parseFloat(p.getValue(this.style,"base",this.base))));this.addPoints(e,[new n(0,0),new n(t,0),new n(t,a-l),new n(Math.min(t,f+h),a-l),new n(g,a),new n(Math.max(0,f),a-l),new n(0,a-l)],this.isRounded,r,!0,[4])},M.registerShape("callout",A);function B(){c.call(this)}p.extend(B,c),B.prototype.size=.2,B.prototype.fixedSize=20,B.prototype.isRoundable=function(){return!0},B.prototype.redrawPath=function(e,i,o,t,a){var r=p.getValue(this.style,"fixedSize","0")!="0",l=r?Math.max(0,Math.min(t,parseFloat(p.getValue(this.style,"size",this.fixedSize)))):t*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"size",this.size)))),f=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;this.addPoints(e,[new n(0,0),new n(t-l,0),new n(t,a/2),new n(t-l,a),new n(0,a),new n(l,a/2)],this.isRounded,f,!0),e.end()},M.registerShape("step",B);function J(){c.call(this)}p.extend(J,ht),J.prototype.size=.25,J.prototype.fixedSize=20,J.prototype.isRoundable=function(){return!0},J.prototype.redrawPath=function(e,i,o,t,a){var r=p.getValue(this.style,"fixedSize","0")!="0",l=r?Math.max(0,Math.min(t*.5,parseFloat(p.getValue(this.style,"size",this.fixedSize)))):t*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"size",this.size)))),f=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;this.addPoints(e,[new n(l,0),new n(t-l,0),new n(t,.5*a),new n(t-l,a),new n(l,a),new n(0,.5*a)],this.isRounded,f,!0)},M.registerShape("hexagon",J);function Ve(){z.call(this)}p.extend(Ve,z),Ve.prototype.isHtmlAllowed=function(){return!1},Ve.prototype.paintForeground=function(e,i,o,t,a){var r=Math.min(t/5,a/5)+1;e.begin(),e.moveTo(i+t/2,o+r),e.lineTo(i+t/2,o+a-r),e.moveTo(i+r,o+a/2),e.lineTo(i+t-r,o+a/2),e.end(),e.stroke(),z.prototype.paintForeground.apply(this,arguments)},M.registerShape("plus",Ve);var dt=ae.prototype.paintVertexShape;ae.prototype.getLabelBounds=function(e){if(this.style.double==1){var i=(Math.max(2,this.strokewidth+1)*2+parseFloat(this.style[y.STYLE_MARGIN]||0))*this.scale;return new P(e.x+i,e.y+i,e.width-2*i,e.height-2*i)}return e},ae.prototype.paintVertexShape=function(e,i,o,t,a){if(dt.apply(this,arguments),!this.outline&&this.style.double==1){var r=Math.max(2,this.strokewidth+1)*2+parseFloat(this.style[y.STYLE_MARGIN]||0);i+=r,o+=r,t-=2*r,a-=2*r,t>0&&a>0&&(e.setShadow(!1),dt.apply(this,[e,i,o,t,a]))}};function Ce(){z.call(this)}p.extend(Ce,z),Ce.prototype.isHtmlAllowed=function(){return!1},Ce.prototype.getLabelBounds=function(e){if(this.style.double==1){var i=(Math.max(2,this.strokewidth+1)+parseFloat(this.style[y.STYLE_MARGIN]||0))*this.scale;return new P(e.x+i,e.y+i,e.width-2*i,e.height-2*i)}return e},Ce.prototype.paintForeground=function(e,i,o,t,a){if(this.style!=null){if(!this.outline&&this.style.double==1){var r=Math.max(2,this.strokewidth+1)+parseFloat(this.style[y.STYLE_MARGIN]||0);i+=r,o+=r,t-=2*r,a-=2*r,t>0&&a>0&&z.prototype.paintBackground.apply(this,arguments)}e.setDashed(!1);var l=0,f=null;do{if(f=M.defaultShapes[this.style["symbol"+l]],f!=null){var g=this.style["symbol"+l+"Align"],h=this.style["symbol"+l+"VerticalAlign"],d=this.style["symbol"+l+"Width"],u=this.style["symbol"+l+"Height"],w=this.style["symbol"+l+"Spacing"]||0,v=this.style["symbol"+l+"VSpacing"]||w,T=this.style["symbol"+l+"ArcSpacing"];if(T!=null){var m=this.getArcSize(t+this.strokewidth,a+this.strokewidth)*T;w+=m,v+=m}var S=i,x=o;g==y.ALIGN_CENTER?S+=(t-d)/2:g==y.ALIGN_RIGHT?S+=t-d-w:S+=w,h==y.ALIGN_MIDDLE?x+=(a-u)/2:h==y.ALIGN_BOTTOM?x+=a-u-v:x+=v,e.save();var E=new f;E.style=this.style,f.prototype.paintVertexShape.call(E,e,S,x,d,u),e.restore()}l++}while(f!=null)}z.prototype.paintForeground.apply(this,arguments)},M.registerShape("ext",Ce);function et(){L.call(this)}p.extend(et,L),et.prototype.redrawPath=function(e,i,o,t,a,r){r?(e.moveTo(0,0),e.lineTo(t/2,a/2),e.lineTo(t,0),e.end()):(e.moveTo(0,0),e.lineTo(t,0),e.lineTo(t,a),e.lineTo(0,a),e.close())},M.registerShape("message",et);function Ne(){V.call(this)}p.extend(Ne,V),Ne.prototype.paintBackground=function(e,i,o,t,a){e.translate(i,o),e.ellipse(t/4,0,t/2,a/4),e.fillAndStroke(),e.begin(),e.moveTo(t/2,a/4),e.lineTo(t/2,2*a/3),e.moveTo(t/2,a/3),e.lineTo(0,a/3),e.moveTo(t/2,a/3),e.lineTo(t,a/3),e.moveTo(t/2,2*a/3),e.lineTo(0,a),e.moveTo(t/2,2*a/3),e.lineTo(t,a),e.end(),e.stroke()},M.registerShape("umlActor",Ne);function De(){V.call(this)}p.extend(De,V),De.prototype.getLabelMargins=function(e){return new P(e.width/6,0,0,0)},De.prototype.paintBackground=function(e,i,o,t,a){e.translate(i,o),e.begin(),e.moveTo(0,a/4),e.lineTo(0,a*3/4),e.end(),e.stroke(),e.begin(),e.moveTo(0,a/2),e.lineTo(t/6,a/2),e.end(),e.stroke(),e.ellipse(t/6,0,t*5/6,a),e.fillAndStroke()},M.registerShape("umlBoundary",De);function tt(){C.call(this)}p.extend(tt,C),tt.prototype.paintVertexShape=function(e,i,o,t,a){C.prototype.paintVertexShape.apply(this,arguments),e.begin(),e.moveTo(i+t/8,o+a),e.lineTo(i+t*7/8,o+a),e.end(),e.stroke()},M.registerShape("umlEntity",tt);function nt(){V.call(this)}p.extend(nt,V),nt.prototype.paintVertexShape=function(e,i,o,t,a){e.translate(i,o),e.begin(),e.moveTo(t,0),e.lineTo(0,a),e.moveTo(0,0),e.lineTo(t,a),e.end(),e.stroke()},M.registerShape("umlDestroy",nt);function Re(){V.call(this)}p.extend(Re,V),Re.prototype.getLabelBounds=function(e){return new P(e.x,e.y+e.height/8,e.width,e.height*7/8)},Re.prototype.paintBackground=function(e,i,o,t,a){e.translate(i,o),e.begin(),e.moveTo(t*3/8,a/8*1.1),e.lineTo(t*5/8,0),e.end(),e.stroke(),e.ellipse(0,a/8,t,a*7/8),e.fillAndStroke()},Re.prototype.paintForeground=function(e,i,o,t,a){e.begin(),e.moveTo(t*3/8,a/8*1.1),e.lineTo(t*5/8,a/4),e.end(),e.stroke()},M.registerShape("umlControl",Re);function G(){z.call(this)}p.extend(G,z),G.prototype.size=40,G.prototype.isHtmlAllowed=function(){return!1},G.prototype.getLabelBounds=function(e){var i=Math.max(0,Math.min(e.height,parseFloat(p.getValue(this.style,"size",this.size))*this.scale));return new P(e.x,e.y,e.width,i)},G.prototype.paintBackground=function(e,i,o,t,a){var r=Math.max(0,Math.min(a,parseFloat(p.getValue(this.style,"size",this.size)))),l=p.getValue(this.style,"participant");if(l==null||this.state==null)z.prototype.paintBackground.call(this,e,i,o,t,r);else{var f=this.state.view.graph.cellRenderer.getShape(l);if(f!=null&&f!=G){var g=new f;g.apply(this.state),e.save(),g.paintVertexShape(e,i,o,t,r),e.restore()}}r<a&&(e.setDashed(!0),e.begin(),e.moveTo(i+t/2,o+r),e.lineTo(i+t/2,o+a),e.end(),e.stroke())},G.prototype.paintForeground=function(e,i,o,t,a){var r=Math.max(0,Math.min(a,parseFloat(p.getValue(this.style,"size",this.size))));z.prototype.paintForeground.call(this,e,i,o,t,Math.min(a,r))},M.registerShape("umlLifeline",G);function N(){V.call(this)}p.extend(N,V),N.prototype.width=60,N.prototype.height=30,N.prototype.corner=10,N.prototype.getLabelMargins=function(e){return new P(0,0,e.width-parseFloat(p.getValue(this.style,"width",this.width)*this.scale),e.height-parseFloat(p.getValue(this.style,"height",this.height)*this.scale))},N.prototype.paintBackground=function(e,i,o,t,a){var r=this.corner,l=Math.min(t,Math.max(r,parseFloat(p.getValue(this.style,"width",this.width)))),f=Math.min(a,Math.max(r*1.5,parseFloat(p.getValue(this.style,"height",this.height)))),g=p.getValue(this.style,y.STYLE_SWIMLANE_FILLCOLOR,y.NONE);g!=y.NONE&&(e.setFillColor(g),e.rect(i,o,t,a),e.fill()),this.fill!=null&&this.fill!=y.NONE&&this.gradient&&this.gradient!=y.NONE?(this.getGradientBounds(e,i,o,t,a),e.setGradient(this.fill,this.gradient,i,o,t,a,this.gradientDirection)):e.setFillColor(this.fill),e.begin(),e.moveTo(i,o),e.lineTo(i+l,o),e.lineTo(i+l,o+Math.max(0,f-r*1.5)),e.lineTo(i+Math.max(0,l-r),o+f),e.lineTo(i,o+f),e.close(),e.fillAndStroke(),e.begin(),e.moveTo(i+l,o),e.lineTo(i+t,o),e.lineTo(i+t,o+a),e.lineTo(i,o+a),e.lineTo(i,o+f),e.stroke()},M.registerShape("umlFrame",N),F.LifelinePerimeter=function(e,i,o,t){var a=G.prototype.size;i!=null&&(a=p.getValue(i.style,"size",a)*i.view.scale);var r=parseFloat(i.style[y.STYLE_STROKEWIDTH]||1)*i.view.scale/2-1;return o.x<e.getCenterX()&&(r+=1,r*=-1),new n(e.getCenterX()+r,Math.min(e.y+e.height,Math.max(e.y+a,o.y)))},$.putValue("lifelinePerimeter",F.LifelinePerimeter),F.OrthogonalPerimeter=function(e,i,o,t){return t=!0,F.RectanglePerimeter.apply(this,arguments)},$.putValue("orthogonalPerimeter",F.OrthogonalPerimeter),F.BackbonePerimeter=function(e,i,o,t){var a=parseFloat(i.style[y.STYLE_STROKEWIDTH]||1)*i.view.scale/2-1;return i.style.backboneSize!=null&&(a+=parseFloat(i.style.backboneSize)*i.view.scale/2-1),i.style[y.STYLE_DIRECTION]=="south"||i.style[y.STYLE_DIRECTION]=="north"?(o.x<e.getCenterX()&&(a+=1,a*=-1),new n(e.getCenterX()+a,Math.min(e.y+e.height,Math.max(e.y,o.y)))):(o.y<e.getCenterY()&&(a+=1,a*=-1),new n(Math.min(e.x+e.width,Math.max(e.x,o.x)),e.getCenterY()+a))},$.putValue("backbonePerimeter",F.BackbonePerimeter),F.CalloutPerimeter=function(e,i,o,t){return F.RectanglePerimeter(p.getDirectedBounds(e,new P(0,0,0,Math.max(0,Math.min(e.height,parseFloat(p.getValue(i.style,"size",A.prototype.size))*i.view.scale))),i.style),i,o,t)},$.putValue("calloutPerimeter",F.CalloutPerimeter),F.ParallelogramPerimeter=function(e,i,o,t){var a=p.getValue(i.style,"fixedSize","0")!="0",r=a?q.prototype.fixedSize:q.prototype.size;i!=null&&(r=p.getValue(i.style,"size",r)),a&&(r*=i.view.scale);var l=e.x,f=e.y,g=e.width,h=e.height,d=i!=null?p.getValue(i.style,y.STYLE_DIRECTION,y.DIRECTION_EAST):y.DIRECTION_EAST,u=d==y.DIRECTION_NORTH||d==y.DIRECTION_SOUTH,w;if(u){var v=a?Math.max(0,Math.min(h,r)):h*Math.max(0,Math.min(1,r));w=[new n(l,f),new n(l+g,f+v),new n(l+g,f+h),new n(l,f+h-v),new n(l,f)]}else{var T=a?Math.max(0,Math.min(g*.5,r)):g*Math.max(0,Math.min(1,r));w=[new n(l+T,f),new n(l+g,f),new n(l+g-T,f+h),new n(l,f+h),new n(l+T,f)]}var m=e.getCenterX(),S=e.getCenterY(),x=new n(m,S);return t&&(o.x<l||o.x>l+g?x.y=o.y:x.x=o.x),p.getPerimeterPoint(w,x,o)},$.putValue("parallelogramPerimeter",F.ParallelogramPerimeter),F.TrapezoidPerimeter=function(e,i,o,t){var a=p.getValue(i.style,"fixedSize","0")!="0",r=a?U.prototype.fixedSize:U.prototype.size;i!=null&&(r=p.getValue(i.style,"size",r)),a&&(r*=i.view.scale);var l=e.x,f=e.y,g=e.width,h=e.height,d=i!=null?p.getValue(i.style,y.STYLE_DIRECTION,y.DIRECTION_EAST):y.DIRECTION_EAST,u=[];if(d==y.DIRECTION_EAST){var w=a?Math.max(0,Math.min(g*.5,r)):g*Math.max(0,Math.min(1,r));u=[new n(l+w,f),new n(l+g-w,f),new n(l+g,f+h),new n(l,f+h),new n(l+w,f)]}else if(d==y.DIRECTION_WEST){var w=a?Math.max(0,Math.min(g,r)):g*Math.max(0,Math.min(1,r));u=[new n(l,f),new n(l+g,f),new n(l+g-w,f+h),new n(l+w,f+h),new n(l,f)]}else if(d==y.DIRECTION_NORTH){var v=a?Math.max(0,Math.min(h,r)):h*Math.max(0,Math.min(1,r));u=[new n(l,f+v),new n(l+g,f),new n(l+g,f+h),new n(l,f+h-v),new n(l,f+v)]}else{var v=a?Math.max(0,Math.min(h,r)):h*Math.max(0,Math.min(1,r));u=[new n(l,f),new n(l+g,f+v),new n(l+g,f+h-v),new n(l,f+h),new n(l,f)]}var T=e.getCenterX(),m=e.getCenterY(),S=new n(T,m);return t&&(o.x<l||o.x>l+g?S.y=o.y:S.x=o.x),p.getPerimeterPoint(u,S,o)},$.putValue("trapezoidPerimeter",F.TrapezoidPerimeter),F.StepPerimeter=function(e,i,o,t){var a=p.getValue(i.style,"fixedSize","0")!="0",r=a?B.prototype.fixedSize:B.prototype.size;i!=null&&(r=p.getValue(i.style,"size",r)),a&&(r*=i.view.scale);var l=e.x,f=e.y,g=e.width,h=e.height,d=e.getCenterX(),u=e.getCenterY(),w=i!=null?p.getValue(i.style,y.STYLE_DIRECTION,y.DIRECTION_EAST):y.DIRECTION_EAST,v;if(w==y.DIRECTION_EAST){var T=a?Math.max(0,Math.min(g,r)):g*Math.max(0,Math.min(1,r));v=[new n(l,f),new n(l+g-T,f),new n(l+g,u),new n(l+g-T,f+h),new n(l,f+h),new n(l+T,u),new n(l,f)]}else if(w==y.DIRECTION_WEST){var T=a?Math.max(0,Math.min(g,r)):g*Math.max(0,Math.min(1,r));v=[new n(l+T,f),new n(l+g,f),new n(l+g-T,u),new n(l+g,f+h),new n(l+T,f+h),new n(l,u),new n(l+T,f)]}else if(w==y.DIRECTION_NORTH){var m=a?Math.max(0,Math.min(h,r)):h*Math.max(0,Math.min(1,r));v=[new n(l,f+m),new n(d,f),new n(l+g,f+m),new n(l+g,f+h),new n(d,f+h-m),new n(l,f+h),new n(l,f+m)]}else{var m=a?Math.max(0,Math.min(h,r)):h*Math.max(0,Math.min(1,r));v=[new n(l,f),new n(d,f+m),new n(l+g,f),new n(l+g,f+h-m),new n(d,f+h),new n(l,f+h-m),new n(l,f)]}var S=new n(d,u);return t&&(o.x<l||o.x>l+g?S.y=o.y:S.x=o.x),p.getPerimeterPoint(v,S,o)},$.putValue("stepPerimeter",F.StepPerimeter),F.HexagonPerimeter2=function(e,i,o,t){var a=p.getValue(i.style,"fixedSize","0")!="0",r=a?J.prototype.fixedSize:J.prototype.size;i!=null&&(r=p.getValue(i.style,"size",r)),a&&(r*=i.view.scale);var l=e.x,f=e.y,g=e.width,h=e.height,d=e.getCenterX(),u=e.getCenterY(),w=i!=null?p.getValue(i.style,y.STYLE_DIRECTION,y.DIRECTION_EAST):y.DIRECTION_EAST,v=w==y.DIRECTION_NORTH||w==y.DIRECTION_SOUTH,T;if(v){var m=a?Math.max(0,Math.min(h,r)):h*Math.max(0,Math.min(1,r));T=[new n(d,f),new n(l+g,f+m),new n(l+g,f+h-m),new n(d,f+h),new n(l,f+h-m),new n(l,f+m),new n(d,f)]}else{var S=a?Math.max(0,Math.min(g,r)):g*Math.max(0,Math.min(1,r));T=[new n(l+S,f),new n(l+g-S,f),new n(l+g,u),new n(l+g-S,f+h),new n(l+S,f+h),new n(l,u),new n(l+S,f)]}var x=new n(d,u);return t&&(o.x<l||o.x>l+g?x.y=o.y:x.x=o.x),p.getPerimeterPoint(T,x,o)},$.putValue("hexagonPerimeter2",F.HexagonPerimeter2);function Ie(){V.call(this)}p.extend(Ie,V),Ie.prototype.size=10,Ie.prototype.paintBackground=function(e,i,o,t,a){var r=parseFloat(p.getValue(this.style,"size",this.size));e.translate(i,o),e.ellipse((t-r)/2,0,r,r),e.fillAndStroke(),e.begin(),e.moveTo(t/2,r),e.lineTo(t/2,a),e.end(),e.stroke()},M.registerShape("lollipop",Ie);function Ae(){V.call(this)}p.extend(Ae,V),Ae.prototype.size=10,Ae.prototype.inset=2,Ae.prototype.paintBackground=function(e,i,o,t,a){var r=parseFloat(p.getValue(this.style,"size",this.size)),l=parseFloat(p.getValue(this.style,"inset",this.inset))+this.strokewidth;e.translate(i,o),e.begin(),e.moveTo(t/2,r+l),e.lineTo(t/2,a),e.end(),e.stroke(),e.begin(),e.moveTo((t-r)/2-l,r/2),e.quadTo((t-r)/2-l,r+l,t/2,r+l),e.quadTo((t+r)/2+l,r+l,(t+r)/2+l,r/2),e.end(),e.stroke()},M.registerShape("requires",Ae);function Oe(){V.call(this)}p.extend(Oe,V),Oe.prototype.paintBackground=function(e,i,o,t,a){e.translate(i,o),e.begin(),e.moveTo(0,0),e.quadTo(t,0,t,a/2),e.quadTo(t,a,0,a),e.end(),e.stroke()},M.registerShape("requiredInterface",Oe);function Le(){V.call(this)}p.extend(Le,V),Le.prototype.inset=2,Le.prototype.paintBackground=function(e,i,o,t,a){var r=parseFloat(p.getValue(this.style,"inset",this.inset))+this.strokewidth;e.translate(i,o),e.ellipse(0,r,t-2*r,a-2*r),e.fillAndStroke(),e.begin(),e.moveTo(t/2,0),e.quadTo(t,0,t,a/2),e.quadTo(t,a,t/2,a),e.end(),e.stroke()},M.registerShape("providedRequiredInterface",Le);function X(){L.call(this)}p.extend(X,L),X.prototype.jettyWidth=20,X.prototype.jettyHeight=10,X.prototype.redrawPath=function(e,i,o,t,a,r){var l=parseFloat(p.getValue(this.style,"jettyWidth",this.jettyWidth)),f=parseFloat(p.getValue(this.style,"jettyHeight",this.jettyHeight)),g=l/2,h=g+l/2,d=Math.min(f,a-f),u=Math.min(d+2*f,a-f);r?(e.moveTo(g,d),e.lineTo(h,d),e.lineTo(h,d+f),e.lineTo(g,d+f),e.moveTo(g,u),e.lineTo(h,u),e.lineTo(h,u+f),e.lineTo(g,u+f),e.end()):(e.moveTo(g,0),e.lineTo(t,0),e.lineTo(t,a),e.lineTo(g,a),e.lineTo(g,u+f),e.lineTo(0,u+f),e.lineTo(0,u),e.lineTo(g,u),e.lineTo(g,d+f),e.lineTo(0,d+f),e.lineTo(0,d),e.lineTo(g,d),e.close(),e.end())},M.registerShape("module",X);function we(){L.call(this)}p.extend(we,L),we.prototype.jettyWidth=32,we.prototype.jettyHeight=12,we.prototype.redrawPath=function(e,i,o,t,a,r){var l=parseFloat(p.getValue(this.style,"jettyWidth",this.jettyWidth)),f=parseFloat(p.getValue(this.style,"jettyHeight",this.jettyHeight)),g=l/2,h=g+l/2,d=.3*a-f/2,u=.7*a-f/2;r?(e.moveTo(g,d),e.lineTo(h,d),e.lineTo(h,d+f),e.lineTo(g,d+f),e.moveTo(g,u),e.lineTo(h,u),e.lineTo(h,u+f),e.lineTo(g,u+f),e.end()):(e.moveTo(g,0),e.lineTo(t,0),e.lineTo(t,a),e.lineTo(g,a),e.lineTo(g,u+f),e.lineTo(0,u+f),e.lineTo(0,u),e.lineTo(g,u),e.lineTo(g,d+f),e.lineTo(0,d+f),e.lineTo(0,d),e.lineTo(g,d),e.close(),e.end())},M.registerShape("component",we);function at(){z.call(this)}p.extend(at,z),at.prototype.paintForeground=function(e,i,o,t,a){var r=t/2,l=a/2,f=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;e.begin(),this.addPoints(e,[new n(i+r,o),new n(i+t,o+l),new n(i+r,o+a),new n(i,o+l)],this.isRounded,f,!0),e.stroke(),z.prototype.paintForeground.apply(this,arguments)},M.registerShape("associativeEntity",at);function me(){pt.call(this)}p.extend(me,pt),me.prototype.outerStroke=!0,me.prototype.paintVertexShape=function(e,i,o,t,a){var r=Math.min(4,Math.min(t/5,a/5));t>0&&a>0&&(e.ellipse(i+r,o+r,t-2*r,a-2*r),e.fillAndStroke()),e.setShadow(!1),this.outerStroke&&(e.ellipse(i,o,t,a),e.stroke())},M.registerShape("endState",me);function rt(){me.call(this)}p.extend(rt,me),rt.prototype.outerStroke=!1,M.registerShape("startState",rt);function ve(){Ke.call(this),this.spacing=0}p.extend(ve,Ke),ve.prototype.defaultWidth=4,ve.prototype.isOpenEnded=function(){return!0},ve.prototype.getEdgeWidth=function(){return p.getNumber(this.style,"width",this.defaultWidth)+Math.max(0,this.strokewidth-1)},ve.prototype.isArrowRounded=function(){return this.isRounded},M.registerShape("link",ve);function pe(){Ke.call(this),this.spacing=0}p.extend(pe,Ke),pe.prototype.defaultWidth=10,pe.prototype.defaultArrowWidth=20,pe.prototype.getStartArrowWidth=function(){return this.getEdgeWidth()+p.getNumber(this.style,"startWidth",this.defaultArrowWidth)},pe.prototype.getEndArrowWidth=function(){return this.getEdgeWidth()+p.getNumber(this.style,"endWidth",this.defaultArrowWidth)},pe.prototype.getEdgeWidth=function(){return p.getNumber(this.style,"width",this.defaultWidth)+Math.max(0,this.strokewidth-1)},M.registerShape("flexArrow",pe);function ue(){c.call(this)}p.extend(ue,c),ue.prototype.size=30,ue.prototype.isRoundable=function(){return!0},ue.prototype.redrawPath=function(e,i,o,t,a){var r=Math.min(a,parseFloat(p.getValue(this.style,"size",this.size))),l=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;this.addPoints(e,[new n(0,a),new n(0,r),new n(t,0),new n(t,a)],this.isRounded,l,!0),e.end()},M.registerShape("manualInput",ue);function K(){z.call(this)}p.extend(K,z),K.prototype.dx=20,K.prototype.dy=20,K.prototype.isHtmlAllowed=function(){return!1},K.prototype.paintForeground=function(e,i,o,t,a){z.prototype.paintForeground.apply(this,arguments);var r=0;if(this.isRounded){var l=p.getValue(this.style,y.STYLE_ARCSIZE,y.RECTANGLE_ROUNDING_FACTOR*100)/100;r=Math.max(r,Math.min(t*l,a*l))}var f=Math.max(r,Math.min(t,parseFloat(p.getValue(this.style,"dx",this.dx)))),g=Math.max(r,Math.min(a,parseFloat(p.getValue(this.style,"dy",this.dy))));e.begin(),e.moveTo(i,o+g),e.lineTo(i+t,o+g),e.end(),e.stroke(),e.begin(),e.moveTo(i+f,o),e.lineTo(i+f,o+a),e.end(),e.stroke()},M.registerShape("internalStorage",K);function ee(){c.call(this)}p.extend(ee,c),ee.prototype.dx=20,ee.prototype.dy=20,ee.prototype.redrawPath=function(e,i,o,t,a){var r=Math.max(0,Math.min(t,parseFloat(p.getValue(this.style,"dx",this.dx)))),l=Math.max(0,Math.min(a,parseFloat(p.getValue(this.style,"dy",this.dy))));Math.min(t/2,Math.min(a,parseFloat(p.getValue(this.style,"size",this.size))));var f=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;this.addPoints(e,[new n(0,0),new n(t,0),new n(t,l),new n(r,l),new n(r,a),new n(0,a)],this.isRounded,f,!0),e.end()},M.registerShape("corner",ee);function We(){c.call(this)}p.extend(We,c),We.prototype.redrawPath=function(e,i,o,t,a){e.moveTo(0,0),e.lineTo(0,a),e.end(),e.moveTo(t,0),e.lineTo(t,a),e.end(),e.moveTo(0,a/2),e.lineTo(t,a/2),e.end()},M.registerShape("crossbar",We);function te(){c.call(this)}p.extend(te,c),te.prototype.dx=20,te.prototype.dy=20,te.prototype.redrawPath=function(e,i,o,t,a){var r=Math.max(0,Math.min(t,parseFloat(p.getValue(this.style,"dx",this.dx)))),l=Math.max(0,Math.min(a,parseFloat(p.getValue(this.style,"dy",this.dy))));Math.min(t/2,Math.min(a,parseFloat(p.getValue(this.style,"size",this.size))));var f=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;this.addPoints(e,[new n(0,0),new n(t,0),new n(t,l),new n((t+r)/2,l),new n((t+r)/2,a),new n((t-r)/2,a),new n((t-r)/2,l),new n(0,l)],this.isRounded,f,!0),e.end()},M.registerShape("tee",te);function W(){c.call(this)}p.extend(W,c),W.prototype.arrowWidth=.3,W.prototype.arrowSize=.2,W.prototype.redrawPath=function(e,i,o,t,a){var r=a*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"arrowWidth",this.arrowWidth)))),l=t*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"arrowSize",this.arrowSize)))),f=(a-r)/2,g=f+r,h=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;this.addPoints(e,[new n(0,f),new n(t-l,f),new n(t-l,0),new n(t,a/2),new n(t-l,a),new n(t-l,g),new n(0,g)],this.isRounded,h,!0),e.end()},M.registerShape("singleArrow",W);function Ye(){c.call(this)}p.extend(Ye,c),Ye.prototype.redrawPath=function(e,i,o,t,a){var r=a*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"arrowWidth",W.prototype.arrowWidth)))),l=t*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"arrowSize",W.prototype.arrowSize)))),f=(a-r)/2,g=f+r,h=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;this.addPoints(e,[new n(0,a/2),new n(l,0),new n(l,f),new n(t-l,f),new n(t-l,0),new n(t,a/2),new n(t-l,a),new n(t-l,g),new n(l,g),new n(l,a)],this.isRounded,h,!0),e.end()},M.registerShape("doubleArrow",Ye);function ne(){c.call(this)}p.extend(ne,c),ne.prototype.size=.1,ne.prototype.fixedSize=20,ne.prototype.redrawPath=function(e,i,o,t,a){var r=p.getValue(this.style,"fixedSize","0")!="0",l=r?Math.max(0,Math.min(t,parseFloat(p.getValue(this.style,"size",this.fixedSize)))):t*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"size",this.size))));e.moveTo(l,0),e.lineTo(t,0),e.quadTo(t-l*2,a/2,t,a),e.lineTo(l,a),e.quadTo(l-l*2,a/2,l,0),e.close(),e.end()},M.registerShape("dataStorage",ne);function be(){c.call(this)}p.extend(be,c),be.prototype.redrawPath=function(e,i,o,t,a){e.moveTo(0,0),e.quadTo(t,0,t,a/2),e.quadTo(t,a,0,a),e.close(),e.end()},M.registerShape("or",be);function Ze(){c.call(this)}p.extend(Ze,c),Ze.prototype.redrawPath=function(e,i,o,t,a){e.moveTo(0,0),e.quadTo(t,0,t,a/2),e.quadTo(t,a,0,a),e.quadTo(t/2,a/2,0,0),e.close(),e.end()},M.registerShape("xor",Ze);function de(){c.call(this)}p.extend(de,c),de.prototype.size=20,de.prototype.isRoundable=function(){return!0},de.prototype.redrawPath=function(e,i,o,t,a){var r=Math.min(t/2,Math.min(a,parseFloat(p.getValue(this.style,"size",this.size)))),l=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;this.addPoints(e,[new n(r,0),new n(t-r,0),new n(t,r*.8),new n(t,a),new n(0,a),new n(0,r*.8)],this.isRounded,l,!0),e.end()},M.registerShape("loopLimit",de);function fe(){c.call(this)}p.extend(fe,c),fe.prototype.size=3/8,fe.prototype.isRoundable=function(){return!0},fe.prototype.redrawPath=function(e,i,o,t,a){var r=a*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"size",this.size)))),l=p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;this.addPoints(e,[new n(0,0),new n(t,0),new n(t,a-r),new n(t/2,a),new n(0,a-r)],this.isRounded,l,!0),e.end()},M.registerShape("offPageConnector",fe);function He(){C.call(this)}p.extend(He,C),He.prototype.paintVertexShape=function(e,i,o,t,a){C.prototype.paintVertexShape.apply(this,arguments),e.begin(),e.moveTo(i+t/2,o+a),e.lineTo(i+t,o+a),e.end(),e.stroke()},M.registerShape("tapeData",He);function qe(){C.call(this)}p.extend(qe,C),qe.prototype.paintVertexShape=function(e,i,o,t,a){C.prototype.paintVertexShape.apply(this,arguments),e.setShadow(!1),e.begin(),e.moveTo(i,o+a/2),e.lineTo(i+t,o+a/2),e.end(),e.stroke(),e.begin(),e.moveTo(i+t/2,o),e.lineTo(i+t/2,o+a),e.end(),e.stroke()},M.registerShape("orEllipse",qe);function Ue(){C.call(this)}p.extend(Ue,C),Ue.prototype.paintVertexShape=function(e,i,o,t,a){C.prototype.paintVertexShape.apply(this,arguments);var r=.145;e.setShadow(!1),e.begin(),e.moveTo(i+t*r,o+a*r),e.lineTo(i+t*(1-r),o+a*(1-r)),e.end(),e.stroke(),e.begin(),e.moveTo(i+t*(1-r),o+a*r),e.lineTo(i+t*r,o+a*(1-r)),e.end(),e.stroke()},M.registerShape("sumEllipse",Ue);function it(){ae.call(this)}p.extend(it,ae),it.prototype.paintVertexShape=function(e,i,o,t,a){ae.prototype.paintVertexShape.apply(this,arguments),e.setShadow(!1),e.begin(),e.moveTo(i,o+a/2),e.lineTo(i+t,o+a/2),e.end(),e.stroke()},M.registerShape("sortShape",it);function lt(){C.call(this)}p.extend(lt,C),lt.prototype.paintVertexShape=function(e,i,o,t,a){e.begin(),e.moveTo(i,o),e.lineTo(i+t,o),e.lineTo(i+t/2,o+a/2),e.close(),e.fillAndStroke(),e.begin(),e.moveTo(i,o+a),e.lineTo(i+t,o+a),e.lineTo(i+t/2,o+a/2),e.close(),e.fillAndStroke()},M.registerShape("collate",lt);function ot(){C.call(this)}p.extend(ot,C),ot.prototype.paintVertexShape=function(e,i,o,t,a){var r=10,l=o+a-r/2;e.begin(),e.moveTo(i,o),e.lineTo(i,o+a),e.moveTo(i,l),e.lineTo(i+r,l-r/2),e.moveTo(i,l),e.lineTo(i+r,l+r/2),e.moveTo(i,l),e.lineTo(i+t,l),e.moveTo(i+t,o),e.lineTo(i+t,o+a),e.moveTo(i+t,l),e.lineTo(i+t-r,l-r/2),e.moveTo(i+t,l),e.lineTo(i+t-r,l+r/2),e.end(),e.stroke()},M.registerShape("dimension",ot);function Be(){C.call(this)}p.extend(Be,C),Be.prototype.paintVertexShape=function(e,i,o,t,a){if(this.outline||e.setStrokeColor(null),this.style!=null){var r=e.pointerEvents,l=p.getValue(this.style,y.STYLE_POINTER_EVENTS,"1")=="1";!l&&(this.fill==null||this.fill==y.NONE)&&(e.pointerEvents=!1),e.rect(i,o,t,a),e.fill(),e.pointerEvents=r,e.setStrokeColor(this.stroke),e.begin(),e.moveTo(i,o),p.getValue(this.style,"top","1")=="1"?e.lineTo(i+t,o):e.moveTo(i+t,o),p.getValue(this.style,"right","1")=="1"?e.lineTo(i+t,o+a):e.moveTo(i+t,o+a),p.getValue(this.style,"bottom","1")=="1"?e.lineTo(i,o+a):e.moveTo(i,o+a),p.getValue(this.style,"left","1")=="1"&&e.lineTo(i,o),e.end(),e.stroke()}},M.registerShape("partialRectangle",Be);function Ge(){C.call(this)}p.extend(Ge,C),Ge.prototype.paintVertexShape=function(e,i,o,t,a){C.prototype.paintVertexShape.apply(this,arguments),e.setShadow(!1),e.begin(),p.getValue(this.style,"line")=="vertical"?(e.moveTo(i+t/2,o),e.lineTo(i+t/2,o+a)):(e.moveTo(i,o+a/2),e.lineTo(i+t,o+a/2)),e.end(),e.stroke()},M.registerShape("lineEllipse",Ge);function je(){c.call(this)}p.extend(je,c),je.prototype.redrawPath=function(e,i,o,t,a){var r=Math.min(t,a/2);e.moveTo(0,0),e.lineTo(t-r,0),e.quadTo(t,0,t,a/2),e.quadTo(t,a,t-r,a),e.lineTo(0,a),e.close(),e.end()},M.registerShape("delay",je);function Te(){c.call(this)}p.extend(Te,c),Te.prototype.size=.2,Te.prototype.redrawPath=function(e,i,o,t,a){var r=Math.min(a,t),l=Math.max(0,Math.min(r,r*parseFloat(p.getValue(this.style,"size",this.size)))),f=(a-l)/2,g=f+l,h=(t-l)/2,d=h+l;e.moveTo(0,f),e.lineTo(h,f),e.lineTo(h,0),e.lineTo(d,0),e.lineTo(d,f),e.lineTo(t,f),e.lineTo(t,g),e.lineTo(d,g),e.lineTo(d,a),e.lineTo(h,a),e.lineTo(h,g),e.lineTo(0,g),e.close(),e.end()},M.registerShape("cross",Te);function Se(){c.call(this)}p.extend(Se,c),Se.prototype.size=.25,Se.prototype.redrawPath=function(e,i,o,t,a){var r=Math.min(t,a/2),l=Math.min(t-r,Math.max(0,parseFloat(p.getValue(this.style,"size",this.size)))*t);e.moveTo(0,a/2),e.lineTo(l,0),e.lineTo(t-r,0),e.quadTo(t,0,t,a/2),e.quadTo(t,a,t-r,a),e.lineTo(l,a),e.close(),e.end()},M.registerShape("display",Se);function ye(){wt.call(this)}p.extend(ye,wt),ye.prototype.origPaintEdgeShape=ye.prototype.paintEdgeShape,ye.prototype.paintEdgeShape=function(e,i,o){for(var t=[],a=0;a<i.length;a++)t.push(p.clone(i[a]));var r=e.state.dashed,l=e.state.fixDash;if(ye.prototype.origPaintEdgeShape.apply(this,[e,t,o]),e.state.strokeWidth>=3){var f=p.getValue(this.style,"fillColor",null);f!=null&&(e.setStrokeColor(f),e.setStrokeWidth(e.state.strokeWidth-2),e.setDashed(r,l),ye.prototype.origPaintEdgeShape.apply(this,[e,i,o]))}},M.registerShape("filledEdge",ye),typeof StyleFormatPanel<"u"&&function(){var e=StyleFormatPanel.prototype.getCustomColors;StyleFormatPanel.prototype.getCustomColors=function(){var i=this.format.getSelectionState(),o=e.apply(this,arguments);return i.style.shape=="umlFrame"&&o.push({title:mxResources.get("laneColor"),key:"swimlaneFillColor",defaultValue:"#ffffff"}),o}}(),re.addMarker("dash",function(e,i,o,t,a,r,l,f,g,h){var d=a*(l+g+1),u=r*(l+g+1);return function(){e.begin(),e.moveTo(t.x-d/2-u/2,t.y-u/2+d/2),e.lineTo(t.x+u/2-3*d/2,t.y-3*u/2-d/2),e.stroke()}}),re.addMarker("box",function(e,i,o,t,a,r,l,f,g,h){var d=a*(l+g+1),u=r*(l+g+1),w=t.x+d/2,v=t.y+u/2;return t.x-=d,t.y-=u,function(){e.begin(),e.moveTo(w-d/2-u/2,v-u/2+d/2),e.lineTo(w-d/2+u/2,v-u/2-d/2),e.lineTo(w+u/2-3*d/2,v-3*u/2-d/2),e.lineTo(w-u/2-3*d/2,v-3*u/2+d/2),e.close(),h?e.fillAndStroke():e.stroke()}}),re.addMarker("cross",function(e,i,o,t,a,r,l,f,g,h){var d=a*(l+g+1),u=r*(l+g+1);return function(){e.begin(),e.moveTo(t.x-d/2-u/2,t.y-u/2+d/2),e.lineTo(t.x+u/2-3*d/2,t.y-3*u/2-d/2),e.moveTo(t.x-d/2+u/2,t.y-u/2-d/2),e.lineTo(t.x-u/2-3*d/2,t.y-3*u/2+d/2),e.stroke()}});function ft(e,i,o,t,a,r,d,f,g,h){var d=d+g,u=t.clone();return t.x-=a*(2*d+g),t.y-=r*(2*d+g),a=a*(d+g),r=r*(d+g),function(){e.ellipse(u.x-a-d,u.y-r-d,2*d,2*d),h?e.fillAndStroke():e.stroke()}}re.addMarker("circle",ft),re.addMarker("circlePlus",function(e,i,o,t,a,r,l,f,g,h){var d=t.clone(),u=ft.apply(this,arguments),w=a*(l+2*g),v=r*(l+2*g);return function(){u.apply(this,arguments),e.begin(),e.moveTo(d.x-a*g,d.y-r*g),e.lineTo(d.x-2*w+a*g,d.y-2*v+r*g),e.moveTo(d.x-w-v+r*g,d.y-v+w-a*g),e.lineTo(d.x+v-w-r*g,d.y-v-w+a*g),e.stroke()}}),re.addMarker("halfCircle",function(e,i,o,t,a,r,l,f,g,h){var d=a*(l+g+1),u=r*(l+g+1),w=t.clone();return t.x-=d,t.y-=u,function(){e.begin(),e.moveTo(w.x-u,w.y+d),e.quadTo(t.x-u,t.y+d,t.x,t.y),e.quadTo(t.x+u,t.y-d,w.x+u,w.y-d),e.stroke()}}),re.addMarker("async",function(e,i,o,t,a,r,l,f,g,h){var d=a*g*1.118,u=r*g*1.118;a=a*(l+g),r=r*(l+g);var w=t.clone();w.x-=d,w.y-=u;var v=1;return t.x+=-a*v-d,t.y+=-r*v-u,function(){e.begin(),e.moveTo(w.x,w.y),f?e.lineTo(w.x-a-r/2,w.y-r+a/2):e.lineTo(w.x+r/2-a,w.y-r-a/2),e.lineTo(w.x-a,w.y-r),e.close(),h?e.fillAndStroke():e.stroke()}});function ct(e){return e=e??2,function(i,o,t,a,r,l,f,g,h,d){r=r*(f+h),l=l*(f+h);var u=a.clone();return function(){i.begin(),i.moveTo(u.x,u.y),g?i.lineTo(u.x-r-l/e,u.y-l+r/e):i.lineTo(u.x+l/e-r,u.y-l-r/e),i.stroke()}}}if(re.addMarker("openAsync",ct(2)),typeof mxVertexHandler<"u"){let e=function(h,d,u,w,v,T,m){var S=new mxHandle(h,null,mxVertexHandler.prototype.secondaryHandleImage);if(S.execute=function(E){for(var R=0;R<d.length;R++)this.copyStyle(d[R]);m&&m(E)},S.getPosition=u,S.setPosition=w,S.ignoreGrid=v??!0,T){var x=S.positionChanged;S.positionChanged=function(){x.apply(this,arguments),h.view.invalidate(this.state.cell),h.view.validate()}}return S},i=function(h,d){return e(h,[y.STYLE_ARCSIZE],function(u){var w=d??u.height/8;if(p.getValue(h.style,y.STYLE_ABSOLUTE_ARCSIZE,0)=="1"){var v=p.getValue(h.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;return new n(u.x+u.width-Math.min(u.width/2,v),u.y+w)}else{var v=Math.max(0,parseFloat(p.getValue(h.style,y.STYLE_ARCSIZE,y.RECTANGLE_ROUNDING_FACTOR*100)))/100;return new n(u.x+u.width-Math.min(Math.max(u.width/2,u.height/2),Math.min(u.width,u.height)*v),u.y+w)}},function(u,w,v){if(p.getValue(h.style,y.STYLE_ABSOLUTE_ARCSIZE,0)=="1")this.state.style[y.STYLE_ARCSIZE]=Math.round(Math.max(0,Math.min(u.width,(u.x+u.width-w.x)*2)));else{var T=Math.min(50,Math.max(0,(u.width-w.x+u.x)*100/Math.min(u.width,u.height)));this.state.style[y.STYLE_ARCSIZE]=Math.round(T)}})},o=function(){return function(h){var d=[];return p.getValue(h.style,y.STYLE_ROUNDED,!1)&&d.push(i(h)),d}},t=function(h,d,u){return h=h??.5,function(w){var v=[e(w,["size"],function(T){var m=u!=null?p.getValue(this.state.style,"fixedSize","0")!="0":null,S=Math.max(0,parseFloat(p.getValue(this.state.style,"size",m?u:d)));return new n(T.x+Math.min(T.width*.75*h,S*(m?.75:T.width*.75)),T.y+T.height/4)},function(T,m){var S=u!=null?p.getValue(this.state.style,"fixedSize","0")!="0":null,x=S?m.x-T.x:Math.max(0,Math.min(h,(m.x-T.x)/T.width*.75));this.state.style.size=x},!1,!0)];return p.getValue(w.style,y.STYLE_ROUNDED,!1)&&v.push(i(w)),v}},a=function(h,d,u,w,v){return u=u??.5,function(T){var m=[e(T,["size"],function(S){var x=v!=null?p.getValue(this.state.style,"fixedSize","0")!="0":null,E=parseFloat(p.getValue(this.state.style,"size",x?v:h));return new n(S.x+Math.max(0,Math.min(S.width*.5,E*(x?1:S.width))),S.getCenterY())},function(S,x,E){var R=v!=null?p.getValue(this.state.style,"fixedSize","0")!="0":null,I=R?x.x-S.x:Math.max(0,Math.min(u,(x.x-S.x)/S.width));this.state.style.size=I},!1,w)];return d&&p.getValue(T.style,y.STYLE_ROUNDED,!1)&&m.push(i(T)),m}},r=function(h,d,u){return function(w){var v=[e(w,["size"],function(T){var m=Math.max(0,Math.min(T.width,Math.min(T.height,parseFloat(p.getValue(this.state.style,"size",d)))))*h;return new n(T.x+m,T.y+m)},function(T,m){this.state.style.size=Math.round(Math.max(0,Math.min(Math.min(T.width,m.x-T.x),Math.min(T.height,m.y-T.y)))/h)},!1)];return u&&p.getValue(w.style,y.STYLE_ROUNDED,!1)&&v.push(i(w)),v}},l=function(h){return function(d){return[e(d,["arrowWidth","arrowSize"],function(u){var w=Math.max(0,Math.min(1,p.getValue(this.state.style,"arrowWidth",W.prototype.arrowWidth))),v=Math.max(0,Math.min(h,p.getValue(this.state.style,"arrowSize",W.prototype.arrowSize)));return new n(u.x+(1-v)*u.width,u.y+(1-w)*u.height/2)},function(u,w){this.state.style.arrowWidth=Math.max(0,Math.min(1,Math.abs(u.y+u.height/2-w.y)/u.height*2)),this.state.style.arrowSize=Math.max(0,Math.min(h,(u.x+u.width-w.x)/u.width))})]}},f=function(h,d,u,w,v){return e(h,d,function(T){var m=h.absolutePoints,S=m.length-1,x=h.view.translate,E=h.view.scale,R=u?m[0]:m[S],I=u?m[1]:m[S-1],Y=I.x-R.x,_=I.y-R.y,b=Math.sqrt(Y*Y+_*_),xe=w.call(this,b,Y/b,_/b,R,I);return new n(xe.x/E-x.x,xe.y/E-x.y)},function(T,m,S){var x=h.absolutePoints,E=x.length-1,R=h.view.translate,I=h.view.scale,Y=u?x[0]:x[E],_=u?x[1]:x[E-1],b=_.x-Y.x,xe=_.y-Y.y,st=Math.sqrt(b*b+xe*xe);m.x=(m.x+R.x)*I,m.y=(m.y+R.y)*I,v.call(this,st,b/st,xe/st,Y,_,m,S)})},g=function(h,d,u){return f(h,["width"],d,function(w,v,T,m,S){var x=h.shape.getEdgeWidth()*h.view.scale+u;return new n(m.x+v*w/4+T*x/2,m.y+T*w/4-v*x/2)},function(w,v,T,m,S,x){var E=Math.sqrt(p.ptSegDistSq(m.x,m.y,S.x,S.y,x.x,x.y));h.style.width=Math.round(E*2)/h.view.scale-u})};var Je={link:function(h){var d=10;return[g(h,!0,d),g(h,!1,d)]},flexArrow:function(h){var d=h.view.graph.gridSize/h.view.scale,u=[];return p.getValue(h.style,y.STYLE_STARTARROW,y.NONE)!=y.NONE&&(u.push(f(h,["width",y.STYLE_STARTSIZE,y.STYLE_ENDSIZE],!0,function(w,v,T,m,S){var x=(h.shape.getEdgeWidth()-h.shape.strokewidth)*h.view.scale,E=p.getNumber(h.style,y.STYLE_STARTSIZE,y.ARROW_SIZE/5)*3*h.view.scale;return new n(m.x+v*(E+h.shape.strokewidth*h.view.scale)+T*x/2,m.y+T*(E+h.shape.strokewidth*h.view.scale)-v*x/2)},function(w,v,T,m,S,x,E){var R=Math.sqrt(p.ptSegDistSq(m.x,m.y,S.x,S.y,x.x,x.y)),I=p.ptLineDist(m.x,m.y,m.x+T,m.y-v,x.x,x.y);h.style[y.STYLE_STARTSIZE]=Math.round((I-h.shape.strokewidth)*100/3)/100/h.view.scale,h.style.width=Math.round(R*2)/h.view.scale,mxEvent.isControlDown(E.getEvent())&&(h.style[y.STYLE_ENDSIZE]=h.style[y.STYLE_STARTSIZE]),mxEvent.isAltDown(E.getEvent())||Math.abs(parseFloat(h.style[y.STYLE_STARTSIZE])-parseFloat(h.style[y.STYLE_ENDSIZE]))<d/6&&(h.style[y.STYLE_STARTSIZE]=h.style[y.STYLE_ENDSIZE])})),u.push(f(h,["startWidth","endWidth",y.STYLE_STARTSIZE,y.STYLE_ENDSIZE],!0,function(w,v,T,m,S){var x=(h.shape.getStartArrowWidth()-h.shape.strokewidth)*h.view.scale,E=p.getNumber(h.style,y.STYLE_STARTSIZE,y.ARROW_SIZE/5)*3*h.view.scale;return new n(m.x+v*(E+h.shape.strokewidth*h.view.scale)+T*x/2,m.y+T*(E+h.shape.strokewidth*h.view.scale)-v*x/2)},function(w,v,T,m,S,x,E){var R=Math.sqrt(p.ptSegDistSq(m.x,m.y,S.x,S.y,x.x,x.y)),I=p.ptLineDist(m.x,m.y,m.x+T,m.y-v,x.x,x.y);h.style[y.STYLE_STARTSIZE]=Math.round((I-h.shape.strokewidth)*100/3)/100/h.view.scale,h.style.startWidth=Math.max(0,Math.round(R*2)-h.shape.getEdgeWidth())/h.view.scale,mxEvent.isControlDown(E.getEvent())&&(h.style[y.STYLE_ENDSIZE]=h.style[y.STYLE_STARTSIZE],h.style.endWidth=h.style.startWidth),mxEvent.isAltDown(E.getEvent())||(Math.abs(parseFloat(h.style[y.STYLE_STARTSIZE])-parseFloat(h.style[y.STYLE_ENDSIZE]))<d/6&&(h.style[y.STYLE_STARTSIZE]=h.style[y.STYLE_ENDSIZE]),Math.abs(parseFloat(h.style.startWidth)-parseFloat(h.style.endWidth))<d&&(h.style.startWidth=h.style.endWidth))}))),p.getValue(h.style,y.STYLE_ENDARROW,y.NONE)!=y.NONE&&(u.push(f(h,["width",y.STYLE_STARTSIZE,y.STYLE_ENDSIZE],!1,function(w,v,T,m,S){var x=(h.shape.getEdgeWidth()-h.shape.strokewidth)*h.view.scale,E=p.getNumber(h.style,y.STYLE_ENDSIZE,y.ARROW_SIZE/5)*3*h.view.scale;return new n(m.x+v*(E+h.shape.strokewidth*h.view.scale)-T*x/2,m.y+T*(E+h.shape.strokewidth*h.view.scale)+v*x/2)},function(w,v,T,m,S,x,E){var R=Math.sqrt(p.ptSegDistSq(m.x,m.y,S.x,S.y,x.x,x.y)),I=p.ptLineDist(m.x,m.y,m.x+T,m.y-v,x.x,x.y);h.style[y.STYLE_ENDSIZE]=Math.round((I-h.shape.strokewidth)*100/3)/100/h.view.scale,h.style.width=Math.round(R*2)/h.view.scale,mxEvent.isControlDown(E.getEvent())&&(h.style[y.STYLE_STARTSIZE]=h.style[y.STYLE_ENDSIZE]),mxEvent.isAltDown(E.getEvent())||Math.abs(parseFloat(h.style[y.STYLE_ENDSIZE])-parseFloat(h.style[y.STYLE_STARTSIZE]))<d/6&&(h.style[y.STYLE_ENDSIZE]=h.style[y.STYLE_STARTSIZE])})),u.push(f(h,["startWidth","endWidth",y.STYLE_STARTSIZE,y.STYLE_ENDSIZE],!1,function(w,v,T,m,S){var x=(h.shape.getEndArrowWidth()-h.shape.strokewidth)*h.view.scale,E=p.getNumber(h.style,y.STYLE_ENDSIZE,y.ARROW_SIZE/5)*3*h.view.scale;return new n(m.x+v*(E+h.shape.strokewidth*h.view.scale)-T*x/2,m.y+T*(E+h.shape.strokewidth*h.view.scale)+v*x/2)},function(w,v,T,m,S,x,E){var R=Math.sqrt(p.ptSegDistSq(m.x,m.y,S.x,S.y,x.x,x.y)),I=p.ptLineDist(m.x,m.y,m.x+T,m.y-v,x.x,x.y);h.style[y.STYLE_ENDSIZE]=Math.round((I-h.shape.strokewidth)*100/3)/100/h.view.scale,h.style.endWidth=Math.max(0,Math.round(R*2)-h.shape.getEdgeWidth())/h.view.scale,mxEvent.isControlDown(E.getEvent())&&(h.style[y.STYLE_STARTSIZE]=h.style[y.STYLE_ENDSIZE],h.style.startWidth=h.style.endWidth),mxEvent.isAltDown(E.getEvent())||(Math.abs(parseFloat(h.style[y.STYLE_ENDSIZE])-parseFloat(h.style[y.STYLE_STARTSIZE]))<d/6&&(h.style[y.STYLE_ENDSIZE]=h.style[y.STYLE_STARTSIZE]),Math.abs(parseFloat(h.style.endWidth)-parseFloat(h.style.startWidth))<d&&(h.style.endWidth=h.style.startWidth))}))),u},swimlane:function(h){var d=[];if(p.getValue(h.style,y.STYLE_ROUNDED)){var u=parseFloat(p.getValue(h.style,y.STYLE_STARTSIZE,y.DEFAULT_STARTSIZE));d.push(i(h,u/2))}return d.push(e(h,[y.STYLE_STARTSIZE],function(w){var v=parseFloat(p.getValue(h.style,y.STYLE_STARTSIZE,y.DEFAULT_STARTSIZE));return p.getValue(h.style,y.STYLE_HORIZONTAL,1)==1?new n(w.getCenterX(),w.y+Math.max(0,Math.min(w.height,v))):new n(w.x+Math.max(0,Math.min(w.width,v)),w.getCenterY())},function(w,v){h.style[y.STYLE_STARTSIZE]=p.getValue(this.state.style,y.STYLE_HORIZONTAL,1)==1?Math.round(Math.max(0,Math.min(w.height,v.y-w.y))):Math.round(Math.max(0,Math.min(w.width,v.x-w.x)))},!1,null,function(w){if(mxEvent.isControlDown(w.getEvent())){var v=h.view.graph;if(v.isTableRow(h.cell)||v.isTableCell(h.cell)){for(var T=v.getSwimlaneDirection(h.style),m=v.model.getParent(h.cell),S=v.model.getChildCells(m,!0),x=[],E=0;E<S.length;E++)S[E]!=h.cell&&v.isSwimlane(S[E])&&v.getSwimlaneDirection(v.getCurrentCellStyle(S[E]))==T&&x.push(S[E]);v.setCellStyles(y.STYLE_STARTSIZE,h.style[y.STYLE_STARTSIZE],x)}}})),d},label:o(),ext:o(),rectangle:o(),triangle:o(),rhombus:o(),umlLifeline:function(h){return[e(h,["size"],function(d){var u=Math.max(0,Math.min(d.height,parseFloat(p.getValue(this.state.style,"size",G.prototype.size))));return new n(d.getCenterX(),d.y+u)},function(d,u){this.state.style.size=Math.round(Math.max(0,Math.min(d.height,u.y-d.y)))},!1)]},umlFrame:function(h){var d=[e(h,["width","height"],function(u){var w=Math.max(N.prototype.corner,Math.min(u.width,p.getValue(this.state.style,"width",N.prototype.width))),v=Math.max(N.prototype.corner*1.5,Math.min(u.height,p.getValue(this.state.style,"height",N.prototype.height)));return new n(u.x+w,u.y+v)},function(u,w){this.state.style.width=Math.round(Math.max(N.prototype.corner,Math.min(u.width,w.x-u.x))),this.state.style.height=Math.round(Math.max(N.prototype.corner*1.5,Math.min(u.height,w.y-u.y)))},!1)];return d},process:function(h){var d=[e(h,["size"],function(u){var w=Math.max(0,Math.min(.5,parseFloat(p.getValue(this.state.style,"size",he.prototype.size))));return new n(u.x+u.width*w,u.y+u.height/4)},function(u,w){this.state.style.size=Math.max(0,Math.min(.5,(w.x-u.x)/u.width))},!1)];return p.getValue(h.style,y.STYLE_ROUNDED,!1)&&d.push(i(h)),d},cross:function(h){return[e(h,["size"],function(d){var u=Math.min(d.width,d.height),w=Math.max(0,Math.min(1,p.getValue(this.state.style,"size",Te.prototype.size)))*u/2;return new n(d.getCenterX()-w,d.getCenterY()-w)},function(d,u){var w=Math.min(d.width,d.height);this.state.style.size=Math.max(0,Math.min(1,Math.min(Math.max(0,d.getCenterY()-u.y)/w*2,Math.max(0,d.getCenterX()-u.x)/w*2)))})]},note:function(h){return[e(h,["size"],function(d){var u=Math.max(0,Math.min(d.width,Math.min(d.height,parseFloat(p.getValue(this.state.style,"size",ie.prototype.size)))));return new n(d.x+d.width-u,d.y+u)},function(d,u){this.state.style.size=Math.round(Math.max(0,Math.min(Math.min(d.width,d.x+d.width-u.x),Math.min(d.height,u.y-d.y))))})]},manualInput:function(h){var d=[e(h,["size"],function(u){var w=Math.max(0,Math.min(u.height,p.getValue(this.state.style,"size",ue.prototype.size)));return new n(u.x+u.width/4,u.y+w*3/4)},function(u,w){this.state.style.size=Math.round(Math.max(0,Math.min(u.height,(w.y-u.y)*4/3)))},!1)];return p.getValue(h.style,y.STYLE_ROUNDED,!1)&&d.push(i(h)),d},dataStorage:function(h){return[e(h,["size"],function(d){var u=p.getValue(this.state.style,"fixedSize","0")!="0",w=parseFloat(p.getValue(this.state.style,"size",u?ne.prototype.fixedSize:ne.prototype.size));return new n(d.x+d.width-w*(u?1:d.width),d.getCenterY())},function(d,u){var w=p.getValue(this.state.style,"fixedSize","0")!="0",v=w?Math.max(0,Math.min(d.width,d.x+d.width-u.x)):Math.max(0,Math.min(1,(d.x+d.width-u.x)/d.width));this.state.style.size=v},!1)]},callout:function(h){var d=[e(h,["size","position"],function(u){var w=Math.max(0,Math.min(u.height,p.getValue(this.state.style,"size",A.prototype.size))),v=Math.max(0,Math.min(1,p.getValue(this.state.style,"position",A.prototype.position)));return Math.max(0,Math.min(u.width,p.getValue(this.state.style,"base",A.prototype.base))),new n(u.x+v*u.width,u.y+u.height-w)},function(u,w){Math.max(0,Math.min(u.width,p.getValue(this.state.style,"base",A.prototype.base))),this.state.style.size=Math.round(Math.max(0,Math.min(u.height,u.y+u.height-w.y))),this.state.style.position=Math.round(Math.max(0,Math.min(1,(w.x-u.x)/u.width))*100)/100},!1),e(h,["position2"],function(u){var w=Math.max(0,Math.min(1,p.getValue(this.state.style,"position2",A.prototype.position2)));return new n(u.x+w*u.width,u.y+u.height)},function(u,w){this.state.style.position2=Math.round(Math.max(0,Math.min(1,(w.x-u.x)/u.width))*100)/100},!1),e(h,["base"],function(u){var w=Math.max(0,Math.min(u.height,p.getValue(this.state.style,"size",A.prototype.size))),v=Math.max(0,Math.min(1,p.getValue(this.state.style,"position",A.prototype.position))),T=Math.max(0,Math.min(u.width,p.getValue(this.state.style,"base",A.prototype.base)));return new n(u.x+Math.min(u.width,v*u.width+T),u.y+u.height-w)},function(u,w){var v=Math.max(0,Math.min(1,p.getValue(this.state.style,"position",A.prototype.position)));this.state.style.base=Math.round(Math.max(0,Math.min(u.width,w.x-u.x-v*u.width)))},!1)];return p.getValue(h.style,y.STYLE_ROUNDED,!1)&&d.push(i(h)),d},internalStorage:function(h){var d=[e(h,["dx","dy"],function(u){var w=Math.max(0,Math.min(u.width,p.getValue(this.state.style,"dx",K.prototype.dx))),v=Math.max(0,Math.min(u.height,p.getValue(this.state.style,"dy",K.prototype.dy)));return new n(u.x+w,u.y+v)},function(u,w){this.state.style.dx=Math.round(Math.max(0,Math.min(u.width,w.x-u.x))),this.state.style.dy=Math.round(Math.max(0,Math.min(u.height,w.y-u.y)))},!1)];return p.getValue(h.style,y.STYLE_ROUNDED,!1)&&d.push(i(h)),d},module:function(h){var d=[e(h,["jettyWidth","jettyHeight"],function(u){var w=Math.max(0,Math.min(u.width,p.getValue(this.state.style,"jettyWidth",X.prototype.jettyWidth))),v=Math.max(0,Math.min(u.height,p.getValue(this.state.style,"jettyHeight",X.prototype.jettyHeight)));return new n(u.x+w/2,u.y+v*2)},function(u,w){this.state.style.jettyWidth=Math.round(Math.max(0,Math.min(u.width,w.x-u.x))*2),this.state.style.jettyHeight=Math.round(Math.max(0,Math.min(u.height,w.y-u.y))/2)})];return d},corner:function(h){return[e(h,["dx","dy"],function(d){var u=Math.max(0,Math.min(d.width,p.getValue(this.state.style,"dx",ee.prototype.dx))),w=Math.max(0,Math.min(d.height,p.getValue(this.state.style,"dy",ee.prototype.dy)));return new n(d.x+u,d.y+w)},function(d,u){this.state.style.dx=Math.round(Math.max(0,Math.min(d.width,u.x-d.x))),this.state.style.dy=Math.round(Math.max(0,Math.min(d.height,u.y-d.y)))},!1)]},tee:function(h){return[e(h,["dx","dy"],function(d){var u=Math.max(0,Math.min(d.width,p.getValue(this.state.style,"dx",te.prototype.dx))),w=Math.max(0,Math.min(d.height,p.getValue(this.state.style,"dy",te.prototype.dy)));return new n(d.x+(d.width+u)/2,d.y+w)},function(d,u){this.state.style.dx=Math.round(Math.max(0,Math.min(d.width/2,u.x-d.x-d.width/2)*2)),this.state.style.dy=Math.round(Math.max(0,Math.min(d.height,u.y-d.y)))},!1)]},singleArrow:l(1),doubleArrow:l(.5),folder:function(h){return[e(h,["tabWidth","tabHeight"],function(d){var u=Math.max(0,Math.min(d.width,p.getValue(this.state.style,"tabWidth",H.prototype.tabWidth))),w=Math.max(0,Math.min(d.height,p.getValue(this.state.style,"tabHeight",H.prototype.tabHeight)));return p.getValue(this.state.style,"tabPosition",H.prototype.tabPosition)==y.ALIGN_RIGHT&&(u=d.width-u),new n(d.x+u,d.y+w)},function(d,u){var w=Math.max(0,Math.min(d.width,u.x-d.x));p.getValue(this.state.style,"tabPosition",H.prototype.tabPosition)==y.ALIGN_RIGHT&&(w=d.width-w),this.state.style.tabWidth=Math.round(w),this.state.style.tabHeight=Math.round(Math.max(0,Math.min(d.height,u.y-d.y)))},!1)]},document:function(h){return[e(h,["size"],function(d){var u=Math.max(0,Math.min(1,parseFloat(p.getValue(this.state.style,"size",se.prototype.size))));return new n(d.x+3*d.width/4,d.y+(1-u)*d.height)},function(d,u){this.state.style.size=Math.max(0,Math.min(1,(d.y+d.height-u.y)/d.height))},!1)]},tape:function(h){return[e(h,["size"],function(d){var u=Math.max(0,Math.min(1,parseFloat(p.getValue(this.state.style,"size",oe.prototype.size))));return new n(d.getCenterX(),d.y+u*d.height/2)},function(d,u){this.state.style.size=Math.max(0,Math.min(1,(u.y-d.y)/d.height*2))},!1)]},isoCube2:function(h){return[e(h,["isoAngle"],function(d){var u=Math.max(.01,Math.min(94,parseFloat(p.getValue(this.state.style,"isoAngle",ge.isoAngle))))*Math.PI/200,w=Math.min(d.width*Math.tan(u),d.height*.5);return new n(d.x,d.y+w)},function(d,u){this.state.style.isoAngle=Math.max(0,(u.y-d.y)*50/d.height)},!0)]},cylinder2:function(h){return[e(h,["size"],function(d){var u=Math.max(0,Math.min(d.height*.5,parseFloat(p.getValue(this.state.style,"size",Ee.size))));return new n(d.x,d.y+u)},function(d,u){this.state.style.size=Math.max(0,u.y-d.y)},!0)]},offPageConnector:function(h){return[e(h,["size"],function(d){var u=Math.max(0,Math.min(1,parseFloat(p.getValue(this.state.style,"size",fe.prototype.size))));return new n(d.getCenterX(),d.y+(1-u)*d.height)},function(d,u){this.state.style.size=Math.max(0,Math.min(1,(d.y+d.height-u.y)/d.height))},!1)]},step:a(B.prototype.size,!0,null,!0,B.prototype.fixedSize),hexagon:a(J.prototype.size,!0,.5,!0,J.prototype.fixedSize),curlyBracket:a(ze.prototype.size,!1),display:a(Se.prototype.size,!1),cube:r(1,D.prototype.size,!1),card:r(.5,le.prototype.size,!0),loopLimit:r(.5,de.prototype.size,!0),trapezoid:t(.5,U.prototype.size,U.prototype.fixedSize),parallelogram:t(1,q.prototype.size,q.prototype.fixedSize)};Me.createHandle=e,Me.handleFactory=Je;var Et=mxVertexHandler.prototype.createCustomHandles;mxVertexHandler.prototype.createCustomHandles=function(){var h=Et.apply(this,arguments);if(this.graph.isCellRotatable(this.state.cell)){var d=this.state.style.shape;M.defaultShapes[d]==null&&mxStencilRegistry.getStencil(d)==null?d=y.SHAPE_RECTANGLE:this.state.view.graph.isSwimlane(this.state.cell)&&(d=y.SHAPE_SWIMLANE);var u=Je[d];if(u==null&&this.state.shape!=null&&this.state.shape.isRoundable()&&(u=Je[y.SHAPE_RECTANGLE]),u!=null){var w=u(this.state);w!=null&&(h==null?h=w:h=h.concat(w))}}return h},mxEdgeHandler.prototype.createCustomHandles=function(){var h=this.state.style.shape;M.defaultShapes[h]==null&&mxStencilRegistry.getStencil(h)==null&&(h=y.SHAPE_CONNECTOR);var d=Je[h];return d!=null?d(this.state):null}}else Me.createHandle=function(){},Me.handleFactory={};var Xe=new n(1,0),Qe=new n(1,0),yt=p.toRadians(-30),zt=Math.cos(yt),Vt=Math.sin(yt);Xe=p.getRotatedPoint(Xe,zt,Vt);var gt=p.toRadians(-150),Ct=Math.cos(gt),Rt=Math.sin(gt);Qe=p.getRotatedPoint(Qe,Ct,Rt),ut.IsometricConnector=function(e,i,o,t,a){var r=e.view,l=t!=null&&t.length>0?t[0]:null,f=e.absolutePoints,g=f[0],h=f[f.length-1];l!=null&&(l=r.transformControlPoint(e,l)),g==null&&i!=null&&(g=new n(i.getCenterX(),i.getCenterY())),h==null&&o!=null&&(h=new n(o.getCenterX(),o.getCenterY()));var d=Xe.x,u=Xe.y,w=Qe.x,v=Qe.y,T=p.getValue(e.style,"elbow","horizontal")=="horizontal";if(h!=null&&g!=null){let S=function(x,E,R){var I=x-m.x,Y=E-m.y,_=(v*I-w*Y)/(d*v-u*w),b=(u*I-d*Y)/(u*w-d*v);T?(R&&(m=new n(m.x+d*_,m.y+u*_),a.push(m)),m=new n(m.x+w*b,m.y+v*b),a.push(m)):(R&&(m=new n(m.x+w*b,m.y+v*b),a.push(m)),m=new n(m.x+d*_,m.y+u*_),a.push(m))};var m=g;l==null&&(l=new n(g.x+(h.x-g.x)/2,g.y+(h.y-g.y)/2)),S(l.x,l.y,!0),S(h.x,h.y,!1)}},$.putValue("isometricEdgeStyle",ut.IsometricConnector);var It=Me.prototype.createEdgeHandler;Me.prototype.createEdgeHandler=function(e,i){if(i==ut.IsometricConnector){var o=new Dt(e);return o.snapToTerminals=!1,o}return It.apply(this,arguments)},Z.prototype.constraints=[],ce.prototype.getConstraints=function(e,i,o){var t=[],a=Math.tan(p.toRadians(30)),r=(.5-a)/2,l=Math.min(i,o/(.5+a)),f=(i-l)/2,g=(o-l)/2;return t.push(new s(new n(0,0),!1,null,f,g+.25*l)),t.push(new s(new n(0,0),!1,null,f+.5*l,g+l*r)),t.push(new s(new n(0,0),!1,null,f+l,g+.25*l)),t.push(new s(new n(0,0),!1,null,f+l,g+.75*l)),t.push(new s(new n(0,0),!1,null,f+.5*l,g+(1-r)*l)),t.push(new s(new n(0,0),!1,null,f,g+.75*l)),t},ge.prototype.getConstraints=function(e,i,o){var t=[],a=Math.max(.01,Math.min(94,parseFloat(p.getValue(this.style,"isoAngle",this.isoAngle))))*Math.PI/200,r=Math.min(i*Math.tan(a),o*.5);return t.push(new s(new n(.5,0),!1)),t.push(new s(new n(0,0),!1,null,i,r)),t.push(new s(new n(1,.5),!1)),t.push(new s(new n(0,0),!1,null,i,o-r)),t.push(new s(new n(.5,1),!1)),t.push(new s(new n(0,0),!1,null,0,o-r)),t.push(new s(new n(0,.5),!1)),t.push(new s(new n(0,0),!1,null,0,r)),t},A.prototype.getConstraints=function(e,i,o){var t=[];p.getValue(this.style,y.STYLE_ARCSIZE,y.LINE_ARCSIZE)/2;var a=Math.max(0,Math.min(o,parseFloat(p.getValue(this.style,"size",this.size))));i*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"position",this.position))));var r=i*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"position2",this.position2))));return Math.max(0,Math.min(i,parseFloat(p.getValue(this.style,"base",this.base)))),t.push(new s(new n(0,0),!1)),t.push(new s(new n(.25,0),!1)),t.push(new s(new n(.5,0),!1)),t.push(new s(new n(.75,0),!1)),t.push(new s(new n(1,0),!1)),t.push(new s(new n(0,0),!1,null,i,(o-a)*.5)),t.push(new s(new n(0,0),!1,null,i,o-a)),t.push(new s(new n(0,0),!1,null,r,o)),t.push(new s(new n(0,0),!1,null,0,o-a)),t.push(new s(new n(0,0),!1,null,0,(o-a)*.5)),i>=a*2&&t.push(new s(new n(.5,0),!1)),t},z.prototype.constraints=[new s(new n(0,0),!0),new s(new n(.25,0),!0),new s(new n(.5,0),!0),new s(new n(.75,0),!0),new s(new n(1,0),!0),new s(new n(0,.25),!0),new s(new n(0,.5),!0),new s(new n(0,.75),!0),new s(new n(1,.25),!0),new s(new n(1,.5),!0),new s(new n(1,.75),!0),new s(new n(0,1),!0),new s(new n(.25,1),!0),new s(new n(.5,1),!0),new s(new n(.75,1),!0),new s(new n(1,1),!0)],C.prototype.constraints=[new s(new n(0,0),!0),new s(new n(1,0),!0),new s(new n(0,1),!0),new s(new n(1,1),!0),new s(new n(.5,0),!0),new s(new n(.5,1),!0),new s(new n(0,.5),!0),new s(new n(1,.5))],Be.prototype.constraints=z.prototype.constraints,Ft.prototype.constraints=z.prototype.constraints,Fe.prototype.constraints=z.prototype.constraints,Ve.prototype.constraints=z.prototype.constraints,Lt.prototype.constraints=z.prototype.constraints,ie.prototype.getConstraints=function(e,i,o){var t=[],a=Math.max(0,Math.min(i,Math.min(o,parseFloat(p.getValue(this.style,"size",this.size)))));return t.push(new s(new n(0,0),!1)),t.push(new s(new n(0,0),!1,null,(i-a)*.5,0)),t.push(new s(new n(0,0),!1,null,i-a,0)),t.push(new s(new n(0,0),!1,null,i-a*.5,a*.5)),t.push(new s(new n(0,0),!1,null,i,a)),t.push(new s(new n(0,0),!1,null,i,(o+a)*.5)),t.push(new s(new n(1,1),!1)),t.push(new s(new n(.5,1),!1)),t.push(new s(new n(0,1),!1)),t.push(new s(new n(0,.5),!1)),i>=a*2&&t.push(new s(new n(.5,0),!1)),t},le.prototype.getConstraints=function(e,i,o){var t=[],a=Math.max(0,Math.min(i,Math.min(o,parseFloat(p.getValue(this.style,"size",this.size)))));return t.push(new s(new n(1,0),!1)),t.push(new s(new n(0,0),!1,null,(i+a)*.5,0)),t.push(new s(new n(0,0),!1,null,a,0)),t.push(new s(new n(0,0),!1,null,a*.5,a*.5)),t.push(new s(new n(0,0),!1,null,0,a)),t.push(new s(new n(0,0),!1,null,0,(o+a)*.5)),t.push(new s(new n(0,1),!1)),t.push(new s(new n(.5,1),!1)),t.push(new s(new n(1,1),!1)),t.push(new s(new n(1,.5),!1)),i>=a*2&&t.push(new s(new n(.5,0),!1)),t},D.prototype.getConstraints=function(e,i,o){var t=[],a=Math.max(0,Math.min(i,Math.min(o,parseFloat(p.getValue(this.style,"size",this.size)))));return t.push(new s(new n(0,0),!1)),t.push(new s(new n(0,0),!1,null,(i-a)*.5,0)),t.push(new s(new n(0,0),!1,null,i-a,0)),t.push(new s(new n(0,0),!1,null,i-a*.5,a*.5)),t.push(new s(new n(0,0),!1,null,i,a)),t.push(new s(new n(0,0),!1,null,i,(o+a)*.5)),t.push(new s(new n(1,1),!1)),t.push(new s(new n(0,0),!1,null,(i+a)*.5,o)),t.push(new s(new n(0,0),!1,null,a,o)),t.push(new s(new n(0,0),!1,null,a*.5,o-a*.5)),t.push(new s(new n(0,0),!1,null,0,o-a)),t.push(new s(new n(0,0),!1,null,0,(o-a)*.5)),t},H.prototype.getConstraints=function(e,i,o){var t=[],a=Math.max(0,Math.min(i,parseFloat(p.getValue(this.style,"tabWidth",this.tabWidth)))),r=Math.max(0,Math.min(o,parseFloat(p.getValue(this.style,"tabHeight",this.tabHeight)))),l=p.getValue(this.style,"tabPosition",this.tabPosition);return l=="left"?(t.push(new s(new n(0,0),!1)),t.push(new s(new n(0,0),!1,null,a*.5,0)),t.push(new s(new n(0,0),!1,null,a,0)),t.push(new s(new n(0,0),!1,null,a,r)),t.push(new s(new n(0,0),!1,null,(i+a)*.5,r))):(t.push(new s(new n(1,0),!1)),t.push(new s(new n(0,0),!1,null,i-a*.5,0)),t.push(new s(new n(0,0),!1,null,i-a,0)),t.push(new s(new n(0,0),!1,null,i-a,r)),t.push(new s(new n(0,0),!1,null,(i-a)*.5,r))),t.push(new s(new n(0,0),!1,null,i,r)),t.push(new s(new n(0,0),!1,null,i,(o-r)*.25+r)),t.push(new s(new n(0,0),!1,null,i,(o-r)*.5+r)),t.push(new s(new n(0,0),!1,null,i,(o-r)*.75+r)),t.push(new s(new n(0,0),!1,null,i,o)),t.push(new s(new n(0,0),!1,null,0,r)),t.push(new s(new n(0,0),!1,null,0,(o-r)*.25+r)),t.push(new s(new n(0,0),!1,null,0,(o-r)*.5+r)),t.push(new s(new n(0,0),!1,null,0,(o-r)*.75+r)),t.push(new s(new n(0,0),!1,null,0,o)),t.push(new s(new n(.25,1),!1)),t.push(new s(new n(.5,1),!1)),t.push(new s(new n(.75,1),!1)),t},K.prototype.constraints=z.prototype.constraints,ne.prototype.constraints=z.prototype.constraints,He.prototype.constraints=C.prototype.constraints,qe.prototype.constraints=C.prototype.constraints,Ue.prototype.constraints=C.prototype.constraints,Ge.prototype.constraints=C.prototype.constraints,ue.prototype.constraints=z.prototype.constraints,je.prototype.constraints=z.prototype.constraints,Se.prototype.getConstraints=function(e,i,o){var t=[],a=Math.min(i,o/2),r=Math.min(i-a,Math.max(0,parseFloat(p.getValue(this.style,"size",this.size)))*i);return t.push(new s(new n(0,.5),!1,null)),t.push(new s(new n(0,0),!1,null,r,0)),t.push(new s(new n(0,0),!1,null,(r+i-a)*.5,0)),t.push(new s(new n(0,0),!1,null,i-a,0)),t.push(new s(new n(1,.5),!1,null)),t.push(new s(new n(0,0),!1,null,i-a,o)),t.push(new s(new n(0,0),!1,null,(r+i-a)*.5,o)),t.push(new s(new n(0,0),!1,null,r,o)),t},X.prototype.getConstraints=function(e,i,o){var t=parseFloat(p.getValue(e,"jettyWidth",X.prototype.jettyWidth))/2,a=parseFloat(p.getValue(e,"jettyHeight",X.prototype.jettyHeight)),r=[new s(new n(0,0),!1,null,t),new s(new n(.25,0),!0),new s(new n(.5,0),!0),new s(new n(.75,0),!0),new s(new n(1,0),!0),new s(new n(1,.25),!0),new s(new n(1,.5),!0),new s(new n(1,.75),!0),new s(new n(0,1),!1,null,t),new s(new n(.25,1),!0),new s(new n(.5,1),!0),new s(new n(.75,1),!0),new s(new n(1,1),!0),new s(new n(0,0),!1,null,0,Math.min(o-.5*a,1.5*a)),new s(new n(0,0),!1,null,0,Math.min(o-.5*a,3.5*a))];return o>5*a&&r.push(new s(new n(0,.75),!1,null,t)),o>8*a&&r.push(new s(new n(0,.5),!1,null,t)),o>15*a&&r.push(new s(new n(0,.25),!1,null,t)),r},de.prototype.constraints=z.prototype.constraints,fe.prototype.constraints=z.prototype.constraints,L.prototype.constraints=[new s(new n(.15,.05),!1),new s(new n(.5,0),!0),new s(new n(.85,.05),!1),new s(new n(0,.3),!0),new s(new n(0,.5),!0),new s(new n(0,.7),!0),new s(new n(1,.3),!0),new s(new n(1,.5),!0),new s(new n(1,.7),!0),new s(new n(.15,.95),!1),new s(new n(.5,1),!0),new s(new n(.85,.95),!1)],Ne.prototype.constraints=[new s(new n(.25,.1),!1),new s(new n(.5,0),!1),new s(new n(.75,.1),!1),new s(new n(0,1/3),!1),new s(new n(0,1),!1),new s(new n(1,1/3),!1),new s(new n(1,1),!1),new s(new n(.5,.5),!1)],we.prototype.constraints=[new s(new n(.25,0),!0),new s(new n(.5,0),!0),new s(new n(.75,0),!0),new s(new n(0,.3),!0),new s(new n(0,.7),!0),new s(new n(1,.25),!0),new s(new n(1,.5),!0),new s(new n(1,.75),!0),new s(new n(.25,1),!0),new s(new n(.5,1),!0),new s(new n(.75,1),!0)],c.prototype.constraints=[new s(new n(.5,0),!0),new s(new n(.25,.2),!1),new s(new n(.1,.5),!1),new s(new n(0,.75),!0),new s(new n(.75,.25),!1),new s(new n(.9,.5),!1),new s(new n(1,.75),!0),new s(new n(.25,1),!0),new s(new n(.5,1),!0),new s(new n(.75,1),!0)],Pe.prototype.constraints=[new s(new n(0,0),!1),new s(new n(.5,.25),!1),new s(new n(1,0),!1),new s(new n(.25,.5),!1),new s(new n(.75,.5),!1),new s(new n(0,1),!1),new s(new n(.5,.75),!1),new s(new n(1,1),!1)],oe.prototype.constraints=[new s(new n(0,.35),!1),new s(new n(0,.5),!1),new s(new n(0,.65),!1),new s(new n(1,.35),!1),new s(new n(1,.5),!1),new s(new n(1,.65),!1),new s(new n(.25,1),!1),new s(new n(.75,0),!1)],B.prototype.constraints=[new s(new n(.25,0),!0),new s(new n(.5,0),!0),new s(new n(.75,0),!0),new s(new n(.25,1),!0),new s(new n(.5,1),!0),new s(new n(.75,1),!0),new s(new n(0,.25),!0),new s(new n(0,.5),!0),new s(new n(0,.75),!0),new s(new n(1,.25),!0),new s(new n(1,.5),!0),new s(new n(1,.75),!0)],kt.prototype.constraints=[new s(new n(0,.5),!1),new s(new n(.25,.5),!1),new s(new n(.75,.5),!1),new s(new n(1,.5),!1)],Ie.prototype.constraints=[new s(new n(.5,0),!1),new s(new n(.5,1),!1)],pt.prototype.constraints=C.prototype.constraints,ae.prototype.constraints=C.prototype.constraints,Pt.prototype.constraints=[new s(new n(0,.25),!0),new s(new n(0,.5),!0),new s(new n(0,.75),!0),new s(new n(.5,0),!0),new s(new n(.5,1),!0),new s(new n(1,.5),!0)],ht.prototype.constraints=[new s(new n(.375,0),!0),new s(new n(.5,0),!0),new s(new n(.625,0),!0),new s(new n(0,.25),!0),new s(new n(0,.5),!0),new s(new n(0,.75),!0),new s(new n(1,.25),!0),new s(new n(1,.5),!0),new s(new n(1,.75),!0),new s(new n(.375,1),!0),new s(new n(.5,1),!0),new s(new n(.625,1),!0)],_t.prototype.constraints=[new s(new n(.25,.25),!1),new s(new n(.4,.1),!1),new s(new n(.16,.55),!1),new s(new n(.07,.4),!1),new s(new n(.31,.8),!1),new s(new n(.13,.77),!1),new s(new n(.8,.8),!1),new s(new n(.55,.95),!1),new s(new n(.875,.5),!1),new s(new n(.96,.7),!1),new s(new n(.625,.2),!1),new s(new n(.88,.25),!1)],q.prototype.constraints=z.prototype.constraints,U.prototype.constraints=z.prototype.constraints,se.prototype.constraints=[new s(new n(.25,0),!0),new s(new n(.5,0),!0),new s(new n(.75,0),!0),new s(new n(0,.25),!0),new s(new n(0,.5),!0),new s(new n(0,.75),!0),new s(new n(1,.25),!0),new s(new n(1,.5),!0),new s(new n(1,.75),!0)],Nt.prototype.constraints=null,te.prototype.getConstraints=function(e,i,o){var t=[],a=Math.max(0,Math.min(i,parseFloat(p.getValue(this.style,"dx",this.dx)))),r=Math.max(0,Math.min(o,parseFloat(p.getValue(this.style,"dy",this.dy))));return t.push(new s(new n(0,0),!1)),t.push(new s(new n(.5,0),!1)),t.push(new s(new n(1,0),!1)),t.push(new s(new n(0,0),!1,null,i,r*.5)),t.push(new s(new n(0,0),!1,null,i,r)),t.push(new s(new n(0,0),!1,null,i*.75+a*.25,r)),t.push(new s(new n(0,0),!1,null,(i+a)*.5,r)),t.push(new s(new n(0,0),!1,null,(i+a)*.5,(o+r)*.5)),t.push(new s(new n(0,0),!1,null,(i+a)*.5,o)),t.push(new s(new n(.5,1),!1)),t.push(new s(new n(0,0),!1,null,(i-a)*.5,o)),t.push(new s(new n(0,0),!1,null,(i-a)*.5,(o+r)*.5)),t.push(new s(new n(0,0),!1,null,(i-a)*.5,r)),t.push(new s(new n(0,0),!1,null,i*.25-a*.25,r)),t.push(new s(new n(0,0),!1,null,0,r)),t.push(new s(new n(0,0),!1,null,0,r*.5)),t},ee.prototype.getConstraints=function(e,i,o){var t=[],a=Math.max(0,Math.min(i,parseFloat(p.getValue(this.style,"dx",this.dx)))),r=Math.max(0,Math.min(o,parseFloat(p.getValue(this.style,"dy",this.dy))));return t.push(new s(new n(0,0),!1)),t.push(new s(new n(.5,0),!1)),t.push(new s(new n(1,0),!1)),t.push(new s(new n(0,0),!1,null,i,r*.5)),t.push(new s(new n(0,0),!1,null,i,r)),t.push(new s(new n(0,0),!1,null,(i+a)*.5,r)),t.push(new s(new n(0,0),!1,null,a,r)),t.push(new s(new n(0,0),!1,null,a,(o+r)*.5)),t.push(new s(new n(0,0),!1,null,a,o)),t.push(new s(new n(0,0),!1,null,a*.5,o)),t.push(new s(new n(0,.5),!1)),t.push(new s(new n(0,1),!1)),t},We.prototype.constraints=[new s(new n(0,0),!1),new s(new n(0,.5),!1),new s(new n(0,1),!1),new s(new n(.25,.5),!1),new s(new n(.5,.5),!1),new s(new n(.75,.5),!1),new s(new n(1,0),!1),new s(new n(1,.5),!1),new s(new n(1,1),!1)],W.prototype.getConstraints=function(e,i,o){var t=[],a=o*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"arrowWidth",this.arrowWidth)))),r=i*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"arrowSize",this.arrowSize)))),l=(o-a)/2;return t.push(new s(new n(0,.5),!1)),t.push(new s(new n(0,0),!1,null,0,l)),t.push(new s(new n(0,0),!1,null,(i-r)*.5,l)),t.push(new s(new n(0,0),!1,null,i-r,0)),t.push(new s(new n(1,.5),!1)),t.push(new s(new n(0,0),!1,null,i-r,o)),t.push(new s(new n(0,0),!1,null,(i-r)*.5,o-l)),t.push(new s(new n(0,0),!1,null,0,o-l)),t},Ye.prototype.getConstraints=function(e,i,o){var t=[],a=o*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"arrowWidth",W.prototype.arrowWidth)))),r=i*Math.max(0,Math.min(1,parseFloat(p.getValue(this.style,"arrowSize",W.prototype.arrowSize)))),l=(o-a)/2;return t.push(new s(new n(0,.5),!1)),t.push(new s(new n(0,0),!1,null,r,0)),t.push(new s(new n(0,0),!1,null,i*.5,l)),t.push(new s(new n(0,0),!1,null,i-r,0)),t.push(new s(new n(1,.5),!1)),t.push(new s(new n(0,0),!1,null,i-r,o)),t.push(new s(new n(0,0),!1,null,i*.5,o-l)),t.push(new s(new n(0,0),!1,null,r,o)),t},Te.prototype.getConstraints=function(e,i,o){var t=[],a=Math.min(o,i),r=Math.max(0,Math.min(a,a*parseFloat(p.getValue(this.style,"size",this.size)))),l=(o-r)/2,f=l+r,g=(i-r)/2,h=g+r;return t.push(new s(new n(0,0),!1,null,g,l*.5)),t.push(new s(new n(0,0),!1,null,g,0)),t.push(new s(new n(.5,0),!1)),t.push(new s(new n(0,0),!1,null,h,0)),t.push(new s(new n(0,0),!1,null,h,l*.5)),t.push(new s(new n(0,0),!1,null,h,l)),t.push(new s(new n(0,0),!1,null,g,o-l*.5)),t.push(new s(new n(0,0),!1,null,g,o)),t.push(new s(new n(.5,1),!1)),t.push(new s(new n(0,0),!1,null,h,o)),t.push(new s(new n(0,0),!1,null,h,o-l*.5)),t.push(new s(new n(0,0),!1,null,h,f)),t.push(new s(new n(0,0),!1,null,(i+h)*.5,l)),t.push(new s(new n(0,0),!1,null,i,l)),t.push(new s(new n(1,.5),!1)),t.push(new s(new n(0,0),!1,null,i,f)),t.push(new s(new n(0,0),!1,null,(i+h)*.5,f)),t.push(new s(new n(0,0),!1,null,g,f)),t.push(new s(new n(0,0),!1,null,g*.5,l)),t.push(new s(new n(0,0),!1,null,0,l)),t.push(new s(new n(0,.5),!1)),t.push(new s(new n(0,0),!1,null,0,f)),t.push(new s(new n(0,0),!1,null,g*.5,f)),t.push(new s(new n(0,0),!1,null,g,l)),t},G.prototype.constraints=null,be.prototype.constraints=[new s(new n(0,.25),!1),new s(new n(0,.5),!1),new s(new n(0,.75),!1),new s(new n(1,.5),!1),new s(new n(.7,.1),!1),new s(new n(.7,.9),!1)],Ze.prototype.constraints=[new s(new n(.175,.25),!1),new s(new n(.25,.5),!1),new s(new n(.175,.75),!1),new s(new n(1,.5),!1),new s(new n(.7,.1),!1),new s(new n(.7,.9),!1)],Oe.prototype.constraints=[new s(new n(0,.5),!1),new s(new n(1,.5),!1)],Le.prototype.constraints=[new s(new n(0,.5),!1),new s(new n(1,.5),!1)]})();var Wt=function(Q){var D=new Object,j=Q.lastIndexOf("?");if(j>0)for(var O=Q.substring(j+1).split("&"),Z=0;Z<O.length;Z++)j=O[Z].indexOf("="),j>0&&(D[O[Z].substring(0,j)]=O[Z].substring(j+1));return D}(window.location.href);const Yt=`# Resources from graph.properties\r
# Custom resources\r
about=关于\r
actualSize=实际尺寸\r
add=添加\r
addAccount=添加帐户\r
addedFile=补充 {1}\r
addDeviceType=添加设备类型\r
addImages=添加图像\r
addImageUrl=添加图片链接\r
addLayer=添加图层\r
addProperty=新增属性\r
addToExistingDrawing=添加到现有的图中\r
addWaypoint=添加锚点\r
advanced=高级\r
advancedLayout=高级布局\r
align=对齐\r
alignment=对齐\r
allChangesLost=所有修改均将会丢失！\r
alreadyConnected=节点已连接\r
angle=角度\r
apply=应用\r
arc=弧\r
arrange=布局\r
arrow=箭头\r
arrows=箭头\r
autoDraw=自动绘制\r
legendOperation=图例操作\r
legendObtain=图例获取\r
legendSave=图例保存\r
automatic=自动\r
autosave=自动保存\r
autosize=自动调整\r
back=返回\r
backToList=返回列表\r
backToPreviousStep=返回上一步\r
background=背景\r
backgroundColor=背景色\r
backgroundImage=背景图\r
basic=基本\r
block=Block\r
blockquote=块引用\r
bold=粗体\r
border=边框\r
borderWidth=边框宽度\r
borderColor=边框颜色\r
bottom=底\r
bottomAlign=向下对齐\r
bottomLeft=左下\r
bottomRight=右下\r
browser=浏览器\r
bulletedList=项目符号列表\r
cancel=取消\r
cannotOpenFile=无法打开文件\r
center=居中\r
change=更改\r
changeOrientation=无法打开文件更改方向\r
circle=圆形布局\r
classic=经典\r
clearDefaultStyle=清除默认样式\r
showDeviceName=显示(隐藏)名称\r
clearWaypoints=清除曲线锚点\r
clipart=本地图库\r
close=关闭\r
collapse=折叠\r
collapseExpand=折叠 / 展开 (默认选中)\r
collapse-expand=点击 (折叠 / 展开)\r
collapsible=可折叠\r
comic=手绘\r
containsValidationErrors=包含验证错误\r
connect=连接\r
connecting=正在连接\r
connectWithDrive=连接 Google Drive\r
connection=连接\r
connectionPoints=连接点\r
connectionArrows=连接箭头\r
constrainProportions=固定比例\r
copy=拷贝\r
copyConnect=连接时拷贝\r
copySize=拷贝尺寸\r
create=创建\r
createNewDiagram=创建新绘图\r
createRevision=创建修订版本\r
createShape=创建图形\r
createLegend=创建图例\r
crop=导出单页\r
curved=曲线\r
custom=自定义\r
current=当前\r
currentPage=当前页\r
customZoom=自定义缩放\r
cut=剪切\r
dashed=虚线\r
decreaseIndent=减少缩进\r
default=默认\r
device=设备\r
# add text\r
bindingDeviceId=绑定设备\r
bindXMLName=超链接文件\r
delete=删除\r
deleteColumn=删除列\r
deleteRow=删除行\r
diagram=图表\r
diamond=方块\r
diamondThin=方块 (细)\r
didYouKnow=您知道吗......\r
direction=方向\r
distribute=等距分布\r
divider=分频器\r
documentProperties=文件属性\r
dotted=点线\r
done=完成\r
doubleClickOrientation=双击以改变方向\r
doubleClickTooltip=双击以插入文字\r
doubleClickChangeProperty=双击以更改属性名\r
download=下载\r
dpi=分辨率\r
drafdragImagesHeretDiscarded=草稿已丢弃\r
draftSaved=草稿已保存\r
dragElementsHere=把元素拖至此处\r
dragImagesHere=把图像或网络链接拖至此处\r
dragUrlsHere=将 URL 地址拖至此处\r
draw.io=draw.io\r
drawing=绘制{1}\r
drawingEmpty=绘制为空\r
drawingTooLarge=绘制过大\r
dragAndDropNotSupported=暂不支持图片拖放功能。是否要使用导入？\r
dropboxCharsNotAllowed=系统不允许使用下列字符：\\ / : ? * " |\r
duplicate=复制\r
duplicateIt=复制{1}\r
east=向右\r
edit=编辑\r
editData=编辑数据\r
editDiagram=编辑绘图\r
editGeometry=编辑几何图形\r
editImage=编辑图片\r
editImageUrl=编辑图片 URL 地址\r
editLink=编辑链接\r
editShape=编辑图形\r
editStyle=编辑样式\r
editText=编辑文字\r
editTooltip=编辑提示文字\r
eip=EIP\r
embed=嵌入\r
embedImages=嵌入图片\r
electrical=电路\r
ellipse=椭圆形\r
enterGroup=进入编辑组\r
enterValue=输入值\r
enterName=输入名称\r
enterPropertyName=输入属性名称\r
entityRelation=实体关系\r
entityRelationshipDiagram=E-R图\r
exit=退出\r
exitGroup=退出编辑组\r
expand=展开\r
export=导出\r
exporting=正在导出\r
exportAs=导出为\r
exportOptionsDisabled=已禁止导出\r
exportOptionsDisabledDetails=所有者已禁止评论者及浏览者下载、打印或复制该文件。\r
externalChanges=外部修改\r
extras=其它\r
error=错误\r
errorSavingFile=保存文件时出错\r
file=文件\r
fileNotFound=文件未找到\r
filename=文件名\r
fill=填充\r
fillColor=填充色\r
fitPage=整页显示\r
fitPageWidth=适应页面宽度\r
fitTwoPages=双页\r
fitWindow=适应视窗大小\r
flowchart=流程图\r
flip=翻转\r
flipH=水平翻转\r
flipV=垂直翻转\r
font=字体\r
fontFamily=字体系列\r
fontColor=字体颜色\r
fontSize=字体大小\r
formatBlock=格式块\r
format=格式\r
formatPanel=格式面板\r
formatted=格式化\r
formattedText=格式化文本\r
formatPng=PNG\r
formatGif=GIF\r
formatJpg=JPEG\r
formatPdf=PDF\r
formatSql=SQL\r
formatSvg=SVG\r
formatHtmlEmbedded=HTML\r
formatSvgEmbedded=SVG（含XML）\r
formatVsdx=VSDX\r
formatVssx=VSSX\r
formatXmlPlain=XML（文本文件）\r
formatXml=XML\r
forum=讨论组 / 帮助论坛\r
freehand=自由绘图\r
fromTemplate=从模板\r
fromTemplateUrl=从模板 URL 地址\r
fromText=从文本\r
fromUrl=从 URL 地址\r
fromThisPage=从当前页\r
fullscreen=全屏\r
gap=Gap\r
glass=滤镜\r
general=通用\r
global=全局\r
gradient=渐变\r
gradientColor=渐变颜色\r
grid=网格\r
gridSize=网格大小\r
group=组合\r
guides=参考线\r
heading=标题\r
height=高度\r
help=帮助\r
hide=隐藏\r
hideIt=隐藏 {1}\r
hidden=Hidden\r
home=首页\r
horizontal=水平\r
horizontalFlow=水平布局\r
horizontalTree=水平树状布局\r
html=HTML\r
id=ID\r
image=图片\r
imageUrl=图片 URL 地址\r
images=图片\r
imagePreviewError=无法预览图片。请检查 URL 地址。\r
imageTooBig=图片太大\r
import=导入\r
importDevice=导入设备\r
importFrom=从...导入\r
inches=英寸\r
includeCopyOfMyDiagram=包含绘图副本\r
increaseIndent=增加缩进\r
insert=插入\r
insertColumnBefore=左边插入列\r
insertColumnAfter=右边插入列\r
insertEllipse=插入椭圆\r
insertShape=插入形状\r
insertFreehand=插入自由绘制\r
insertHorizontalRule=插入水平标尺\r
insertImage=插入图片\r
insertLink=插入链接\r
insertLayout=思维导图布局\r
mindMapLayout=思维导图布局\r
insertPage=插入页面\r
insertRectangle=插入矩形\r
insertRhombus=插入菱形\r
insertRowBefore=在上方插入行\r
insertRowAfter=在下方插入行\r
insertText=插入文本\r
invalidInput=无效输入\r
invalidName=名称为空/无效名称\r
invalidOrMissingFile=无效或丢失的文件\r
isometric=等尺寸\r
italic=斜体\r
layers=图层\r
landscape=横向\r
laneColor=柠檬色\r
layout=布局\r
legend=图例\r
left=左\r
leftAlign=左对齐\r
leftToRight=从左至右\r
line=线型\r
link=链接\r
lineJumps=换行\r
lineend=线末端\r
lineheight=线高\r
linestart=线始端\r
linewidth=线宽\r
loading=加载标题\r
lockUnlock=锁定/解除锁定\r
maps=地图\r
mathematicalTypesetting=数学排版\r
makeCopy=创建副本\r
manual=手册\r
mermaid=Mermaid\r
microsoftOffice=Microsoft Office\r
microsoftExcel=Microsoft Excel\r
microsoftPowerPoint=Microsoft PowerPoint\r
microsoftWord=Microsoft Word\r
middle=垂直居中\r
misc=杂项\r
modificationNotSavedClickHereToSave=修改未保存,点击此处保存.\r
allChangesSaved=所有修改已保存\r
more=更多\r
moreResults=更多结果\r
moreShapes=更多图形\r
move=移动\r
moveToFolder=移动至文件夹\r
moving=移动中\r
moveSelectionTo=将所选移至{1}\r
millimeters=毫米\r
navigation=导航\r
new=新建\r
noColor=无颜色\r
noFiles=无文件\r
noMoreResults=无其他结果\r
none=无\r
noOtherViewers=无其他查阅者\r
noPlugins=无插件\r
noPreview=无预览\r
noResponse=服务器无响应\r
noResultsFor=未找到 '{1}' 的相关结果\r
noRevisions=无修订\r
noSearchResults=查询无结果\r
noPageContentOrNotSaved=此页面上找不到锚点，或尚未保存\r
normal=正常\r
north=向上\r
notADiagramFile=非绘图文件\r
notALibraryFile=非图库文件\r
notAvailable=不可用\r
notAUtf8File=非 UTF-8 格式文件\r
notConnected=未连接\r
note=备注\r
notSatisfiedWithImport=对导入不满意?\r
notUsingService=未使用 {1}?\r
nothingIsSelected=未选择\r
numberedList=编号列表\r
offline=离线\r
opacity=不透明度\r
open=Open\r
openArrow=Open Arrow\r
openFile=Open File\r
openLink=打开链接\r
openSupported=Supported format is .XML files saved from this software\r
openInNewWindow=在新窗口中打开\r
openInThisWindow=在此窗口中打开\r
options=选项\r
organic=自动布局\r
orthogonal=正交\r
outline=缩略图\r
oval=Oval\r
pages=页码\r
pageView=页面视图\r
pageScale=页面比列\r
pageSetup=页面设置\r
panTooltip=按住空格键并拖拽以移动画布\r
paperSize=页面尺寸\r
paste=粘贴\r
pasteHere=粘贴到此处\r
pasteSize=粘贴大小\r
pattern=样式\r
perimeter=边距\r
placeholders=记住此设置\r
plantUml=PlantUML\r
plugins=插件\r
pluginUrl=插件 URL 地址\r
pluginWarning=本页面已要求载入以下插件：\\n \\n {1}\\n \\n 是否现在载入这些插件？\\n \\n 备注：确保在完全理解与此相关的安全问题的情况下再允许这些插件运行。\\n\r
plusTooltip=单击进行连接与复制(ctrl+单击进行复制, shift+单击进行连接). 拖拽进行连接 (ctrl+拖拽进行复制).\r
points=点\r
portrait=竖向\r
position=位置\r
posterPrint=海报样式\r
preferences=喜好\r
preview=预览\r
print=打印\r
rack=机架\r
readOnly=只读\r
reconnecting=重新连接\r
recentlyUpdated=最近更新\r
recentlyViewed=最近阅览\r
rectangle=矩形\r
rememberThisSetting=记住此设置\r
resize=调整大小\r
resizeLargeImages=您是否想调整大图片的大小使应用运行更快?\r
radialTree=径向树状布局\r
redo=重做\r
removeFormat=清除格式\r
removeFromGroup=从组合中移出\r
removeIt=删除背景\r
removeWaypoint=移除锚点\r
rename=重命名\r
renameIt=Rename {1}\r
replace=更换\r
replaceIt={1} already exists. Do you want to replace it?\r
replaceExistingDrawing=更换现有的图\r
reset=重置\r
resetView=重置视图\r
reverse=翻转\r
right=右\r
rhombus=菱形\r
rightAlign=向右对齐\r
rightToLeft=由右至左\r
rotate=旋转\r
rotateTooltip=点选拖拽旋转，或点击选择90度\r
rotation=旋转\r
rounded=圆角\r
ruler=标尺\r
saveTopo=保存TOPO图\r
save=保存\r
saveAs=另存为\r
saved=已保存\r
saveDiagramFirst=请先保存绘图\r
saveDiagramsTo=保存绘图到\r
saveLibrary403=没有足够的权限编辑此图库\r
saveLibrary500=保存图库时出错\r
saveLibraryReadOnly=只读模式开启时无法保存图库\r
saving=正在保存\r
scratchpad=素材库\r
scrollbars=滚动条\r
search=搜索\r
searchShapes=搜索图形\r
selectAll=全选\r
selectEdges=选择边\r
selectFont=选择字体\r
selectNone=全不选\r
selectVertices=选择顶点\r
setAsDefaultStyle=设置为默认样式\r
shadow=阴影\r
shapesLibrary=形状库\r
shape=形状\r
shapes=形状\r
share=共享\r
sharp=尖角\r
sidebarTooltip=单击以展开,将图形拖拽至图表中。Shift+单击以改变所选内容, Alt+单击以插入及连接。\r
simple=简单\r
simpleArrow=简单箭头\r
size=大小\r
sketch=素描\r
solid=实线\r
sourceSpacing=Source Spacing\r
south=向下\r
spacing=间距\r
startDrawing=开始绘制\r
stopDrawing=结束绘制\r
straight=直线\r
strikethrough=删除线\r
strokeColor=线条颜色\r
style=样式\r
subscript=下标\r
superscript=上标\r
table=表格\r
targetSpacing=Target Spacing\r
template=模板\r
templates=模板\r
text=文本\r
textAlignment=文本对齐\r
textOpacity=字体不透明度\r
theme=主题\r
timeout=超时\r
title=标题\r
to=至\r
toBack=置于底层\r
toFront=置于顶层\r
toggleRounded=切换\r
toolbar=工具栏\r
tooltips=提示\r
top=顶\r
topAlign=向上对齐\r
topLeft=左上\r
topRight=右上\r
transparent=透明\r
transparentBackground=透明背景\r
turn=旋转90°/翻转\r
uml=建模\r
underline=下划线\r
undo=撤销\r
ungroup=取消组合\r
unsavedChanges=未保存的更改\r
unsavedChangesClickHereToSave=修改未保存。点击此处保存。\r
untitled=未命名\r
untitledDiagram=未命名绘图\r
untitledLayer=未命名图层\r
ledLayer=图例图层\r
untitledLibrary=未命名图库\r
unknownError=未知错误\r
units=单位\r
updateFile=更新{1}\r
updatingDocument=文件更新中。请稍候...\r
updatingPreview=预览更新中。请稍候...\r
updatingSelection=选择更新中。请稍候...\r
upload=上传\r
url=URL\r
vertical=垂直\r
verticalFlow=垂直布局\r
verticalTree=垂直树状布局\r
view=查看\r
viewPanels=视图面板\r
viewZoom=视图缩放\r
waypoints=锚点\r
west=向西\r
width=宽度\r
wordWrap=自动换行\r
writingDirection=书写方向\r
zoom=缩放\r
zoomIn=放大\r
zoomOut=缩小\r
\r
# customize\r
electrics=电学`,bt=`<mxStylesheet>\r
	<add as="defaultVertex">\r
		<add as="shape" value="label"/>\r
		<add as="perimeter" value="rectanglePerimeter"/>\r
		<add as="fontSize" value="12"/>\r
		<add as="fontFamily" value="Helvetica"/>\r
		<add as="align" value="center"/>\r
		<add as="verticalAlign" value="middle"/>\r
		<add as="fillColor" value="none"/>\r
		<add as="strokeColor" value="#2398ce"/>\r
		<add as="groundColor" value="#01122E"/>\r
		<add as="fontColor" value="#33ff99"/>\r
	</add>\r
	<add as="defaultEdge">\r
		<add as="shape" value="connector"/>\r
		<add as="labelBackgroundColor" value="#01122E"/>\r
		<add as="endArrow" value="classic"/>\r
		<add as="fontSize" value="11"/>\r
		<add as="fontFamily" value="Helvetica"/>\r
		<add as="align" value="center"/>\r
		<add as="verticalAlign" value="middle"/>\r
		<add as="rounded" value="1"/>\r
		<add as="strokeColor" value="#2398ce"/>\r
		<add as="fontColor" value="#33ff99"/>\r
	</add>\r
	<add as="text">\r
		<add as="fillColor" value="none"/>\r
		<add as="gradientColor" value="none"/>\r
		<add as="strokeColor" value="none"/>\r
		<add as="align" value="left"/>\r
		<add as="verticalAlign" value="top"/>\r
	</add>\r
	<add as="label">\r
		<add as="fontStyle" value="1"/>\r
		<add as="align" value="left"/>\r
		<add as="verticalAlign" value="middle"/>\r
		<add as="spacing" value="2"/>\r
		<add as="spacingLeft" value="52"/>\r
		<add as="imageWidth" value="42"/>\r
		<add as="imageHeight" value="42"/>\r
		<add as="rounded" value="1"/>\r
	</add>\r
	<add as="icon" extend="label">\r
		<add as="align" value="center"/>\r
		<add as="imageAlign" value="center"/>\r
		<add as="verticalLabelPosition" value="bottom"/>\r
		<add as="verticalAlign" value="top"/>\r
		<add as="spacingTop" value="4"/>\r
		<add as="labelBackgroundColor" value="#ffffff"/>\r
		<add as="spacing" value="0"/>\r
		<add as="spacingLeft" value="0"/>\r
		<add as="spacingTop" value="6"/>\r
		<add as="fontStyle" value="0"/>\r
		<add as="imageWidth" value="48"/>\r
		<add as="imageHeight" value="48"/>\r
	</add>\r
	<add as="swimlane">\r
		<add as="shape" value="swimlane"/>\r
		<add as="fontSize" value="12"/>\r
		<add as="fontStyle" value="1"/>\r
		<add as="startSize" value="23"/>\r
	</add>\r
	<add as="group">\r
		<add as="verticalAlign" value="top"/>\r
		<add as="fillColor" value="none"/>\r
		<add as="strokeColor" value="none"/>\r
		<add as="gradientColor" value="none"/>\r
		<add as="pointerEvents" value="0"/>\r
	</add>\r
	<add as="ellipse">\r
		<add as="shape" value="ellipse"/>\r
		<add as="perimeter" value="ellipsePerimeter"/>\r
	</add>\r
	<add as="rhombus">\r
		<add as="shape" value="rhombus"/>\r
		<add as="perimeter" value="rhombusPerimeter"/>\r
	</add>\r
	<add as="triangle">\r
		<add as="shape" value="triangle"/>\r
		<add as="perimeter" value="trianglePerimeter"/>\r
	</add>\r
	<add as="line">\r
		<add as="shape" value="line"/>\r
		<add as="strokeWidth" value="4"/>\r
		<add as="labelBackgroundColor" value="#ffffff"/>\r
		<add as="strokeColor" value="#33ff99"/>\r
		<add as="verticalAlign" value="top"/>\r
		<add as="spacingTop" value="8"/>\r
	</add>\r
	<add as="image">\r
		<add as="shape" value="image"/>\r
		<add as="labelBackgroundColor" value="#01122E"/>\r
		<add as="verticalAlign" value="top"/>\r
		<add as="verticalLabelPosition" value="bottom"/>\r
	</add>\r
	<add as="roundImage" extend="image">\r
		<add as="perimeter" value="ellipsePerimeter"/>\r
	</add>\r
	<add as="rhombusImage" extend="image">\r
		<add as="perimeter" value="rhombusPerimeter"/>\r
	</add>\r
	<add as="arrow">\r
		<add as="shape" value="arrow"/>\r
		<add as="edgeStyle" value="none"/>\r
		<add as="fillColor" value="#ffffff"/>\r
	</add>\r
</mxStylesheet>\r
`;export{Wt as U,bt as d,Yt as g};
