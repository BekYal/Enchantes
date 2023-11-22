
Enchants.hurt(Stunning.id, function(item, enchantLevel, attacker, victim, damageValue, damageType) {
		Chance.executeWithPercentChance(enchantLevel * 10, function() {
				Entity.addEffect(victim, 2, 30, 60, false, false);
				Entity.addEffect(victim, 18, 30, 60, false, false);
			});
	});

