var onRun = function(context) {
    var doc = context.document;
    var page = doc.currentPage();
    var artb = page.currentArtboard();  
    
    var drawAreaFull = {w:1008, h:238};
    var drawArea1 = {w:1008, h:188};
    var drawArea2 = {w:1008, h:50};
    var barNum = 120;
    var color_rise = "#F64843";
    var color_fall = "#5C9F34";
    var color_grid = "#2d2d2d";
    var color_font = "#555";
    var color_v = "#6DC8EA"
    var barGap = 1;
    var stickWidth = 1;
    var vBarWidth = 2;
    var yPadding = 10;
    var gridHNum = 4;
    var labelNum = 4;
    var fontSize = 10;

    //=========== DATA ===================
    var dateAry = ["2015-11-20","2015-11-23","2015-11-24","2015-11-25","2015-11-26","2015-11-27","2015-11-30","2015-12-01","2015-12-02","2015-12-03","2015-12-04","2015-12-07","2015-12-08","2015-12-09","2015-12-10","2015-12-11","2015-12-14","2015-12-15","2015-12-16","2015-12-17","2015-12-18","2015-12-21","2015-12-22","2015-12-23","2015-12-24","2015-12-25","2015-12-28","2015-12-29","2015-12-30","2015-12-31","2016-01-04","2016-01-05","2016-01-06","2016-01-07","2016-01-08","2016-01-11","2016-01-12","2016-01-13","2016-01-14","2016-01-15","2016-01-18","2016-01-19","2016-01-20","2016-01-21","2016-01-22","2016-01-25","2016-01-26","2016-01-27","2016-01-28","2016-01-29","2016-02-01","2016-02-02","2016-02-03","2016-02-04","2016-02-05","2016-02-15","2016-02-16","2016-02-17","2016-02-18","2016-02-19","2016-02-22","2016-02-23","2016-02-24","2016-02-25","2016-02-26","2016-02-29","2016-03-01","2016-03-02","2016-03-03","2016-03-04","2016-03-07","2016-03-08","2016-03-09","2016-03-10","2016-03-11","2016-03-14","2016-03-15","2016-03-16","2016-03-17","2016-03-18","2016-03-21","2016-03-22","2016-03-23","2016-03-24","2016-03-25","2016-03-28","2016-03-29","2016-03-30","2016-03-31","2016-04-01","2016-04-05","2016-04-06","2016-04-07","2016-04-08","2016-04-11","2016-04-12","2016-04-13","2016-04-14","2016-04-15","2016-04-18","2016-04-19","2016-04-20","2016-04-21","2016-04-22","2016-04-25","2016-04-26","2016-04-27","2016-04-28","2016-04-29","2016-05-03","2016-05-04","2016-05-05","2016-05-06","2016-05-09","2016-05-10","2016-05-11","2016-05-12","2016-05-13","2016-05-16","2016-05-17","2016-05-18","2016-05-19","2016-05-20","2016-05-23","2016-05-24","2016-05-25","2016-05-26","2016-05-27","2016-05-30","2016-05-31","2016-06-01","2016-06-02","2016-06-03","2016-06-06","2016-06-07","2016-06-08","2016-06-13","2016-06-14","2016-06-15","2016-06-16","2016-06-17","2016-06-20","2016-06-21","2016-06-22","2016-06-23","2016-06-24","2016-06-27","2016-06-28","2016-06-29","2016-06-30","2016-07-01","2016-07-04","2016-07-05","2016-07-06","2016-07-07","2016-07-08","2016-07-11","2016-07-12","2016-07-13","2016-07-14","2016-07-15","2016-07-18","2016-07-19","2016-07-20","2016-07-21","2016-07-22","2016-07-25","2016-07-26","2016-07-27","2016-07-28","2016-07-29","2016-08-01","2016-08-02","2016-08-03","2016-08-04","2016-08-05","2016-08-08","2016-08-09","2016-08-10","2016-08-11","2016-08-12","2016-08-15","2016-08-16","2016-08-17","2016-08-18","2016-08-19","2016-08-22","2016-08-23","2016-08-24","2016-08-25","2016-08-26","2016-08-29","2016-08-30","2016-08-31","2016-09-01","2016-09-02","2016-09-05","2016-09-06","2016-09-07","2016-09-08","2016-09-09","2016-09-12","2016-09-13","2016-09-14","2016-09-19","2016-09-20","2016-09-21","2016-09-22","2016-09-23","2016-09-26","2016-09-27","2016-09-28","2016-09-29","2016-09-30","2016-10-10","2016-10-11","2016-10-12","2016-10-13","2016-10-14","2016-10-17","2016-10-18","2016-10-19","2016-10-20","2016-10-21"];
    var oAry = [15.88,16.21,17.35,17.45,18,17.15,16.11,15.52,15.38,15.07,15.35,15.46,15.52,14.8,15.05,14.91,14.6,15,16.68,16.9,17.02,16.74,16.35,16.65,16.01,15.78,16.3,17,16.98,17.14,16.36,13.75,14.1,14.1,13.16,12.82,11.86,11.66,10.15,10.58,9.3,9.96,10.46,11.4,10.58,11.58,12.02,12.6,12.83,11.85,11.85,11.5,12.66,12.97,13.4,12.49,13.7,13.77,14.28,14,14.66,14.52,14.18,14.15,13.35,12.69,11.74,12.1,12.93,13.14,12.32,12.2,12.58,12.9,12.21,12.9,13.26,13.29,12.84,13.68,15.15,15,14.9,15,15,15.32,14.9,16.04,16.1,16,16.78,16.6,16.55,16.15,15.93,15.98,15.83,15.96,16.11,16.19,16.46,16.35,14.95,14.36,14.63,14.46,14.78,14.6,14.3,14.44,14.85,15.02,15.08,13.92,13.96,14.01,13.3,13.55,13.32,13.69,13.4,13.19,13.16,13.55,13.84,13.7,13.46,13.75,13.45,13.43,14.08,14,14.16,14.19,14.22,14.41,14.95,14.6,15.47,15.79,15.81,15.15,15.87,14.88,15.27,15,14.81,15.21,15.35,15.25,14.92,14.66,15.2,15.12,14.96,14.98,14.78,14.87,14.85,15.25,15.19,15.53,15.44,16.22,15.76,15.71,15.8,16.39,16.39,15.46,15.37,15.07,14.73,14.85,14.95,15.11,14.92,15,15.13,14.91,14.72,14.63,15.06,15.07,15.17,15.05,14.99,15.6,15.74,15.66,16.13,15.61,15.55,15.65,15.85,15.64,15.81,15.52,15.72,15.53,15.54,15.3,15.15,14.98,14.93,15.91,15.99,16.16,16.07,15.65,15.93,15.81,15.72,16.05,16.4,16.38,16.29,16.41,16.41,16.55,17.16,17.24,17.37,17.09];
    var hAry = [16.25,17.8,17.95,18.29,18.15,17.8,16.43,15.53,15.59,15.49,15.8,15.6,15.55,15.53,15.32,15.23,14.88,16.35,17.17,17.46,17.43,16.74,16.72,16.75,16.06,16.44,17.7,17.18,17.43,17.3,16.5,14.75,14.35,14.1,13.45,12.99,12.1,11.8,10.86,10.63,10.28,10.59,11.64,11.59,11.56,12.7,13.56,13.3,13,12.8,12.19,12.61,13.48,13.68,13.58,14.3,14.13,14.33,14.56,14.82,14.66,14.65,14.42,14.62,13.69,12.73,12.33,13.24,14.05,13.35,12.94,13.24,13.2,13.13,13.09,13.53,13.6,13.34,13.89,15,15.55,15.9,15.62,16.46,15.35,15.46,15.9,16.38,16.59,16.71,17.16,17.19,16.92,16.44,16.48,15.98,16.3,16.19,16.68,16.98,16.55,16.47,15.24,14.72,14.63,14.74,14.84,14.64,14.47,15,15.35,15.1,15.16,14.45,14.19,14.11,13.63,13.63,13.66,13.75,13.78,13.52,13.5,13.98,13.88,13.89,13.88,13.93,13.69,14.09,14.43,14.25,14.25,14.34,14.34,15.6,15.5,15.5,16.26,16.18,15.97,15.67,15.93,15.17,15.28,15.27,15.34,15.48,15.44,15.3,15.3,15.26,15.25,15.17,15,14.98,15.06,14.96,15.23,15.25,15.59,15.88,15.71,16.33,15.94,16.08,16.45,16.53,16.45,15.59,15.5,15.25,14.95,15,15.28,15.14,15.1,15.15,15.14,15,14.75,15.14,15.19,15.23,15.17,15.08,16.24,15.93,16.24,16.2,16.39,15.9,15.98,15.96,15.93,16.16,15.89,15.73,15.77,15.74,15.86,15.48,15.21,15.13,15.15,16.38,16.27,16.27,16.15,16.07,15.95,16.15,16.2,16.32,16.58,16.46,16.88,16.64,16.54,17.38,17.34,17.4,17.5,17.35];
    var lAry = [15.65,16.21,16.75,17.11,17.35,16,14.59,14.8,14,14.92,15.15,15.27,15,14.69,14.88,14.71,14.41,14.96,16.25,16.45,16.67,16.12,16.28,16.01,15.5,15.5,16.3,16.3,16.78,16.45,14.82,13.4,13.88,12.86,11.71,11.92,11.13,10.45,9.7,9.7,9.27,9.9,10.4,10.48,10.58,11.46,11.81,11.77,11.96,11.76,11.16,11.5,12.55,12.92,12.86,12.49,13.55,13.53,13.88,14,14.21,13.93,13.6,12.74,12.5,11.75,11.16,11.96,12.78,12.3,12.32,11.6,12.42,12.65,12,12.77,13.11,12.53,12.8,13.5,14.75,14.85,14.76,14.75,14.64,14.83,14.65,15.61,16,15.91,16.3,16.35,16.04,15.19,15.77,15.45,15.83,15.9,15.99,15.68,16.03,14.71,14.41,14.2,14.04,14.3,14.43,14.04,14.19,14.35,14.82,14.81,14.11,13.52,13.68,13.41,12.95,13.27,13.14,13.4,13.01,13.14,13.1,13.45,13.43,13.48,13.32,13.65,13.36,13.43,14.02,13.95,13.92,14.12,14.07,14.41,14.8,14.55,15.47,15.6,15.13,15.15,14.75,14.72,14.9,14.03,14.76,15.16,15.16,14.85,14.9,14.6,15.02,14.92,14.75,14.7,14.78,14.5,14.85,15.05,15.09,15.35,15.12,15.7,15.51,15.52,15.77,16.17,15.12,14.8,15.14,14.38,14.7,14.67,14.88,14.95,14.72,14.97,14.95,14.66,14.39,14.63,14.94,14.91,14.98,14.9,14.95,15.53,15.5,15.35,15.62,15.43,15.52,15.59,15.5,15.61,15.38,15.16,15.48,15.4,15.52,15.05,15.01,14.88,14.93,15.58,15.87,15.92,15.55,15.51,15.34,15.72,15.65,15.92,16.11,16.18,16.21,16.23,16.15,16.43,16.88,17,17,16.81];
    var cAry = [16.18,17.59,17.44,17.79,17.4,16.21,15.52,15.15,14.97,15.41,15.5,15.5,15.06,15.02,14.91,14.72,14.86,16.35,16.67,17.26,16.78,16.3,16.62,16.12,15.83,16.28,16.67,16.72,17.19,16.47,14.82,13.89,14.29,12.86,13.24,11.92,11.49,10.47,10.78,9.78,9.98,10.58,11.64,10.51,11.56,12.37,12.52,13.29,11.96,12.11,11.46,12.61,13.26,13.63,13.04,13.72,14.06,14.25,13.91,14.39,14.51,14.31,14.09,13.25,13.06,11.75,12.07,13.01,13.19,12.32,12.52,12.94,12.73,12.7,12.73,13.25,13.16,12.64,13.68,14.91,15.23,14.94,15.35,15.11,15.15,14.89,15.85,16.26,16.1,16.56,16.79,16.55,16.24,15.67,16.08,15.7,15.87,16.11,16.42,16.49,16.29,15.19,14.49,14.65,14.39,14.68,14.49,14.39,14.27,14.95,15.09,15,14.15,13.88,13.84,13.52,13.54,13.38,13.65,13.51,13.19,13.31,13.44,13.9,13.56,13.54,13.78,13.68,13.47,14.06,14.04,14.13,14.11,14.22,14.26,15.24,14.84,15.45,15.98,15.79,15.23,15.59,14.85,15.15,15.04,14.96,15.26,15.31,15.21,14.92,14.9,15.2,15.17,14.99,14.93,14.78,14.87,14.89,15.2,15.16,15.55,15.37,15.69,15.74,15.73,15.86,16.4,16.39,15.54,15.19,15.27,14.81,14.92,14.93,15.15,14.96,15.03,15.11,14.96,14.78,14.71,15.01,15.06,15.17,15,14.96,15.8,15.7,15.71,16.04,15.77,15.51,15.64,15.86,15.53,15.74,15.46,15.72,15.54,15.6,15.58,15.08,15.06,14.89,15.04,16.14,16.05,16.05,15.6,15.89,15.66,15.76,16.1,16.06,16.45,16.31,16.5,16.35,16.45,17.15,17.24,17.37,17.09,17.24];
    var vAry = [345406,1058928,771200,553550,441463,464861,528334,336390,320095,257536,275951,208165,212446,268569,198858,165543,161094,707257,732689,652590,486271,392933,281972,312323,212717,313037,734918,445510,559600,360061,311553,395193,251115,90352,349973,232153,217773,206425,297580,289302,268112,317998,685672,470800,762605,772807,830570,744768,523092,577955,365376,424569,730633,633921,413423,581797,585889,525743,448840,572850,469777,403682,349347,621100,380248,364615,330433,376980,455333,371395,208703,367873,278837,419943,314912,437441,358206,350621,650108,945180,954804,818627,824987,1143612,615361,470113,967921,1094023,846697,962261,825916,704632,753754,664071,505757,404385,453954,324178,693161,721637,415303,604578,380075,261557,235348,236226,208536,222333,146057,335319,341752,220012,325817,335513,168394,205240,206141,160822,182778,173483,232666,195371,146162,254141,175930,176862,195930,175374,100828,289859,294556,245225,294582,266020,191997,781540,626010,508417,837437,543806,481620,377953,432844,238941,231788,367051,251400,284842,239036,267001,217843,314255,203526,189481,185548,204675,208162,174305,275751,223130,399607,312912,337636,484308,282848,424870,526570,311199,477116,233486,170583,260141,97664,122101,154403,94227,78516,83922,87218,127040,173347,173909,132180,138995,99555,87017,556842,308934,324551,561334,456183,226520,261388,195439,209214,391434,268453,284470,196210,161423,170882,182356,102406,96510,95658,880679,450974,344610,346046,400888,259921,284483,395883,291622,373727,260807,374044,257888,177647,729845,367336,328130,293363,327383];

    //=========== MAIN ===================
    var xOffset;
    var barWidth;
    var kMax = getNum(hAry,"max", barNum);
    var kMin = getNum(lAry,"min", barNum);
    var vMax = getNum(vAry,"max", barNum);
    var vMin = getNum(vAry,"min", barNum);

    //var labelK = drawLabelY(kMin, kMax, 4, drawArea1.h);
    //var labelV = drawLabelY(vMin, vMax, 3, drawArea2.h);

    xOffset = 0//Math.max(labelK.getBounds().width, labelV.getBounds().width) + 2;

    if(artb != undefined)
    {
        drawArea1 = {w:artb.frame().width(), h:artb.frame().height()}
    }
    var graphK = drawGraphK(drawArea1);
    log("drawed")
    //var graphV = drawGraphV(drawArea2);
    //graphK.addChild(labelK);
    //graphV.addChild(labelV);

    //stage.addChild(graphV);
    //stage.addChild(graphK);



    function drawGraphK(size){
        
        size = size || {w:100, h:100};
        size.w = Math.round(size.w - xOffset);

        var graph_k = newGroup("graph_k");

        barWidth = Math.floor(size.w/barNum);
        var valMax = kMax;
        var valMin = kMin;
        var dataDrawH = size.h - fontSize;

        //var gridH = drawGridH(size, gridHNum, color_grid, fontSize/2); 
        var graph = newGroup("graph", graph_k);

        var sizeScale = dataDrawH/(valMax - valMin);

        //DRAW GRAPH
        for(var i=0; i<barNum; i++){
            var newBX = i*(barWidth + barGap);
            var newSX = barWidth/2 + i*(barWidth + barGap);
            var newBY = dataDrawH - (oAry[i] - valMin)*sizeScale;
            var newSY = dataDrawH - (hAry[i] - valMin)*sizeScale;
            var newBH = (cAry[i] - oAry[i])*sizeScale*-1;
            if(newBH == 0){
                newBH = 1;
            }
            var newSH = (hAry[i] - lAry[i])*sizeScale;
            var newColor = "";
            if(cAry[i] - oAry[i]>=0){
                newColor = color_rise;
                var bar = drawBox(Math.round(newBX), Math.round(newBY), barWidth, Math.round(newBH), newColor, graph, 0, "bar_rise");
            }else{
                newColor = color_fall;
                var bar = drawBox(Math.round(newBX), Math.round(newBY), barWidth, Math.round(newBH), newColor, graph, 0, "bar_fall");
            }

            var stick = drawBox(newSX, newSY, stickWidth, newSH, newColor, graph);

        }

        gridH.frame().x = xOffset;
        gridH.frame().y = fontSize / 2;
        graph.frame().x = xOffset;
        graph.frame().y = fontSize / 2;
        
        return graph_k;
    }

    /*
    function drawGraphV(size){	
        size = size || {w:100, h:100};
        size.w = Math.round(size.w - xOffset);

        var valMax = vMax;
        var valMin = vMin;

        var gridH = drawGridH(size, 3, color_grid, fontSize/2); 
        var graph_v = new createjs.Container();

        var sizeScale = size.h/(valMax - valMin);

        var graph = new createjs.Container();

        for(var i=0; i<barNum; i++){
            var newBX = i*(barWidth + barGap);
            var newBY = size.h;
            var newBW = vBarWidth;
            var newBH = (vAry[i]/valMax*(valMax - valMin))*sizeScale*-1;
            var newColor = color_v;

            var bar = drawBox(newBX, newBY, newBW, newBH, newColor);
            graph.addChild(bar);
        }

        gridH.x = xOffset;
        gridH.y = fontSize / 2;
        graph.x = xOffset;
        graph.y = fontSize / 2;

        graph_v.addChild(gridH);
        graph_v.addChild(graph);

        return graph_v;
    }
    */


    //==============================================


    //========== Draw a Rect ==========
    function drawBox(x, y, width, height, bgColor, parent, radius, name) {
        radius = radius || 0;
        name = name || "Rectangle";

        var newRect = MSRectangleShape.new();
        newRect.frame = MSRect.rectWithRect(NSMakeRect(x, y, width, height));
        var rectLayer = MSShapeGroup.shapeWithPath(newRect);

        //newRect.cornerRadiusFloat = radius;
        rectLayer.setName(name);
        rectLayer.style().addStylePartOfType(0);
        rectLayer.style().fill().setColor(hexToMSColor(bgColor));

        //If there's no artboards create the rect in the page
        /*
        if (doc.currentPage().artboards().count() == 0) {
            doc.currentPage().addLayers([rectLayer]);
        } else {
            doc.currentPage().currentArtboard().addLayers([rectLayer]);
        }*/
        parent.addLayers([rectLayer]);

        //Deselect all layers and select the new created
        doc.currentPage().deselectAllLayers();
        rectLayer.setIsSelected(true);
    }

    
    function drawWireBox(x,y,w,h,color){
        var box = new createjs.Shape();
        box.graphics.beginFill("1c1c1c");
        box.graphics.beginStroke(color);
        box.graphics.drawRect(x,y,w,h);
        box.graphics.endFill();
        box.graphics.endStroke();
        box.setBounds(x,y,w,h);

        return box;
    }

    function drawLine(x1,y1,x2,y2,bgColor,parent){
        
        var newRect = MSRectangleShape.new();
        newRect.frame = MSRect.rectWithRect(NSMakeRect(x, y, width, height));
        var rectGroup = MSShapeGroup.shapeWithPath(newRect);

        //var fillRect = rectGroup.style().addStylePartOfType(0);
        //fillRect.color = MSColor.colorWithSVGString(bgColor);

        //If there's no artboards create the rect in the page
        if (doc.currentPage().artboards().count() == 0) {
            doc.currentPage().addLayers([rectGroup]);
        } else {
            doc.currentPage().currentArtboard().addLayers([rectGroup]);
        }

        //Deselect all layers and select the new created
        doc.currentPage().deselectAllLayers();
        rectGroup.setIsSelected(true);
    }

    function drawLabel(x,y,text){
        var txt = new createjs.Text();
        txt.text = text;
        txt.x = x;
        txt.y = y;
        txt.font = fontSize+"px Arial";
        txt.color = color_font;
        //txt.textAlign = "right";

        stage.addChild(txt);
        return txt;
    }

    function drawLabelY(valMin, valMax, num, drawHeight){
        var labelContainer = new createjs.Container();

        var labelRange = valMax - valMin;
        for(var i=0; i<num; i++){		
            var newLabel = drawLabel(0, 0, (valMin+i*labelRange/num).toFixed(2));

            if(i == 0){
                newLabel.y = drawHeight - fontSize;
            }else{
                newLabel.y = drawHeight - i*(drawHeight/(num-1));
            }

            labelContainer.addChild(newLabel);
        }

        labelContainer.name = "labelY";	
        return labelContainer;
    }

    function drawGridH(size, hNum, color, yPadding){
        yPadding = yPadding || 0;

        var gridH = new createjs.Container();

        size.h = Math.round(size.h - yPadding*2);
        for(var i=0; i<hNum; i++){
            var newLine = drawLine(0.5, i*(size.h/(hNum-1))+0.5, size.w, i*(size.h/(hNum-1))+0.5, color_grid);

            gridH.addChild(newLine);
        }

        return gridH;
    }
    
    function newGroup(name, parent){
        name = name||"Group";
        if(artb == undefined)
        {
            parent = parent || "";    
        }
        else
        {
            parent = parent || artb;
        }
        
        
        var group = MSLayerGroup.new();
        group.setName(name);
        
        if(parent == ""){
            doc.currentPage().addLayers([group]);
        }else{
            parent.addLayers([group]);
        }
        
        
        return group;
    }

    //Get the max of min number (max by defalut) from an array in a given range (array length by defalut)
    function getNum(ary, end, length){
        end = end || "max";
        length = length || ary.length;
        var op = ary[0];	

        if(end == "min"){
            for(var i=0; i<length; i++){
                if(ary[i]<op){
                    op = ary[i]
                }
            }

            return op;
        }else{
            for(var i=0; i<length; i++){
                if(ary[i]>op){
                    op = ary[i]
                }
            }

            return op;
        }
    }

    function hexToMSColor(hexStr)
    {
        var cleanStr = hexStr.replace("#","");
        var r = parseInt(cleanStr.slice(0,2),16);
        var g = parseInt(cleanStr.slice(2,4),16);
        var b = parseInt(cleanStr.slice(4,6),16);

        var opMSColor = MSColor.colorWithRed_green_blue_alpha(r/255, g/255, b/255, 1);
        return opMSColor;
    }

};
