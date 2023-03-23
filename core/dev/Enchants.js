function inWater(playerr) {
	let pos = Entity.getPosition(playerr);
	pos = {
		x: Math.floor(pos.x + .25),
		z: Math.floor(pos.z + .25),
		y: Math.floor(pos.y - .25),
	};
	if (World.getBlockID(pos.x, pos.y, pos.z) == 9 || World.getBlockID(pos.x, pos.y, pos.z) == 8) { return true } else { return false }
}
IMPORT("EnchantsHelper");

var Stunning = CustomEnchant.newEnchant("Stunning", Translation.translate("Stunning"))
	.setMinMaxCost(5, 10, 5, 10)
	.setMinMaxLevel(1, 3)
	.setMask(Mask.weapons)
	.setFrequency(4);

var UnionToWater = CustomEnchant.newEnchant("UnionToWater", Translation.translate("Union to water"))
	.setMinMaxCost(5, 10, 5, 10)
	.setMinMaxLevel(1, 3)
	.setMask(Mask.armor)
	.setFrequency(4);

var Blunt = CustomEnchant.newEnchant("Blunt", Translation.translate("Blunt"))
	.setMinMaxCost(1, 3, 1, 3)
	.setMinMaxLevel(1, 3)
	.setMask(Mask.tool)
	.setFrequency(2);
	
Enchants.addBook(Blunt.id);
Enchants.addBook(UnionToWater.id);
Enchants.addBook(Stunning.id);

Enchants.onNaked(UnionToWater.id, function(item, enchantLevel, player) {
	let pos = Entity.getPosition(player);
	let rt = BlockSource.getDefaultForActor(player);
	if ( inWater(player) || (rt.canSeeSky(pos.x, pos.y, pos.z) && (World.getWeather().thunder || World.getWeather().rain ) ) ) {
		switch (enchantLevel) {
			case 1:
				if (World.getThreadTime() % 100 == 0) {
					Entity.addEffect(player, 1, 1, 100, false, false);
					Entity.addEffect(player, 5, 1, 100, false, false);
					Entity.addEffect(player, 3, 1, 100, false, false);
				}
				break;
			case 2:
				if (World.getThreadTime() % 100 == 0) {
					Entity.addEffect(player, 1, 3, 100, false, false);
					Entity.addEffect(player, 5, 3, 100, false, false);
					Entity.addEffect(player, 3, 3, 100, false, false);
				}
				break;
			case 3:
				if (World.getThreadTime() % 100 == 0) {
					Entity.addEffect(player, 1, 3, 100, false, false);
					Entity.addEffect(player, 5, 3, 100, false, false);
					Entity.addEffect(player, 3, 2, 100, false, false);
				}
				break;
		}
	}
});

Enchants.hurt(Stunning.id, function(item, enchantLevel, attacker, victim, damageValue, damageType) {
	switch (enchantLevel) {
		case 1:
			Chance.executeWithPercentChance(10, function() {
				Entity.addEffect(victim, 2, 30, 60, false, false);
				Entity.addEffect(victim, 18, 30, 60, false, false);
			});
			break;
		case 2:
			Chance.executeWithPercentChance(15, function() {
				Entity.addEffect(victim, 2, 30, 80, false, false);
				Entity.addEffect(victim, 18, 30, 80, false, false);
			});
			break;
		case 3:
			Chance.executeWithPercentChance(30, function() {
				Entity.addEffect(victim, 2, 30, 100, false, false);
				Entity.addEffect(victim, 18, 30, 100, false, false);
			});
			break;
	}
});

Enchants.destroyBlock(Blunt.id, function(item, enchantLevel, coords, block, player) {
	switch (enchantLevel) {
		case 1:
			Chance.executeWithPercentChance(10, function() {
				Game.prevent();
			});
			break;
		case 2:
			Chance.executeWithPercentChance(30, function() {
				Game.prevent();
			});
			break;
		case 3:
			Chance.executeWithPercentChance(50, function() {
				Game.prevent();
			});
			break;
	}
});

/*
Enchants.inInv(Blunt.id, function(item, enchantLevel, player){
	switch (enchantLevel) {
		case 1:
			Game.message("1 level");
			break;
		case 2:
			Game.message("2 level");
			break;
	}
});
/*

Enchants.destroyBlock(Blunt.id, function(item, enchantLevel, coords, block, player){
	Chance.executeWithPercentChance(50, function(){
	Game.prevent();
	});
});

Enchants.setCurse(Blunt.id);*/
Callback.addCallback("ServerPlayerTick", function(player) {
	let pos = Entity.getPosition(player);
	Game.tipMessage(World.getBlockID(pos.x, pos.y, pos.z) + '');
});