/*
BUILD INFO:
  dir: core/dev
  target: core/littleHuy.js
  files: 3
*/



// file: Header/Values.js

const WEAPON = 16 | 32 | 512;
const TOOLS = 16 | 512 | 64 | 256 | 1024 | 128 | 2048;
const ARMORS = 1 | 8 | 4 | 2;
const FOOT = 4 | 2;
const ARM_SLOTS = 3 | 2 | 1 | 0;

/*const Values = {
    NotEntBite: 95 | 61 | 80 | 90 | 98 | 100 | 79 | 82 | 71 | 87 | 69 | 68 | 66 | 70 | 85 | 72 | 77 | 96 | 64 | 88 | 93 | 101 | 84 | 67 | 83 | 76 | 94 | 81 | 86 | 73 | 97 | 105,
    weapon: 16 | 32 | 512,
    foot: 4 | 2,
    tools: 16 | 512 | 64 | 256 | 1024 | 128 | 2048,
    armors: 1 | 8 | 4 | 2,
    arm_slots: 0 | 1 | 2 | 3
};*/




// file: Enchantes.js





// file: EnchantsAPI.js

IDRegistry.genItemID("enchanBook");
Item.createItem("enchanBook", "enchantment book", { name: "book_enchanted" }, { stack: 64 });

var MASK = {
	AXE: 512,
	ALL: 16383,
	BOW: 32,
	BOOTS: 4,
	CHESTPLATE: 8,
	FISHING_ROD: 4096,
	FLIND_AND_STEEL: 256,
	HELMET: 0,
	HOE: 64,
	LEGGINS: 2,
	PICKAXS: 1024,
	SHEARS: 128,
	SHOVEL: 2048,
	WEAPON: 16,
	TOOL: 512 | 64 | 2048 | 128 | 1024,
	ARMOR: 0 | 2 | 8 | 4,
	WEAPONS: 32 | 16 | 512
};

let Curses = [28, 27];
const Enchants = {
	removeCurses: function() {
		for (var i = 0; i < Curses.length; i++) {
			if (Curses[i] === enchant) {

			}
		}
		return false
	},
	getCurses: function() {
		return Curses;
	},
	setCurse: function(enchant) {
		Curses.push(enchant);
	},
	isCurse: function(enchant) {
		for (var i = 0; i < Curses.length; i++) {
			if (Curses[i] === enchant) {
				return true;
			}
		}
		return false;
	},
	addBook: function(enchant, level) {
		for (let i = 1; i <= level; i++) {
			let extra = new ItemExtraData();
			extra.addEnchant(enchant, i);
			Item.addToCreative(ItemID.enchanBook, 1, 0, extra);
		}
	},
	hurt: function(enchant, func, level) {
		Callback.addCallback('EntityHurt', function(attacker, victim, damageValue, damageType, someBool1, someBool2) {
			let item = Entity.getCarriedItem(attacker);
			if (item.extra && item.extra.getEnchantLevel(enchant) == (level || 3) && damageType == 2) {
				let enchantLevel = item.extra.getEnchantLevel(enchant);
				func(item, enchantLevel, attacker, victim, damageValue, damageType);
			}
		});
	},
	hurtOwner: function(enchant, func, level) {
		Callback.addCallback('EntityHurt', function(attacker, victim, damageValue, damageType, someBool1, someBool2) {
			for (let y = 0; y < 4; y++) {
				let item = Entity.getArmorSlot(player, y);
				if (item.extra && item.extra.getEnchantLevel(enchant) == (level || 3)) {
					let enchantLevel = item.extra.getEnchantLevel(enchant);
					func(item, enchantLevel, attacker, victim, damageValue, damageType);
				}
			}

		});
	},
	destroyBlock: function(enchant, func, level) {
		Callback.addCallback('DestroyBlock', function(coords, block, player) {
			let item = Entity.getCarriedItem(player);
			if (item.extra && item.extra.getEnchantLevel(enchant) == (level || 3)) {
				let enchantLevel = item.extra.getEnchantLevel(enchant);
				func(item, enchantLevel, coords, block, player);
			}
		});
	},
	useItem: function(enchant, func, level) {
		Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
			if (item.extra && item.extra.getEnchantLevel(enchant) == (level || 3)) {
				let enchantLevel = item.extra.getEnchantLevel(enchant);
				func(coords, item, block, isExternal, player, enchantLevel);
			}
		});
	},
	inInv: function(enchant, func, level) {
		Callback.addCallback("ServerPlayerTick", function(player) {
			for (let y = 0; y <= 40; y++) {
				let actor = new PlayerActor(player);
				let item = actor.getInventorySlot(y);
				if (item.extra && item.extra.getEnchantLevel(enchant) == (level || 3)) {
					let enchantLevel = item.extra.getEnchantLevel(enchant);
					func(item, enchantLevel, player);
				}
			}
		});
	},
	onNaked: function(enchant, func, level) {
		Callback.addCallback("ServerPlayerTick", function(player) {
			for (let y = 0; y < 4; y++) {
				let item = Entity.getArmorSlot(player, y);
				if (item.extra && item.extra.getEnchantLevel(enchant) == (level || 3)) {
					let enchantLevel = item.extra.getEnchantLevel(enchant);
					func(item, enchantLevel, player);
				}
			}
		});
	},
	preventDaamage: function(enchant, level) {
		Callback.addCallback('EntityHurt', function(attacker, victim, damageValue, damageType, someBool1, someBool2) {
			for (let y = 0; y < 4; y++) {
				let item = Entity.getArmorSlot(player, y);
				if (item.extra && item.extra.getEnchantLevel(enchant) == (level || 3)) {
					Game.prevent();
				}
			}
		});
	}
};

let LiveSteal = CustomEnchant.newEnchant("LiveSteal", Translation.translate("LiveSteal"))
	.setMinMaxLevel(1, 3).setMask(MASK.ALL);
	LiveSteal.setFrequency(1);
	

Enchants.addBook(LiveSteal.id, 3);

Enchants.hurtOwner(LiveSteal.id, function (item, enchantLevel, attacker, victim, damageValue, damageType){
	Game.message("h");
}, 3);
let huy = 0;
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
	if (item.id == ItemID.enchanBook) {
		huy = 1;
	}
});

Callback.addCallback("ServerPlayerTick", function(player) {
	let item = Entity.getCarriedItem(player);
	if (item.extra && huy == 1) {
	let enchArr = item.extra.getEnchants();
	let removeEnch = [];
	removeEnch = enchArr.filter(function(e) {
		!~Curses.indexOf(e);
	});
	for(let i = 0; i <= removeEnch.length; i++){
		item.extra.removeEnchant(removeEnch[i]);
	}
	}
		
});

Enchants.hurt(LiveSteal.id, function(item, enchantLevel, attacker, victim, damageValue, damageType) {
	Game.message(item.extra + "");
}, 3);




