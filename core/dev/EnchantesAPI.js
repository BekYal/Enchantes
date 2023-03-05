
var MASKS = {
	axe : 512,
	all : 16383,
	bow : 32,
	boots : 4,
	chestplate : 8,
	fishing_rod : 4096,
	flind_and_steel : 256,
	helmet : 0,
	hoe : 64,
	leggins : 2,
	pickaxs : 1024,
	shears : 128,
	shovel : 2048,
	weapon : 16,
	tool : 512 | 64 | 2048 | 128 | 1024,
	armor : 0 | 2 | 8 | 4,
	weapons : 32 | 16 | 512
};

const Enchants = {
	registerHurtFunction: function(enchant, func, level) {
Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
	let item = Entity.getCarriedItem(player);
	let actor = new PlayerActor(attacker);
	if (item.extra && item.extra.getEnchantLevel(enchant) == level || 1) {
		func(item, attacker, victim, damageValue, damageType, someBool1, someBool2);
	}
});
}
};

let LiveSteal = CustomEnchant.newEnchant("LiveSteal", Translation.translate("LiveSteal"))
.setMinMaxLevel(1, 3)
.setMask(MASKS.axe)
.setFrequency(5);

Enchants.registerHurtFunction(LiveSteal.id, function(item, attacker, victim, damageValue, damageType, someBool1, someBool2){
	Game.message(item + "");
	 
});