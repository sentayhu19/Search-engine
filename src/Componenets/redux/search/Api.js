import { Search, SearchError } from "./action";
import axios from 'axios'
require("dotenv").config();

export const getSearchResults =  (key) => async (dispatch) => {
  if (key!=="" && key!==undefined) {
  //   console.log("SEARCH started", key)
  // let data = JSON.stringify({
  //   "q": key,
  //   "gl": "us",
  //   "hl": "en",
  //   "autocorrect": true
  // });
  
  // let config = {
  //   method: 'post',
  //   url: 'https://google.serper.dev/search',
  //   headers: { 
  //     'X-API-KEY': process.env.API_KEY, 
  //     'Content-Type': 'application/json'
  //   },
  //   data : data
  // };
  
  // await axios(config)
  // .then((response) => {
  //   dispatch(Search(response.data))
  //   console.log(JSON.stringify(response.data));
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
}
const response ={
  "searchParameters": {
    "q": "banana",
    "gl": "us",
    "hl": "en",
    "autocorrect": true,
    "page": 1,
    "type": "search"
  },
  "organic": [
    {
      "title": "Banana - Wikipedia",
      "link": "https://en.wikipedia.org/wiki/Banana",
      "snippet": "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.",
      "attributes": {
        "Family": "Musaceae",
        "Genus": "Musa"
      },
      "sitelinks": [
        {
          "title": "List of banana cultivars",
          "link": "https://en.wikipedia.org/wiki/List_of_banana_cultivars"
        },
        {
          "title": "Cavendish banana",
          "link": "https://en.wikipedia.org/wiki/Cavendish_banana"
        },
        {
          "title": "Gros Michel",
          "link": "https://en.wikipedia.org/wiki/Gros_Michel_banana"
        },
        {
          "title": "Cooking banana",
          "link": "https://en.wikipedia.org/wiki/Cooking_banana"
        }
      ],
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJmndv9bWPBMSp4XNCCjcsBrtRhfoE6xziWM-d7CD0U-YkDUmHzfoQDs&s",
      "position": 1
    },
    {
      "title": "Shop Banana Republic & discover timeless styles for Women, Men, Baby & Home",
      "link": "https://bananarepublic.gap.com/",
      "snippet": "Discover a spirit of adventure at Banana Republic and shop thoughtfully designed classics, crafted from luxurious materials with an eye towards ...",
      "position": 2
    },
    {
      "title": "Bananas: 11 Evidence-Based Health Benefits - Healthline",
      "link": "https://www.healthline.com/nutrition/11-proven-benefits-of-bananas",
      "snippet": "Bananas are a popular fruit with many potential health benefits. They may boost your digestion and heart health thanks to their fiber and antioxidant contents.",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpayWHY8z6XDyxuMLPqys0f17-IAancijJOmyPGUCJIu21K4xUtGEpCk&s",
      "position": 3
    },
    {
      "title": "Bananas: Health benefits, tips, and risks - Medical News Today",
      "link": "https://www.medicalnewstoday.com/articles/271157",
      "snippet": "Bananas are one of the most popular fruits worldwide. They contain essential nutrients that can have a protective impact on health.",
      "date": "Oct 5, 2020",
      "sitelinks": [
        {
          "title": "Benefits",
          "link": "https://www.medicalnewstoday.com/articles/271157#benefits"
        },
        {
          "title": "Nutrition",
          "link": "https://www.medicalnewstoday.com/articles/271157#nutrition"
        },
        {
          "title": "Diet",
          "link": "https://www.medicalnewstoday.com/articles/271157#diet"
        },
        {
          "title": "Risks",
          "link": "https://www.medicalnewstoday.com/articles/271157#risks"
        }
      ],
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQV35pZn_Hs7tgPfRNG-9gmG0nCGi0NIUXEkOBjM8o3dBU9xGhDxQUBRA&s",
      "position": 4
    },
    {
      "title": "banana | Description, History, Cultivation, Nutrition, Benefits, & Facts | Britannica",
      "link": "https://www.britannica.com/plant/banana-plant",
      "snippet": "banana, fruit of the genus Musa, of the family Musaceae, one of the most important fruit crops of the world. The banana is grown in the tropics, and, ...",
      "position": 5
    },
    {
      "title": "banana - Wiktionary",
      "link": "https://en.wiktionary.org/wiki/banana",
      "snippet": "NounEdit · An elongated curved tropical fruit of a banana plant, which grows in bunches and has a creamy flesh and a smooth skin. · The tropical tree-like plant ...",
      "position": 6
    },
    {
      "title": "Banana Nutrition Facts and Health Benefits - Verywell Fit",
      "link": "https://www.verywellfit.com/are-bananas-bad-for-weight-loss-3495634",
      "snippet": "If you've heard that bananas are high in carbohydrates, you may wonder whether they're a healthy fruit to eat. Bananas are made up of mostly ...",
      "date": "Aug 1, 2022",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHC9MKL7LZo9y1XVS_HV2k2L95RUvWjhsinItPW78E3yAfa6UkmciuBeM&s",
      "position": 7
    },
    {
      "title": "Are bananas healthy? A dietitian explains the health benefits",
      "link": "https://www.today.com/health/diet-fitness/how-many-calories-in-a-banana-rcna50618",
      "snippet": "Bananas are one of the most popular fresh fruits in the world. Not only are they naturally sweet and affordable, they are also packed with ...",
      "date": "Oct 6, 2022",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoBIMpIxxxxNjDm3VIf6Ygb-mI6DNcNo_kAk-ialGdK7VCRB0ijceJRQ&s",
      "position": 8
    },
    {
      "title": "Banana Bread Recipe (With Video)",
      "link": "https://www.simplyrecipes.com/recipes/banana_bread/",
      "snippet": "Put those ripe bananas to use in the best banana bread recipe ever. Moist and delicious, it's easy to make—one bowl, no need for a mixer!",
      "rating": 4.8,
      "ratingCount": 2286,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBIeo1jMkkyvuAzWMsKbMvJ6eqpkXw4TLzgjkeCxf6WDy9yt4QgP17GA&s",
      "position": 9
    }
  ],
  "peopleAlsoAsk": [
    {
      "question": "What are the benefits of eating bananas?",
      "snippet": "11 EVIDENCE-BASED HEALTH BENEFITS OF BANANAS\nRich in nutrients. ...\nMay improve blood sugar levels. ...\nMay support digestive health. ...\nMay aid weight loss. ...\nMay support heart health. ...\nFull of antioxidants. ...\nMay help you feel fuller. ...\nMay improve insulin sensitivity when unripe.",
      "title": "Bananas: 11 Evidence-Based Health Benefits - Healthline",
      "link": "https://www.healthline.com/nutrition/11-proven-benefits-of-bananas"
    },
    {
      "question": "Is it healthy to eat bananas daily?",
      "snippet": "They're full important nutrients, but eating too many could end up doing more\nharm than good. Too much of any single food may contribute to weight gain and\nnutrient deficiencies. One to two bananas per day is considered a moderate\nintake for most healthy people.",
      "title": "How Many Bananas Should You Eat per Day? - Healthline",
      "link": "https://www.healthline.com/nutrition/how-many-bananas-a-day"
    },
    {
      "question": "What are 3 health benefits of bananas?",
      "snippet": "BANANAS CONTAIN A NUMBER OF VITAMINS AND MINERALS.\nVitamin B6: A medium banana gives you about a quarter of the vitamin B6 you\nshould get each day. ...\nVitamin C: You should shoot for between 75-90 milligrams per day. ...\nMagnesium:This mineral helps control your blood pressure and blood sugar and\nkeeps your bones strong.",
      "title": "The Health Benefits of Bananas - WebMD",
      "link": "https://www.webmd.com/food-recipes/health-benefits-bananas"
    },
    {
      "question": "Is a banana a day too much sugar?",
      "snippet": "True or False: Bananas have too much sugar- False! However, the sugars\n(fructose, glucose, sucrose, and maltose) in the banana are all naturally\noccurring. The sugars you hear certain health professionals mentioning to cut\nback on are the added sugars.",
      "title": "True or False: Bananas have too much sugar - Compass Nutrition",
      "link": "https://www.compassnutrition.com/healthy-regards/2017/4/3/true-or-false-bananas-have-too-much-sugar"
    }
  ],
  "relatedSearches": [
    {
      "query": "Natural banana"
    },
    {
      "query": "Banana origin"
    },
    {
      "query": "Banana scientific name"
    },
    {
      "query": "Original banana"
    },
    {
      "query": "Banana vitamins"
    },
    {
      "query": "Who should avoid bananas"
    },
    {
      "query": "Banana tree name"
    },
    {
      "query": "Banana benefits for men"
    }
  ]
}
dispatch(Search(response))
}