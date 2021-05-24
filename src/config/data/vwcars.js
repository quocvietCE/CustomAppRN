/**
 * Grabbed from: https://www.vw.com/models/
 */

/*
 [...document.querySelectorAll('.car-data')].map(item => {
    const img = item.querySelector('img.show');
    return {
        image: img.src,
        model: img.alt.split('–')[0].trim(),
        description: item.querySelector('.info .desc').innerText
    }
})

 */

export const colors = [
  '#333853',
  '#A78212',
  'tomato',
  '#1A5B49',
  'gold',
  '#090F0B',
  '#AC2B01',
  '#6A472E',
  '#0099cc',
];
export default [
  {
    key: '0',
    image:
      'https://www.vwimg.com/iris/iris?bkgnd=transparent&fabric=BG&paint=0Q0Q&pov=E13,CGN&quality=100&vehicle=2020_BU34MS_WYE_2019_10_27&Resp=png&width=860&crop=130,170,600,331&y=180&x=60',
    model: 'Jetta',
    description: 'The compact sedan',
  },
  {
    key: '1',
    image:
      'https://www.vwimg.com/iris/iris?bkgnd=transparent&fabric=TL&paint=J2J2&pov=E13,CGN&quality=60&vehicle=2020_BU39V2_WYL_2020_01_05&Resp=png&width=860&crop=130,170,600,331&y=180&x=60',
    model: 'Jetta GLI',
    description: 'The performance sedan',
  },
  {
    key: '2',
    image:
      'https://www.vw.com/content/dam/vwcom/allModels/2020-allmodels/MY20-Passat-RLINE-ReflexSilverMetallic-Profile-600x331.png',
    model: 'Passat',
    description: 'The midsize sedan',
  },
  {
    key: '3',
    image:
      'https://www.vwimg.com/iris/iris?bkgnd=transparent&fabric=TO&paint=0Q0Q&pov=E13,CGN&quality=100&vehicle=2020_3H72Q8_FN7_P5G_P5I_W5K_2019_07_07&Resp=png&width=860&crop=130,170,600,331&y=180&x=60',
    model: 'Arteon',
    description: 'The premium sport sedan',
  },
  {
    key: '4',
    image:
      'https://www.vwimg.com/iris/iris?vehicle=2020_BW22VS_2020_01_05&paint=2B2B&fabric=FY&pov=E13,CGD&quality=100&bkgnd=transparent&RESP=PNG&width=860&crop=130,170,600,331&y=180&x=60',
    model: 'Tiguan',
    description: 'The stylish SUV',
  },
  {
    key: '5',
    image:
      'https://www.vwimg.com/iris/iris?bkgnd=transparent&fabric=BC&paint=0Q0Q&pov=E13,CGN&quality=100&vehicle=2020_CMC2NZ_2ER_5K7_2020_02_23&Resp=png&width=860&crop=130,170,600,331&y=230&x=60',
    model: 'Atlas Cross Sport',
    description: 'The bold SUV',
  },
  {
    key: '6',
    image:
      'https://www.vwimg.com/iris/iris?vehicle=2021_CA25UR_2020_02_23&paint=P2P2&fabric=PG&pov=E13,CGD&quality=100&bkgnd=transparent&RESP=PNG&width=860&crop=130,170,600,331&y=180&x=60',
    model: 'Atlas',
    description: 'The family SUV',
  },
  {
    key: '7',
    image:
      'https://www.vwimg.com/iris/iris?vehicle=2019_BX63MS_P15_W04_2018_09_16&paint=G2G2&fabric=TW&pov=E13%2CCGD&quality=90&bkgnd=transparent&RESP=PNG&x=1200&y=2000&w=7000&h=5150&width=600',
    model: 'Golf SportWagen',
    description: 'The wagon',
  },
  {
    key: '8',
    image:
      'https://www.vwimg.com/iris/iris?vehicle=2019_BX6CN6_W06_2018_09_16&paint=0Q0Q&fabric=TW&pov=E13%2CCGD&quality=90&bkgnd=transparent&RESP=PNG&x=1200&y=2000&w=7000&h=5150&width=600',
    model: 'Golf Alltrack',
    description: 'The adventurous wagon',
  },
  {
    key: '9',
    image:
      'https://www.vwimg.com/iris/iris?vehicle=2019_5C23P6_2018_09_02&paint=V9V9&fabric=JU&pov=E13%2CCGD&quality=90&bkgnd=transparent&RESP=PNG&x=1200&y=2000&w=7000&h=5150&width=600',
    model: 'Beetle',
    description: 'The sporty icon',
  },
  {
    key: '10',
    image:
      'https://www.vwimg.com/iris/iris?bkgnd=transparent&fabric=XW&paint=2B2B&pov=E13,CGN&quality=100&vehicle=2020_AU23M2_2019_09_29&Resp=png&width=860&crop=130,170,600,331&y=180&x=60',
    model: '2020 Golf',
    description: 'The modern hatch',
  },
  {
    key: '11',
    image:
      'https://www.vwimg.com/iris/iris?bkgnd=transparent&fabric=TL&paint=0Q0Q&pov=E13,CGN&quality=100&vehicle=2020_AU29V2_W30_2020_01_05&Resp=png&width=860&crop=130,170,600,331&y=180&x=60',
    model: 'Golf GTI',
    description: 'The hot hatch',
  },
  {
    key: '13',
    image:
      'https://www.vwimg.com/iris/iris?bkgnd=transparent&fabric=BG&paint=0Q0Q&pov=E13,CGN&quality=100&vehicle=2020_BU34MS_WYE_2019_10_27&Resp=png&width=860&crop=130,170,600,331&y=180&x=60',
    model: 'Jetta',
    description: 'The compact sedan',
  },
  {
    key: '14',
    image:
      'https://www.vwimg.com/iris/iris?bkgnd=transparent&fabric=TL&paint=J2J2&pov=E13,CGN&quality=60&vehicle=2020_BU39V2_WYL_2020_01_05&Resp=png&width=860&crop=130,170,600,331&y=180&x=60',
    model: 'Jetta GLI',
    description: 'The performance sedan',
  },
  {
    key: '15',
    image:
      'https://www.vw.com/content/dam/vwcom/allModels/2020-allmodels/MY20-Passat-RLINE-ReflexSilverMetallic-Profile-600x331.png',
    model: 'Passat',
    description: 'The midsize sedan',
  },
  {
    key: '16',
    image:
      'https://www.vwimg.com/iris/iris?bkgnd=transparent&fabric=TO&paint=0Q0Q&pov=E13,CGN&quality=100&vehicle=2020_3H72Q8_FN7_P5G_P5I_W5K_2019_07_07&Resp=png&width=860&crop=130,170,600,331&y=180&x=60',
    model: 'Arteon',
    description: 'The premium sport sedan',
  },
  {
    key: '17',
    image:
      'https://www.vwimg.com/iris/iris?vehicle=2020_BW22VS_2020_01_05&paint=2B2B&fabric=FY&pov=E13,CGD&quality=100&bkgnd=transparent&RESP=PNG&width=860&crop=130,170,600,331&y=180&x=60',
    model: 'Tiguan',
    description: 'The stylish SUV',
  },
  {
    key: '18',
    image:
      'https://www.vwimg.com/iris/iris?bkgnd=transparent&fabric=BC&paint=0Q0Q&pov=E13,CGN&quality=100&vehicle=2020_CMC2NZ_2ER_5K7_2020_02_23&Resp=png&width=860&crop=130,170,600,331&y=230&x=60',
    model: 'Atlas Cross Sport',
    description: 'The bold SUV',
  },
  {
    key: '19',
    image:
      'https://www.vwimg.com/iris/iris?vehicle=2021_CA25UR_2020_02_23&paint=P2P2&fabric=PG&pov=E13,CGD&quality=100&bkgnd=transparent&RESP=PNG&width=860&crop=130,170,600,331&y=180&x=60',
    model: 'Atlas',
    description: 'The family SUV',
  },
  {
    key: '20',
    image:
      'https://www.vwimg.com/iris/iris?vehicle=2019_BX63MS_P15_W04_2018_09_16&paint=G2G2&fabric=TW&pov=E13%2CCGD&quality=90&bkgnd=transparent&RESP=PNG&x=1200&y=2000&w=7000&h=5150&width=600',
    model: 'Golf SportWagen',
    description: 'The wagon',
  },
  {
    key: '21',
    image:
      'https://www.vwimg.com/iris/iris?vehicle=2019_BX6CN6_W06_2018_09_16&paint=0Q0Q&fabric=TW&pov=E13%2CCGD&quality=90&bkgnd=transparent&RESP=PNG&x=1200&y=2000&w=7000&h=5150&width=600',
    model: 'Golf Alltrack',
    description: 'The adventurous wagon',
  },
  {
    key: '22',
    image:
      'https://www.vwimg.com/iris/iris?vehicle=2019_5C23P6_2018_09_02&paint=V9V9&fabric=JU&pov=E13%2CCGD&quality=90&bkgnd=transparent&RESP=PNG&x=1200&y=2000&w=7000&h=5150&width=600',
    model: 'Beetle',
    description: 'The sporty icon',
  },
  {
    key: '23',
    image:
      'https://www.vwimg.com/iris/iris?bkgnd=transparent&fabric=XW&paint=2B2B&pov=E13,CGN&quality=100&vehicle=2020_AU23M2_2019_09_29&Resp=png&width=860&crop=130,170,600,331&y=180&x=60',
    model: '2020 Golf',
    description: 'The modern hatch',
  },
  {
    key: '24',
    image:
      'https://www.vwimg.com/iris/iris?bkgnd=transparent&fabric=TL&paint=0Q0Q&pov=E13,CGN&quality=100&vehicle=2020_AU29V2_W30_2020_01_05&Resp=png&width=860&crop=130,170,600,331&y=180&x=60',
    model: 'Golf GTI',
    description: 'The hot hatch',
  },
];
