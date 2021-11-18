
exports.seed = function(knex) {
      return knex('plants').insert([
        {nickname: "Bleeding Heart" , species: "Herbaceous perennial" , h2oFrequency:"weekly" },
        {nickname: "Cherry Blossom", species: "Prunus serrulata", h2oFrequency:"7-10 days" },
        {nickname: "Bird of Paradise", species: "Strelitzia reginae" , h2oFrequency: "1-2 weeks" },
        {nickname: "Lotus", species:"aquatic plant", h2oFrequency: "submerged in 2-4inch of water"}
      ]);
    }

