
IDRegistry.genItemID("enshBook");
Item.createItem("enshBook", "Бука", "book", {
  isTeach: true,
  stack: 1
});

const WEAPON = 16 | 32 | 512
const ARMORS = 1 | 2 | 12;


var LiveStealer = CustomEnchant.newEnchant("LiveStealer", "Вор жизни")
.musk(WEAPON)
 .setMinMaxCost(16, 16, 30, 30)
.setPostAttackCallback(function(item, damage, entity1, entity2){
  
  var gh = Entity.getHealth(entity1);
    Entity.setHealth(entity1, gt + damage)
    
  
  
});
var adden = new ItemExtraData()
adden.addEnchant(LiveStealer.id)
Item.addToCreative("enshBook", 1, 0, adden);

/*
let magic_protection = CustomEnchant.newEnchant("aw_magic_protection", Translation.translate("aw.enchant.magic_protection"))
 .setMinMaxLevel(1)
 .setMask()
 .setMinMaxCost(16, 16, 30, 30)
 .setIsTreasure(false)
 .setFrequency(1);
*/