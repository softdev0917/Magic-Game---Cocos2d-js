
//Mat=({a:false});

var PlayLayer = cc.Layer.extend({

	init: function(){
		
		

		this._super();
		this.setTouchEnabled(true);
        this.size = cc.Director.getInstance().getWinSize();		
		
		this.isCheckedLabel = false;
		this.isCheckedPrinciple = false;
		
	
		//newSprite("bg", cc.p(386, getY(246)), 1, this, -2);
		newSprite("background_1", cc.p(405, getY(242)), 1, this, 1);
		newSprite("edu2000", cc.p(60, getY(450)), .21, this, 3);
		newSprite("edu", cc.p(200, getY(450)), 1, this, 3);
		this.soundbtn1 = newSprite("btn_sound_1", cc.p(550, getY(100)), 1, this, 1);
		this.soundbtn=newSprite("btn_sound_0", cc.p(550, getY(100)), 1, this, 1);
		this.soundbtn1.setVisible(false);
		this.pane11=newSprite("pane1_1", cc.p(223, getY(227)), 1, this, 1);//230,230
		this.pane21=newSprite("pane2_1", cc.p(225, getY(230)), 1, this, 1);
		this.pane31=newSprite("pane3_1", cc.p(230, getY(235)), 1, this, 1);
		this.pane1 = newSprite("pane1", cc.p(223, getY(227)), 1, this, 2);//230,230
		this.pane2 = newSprite("pane2", cc.p(228, getY(222)), 1, this, 2);
		this.pane3 = newSprite("pane3", cc.p(236, getY(243)), 1, this, 2);
		
		this.pane3.setVisible(false);
		this.pane2.setVisible(false);
		this.pane31.setVisible(false);
		this.pane21.setVisible(false);
		
		
		newSprite("menu1_1", cc.p(638, getY(50)), 1, this, 1);
		this.menu1 = newSprite("menu1_0", cc.p(638, getY(50)), 1, this, 1);
		newSprite("menu2_1", cc.p(638, getY(158)), 1, this, 1);
		this.menu2 = newSprite("menu2_0", cc.p(638, getY(158)), 1, this, 1);
		newSprite("menu3_1", cc.p(638, getY(266)), 1, this, 1);
		this.menu3 = newSprite("menu3_0", cc.p(638, getY(266)), 1, this, 1);
		//newSprite("menu_pane", cc.p(737, getY(242)), 1, this, 1);
		newSprite("menu_pane", cc.p(725, getY(242)), 1, this, 1);
		this.scroll = newSprite("scroll", cc.p(664, getY(25)), 1, this, 1);
		
		//30~450
		//newSprite("btn_go_0", cc.p(520, getY(250)), .75, this, 1);
		this.gobtn_ani2=newSprite("btn_go/go_1", cc.p(518, getY(255)), 1, this, 1);
		this.gobtn=newSprite("btn_go_0", cc.p(520, getY(250)), .75, this, 1);
		
		this.gobtn_ani1=newSprite("btn_circle/circle_1", cc.p(518, getY(255)), 1, this, 1);
		
		this.menuselector=newSprite("menu_selector", cc.p(743, getY(66)), 1.1, this, 1);
		
		
		this.stepleft = newLabel("0", "Arial", 32, 580, getY(465), 1, this);
		newSprite("item/y_stone", cc.p(30, getY(10)), .3, this, 3);
		newSprite("item/r_stone", cc.p(130, getY(10)), .3, this, 3);
		newSprite("item/b_stone", cc.p(230, getY(10)), .3, this, 3);
		newSprite("item/p_stone", cc.p(330, getY(10)), .3, this, 3);
		newSprite("item/goldencoin", cc.p(430, getY(10)), .3, this, 3);
		newSprite("item/silvercoin", cc.p(530, getY(10)), .3, this, 3);
		this.g1 = newLabel("0", "Arial", 12, 50, getY(10), 1, this);
		this.g2 = newLabel("0", "Arial", 12, 150, getY(10), 1, this);
		this.g3 = newLabel("0", "Arial", 12, 250, getY(10), 1, this);
		this.g4 = newLabel("0", "Arial", 12, 350, getY(10), 1, this);
		this.g5 = newLabel("0", "Arial", 12, 450, getY(10), 1, this);
		this.g6 = newLabel("0", "Arial", 12, 550, getY(10), 1, this);
		
		this.mouse = newSprite("ap/ap_1", cc.p(743, getY(66)), 1.1, this, 4);
		var animouse = cc.Animation.create();
        for (var i = 1; i <= 33; i++) {
            var frameName = "res/ap/ap_" + i + ".png";
            animouse.addSpriteFrameWithFileName(frameName);
        }
        animouse.setDelayPerUnit(0.05);
        this.mouseaction = cc.Animate.create(animouse);
        this.mouse.runAction(cc.RepeatForever.create(this.mouseaction));
		
		//newToggleItem("sound",cc.p(712, getY(392)), 1, this, null);
		
		var animation1 = cc.Animation.create();
        for (var i = 1; i <= 10; i++) {
            var frameName = "res/btn_circle/circle_" + i + ".png";
            animation1.addSpriteFrameWithFileName(frameName);
        }
        animation1.setDelayPerUnit(0.05);
        
        var animation2 = cc.Animation.create();
        for (var i = 1; i <= 16; i++) {
            var frameName = "res/btn_go/go_" + i + ".png";
            animation2.addSpriteFrameWithFileName(frameName);
        }
        animation2.setDelayPerUnit(0.1);  
		this.action1 = cc.Animate.create(animation1);
		this.action2 = cc.Animate.create(animation2);

        this.gobtn_ani1.runAction(cc.RepeatForever.create(this.action1));
        this.gobtn_ani2.runAction(cc.RepeatForever.create(this.action2));
        
        this.selectpattern=newSprite("select_pattern", cc.p(230, getY(230)), 1, this, 1);
        
        
        
        this.fan=newSprite("fan", cc.p(230, getY(430)), 1, this, 3);
        
        var animation3 = cc.Animation.create();
        for (var i = 1; i <= 10; i++) {
            var frameName = "res/fan/fan_" + i + ".png";
            animation3.addSpriteFrameWithFileName(frameName);
        }
        animation3.setDelayPerUnit(0.05);
        this.action3 = cc.Animate.create(animation3);
        this.fan.runAction(this.action3);
        
        this.good=newSprite("good", cc.p(230, getY(430)), 1, this, 3);
        this.wrong=newSprite("wrong", cc.p(230, getY(430)), 1, this, 3);
        
        
        var animation4 = cc.Animation.create();
        for (var i = 1; i <= 10; i++) {
            var frameName = "res/to/to_" + i + ".png";
            animation4.addSpriteFrameWithFileName(frameName);
        }
        animation4.setDelayPerUnit(0.05);
        this.action4 = cc.Animate.create(animation4);
        this.wrong.runAction(this.action4);
        this.fan.setVisible(false);
        this.good.setVisible(false);
        this.wrong.setVisible(false);
        
		
		this.offsetpt = cc.p(0,0);
		this.panel=newSprite("blank", cc.p(270, getY(715)), 1, this, 1);
		this.curScroll=0;
		this.curPane=0;
		this.data = data3X3;
		this.pattern = new cc.MyPattern(5, "Lev_0"); 
		//this.data[0];
		this.copydata(0);
		this.DrawMenuMat(3);
		
		this.menuselector.setVisible(false);
		
		this.onScroll = false;
		this.menu1.setVisible(false);
		this.showGoButton(false);
		this.passed = new Array();
		this.seli=0;
		this.selj=0;
		
		this.isDrawing=false;
		this.giftarray=new Array();
		this.giftarray[0] = 0;
		this.giftarray[1] = 0;
		this.giftarray[2] = 0;
		this.giftarray[3] = 0;
		this.giftarray[4] = 0;
		this.giftarray[5] = 0;
		
		cc.canvas.style.cursor="none";
		
		// //cc.AudioEngine.getInstance().
		cc.AudioEngine.getInstance().init("mp3,ogg");
		cc.AudioEngine.getInstance().preloadBackgroundMusic('res/sound4');
		cc.AudioEngine.getInstance().preloadEffect('res/sound1');
		cc.AudioEngine.getInstance().preloadEffect('res/sound2');
		cc.AudioEngine.getInstance().preloadEffect('res/sound3');
		
		cc.AudioEngine.getInstance().playBackgroundMusic('res/sound4',true);
		cc.AudioEngine.getInstance().setBackgroundMusicVolume(0.5);
		return true;
	},
	showOK:function(){
		this.good.setVisible(true);
	},
	showFan:function(){
		if (this.soundbtn.isVisible())
				cc.AudioEngine.getInstance().playEffect('res/sound2');
		this.fan.setVisible(true);
		this.fan.runAction(this.action3);
	},
	showWrong:function(){
		if (this.soundbtn.isVisible())
				cc.AudioEngine.getInstance().playEffect('res/sound1');
		this.wrong.setVisible(true);
		this.wrong.runAction(this.action4);
	},
	showMessage:function(){
		for (i = 0; i < this.passed.length; i++)
		{
			if (this.passed[i] == this.cursize+'_'+this.curPane)
			{
				this.showOK();
				return;
			}
		}
		
		if (this.out == null)
		{
			this.passed[this.passed.length] = this.cursize+'_'+this.curPane;
			this.showFan();
			for (i = 0; i < this.pattern.gift.length; i++)
				for (j = 0; j < gift.length; j++)
					if (this.pattern.gift[i]==gift[j])
					{
						this.giftarray[j] ++;
					}
					
			this.g1.setString(this.giftarray[0]);
			this.g2.setString(this.giftarray[1]);
			this.g3.setString(this.giftarray[2]);
			this.g4.setString(this.giftarray[3]);
			this.g5.setString(this.giftarray[4]);
			this.g6.setString(this.giftarray[5]);
			
			//this.giftarray();
		}
		else
			this.showWrong();
	},
	copydata:function(index){
		this.pattern.N = this.data[index].N;
		this.pattern.step =this.data[index].step;
		for (i = 0; i < this.data[index].N; i++)
			for (j = 0; j < this.data[index].N; j++)
				this.pattern.Mat[i][j] = this.data[index].Mat[i][j];
		for (i = 0; i < this.pattern.gift.length; i++)
			this.pattern.gift[i]=null;
		for (i = 0; i < this.data[index].gift.length; i++)
			this.pattern.gift[i] = this.data[index].gift[i];
		for (i = 0; i < this.pattern.chaosMat.length; i++)
			this.pattern.chaosMat[i]=null;
		for (i = 0; i < this.data[index].chaosMat.length; i++)
			this.pattern.chaosMat[i] = this.data[index].chaosMat[i];
		
	},
	MoveAnimation:function(){
		//if (this.panel != null)
			//this.panel.removeAllChildrenWithCleanup(true);
		this.panel=newSprite("blank", cc.p(270, getY(715)), 1, this, 1);
		this.pattern.MoveAnimation(this.panel,0,0,1,this);
	},
	move:function(){
		if (this.panel != null)
			this.panel.removeAllChildrenWithCleanup(true);
		this.panel=newSprite("blank", cc.p(270, getY(715)), 1, this, 1);
		this.pattern.move(this.panel,0,0,1,this);
	},
	DrawPattern:function(){
		if (this.panel != null)
			this.panel.removeAllChildrenWithCleanup(true);
		this.panel=newSprite("blank", cc.p(270, getY(715)), 1, this, 1);
		this.pattern.showPanel(this.panel,0,0,1);
	},
	DrawMenuMat:function(n){
		if (this.blank != null)
			this.blank.removeAllChildrenWithCleanup(true);
		this.blank=newSprite("blank", cc.p(730, getY(540-this.curScroll)), 1.1, this, 1);
	
		for (var i = 0; i < 7; i++)
			this.data[i].showMat(this.blank,0,i*120,120/n/100);
	},
	showGoButton:function(flag){
		if (flag)
		{
			this.gobtn_ani2.setVisible(true);
			this.gobtn.setVisible(true);
			this.gobtn_ani1.setVisible(true);
		}
		else
		{
			this.gobtn_ani2.setVisible(false);
			this.gobtn.setVisible(false);
			this.gobtn_ani1.setVisible(false);
		}
	},
	onReset:function(sender){
	},
	onTouchesBegan:function(touches,event){
		
		//soundButton
		if (isSpriteInRect(this.soundbtn,touches[0],60,60)==true)
		{
			this.soundbtn.setVisible(!this.soundbtn.isVisible());
			this.soundbtn1.setVisible(!this.soundbtn1.isVisible());
			if (this.soundbtn.isVisible())
			{
				cc.AudioEngine.getInstance().playBackgroundMusic('res/sound4',true);
			}
			else
			{
				cc.AudioEngine.getInstance().stopBackgroundMusic();
			}
		}
		if (this.isDrawing==true)
			return;
		//goButton
		if (isInRect(this.gobtn.getPosition().x,this.gobtn.getPosition().y,touches[0].getLocation().x,touches[0].getLocation().y,208,208)==true)
		{
			//this.pattern.drawStones();
			if (this.gobtn.isVisible()==false)
				return;
			//if (this.panel != null)
			//this.panel.removeAllChildrenWithCleanup(true);
			//this.panel=newSprite("blank", cc.p(270, getY(715)), 1, this, 1);
			this.pattern.drawStones(this.panel,0,0,1,this);
			
			this.showGoButton(false);
		}
		
		//sizepane
		else if (isInRect(638,getY(166),touches[0].getLocation().x,touches[0].getLocation().y,40,333)==true)
		{
			y = getY(touches[0].getLocation().y) ;
			curi = parseInt(y/111);
			if (this.cursize == curi)
				return;
			this.cursize = curi;
			this.stepleft.setString(0);
			this.showGoButton(false);
			this.selectpattern.setVisible(true);
			this.menuselector.setVisible(false);
			this.panel.setVisible(false);
			this.curPane=-1;
			this.menu1.setVisible(true);
			this.menu2.setVisible(true);
			this.menu3.setVisible(true);
			this.pane1.setVisible(false);
			this.pane2.setVisible(false);
			this.pane3.setVisible(false);
			this.pane11.setVisible(false);
			this.pane21.setVisible(false);
			this.pane31.setVisible(false);
			if (this.cursize == 0)
			{
				this.data = data3X3;
				this.menu1.setVisible(false);
				this.pane1.setVisible(true);
				this.pane11.setVisible(true);
				this.DrawMenuMat(3);
			}
			else if (this.cursize == 1)
			{
				this.data = data4X4;
				this.menu2.setVisible(false);
				this.pane2.setVisible(true);
				this.pane21.setVisible(true);
				this.DrawMenuMat(4);
			}
			else
			{
				this.data = data5X5;
				this.menu3.setVisible(false);
				this.pane3.setVisible(true);
				this.pane31.setVisible(true);
				this.DrawMenuMat(5);
			}
			this.good.setVisible(false);
			this.fan.setVisible(false);
			this.wrong.setVisible(false);
			this.isDrawing=false;
			//this.menu1
		}
		//scroll
		else if (isSpriteInRect(this.scroll,touches[0],23,60)==true)
		{
			this.scrolloffset=touches[0].getLocation().y-this.scroll.getPosition().y;
			this.onScroll = true;
		}
		//menu_pane
		else if (isInRect(740,245,touches[0].getLocation().x,touches[0].getLocation().y,132,485)==true)
		{
			var i;
			for(i = 0; i <= 6; i++)
				if (getY(touches[0].getLocation().y)>i*132-this.curScroll && getY(touches[0].getLocation().y)<(i+1)*132-this.curScroll)
				{
					break;
				}
			if (i > 6)
				i = 6;
			else
				this.selectpattern.setVisible(false);
				
			this.curPane=i;
			//this.pattern = this.data[i];
			this.copydata(i);
			this.stepleft.setString(this.pattern.step);
			this.DrawPattern();
			this.showGoButton(true);
			this.menuselector.setVisible(true);
			this.menuselector.setPosition(cc.p(743,getY(66+i*132-this.curScroll)));
			
			this.good.setVisible(false);
			this.fan.setVisible(false);
			this.wrong.setVisible(false);
			this.isDrawing=false;
		}
		//else if (this.pattern.isInRect(touches[0],254,435,1,this))
		else if (this.gobtn.isVisible()==false && this.movedisable == false && this.isDrawing == false && this.pattern.isInRect(touches[0],220,260,1,this))
		{
			this.patternTouch=true;
			this.curpos = cc.p(touches[0].getLocation().x,getY(touches[0].getLocation().y));
			this.direct = null;
		}
	},
	onTouchesMoved:function(touches,event){
		//mouse
		this.mouse.setPosition(cc.p(touches[0].getLocation().x+48,touches[0].getLocation().y-50));
		
		if (this.onScroll==true)
		{
			y = touches[0].getLocation().y-this.scrolloffset;
			if (y < 25){
				y = 25;}
			else if (y > 450){
				y = 450;}
			y = getY(y);
			///alert(y);
			this.scroll.setPosition(cc.p(664,getY(y)));
			this.curScroll = y-25;
			this.blank.setPosition(cc.p(730,getY(540-this.curScroll)));
			this.menuselector.setPosition(cc.p(743, getY(66+this.curPane*132-this.curScroll)));
			//this.DrawMenuMat(data3X3,3);
		}
		else if (this.patternTouch == true)
		{
			cur = cc.p(touches[0].getLocation().x,getY(touches[0].getLocation().y));
			if (this.direct == null)
			{
				if (Math.abs(cur.x-this.curpos.x) > Math.abs(cur.y - this.curpos.y))
					this.direct=0;
				else
					this.direct=1;
			}
			this.offsetpt=cc.p(cur.x-this.curpos.x,cur.y-this.curpos.y);
			if (this.direct == 0)
				this.act = (cur.x-this.curpos.x) / Math.abs(cur.x-this.curpos.x);
			else
				this.act = (cur.y-this.curpos.y) / Math.abs(cur.y-this.curpos.y);
				
			this.move();
		}
		//goButton
		else if (isInRect(this.gobtn.getPosition().x,this.gobtn.getPosition().y,touches[0].getLocation().x,touches[0].getLocation().y,208,208)==true)
		{
			
		//	this.gobtn.setVisible(false);
		}
		
    },
	onTouchesEnded:function(touches,event){
		if (this.onScroll==true)
		{
			this.onScroll=false;			
		}
		else if (this.patternTouch == true)
		{
			if (this.soundbtn.isVisible())
				cc.AudioEngine.getInstance().playEffect('res/sound3');
			
			cur = cc.p(touches[0].getLocation().x,getY(touches[0].getLocation().y));
			if (this.direct == null)
			{
				if (Math.abs(cur.x-this.curpos.x) > Math.abs(cur.y - this.curpos.y))
					this.direct=0;
				else
					this.direct=1;
			}
			this.offsetpt=cc.p(cur.x-this.curpos.x,cur.y-this.curpos.y);
			if (this.direct == 0)
			{
				this.act = (cur.x-this.curpos.x) / Math.abs(cur.x-this.curpos.x);
				if (Math.abs(this.offsetpt.x)>70/2)
					this.movePatternData();
			}
			else
			{
				this.act = (cur.y-this.curpos.y) / Math.abs(cur.y-this.curpos.y);
				if (Math.abs(this.offsetpt.y)>70/2)
					this.movePatternData();
			}
			this.DrawPattern();
			
			if (this.checkPattern() == true)
			{
				this.showMessage();
				this.movedisable=true;
				//this.isDrawing=1;//true?false
			}
			//if ()
			this.patternTouch=false;
		}
		this._touchBegan = false;
	},
	movePatternData:function(){
		
		if (this.direct == 1)
		{
			tmap = new Array(this.pattern.N+2);
	        tmap[0] = this.pattern.Mat[this.seli][this.pattern.N-1];
	        for (var i = 1; i <= this.pattern.N; i++)
	        	tmap[i] = this.pattern.Mat[this.seli][i-1];
	        tmap[this.pattern.N+1] = this.pattern.Mat[this.seli][0];
	        i = Math.abs(1-(this.act+1)/2)*2;
	        
			for (_loc3 = i; _loc3 < this.pattern.N+i; ++_loc3)
            	this.pattern.Mat[this.seli][_loc3-i] = tmap[_loc3];
		}
		else{
			tmap = new Array(this.pattern.N+2);
	        tmap[0] = this.pattern.Mat[this.pattern.N-1][this.selj];
	        for (var i = 1; i <= this.pattern.N; i++)
	        	tmap[i] = this.pattern.Mat[i-1][this.selj];
	        tmap[this.pattern.N+1] = this.pattern.Mat[0][this.selj];
	        i = Math.abs(1-(this.act+1)/2)*2;
	        for (_loc5 = i; _loc5 < this.pattern.N+i; ++_loc5)
            	this.pattern.Mat[_loc5-i][this.selj] = tmap[_loc5];
		}
		this.out=null;
		stepleft = parseInt(this.stepleft.getString());
		stepleft--;
		if (stepleft <= 0)
		{
			this.out=true;
			stepleft = 0;
		}
		
			
		this.stepleft.setString(stepleft);
	},
	checkPattern:function(){
		//this.curPane
		for (i = 0; i < this.pattern.N; i++)
			for (j = 0; j < this.pattern.N; j++)
				if (this.pattern.Mat[i][j] != this.data[this.curPane].Mat[i][j])
					return false;
		return true;
		
		
	},
	
	draw: function(sender){
	
	}
});
