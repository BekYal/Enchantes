function inWater() {
	let playerr = Player.get();
	let pos = Entity.getPosition(playerr);
	pos = {
		x: Math.floor(pos.x + .25),
		z: Math.floor(pos.z + .25),
		y: Math.floor(pos.y - .25),
	};
	if (World.getBlockID(pos.x, pos.y, pos.z) == 9 || World.getBlockID(pos.x, pos.y, pos.z) == 8) { return true } else { return false }
}
IMPORT("EnchantsHelper");

if( __config__.getBool("WarriorBlessing") == 1) { 
	var WarriorBlessing = CustomEnchant.newEnchant("WarriorBlessing", Translation.translate("Warrior's Blessing"))
	.setMinMaxCost(10, 20, 10, 20)
	.setMinMaxLevel(1, 3)
	.setMask(Mask.weapons)
	.setFrequency(4);
}
if( __config__.getBool("Stunning") == 1) { 
var Stunning = CustomEnchant.newEnchant("Stunning", Translation.translate("Stunning"))
	.setMinMaxCost(5, 10, 5, 10/*15, 30, 16, 30*/)
	.setMinMaxLevel(1, 3)
	.setMask(Mask.weapons)
	.setFrequency(4);
}
if(__config__.getBool("UnionToWater") == 1) { 
var UnionToWater = CustomEnchant.newEnchant("UnionToWater", Translation.translate("Union to water"))
	.setMinMaxCost(5, 10, 5, 10)
	.setMinMaxLevel(1, 3)
	.setMask(Mask.armor)
	.setFrequency(3);
}
if(__config__.getBool("Blunt") == 1) { 
var Blunt = CustomEnchant.newEnchant("Blunt", Translation.translate("Blunt"))
	.setMinMaxCost(1, 3, 1, 3)
	.setMinMaxLevel(1, 3)
	.setMask(Mask.tool)
	.setFrequency(2);
}

Enchants.setCurse(Blunt.id);
Enchants.addBook(WarriorBlessing.id);
Enchants.addBook(Blunt.id);
Enchants.addBook(UnionToWater.id);
//Enchants.addBook(SoulEdge.id);
Enchants.addBook(Stunning.id);
Enchants.onNaked(UnionToWater.id, function(item, enchantLevel, player) {
	let pos = Entity.getPosition(player);
	let rt = BlockSource.getDefaultForActor(player);
	if ( inWater() || (rt.canSeeSky(pos.x, pos.y, pos.z) 
		&& (World.getWeather().thunder || World.getWeather().rain ) ) ) {
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
					Entity.addEffect(player, 1, 1, 100, false, false);
					Entity.addEffect(player, 5, 2, 100, false, false);
					Entity.addEffect(player, 3, 2, 100, false, false);
				}
				break;
			case 3:
				if (World.getThreadTime() % 100 == 0) {
					Entity.addEffect(player, 1, 2, 100, false, false);
					Entity.addEffect(player, 5, 2, 100, false, false);
					Entity.addEffect(player, 3, 1, 100, false, false);
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

Enchants.hurt(WarriorBlessing.id, function(item, enchantLevel, attacker, victim, damageValue, damageType) {
	switch (enchantLevel) {
		case 1:
			Chance.executeWithPercentChance(10, function() {
				Entity.addEffect(attacker, 5, 1, 100, false, false);
			});
			break;
		case 2:
			Chance.executeWithPercentChance(15, function() {
				Entity.addEffect(attacker, 5, 2, 100, false, false);
			});
			break;
		case 3:
			Chance.executeWithPercentChance(30, function() {
				Entity.addEffect(attacker, 5, 3, 100, false, false);
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
var SoulEdge = CustomEnchant.newEnchant("SoulEdge", Translation.translate("Soul Edge"))
	.setMinMaxCost(5, 10, 5, 10/*15, 30, 16, 30)
	.setMinMaxLevel(1, 3)
	.setMask(Mask.weapons)
	.setFrequency(4);
*/
/*
Enchants.killEntity(SoulEdge.id, function(item, enchantLevel, attacker, entity, damageType){
	let coords = Entity.getPosition(entity);
	let ent = Entity.getAllInRange(coords.x, coords.y, coords.z, enchantLevel);

switch (enchantLevel){
	case 1:
	for(let i = 0; i < ent.length; i++){
		if(Entity.getMaxHealth(ent[i]) > 1 && Chance.getPercentChance(30)){
		Entity.damageEntity(ent[i], Entity.getMaxHealth(ent[i] + 10));
		}
	}
	break;
	case 2:
	for(let i = 0; i < ent.length; i++){
		if(Entity.getMaxHealth(ent[i]) > 1 && Chance.getPercentChance(30)){
		Entity.damageEntity(ent[i], Entity.getMaxHealth(ent[i] + 10));
		}
	}
	
	break;
	case 3:
	for(let i = 0; i < ent.length; i++){
		if(Entity.getMaxHealth(ent[i]) > 1 && Chance.getPercentChance(50)){
		Entity.damageEntity(ent[i], Entity.getMaxHealth(ent[i] + 10));
		}
	}
	break;
}



});
*/
/*
Callback.addCallback("ServerPlayerTick", function(player) {
	let coords = Entity.getPosition(player);
	let Ents = Entity.getAllInRange(coords, 4, !64);
	let pos = Entity.getPosition(player);
	for(let i = 0; i <= Ents.length; i++){
	if(World.getThreadTime() % 100 == 0){
		Entity.getPathNavigation(Ents[i]).moveToCoords(pos.x, pos.y, pos.z, 2);
		 
	}
	}
	Game.tipMessage(World.getBlockID(pos.x, pos.y, pos.z) + '');
});*/
/*
var Scared = CustomEnchant.newEnchant("Scared", Translation.translate("Scared"))
	.setMinMaxCost(16, 30, 30, 16)
	.setMinMaxLevel(1, 1)
	.setMask(Mask.armor)
	.setFrequency(4);
*/