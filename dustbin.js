ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	boxPosition=width/2-100
	boxY=610;

	boxleftSprite=createSprite(boxPosition,boxY,20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxLeftBody=Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true});
	World.add(world,boxLeftBody);

	boxBase=createSprite(boxPosition+100,boxY+40,200,20);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody=Bodies.rectangle(boxPosition+100,boxY+45-20,200,20,{isStatatic:true});
	World.add(world,boxBottomBody);

	boxrightSprite=createSprite(boxPosition+200,boxY,20,100);
	boxrightSprite.shapeColor=color(255,0,0);

	boxRightBody=Bodies.rectangle(boxPosition+200-20,boxY,20,100,{isStatic:true});
	World.add(world,boxRightBody);
