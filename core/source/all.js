IMPORT("EnchantsHelper");
function inWater(player) {
	let getBlock = World.getBlockID(pos.x, pos.y, pos.z),  
		pos = Entity.getPosition(player);
	pos = { x: Math.floor(pos.x + .25), z: Math.floor(pos.z + .25), y: Math.floor(pos.y - .25) };	
	if (getBlock == 9 || getBlock == 8) { return true } else { return false }
}




	var healthRepair = CustomEnchant.newEnchant("healthRepair", Translation.translate("healthRepair"))
		.setMinMaxCost(1, 3, 1, 3)
		.setMinMaxLevel(1, 2)
		.setMask(Mask.tool)
		.setFrequency(4);

	Enchants.addBook(healthRepair.id);

	Enchants.randomTick(healthRepair.id, function(player, item, enchantLevel) {
		let helth = Entity.getHealth(player), maxHealth = Entity.getMaxHealth(player),  
			minHealth = 3, rnd = Math.floor(Math.random() * enchantLevel);
		if (health != minHealth) {
			Entity.setCarriedItem(player, item.id, count, item.data - rnd, item.extra);
			Entity.setHealth(player, maxHealth += rnd);
		}
	});
	var UnionToWater = CustomEnchant.newEnchant("UnionToWater", Translation.translate("Union to water"))
		.setMinMaxCost(5, 10, 5, 10)
		.setMinMaxLevel(1, 3)
		.setMask(Mask.armor)
		.setFrequency(3);

	Enchants.addBook(UnionToWater.id);

	Enchants.onNaked(UnionToWater.id, function(item, enchantLevel, player) {
		let pos = Entity.getPosition(player);
		let BlockS = BlockSource.getDefaultForActor(player);
		if ( inWater() || (rt.canSeeSky(pos.x, pos.y, pos.z) &&
				(World.getWeather().thunder || World.getWeather().rain))) {
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