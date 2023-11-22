IMPORT("EnchantsHelper");

function inWater(player) {
	let pos = Entity.getPosition(player);
	let getBlock = World.getBlockID(pos.x, pos.y, pos.z);
	pos = {
		x: Math.floor(pos.x + .25),
		z: Math.floor(pos.z + .25),
		y: Math.floor(pos.y - .25)
	};
	if (getBlock == 9 || getBlock == 8) return true
	else return false
}


Enchants.randomTick(healthRepair.id, function (player, item, enchantLevel) {
	let health = Entity.getHealth(player);
	let maxHealth = Entity.getMaxHealth(player);
	let minHealth = 3;
	let rnd = Math.floor(Math.random() * (enchantLevel - 1.5));

	if (health != minHealth) {
		Entity.setCarriedItem(player, item.id, count, item.data - rnd, item.extra);
		Entity.setHealth(player, maxHealth += rnd);
	}
});

Enchants.onNaked(UnionToWater.id, function (item, enchantLevel, player) {
	let pos = Entity.getPosition(player);
	let BlockS = BlockSource.getDefaultForActor(player);
	let weather = World.getWeather();
	if (inWater() || (BlockS.canSeeSky(pos.x, pos.y, pos.z) && (weather.thunder || weather.rain))) {
		if (World.getThreadTime() % 150 == 0) {
			Entity.addEffect(player, 1, enchantLevel * 1.4, 151, false, false);
			Entity.addEffect(player, 5, enchantLevel * 1.4, 151, false, false);
			Entity.addEffect(player, 3, enchantLevel * 1.5, 151, false, false);
		}
	}
});