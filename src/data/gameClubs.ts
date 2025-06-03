
interface Club {
  name: string;
  image: string;
  stars: string;
  league: string;
}

const gameClubs: Club[] = [
  // Premier League (England)
  {
    name: "Aston Villa",
    image:
      "https://download.logo.wine/logo/Aston_Villa_F.C./Aston_Villa_F.C.-Logo.wine.png",
    stars: "4",
    league: "Premier League",
  },
  {
    name: "Brighton & Hove Albion",
    image:
      "https://download.logo.wine/logo/Brighton_%26_Hove_Albion_F.C./Brighton_%26_Hove_Albion_F.C.-Logo.wine.png",
    stars: "4",
    league: "Premier League",
  },
  {
    name: "Burnley",
    image:
      "https://download.logo.wine/logo/Burnley_F.C./Burnley_F.C.-Logo.wine.png",
    stars: "4",
    league: "Premier League",
  },
  {
    name: "Chelsea",
    image:
      "https://download.logo.wine/logo/Chelsea_F.C./Chelsea_F.C.-Logo.wine.png",
    stars: "4.5",
    league: "Premier League",
  },
  {
    name: "Crystal Palace",
    image:
      "https://download.logo.wine/logo/Crystal_Palace_F.C./Crystal_Palace_F.C.-Logo.wine.png",
    stars: "4",
    league: "Premier League",
  },
  {
    name: "Everton",
    image:
      "https://download.logo.wine/logo/Everton_F.C./Everton_F.C.-Logo.wine.png",
    stars: "4",
    league: "Premier League",
  },
  {
    name: "Fulham",
    image:
      "https://download.logo.wine/logo/Fulham_F.C./Fulham_F.C.-Logo.wine.png",
    stars: "4",
    league: "Premier League",
  },
  {
    name: "Leeds United",
    image:
      "https://download.logo.wine/logo/Leeds_United_F.C./Leeds_United_F.C.-Logo.wine.png",
    stars: "4",
    league: "Premier League",
  },
  {
    name: "Leicester City",
    image:
      "https://download.logo.wine/logo/Leicester_City_F.C./Leicester_City_F.C.-Logo.wine.png",
    stars: "4",
    league: "Premier League",
  },
  {
    name: "Manchester City",
    image:
      "https://download.logo.wine/logo/Manchester_City_F.C./Manchester_City_F.C.-Logo.wine.png",
    stars: "5",
    league: "Premier League",
  },
  {
    name: "Newcastle United",
    image:
      "https://download.logo.wine/logo/Newcastle_United_F.C./Newcastle_United_F.C.-Logo.wine.png",
    stars: "4.5",
    league: "Premier League",
  },
  {
    name: "Sheffield United",
    image:
      "https://download.logo.wine/logo/Sheffield_United_F.C./Sheffield_United_F.C.-Logo.wine.png",
    stars: "3.5",
    league: "Premier League",
  },
  {
    name: "Southampton",
    image:
      "https://download.logo.wine/logo/Southampton_F.C./Southampton_F.C.-Logo.wine.png",
    stars: "4",
    league: "Premier League",
  },
  {
    name: "Tottenham Hotspur",
    image:
      "https://download.logo.wine/logo/Tottenham_Hotspur_F.C./Tottenham_Hotspur_F.C.-Logo.wine.png",
    stars: "4.5",
    league: "Premier League",
  },
  {
    name: "West Bromwich Albion",
    image:
      "https://download.logo.wine/logo/West_Bromwich_Albion_F.C./West_Bromwich_Albion_F.C.-Logo.wine.png",
    stars: "3.5",
    league: "Premier League",
  },
  {
    name: "West Ham United",
    image:
      "https://download.logo.wine/logo/West_Ham_United_F.C./West_Ham_United_F.C.-Logo.wine.png",
    stars: "4",
    league: "Premier League",
  },
  {
    name: "Wolverhampton Wanderers",
    image:
      "https://download.logo.wine/logo/Wolverhampton_Wanderers_F.C./Wolverhampton_Wanderers_F.C.-Logo.wine.png",
    stars: "4",
    league: "Premier League",
  },
  {
    name: "Liverpool",
    image:
      "https://download.logo.wine/logo/Liverpool_F.C./Liverpool_F.C.-Logo.wine.png",
    stars: "5",
    league: "Premier League",
  },
  {
    name: "Manchester United",
    image:
      "https://download.logo.wine/logo/Manchester_United_F.C./Manchester_United_F.C.-Logo.wine.png",
    stars: "5",
    league: "Premier League",
  },
  {
    name: "Nottingham Forest",
    image:
      "https://download.logo.wine/logo/Nottingham_Forest_F.C./Nottingham_Forest_F.C.-Logo.wine.png",
    stars: "4",
    league: "Premier League",
  },
  {
    name: "Brentford",
    image:
      "https://download.logo.wine/logo/Brentford_F.C./Brentford_F.C.-Logo.wine.png",
    stars: "4",
    league: "Premier League",
  },
  {
    name: "Bournemouth",
    image:
      "https://download.logo.wine/logo/AFC_Bournemouth/AFC_Bournemouth-Logo.wine.png",
    stars: "3.5",
    league: "Premier League",
  },
  {
    name: "Luton Town",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Luton_Town_FC_logo.svg/800px-Luton_Town_FC_logo.svg.png",
    stars: "3",
    league: "Premier League",
  },

  // La Liga (Spain)
  {
    name: "FC Barcelona",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/240px-FC_Barcelona_%28crest%29.svg.png",
    stars: "5",
    league: "La Liga",
  },
  {
    name: "Real Madrid",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/240px-Real_Madrid_CF.svg.png",
    stars: "5",
    league: "La Liga",
  },
  {
    name: "Atlético Madrid",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/240px-Atletico_Madrid_2017_logo.svg.png",
    stars: "5",
    league: "La Liga",
  },
  {
    name: "Athletic Club",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/240px-Club_Athletic_Bilbao_logo.svg.png",
    stars: "4.5",
    league: "La Liga",
  },
  {
    name: "Villarreal CF",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Villarreal_CF_logo.svg/240px-Villarreal_CF_logo.svg.png",
    stars: "4.5",
    league: "La Liga",
  },
  {
    name: "Real Betis",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Real_Betis_logo.svg/240px-Real_Betis_logo.svg.png",
    stars: "4",
    league: "La Liga",
  },
  {
    name: "RC Celta de Vigo",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/RC_Celta_de_Vigo_logo.svg/240px-RC_Celta_de_Vigo_logo.svg.png",
    stars: "4",
    league: "La Liga",
  },
  {
    name: "Rayo Vallecano",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Rayo_Vallecano_logo.svg/240px-Rayo_Vallecano_logo.svg.png",
    stars: "4",
    league: "La Liga",
  },
  {
    name: "CA Osasuna",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/CA_Osasuna_logo.svg/240px-CA_Osasuna_logo.svg.png",
    stars: "4",
    league: "La Liga",
  },
  {
    name: "RCD Mallorca",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/RCD_Mallorca_crest.svg/240px-RCD_Mallorca_crest.svg.png",
    stars: "4",
    league: "La Liga",
  },
  {
    name: "Real Sociedad",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/240px-Real_Sociedad_logo.svg.png",
    stars: "4",
    league: "La Liga",
  },
  {
    name: "Valencia CF",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valencia_CF_logo.svg/240px-Valencia_CF_logo.svg.png",
    stars: "4",
    league: "La Liga",
  },
  {
    name: "Getafe CF",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Getafe_CF_logo.svg/240px-Getafe_CF_logo.svg.png",
    stars: "4",
    league: "La Liga",
  },
  {
    name: "RCD Espanyol",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Rcd_espanyol_logo.svg/240px-Rcd_espanyol_logo.svg.png",
    stars: "4",
    league: "La Liga",
  },
  {
    name: "Deportivo Alavés",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Deportivo_Alav%C3%A9s_logo.svg/240px-Deportivo_Alav%C3%A9s_logo.svg.png",
    stars: "3.5",
    league: "La Liga",
  },
  {
    name: "Girona FC",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Girona_FC_logo.svg/240px-Girona_FC_logo.svg.png",
    stars: "4",
    league: "La Liga",
  },
  {
    name: "Sevilla FC",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Sevilla_FC_logo.svg/240px-Sevilla_FC_logo.svg.png",
    stars: "4",
    league: "La Liga",
  },
  {
    name: "CD Leganés",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/CD_Legan%C3%A9s_logo.svg/240px-CD_Legan%C3%A9s_logo.svg.png",
    stars: "3.5",
    league: "La Liga",
  },
  {
    name: "UD Las Palmas",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/UD_Las_Palmas_logo.svg/240px-UD_Las_Palmas_logo.svg.png",
    stars: "3.5",
    league: "La Liga",
  },
  {
    name: "Real Valladolid",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Real_Valladolid_CF_logo.svg/240px-Real_Valladolid_CF_logo.svg.png",
    stars: "3.5",
    league: "La Liga",
  },

  // Bundesliga (Germany)
  {
    name: "Bayern Munich",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/FC_Bayern_Munich_logo_%282017%29.svg/240px-FC_Bayern_Munich_logo_%282017%29.svg.png",
    stars: "5",
    league: "Bundesliga",
  },
  {
    name: "Bayer Leverkusen",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Bayer_04_Leverkusen_logo.svg/240px-Bayer_04_Leverkusen_logo.svg.png",
    stars: "4.5",
    league: "Bundesliga",
  },
  {
    name: "Borussia Dortmund",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/240px-Borussia_Dortmund_logo.svg.png",
    stars: "4.5",
    league: "Bundesliga",
  },
  {
    name: "RB Leipzig",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/RB_Leipzig_2014_logo.svg/240px-RB_Leipzig_2014_logo.svg.png",
    stars: "4.5",
    league: "Bundesliga",
  },
  {
    name: "VfB Stuttgart",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/VfB_Stuttgart_1893_Logo.svg/240px-VfB_Stuttgart_1893_Logo.svg.png",
    stars: "4",
    league: "Bundesliga",
  },
  {
    name: "Eintracht Frankfurt",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Eintracht_Frankfurt_Logo.svg/240px-Eintracht_Frankfurt_Logo.svg.png",
    stars: "4",
    league: "Bundesliga",
  },
  {
    name: "SC Freiburg",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/SC_Freiburg_logo.svg/240px-SC_Freiburg_logo.svg.png",
    stars: "4",
    league: "Bundesliga",
  },
  {
    name: "1. FSV Mainz 05",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/1._FSV_Mainz_05_Logo.svg/240px-1._FSV_Mainz_05_Logo.svg.png",
    stars: "4",
    league: "Bundesliga",
  },
  {
    name: "Werder Bremen",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/SV-Werder-Bremen-Logo.svg/240px-SV-Werder-Bremen-Logo.svg.png",
    stars: "4",
    league: "Bundesliga",
  },
  {
    name: "Borussia Mönchengladbach",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Borussia_M%C3%B6nchengladbach_logo.svg/240px-Borussia_M%C3%B6nchengladbach_logo.svg.png",
    stars: "4",
    league: "Bundesliga",
  },
  {
    name: "VfL Wolfsburg",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/VfL_Wolfsburg_Logo.svg/240px-VfL_Wolfsburg_Logo.svg.png",
    stars: "4",
    league: "Bundesliga",
  },
  {
    name: "TSG Hoffenheim",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/TSG_1899_Hoffenheim_logo.svg/240px-TSG_1899_Hoffenheim_logo.svg.png",
    stars: "4",
    league: "Bundesliga",
  },
  {
    name: "Union Berlin",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/1.FC_Union_Berlin_logo.svg/240px-1.FC_Union_Berlin_logo.svg.png",
    stars: "4",
    league: "Bundesliga",
  },
  {
    name: "FC Augsburg",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/FC_Augsburg_logo.svg/240px-FC_Augsburg_logo.svg.png",
    stars: "3.5",
    league: "Bundesliga",
  },
  {
    name: "FC Heidenheim",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/1._FC_Heidenheim_1846_logo.svg/240px-1._FC_Heidenheim_1846_logo.svg.png",
    stars: "3.5",
    league: "Bundesliga",
  },
  {
    name: "VfL Bochum",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/VfL_Bochum_logo.svg/240px-VfL_Bochum_logo.svg.png",
    stars: "3.5",
    league: "Bundesliga",
  },
  {
    name: "FC St. Pauli",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/FC_St._Pauli_logo.svg/240px-FC_St._Pauli_logo.svg.png",
    stars: "3.5",
    league: "Bundesliga",
  },
  {
    name: "Holstein Kiel",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Holstein_Kiel_logo.svg/240px-Holstein_Kiel_logo.svg.png",
    stars: "3.5",
    league: "Bundesliga",
  },

  // Serie A (Italy)
  {
    name: "Napoli",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/SSC_Napoli_logo.svg/240px-SSC_Napoli_logo.svg.png",
    stars: "4.5",
    league: "Serie A",
  },
  {
    name: "Inter Milan",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Inter_Milan.svg/240px-Inter_Milan.svg.png",
    stars: "4.5",
    league: "Serie A",
  },
  {
    name: "Atalanta",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Atalanta_BC_crest.svg/240px-Atalanta_BC_crest.svg.png",
    stars: "4",
    league: "Serie A",
  },
  {
    name: "Juventus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Juventus_FC_2017_logo.svg/240px-Juventus_FC_2017_logo.svg.png",
    stars: "4.5",
    league: "Serie A",
  },
  {
    name: "AS Roma",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/240px-AS_Roma_logo_%282017%29.svg.png",
    stars: "4",
    league: "Serie A",
  },
  {
    name: "Fiorentina",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/ACF_Fiorentina_crest.svg/240px-ACF_Fiorentina_crest.svg.png",
    stars: "4",
    league: "Serie A",
  },
  {
    name: "Lazio",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/SS_Lazio_badge.svg/240px-SS_Lazio_badge.svg.png",
    stars: "4",
    league: "Serie A",
  },
  {
    name: "AC Milan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/240px-Logo_of_AC_Milan.svg.png",
    stars: "4.5",
    league: "Serie A",
  },
  {
    name: "Bologna",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Bologna_FC_1909_logo.svg/240px-Bologna_FC_1909_logo.svg.png",
    stars: "4",
    league: "Serie A",
  },
  {
    name: "Como",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Como_1907_logo.svg/240px-Como_1907_logo.svg.png",
    stars: "3.5",
    league: "Serie A",
  },
  {
    name: "Torino",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Torino_FC_Logo_2021.svg/240px-Torino_FC_Logo_2021.svg.png",
    stars: "4",
    league: "Serie A",
  },
  {
    name: "Udinese",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Udinese_Calcio_logo.svg/240px-Udinese_Calcio_logo.svg.png",
    stars: "3.5",
    league: "Serie A",
  },
  {
    name: "Genoa",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Genoa_CFC_logo.svg/240px-Genoa_CFC_logo.svg.png",
    stars: "3.5",
    league: "Serie A",
  },
  {
    name: "Hellas Verona",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Hellas_Verona_FC_logo_2020.svg/240px-Hellas_Verona_FC_logo_2020.svg.png",
    stars: "3.5",
    league: "Serie A",
  },
  {
    name: "Cagliari",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Cagliari_Calcio_logo.svg/240px-Cagliari_Calcio_logo.svg.png",
    stars: "3.5",
    league: "Serie A",
  },
  {
    name: "Parma",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Parma_Calcio_1913_logo.svg/240px-Parma_Calcio_1913_logo.svg.png",
    stars: "3.5",
    league: "Serie A",
  },
  {
    name: "Lecce",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/US_Lecce_logo.svg/240px-US_Lecce_logo.svg.png",
    stars: "3.5",
    league: "Serie A",
  },
  {
    name: "Empoli",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Empoli_F.C._logo.svg/240px-Empoli_F.C._logo.svg.png",
    stars: "3.5",
    league: "Serie A",
  },
  {
    name: "Venezia",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Venezia_FC_logo.svg/240px-Venezia_FC_logo.svg.png",
    stars: "3.5",
    league: "Serie A",
  },
  {
    name: "Monza",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/AC_Monza_logo.svg/240px-AC_Monza_logo.svg.png",
    stars: "3.5",
    league: "Serie A",
  },

  // Ligue 1 (France)
  {
    name: "Paris Saint-Germain",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Paris_Saint-Germain_F.C..svg/240px-Paris_Saint-Germain_F.C..svg.png",
    stars: "5",
    league: "Ligue 1",
  },
  {
    name: "AS Monaco",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/AS_Monaco_FC.svg/240px-AS_Monaco_FC.svg.png",
    stars: "4.5",
    league: "Ligue 1",
  },
  {
    name: "LOSC Lille",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/LOSC_Lille.svg/240px-LOSC_Lille.svg.png",
    stars: "4.5",
    league: "Ligue 1",
  },
  {
    name: "Olympique de Marseille",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Olympique_de_Marseille_logo.svg/240px-Olympique_de_Marseille_logo.svg.png",
    stars: "4.5",
    league: "Ligue 1",
  },
  {
    name: "OGC Nice",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/OGC_Nice_logo.svg/240px-OGC_Nice_logo.svg.png",
    stars: "4",
    league: "Ligue 1",
  },
  {
    name: "Olympique Lyonnais",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Olympique_Lyonnais.svg/240px-Olympique_Lyonnais.svg.png",
    stars: "4",
    league: "Ligue 1",
  },
  {
    name: "RC Strasbourg",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/RC_Strasbourg_Alsace_logo.svg/240px-RC_Strasbourg_Alsace_logo.svg.png",
    stars: "4",
    league: "Ligue 1",
  },
  {
    name: "RC Lens",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/RC_Lens_logo.svg/240px-RC_Lens_logo.svg.png",
    stars: "4",
    league: "Ligue 1",
  },
  {
    name: "Stade Brestois 29",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Stade_Brestois_29_logo.svg/240px-Stade_Brestois_29_logo.svg.png",
    stars: "3.5",
    league: "Ligue 1",
  },
  {
    name: "Toulouse FC",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Toulouse_FC_logo.svg/240px-Toulouse_FC_logo.svg.png",
    stars: "3.5",
    league: "Ligue 1",
  },
  {
    name: "AJ Auxerre",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/AJ_Auxerre_logo.svg/240px-AJ_Auxerre_logo.svg.png",
    stars: "3.5",
    league: "Ligue 1",
  },
  {
    name: "Angers SCO",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Angers_SCO_logo.svg/240px-Angers_SCO_logo.svg.png",
    stars: "3.5",
    league: "Ligue 1",
  },
  {
    name: "AS Saint-Étienne",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/AS_Saint-%C3%89tienne_logo.svg/240px-AS_Saint-%C3%89tienne_logo.svg.png",
    stars: "3.5",
    league: "Ligue 1",
  },
  {
    name: "Montpellier HSC",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Montpellier_HSC_logo.svg/240px-Montpellier_HSC_logo.svg.png",
    stars: "3.5",
    league: "Ligue 1",
  },
  {
    name: "FC Nantes",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/FC_Nantes_logo.svg/240px-FC_Nantes_logo.svg.png",
    stars: "3.5",
    league: "Ligue 1",
  },
  {
    name: "Stade de Reims",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Stade_de_Reims_logo.svg/240px-Stade_de_Reims_logo.svg.png",
    stars: "3.5",
    league: "Ligue 1",
  },
  {
    name: "Stade Rennais FC",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Stade_Rennais_FC_logo.svg/240px-Stade_Rennais_FC_logo.svg.png",
    stars: "3.5",
    league: "Ligue 1",
  },
  {
    name: "Le Havre AC",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Le_Havre_AC_logo.svg/240px-Le_Havre_AC_logo.svg.png",
    stars: "3.5",
    league: "Ligue 1",
  },
];

export default gameClubs;
export type { Club };
