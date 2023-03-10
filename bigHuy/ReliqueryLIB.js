LIBRARY({
     name: "ReliquaryLIB",
     version: 1,
     shared: true,
     api: "CoreEngine",
});

let ReliquaryLIB = {
     inInv(item, data, func) {
          Callback.addCallback("ServerPlayerTick", function (player) {
               let actor = new PlayerActor(player);
               for (let i = 0; i < 40; i++) {
                    let sl = actor.getInventorySlot(i);
                    if (sl.id == item) {
                         if (sl.data == data) {
                              func(player);
                         }
                    }
               }
          });
     },

     SetFly(bool) {
          if (bool == true) {
               Player.setFlyingEnabled(true);
               Callback.addCallback(
                    "EntityHurt",
                    function (
                         attacker,
                         victim,
                         damageValue,
                         damageType,
                         someBool1,
                         someBool2
                    ) {
                         if (damageType == 5) {
                              Game.prevent();
                         }
                    }
               );
               //   Player.setAbility("flySpeed", speed);
          } else {
               Player.setFlyingEnabled(false);
          }
     },

     createDamageItem(nameID, damage) {
          IDRegistry.genItemID(nameID);
          Item.createItem(
               nameID,
               nameID,
               { name: nameID },
               { isTech: false, stack: 1 }
          );
          Item.setMaxDamage(ItemID[nameID], damage);
     },

     setTimeout(func, ticks, obj) {
          obj = obj || {};
          var upd = {
               ticks: 0,
               update: function () {
                    this.ticks++;
                    if (this.ticks >= ticks) {
                         func(obj);
                         this.remove = true;
                    }
               },
          };
          Updatable.addUpdatable(upd);
     },
};

EXPORT("ReliquaryLIB", ReliquaryLIB);
