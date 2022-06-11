const soldier = {
    nameSoldier: "Adam",
    health: 10,
    weapon: {
        nameweapon: 'AK-47',
        cartridges: 30 
        },
    supplies:3,

    
     fire: function(){
       this.weapon.cartridges--
         console.log("бах-бах")
       if(this.weapon.cartridges === 0){
         return "обойма пуста.Перезарядить"
       }
      },
       
     recharge: function(){
       this.weapon.cartridges = 30
       this.supplies--
       console.log("перезарядка")
       if(this.supplies === 0){
       return "не осталось припасов"
      }
     },
     hurt: function(){
       this.health--
       if(this.health === 0){
        console.log("ты проиграл")
       }
     }
   };
soldier.fire()
soldier.recharge()
soldier.hurt()
console.log(soldier)