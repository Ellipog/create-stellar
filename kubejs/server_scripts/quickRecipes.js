//this script handles making variants of recipes suited to the 2x2 inventory grid

ServerEvents.recipes(event=>{
  function replaceRecipeShaped(output,shape,key){
    let item = Item.of(output);
    event.remove({ output: item.id });
    event.shaped(item,shape,key);
  }
  function replaceRecipeShapeless(output,ingredients){
    let item = Item.of(output);
    event.remove({ output: item.id });
    event.shapeless(item,ingredients);
  }

  //kinetics parts simpification
  event.shaped("2x create:gearbox", ["AA"], {A: "kubejs:basic_mechanism"});
  event.shaped("2x create:vertical_gearbox", ["A", "A"], {A: "kubejs:basic_mechanism"});
  event.shaped("2x create:chute", ["A", "B"], {A: "kubejs:basic_mechanism", B: "create:andesite_alloy"});
  event.shaped("2x minecraft:hopper", ["B ", "AB"], {A: "kubejs:basic_mechanism", B: "create:andesite_alloy"});
  event.shapeless("create:water_wheel", ["kubejs:basic_mechanism","2x #minecraft:logs"]);
  event.shapeless("create:large_water_wheel", ["create:water_wheel","2x #minecraft:logs"]);
  event.shapeless("create:clutch",["kubejs:basic_mechanism","create:shaft","#forge:dusts/redstone"]);
  event.shapeless("create:gearshift",["kubejs:basic_mechanism","create:cogwheel","#forge:dusts/redstone"]);
  event.shapeless("3x create:encased_chain_drive",["kubejs:basic_mechanism","3x #forge:nuggets/iron"]);

  event.shapeless("create:andesite_casing",["kubejs:basic_mechanism", "#minecraft:logs"])
  event.shapeless("create:copper_casing",["kubejs:copper_mechanism", "#minecraft:logs"])
  event.shapeless("create:brass_casing",["create:precision_mechanism", "#minecraft:logs"])
  event.shapeless("alloyed:steel_casing",["kubejs:steel_mechanism", "#minecraft:logs"])

  // in-inventory logistics component crafting
  replaceRecipeShaped("create:andesite_funnel", ["A", "B"], { A: "kubejs:basic_mechanism", B: "thermal:cured_rubber" });
  replaceRecipeShaped("create:andesite_tunnel", ["AB"], { A: "kubejs:basic_mechanism", B: "thermal:cured_rubber" });
  replaceRecipeShaped("create:belt_connector", [ "AA" ], { A: "thermal:cured_rubber" });
  replaceRecipeShaped("create:weighted_ejector", [ "A", "B" ], { A: "kubejs:basic_mechanism", B: "create:depot" });
  event.shaped("create:depot", ["A", "B"], {A: "create:andesite_alloy", B: "kubejs:basic_mechanism"})

  replaceRecipeShaped("create:brass_funnel", ["B", "C"], { B: "create:precision_mechanism", C: "thermal:cured_rubber" });
  replaceRecipeShaped("create:brass_tunnel", ["BC"], { B: "create:precision_mechanism", C: "thermal:cured_rubber" });
  

  // in-inventory redstone part crafting
  event.shaped("minecraft:piston",["AL","RC"], { A: "create:andesite_alloy", L: "#minecraft:logs", R: "#forge:dusts/redstone", C: "minecraft:cobblestone" });
  replaceRecipeShaped("minecraft:repeater",["TT","CC"], { T: "minecraft:redstone_torch", C: "minecraft:cobblestone" });
  replaceRecipeShaped("minecraft:comparator",["TC","CT"], { T: "minecraft:redstone_torch", C: "minecraft:cobblestone" });
  replaceRecipeShaped("create:pulse_extender",["MT","CC"], { M: "create:precision_mechanism", T: "minecraft:redstone_torch", C: "minecraft:cobblestone"});
  replaceRecipeShaped("create:pulse_repeater",["TM","CC"], { M: "create:precision_mechanism", T: "minecraft:redstone_torch", C: "minecraft:cobblestone"});
  replaceRecipeShaped("create:stockpile_switch",["BC"], { B: "create:precision_mechanism", C: "#forge:dusts/redstone" });
  replaceRecipeShaped("create:content_observer",["BC"], { B: "create:precision_mechanism", C: "minecraft:observer" });
  event.shaped("minecraft:observer",["EC","CC"], { E: "create:electron_tube", C: "minecraft:cobblestone"});

  // in-inventory fluid component crafting
  replaceRecipeShapeless("2x create:fluid_tank",["kubejs:copper_mechanism","#forge:glass"])
  replaceRecipeShaped("create:spout", ["A", "B"], { A: "kubejs:copper_mechanism", B: "thermal:cured_rubber" });
  replaceRecipeShaped("create:item_drain", ["B", "A"], { A: "kubejs:copper_mechanism", B: "thermal:cured_rubber" });
  replaceRecipeShaped("create:smart_fluid_pipe", ["A", "C"], { A: "#forge:plates/gold", C: "kubejs:copper_mechanism" });
  replaceRecipeShaped("2x create:smart_fluid_pipe", ["A", "C"], { A: "create:precision_mechanism", C: "kubejs:copper_mechanism" });
  replaceRecipeShaped("create:fluid_valve", ["A", "C"], { A: "#forge:plates/iron", C: "kubejs:copper_mechanism" });
  replaceRecipeShaped("create:fluid_valve", ["A", "C"], { A: "create:kinetic_mechanism", C: "kubejs:copper_mechanism" });
  replaceRecipeShapeless("create:hose_pulley", ["kubejs:copper_mechanism", "3x thermal:cured_rubber"]);
  event.shapeless("8x create:fluid_pipe", ["#forge:plates/copper", "kubejs:copper_mechanism"]);

  // component reaquisition
  function reconstitute(output, input){
    if(Array.isArray(output)){
      output.forEach(o=>reconstitute(o,input))
    }else{
      event.shapeless(output,[input,"create:wrench"])
        .keepIngredient("create:wrench")
        //appending "manual_only" means this recipe can't be automated. it's strictly
        //for player convenience, and no production line should depend on it.
        .id(`kubejs:uncraft_${Item.of(output).id}_${Item.of(input).id}_manual_only`)
    }
  }

  // reconstitution recipes, for turning items back into more basic ingredients
  reconstitute(["minecraft:redstone", "create:andesite_alloy", "create:shaft"], "create:clutch")
  reconstitute(["minecraft:redstone", "create:andesite_alloy", "create:cogwheel"], "create:gearshift")
  reconstitute(["1x thermal:cured_rubber", "kubejs:basic_mechanism"], "create:andesite_tunnel")
  reconstitute(["1x thermal:cured_rubber", "kubejs:basic_mechanism"], "create:andesite_funnel")
  reconstitute(["1x thermal:cured_rubber", "create:precision_mechanism"], "create:brass_tunnel")
  reconstitute(["1x thermal:cured_rubber", "create:precision_mechanism"], "create:brass_funnel")
  reconstitute("2x thermal:cured_rubber", "create:belt_connector")
  reconstitute(["3x create:cogwheel" , "1x create:large_cogwheel", "1x create:andesite_alloy"], "kubejs:basic_mechanism");
  reconstitute("1x create:electron_tube","create:precision_mechanism");
  reconstitute(["2x create:copper_sheet", "4x create:fluid_pipe"], "kubejs:copper_mechanism")
  reconstitute(["create:fluid_pipe", "create:cogwheel"], "create:mechanical_pump");
  reconstitute("create:cogwheel", "create:large_cogwheel");
})