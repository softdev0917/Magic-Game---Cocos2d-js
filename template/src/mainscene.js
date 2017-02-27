function newItem(sName, nx, ny, scale, scene, selector)
{
	item = cc.MenuItemImage.create("res/btn_" + sName + "_normal.png", "res/btn_" + sName + "_pressed.png", scene, selector);
	item.setPosition(cc.p(nx, ny));
	//item.setScale(scale);
	return item;
}

function newLabel(sStr, sFont, fsize, nx, ny, scale, scene)
{
	label = cc.LabelTTF.create(sStr, sFont, fsize);
	;
	label.setColor(new cc.Color3B(255, 255,0));
	label.setPosition(cc.p(nx, ny));
	//label.setScale(scale);
	scene.addChild(label, 99);
	return label;
}

function newToggleItem(sName, nx, ny, scale, scene, selector)
{
	
    btnOff = cc.MenuItemImage.create("res/btn_" + sName + "_0.png");
    btnOn = cc.MenuItemImage.create("res/btn_" + sName + "_1.png");
    btnOn.setAnchorPoint(cc.p(0.5, 0.5));
    btnOff.setAnchorPoint(cc.p(0.5, 0.5));
    item = new cc.MenuItemToggle.create(scene, selector, btnOff, btnOn);    
    item.setPosition(cc.p(nx, ny));
	
	return item;
}

function newSprite(sName, pos, scale, scene, zorder)
{
	sprite = cc.Sprite.create("res/" + sName + ".png");
	sprite.setPosition(pos);
	sprite.setScale(scale);
	scene.addChild(sprite, zorder);
	
	//scene.childSprite.push(sprite);
	return sprite;
}

function getY(ny)
{
	size = cc.Director.getInstance().getWinSize();
	return (485 - ny);
}

function isInRect(x1, y1, x2, y2, w, h){
	return ((x1 - w / 2) < x2 && (y1 - h / 2) < y2 && (x1 + w / 2) > x2 && (y1 + h / 2) > y2);
}
function isSpriteInRect(a, b, w, h){
	return isInRect(a.getPosition().x,a.getPosition().y,b.getLocation().x,b.getLocation().y,w,h);
}
var MainLayer;
var MainScene = cc.Scene.extend({
	onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
        layer.init();
   }
});
var PlayScene = cc.Scene.extend({
	onEnter:function () {
        this._super();
        var layer = new PlayLayer();
        this.addChild(layer);
        layer.init();
   }
});
PlayScene.create = function () {
    return new PlayScene();
};
//console.log(cc.Scene);
//console.log(PlayScene);
 MainLayer = cc.Layer.extend({

	init: function(){
		this._super();
		this.setTouchEnabled(true);
        this.size = cc.Director.getInstance().getWinSize();		
		
		this.isCheckedLabel = false;
		this.isCheckedPrinciple = false;
		
	
		//newSprite("bg", cc.p(386, getY(246)), 1, this, -2);
		newSprite("background", cc.p(405, getY(242)), 1, this, 1);
		newSprite("edu2000", cc.p(60, getY(450)), .21, this, 1);
		newSprite("edu", cc.p(200, getY(450)), 1, this, 1);
		newSprite("playbt_2", cc.p(712, getY(392)), 1, this, 1);
		//newToggleItem("play",cc.p(712, getY(392)), 1, this, null);
		this.playbt1=newSprite("btn_play_1", cc.p(710, getY(390)), 1, this, 1);
		this.playbt_ani=newSprite("btn_play_0", cc.p(714, getY(409)), 1, this, 1);
		this.playbt=newSprite("btn_play_0", cc.p(710, getY(390)), 1, this, 1);
		

		var animation = cc.Animation.create();
        for (var i = 1; i < 17; i++) {
            var frameName = "res/btn_play/btn_play_" + i + ".png";
            animation.addSpriteFrameWithFileName(frameName);
        }
        animation.setDelayPerUnit(0.05); 
		this.action1 = cc.Animate.create(animation);

        this.playbt_ani.runAction(cc.RepeatForever.create(this.action1));
		/*	
		this.c = newSprite("c", cc.p(530, getY(260.5)), 1, this, -1);
		this.b = newSprite("b", cc.p(this.size.width / 2, getY(263)), 1, this, -1);
		
		this.candleLabel = newLabel("Candle", "Arial", 18, 140, getY(400), 1, this);
		this.pinholeLabel = newLabel("Screen with a pinhole", "Arial", 18,340, getY(400), 1, this);
		this.glassLabel = newLabel("Ground glass screen", "Arial", 18, 540, getY(400), 1, this);
		
		this.candleLabel.setColor(new cc.Color3B(255,255,255));
		this.pinholeLabel.setColor(new cc.Color3B(255,255,255));
		this.glassLabel.setColor(new cc.Color3B(255,255,255));

		this.candleLabel.setVisible(false);
		this.pinholeLabel.setVisible(false);
		this.glassLabel.setVisible(false);		
	
		newSprite("shape 124", cc.p(127.5, getY(335)), 1, this, -1);			

		newSprite("l", cc.p(130.5, getY(302)), 1, this, -1);
	
		this.LFire = newSprite("h0001", cc.p(130.5, getY(255)), 1, this, -1);
		this.RFire = newSprite("h0001", cc.p(530, getY(270)), 1, this, -1);
		
		this.LFire.setScale(0.4, 0.8);
		this.RFire.setScale(0.4, -0.8);	
		
		var animation = cc.Animation.create();
        for (var i = 1; i < 7; i++) {
            var frameName = "res/h000" + i + ".png";
            animation.addSpriteFrameWithFileName(frameName);
        }
        animation.setDelayPerUnit(0.05);        

        this.action1 = cc.Animate.create(animation);
		this.action2 = cc.Animate.create(animation);

        this.LFire.runAction(cc.RepeatForever.create(this.action1));
		this.RFire.runAction(cc.RepeatForever.create(this.action2));
		
		
		this._touchBegan = false;*/
				 
		return true;
	},
	onReset:function(sender){
		this.c.setPosition(cc.p(530, getY(260.5)));
		this.b.setPosition(cc.p(this.size.width / 2, getY(263)));
	},
	onTouchesBegan:function(touches,event){
		if (isInRect(this.playbt.getPosition().x,this.playbt.getPosition().y,touches[0].getLocation().x,touches[0].getLocation().y,200,100) == true)
		{
			PlayScene1 = PlayScene.create();
			//PlayScene.addChild(new PlayLayer());
			var director = cc.Director.getInstance();
			//console.log(PlayScene1);
			//director.runWithScene(PlayScene);
    		director.replaceScene(PlayScene1);
    		//PlayScene.release();
		}
		
	},
	onTouchesMoved:function(touches,event){  
		//console.log(touches[0]);
		
		if (isInRect(this.playbt.getPosition().x,this.playbt.getPosition().y,touches[0].getLocation().x,touches[0].getLocation().y,200,100) == true)
		{
			this.playbt.setVisible(false);
		}
		else
		{
			this.playbt.setVisible(true);
		}
		
    },
	onTouchesEnded:function(touches,event){ 
		this._touchBegan = false;
	},
	
	draw: function(sender){
	
	}
});

