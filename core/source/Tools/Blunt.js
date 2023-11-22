

	Enchants.destroyBlock(Blunt.id, function(item, enchantLevel, coords, block, player) {
		Chance.executeWithPercentChance(enchantLevel * 8, function() {
			Game.prevent();
		});
	});
