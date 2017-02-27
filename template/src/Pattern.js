var lib = ["empty", "r_cir", "r_star", "r_tri", "r_fish", "r_shell", 
        "r_seastar", "b_cir", "b_star", "b_tri", "y_fish", "y_shell", "y_seastar", 
        "g_cir", "g_star", "g_tri", "p_fish", "p_shell", "p_seastar"];
var gift = ["y_stone", "r_stone", "b_stone", "p_stone","goldencoin","silvercoin"];
function newStone(sName,ssName, pos, scale, scene, zorder)
{
	sprite = cc.Sprite.create("res/item/" + sName + ".png");
	sprite.setPosition(pos);
	sprite.setScale(scale);
	scene.addChild(sprite, zorder);
	
	//scene.childSprite.push(sprite);
	return sprite;
}
cc.MyPattern=cc.Class.extend({
	havegift:true,
	N:0, 
	step:0, 
	gift:new Array(),
	giftMC:new Array(),
	Mat:new Array(),
	chaosMat:new Array(),
	name:1, 
	mcShow:1, 
	select:1, 
	SUP:1, 
	mc:1, 
	_y:1,
	ctor:function(n,_name)
	{
		//havegift = true;
        this.N = n;
        this.step = n * n + 1;
        this.gift = new Array();
        this.giftMC = new Array();
        this.Mat = new Array();
        this.chaosMat = new Array();
        this.name = _name;
        for (var _loc3 = 0; _loc3 < this.N; ++_loc3)
        {
            this.Mat[_loc3] = new Array();
            for (var _loc2 = 0; _loc2 < this.N; ++_loc2)
            {
                this.Mat[_loc3][_loc2] = 0;
            }
        }
	},
	isInRect:function(loc,x0,y0,scale,scene){
		_loc4 = 70*scale;
		x0 -= _loc4 * ((this.N+1) / 2-1);
		y0 += _loc4 * ((this.N+1) / 2-1);
		for (var _loc5 = 0; _loc5 < this.N; ++_loc5)
        {
            for (var _loc3 = 0; _loc3 < this.N; ++_loc3)
            {
                _loc8 = _loc5 * _loc4;
                _loc7 = _loc3 * _loc4;
                //alert(x0+_loc8+' '+(y0+_loc7)+' '+loc.getLocation().x+' '+loc.getLocation().y+' '+_loc4);
                //return;
                if (isInRect(x0+_loc8,y0-_loc7,loc.getLocation().x,loc.getLocation().y,_loc4,_loc4) == true)
                {
                	scene.seli = _loc5;
                	scene.selj = _loc3;
                	//alert(_loc5+' '+_loc3);
                	return true;
                }
                
            }
        }
		return false;
	},
	move:function(scene,x0,y0,scale,main){
		if (main.seli==null && main.selj==null)
			return;
		_loc4 = 70*scale;
		x0 -= _loc4 * (this.N) / 2;
		y0 -= _loc4 * (this.N) / 2;
		//console.log(main.seli+' '+main.selj+'d:'+main.direct+'a:'+main.act);
		
		if (Math.abs(main.offsetpt.y)>_loc4)
		{
			if (main.offsetpt.y > 0)
				main.offsetpt.y = _loc4;
			else
				main.offsetpt.y = -_loc4;
		}
		if (Math.abs(main.offsetpt.x)>_loc4)
		{
			if (main.offsetpt.x > 0)
				main.offsetpt.x = _loc4;
			else
				main.offsetpt.x = -_loc4;
		}  
		if (main.direct == 0) //x
		{
			for (var _loc5 = 0; _loc5 < this.N; ++_loc5)
	            for (var _loc3 = 0; _loc3 < this.N; ++_loc3)
	            {
	            	_loc8 = _loc5 * _loc4;
	                _loc7 = _loc3 * _loc4;//
	            	if (main.selj != _loc3 || Math.abs(main.act)!=1)
	            	{
		                newStone("empty",name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
		                if (this.Mat[_loc5][_loc3] != 0)
		                	newStone(lib[this.Mat[_loc5][_loc3]],name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
	               }
	            }
	        tmap = new Array(this.N+2);
	        tmap[0] = this.Mat[this.N-1][main.selj];
	        for (var i = 1; i <= this.N; i++)
	        	tmap[i] = this.Mat[i-1][main.selj];
	        tmap[this.N+1] = this.Mat[0][main.selj];
	        i = Math.abs(1-(main.act+1)/2);
	        for (var _loc5 = i; _loc5 <= this.N+i; ++_loc5)
	        {
            	_loc8 = (_loc5 - 1) * _loc4;
                _loc7 = main.selj * _loc4;
        		//console.log(main.offsetpt.y);
        		newStone("empty",name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8+main.offsetpt.x, getY(y0+_loc7)),scale,scene,1);
        		if (tmap[_loc5] != 0)
                	newStone(lib[tmap[_loc5]],name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8+main.offsetpt.x, getY(y0+_loc7)),scale,scene,1);
	        }
	        
		}
		else if (main.direct == 1)
		{
			for (var _loc5 = 0; _loc5 < this.N; ++_loc5)
	            for (var _loc3 = 0; _loc3 < this.N; ++_loc3)
	            {
	            	_loc8 = _loc5 * _loc4;
	                _loc7 = _loc3 * _loc4;
	            	if (main.seli != _loc5 || Math.abs(main.act)!=1)
	            	{
		                newStone("empty",name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
		                if (this.Mat[_loc5][_loc3] != 0)
		                	newStone(lib[this.Mat[_loc5][_loc3]],name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
	                }
	            }
	            
	        tmap = new Array(this.N+2);
	        tmap[0] = this.Mat[main.seli][this.N-1];
	        for (var i = 1; i <= this.N; i++)
	        	tmap[i] = this.Mat[main.seli][i-1];
	        tmap[this.N+1] = this.Mat[main.seli][0];
	        i = Math.abs(1-(main.act+1)/2);
	        
            for (var _loc3 = i; _loc3 <= this.N+i; ++_loc3)
            {
            	_loc8 = main.seli * _loc4;
                _loc7 = (_loc3 - 1) * _loc4;
        		newStone("empty",name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7+main.offsetpt.y)),scale,scene,1);
                if (tmap[_loc3] != 0)
                {
                	newStone(lib[tmap[_loc3]],name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7+main.offsetpt.y)),scale,scene,1);
                    //mcShow.attachMovie(lib[Mat[_loc5][_loc3]], name + "_" + _loc5 + "_" + _loc3, mcShow.getNextHighestDepth(), {_x: _loc8, _y: _loc7, _width: _loc4, _height: _loc4});
                }
            }
		}
	},
	schedulefn:function(scene,x0,y0,scale,main){
		
		main.seli=this.chaosMat[this._loc2];
        main.selj=this.chaosMat[this._loc2];
        if (main.seli == null)
        {
        	cc.Director.getInstance().getScheduler().unscheduleSelector(   this.callSchedule 	, this);
        	main.DrawPattern();
        	main.isDrawing=false;
        	main.movedisable=false;
        	return;
        }
        
        main.direct=this._loc2 % 2;
        main.act=1;
        this._loc2++;
        this.MoveAnimation(scene,x0,y0,scale,main);
	},
	callSchedule:function()
	{
		if (this.main.panel != null)
			this.main.panel.removeAllChildrenWithCleanup(true);
		this.main.panel=newSprite("blank", cc.p(270, getY(715)), 1, this.main, 1);
		
		this.schedulefn(this.main.panel,this.x0,this.y0,this.scale,this.main);
	},
	drawStones:function(scene,x0,y0,scale,main){
        a = new cc.Scheduler();
        this._loc2 = 0;
        this.main = main;
        this.scale = scale;
        this.x0 = x0;
        this.y0 = y0;
        this.scene = scene;
        main.isDrawing=true;
        cc.Director.getInstance().getScheduler().scheduleSelector(   this.callSchedule 	, this, .2,false,cc.REPEAT_FOREVER,0.1);
	},
	MoveAnimation:function(scene,x0,y0,scale,main){
		if (main.seli==null && main.selj==null)
			return;
		_loc4 = 70*scale;
		
		x0 -= _loc4 * (this.N) / 2;
		y0 -= _loc4 * (this.N) / 2;
		//console.log(main.seli+' '+main.selj+'d:'+main.direct+'a:'+main.act);
		
		if (Math.abs(main.offsetpt.y)>_loc4)
		{
			if (main.offsetpt.y > 0)
				main.offsetpt.y = _loc4;
			else
				main.offsetpt.y = -_loc4;
		}
		if (Math.abs(main.offsetpt.x)>_loc4)
		{
			if (main.offsetpt.x > 0)
				main.offsetpt.x = _loc4;
			else
				main.offsetpt.x = -_loc4;
		}  
		if (main.direct == 0) //x
		{
			for (var _loc5 = 0; _loc5 < this.N; ++_loc5)
	            for (var _loc3 = 0; _loc3 < this.N; ++_loc3)
	            {
	            	_loc8 = _loc5 * _loc4;
	                _loc7 = _loc3 * _loc4;
	            	if (main.selj != _loc3 || Math.abs(main.act)!=1)
	            	{
		                newStone("empty",name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
		                if (this.Mat[_loc5][_loc3] != 0)
		                	newStone(lib[this.Mat[_loc5][_loc3]],name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
	               }
	            }
	        tmap = new Array(this.N+2);
	        tmap[0] = this.Mat[this.N-1][main.selj];
	        for (var i = 1; i <= this.N; i++)
	        	tmap[i] = this.Mat[i-1][main.selj];
	        tmap[this.N+1] = this.Mat[0][main.selj];
	        i = Math.abs(1-(main.act+1)/2);
	        
	        
	        
	        for (var _loc5 = i; _loc5 <= this.N+i; ++_loc5)
	        {
            	_loc8 = (_loc5 - 1) * _loc4;
                _loc7 = main.selj * _loc4;
        		// console.log(main.offsetpt.y);
        		stone = newStone("empty",name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
        		//actionTo = cc.MoveTo.create(.5,cc.p(x0+_loc8-_loc4, getY(y0+_loc7)));
        		actionBy = cc.MoveBy.create(.1,cc.p(_loc4*main.act, 0));
        		//cc.CardinalSplineAt.create();
        		stone.runAction(actionBy);
        		if (tmap[_loc5] != 0)
        		{
        			actionBy1 = cc.MoveBy.create(.1,cc.p(_loc4*main.act, 0));
                	stone = newStone(lib[tmap[_loc5]],name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
                	stone.runAction(actionBy1);
                }
	        }
	        for (_loc5 = i; _loc5 < this.N+i; ++_loc5)
            	this.Mat[_loc5-i][main.selj] = tmap[_loc5];
	        
		}
		else if (main.direct == 1)
		{
			for (var _loc5 = 0; _loc5 < this.N; ++_loc5)
	            for (var _loc3 = 0; _loc3 < this.N; ++_loc3)
	            {
	            	_loc8 = _loc5 * _loc4;
	                _loc7 = _loc3 * _loc4;
	            	if (main.seli != _loc5 || Math.abs(main.act)!=1)
	            	{
		                newStone("empty",name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
		                if (this.Mat[_loc5][_loc3] != 0)
		                	newStone(lib[this.Mat[_loc5][_loc3]],name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
	                }
	            }
	            
	        tmap = new Array(this.N+2);
	        tmap[0] = this.Mat[main.seli][this.N-1];
	        for (var i = 1; i <= this.N; i++)
	        	tmap[i] = this.Mat[main.seli][i-1];
	        tmap[this.N+1] = this.Mat[main.seli][0];
	        i = Math.abs(1-(main.act+1)/2);
	        
            for (var _loc3 = i; _loc3 <= this.N+i; ++_loc3)
            {
            	_loc8 = main.seli * _loc4;
                _loc7 = (_loc3 - 1) * _loc4;
        		stone=newStone("empty",name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
        		actionBy = cc.MoveBy.create(.1,cc.p(0, -_loc4*main.act));
        		stone.runAction(actionBy);
                if (tmap[_loc3] != 0)
                {
                	actionBy1 = cc.MoveBy.create(.1,cc.p(0, -_loc4*main.act));
                	stone = newStone(lib[tmap[_loc3]],name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
                	stone.runAction(actionBy1);
                    //mcShow.attachMovie(lib[Mat[_loc5][_loc3]], name + "_" + _loc5 + "_" + _loc3, mcShow.getNextHighestDepth(), {_x: _loc8, _y: _loc7, _width: _loc4, _height: _loc4});
                }
            }
            for (_loc3 = i; _loc3 < this.N+i; ++_loc3)
            	this.Mat[main.seli][_loc3-i] = tmap[_loc3];
            
		}
	},
	showPanel:function(scene,x0,y0,scale){
		
		_loc4 = 70*scale;
		x0 -= _loc4 * (this.N) / 2;
		y0 -= _loc4 * (this.N) / 2;
		//alert(_loc4);
		for (var _loc5 = 0; _loc5 < this.N; ++_loc5)
        {
            for (var _loc3 = 0; _loc3 < this.N; ++_loc3)
            {
                _loc8 = _loc5 * _loc4;
                _loc7 = _loc3 * _loc4;
                //mcShow.attachMovie("empty", name + "_" + _loc5 + "_" + _loc3, mcShow.getNextHighestDepth(), {_x: _loc8, _y: _loc7, _width: _loc4, _height: _loc4});
                newStone("empty",name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
                if (this.Mat[_loc5][_loc3] != 0)
                {
                	newStone(lib[this.Mat[_loc5][_loc3]],name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
                    //mcShow.attachMovie(lib[Mat[_loc5][_loc3]], name + "_" + _loc5 + "_" + _loc3, mcShow.getNextHighestDepth(), {_x: _loc8, _y: _loc7, _width: _loc4, _height: _loc4});
                }
            }
        }
	},
	showMat:function(scene, x0, y0,scale){
		_loc4 = 70*scale;
		for (var _loc5 = 0; _loc5 < this.N; ++_loc5)
        {
            for (var _loc3 = 0; _loc3 < this.N; ++_loc3)
            {
                _loc8 = _loc5 * _loc4;
                _loc7 = _loc3 * _loc4;
                //mcShow.attachMovie("empty", name + "_" + _loc5 + "_" + _loc3, mcShow.getNextHighestDepth(), {_x: _loc8, _y: _loc7, _width: _loc4, _height: _loc4});
                newStone("empty",name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
                if (this.Mat[_loc5][_loc3] != 0)
                {
                	newStone(lib[this.Mat[_loc5][_loc3]],name + "_" + _loc5 + "_" + _loc3,cc.p(x0+_loc8, getY(y0+_loc7)),scale,scene,1);
                    //mcShow.attachMovie(lib[Mat[_loc5][_loc3]], name + "_" + _loc5 + "_" + _loc3, mcShow.getNextHighestDepth(), {_x: _loc8, _y: _loc7, _width: _loc4, _height: _loc4});
                }
            }
        }
        for (var _loc5 = 0; _loc5 < this.gift.length; ++_loc5)
        {
        	newStone(this.gift[_loc5],name + "_" + _loc5 + "_" + _loc3,cc.p(x0-25, getY(y0+_loc5*30)),.35,scene,1);
        }
	},
	GetchaosMat:function()
    {
        var _loc3;
        for (var _loc2 = 0; _loc2 < this.N * this.N; ++_loc2)
        {
            _loc3 = Math.floor(this.N * Math.random());
            this.chaosMat[_loc2] = _loc3;
        }
    }
});

var data = new Array();
var data3X3 = new Array();
var data4X4 = new Array();
var data5X5 = new Array();

data3X3[0] = new cc.MyPattern(3, "Lev_0");
data3X3[1] = new cc.MyPattern(3, "Lev_1");
data3X3[2] = new cc.MyPattern(3, "Lev_2");
data3X3[3] = new cc.MyPattern(3, "Lev_3");
data3X3[4] = new cc.MyPattern(3, "Lev_201");
data3X3[5] = new cc.MyPattern(3, "Lev_202");
data3X3[6] = new cc.MyPattern(3, "Lev_203");
data4X4[0] = new cc.MyPattern(4, "Lev_301");
data4X4[1] = new cc.MyPattern(4, "Lev_302");
data4X4[2] = new cc.MyPattern(4, "Lev_303");
data4X4[3] = new cc.MyPattern(4, "Lev_304");
data4X4[4] = new cc.MyPattern(4, "Lev_305");
data4X4[5] = new cc.MyPattern(4, "Lev_306");
data4X4[6] = new cc.MyPattern(4, "Lev_307");
data5X5[0] = new cc.MyPattern(5, "Lev_401");
data5X5[1] = new cc.MyPattern(5, "Lev_402");
data5X5[2] = new cc.MyPattern(5, "Lev_403");
data5X5[3] = new cc.MyPattern(5, "Lev_404");
data5X5[4] = new cc.MyPattern(5, "Lev_405");
data5X5[5] = new cc.MyPattern(5, "Lev_406");
data5X5[6] = new cc.MyPattern(5, "Lev_407");

data3X3[0].Mat = [[0, 0, 0], [0, 2, 0], [0, 0, 0]];
data3X3[0].chaosMat = [1, 2];
data3X3[0].gift = ["silvercoin"];
data3X3[0].step = 5;



data3X3[1].Mat = [[0, 17, 0], [0, 17, 0], [0, 17, 0]];
data3X3[1].GetchaosMat();
data3X3[1].gift = ["goldencoin"];
data3X3[2].Mat = [[4, 0, 0], [0, 11, 0], [0, 0, 18]];
data3X3[2].GetchaosMat();
data3X3[2].gift = ["silvercoin", "goldencoin"];
data3X3[3].Mat = [[5, 0, 5], [0, 5, 0], [5, 0, 5]];
data3X3[3].GetchaosMat();
data3X3[3].gift = ["silvercoin", "goldencoin", "goldencoin"];
data3X3[4].Mat = [[0, 14, 0], [14, 16, 14], [0, 14, 0]];
data3X3[4].GetchaosMat();
data3X3[4].gift = ["y_stone"];
data3X3[5].Mat = [[13, 0, 13], [0, 12, 0], [13, 0, 13]];
data3X3[5].GetchaosMat();
data3X3[5].gift = ["y_stone"];
data3X3[6].Mat = [[4, 5, 6], [10, 11, 12], [16, 17, 18]];
data3X3[6].GetchaosMat();
data3X3[6].gift = ["b_stone"];
data3X3[6].step = 15;
data4X4[0].Mat = [[1, 0, 0, 0], [0, 8, 0, 0], [0, 0, 12, 0], [0, 0, 0, 17]];
data4X4[0].GetchaosMat();
data4X4[0].gift = ["goldencoin", "goldencoin"];
data4X4[1].Mat = [[5, 0, 0, 17], [0, 0, 0, 0], [0, 0, 0, 0], [6, 0, 0, 18]];
data4X4[1].GetchaosMat();
data4X4[1].gift = ["silvercoin", "goldencoin", "goldencoin"];
data4X4[2].Mat = [[10, 10, 10, 10], [0, 10, 10, 10], [0, 0, 10, 10], [0, 0, 0, 10]];
data4X4[2].GetchaosMat();
data4X4[2].gift = ["y_stone"];
data4X4[5].Mat = [[7, 0, 0, 7], [0, 3, 3, 0], [0, 3, 3, 0], [7, 0, 0, 7]];
data4X4[5].GetchaosMat();
data4X4[5].gift = ["r_stone", "y_stone"];
data4X4[3].Mat = [[0, 17, 17, 0], [17, 0, 0, 17], [17, 0, 0, 17], [0, 17, 17, 0]];
data4X4[3].GetchaosMat();
data4X4[3].gift = ["y_stone"];
data4X4[4].Mat = [[0, 0, 0, 14], [5, 14, 14, 5], [5, 14, 14, 5], [0, 0, 0, 14]];
data4X4[4].GetchaosMat();
data4X4[4].gift = ["r_stone"];
data4X4[6].Mat = [[13, 6, 13, 6], [6, 13, 6, 13], [13, 6, 13, 6], [6, 13, 6, 13]];
data4X4[6].GetchaosMat();
data4X4[6].gift = ["b_stone", "b_stone"];
data5X5[0].Mat = [[0, 0, 2, 0, 0], [0, 2, 0, 2, 0], [2, 0, 2, 0, 2], [0, 2, 0, 2, 0], [0, 0, 2, 0, 0]];
data5X5[0].GetchaosMat();
data5X5[0].gift = ["y_stone"];
data5X5[1].Mat = [[0, 0, 7, 0, 0], [0, 7, 7, 0, 0], [7, 7, 7, 7, 7], [0, 7, 7, 0, 0], [0, 0, 7, 0, 0]];
data5X5[1].GetchaosMat();
data5X5[1].gift = ["y_stone", "y_stone"];
data5X5[2].Mat = [[0, 1, 1, 0, 0], [1, 0, 0, 1, 0, 0], [1, 0, 0, 0, 1], [1, 0, 0, 1, 0], [0, 1, 1, 0, 0]];
data5X5[2].GetchaosMat();
data5X5[2].gift = ["r_stone"];
data5X5[3].Mat = [[0, 0, 18, 18, 0], [0, 18, 0, 0, 18], [18, 0, 11, 11, 18], [0, 18, 0, 0, 18], [0, 0, 18, 18, 0]];
data5X5[3].GetchaosMat();
data5X5[3].gift = ["r_stone", "y_stone"];
data5X5[4].Mat = [[9, 0, 0, 0, 9], [0, 6, 6, 6, 0], [0, 6, 1, 6, 0], [0, 6, 6, 6, 0], [9, 0, 0, 0, 9]];
data5X5[4].GetchaosMat();
data5X5[4].gift = ["r_stone", "r_stone"];
data5X5[5].Mat = [[2, 0, 9, 0, 2], [0, 4, 0, 4, 0], [9, 0, 2, 0, 9], [0, 4, 0, 4, 0], [2, 0, 9, 0, 2]];
data5X5[5].GetchaosMat();
data5X5[5].gift = ["b_stone"];
data5X5[6].Mat = [[10, 3, 17, 8, 1], [3, 10, 17, 1, 8], [17, 17, 17, 17, 17], [1, 8, 17, 3, 10], [8, 1, 17, 10, 3]];
data5X5[6].GetchaosMat();
data5X5[6].gift = ["b_stone", "b_stone", "b_stone"];