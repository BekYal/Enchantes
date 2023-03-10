IMPORT("EnchantsHelper");
let LiveSteal = CustomEnchant.newEnchant("LiveSteal", Translation.translate("LiveSteal"))
	.setMinMaxLevel(1, 3).setMask(MASK.ALL);
	LiveSteal.setFrequency(1);
	

Enchants.addBook(LiveSteal.id, 1);

Enchants.hurtOwner(LiveSteal.id, function (item, enchantLevel, attacker, victim, damageValue, damageType){
	Game.message("h");
}, 1);

Enchants.hurt(LiveSteal.id, function(item, enchantLevel, attacker, victim, damageValue, damageType) {
	Game.message(item.extra + "");
}, 1);
