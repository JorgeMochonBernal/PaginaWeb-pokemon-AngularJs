import { Injectable } from "@angular/core";

	Injectable() 
		export class PokemonService {
			constructor() {}

		private pokemons:any = 
		[{
            "img": "../assets/pokemon.json-master/images/001.png",
            "name": {
              "english": "Bulbasaur",
              "japanese": "フシギダネ",
              "chinese": "妙蛙种子",
              "french": "Bulbizarre"
            },
            "type": [
              "Grass",
              "Poison"
             
            ],
            "base": {
              "HP": 45,
              "Attack": 49,
              "Defense": 49,
              "SpAttack": 65,
              "SpDefense": 65,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/002.png",
            "name": {
              "english": "Ivysaur",
              "japanese": "フシギソウ",
              "chinese": "妙蛙草",
              "french": "Herbizarre"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 60,
              "Attack": 62,
              "Defense": 63,
              "SpAttack": 80,
              "SpDefense": 80,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/003.png",
            "name": {
              "english": "Venusaur",
              "japanese": "フシギバナ",
              "chinese": "妙蛙花",
              "french": "Florizarre"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 80,
              "Attack": 82,
              "Defense": 83,
              "SpAttack": 100,
              "SpDefense": 100,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/004.png",
            "name": {
              "english": "Charmander",
              "japanese": "ヒトカゲ",
              "chinese": "小火龙",
              "french": "Salamèche"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 39,
              "Attack": 52,
              "Defense": 43,
              "SpAttack": 60,
              "SpDefense": 50,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/005.png",
            "name": {
              "english": "Charmeleon",
              "japanese": "リザード",
              "chinese": "火恐龙",
              "french": "Reptincel"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 58,
              "Attack": 64,
              "Defense": 58,
              "SpAttack": 80,
              "SpDefense": 65,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/006.png",
            "name": {
              "english": "Charizard",
              "japanese": "リザードン",
              "chinese": "喷火龙",
              "french": "Dracaufeu"
            },
            "type": [
              "Fire",
              "Flying"
            ],
            "base": {
              "HP": 78,
              "Attack": 84,
              "Defense": 78,
              "SpAttack": 109,
              "SpDefense": 85,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/007.png",
            "name": {
              "english": "Squirtle",
              "japanese": "ゼニガメ",
              "chinese": "杰尼龟",
              "french": "Carapuce"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 44,
              "Attack": 48,
              "Defense": 65,
              "SpAttack": 50,
              "SpDefense": 64,
              "Speed": 43
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/008.png",
            "name": {
              "english": "Wartortle",
              "japanese": "カメール",
              "chinese": "卡咪龟",
              "french": "Carabaffe"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 59,
              "Attack": 63,
              "Defense": 80,
              "SpAttack": 65,
              "SpDefense": 80,
              "Speed": 58
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/009.png",

            "name": {
              "english": "Blastoise",
              "japanese": "カメックス",
              "chinese": "水箭龟",
              "french": "Tortank"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 79,
              "Attack": 83,
              "Defense": 100,
              "SpAttack": 85,
              "SpDefense": 105,
              "Speed": 78
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/010.png",
            "name": {
              "english": "Caterpie",
              "japanese": "キャタピー",
              "chinese": "绿毛虫",
              "french": "Chenipan"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 45,
              "Attack": 30,
              "Defense": 35,
              "SpAttack": 20,
              "SpDefense": 20,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/011.png",
            "name": {
              "english": "Metapod",
              "japanese": "トランセル",
              "chinese": "铁甲蛹",
              "french": "Chrysacier"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 50,
              "Attack": 20,
              "Defense": 55,
              "SpAttack": 25,
              "SpDefense": 25,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/012.png",
            "name": {
              "english": "Butterfree",
              "japanese": "バタフリー",
              "chinese": "巴大蝶",
              "french": "Papilusion"
            },
            "type": [
              "Bug",
              "Flying"
            ],
            "base": {
              "HP": 60,
              "Attack": 45,
              "Defense": 50,
              "SpAttack": 90,
              "SpDefense": 80,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/013.png",
            "name": {
              "english": "Weedle",
              "japanese": "ビードル",
              "chinese": "独角虫",
              "french": "Aspicot"
            },
            "type": [
              "Bug",
              "Poison"
            ],
            "base": {
              "HP": 40,
              "Attack": 35,
              "Defense": 30,
              "SpAttack": 20,
              "SpDefense": 20,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/014.png",
            "name": {
              "english": "Kakuna",
              "japanese": "コクーン",
              "chinese": "铁壳蛹",
              "french": "Coconfort"
            },
            "type": [
              "Bug",
              "Poison"
            ],
            "base": {
              "HP": 45,
              "Attack": 25,
              "Defense": 50,
              "SpAttack": 25,
              "SpDefense": 25,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/015.png",
            "name": {
              "english": "Beedrill",
              "japanese": "スピアー",
              "chinese": "大针蜂",
              "french": "Dardargnan"
            },
            "type": [
              "Bug",
              "Poison"
            ],
            "base": {
              "HP": 65,
              "Attack": 90,
              "Defense": 40,
              "SpAttack": 45,
              "SpDefense": 80,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/016.png",
            "name": {
              "english": "Pidgey",
              "japanese": "ポッポ",
              "chinese": "波波",
              "french": "Roucool"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 40,
              "Attack": 45,
              "Defense": 40,
              "SpAttack": 35,
              "SpDefense": 35,
              "Speed": 56
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/017.png",
            "name": {
              "english": "Pidgeotto",
              "japanese": "ピジョン",
              "chinese": "比比鸟",
              "french": "Roucoups"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 63,
              "Attack": 60,
              "Defense": 55,
              "SpAttack": 50,
              "SpDefense": 50,
              "Speed": 71
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/018.png",
            "name": {
              "english": "Pidgeot",
              "japanese": "ピジョット",
              "chinese": "大比鸟",
              "french": "Roucarnage"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 83,
              "Attack": 80,
              "Defense": 75,
              "SpAttack": 70,
              "SpDefense": 70,
              "Speed": 101
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/019.png",
            "name": {
              "english": "Rattata",
              "japanese": "コラッタ",
              "chinese": "小拉达",
              "french": "Rattata"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 30,
              "Attack": 56,
              "Defense": 35,
              "SpAttack": 25,
              "SpDefense": 35,
              "Speed": 72
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/020.png",
            "name": {
              "english": "Raticate",
              "japanese": "ラッタ",
              "chinese": "拉达",
              "french": "Rattatac"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 55,
              "Attack": 81,
              "Defense": 60,
              "SpAttack": 50,
              "SpDefense": 70,
              "Speed": 97
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/021.png",
            "name": {
              "english": "Spearow",
              "japanese": "オニスズメ",
              "chinese": "烈雀",
              "french": "Piafabec"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 40,
              "Attack": 60,
              "Defense": 30,
              "SpAttack": 31,
              "SpDefense": 31,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/022.png",
            "name": {
              "english": "Fearow",
              "japanese": "オニドリル",
              "chinese": "大嘴雀",
              "french": "Rapasdepic"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 65,
              "Attack": 90,
              "Defense": 65,
              "SpAttack": 61,
              "SpDefense": 61,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/023.png",
            "name": {
              "english": "Ekans",
              "japanese": "アーボ",
              "chinese": "阿柏蛇",
              "french": "Abo"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 35,
              "Attack": 60,
              "Defense": 44,
              "SpAttack": 40,
              "SpDefense": 54,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/024.png",
            "name": {
              "english": "Arbok",
              "japanese": "アーボック",
              "chinese": "阿柏怪",
              "french": "Arbok"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 60,
              "Attack": 95,
              "Defense": 69,
              "SpAttack": 65,
              "SpDefense": 79,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/025.png",
            "name": {
              "english": "Pikachu",
              "japanese": "ピカチュウ",
              "chinese": "皮卡丘",
              "french": "Pikachu"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 35,
              "Attack": 55,
              "Defense": 40,
              "SpAttack": 50,
              "SpDefense": 50,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/026.png",
            "name": {
              "english": "Raichu",
              "japanese": "ライチュウ",
              "chinese": "雷丘",
              "french": "Raichu"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 60,
              "Attack": 90,
              "Defense": 55,
              "SpAttack": 90,
              "SpDefense": 80,
              "Speed": 110
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/027.png",
            "name": {
              "english": "Sandshrew",
              "japanese": "サンド",
              "chinese": "穿山鼠",
              "french": "Sabelette"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 50,
              "Attack": 75,
              "Defense": 85,
              "SpAttack": 20,
              "SpDefense": 30,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/028.png",
            "name": {
              "english": "Sandslash",
              "japanese": "サンドパン",
              "chinese": "穿山王",
              "french": "Sablaireau"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 75,
              "Attack": 100,
              "Defense": 110,
              "SpAttack": 45,
              "SpDefense": 55,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/029.png",
            "name": {
              "english": "Nidoran♀",
              "japanese": "ニドラン♀",
              "chinese": "尼多兰",
              "french": "Nidoran♀"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 55,
              "Attack": 47,
              "Defense": 52,
              "SpAttack": 40,
              "SpDefense": 40,
              "Speed": 41
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/030.png",
            "name": {
              "english": "Nidorina",
              "japanese": "ニドリーナ",
              "chinese": "尼多娜",
              "french": "Nidorina"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 70,
              "Attack": 62,
              "Defense": 67,
              "SpAttack": 55,
              "SpDefense": 55,
              "Speed": 56
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/031.png",
            "name": {
              "english": "Nidoqueen",
              "japanese": "ニドクイン",
              "chinese": "尼多后",
              "french": "Nidoqueen"
            },
            "type": [
              "Poison",
              "Ground"
            ],
            "base": {
              "HP": 90,
              "Attack": 92,
              "Defense": 87,
              "SpAttack": 75,
              "SpDefense": 85,
              "Speed": 76
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/032.png",
            "name": {
              "english": "Nidoran♂",
              "japanese": "ニドラン♂",
              "chinese": "尼多朗",
              "french": "Nidoran♂"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 46,
              "Attack": 57,
              "Defense": 40,
              "SpAttack": 40,
              "SpDefense": 40,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/033.png",
            "name": {
              "english": "Nidorino",
              "japanese": "ニドリーノ",
              "chinese": "尼多力诺",
              "french": "Nidorino"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 61,
              "Attack": 72,
              "Defense": 57,
              "SpAttack": 55,
              "SpDefense": 55,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/034.png",
            "name": {
              "english": "Nidoking",
              "japanese": "ニドキング",
              "chinese": "尼多王",
              "french": "Nidoking"
            },
            "type": [
              "Poison",
              "Ground"
            ],
            "base": {
              "HP": 81,
              "Attack": 102,
              "Defense": 77,
              "SpAttack": 85,
              "SpDefense": 75,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/035.png",
            "name": {
              "english": "Clefairy",
              "japanese": "ピッピ",
              "chinese": "皮皮",
              "french": "Mélofée"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 70,
              "Attack": 45,
              "Defense": 48,
              "SpAttack": 60,
              "SpDefense": 65,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/036.png",
            "name": {
              "english": "Clefable",
              "japanese": "ピクシー",
              "chinese": "皮可西",
              "french": "Mélodelfe"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 95,
              "Attack": 70,
              "Defense": 73,
              "SpAttack": 95,
              "SpDefense": 90,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/037.png",
            "name": {
              "english": "Vulpix",
              "japanese": "ロコン",
              "chinese": "六尾",
              "french": "Goupix"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 38,
              "Attack": 41,
              "Defense": 40,
              "SpAttack": 50,
              "SpDefense": 65,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/038.png",
            "name": {
              "english": "Ninetales",
              "japanese": "キュウコン",
              "chinese": "九尾",
              "french": "Feunard"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 73,
              "Attack": 76,
              "Defense": 75,
              "SpAttack": 81,
              "SpDefense": 100,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/039.png",
            "name": {
              "english": "Jigglypuff",
              "japanese": "プリン",
              "chinese": "胖丁",
              "french": "Rondoudou"
            },
            "type": [
              "Normal",
              "Fairy"
            ],
            "base": {
              "HP": 115,
              "Attack": 45,
              "Defense": 20,
              "SpAttack": 45,
              "SpDefense": 25,
              "Speed": 20
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/040.png",
            "name": {
              "english": "Wigglytuff",
              "japanese": "プクリン",
              "chinese": "胖可丁",
              "french": "Grodoudou"
            },
            "type": [
              "Normal",
              "Fairy"
            ],
            "base": {
              "HP": 140,
              "Attack": 70,
              "Defense": 45,
              "SpAttack": 85,
              "SpDefense": 50,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/041.png",
            "name": {
              "english": "Zubat",
              "japanese": "ズバット",
              "chinese": "超音蝠",
              "french": "Nosferapti"
            },
            "type": [
              "Poison",
              "Flying"
            ],
            "base": {
              "HP": 40,
              "Attack": 45,
              "Defense": 35,
              "SpAttack": 30,
              "SpDefense": 40,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/042.png",
            "name": {
              "english": "Golbat",
              "japanese": "ゴルバット",
              "chinese": "大嘴蝠",
              "french": "Nosferalto"
            },
            "type": [
              "Poison",
              "Flying"
            ],
            "base": {
              "HP": 75,
              "Attack": 80,
              "Defense": 70,
              "SpAttack": 65,
              "SpDefense": 75,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/043.png",
            "name": {
              "english": "Oddish",
              "japanese": "ナゾノクサ",
              "chinese": "走路草",
              "french": "Mystherbe"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 45,
              "Attack": 50,
              "Defense": 55,
              "SpAttack": 75,
              "SpDefense": 65,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/044.png",
            "name": {
              "english": "Gloom",
              "japanese": "クサイハナ",
              "chinese": "臭臭花",
              "french": "Ortide"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 60,
              "Attack": 65,
              "Defense": 70,
              "SpAttack": 85,
              "SpDefense": 75,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/045.png",
            "name": {
              "english": "Vileplume",
              "japanese": "ラフレシア",
              "chinese": "霸王花",
              "french": "Rafflesia"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 75,
              "Attack": 80,
              "Defense": 85,
              "SpAttack": 110,
              "SpDefense": 90,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/046.png",
            "name": {
              "english": "Paras",
              "japanese": "パラス",
              "chinese": "派拉斯",
              "french": "Paras"
            },
            "type": [
              "Bug",
              "Grass"
            ],
            "base": {
              "HP": 35,
              "Attack": 70,
              "Defense": 55,
              "SpAttack": 45,
              "SpDefense": 55,
              "Speed": 25
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/047.png",
            "name": {
              "english": "Parasect",
              "japanese": "パラセクト",
              "chinese": "派拉斯特",
              "french": "Parasect"
            },
            "type": [
              "Bug",
              "Grass"
            ],
            "base": {
              "HP": 60,
              "Attack": 95,
              "Defense": 80,
              "SpAttack": 60,
              "SpDefense": 80,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/048.png",
            "name": {
              "english": "Venonat",
              "japanese": "コンパン",
              "chinese": "毛球",
              "french": "Mimitoss"
            },
            "type": [
              "Bug",
              "Poison"
            ],
            "base": {
              "HP": 60,
              "Attack": 55,
              "Defense": 50,
              "SpAttack": 40,
              "SpDefense": 55,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/049.png",
            "name": {
              "english": "Venomoth",
              "japanese": "モルフォン",
              "chinese": "摩鲁蛾",
              "french": "Aéromite"
            },
            "type": [
              "Bug",
              "Poison"
            ],
            "base": {
              "HP": 70,
              "Attack": 65,
              "Defense": 60,
              "SpAttack": 90,
              "SpDefense": 75,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/050.png",
            "name": {
              "english": "Diglett",
              "japanese": "ディグダ",
              "chinese": "地鼠",
              "french": "Taupiqueur"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 10,
              "Attack": 55,
              "Defense": 25,
              "SpAttack": 35,
              "SpDefense": 45,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/051.png",
            "name": {
              "english": "Dugtrio",
              "japanese": "ダグトリオ",
              "chinese": "三地鼠",
              "french": "Triopikeur"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 35,
              "Attack": 100,
              "Defense": 50,
              "SpAttack": 50,
              "SpDefense": 70,
              "Speed": 120
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/052.png",
            "name": {
              "english": "Meowth",
              "japanese": "ニャース",
              "chinese": "喵喵",
              "french": "Miaouss"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 40,
              "Attack": 45,
              "Defense": 35,
              "SpAttack": 40,
              "SpDefense": 40,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/053.png",
            "name": {
              "english": "Persian",
              "japanese": "ペルシアン",
              "chinese": "猫老大",
              "french": "Persian"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 65,
              "Attack": 70,
              "Defense": 60,
              "SpAttack": 65,
              "SpDefense": 65,
              "Speed": 115
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/054.png",
            "name": {
              "english": "Psyduck",
              "japanese": "コダック",
              "chinese": "可达鸭",
              "french": "Psykokwak"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 50,
              "Attack": 52,
              "Defense": 48,
              "SpAttack": 65,
              "SpDefense": 50,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/055.png",
            "name": {
              "english": "Golduck",
              "japanese": "ゴルダック",
              "chinese": "哥达鸭",
              "french": "Akwakwak"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 80,
              "Attack": 82,
              "Defense": 78,
              "SpAttack": 95,
              "SpDefense": 80,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/056.png",
            "name": {
              "english": "Mankey",
              "japanese": "マンキー",
              "chinese": "猴怪",
              "french": "Férosinge"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 40,
              "Attack": 80,
              "Defense": 35,
              "SpAttack": 35,
              "SpDefense": 45,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/057.png",
            "name": {
              "english": "Primeape",
              "japanese": "オコリザル",
              "chinese": "火暴猴",
              "french": "Colossinge"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 65,
              "Attack": 105,
              "Defense": 60,
              "SpAttack": 60,
              "SpDefense": 70,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/058.png",
            "name": {
              "english": "Growlithe",
              "japanese": "ガーディ",
              "chinese": "卡蒂狗",
              "french": "Caninos"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 55,
              "Attack": 70,
              "Defense": 45,
              "SpAttack": 70,
              "SpDefense": 50,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/059.png",
            "name": {
              "english": "Arcanine",
              "japanese": "ウインディ",
              "chinese": "风速狗",
              "french": "Arcanin"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 90,
              "Attack": 110,
              "Defense": 80,
              "SpAttack": 100,
              "SpDefense": 80,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/060.png",
            "name": {
              "english": "Poliwag",
              "japanese": "ニョロモ",
              "chinese": "蚊香蝌蚪",
              "french": "Ptitard"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 40,
              "Attack": 50,
              "Defense": 40,
              "SpAttack": 40,
              "SpDefense": 40,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/061.png",
            "name": {
              "english": "Poliwhirl",
              "japanese": "ニョロゾ",
              "chinese": "蚊香君",
              "french": "Têtarte"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 65,
              "Attack": 65,
              "Defense": 65,
              "SpAttack": 50,
              "SpDefense": 50,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/062.png",
            "name": {
              "english": "Poliwrath",
              "japanese": "ニョロボン",
              "chinese": "蚊香泳士",
              "french": "Tartard"
            },
            "type": [
              "Water",
              "Fighting"
            ],
            "base": {
              "HP": 90,
              "Attack": 95,
              "Defense": 95,
              "SpAttack": 70,
              "SpDefense": 90,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/063.png",
            "name": {
              "english": "Abra",
              "japanese": "ケーシィ",
              "chinese": "凯西",
              "french": "Abra"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 25,
              "Attack": 20,
              "Defense": 15,
              "SpAttack": 105,
              "SpDefense": 55,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/064.png",
            "name": {
              "english": "Kadabra",
              "japanese": "ユンゲラー",
              "chinese": "勇基拉",
              "french": "Kadabra"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 40,
              "Attack": 35,
              "Defense": 30,
              "SpAttack": 120,
              "SpDefense": 70,
              "Speed": 105
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/065.png",
            "name": {
              "english": "Alakazam",
              "japanese": "フーディン",
              "chinese": "胡地",
              "french": "Alakazam"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 55,
              "Attack": 50,
              "Defense": 45,
              "SpAttack": 135,
              "SpDefense": 95,
              "Speed": 120
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/066.png",
            "name": {
              "english": "Machop",
              "japanese": "ワンリキー",
              "chinese": "腕力",
              "french": "Machoc"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 70,
              "Attack": 80,
              "Defense": 50,
              "SpAttack": 35,
              "SpDefense": 35,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/067.png",
            "name": {
              "english": "Machoke",
              "japanese": "ゴーリキー",
              "chinese": "豪力",
              "french": "Machopeur"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 80,
              "Attack": 100,
              "Defense": 70,
              "SpAttack": 50,
              "SpDefense": 60,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/068.png",
            "name": {
              "english": "Machamp",
              "japanese": "カイリキー",
              "chinese": "怪力",
              "french": "Mackogneur"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 90,
              "Attack": 130,
              "Defense": 80,
              "SpAttack": 65,
              "SpDefense": 85,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/069.png",
            "name": {
              "english": "Bellsprout",
              "japanese": "マダツボミ",
              "chinese": "喇叭芽",
              "french": "Chétiflor"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 50,
              "Attack": 75,
              "Defense": 35,
              "SpAttack": 70,
              "SpDefense": 30,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/070.png",
            "name": {
              "english": "Weepinbell",
              "japanese": "ウツドン",
              "chinese": "口呆花",
              "french": "Boustiflor"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 65,
              "Attack": 90,
              "Defense": 50,
              "SpAttack": 85,
              "SpDefense": 45,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/071.png",
            "name": {
              "english": "Victreebel",
              "japanese": "ウツボット",
              "chinese": "大食花",
              "french": "Empiflor"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 80,
              "Attack": 105,
              "Defense": 65,
              "SpAttack": 100,
              "SpDefense": 70,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/072.png",
            "name": {
              "english": "Tentacool",
              "japanese": "メノクラゲ",
              "chinese": "玛瑙水母",
              "french": "Tentacool"
            },
            "type": [
              "Water",
              "Poison"
            ],
            "base": {
              "HP": 40,
              "Attack": 40,
              "Defense": 35,
              "SpAttack": 50,
              "SpDefense": 100,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/073.png",
            "name": {
              "english": "Tentacruel",
              "japanese": "ドククラゲ",
              "chinese": "毒刺水母",
              "french": "Tentacruel"
            },
            "type": [
              "Water",
              "Poison"
            ],
            "base": {
              "HP": 80,
              "Attack": 70,
              "Defense": 65,
              "SpAttack": 80,
              "SpDefense": 120,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/074.png",
            "name": {
              "english": "Geodude",
              "japanese": "イシツブテ",
              "chinese": "小拳石",
              "french": "Racaillou"
            },
            "type": [
              "Rock",
              "Ground"
            ],
            "base": {
              "HP": 40,
              "Attack": 80,
              "Defense": 100,
              "SpAttack": 30,
              "SpDefense": 30,
              "Speed": 20
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/075.png",
            "name": {
              "english": "Graveler",
              "japanese": "ゴローン",
              "chinese": "隆隆石",
              "french": "Gravalanch"
            },
            "type": [
              "Rock",
              "Ground"
            ],
            "base": {
              "HP": 55,
              "Attack": 95,
              "Defense": 115,
              "SpAttack": 45,
              "SpDefense": 45,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/076.png",
            "name": {
              "english": "Golem",
              "japanese": "ゴローニャ",
              "chinese": "隆隆岩",
              "french": "Grolem"
            },
            "type": [
              "Rock",
              "Ground"
            ],
            "base": {
              "HP": 80,
              "Attack": 120,
              "Defense": 130,
              "SpAttack": 55,
              "SpDefense": 65,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/077.png",
            "name": {
              "english": "Ponyta",
              "japanese": "ポニータ",
              "chinese": "小火马",
              "french": "Ponyta"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 50,
              "Attack": 85,
              "Defense": 55,
              "SpAttack": 65,
              "SpDefense": 65,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/078.png",
            "name": {
              "english": "Rapidash",
              "japanese": "ギャロップ",
              "chinese": "烈焰马",
              "french": "Galopa"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 65,
              "Attack": 100,
              "Defense": 70,
              "SpAttack": 80,
              "SpDefense": 80,
              "Speed": 105
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/079.png",
            "name": {
              "english": "Slowpoke",
              "japanese": "ヤドン",
              "chinese": "呆呆兽",
              "french": "Ramoloss"
            },
            "type": [
              "Water",
              "Psychic"
            ],
            "base": {
              "HP": 90,
              "Attack": 65,
              "Defense": 65,
              "SpAttack": 40,
              "SpDefense": 40,
              "Speed": 15
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/080.png",
            "name": {
              "english": "Slowbro",
              "japanese": "ヤドラン",
              "chinese": "呆壳兽",
              "french": "Flagadoss"
            },
            "type": [
              "Water",
              "Psychic"
            ],
            "base": {
              "HP": 95,
              "Attack": 75,
              "Defense": 110,
              "SpAttack": 100,
              "SpDefense": 80,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/081.png",
            "name": {
              "english": "Magnemite",
              "japanese": "コイル",
              "chinese": "小磁怪",
              "french": "Magnéti"
            },
            "type": [
              "Electric",
              "Steel"
            ],
            "base": {
              "HP": 25,
              "Attack": 35,
              "Defense": 70,
              "SpAttack": 95,
              "SpDefense": 55,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/082.png",
            "name": {
              "english": "Magneton",
              "japanese": "レアコイル",
              "chinese": "三合一磁怪",
              "french": "Magnéton"
            },
            "type": [
              "Electric",
              "Steel"
            ],
            "base": {
              "HP": 50,
              "Attack": 60,
              "Defense": 95,
              "SpAttack": 120,
              "SpDefense": 70,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/083.png",
            "name": {
              "english": "Farfetch'd",
              "japanese": "カモネギ",
              "chinese": "大葱鸭",
              "french": "Canarticho"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 52,
              "Attack": 90,
              "Defense": 55,
              "SpAttack": 58,
              "SpDefense": 62,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/084.png",
            "name": {
              "english": "Doduo",
              "japanese": "ドードー",
              "chinese": "嘟嘟",
              "french": "Doduo"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 35,
              "Attack": 85,
              "Defense": 45,
              "SpAttack": 35,
              "SpDefense": 35,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/085.png",
            "name": {
              "english": "Dodrio",
              "japanese": "ドードリオ",
              "chinese": "嘟嘟利",
              "french": "Dodrio"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 60,
              "Attack": 110,
              "Defense": 70,
              "SpAttack": 60,
              "SpDefense": 60,
              "Speed": 110
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/086.png",
            "name": {
              "english": "Seel",
              "japanese": "パウワウ",
              "chinese": "小海狮",
              "french": "Otaria"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 65,
              "Attack": 45,
              "Defense": 55,
              "SpAttack": 45,
              "SpDefense": 70,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/087.png",
            "name": {
              "english": "Dewgong",
              "japanese": "ジュゴン",
              "chinese": "白海狮",
              "french": "Lamantine"
            },
            "type": [
              "Water",
              "Ice"
            ],
            "base": {
              "HP": 90,
              "Attack": 70,
              "Defense": 80,
              "SpAttack": 70,
              "SpDefense": 95,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/088.png",
            "name": {
              "english": "Grimer",
              "japanese": "ベトベター",
              "chinese": "臭泥",
              "french": "Tadmorv"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 80,
              "Attack": 80,
              "Defense": 50,
              "SpAttack": 40,
              "SpDefense": 50,
              "Speed": 25
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/089.png",
            "name": {
              "english": "Muk",
              "japanese": "ベトベトン",
              "chinese": "臭臭泥",
              "french": "Grotadmorv"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 105,
              "Attack": 105,
              "Defense": 75,
              "SpAttack": 65,
              "SpDefense": 100,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/090.png",
            "name": {
              "english": "Shellder",
              "japanese": "シェルダー",
              "chinese": "大舌贝",
              "french": "Kokiyas"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 30,
              "Attack": 65,
              "Defense": 100,
              "SpAttack": 45,
              "SpDefense": 25,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/091.png",
            "name": {
              "english": "Cloyster",
              "japanese": "パルシェン",
              "chinese": "刺甲贝",
              "french": "Crustabri"
            },
            "type": [
              "Water",
              "Ice"
            ],
            "base": {
              "HP": 50,
              "Attack": 95,
              "Defense": 180,
              "SpAttack": 85,
              "SpDefense": 45,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/092.png",
            "name": {
              "english": "Gastly",
              "japanese": "ゴース",
              "chinese": "鬼斯",
              "french": "Fantominus"
            },
            "type": [
              "Ghost",
              "Poison"
            ],
            "base": {
              "HP": 30,
              "Attack": 35,
              "Defense": 30,
              "SpAttack": 100,
              "SpDefense": 35,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/093.png",
            "name": {
              "english": "Haunter",
              "japanese": "ゴースト",
              "chinese": "鬼斯通",
              "french": "Spectrum"
            },
            "type": [
              "Ghost",
              "Poison"
            ],
            "base": {
              "HP": 45,
              "Attack": 50,
              "Defense": 45,
              "SpAttack": 115,
              "SpDefense": 55,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/094.png",
            "name": {
              "english": "Gengar",
              "japanese": "ゲンガー",
              "chinese": "耿鬼",
              "french": "Ectoplasma"
            },
            "type": [
              "Ghost",
              "Poison"
            ],
            "base": {
              "HP": 60,
              "Attack": 65,
              "Defense": 60,
              "SpAttack": 130,
              "SpDefense": 75,
              "Speed": 110
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/095.png",
            "name": {
              "english": "Onix",
              "japanese": "イワーク",
              "chinese": "大岩蛇",
              "french": "Onix"
            },
            "type": [
              "Rock",
              "Ground"
            ],
            "base": {
              "HP": 35,
              "Attack": 45,
              "Defense": 160,
              "SpAttack": 30,
              "SpDefense": 45,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/096.png",
            "name": {
              "english": "Drowzee",
              "japanese": "スリープ",
              "chinese": "催眠貘",
              "french": "Soporifik"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 60,
              "Attack": 48,
              "Defense": 45,
              "SpAttack": 43,
              "SpDefense": 90,
              "Speed": 42
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/097.png",
            "name": {
              "english": "Hypno",
              "japanese": "スリーパー",
              "chinese": "引梦貘人",
              "french": "Hypnomade"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 85,
              "Attack": 73,
              "Defense": 70,
              "SpAttack": 73,
              "SpDefense": 115,
              "Speed": 67
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/098.png",
            "name": {
              "english": "Krabby",
              "japanese": "クラブ",
              "chinese": "大钳蟹",
              "french": "Krabby"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 30,
              "Attack": 105,
              "Defense": 90,
              "SpAttack": 25,
              "SpDefense": 25,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/099.png",
            "name": {
              "english": "Kingler",
              "japanese": "キングラー",
              "chinese": "巨钳蟹",
              "french": "Krabboss"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 55,
              "Attack": 130,
              "Defense": 115,
              "SpAttack": 50,
              "SpDefense": 50,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/100.png",
            "name": {
              "english": "Voltorb",
              "japanese": "ビリリダマ",
              "chinese": "霹雳电球",
              "french": "Voltorbe"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 40,
              "Attack": 30,
              "Defense": 50,
              "SpAttack": 55,
              "SpDefense": 55,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/101.png",
            "name": {
              "english": "Electrode",
              "japanese": "マルマイン",
              "chinese": "顽皮雷弹",
              "french": "Électrode"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 60,
              "Attack": 50,
              "Defense": 70,
              "SpAttack": 80,
              "SpDefense": 80,
              "Speed": 150
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/102.png",
            "name": {
              "english": "Exeggcute",
              "japanese": "タマタマ",
              "chinese": "蛋蛋",
              "french": "Noeunoeuf"
            },
            "type": [
              "Grass",
              "Psychic"
            ],
            "base": {
              "HP": 60,
              "Attack": 40,
              "Defense": 80,
              "SpAttack": 60,
              "SpDefense": 45,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/103.png",
            "name": {
              "english": "Exeggutor",
              "japanese": "ナッシー",
              "chinese": "椰蛋树",
              "french": "Noadkoko"
            },
            "type": [
              "Grass",
              "Psychic"
            ],
            "base": {
              "HP": 95,
              "Attack": 95,
              "Defense": 85,
              "SpAttack": 125,
              "SpDefense": 75,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/104.png",
            "name": {
              "english": "Cubone",
              "japanese": "カラカラ",
              "chinese": "卡拉卡拉",
              "french": "Osselait"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 50,
              "Attack": 50,
              "Defense": 95,
              "SpAttack": 40,
              "SpDefense": 50,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/105.png",
            "name": {
              "english": "Marowak",
              "japanese": "ガラガラ",
              "chinese": "嘎啦嘎啦",
              "french": "Ossatueur"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 60,
              "Attack": 80,
              "Defense": 110,
              "SpAttack": 50,
              "SpDefense": 80,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/106.png",
            "name": {
              "english": "Hitmonlee",
              "japanese": "サワムラー",
              "chinese": "飞腿郎",
              "french": "Kicklee"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 50,
              "Attack": 120,
              "Defense": 53,
              "SpAttack": 35,
              "SpDefense": 110,
              "Speed": 87
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/107.png",
            "name": {
              "english": "Hitmonchan",
              "japanese": "エビワラー",
              "chinese": "快拳郎",
              "french": "Tygnon"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 50,
              "Attack": 105,
              "Defense": 79,
              "SpAttack": 35,
              "SpDefense": 110,
              "Speed": 76
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/108.png",
            "name": {
              "english": "Lickitung",
              "japanese": "ベロリンガ",
              "chinese": "大舌头",
              "french": "Excelangue"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 90,
              "Attack": 55,
              "Defense": 75,
              "SpAttack": 60,
              "SpDefense": 75,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/109.png",
            "name": {
              "english": "Koffing",
              "japanese": "ドガース",
              "chinese": "瓦斯弹",
              "french": "Smogo"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 40,
              "Attack": 65,
              "Defense": 95,
              "SpAttack": 60,
              "SpDefense": 45,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/110.png",
            "name": {
              "english": "Weezing",
              "japanese": "マタドガス",
              "chinese": "双弹瓦斯",
              "french": "Smogogo"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 65,
              "Attack": 90,
              "Defense": 120,
              "SpAttack": 85,
              "SpDefense": 70,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/111.png",
            "name": {
              "english": "Rhyhorn",
              "japanese": "サイホーン",
              "chinese": "独角犀牛",
              "french": "Rhinocorne"
            },
            "type": [
              "Ground",
              "Rock"
            ],
            "base": {
              "HP": 80,
              "Attack": 85,
              "Defense": 95,
              "SpAttack": 30,
              "SpDefense": 30,
              "Speed": 25
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/112.png",
            "name": {
              "english": "Rhydon",
              "japanese": "サイドン",
              "chinese": "钻角犀兽",
              "french": "Rhinoféros"
            },
            "type": [
              "Ground",
              "Rock"
            ],
            "base": {
              "HP": 105,
              "Attack": 130,
              "Defense": 120,
              "SpAttack": 45,
              "SpDefense": 45,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/113.png",
            "name": {
              "english": "Chansey",
              "japanese": "ラッキー",
              "chinese": "吉利蛋",
              "french": "Leveinard"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 250,
              "Attack": 5,
              "Defense": 5,
              "SpAttack": 35,
              "SpDefense": 105,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/114.png",
            "name": {
              "english": "Tangela",
              "japanese": "モンジャラ",
              "chinese": "蔓藤怪",
              "french": "Saquedeneu"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 65,
              "Attack": 55,
              "Defense": 115,
              "SpAttack": 100,
              "SpDefense": 40,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/115.png",
            "name": {
              "english": "Kangaskhan",
              "japanese": "ガルーラ",
              "chinese": "袋兽",
              "french": "Kangourex"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 105,
              "Attack": 95,
              "Defense": 80,
              "SpAttack": 40,
              "SpDefense": 80,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/116.png",
            "name": {
              "english": "Horsea",
              "japanese": "タッツー",
              "chinese": "墨海马",
              "french": "Hypotrempe"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 30,
              "Attack": 40,
              "Defense": 70,
              "SpAttack": 70,
              "SpDefense": 25,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/117.png",
            "name": {
              "english": "Seadra",
              "japanese": "シードラ",
              "chinese": "海刺龙",
              "french": "Hypocéan"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 55,
              "Attack": 65,
              "Defense": 95,
              "SpAttack": 95,
              "SpDefense": 45,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/118.png",
            "name": {
              "english": "Goldeen",
              "japanese": "トサキント",
              "chinese": "角金鱼",
              "french": "Poissirène"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 45,
              "Attack": 67,
              "Defense": 60,
              "SpAttack": 35,
              "SpDefense": 50,
              "Speed": 63
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/119.png",
            "name": {
              "english": "Seaking",
              "japanese": "アズマオウ",
              "chinese": "金鱼王",
              "french": "Poissoroy"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 80,
              "Attack": 92,
              "Defense": 65,
              "SpAttack": 65,
              "SpDefense": 80,
              "Speed": 68
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/120.png",
            "name": {
              "english": "Staryu",
              "japanese": "ヒトデマン",
              "chinese": "海星星",
              "french": "Stari"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 30,
              "Attack": 45,
              "Defense": 55,
              "SpAttack": 70,
              "SpDefense": 55,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/121.png",
            "name": {
              "english": "Starmie",
              "japanese": "スターミー",
              "chinese": "宝石海星",
              "french": "Staross"
            },
            "type": [
              "Water",
              "Psychic"
            ],
            "base": {
              "HP": 60,
              "Attack": 75,
              "Defense": 85,
              "SpAttack": 100,
              "SpDefense": 85,
              "Speed": 115
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/122.png",
            "name": {
              "english": "Mr. Mime",
              "japanese": "バリヤード",
              "chinese": "魔墙人偶",
              "french": "M. Mime"
            },
            "type": [
              "Psychic",
              "Fairy"
            ],
            "base": {
              "HP": 40,
              "Attack": 45,
              "Defense": 65,
              "SpAttack": 100,
              "SpDefense": 120,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/123.png",
            "name": {
              "english": "Scyther",
              "japanese": "ストライク",
              "chinese": "飞天螳螂",
              "french": "Insécateur"
            },
            "type": [
              "Bug",
              "Flying"
            ],
            "base": {
              "HP": 70,
              "Attack": 110,
              "Defense": 80,
              "SpAttack": 55,
              "SpDefense": 80,
              "Speed": 105
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/124.png",
            "name": {
              "english": "Jynx",
              "japanese": "ルージュラ",
              "chinese": "迷唇姐",
              "french": "Lippoutou"
            },
            "type": [
              "Ice",
              "Psychic"
            ],
            "base": {
              "HP": 65,
              "Attack": 50,
              "Defense": 35,
              "SpAttack": 115,
              "SpDefense": 95,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/125.png",
            "name": {
              "english": "Electabuzz",
              "japanese": "エレブー",
              "chinese": "电击兽",
              "french": "Élektek"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 65,
              "Attack": 83,
              "Defense": 57,
              "SpAttack": 95,
              "SpDefense": 85,
              "Speed": 105
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/126.png",
            "name": {
              "english": "Magmar",
              "japanese": "ブーバー",
              "chinese": "鸭嘴火兽",
              "french": "Magmar"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 65,
              "Attack": 95,
              "Defense": 57,
              "SpAttack": 100,
              "SpDefense": 85,
              "Speed": 93
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/127.png",
            "name": {
              "english": "Pinsir",
              "japanese": "カイロス",
              "chinese": "凯罗斯",
              "french": "Scarabrute"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 65,
              "Attack": 125,
              "Defense": 100,
              "SpAttack": 55,
              "SpDefense": 70,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/128.png",
            "name": {
              "english": "Tauros",
              "japanese": "ケンタロス",
              "chinese": "肯泰罗",
              "french": "Tauros"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 75,
              "Attack": 100,
              "Defense": 95,
              "SpAttack": 40,
              "SpDefense": 70,
              "Speed": 110
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/129.png",
            "name": {
              "english": "Magikarp",
              "japanese": "コイキング",
              "chinese": "鲤鱼王",
              "french": "Magicarpe"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 20,
              "Attack": 10,
              "Defense": 55,
              "SpAttack": 15,
              "SpDefense": 20,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/130.png",
            "name": {
              "english": "Gyarados",
              "japanese": "ギャラドス",
              "chinese": "暴鲤龙",
              "french": "Léviator"
            },
            "type": [
              "Water",
              "Flying"
            ],
            "base": {
              "HP": 95,
              "Attack": 125,
              "Defense": 79,
              "SpAttack": 60,
              "SpDefense": 100,
              "Speed": 81
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/131.png",
            "name": {
              "english": "Lapras",
              "japanese": "ラプラス",
              "chinese": "拉普拉斯",
              "french": "Lokhlass"
            },
            "type": [
              "Water",
              "Ice"
            ],
            "base": {
              "HP": 130,
              "Attack": 85,
              "Defense": 80,
              "SpAttack": 85,
              "SpDefense": 95,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/132.png",
            "name": {
              "english": "Ditto",
              "japanese": "メタモン",
              "chinese": "百变怪",
              "french": "Métamorph"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 48,
              "Attack": 48,
              "Defense": 48,
              "SpAttack": 48,
              "SpDefense": 48,
              "Speed": 48
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/133.png",
            "name": {
              "english": "Eevee",
              "japanese": "イーブイ",
              "chinese": "伊布",
              "french": "Évoli"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 55,
              "Attack": 55,
              "Defense": 50,
              "SpAttack": 45,
              "SpDefense": 65,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/134.png",
            "name": {
              "english": "Vaporeon",
              "japanese": "シャワーズ",
              "chinese": "水伊布",
              "french": "Aquali"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 130,
              "Attack": 65,
              "Defense": 60,
              "SpAttack": 110,
              "SpDefense": 95,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/135.png",
            "name": {
              "english": "Jolteon",
              "japanese": "サンダース",
              "chinese": "雷伊布",
              "french": "Voltali"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 65,
              "Attack": 65,
              "Defense": 60,
              "SpAttack": 110,
              "SpDefense": 95,
              "Speed": 130
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/136.png",
            "name": {
              "english": "Flareon",
              "japanese": "ブースター",
              "chinese": "火伊布",
              "french": "Pyroli"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 65,
              "Attack": 130,
              "Defense": 60,
              "SpAttack": 95,
              "SpDefense": 110,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/137.png",
            "name": {
              "english": "Porygon",
              "japanese": "ポリゴン",
              "chinese": "多边兽",
              "french": "Porygon"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 65,
              "Attack": 60,
              "Defense": 70,
              "SpAttack": 85,
              "SpDefense": 75,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/138.png",
            "name": {
              "english": "Omanyte",
              "japanese": "オムナイト",
              "chinese": "菊石兽",
              "french": "Amonita"
            },
            "type": [
              "Rock",
              "Water"
            ],
            "base": {
              "HP": 35,
              "Attack": 40,
              "Defense": 100,
              "SpAttack": 90,
              "SpDefense": 55,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/139.png",
            "name": {
              "english": "Omastar",
              "japanese": "オムスター",
              "chinese": "多刺菊石兽",
              "french": "Amonistar"
            },
            "type": [
              "Rock",
              "Water"
            ],
            "base": {
              "HP": 70,
              "Attack": 60,
              "Defense": 125,
              "SpAttack": 115,
              "SpDefense": 70,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/140.png",
            "name": {
              "english": "Kabuto",
              "japanese": "カブト",
              "chinese": "化石盔",
              "french": "Kabuto"
            },
            "type": [
              "Rock",
              "Water"
            ],
            "base": {
              "HP": 30,
              "Attack": 80,
              "Defense": 90,
              "SpAttack": 55,
              "SpDefense": 45,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/141.png",
            "name": {
              "english": "Kabutops",
              "japanese": "カブトプス",
              "chinese": "镰刀盔",
              "french": "Kabutops"
            },
            "type": [
              "Rock",
              "Water"
            ],
            "base": {
              "HP": 60,
              "Attack": 115,
              "Defense": 105,
              "SpAttack": 65,
              "SpDefense": 70,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/142.png",
            "name": {
              "english": "Aerodactyl",
              "japanese": "プテラ",
              "chinese": "化石翼龙",
              "french": "Ptéra"
            },
            "type": [
              "Rock",
              "Flying"
            ],
            "base": {
              "HP": 80,
              "Attack": 105,
              "Defense": 65,
              "SpAttack": 60,
              "SpDefense": 75,
              "Speed": 130
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/143.png",
            "name": {
              "english": "Snorlax",
              "japanese": "カビゴン",
              "chinese": "卡比兽",
              "french": "Ronflex"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 160,
              "Attack": 110,
              "Defense": 65,
              "SpAttack": 65,
              "SpDefense": 110,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/144.png",
            "name": {
              "english": "Articuno",
              "japanese": "フリーザー",
              "chinese": "急冻鸟",
              "french": "Artikodin"
            },
            "type": [
              "Ice",
              "Flying"
            ],
            "base": {
              "HP": 90,
              "Attack": 85,
              "Defense": 100,
              "SpAttack": 95,
              "SpDefense": 125,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/145.png",
            "name": {
              "english": "Zapdos",
              "japanese": "サンダー",
              "chinese": "闪电鸟",
              "french": "Électhor"
            },
            "type": [
              "Electric",
              "Flying"
            ],
            "base": {
              "HP": 90,
              "Attack": 90,
              "Defense": 85,
              "SpAttack": 125,
              "SpDefense": 90,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/146.png",
            "name": {
              "english": "Moltres",
              "japanese": "ファイヤー",
              "chinese": "火焰鸟",
              "french": "Sulfura"
            },
            "type": [
              "Fire",
              "Flying"
            ],
            "base": {
              "HP": 90,
              "Attack": 100,
              "Defense": 90,
              "SpAttack": 125,
              "SpDefense": 85,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/147.png",
            "name": {
              "english": "Dratini",
              "japanese": "ミニリュウ",
              "chinese": "迷你龙",
              "french": "Minidraco"
            },
            "type": [
              "Dragon"
            ],
            "base": {
              "HP": 41,
              "Attack": 64,
              "Defense": 45,
              "SpAttack": 50,
              "SpDefense": 50,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/148.png",
            "name": {
              "english": "Dragonair",
              "japanese": "ハクリュー",
              "chinese": "哈克龙",
              "french": "Draco"
            },
            "type": [
              "Dragon"
            ],
            "base": {
              "HP": 61,
              "Attack": 84,
              "Defense": 65,
              "SpAttack": 70,
              "SpDefense": 70,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/149.png",
            "name": {
              "english": "Dragonite",
              "japanese": "カイリュー",
              "chinese": "快龙",
              "french": "Dracolosse"
            },
            "type": [
              "Dragon",
              "Flying"
            ],
            "base": {
              "HP": 91,
              "Attack": 134,
              "Defense": 95,
              "SpAttack": 100,
              "SpDefense": 100,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/150.png",
            "name": {
              "english": "Mewtwo",
              "japanese": "ミュウツー",
              "chinese": "超梦",
              "french": "Mewtwo"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 106,
              "Attack": 110,
              "Defense": 90,
              "SpAttack": 154,
              "SpDefense": 90,
              "Speed": 130
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/151.png",
            "name": {
              "english": "Mew",
              "japanese": "ミュウ",
              "chinese": "梦幻",
              "french": "Mew"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 100,
              "Attack": 100,
              "Defense": 100,
              "SpAttack": 100,
              "SpDefense": 100,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/152.png",
            "name": {
              "english": "Chikorita",
              "japanese": "チコリータ",
              "chinese": "菊草叶",
              "french": "Germignon"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 45,
              "Attack": 49,
              "Defense": 65,
              "SpAttack": 49,
              "SpDefense": 65,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/153.png",
            "name": {
              "english": "Bayleef",
              "japanese": "ベイリーフ",
              "chinese": "月桂叶",
              "french": "Macronium"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 60,
              "Attack": 62,
              "Defense": 80,
              "SpAttack": 63,
              "SpDefense": 80,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/154.png",
            "name": {
              "english": "Meganium",
              "japanese": "メガニウム",
              "chinese": "大竺葵",
              "french": "Méganium"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 80,
              "Attack": 82,
              "Defense": 100,
              "SpAttack": 83,
              "SpDefense": 100,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/155.png",
            "name": {
              "english": "Cyndaquil",
              "japanese": "ヒノアラシ",
              "chinese": "火球鼠",
              "french": "Héricendre"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 39,
              "Attack": 52,
              "Defense": 43,
              "SpAttack": 60,
              "SpDefense": 50,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/156.png",
            "name": {
              "english": "Quilava",
              "japanese": "マグマラシ",
              "chinese": "火岩鼠",
              "french": "Feurisson"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 58,
              "Attack": 64,
              "Defense": 58,
              "SpAttack": 80,
              "SpDefense": 65,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/157.png",
            "name": {
              "english": "Typhlosion",
              "japanese": "バクフーン",
              "chinese": "火暴兽",
              "french": "Typhlosion"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 78,
              "Attack": 84,
              "Defense": 78,
              "SpAttack": 109,
              "SpDefense": 85,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/158.png",
            "name": {
              "english": "Totodile",
              "japanese": "ワニノコ",
              "chinese": "小锯鳄",
              "french": "Kaiminus"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 50,
              "Attack": 65,
              "Defense": 64,
              "SpAttack": 44,
              "SpDefense": 48,
              "Speed": 43
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/159.png",
            "name": {
              "english": "Croconaw",
              "japanese": "アリゲイツ",
              "chinese": "蓝鳄",
              "french": "Crocrodil"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 65,
              "Attack": 80,
              "Defense": 80,
              "SpAttack": 59,
              "SpDefense": 63,
              "Speed": 58
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/160.png",
            "name": {
              "english": "Feraligatr",
              "japanese": "オーダイル",
              "chinese": "大力鳄",
              "french": "Aligatueur"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 85,
              "Attack": 105,
              "Defense": 100,
              "SpAttack": 79,
              "SpDefense": 83,
              "Speed": 78
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/161.png",
            "name": {
              "english": "Sentret",
              "japanese": "オタチ",
              "chinese": "尾立",
              "french": "Fouinette"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 35,
              "Attack": 46,
              "Defense": 34,
              "SpAttack": 35,
              "SpDefense": 45,
              "Speed": 20
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/162.png",
            "name": {
              "english": "Furret",
              "japanese": "オオタチ",
              "chinese": "大尾立",
              "french": "Fouinar"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 85,
              "Attack": 76,
              "Defense": 64,
              "SpAttack": 45,
              "SpDefense": 55,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/163.png",
            "name": {
              "english": "Hoothoot",
              "japanese": "ホーホー",
              "chinese": "咕咕",
              "french": "Hoothoot"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 60,
              "Attack": 30,
              "Defense": 30,
              "SpAttack": 36,
              "SpDefense": 56,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/164.png",
            "name": {
              "english": "Noctowl",
              "japanese": "ヨルノズク",
              "chinese": "猫头夜鹰",
              "french": "Noarfang"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 100,
              "Attack": 50,
              "Defense": 50,
              "SpAttack": 86,
              "SpDefense": 96,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/165.png",
            "name": {
              "english": "Ledyba",
              "japanese": "レディバ",
              "chinese": "芭瓢虫",
              "french": "Coxy"
            },
            "type": [
              "Bug",
              "Flying"
            ],
            "base": {
              "HP": 40,
              "Attack": 20,
              "Defense": 30,
              "SpAttack": 40,
              "SpDefense": 80,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/166.png",
            "name": {
              "english": "Ledian",
              "japanese": "レディアン",
              "chinese": "安瓢虫",
              "french": "Coxyclaque"
            },
            "type": [
              "Bug",
              "Flying"
            ],
            "base": {
              "HP": 55,
              "Attack": 35,
              "Defense": 50,
              "SpAttack": 55,
              "SpDefense": 110,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/167.png",
            "name": {
              "english": "Spinarak",
              "japanese": "イトマル",
              "chinese": "圆丝蛛",
              "french": "Mimigal"
            },
            "type": [
              "Bug",
              "Poison"
            ],
            "base": {
              "HP": 40,
              "Attack": 60,
              "Defense": 40,
              "SpAttack": 40,
              "SpDefense": 40,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/168.png",
            "name": {
              "english": "Ariados",
              "japanese": "アリアドス",
              "chinese": "阿利多斯",
              "french": "Migalos"
            },
            "type": [
              "Bug",
              "Poison"
            ],
            "base": {
              "HP": 70,
              "Attack": 90,
              "Defense": 70,
              "SpAttack": 60,
              "SpDefense": 70,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/169.png",
            "name": {
              "english": "Crobat",
              "japanese": "クロバット",
              "chinese": "叉字蝠",
              "french": "Nostenfer"
            },
            "type": [
              "Poison",
              "Flying"
            ],
            "base": {
              "HP": 85,
              "Attack": 90,
              "Defense": 80,
              "SpAttack": 70,
              "SpDefense": 80,
              "Speed": 130
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/170.png",
            "name": {
              "english": "Chinchou",
              "japanese": "チョンチー",
              "chinese": "灯笼鱼",
              "french": "Loupio"
            },
            "type": [
              "Water",
              "Electric"
            ],
            "base": {
              "HP": 75,
              "Attack": 38,
              "Defense": 38,
              "SpAttack": 56,
              "SpDefense": 56,
              "Speed": 67
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/171.png",
            "name": {
              "english": "Lanturn",
              "japanese": "ランターン",
              "chinese": "电灯怪",
              "french": "Lanturn"
            },
            "type": [
              "Water",
              "Electric"
            ],
            "base": {
              "HP": 125,
              "Attack": 58,
              "Defense": 58,
              "SpAttack": 76,
              "SpDefense": 76,
              "Speed": 67
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/172.png",
            "name": {
              "english": "Pichu",
              "japanese": "ピチュー",
              "chinese": "皮丘",
              "french": "Pichu"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 20,
              "Attack": 40,
              "Defense": 15,
              "SpAttack": 35,
              "SpDefense": 35,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/173.png",
            "name": {
              "english": "Cleffa",
              "japanese": "ピィ",
              "chinese": "皮宝宝",
              "french": "Mélo"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 50,
              "Attack": 25,
              "Defense": 28,
              "SpAttack": 45,
              "SpDefense": 55,
              "Speed": 15
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/174.png",
            "name": {
              "english": "Igglybuff",
              "japanese": "ププリン",
              "chinese": "宝宝丁",
              "french": "Toudoudou"
            },
            "type": [
              "Normal",
              "Fairy"
            ],
            "base": {
              "HP": 90,
              "Attack": 30,
              "Defense": 15,
              "SpAttack": 40,
              "SpDefense": 20,
              "Speed": 15
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/175.png",
            "name": {
              "english": "Togepi",
              "japanese": "トゲピー",
              "chinese": "波克比",
              "french": "Togepi"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 35,
              "Attack": 20,
              "Defense": 65,
              "SpAttack": 40,
              "SpDefense": 65,
              "Speed": 20
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/176.png",
            "name": {
              "english": "Togetic",
              "japanese": "トゲチック",
              "chinese": "波克基古",
              "french": "Togetic"
            },
            "type": [
              "Fairy",
              "Flying"
            ],
            "base": {
              "HP": 55,
              "Attack": 40,
              "Defense": 85,
              "SpAttack": 80,
              "SpDefense": 105,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/177.png",
            "name": {
              "english": "Natu",
              "japanese": "ネイティ",
              "chinese": "天然雀",
              "french": "Natu"
            },
            "type": [
              "Psychic",
              "Flying"
            ],
            "base": {
              "HP": 40,
              "Attack": 50,
              "Defense": 45,
              "SpAttack": 70,
              "SpDefense": 45,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/178.png",
            "name": {
              "english": "Xatu",
              "japanese": "ネイティオ",
              "chinese": "天然鸟",
              "french": "Xatu"
            },
            "type": [
              "Psychic",
              "Flying"
            ],
            "base": {
              "HP": 65,
              "Attack": 75,
              "Defense": 70,
              "SpAttack": 95,
              "SpDefense": 70,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/179.png",
            "name": {
              "english": "Mareep",
              "japanese": "メリープ",
              "chinese": "咩利羊",
              "french": "Wattouat"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 55,
              "Attack": 40,
              "Defense": 40,
              "SpAttack": 65,
              "SpDefense": 45,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/180.png",
            "name": {
              "english": "Flaaffy",
              "japanese": "モココ",
              "chinese": "茸茸羊",
              "french": "Lainergie"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 70,
              "Attack": 55,
              "Defense": 55,
              "SpAttack": 80,
              "SpDefense": 60,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/181.png",
            "name": {
              "english": "Ampharos",
              "japanese": "デンリュウ",
              "chinese": "电龙",
              "french": "Pharamp"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 90,
              "Attack": 75,
              "Defense": 85,
              "SpAttack": 115,
              "SpDefense": 90,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/182.png",
            "name": {
              "english": "Bellossom",
              "japanese": "キレイハナ",
              "chinese": "美丽花",
              "french": "Joliflor"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 75,
              "Attack": 80,
              "Defense": 95,
              "SpAttack": 90,
              "SpDefense": 100,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/183.png",
            "name": {
              "english": "Marill",
              "japanese": "マリル",
              "chinese": "玛力露",
              "french": "Marill"
            },
            "type": [
              "Water",
              "Fairy"
            ],
            "base": {
              "HP": 70,
              "Attack": 20,
              "Defense": 50,
              "SpAttack": 20,
              "SpDefense": 50,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/184.png",
            "name": {
              "english": "Azumarill",
              "japanese": "マリルリ",
              "chinese": "玛力露丽",
              "french": "Azumarill"
            },
            "type": [
              "Water",
              "Fairy"
            ],
            "base": {
              "HP": 100,
              "Attack": 50,
              "Defense": 80,
              "SpAttack": 60,
              "SpDefense": 80,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/185.png",
            "name": {
              "english": "Sudowoodo",
              "japanese": "ウソッキー",
              "chinese": "树才怪‎",
              "french": "Simularbre"
            },
            "type": [
              "Rock"
            ],
            "base": {
              "HP": 70,
              "Attack": 100,
              "Defense": 115,
              "SpAttack": 30,
              "SpDefense": 65,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/186.png",
            "name": {
              "english": "Politoed",
              "japanese": "ニョロトノ",
              "chinese": "蚊香蛙皇",
              "french": "Tarpaud"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 90,
              "Attack": 75,
              "Defense": 75,
              "SpAttack": 90,
              "SpDefense": 100,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/187.png",
            "name": {
              "english": "Hoppip",
              "japanese": "ハネッコ",
              "chinese": "毽子草",
              "french": "Granivol"
            },
            "type": [
              "Grass",
              "Flying"
            ],
            "base": {
              "HP": 35,
              "Attack": 35,
              "Defense": 40,
              "SpAttack": 35,
              "SpDefense": 55,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/188.png",
            "name": {
              "english": "Skiploom",
              "japanese": "ポポッコ",
              "chinese": "毽子花",
              "french": "Floravol"
            },
            "type": [
              "Grass",
              "Flying"
            ],
            "base": {
              "HP": 55,
              "Attack": 45,
              "Defense": 50,
              "SpAttack": 45,
              "SpDefense": 65,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/189.png",
            "name": {
              "english": "Jumpluff",
              "japanese": "ワタッコ",
              "chinese": "毽子棉",
              "french": "Cotovol"
            },
            "type": [
              "Grass",
              "Flying"
            ],
            "base": {
              "HP": 75,
              "Attack": 55,
              "Defense": 70,
              "SpAttack": 55,
              "SpDefense": 95,
              "Speed": 110
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/190.png",
            "name": {
              "english": "Aipom",
              "japanese": "エイパム",
              "chinese": "长尾怪手",
              "french": "Capumain"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 55,
              "Attack": 70,
              "Defense": 55,
              "SpAttack": 40,
              "SpDefense": 55,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/191.png",
            "name": {
              "english": "Sunkern",
              "japanese": "ヒマナッツ",
              "chinese": "向日种子",
              "french": "Tournegrin"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 30,
              "Attack": 30,
              "Defense": 30,
              "SpAttack": 30,
              "SpDefense": 30,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/192.png",
            "name": {
              "english": "Sunflora",
              "japanese": "キマワリ",
              "chinese": "向日花怪",
              "french": "Héliatronc"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 75,
              "Attack": 75,
              "Defense": 55,
              "SpAttack": 105,
              "SpDefense": 85,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/193.png",
            "name": {
              "english": "Yanma",
              "japanese": "ヤンヤンマ",
              "chinese": "蜻蜻蜓",
              "french": "Yanma"
            },
            "type": [
              "Bug",
              "Flying"
            ],
            "base": {
              "HP": 65,
              "Attack": 65,
              "Defense": 45,
              "SpAttack": 75,
              "SpDefense": 45,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/194.png",
            "name": {
              "english": "Wooper",
              "japanese": "ウパー",
              "chinese": "乌波",
              "french": "Axoloto"
            },
            "type": [
              "Water",
              "Ground"
            ],
            "base": {
              "HP": 55,
              "Attack": 45,
              "Defense": 45,
              "SpAttack": 25,
              "SpDefense": 25,
              "Speed": 15
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/195.png",
            "name": {
              "english": "Quagsire",
              "japanese": "ヌオー",
              "chinese": "沼王",
              "french": "Maraiste"
            },
            "type": [
              "Water",
              "Ground"
            ],
            "base": {
              "HP": 95,
              "Attack": 85,
              "Defense": 85,
              "SpAttack": 65,
              "SpDefense": 65,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/196.png",
            "name": {
              "english": "Espeon",
              "japanese": "エーフィ",
              "chinese": "太阳伊布",
              "french": "Mentali"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 65,
              "Attack": 65,
              "Defense": 60,
              "SpAttack": 130,
              "SpDefense": 95,
              "Speed": 110
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/197.png",
            "name": {
              "english": "Umbreon",
              "japanese": "ブラッキー",
              "chinese": "月亮伊布",
              "french": "Noctali"
            },
            "type": [
              "Dark"
            ],
            "base": {
              "HP": 95,
              "Attack": 65,
              "Defense": 110,
              "SpAttack": 60,
              "SpDefense": 130,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/198.png",
            "name": {
              "english": "Murkrow",
              "japanese": "ヤミカラス",
              "chinese": "黑暗鸦",
              "french": "Cornèbre"
            },
            "type": [
              "Dark",
              "Flying"
            ],
            "base": {
              "HP": 60,
              "Attack": 85,
              "Defense": 42,
              "SpAttack": 85,
              "SpDefense": 42,
              "Speed": 91
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/199.png",
            "name": {
              "english": "Slowking",
              "japanese": "ヤドキング",
              "chinese": "呆呆王",
              "french": "Roigada"
            },
            "type": [
              "Water",
              "Psychic"
            ],
            "base": {
              "HP": 95,
              "Attack": 75,
              "Defense": 80,
              "SpAttack": 100,
              "SpDefense": 110,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/200.png",
            "name": {
              "english": "Misdreavus",
              "japanese": "ムウマ",
              "chinese": "梦妖",
              "french": "Feuforêve"
            },
            "type": [
              "Ghost"
            ],
            "base": {
              "HP": 60,
              "Attack": 60,
              "Defense": 60,
              "SpAttack": 85,
              "SpDefense": 85,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/201.png",
            "name": {
              "english": "Unown",
              "japanese": "アンノーン",
              "chinese": "未知图腾",
              "french": "Zarbi"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 48,
              "Attack": 72,
              "Defense": 48,
              "SpAttack": 72,
              "SpDefense": 48,
              "Speed": 48
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/202.png",
            "name": {
              "english": "Wobbuffet",
              "japanese": "ソーナンス",
              "chinese": "果然翁",
              "french": "Qulbutoké"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 190,
              "Attack": 33,
              "Defense": 58,
              "SpAttack": 33,
              "SpDefense": 58,
              "Speed": 33
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/203.png",
            "name": {
              "english": "Girafarig",
              "japanese": "キリンリキ",
              "chinese": "麒麟奇",
              "french": "Girafarig"
            },
            "type": [
              "Normal",
              "Psychic"
            ],
            "base": {
              "HP": 70,
              "Attack": 80,
              "Defense": 65,
              "SpAttack": 90,
              "SpDefense": 65,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/204.png",
            "name": {
              "english": "Pineco",
              "japanese": "クヌギダマ",
              "chinese": "榛果球",
              "french": "Pomdepik"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 50,
              "Attack": 65,
              "Defense": 90,
              "SpAttack": 35,
              "SpDefense": 35,
              "Speed": 15
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/205.png",
            "name": {
              "english": "Forretress",
              "japanese": "フォレトス",
              "chinese": "佛烈托斯",
              "french": "Foretress"
            },
            "type": [
              "Bug",
              "Steel"
            ],
            "base": {
              "HP": 75,
              "Attack": 90,
              "Defense": 140,
              "SpAttack": 60,
              "SpDefense": 60,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/206.png",
            "name": {
              "english": "Dunsparce",
              "japanese": "ノコッチ",
              "chinese": "土龙弟弟",
              "french": "Insolourdo"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 100,
              "Attack": 70,
              "Defense": 70,
              "SpAttack": 65,
              "SpDefense": 65,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/207.png",
            "name": {
              "english": "Gligar",
              "japanese": "グライガー",
              "chinese": "天蝎",
              "french": "Scorplane"
            },
            "type": [
              "Ground",
              "Flying"
            ],
            "base": {
              "HP": 65,
              "Attack": 75,
              "Defense": 105,
              "SpAttack": 35,
              "SpDefense": 65,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/208.png",
            "name": {
              "english": "Steelix",
              "japanese": "ハガネール",
              "chinese": "大钢蛇",
              "french": "Steelix"
            },
            "type": [
              "Steel",
              "Ground"
            ],
            "base": {
              "HP": 75,
              "Attack": 85,
              "Defense": 200,
              "SpAttack": 55,
              "SpDefense": 65,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/209.png",
            "name": {
              "english": "Snubbull",
              "japanese": "ブルー",
              "chinese": "布鲁",
              "french": "Snubbull"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 60,
              "Attack": 80,
              "Defense": 50,
              "SpAttack": 40,
              "SpDefense": 40,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/210.png",
            "name": {
              "english": "Granbull",
              "japanese": "グランブル",
              "chinese": "布鲁皇",
              "french": "Granbull"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 90,
              "Attack": 120,
              "Defense": 75,
              "SpAttack": 60,
              "SpDefense": 60,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/211.png",
            "name": {
              "english": "Qwilfish",
              "japanese": "ハリーセン",
              "chinese": "千针鱼",
              "french": "Qwilfish"
            },
            "type": [
              "Water",
              "Poison"
            ],
            "base": {
              "HP": 65,
              "Attack": 95,
              "Defense": 85,
              "SpAttack": 55,
              "SpDefense": 55,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/212.png",
            "name": {
              "english": "Scizor",
              "japanese": "ハッサム",
              "chinese": "巨钳螳螂",
              "french": "Cizayox"
            },
            "type": [
              "Bug",
              "Steel"
            ],
            "base": {
              "HP": 70,
              "Attack": 130,
              "Defense": 100,
              "SpAttack": 55,
              "SpDefense": 80,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/213.png",
            "name": {
              "english": "Shuckle",
              "japanese": "ツボツボ",
              "chinese": "壶壶",
              "french": "Caratroc"
            },
            "type": [
              "Bug",
              "Rock"
            ],
            "base": {
              "HP": 20,
              "Attack": 10,
              "Defense": 230,
              "SpAttack": 10,
              "SpDefense": 230,
              "Speed": 5
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/214.png",
            "name": {
              "english": "Heracross",
              "japanese": "ヘラクロス",
              "chinese": "赫拉克罗斯",
              "french": "Scarhino"
            },
            "type": [
              "Bug",
              "Fighting"
            ],
            "base": {
              "HP": 80,
              "Attack": 125,
              "Defense": 75,
              "SpAttack": 40,
              "SpDefense": 95,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/215.png",
            "name": {
              "english": "Sneasel",
              "japanese": "ニューラ",
              "chinese": "狃拉",
              "french": "Farfuret"
            },
            "type": [
              "Dark",
              "Ice"
            ],
            "base": {
              "HP": 55,
              "Attack": 95,
              "Defense": 55,
              "SpAttack": 35,
              "SpDefense": 75,
              "Speed": 115
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/216.png",
            "name": {
              "english": "Teddiursa",
              "japanese": "ヒメグマ",
              "chinese": "熊宝宝",
              "french": "Teddiursa"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 60,
              "Attack": 80,
              "Defense": 50,
              "SpAttack": 50,
              "SpDefense": 50,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/217.png",
            "name": {
              "english": "Ursaring",
              "japanese": "リングマ",
              "chinese": "圈圈熊",
              "french": "Ursaring"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 90,
              "Attack": 130,
              "Defense": 75,
              "SpAttack": 75,
              "SpDefense": 75,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/218.png",
            "name": {
              "english": "Slugma",
              "japanese": "マグマッグ",
              "chinese": "熔岩虫",
              "french": "Limagma"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 40,
              "Attack": 40,
              "Defense": 40,
              "SpAttack": 70,
              "SpDefense": 40,
              "Speed": 20
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/219.png",
            "name": {
              "english": "Magcargo",
              "japanese": "マグカルゴ",
              "chinese": "熔岩蜗牛",
              "french": "Volcaropod"
            },
            "type": [
              "Fire",
              "Rock"
            ],
            "base": {
              "HP": 60,
              "Attack": 50,
              "Defense": 120,
              "SpAttack": 90,
              "SpDefense": 80,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/220.png",
            "name": {
              "english": "Swinub",
              "japanese": "ウリムー",
              "chinese": "小山猪",
              "french": "Marcacrin"
            },
            "type": [
              "Ice",
              "Ground"
            ],
            "base": {
              "HP": 50,
              "Attack": 50,
              "Defense": 40,
              "SpAttack": 30,
              "SpDefense": 30,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/221.png",
            "name": {
              "english": "Piloswine",
              "japanese": "イノムー",
              "chinese": "长毛猪",
              "french": "Cochignon"
            },
            "type": [
              "Ice",
              "Ground"
            ],
            "base": {
              "HP": 100,
              "Attack": 100,
              "Defense": 80,
              "SpAttack": 60,
              "SpDefense": 60,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/222.png",
            "name": {
              "english": "Corsola",
              "japanese": "サニーゴ",
              "chinese": "太阳珊瑚",
              "french": "Corayon"
            },
            "type": [
              "Water",
              "Rock"
            ],
            "base": {
              "HP": 65,
              "Attack": 55,
              "Defense": 95,
              "SpAttack": 65,
              "SpDefense": 95,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/223.png",
            "name": {
              "english": "Remoraid",
              "japanese": "テッポウオ",
              "chinese": "铁炮鱼",
              "french": "Rémoraid"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 35,
              "Attack": 65,
              "Defense": 35,
              "SpAttack": 65,
              "SpDefense": 35,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/224.png",
            "name": {
              "english": "Octillery",
              "japanese": "オクタン",
              "chinese": "章鱼桶",
              "french": "Octillery"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 75,
              "Attack": 105,
              "Defense": 75,
              "SpAttack": 105,
              "SpDefense": 75,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/225.png",
            "name": {
              "english": "Delibird",
              "japanese": "デリバード",
              "chinese": "信使鸟",
              "french": "Cadoizo"
            },
            "type": [
              "Ice",
              "Flying"
            ],
            "base": {
              "HP": 45,
              "Attack": 55,
              "Defense": 45,
              "SpAttack": 65,
              "SpDefense": 45,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/226.png",
            "name": {
              "english": "Mantine",
              "japanese": "マンタイン",
              "chinese": "巨翅飞鱼",
              "french": "Démanta"
            },
            "type": [
              "Water",
              "Flying"
            ],
            "base": {
              "HP": 85,
              "Attack": 40,
              "Defense": 70,
              "SpAttack": 80,
              "SpDefense": 140,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/227.png",
            "name": {
              "english": "Skarmory",
              "japanese": "エアームド",
              "chinese": "盔甲鸟",
              "french": "Airmure"
            },
            "type": [
              "Steel",
              "Flying"
            ],
            "base": {
              "HP": 65,
              "Attack": 80,
              "Defense": 140,
              "SpAttack": 40,
              "SpDefense": 70,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/228.png",
            "name": {
              "english": "Houndour",
              "japanese": "デルビル",
              "chinese": "戴鲁比",
              "french": "Malosse"
            },
            "type": [
              "Dark",
              "Fire"
            ],
            "base": {
              "HP": 45,
              "Attack": 60,
              "Defense": 30,
              "SpAttack": 80,
              "SpDefense": 50,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/229.png",
            "name": {
              "english": "Houndoom",
              "japanese": "ヘルガー",
              "chinese": "黑鲁加",
              "french": "Démolosse"
            },
            "type": [
              "Dark",
              "Fire"
            ],
            "base": {
              "HP": 75,
              "Attack": 90,
              "Defense": 50,
              "SpAttack": 110,
              "SpDefense": 80,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/230.png",
            "name": {
              "english": "Kingdra",
              "japanese": "キングドラ",
              "chinese": "刺龙王",
              "french": "Hyporoi"
            },
            "type": [
              "Water",
              "Dragon"
            ],
            "base": {
              "HP": 75,
              "Attack": 95,
              "Defense": 95,
              "SpAttack": 95,
              "SpDefense": 95,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/231.png",
            "name": {
              "english": "Phanpy",
              "japanese": "ゴマゾウ",
              "chinese": "小小象",
              "french": "Phanpy"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 90,
              "Attack": 60,
              "Defense": 60,
              "SpAttack": 40,
              "SpDefense": 40,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/232.png",
            "name": {
              "english": "Donphan",
              "japanese": "ドンファン",
              "chinese": "顿甲",
              "french": "Donphan"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 90,
              "Attack": 120,
              "Defense": 120,
              "SpAttack": 60,
              "SpDefense": 60,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/233.png",
            "name": {
              "english": "Porygon2",
              "japanese": "ポリゴン２",
              "chinese": "多边兽Ⅱ",
              "french": "Porygon2"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 85,
              "Attack": 80,
              "Defense": 90,
              "SpAttack": 105,
              "SpDefense": 95,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/234.png",
            "name": {
              "english": "Stantler",
              "japanese": "オドシシ",
              "chinese": "惊角鹿",
              "french": "Cerfrousse"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 73,
              "Attack": 95,
              "Defense": 62,
              "SpAttack": 85,
              "SpDefense": 65,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/235.png",
            "name": {
              "english": "Smeargle",
              "japanese": "ドーブル",
              "chinese": "图图犬",
              "french": "Queulorior"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 55,
              "Attack": 20,
              "Defense": 35,
              "SpAttack": 20,
              "SpDefense": 45,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/236.png",
            "name": {
              "english": "Tyrogue",
              "japanese": "バルキー",
              "chinese": "无畏小子",
              "french": "Debugant"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 35,
              "Attack": 35,
              "Defense": 35,
              "SpAttack": 35,
              "SpDefense": 35,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/237.png",
            "name": {
              "english": "Hitmontop",
              "japanese": "カポエラー",
              "chinese": "战舞郎",
              "french": "Kapoera"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 50,
              "Attack": 95,
              "Defense": 95,
              "SpAttack": 35,
              "SpDefense": 110,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/238.png",
            "name": {
              "english": "Smoochum",
              "japanese": "ムチュール",
              "chinese": "迷唇娃",
              "french": "Lippouti"
            },
            "type": [
              "Ice",
              "Psychic"
            ],
            "base": {
              "HP": 45,
              "Attack": 30,
              "Defense": 15,
              "SpAttack": 85,
              "SpDefense": 65,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/239.png",
            "name": {
              "english": "Elekid",
              "japanese": "エレキッド",
              "chinese": "电击怪",
              "french": "Élekid"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 45,
              "Attack": 63,
              "Defense": 37,
              "SpAttack": 65,
              "SpDefense": 55,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/240.png",
            "name": {
              "english": "Magby",
              "japanese": "ブビィ",
              "chinese": "鸭嘴宝宝",
              "french": "Magby"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 45,
              "Attack": 75,
              "Defense": 37,
              "SpAttack": 70,
              "SpDefense": 55,
              "Speed": 83
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/241.png",
            "name": {
              "english": "Miltank",
              "japanese": "ミルタンク",
              "chinese": "大奶罐",
              "french": "Écrémeuh"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 95,
              "Attack": 80,
              "Defense": 105,
              "SpAttack": 40,
              "SpDefense": 70,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/242.png",
            "name": {
              "english": "Blissey",
              "japanese": "ハピナス",
              "chinese": "幸福蛋",
              "french": "Leuphorie"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 255,
              "Attack": 10,
              "Defense": 10,
              "SpAttack": 75,
              "SpDefense": 135,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/243.png",
            "name": {
              "english": "Raikou",
              "japanese": "ライコウ",
              "chinese": "雷公",
              "french": "Raikou"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 90,
              "Attack": 85,
              "Defense": 75,
              "SpAttack": 115,
              "SpDefense": 100,
              "Speed": 115
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/244.png",
            "name": {
              "english": "Entei",
              "japanese": "エンテイ",
              "chinese": "炎帝",
              "french": "Entei"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 115,
              "Attack": 115,
              "Defense": 85,
              "SpAttack": 90,
              "SpDefense": 75,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/245.png",
            "name": {
              "english": "Suicune",
              "japanese": "スイクン",
              "chinese": "水君",
              "french": "Suicune"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 100,
              "Attack": 75,
              "Defense": 115,
              "SpAttack": 90,
              "SpDefense": 115,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/246.png",
            "name": {
              "english": "Larvitar",
              "japanese": "ヨーギラス",
              "chinese": "幼基拉斯",
              "french": "Embrylex"
            },
            "type": [
              "Rock",
              "Ground"
            ],
            "base": {
              "HP": 50,
              "Attack": 64,
              "Defense": 50,
              "SpAttack": 45,
              "SpDefense": 50,
              "Speed": 41
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/247.png",
            "name": {
              "english": "Pupitar",
              "japanese": "サナギラス",
              "chinese": "沙基拉斯",
              "french": "Ymphect"
            },
            "type": [
              "Rock",
              "Ground"
            ],
            "base": {
              "HP": 70,
              "Attack": 84,
              "Defense": 70,
              "SpAttack": 65,
              "SpDefense": 70,
              "Speed": 51
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/248.png",
            "name": {
              "english": "Tyranitar",
              "japanese": "バンギラス",
              "chinese": "班基拉斯",
              "french": "Tyranocif"
            },
            "type": [
              "Rock",
              "Dark"
            ],
            "base": {
              "HP": 100,
              "Attack": 134,
              "Defense": 110,
              "SpAttack": 95,
              "SpDefense": 100,
              "Speed": 61
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/249.png",
            "name": {
              "english": "Lugia",
              "japanese": "ルギア",
              "chinese": "洛奇亚",
              "french": "Lugia"
            },
            "type": [
              "Psychic",
              "Flying"
            ],
            "base": {
              "HP": 106,
              "Attack": 90,
              "Defense": 130,
              "SpAttack": 90,
              "SpDefense": 154,
              "Speed": 110
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/250.png",
            "name": {
              "english": "Ho-Oh",
              "japanese": "ホウオウ",
              "chinese": "凤王",
              "french": "Ho-Oh"
            },
            "type": [
              "Fire",
              "Flying"
            ],
            "base": {
              "HP": 106,
              "Attack": 130,
              "Defense": 90,
              "SpAttack": 110,
              "SpDefense": 154,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/251.png",
            "name": {
              "english": "Celebi",
              "japanese": "セレビィ",
              "chinese": "时拉比",
              "french": "Celebi"
            },
            "type": [
              "Psychic",
              "Grass"
            ],
            "base": {
              "HP": 100,
              "Attack": 100,
              "Defense": 100,
              "SpAttack": 100,
              "SpDefense": 100,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/252.png",
            "name": {
              "english": "Treecko",
              "japanese": "キモリ",
              "chinese": "木守宫",
              "french": "Arcko"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 40,
              "Attack": 45,
              "Defense": 35,
              "SpAttack": 65,
              "SpDefense": 55,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/253.png",
            "name": {
              "english": "Grovyle",
              "japanese": "ジュプトル",
              "chinese": "森林蜥蜴",
              "french": "Massko"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 50,
              "Attack": 65,
              "Defense": 45,
              "SpAttack": 85,
              "SpDefense": 65,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/254.png",
            "name": {
              "english": "Sceptile",
              "japanese": "ジュカイン",
              "chinese": "蜥蜴王",
              "french": "Jungko"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 70,
              "Attack": 85,
              "Defense": 65,
              "SpAttack": 105,
              "SpDefense": 85,
              "Speed": 120
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/255.png",
            "name": {
              "english": "Torchic",
              "japanese": "アチャモ",
              "chinese": "火稚鸡",
              "french": "Poussifeu"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 45,
              "Attack": 60,
              "Defense": 40,
              "SpAttack": 70,
              "SpDefense": 50,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/256.png",
            "name": {
              "english": "Combusken",
              "japanese": "ワカシャモ",
              "chinese": "力壮鸡",
              "french": "Galifeu"
            },
            "type": [
              "Fire",
              "Fighting"
            ],
            "base": {
              "HP": 60,
              "Attack": 85,
              "Defense": 60,
              "SpAttack": 85,
              "SpDefense": 60,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/257.png",
            "name": {
              "english": "Blaziken",
              "japanese": "バシャーモ",
              "chinese": "火焰鸡",
              "french": "Braségali"
            },
            "type": [
              "Fire",
              "Fighting"
            ],
            "base": {
              "HP": 80,
              "Attack": 120,
              "Defense": 70,
              "SpAttack": 110,
              "SpDefense": 70,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/258.png",
            "name": {
              "english": "Mudkip",
              "japanese": "ミズゴロウ",
              "chinese": "水跃鱼",
              "french": "Gobou"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 50,
              "Attack": 70,
              "Defense": 50,
              "SpAttack": 50,
              "SpDefense": 50,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/259.png",
            "name": {
              "english": "Marshtomp",
              "japanese": "ヌマクロー",
              "chinese": "沼跃鱼",
              "french": "Flobio"
            },
            "type": [
              "Water",
              "Ground"
            ],
            "base": {
              "HP": 70,
              "Attack": 85,
              "Defense": 70,
              "SpAttack": 60,
              "SpDefense": 70,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/260.png",
            "name": {
              "english": "Swampert",
              "japanese": "ラグラージ",
              "chinese": "巨沼怪",
              "french": "Laggron"
            },
            "type": [
              "Water",
              "Ground"
            ],
            "base": {
              "HP": 100,
              "Attack": 110,
              "Defense": 90,
              "SpAttack": 85,
              "SpDefense": 90,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/261.png",
            "name": {
              "english": "Poochyena",
              "japanese": "ポチエナ",
              "chinese": "土狼犬",
              "french": "Medhyèna"
            },
            "type": [
              "Dark"
            ],
            "base": {
              "HP": 35,
              "Attack": 55,
              "Defense": 35,
              "SpAttack": 30,
              "SpDefense": 30,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/262.png",
            "name": {
              "english": "Mightyena",
              "japanese": "グラエナ",
              "chinese": "大狼犬",
              "french": "Grahyèna"
            },
            "type": [
              "Dark"
            ],
            "base": {
              "HP": 70,
              "Attack": 90,
              "Defense": 70,
              "SpAttack": 60,
              "SpDefense": 60,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/263.png",
            "name": {
              "english": "Zigzagoon",
              "japanese": "ジグザグマ",
              "chinese": "蛇纹熊",
              "french": "Zigzaton"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 38,
              "Attack": 30,
              "Defense": 41,
              "SpAttack": 30,
              "SpDefense": 41,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/264.png",
            "name": {
              "english": "Linoone",
              "japanese": "マッスグマ",
              "chinese": "直冲熊",
              "french": "Linéon"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 78,
              "Attack": 70,
              "Defense": 61,
              "SpAttack": 50,
              "SpDefense": 61,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/265.png",
            "name": {
              "english": "Wurmple",
              "japanese": "ケムッソ",
              "chinese": "刺尾虫",
              "french": "Chenipotte"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 45,
              "Attack": 45,
              "Defense": 35,
              "SpAttack": 20,
              "SpDefense": 30,
              "Speed": 20
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/266.png",
            "name": {
              "english": "Silcoon",
              "japanese": "カラサリス",
              "chinese": "甲壳茧",
              "french": "Armulys"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 50,
              "Attack": 35,
              "Defense": 55,
              "SpAttack": 25,
              "SpDefense": 25,
              "Speed": 15
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/267.png",
            "name": {
              "english": "Beautifly",
              "japanese": "アゲハント",
              "chinese": "狩猎凤蝶",
              "french": "Charmillon"
            },
            "type": [
              "Bug",
              "Flying"
            ],
            "base": {
              "HP": 60,
              "Attack": 70,
              "Defense": 50,
              "SpAttack": 100,
              "SpDefense": 50,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/268.png",
            "name": {
              "english": "Cascoon",
              "japanese": "マユルド",
              "chinese": "盾甲茧",
              "french": "Blindalys"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 50,
              "Attack": 35,
              "Defense": 55,
              "SpAttack": 25,
              "SpDefense": 25,
              "Speed": 15
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/269.png",
            "name": {
              "english": "Dustox",
              "japanese": "ドクケイル",
              "chinese": "毒粉蛾",
              "french": "Papinox"
            },
            "type": [
              "Bug",
              "Poison"
            ],
            "base": {
              "HP": 60,
              "Attack": 50,
              "Defense": 70,
              "SpAttack": 50,
              "SpDefense": 90,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/270.png",
            "name": {
              "english": "Lotad",
              "japanese": "ハスボー",
              "chinese": "莲叶童子",
              "french": "Nénupiot"
            },
            "type": [
              "Water",
              "Grass"
            ],
            "base": {
              "HP": 40,
              "Attack": 30,
              "Defense": 30,
              "SpAttack": 40,
              "SpDefense": 50,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/271.png",
            "name": {
              "english": "Lombre",
              "japanese": "ハスブレロ",
              "chinese": "莲帽小童",
              "french": "Lombre"
            },
            "type": [
              "Water",
              "Grass"
            ],
            "base": {
              "HP": 60,
              "Attack": 50,
              "Defense": 50,
              "SpAttack": 60,
              "SpDefense": 70,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/272.png",
            "name": {
              "english": "Ludicolo",
              "japanese": "ルンパッパ",
              "chinese": "乐天河童",
              "french": "Ludicolo"
            },
            "type": [
              "Water",
              "Grass"
            ],
            "base": {
              "HP": 80,
              "Attack": 70,
              "Defense": 70,
              "SpAttack": 90,
              "SpDefense": 100,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/273.png",
            "name": {
              "english": "Seedot",
              "japanese": "タネボー",
              "chinese": "橡实果",
              "french": "Grainipiot"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 40,
              "Attack": 40,
              "Defense": 50,
              "SpAttack": 30,
              "SpDefense": 30,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/274.png",
            "name": {
              "english": "Nuzleaf",
              "japanese": "コノハナ",
              "chinese": "长鼻叶",
              "french": "Pifeuil"
            },
            "type": [
              "Grass",
              "Dark"
            ],
            "base": {
              "HP": 70,
              "Attack": 70,
              "Defense": 40,
              "SpAttack": 60,
              "SpDefense": 40,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/275.png",
            "name": {
              "english": "Shiftry",
              "japanese": "ダーテング",
              "chinese": "狡猾天狗",
              "french": "Tengalice"
            },
            "type": [
              "Grass",
              "Dark"
            ],
            "base": {
              "HP": 90,
              "Attack": 100,
              "Defense": 60,
              "SpAttack": 90,
              "SpDefense": 60,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/276.png",
            "name": {
              "english": "Taillow",
              "japanese": "スバメ",
              "chinese": "傲骨燕",
              "french": "Nirondelle"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 40,
              "Attack": 55,
              "Defense": 30,
              "SpAttack": 30,
              "SpDefense": 30,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/277.png",
            "name": {
              "english": "Swellow",
              "japanese": "オオスバメ",
              "chinese": "大王燕",
              "french": "Hélédelle"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 60,
              "Attack": 85,
              "Defense": 60,
              "SpAttack": 75,
              "SpDefense": 50,
              "Speed": 125
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/278.png",
            "name": {
              "english": "Wingull",
              "japanese": "キャモメ",
              "chinese": "长翅鸥",
              "french": "Goélise"
            },
            "type": [
              "Water",
              "Flying"
            ],
            "base": {
              "HP": 40,
              "Attack": 30,
              "Defense": 30,
              "SpAttack": 55,
              "SpDefense": 30,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/279.png",
            "name": {
              "english": "Pelipper",
              "japanese": "ペリッパー",
              "chinese": "大嘴鸥",
              "french": "Bekipan"
            },
            "type": [
              "Water",
              "Flying"
            ],
            "base": {
              "HP": 60,
              "Attack": 50,
              "Defense": 100,
              "SpAttack": 95,
              "SpDefense": 70,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/280.png",
            "name": {
              "english": "Ralts",
              "japanese": "ラルトス",
              "chinese": "拉鲁拉丝",
              "french": "Tarsal"
            },
            "type": [
              "Psychic",
              "Fairy"
            ],
            "base": {
              "HP": 28,
              "Attack": 25,
              "Defense": 25,
              "SpAttack": 45,
              "SpDefense": 35,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/281.png",
            "name": {
              "english": "Kirlia",
              "japanese": "キルリア",
              "chinese": "奇鲁莉安",
              "french": "Kirlia"
            },
            "type": [
              "Psychic",
              "Fairy"
            ],
            "base": {
              "HP": 38,
              "Attack": 35,
              "Defense": 35,
              "SpAttack": 65,
              "SpDefense": 55,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/282.png",
            "name": {
              "english": "Gardevoir",
              "japanese": "サーナイト",
              "chinese": "沙奈朵",
              "french": "Gardevoir"
            },
            "type": [
              "Psychic",
              "Fairy"
            ],
            "base": {
              "HP": 68,
              "Attack": 65,
              "Defense": 65,
              "SpAttack": 125,
              "SpDefense": 115,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/283.png",
            "name": {
              "english": "Surskit",
              "japanese": "アメタマ",
              "chinese": "溜溜糖球",
              "french": "Arakdo"
            },
            "type": [
              "Bug",
              "Water"
            ],
            "base": {
              "HP": 40,
              "Attack": 30,
              "Defense": 32,
              "SpAttack": 50,
              "SpDefense": 52,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/284.png",
            "name": {
              "english": "Masquerain",
              "japanese": "アメモース",
              "chinese": "雨翅蛾",
              "french": "Maskadra"
            },
            "type": [
              "Bug",
              "Flying"
            ],
            "base": {
              "HP": 70,
              "Attack": 60,
              "Defense": 62,
              "SpAttack": 100,
              "SpDefense": 82,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/285.png",
            "name": {
              "english": "Shroomish",
              "japanese": "キノココ",
              "chinese": "蘑蘑菇",
              "french": "Balignon"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 60,
              "Attack": 40,
              "Defense": 60,
              "SpAttack": 40,
              "SpDefense": 60,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/286.png",
            "name": {
              "english": "Breloom",
              "japanese": "キノガッサ",
              "chinese": "斗笠菇",
              "french": "Chapignon"
            },
            "type": [
              "Grass",
              "Fighting"
            ],
            "base": {
              "HP": 60,
              "Attack": 130,
              "Defense": 80,
              "SpAttack": 60,
              "SpDefense": 60,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/287.png",
            "name": {
              "english": "Slakoth",
              "japanese": "ナマケロ",
              "chinese": "懒人獭",
              "french": "Parecool"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 60,
              "Attack": 60,
              "Defense": 60,
              "SpAttack": 35,
              "SpDefense": 35,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/288.png",
            "name": {
              "english": "Vigoroth",
              "japanese": "ヤルキモノ",
              "chinese": "过动猿",
              "french": "Vigoroth"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 80,
              "Attack": 80,
              "Defense": 80,
              "SpAttack": 55,
              "SpDefense": 55,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/289.png",
            "name": {
              "english": "Slaking",
              "japanese": "ケッキング",
              "chinese": "请假王",
              "french": "Monaflèmit"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 150,
              "Attack": 160,
              "Defense": 100,
              "SpAttack": 95,
              "SpDefense": 65,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/290.png",
            "name": {
              "english": "Nincada",
              "japanese": "ツチニン",
              "chinese": "土居忍士",
              "french": "Ningale"
            },
            "type": [
              "Bug",
              "Ground"
            ],
            "base": {
              "HP": 31,
              "Attack": 45,
              "Defense": 90,
              "SpAttack": 30,
              "SpDefense": 30,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/291.png",
            "name": {
              "english": "Ninjask",
              "japanese": "テッカニン",
              "chinese": "铁面忍者",
              "french": "Ninjask"
            },
            "type": [
              "Bug",
              "Flying"
            ],
            "base": {
              "HP": 61,
              "Attack": 90,
              "Defense": 45,
              "SpAttack": 50,
              "SpDefense": 50,
              "Speed": 160
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/292.png",
            "name": {
              "english": "Shedinja",
              "japanese": "ヌケニン",
              "chinese": "脱壳忍者",
              "french": "Munja"
            },
            "type": [
              "Bug",
              "Ghost"
            ],
            "base": {
              "HP": 1,
              "Attack": 90,
              "Defense": 45,
              "SpAttack": 30,
              "SpDefense": 30,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/293.png",
            "name": {
              "english": "Whismur",
              "japanese": "ゴニョニョ",
              "chinese": "咕妞妞",
              "french": "Chuchmur"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 64,
              "Attack": 51,
              "Defense": 23,
              "SpAttack": 51,
              "SpDefense": 23,
              "Speed": 28
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/294.png",
            "name": {
              "english": "Loudred",
              "japanese": "ドゴーム",
              "chinese": "吼爆弹",
              "french": "Ramboum"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 84,
              "Attack": 71,
              "Defense": 43,
              "SpAttack": 71,
              "SpDefense": 43,
              "Speed": 48
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/295.png",
            "name": {
              "english": "Exploud",
              "japanese": "バクオング",
              "chinese": "爆音怪",
              "french": "Brouhabam"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 104,
              "Attack": 91,
              "Defense": 63,
              "SpAttack": 91,
              "SpDefense": 73,
              "Speed": 68
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/296.png",
            "name": {
              "english": "Makuhita",
              "japanese": "マクノシタ",
              "chinese": "幕下力士",
              "french": "Makuhita"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 72,
              "Attack": 60,
              "Defense": 30,
              "SpAttack": 20,
              "SpDefense": 30,
              "Speed": 25
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/297.png",
            "name": {
              "english": "Hariyama",
              "japanese": "ハリテヤマ",
              "chinese": "铁掌力士",
              "french": "Hariyama"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 144,
              "Attack": 120,
              "Defense": 60,
              "SpAttack": 40,
              "SpDefense": 60,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/298.png",
            "name": {
              "english": "Azurill",
              "japanese": "ルリリ",
              "chinese": "露力丽",
              "french": "Azurill"
            },
            "type": [
              "Normal",
              "Fairy"
            ],
            "base": {
              "HP": 50,
              "Attack": 20,
              "Defense": 40,
              "SpAttack": 20,
              "SpDefense": 40,
              "Speed": 20
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/299.png",
            "name": {
              "english": "Nosepass",
              "japanese": "ノズパス",
              "chinese": "朝北鼻",
              "french": "Tarinor"
            },
            "type": [
              "Rock"
            ],
            "base": {
              "HP": 30,
              "Attack": 45,
              "Defense": 135,
              "SpAttack": 45,
              "SpDefense": 90,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/300.png",
            "name": {
              "english": "Skitty",
              "japanese": "エネコ",
              "chinese": "向尾喵",
              "french": "Skitty"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 50,
              "Attack": 45,
              "Defense": 45,
              "SpAttack": 35,
              "SpDefense": 35,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/301.png",
            "name": {
              "english": "Delcatty",
              "japanese": "エネコロロ",
              "chinese": "优雅猫",
              "french": "Delcatty"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 70,
              "Attack": 65,
              "Defense": 65,
              "SpAttack": 55,
              "SpDefense": 55,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/302.png",
            "name": {
              "english": "Sableye",
              "japanese": "ヤミラミ",
              "chinese": "勾魂眼",
              "french": "Ténéfix"
            },
            "type": [
              "Dark",
              "Ghost"
            ],
            "base": {
              "HP": 50,
              "Attack": 75,
              "Defense": 75,
              "SpAttack": 65,
              "SpDefense": 65,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/303.png",
            "name": {
              "english": "Mawile",
              "japanese": "クチート",
              "chinese": "大嘴娃",
              "french": "Mysdibule"
            },
            "type": [
              "Steel",
              "Fairy"
            ],
            "base": {
              "HP": 50,
              "Attack": 85,
              "Defense": 85,
              "SpAttack": 55,
              "SpDefense": 55,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/304.png",
            "name": {
              "english": "Aron",
              "japanese": "ココドラ",
              "chinese": "可可多拉",
              "french": "Galekid"
            },
            "type": [
              "Steel",
              "Rock"
            ],
            "base": {
              "HP": 50,
              "Attack": 70,
              "Defense": 100,
              "SpAttack": 40,
              "SpDefense": 40,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/305.png",
            "name": {
              "english": "Lairon",
              "japanese": "コドラ",
              "chinese": "可多拉",
              "french": "Galegon"
            },
            "type": [
              "Steel",
              "Rock"
            ],
            "base": {
              "HP": 60,
              "Attack": 90,
              "Defense": 140,
              "SpAttack": 50,
              "SpDefense": 50,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/306.png",
            "name": {
              "english": "Aggron",
              "japanese": "ボスゴドラ",
              "chinese": "波士可多拉",
              "french": "Galeking"
            },
            "type": [
              "Steel",
              "Rock"
            ],
            "base": {
              "HP": 70,
              "Attack": 110,
              "Defense": 180,
              "SpAttack": 60,
              "SpDefense": 60,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/307.png",
            "name": {
              "english": "Meditite",
              "japanese": "アサナン",
              "chinese": "玛沙那",
              "french": "Méditikka"
            },
            "type": [
              "Fighting",
              "Psychic"
            ],
            "base": {
              "HP": 30,
              "Attack": 40,
              "Defense": 55,
              "SpAttack": 40,
              "SpDefense": 55,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/308.png",
            "name": {
              "english": "Medicham",
              "japanese": "チャーレム",
              "chinese": "恰雷姆",
              "french": "Charmina"
            },
            "type": [
              "Fighting",
              "Psychic"
            ],
            "base": {
              "HP": 60,
              "Attack": 60,
              "Defense": 75,
              "SpAttack": 60,
              "SpDefense": 75,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/309.png",
            "name": {
              "english": "Electrike",
              "japanese": "ラクライ",
              "chinese": "落雷兽",
              "french": "Dynavolt"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 40,
              "Attack": 45,
              "Defense": 40,
              "SpAttack": 65,
              "SpDefense": 40,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/310.png",
            "name": {
              "english": "Manectric",
              "japanese": "ライボルト",
              "chinese": "雷电兽",
              "french": "Élecsprint"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 70,
              "Attack": 75,
              "Defense": 60,
              "SpAttack": 105,
              "SpDefense": 60,
              "Speed": 105
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/311.png",
            "name": {
              "english": "Plusle",
              "japanese": "プラスル",
              "chinese": "正电拍拍",
              "french": "Posipi"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 60,
              "Attack": 50,
              "Defense": 40,
              "SpAttack": 85,
              "SpDefense": 75,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/312.png",
            "name": {
              "english": "Minun",
              "japanese": "マイナン",
              "chinese": "负电拍拍",
              "french": "Négapi"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 60,
              "Attack": 40,
              "Defense": 50,
              "SpAttack": 75,
              "SpDefense": 85,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/313.png",
            "name": {
              "english": "Volbeat",
              "japanese": "バルビート",
              "chinese": "电萤虫",
              "french": "Muciole"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 65,
              "Attack": 73,
              "Defense": 75,
              "SpAttack": 47,
              "SpDefense": 85,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/314.png",
            "name": {
              "english": "Illumise",
              "japanese": "イルミーゼ",
              "chinese": "甜甜萤",
              "french": "Lumivole"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 65,
              "Attack": 47,
              "Defense": 75,
              "SpAttack": 73,
              "SpDefense": 85,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/315.png",
            "name": {
              "english": "Roselia",
              "japanese": "ロゼリア",
              "chinese": "毒蔷薇",
              "french": "Rosélia"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 50,
              "Attack": 60,
              "Defense": 45,
              "SpAttack": 100,
              "SpDefense": 80,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/316.png",
            "name": {
              "english": "Gulpin",
              "japanese": "ゴクリン",
              "chinese": "溶食兽",
              "french": "Gloupti"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 70,
              "Attack": 43,
              "Defense": 53,
              "SpAttack": 43,
              "SpDefense": 53,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/317.png",
            "name": {
              "english": "Swalot",
              "japanese": "マルノーム",
              "chinese": "吞食兽",
              "french": "Avaltout"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 100,
              "Attack": 73,
              "Defense": 83,
              "SpAttack": 73,
              "SpDefense": 83,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/318.png",
            "name": {
              "english": "Carvanha",
              "japanese": "キバニア",
              "chinese": "利牙鱼",
              "french": "Carvanha"
            },
            "type": [
              "Water",
              "Dark"
            ],
            "base": {
              "HP": 45,
              "Attack": 90,
              "Defense": 20,
              "SpAttack": 65,
              "SpDefense": 20,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/319.png",
            "name": {
              "english": "Sharpedo",
              "japanese": "サメハダー",
              "chinese": "巨牙鲨",
              "french": "Sharpedo"
            },
            "type": [
              "Water",
              "Dark"
            ],
            "base": {
              "HP": 70,
              "Attack": 120,
              "Defense": 40,
              "SpAttack": 95,
              "SpDefense": 40,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/320.png",
            "name": {
              "english": "Wailmer",
              "japanese": "ホエルコ",
              "chinese": "吼吼鲸",
              "french": "Wailmer"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 130,
              "Attack": 70,
              "Defense": 35,
              "SpAttack": 70,
              "SpDefense": 35,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/321.png",
            "name": {
              "english": "Wailord",
              "japanese": "ホエルオー",
              "chinese": "吼鲸王",
              "french": "Wailord"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 170,
              "Attack": 90,
              "Defense": 45,
              "SpAttack": 90,
              "SpDefense": 45,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/322.png",
            "name": {
              "english": "Numel",
              "japanese": "ドンメル",
              "chinese": "呆火驼",
              "french": "Chamallot"
            },
            "type": [
              "Fire",
              "Ground"
            ],
            "base": {
              "HP": 60,
              "Attack": 60,
              "Defense": 40,
              "SpAttack": 65,
              "SpDefense": 45,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/323.png",
            "name": {
              "english": "Camerupt",
              "japanese": "バクーダ",
              "chinese": "喷火驼",
              "french": "Camérupt"
            },
            "type": [
              "Fire",
              "Ground"
            ],
            "base": {
              "HP": 70,
              "Attack": 100,
              "Defense": 70,
              "SpAttack": 105,
              "SpDefense": 75,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/324.png",
            "name": {
              "english": "Torkoal",
              "japanese": "コータス",
              "chinese": "煤炭龟",
              "french": "Chartor"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 70,
              "Attack": 85,
              "Defense": 140,
              "SpAttack": 85,
              "SpDefense": 70,
              "Speed": 20
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/325.png",
            "name": {
              "english": "Spoink",
              "japanese": "バネブー",
              "chinese": "跳跳猪",
              "french": "Spoink"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 60,
              "Attack": 25,
              "Defense": 35,
              "SpAttack": 70,
              "SpDefense": 80,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/326.png",
            "name": {
              "english": "Grumpig",
              "japanese": "ブーピッグ",
              "chinese": "噗噗猪",
              "french": "Groret"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 80,
              "Attack": 45,
              "Defense": 65,
              "SpAttack": 90,
              "SpDefense": 110,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/327.png",
            "name": {
              "english": "Spinda",
              "japanese": "パッチール",
              "chinese": "晃晃斑",
              "french": "Spinda"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 60,
              "Attack": 60,
              "Defense": 60,
              "SpAttack": 60,
              "SpDefense": 60,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/328.png",
            "name": {
              "english": "Trapinch",
              "japanese": "ナックラー",
              "chinese": "大颚蚁",
              "french": "Kraknoix"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 45,
              "Attack": 100,
              "Defense": 45,
              "SpAttack": 45,
              "SpDefense": 45,
              "Speed": 10
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/329.png",
            "name": {
              "english": "Vibrava",
              "japanese": "ビブラーバ",
              "chinese": "超音波幼虫",
              "french": "Vibraninf"
            },
            "type": [
              "Ground",
              "Dragon"
            ],
            "base": {
              "HP": 50,
              "Attack": 70,
              "Defense": 50,
              "SpAttack": 50,
              "SpDefense": 50,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/330.png",
            "name": {
              "english": "Flygon",
              "japanese": "フライゴン",
              "chinese": "沙漠蜻蜓",
              "french": "Libégon"
            },
            "type": [
              "Ground",
              "Dragon"
            ],
            "base": {
              "HP": 80,
              "Attack": 100,
              "Defense": 80,
              "SpAttack": 80,
              "SpDefense": 80,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/331.png",
            "name": {
              "english": "Cacnea",
              "japanese": "サボネア",
              "chinese": "刺球仙人掌",
              "french": "Cacnea"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 50,
              "Attack": 85,
              "Defense": 40,
              "SpAttack": 85,
              "SpDefense": 40,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/332.png",
            "name": {
              "english": "Cacturne",
              "japanese": "ノクタス",
              "chinese": "梦歌仙人掌",
              "french": "Cacturne"
            },
            "type": [
              "Grass",
              "Dark"
            ],
            "base": {
              "HP": 70,
              "Attack": 115,
              "Defense": 60,
              "SpAttack": 115,
              "SpDefense": 60,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/333.png",
            "name": {
              "english": "Swablu",
              "japanese": "チルット",
              "chinese": "青绵鸟",
              "french": "Tylton"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 45,
              "Attack": 40,
              "Defense": 60,
              "SpAttack": 40,
              "SpDefense": 75,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/334.png",
            "name": {
              "english": "Altaria",
              "japanese": "チルタリス",
              "chinese": "七夕青鸟",
              "french": "Altaria"
            },
            "type": [
              "Dragon",
              "Flying"
            ],
            "base": {
              "HP": 75,
              "Attack": 70,
              "Defense": 90,
              "SpAttack": 70,
              "SpDefense": 105,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/335.png",
            "name": {
              "english": "Zangoose",
              "japanese": "ザングース",
              "chinese": "猫鼬斩",
              "french": "Mangriff"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 73,
              "Attack": 115,
              "Defense": 60,
              "SpAttack": 60,
              "SpDefense": 60,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/336.png",
            "name": {
              "english": "Seviper",
              "japanese": "ハブネーク",
              "chinese": "饭匙蛇",
              "french": "Séviper"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 73,
              "Attack": 100,
              "Defense": 60,
              "SpAttack": 100,
              "SpDefense": 60,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/337.png",
            "name": {
              "english": "Lunatone",
              "japanese": "ルナトーン",
              "chinese": "月石",
              "french": "Séléroc"
            },
            "type": [
              "Rock",
              "Psychic"
            ],
            "base": {
              "HP": 90,
              "Attack": 55,
              "Defense": 65,
              "SpAttack": 95,
              "SpDefense": 85,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/338.png",
            "name": {
              "english": "Solrock",
              "japanese": "ソルロック",
              "chinese": "太阳岩",
              "french": "Solaroc"
            },
            "type": [
              "Rock",
              "Psychic"
            ],
            "base": {
              "HP": 90,
              "Attack": 95,
              "Defense": 85,
              "SpAttack": 55,
              "SpDefense": 65,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/339.png",
            "name": {
              "english": "Barboach",
              "japanese": "ドジョッチ",
              "chinese": "泥泥鳅",
              "french": "Barloche"
            },
            "type": [
              "Water",
              "Ground"
            ],
            "base": {
              "HP": 50,
              "Attack": 48,
              "Defense": 43,
              "SpAttack": 46,
              "SpDefense": 41,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/340.png",
            "name": {
              "english": "Whiscash",
              "japanese": "ナマズン",
              "chinese": "鲶鱼王",
              "french": "Barbicha"
            },
            "type": [
              "Water",
              "Ground"
            ],
            "base": {
              "HP": 110,
              "Attack": 78,
              "Defense": 73,
              "SpAttack": 76,
              "SpDefense": 71,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/341.png",
            "name": {
              "english": "Corphish",
              "japanese": "ヘイガニ",
              "chinese": "龙虾小兵",
              "french": "Écrapince"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 43,
              "Attack": 80,
              "Defense": 65,
              "SpAttack": 50,
              "SpDefense": 35,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/342.png",
            "name": {
              "english": "Crawdaunt",
              "japanese": "シザリガー",
              "chinese": "铁螯龙虾",
              "french": "Colhomard"
            },
            "type": [
              "Water",
              "Dark"
            ],
            "base": {
              "HP": 63,
              "Attack": 120,
              "Defense": 85,
              "SpAttack": 90,
              "SpDefense": 55,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/343.png",
            "name": {
              "english": "Baltoy",
              "japanese": "ヤジロン",
              "chinese": "天秤偶",
              "french": "Balbuto"
            },
            "type": [
              "Ground",
              "Psychic"
            ],
            "base": {
              "HP": 40,
              "Attack": 40,
              "Defense": 55,
              "SpAttack": 40,
              "SpDefense": 70,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/344.png",
            "name": {
              "english": "Claydol",
              "japanese": "ネンドール",
              "chinese": "念力土偶",
              "french": "Kaorine"
            },
            "type": [
              "Ground",
              "Psychic"
            ],
            "base": {
              "HP": 60,
              "Attack": 70,
              "Defense": 105,
              "SpAttack": 70,
              "SpDefense": 120,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/345.png",
            "name": {
              "english": "Lileep",
              "japanese": "リリーラ",
              "chinese": "触手百合",
              "french": "Lilia"
            },
            "type": [
              "Rock",
              "Grass"
            ],
            "base": {
              "HP": 66,
              "Attack": 41,
              "Defense": 77,
              "SpAttack": 61,
              "SpDefense": 87,
              "Speed": 23
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/346.png",
            "name": {
              "english": "Cradily",
              "japanese": "ユレイドル",
              "chinese": "摇篮百合",
              "french": "Vacilys"
            },
            "type": [
              "Rock",
              "Grass"
            ],
            "base": {
              "HP": 86,
              "Attack": 81,
              "Defense": 97,
              "SpAttack": 81,
              "SpDefense": 107,
              "Speed": 43
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/347.png",
            "name": {
              "english": "Anorith",
              "japanese": "アノプス",
              "chinese": "太古羽虫",
              "french": "Anorith"
            },
            "type": [
              "Rock",
              "Bug"
            ],
            "base": {
              "HP": 45,
              "Attack": 95,
              "Defense": 50,
              "SpAttack": 40,
              "SpDefense": 50,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/348.png",
            "name": {
              "english": "Armaldo",
              "japanese": "アーマルド",
              "chinese": "太古盔甲",
              "french": "Armaldo"
            },
            "type": [
              "Rock",
              "Bug"
            ],
            "base": {
              "HP": 75,
              "Attack": 125,
              "Defense": 100,
              "SpAttack": 70,
              "SpDefense": 80,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/349.png",
            "name": {
              "english": "Feebas",
              "japanese": "ヒンバス",
              "chinese": "丑丑鱼",
              "french": "Barpau"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 20,
              "Attack": 15,
              "Defense": 20,
              "SpAttack": 10,
              "SpDefense": 55,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/350.png",
            "name": {
              "english": "Milotic",
              "japanese": "ミロカロス",
              "chinese": "美纳斯",
              "french": "Milobellus"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 95,
              "Attack": 60,
              "Defense": 79,
              "SpAttack": 100,
              "SpDefense": 125,
              "Speed": 81
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/351.png",
            "name": {
              "english": "Castform",
              "japanese": "ポワルン",
              "chinese": "飘浮泡泡",
              "french": "Morphéo"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 70,
              "Attack": 70,
              "Defense": 70,
              "SpAttack": 70,
              "SpDefense": 70,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/352.png",
            "name": {
              "english": "Kecleon",
              "japanese": "カクレオン",
              "chinese": "变隐龙",
              "french": "Kecleon"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 60,
              "Attack": 90,
              "Defense": 70,
              "SpAttack": 60,
              "SpDefense": 120,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/353.png",
            "name": {
              "english": "Shuppet",
              "japanese": "カゲボウズ",
              "chinese": "怨影娃娃",
              "french": "Polichombr"
            },
            "type": [
              "Ghost"
            ],
            "base": {
              "HP": 44,
              "Attack": 75,
              "Defense": 35,
              "SpAttack": 63,
              "SpDefense": 33,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/354.png",
            "name": {
              "english": "Banette",
              "japanese": "ジュペッタ",
              "chinese": "诅咒娃娃",
              "french": "Branette"
            },
            "type": [
              "Ghost"
            ],
            "base": {
              "HP": 64,
              "Attack": 115,
              "Defense": 65,
              "SpAttack": 83,
              "SpDefense": 63,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/355.png",
            "name": {
              "english": "Duskull",
              "japanese": "ヨマワル",
              "chinese": "夜巡灵",
              "french": "Skelénox"
            },
            "type": [
              "Ghost"
            ],
            "base": {
              "HP": 20,
              "Attack": 40,
              "Defense": 90,
              "SpAttack": 30,
              "SpDefense": 90,
              "Speed": 25
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/356.png",
            "name": {
              "english": "Dusclops",
              "japanese": "サマヨール",
              "chinese": "彷徨夜灵",
              "french": "Téraclope"
            },
            "type": [
              "Ghost"
            ],
            "base": {
              "HP": 40,
              "Attack": 70,
              "Defense": 130,
              "SpAttack": 60,
              "SpDefense": 130,
              "Speed": 25
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/357.png",
            "name": {
              "english": "Tropius",
              "japanese": "トロピウス",
              "chinese": "热带龙",
              "french": "Tropius"
            },
            "type": [
              "Grass",
              "Flying"
            ],
            "base": {
              "HP": 99,
              "Attack": 68,
              "Defense": 83,
              "SpAttack": 72,
              "SpDefense": 87,
              "Speed": 51
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/358.png",
            "name": {
              "english": "Chimecho",
              "japanese": "チリーン",
              "chinese": "风铃铃",
              "french": "Éoko"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 75,
              "Attack": 50,
              "Defense": 80,
              "SpAttack": 95,
              "SpDefense": 90,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/359.png",
            "name": {
              "english": "Absol",
              "japanese": "アブソル",
              "chinese": "阿勃梭鲁",
              "french": "Absol"
            },
            "type": [
              "Dark"
            ],
            "base": {
              "HP": 65,
              "Attack": 130,
              "Defense": 60,
              "SpAttack": 75,
              "SpDefense": 60,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/360.png",
            "name": {
              "english": "Wynaut",
              "japanese": "ソーナノ",
              "chinese": "小果然",
              "french": "Okéoké"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 95,
              "Attack": 23,
              "Defense": 48,
              "SpAttack": 23,
              "SpDefense": 48,
              "Speed": 23
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/361.png",
            "name": {
              "english": "Snorunt",
              "japanese": "ユキワラシ",
              "chinese": "雪童子",
              "french": "Stalgamin"
            },
            "type": [
              "Ice"
            ],
            "base": {
              "HP": 50,
              "Attack": 50,
              "Defense": 50,
              "SpAttack": 50,
              "SpDefense": 50,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/362.png",
            "name": {
              "english": "Glalie",
              "japanese": "オニゴーリ",
              "chinese": "冰鬼护",
              "french": "Oniglali"
            },
            "type": [
              "Ice"
            ],
            "base": {
              "HP": 80,
              "Attack": 80,
              "Defense": 80,
              "SpAttack": 80,
              "SpDefense": 80,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/363.png",
            "name": {
              "english": "Spheal",
              "japanese": "タマザラシ",
              "chinese": "海豹球",
              "french": "Obalie"
            },
            "type": [
              "Ice",
              "Water"
            ],
            "base": {
              "HP": 70,
              "Attack": 40,
              "Defense": 50,
              "SpAttack": 55,
              "SpDefense": 50,
              "Speed": 25
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/364.png",
            "name": {
              "english": "Sealeo",
              "japanese": "トドグラー",
              "chinese": "海魔狮",
              "french": "Phogleur"
            },
            "type": [
              "Ice",
              "Water"
            ],
            "base": {
              "HP": 90,
              "Attack": 60,
              "Defense": 70,
              "SpAttack": 75,
              "SpDefense": 70,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/365.png",
            "name": {
              "english": "Walrein",
              "japanese": "トドゼルガ",
              "chinese": "帝牙海狮",
              "french": "Kaimorse"
            },
            "type": [
              "Ice",
              "Water"
            ],
            "base": {
              "HP": 110,
              "Attack": 80,
              "Defense": 90,
              "SpAttack": 95,
              "SpDefense": 90,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/366.png",
            "name": {
              "english": "Clamperl",
              "japanese": "パールル",
              "chinese": "珍珠贝",
              "french": "Coquiperl"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 35,
              "Attack": 64,
              "Defense": 85,
              "SpAttack": 74,
              "SpDefense": 55,
              "Speed": 32
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/367.png",
            "name": {
              "english": "Huntail",
              "japanese": "ハンテール",
              "chinese": "猎斑鱼",
              "french": "Serpang"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 55,
              "Attack": 104,
              "Defense": 105,
              "SpAttack": 94,
              "SpDefense": 75,
              "Speed": 52
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/368.png",
            "name": {
              "english": "Gorebyss",
              "japanese": "サクラビス",
              "chinese": "樱花鱼",
              "french": "Rosabyss"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 55,
              "Attack": 84,
              "Defense": 105,
              "SpAttack": 114,
              "SpDefense": 75,
              "Speed": 52
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/369.png",
            "name": {
              "english": "Relicanth",
              "japanese": "ジーランス",
              "chinese": "古空棘鱼",
              "french": "Relicanth"
            },
            "type": [
              "Water",
              "Rock"
            ],
            "base": {
              "HP": 100,
              "Attack": 90,
              "Defense": 130,
              "SpAttack": 45,
              "SpDefense": 65,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/370.png",
            "name": {
              "english": "Luvdisc",
              "japanese": "ラブカス",
              "chinese": "爱心鱼",
              "french": "Lovdisc"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 43,
              "Attack": 30,
              "Defense": 55,
              "SpAttack": 40,
              "SpDefense": 65,
              "Speed": 97
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/371.png",
            "name": {
              "english": "Bagon",
              "japanese": "タツベイ",
              "chinese": "宝贝龙",
              "french": "Draby"
            },
            "type": [
              "Dragon"
            ],
            "base": {
              "HP": 45,
              "Attack": 75,
              "Defense": 60,
              "SpAttack": 40,
              "SpDefense": 30,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/372.png",
            "name": {
              "english": "Shelgon",
              "japanese": "コモルー",
              "chinese": "甲壳龙",
              "french": "Drackhaus"
            },
            "type": [
              "Dragon"
            ],
            "base": {
              "HP": 65,
              "Attack": 95,
              "Defense": 100,
              "SpAttack": 60,
              "SpDefense": 50,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/373.png",
            "name": {
              "english": "Salamence",
              "japanese": "ボーマンダ",
              "chinese": "暴飞龙",
              "french": "Drattak"
            },
            "type": [
              "Dragon",
              "Flying"
            ],
            "base": {
              "HP": 95,
              "Attack": 135,
              "Defense": 80,
              "SpAttack": 110,
              "SpDefense": 80,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/374.png",
            "name": {
              "english": "Beldum",
              "japanese": "ダンバル",
              "chinese": "铁哑铃",
              "french": "Terhal"
            },
            "type": [
              "Steel",
              "Psychic"
            ],
            "base": {
              "HP": 40,
              "Attack": 55,
              "Defense": 80,
              "SpAttack": 35,
              "SpDefense": 60,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/375.png",
            "name": {
              "english": "Metang",
              "japanese": "メタング",
              "chinese": "金属怪",
              "french": "Métang"
            },
            "type": [
              "Steel",
              "Psychic"
            ],
            "base": {
              "HP": 60,
              "Attack": 75,
              "Defense": 100,
              "SpAttack": 55,
              "SpDefense": 80,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/376.png",
            "name": {
              "english": "Metagross",
              "japanese": "メタグロス",
              "chinese": "巨金怪",
              "french": "Métalosse"
            },
            "type": [
              "Steel",
              "Psychic"
            ],
            "base": {
              "HP": 80,
              "Attack": 135,
              "Defense": 130,
              "SpAttack": 95,
              "SpDefense": 90,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/377.png",
            "name": {
              "english": "Regirock",
              "japanese": "レジロック",
              "chinese": "雷吉洛克",
              "french": "Regirock"
            },
            "type": [
              "Rock"
            ],
            "base": {
              "HP": 80,
              "Attack": 100,
              "Defense": 200,
              "SpAttack": 50,
              "SpDefense": 100,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/378.png",
            "name": {
              "english": "Regice",
              "japanese": "レジアイス",
              "chinese": "雷吉艾斯",
              "french": "Regice"
            },
            "type": [
              "Ice"
            ],
            "base": {
              "HP": 80,
              "Attack": 50,
              "Defense": 100,
              "SpAttack": 100,
              "SpDefense": 200,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/379.png",
            "name": {
              "english": "Registeel",
              "japanese": "レジスチル",
              "chinese": "雷吉斯奇鲁",
              "french": "Registeel"
            },
            "type": [
              "Steel"
            ],
            "base": {
              "HP": 80,
              "Attack": 75,
              "Defense": 150,
              "SpAttack": 75,
              "SpDefense": 150,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/380.png",
            "name": {
              "english": "Latias",
              "japanese": "ラティアス",
              "chinese": "拉帝亚斯",
              "french": "Latias"
            },
            "type": [
              "Dragon",
              "Psychic"
            ],
            "base": {
              "HP": 80,
              "Attack": 80,
              "Defense": 90,
              "SpAttack": 110,
              "SpDefense": 130,
              "Speed": 110
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/381.png",
            "name": {
              "english": "Latios",
              "japanese": "ラティオス",
              "chinese": "拉帝欧斯",
              "french": "Latios"
            },
            "type": [
              "Dragon",
              "Psychic"
            ],
            "base": {
              "HP": 80,
              "Attack": 90,
              "Defense": 80,
              "SpAttack": 130,
              "SpDefense": 110,
              "Speed": 110
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/382.png",
            "name": {
              "english": "Kyogre",
              "japanese": "カイオーガ",
              "chinese": "盖欧卡",
              "french": "Kyogre"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 100,
              "Attack": 100,
              "Defense": 90,
              "SpAttack": 150,
              "SpDefense": 140,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/383.png",
            "name": {
              "english": "Groudon",
              "japanese": "グラードン",
              "chinese": "固拉多",
              "french": "Groudon"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 100,
              "Attack": 150,
              "Defense": 140,
              "SpAttack": 100,
              "SpDefense": 90,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/384.png",
            "name": {
              "english": "Rayquaza",
              "japanese": "レックウザ",
              "chinese": "烈空坐",
              "french": "Rayquaza"
            },
            "type": [
              "Dragon",
              "Flying"
            ],
            "base": {
              "HP": 105,
              "Attack": 150,
              "Defense": 90,
              "SpAttack": 150,
              "SpDefense": 90,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/385.png",
            "name": {
              "english": "Jirachi",
              "japanese": "ジラーチ",
              "chinese": "基拉祈",
              "french": "Jirachi"
            },
            "type": [
              "Steel",
              "Psychic"
            ],
            "base": {
              "HP": 100,
              "Attack": 100,
              "Defense": 100,
              "SpAttack": 100,
              "SpDefense": 100,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/386.png",
            "name": {
              "english": "Deoxys",
              "japanese": "デオキシス",
              "chinese": "代欧奇希斯",
              "french": "Deoxys"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 50,
              "Attack": 150,
              "Defense": 50,
              "SpAttack": 150,
              "SpDefense": 50,
              "Speed": 150
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/387.png",
            "name": {
              "english": "Turtwig",
              "japanese": "ナエトル",
              "chinese": "草苗龟",
              "french": "Tortipouss"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 55,
              "Attack": 68,
              "Defense": 64,
              "SpAttack": 45,
              "SpDefense": 55,
              "Speed": 31
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/388.png",
            "name": {
              "english": "Grotle",
              "japanese": "ハヤシガメ",
              "chinese": "树林龟",
              "french": "Boskara"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 75,
              "Attack": 89,
              "Defense": 85,
              "SpAttack": 55,
              "SpDefense": 65,
              "Speed": 36
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/389.png",
            "name": {
              "english": "Torterra",
              "japanese": "ドダイトス",
              "chinese": "土台龟",
              "french": "Torterra"
            },
            "type": [
              "Grass",
              "Ground"
            ],
            "base": {
              "HP": 95,
              "Attack": 109,
              "Defense": 105,
              "SpAttack": 75,
              "SpDefense": 85,
              "Speed": 56
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/390.png",
            "name": {
              "english": "Chimchar",
              "japanese": "ヒコザル",
              "chinese": "小火焰猴",
              "french": "Ouisticram"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 44,
              "Attack": 58,
              "Defense": 44,
              "SpAttack": 58,
              "SpDefense": 44,
              "Speed": 61
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/391.png",
            "name": {
              "english": "Monferno",
              "japanese": "モウカザル",
              "chinese": "猛火猴",
              "french": "Chimpenfeu"
            },
            "type": [
              "Fire",
              "Fighting"
            ],
            "base": {
              "HP": 64,
              "Attack": 78,
              "Defense": 52,
              "SpAttack": 78,
              "SpDefense": 52,
              "Speed": 81
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/392.png",
            "name": {
              "english": "Infernape",
              "japanese": "ゴウカザル",
              "chinese": "烈焰猴",
              "french": "Simiabraz"
            },
            "type": [
              "Fire",
              "Fighting"
            ],
            "base": {
              "HP": 76,
              "Attack": 104,
              "Defense": 71,
              "SpAttack": 104,
              "SpDefense": 71,
              "Speed": 108
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/393.png",
            "name": {
              "english": "Piplup",
              "japanese": "ポッチャマ",
              "chinese": "波加曼",
              "french": "Tiplouf"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 53,
              "Attack": 51,
              "Defense": 53,
              "SpAttack": 61,
              "SpDefense": 56,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/394.png",
            "name": {
              "english": "Prinplup",
              "japanese": "ポッタイシ",
              "chinese": "波皇子",
              "french": "Prinplouf"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 64,
              "Attack": 66,
              "Defense": 68,
              "SpAttack": 81,
              "SpDefense": 76,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/395.png",
            "name": {
              "english": "Empoleon",
              "japanese": "エンペルト",
              "chinese": "帝王拿波",
              "french": "Pingoléon"
            },
            "type": [
              "Water",
              "Steel"
            ],
            "base": {
              "HP": 84,
              "Attack": 86,
              "Defense": 88,
              "SpAttack": 111,
              "SpDefense": 101,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/396.png",
            "name": {
              "english": "Starly",
              "japanese": "ムックル",
              "chinese": "姆克儿",
              "french": "Étourmi"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 40,
              "Attack": 55,
              "Defense": 30,
              "SpAttack": 30,
              "SpDefense": 30,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/397.png",
            "name": {
              "english": "Staravia",
              "japanese": "ムクバード",
              "chinese": "姆克鸟",
              "french": "Étourvol"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 55,
              "Attack": 75,
              "Defense": 50,
              "SpAttack": 40,
              "SpDefense": 40,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/398.png",
            "name": {
              "english": "Staraptor",
              "japanese": "ムクホーク",
              "chinese": "姆克鹰",
              "french": "Étouraptor"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 85,
              "Attack": 120,
              "Defense": 70,
              "SpAttack": 50,
              "SpDefense": 60,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/399.png",
            "name": {
              "english": "Bidoof",
              "japanese": "ビッパ",
              "chinese": "大牙狸",
              "french": "Keunotor"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 59,
              "Attack": 45,
              "Defense": 40,
              "SpAttack": 35,
              "SpDefense": 40,
              "Speed": 31
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/400.png",
            "name": {
              "english": "Bibarel",
              "japanese": "ビーダル",
              "chinese": "大尾狸",
              "french": "Castorno"
            },
            "type": [
              "Normal",
              "Water"
            ],
            "base": {
              "HP": 79,
              "Attack": 85,
              "Defense": 60,
              "SpAttack": 55,
              "SpDefense": 60,
              "Speed": 71
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/401.png",
            "name": {
              "english": "Kricketot",
              "japanese": "コロボーシ",
              "chinese": "圆法师",
              "french": "Crikzik"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 37,
              "Attack": 25,
              "Defense": 41,
              "SpAttack": 25,
              "SpDefense": 41,
              "Speed": 25
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/402.png",
            "name": {
              "english": "Kricketune",
              "japanese": "コロトック",
              "chinese": "音箱蟀",
              "french": "Mélokrik"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 77,
              "Attack": 85,
              "Defense": 51,
              "SpAttack": 55,
              "SpDefense": 51,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/403.png",
            "name": {
              "english": "Shinx",
              "japanese": "コリンク",
              "chinese": "小猫怪",
              "french": "Lixy"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 45,
              "Attack": 65,
              "Defense": 34,
              "SpAttack": 40,
              "SpDefense": 34,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/404.png",
            "name": {
              "english": "Luxio",
              "japanese": "ルクシオ",
              "chinese": "勒克猫",
              "french": "Luxio"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 60,
              "Attack": 85,
              "Defense": 49,
              "SpAttack": 60,
              "SpDefense": 49,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/405.png",
            "name": {
              "english": "Luxray",
              "japanese": "レントラー",
              "chinese": "伦琴猫",
              "french": "Luxray"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 80,
              "Attack": 120,
              "Defense": 79,
              "SpAttack": 95,
              "SpDefense": 79,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/406.png",
            "name": {
              "english": "Budew",
              "japanese": "スボミー",
              "chinese": "含羞苞",
              "french": "Rozbouton"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 40,
              "Attack": 30,
              "Defense": 35,
              "SpAttack": 50,
              "SpDefense": 70,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/407.png",
            "name": {
              "english": "Roserade",
              "japanese": "ロズレイド",
              "chinese": "罗丝雷朵",
              "french": "Roserade"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 60,
              "Attack": 70,
              "Defense": 65,
              "SpAttack": 125,
              "SpDefense": 105,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/408.png",
            "name": {
              "english": "Cranidos",
              "japanese": "ズガイドス",
              "chinese": "头盖龙",
              "french": "Kranidos"
            },
            "type": [
              "Rock"
            ],
            "base": {
              "HP": 67,
              "Attack": 125,
              "Defense": 40,
              "SpAttack": 30,
              "SpDefense": 30,
              "Speed": 58
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/409.png",
            "name": {
              "english": "Rampardos",
              "japanese": "ラムパルド",
              "chinese": "战槌龙",
              "french": "Charkos"
            },
            "type": [
              "Rock"
            ],
            "base": {
              "HP": 97,
              "Attack": 165,
              "Defense": 60,
              "SpAttack": 65,
              "SpDefense": 50,
              "Speed": 58
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/410.png",
            "name": {
              "english": "Shieldon",
              "japanese": "タテトプス",
              "chinese": "盾甲龙",
              "french": "Dinoclier"
            },
            "type": [
              "Rock",
              "Steel"
            ],
            "base": {
              "HP": 30,
              "Attack": 42,
              "Defense": 118,
              "SpAttack": 42,
              "SpDefense": 88,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/411.png",
            "name": {
              "english": "Bastiodon",
              "japanese": "トリデプス",
              "chinese": "护城龙",
              "french": "Bastiodon"
            },
            "type": [
              "Rock",
              "Steel"
            ],
            "base": {
              "HP": 60,
              "Attack": 52,
              "Defense": 168,
              "SpAttack": 47,
              "SpDefense": 138,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/412.png",
            "name": {
              "english": "Burmy",
              "japanese": "ミノムッチ",
              "chinese": "结草儿",
              "french": "Cheniti"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 40,
              "Attack": 29,
              "Defense": 45,
              "SpAttack": 29,
              "SpDefense": 45,
              "Speed": 36
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/413.png",
            "name": {
              "english": "Wormadam",
              "japanese": "ミノマダム",
              "chinese": "结草贵妇",
              "french": "Cheniselle"
            },
            "type": [
              "Bug",
              "Grass"
            ],
            "base": {
              "HP": 60,
              "Attack": 59,
              "Defense": 85,
              "SpAttack": 79,
              "SpDefense": 105,
              "Speed": 36
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/414.png",
            "name": {
              "english": "Mothim",
              "japanese": "ガーメイル",
              "chinese": "绅士蛾",
              "french": "Papilord"
            },
            "type": [
              "Bug",
              "Flying"
            ],
            "base": {
              "HP": 70,
              "Attack": 94,
              "Defense": 50,
              "SpAttack": 94,
              "SpDefense": 50,
              "Speed": 66
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/415.png",
            "name": {
              "english": "Combee",
              "japanese": "ミツハニー",
              "chinese": "三蜜蜂",
              "french": "Apitrini"
            },
            "type": [
              "Bug",
              "Flying"
            ],
            "base": {
              "HP": 30,
              "Attack": 30,
              "Defense": 42,
              "SpAttack": 30,
              "SpDefense": 42,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/416.png",
            "name": {
              "english": "Vespiquen",
              "japanese": "ビークイン",
              "chinese": "蜂女王",
              "french": "Apireine"
            },
            "type": [
              "Bug",
              "Flying"
            ],
            "base": {
              "HP": 70,
              "Attack": 80,
              "Defense": 102,
              "SpAttack": 80,
              "SpDefense": 102,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/417.png",
            "name": {
              "english": "Pachirisu",
              "japanese": "パチリス",
              "chinese": "帕奇利兹",
              "french": "Pachirisu"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 60,
              "Attack": 45,
              "Defense": 70,
              "SpAttack": 45,
              "SpDefense": 90,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/418.png",
            "name": {
              "english": "Buizel",
              "japanese": "ブイゼル",
              "chinese": "泳圈鼬",
              "french": "Mustébouée"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 55,
              "Attack": 65,
              "Defense": 35,
              "SpAttack": 60,
              "SpDefense": 30,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/419.png",
            "name": {
              "english": "Floatzel",
              "japanese": "フローゼル",
              "chinese": "浮潜鼬",
              "french": "Mustéflott"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 85,
              "Attack": 105,
              "Defense": 55,
              "SpAttack": 85,
              "SpDefense": 50,
              "Speed": 115
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/420.png",
            "name": {
              "english": "Cherubi",
              "japanese": "チェリンボ",
              "chinese": "樱花宝",
              "french": "Ceribou"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 45,
              "Attack": 35,
              "Defense": 45,
              "SpAttack": 62,
              "SpDefense": 53,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/421.png",
            "name": {
              "english": "Cherrim",
              "japanese": "チェリム",
              "chinese": "樱花儿",
              "french": "Ceriflor"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 70,
              "Attack": 60,
              "Defense": 70,
              "SpAttack": 87,
              "SpDefense": 78,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/422.png",
            "name": {
              "english": "Shellos",
              "japanese": "カラナクシ",
              "chinese": "无壳海兔",
              "french": "Sancoki"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 76,
              "Attack": 48,
              "Defense": 48,
              "SpAttack": 57,
              "SpDefense": 62,
              "Speed": 34
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/423.png",
            "name": {
              "english": "Gastrodon",
              "japanese": "トリトドン",
              "chinese": "海兔兽",
              "french": "Tritosor"
            },
            "type": [
              "Water",
              "Ground"
            ],
            "base": {
              "HP": 111,
              "Attack": 83,
              "Defense": 68,
              "SpAttack": 92,
              "SpDefense": 82,
              "Speed": 39
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/424.png",
            "name": {
              "english": "Ambipom",
              "japanese": "エテボース",
              "chinese": "双尾怪手",
              "french": "Capidextre"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 75,
              "Attack": 100,
              "Defense": 66,
              "SpAttack": 60,
              "SpDefense": 66,
              "Speed": 115
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/425.png",
            "name": {
              "english": "Drifloon",
              "japanese": "フワンテ",
              "chinese": "飘飘球",
              "french": "Baudrive"
            },
            "type": [
              "Ghost",
              "Flying"
            ],
            "base": {
              "HP": 90,
              "Attack": 50,
              "Defense": 34,
              "SpAttack": 60,
              "SpDefense": 44,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/426.png",
            "name": {
              "english": "Drifblim",
              "japanese": "フワライド",
              "chinese": "随风球",
              "french": "Grodrive"
            },
            "type": [
              "Ghost",
              "Flying"
            ],
            "base": {
              "HP": 150,
              "Attack": 80,
              "Defense": 44,
              "SpAttack": 90,
              "SpDefense": 54,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/427.png",
            "name": {
              "english": "Buneary",
              "japanese": "ミミロル",
              "chinese": "卷卷耳",
              "french": "Laporeille"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 55,
              "Attack": 66,
              "Defense": 44,
              "SpAttack": 44,
              "SpDefense": 56,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/428.png",
            "name": {
              "english": "Lopunny",
              "japanese": "ミミロップ",
              "chinese": "长耳兔",
              "french": "Lockpin"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 65,
              "Attack": 76,
              "Defense": 84,
              "SpAttack": 54,
              "SpDefense": 96,
              "Speed": 105
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/429.png",
            "name": {
              "english": "Mismagius",
              "japanese": "ムウマージ",
              "chinese": "梦妖魔",
              "french": "Magirêve"
            },
            "type": [
              "Ghost"
            ],
            "base": {
              "HP": 60,
              "Attack": 60,
              "Defense": 60,
              "SpAttack": 105,
              "SpDefense": 105,
              "Speed": 105
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/430.png",
            "name": {
              "english": "Honchkrow",
              "japanese": "ドンカラス",
              "chinese": "乌鸦头头",
              "french": "Corboss"
            },
            "type": [
              "Dark",
              "Flying"
            ],
            "base": {
              "HP": 100,
              "Attack": 125,
              "Defense": 52,
              "SpAttack": 105,
              "SpDefense": 52,
              "Speed": 71
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/431.png",
            "name": {
              "english": "Glameow",
              "japanese": "ニャルマー",
              "chinese": "魅力喵",
              "french": "Chaglam"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 49,
              "Attack": 55,
              "Defense": 42,
              "SpAttack": 42,
              "SpDefense": 37,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/432.png",
            "name": {
              "english": "Purugly",
              "japanese": "ブニャット",
              "chinese": "东施喵",
              "french": "Chaffreux"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 71,
              "Attack": 82,
              "Defense": 64,
              "SpAttack": 64,
              "SpDefense": 59,
              "Speed": 112
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/433.png",
            "name": {
              "english": "Chingling",
              "japanese": "リーシャン",
              "chinese": "铃铛响",
              "french": "Korillon"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 45,
              "Attack": 30,
              "Defense": 50,
              "SpAttack": 65,
              "SpDefense": 50,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/434.png",
            "name": {
              "english": "Stunky",
              "japanese": "スカンプー",
              "chinese": "臭鼬噗",
              "french": "Moufouette"
            },
            "type": [
              "Poison",
              "Dark"
            ],
            "base": {
              "HP": 63,
              "Attack": 63,
              "Defense": 47,
              "SpAttack": 41,
              "SpDefense": 41,
              "Speed": 74
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/435.png",
            "name": {
              "english": "Skuntank",
              "japanese": "スカタンク",
              "chinese": "坦克臭鼬",
              "french": "Moufflair"
            },
            "type": [
              "Poison",
              "Dark"
            ],
            "base": {
              "HP": 103,
              "Attack": 93,
              "Defense": 67,
              "SpAttack": 71,
              "SpDefense": 61,
              "Speed": 84
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/436.png",
            "name": {
              "english": "Bronzor",
              "japanese": "ドーミラー",
              "chinese": "铜镜怪",
              "french": "Archéomire"
            },
            "type": [
              "Steel",
              "Psychic"
            ],
            "base": {
              "HP": 57,
              "Attack": 24,
              "Defense": 86,
              "SpAttack": 24,
              "SpDefense": 86,
              "Speed": 23
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/437.png",
            "name": {
              "english": "Bronzong",
              "japanese": "ドータクン",
              "chinese": "青铜钟",
              "french": "Archéodong"
            },
            "type": [
              "Steel",
              "Psychic"
            ],
            "base": {
              "HP": 67,
              "Attack": 89,
              "Defense": 116,
              "SpAttack": 79,
              "SpDefense": 116,
              "Speed": 33
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/438.png",
            "name": {
              "english": "Bonsly",
              "japanese": "ウソハチ",
              "chinese": "盆才怪",
              "french": "Manzaï"
            },
            "type": [
              "Rock"
            ],
            "base": {
              "HP": 50,
              "Attack": 80,
              "Defense": 95,
              "SpAttack": 10,
              "SpDefense": 45,
              "Speed": 10
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/439.png",
            "name": {
              "english": "Mime Jr.",
              "japanese": "マネネ",
              "chinese": "魔尼尼",
              "french": "Mime Jr"
            },
            "type": [
              "Psychic",
              "Fairy"
            ],
            "base": {
              "HP": 20,
              "Attack": 25,
              "Defense": 45,
              "SpAttack": 70,
              "SpDefense": 90,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/440.png",
            "name": {
              "english": "Happiny",
              "japanese": "ピンプク",
              "chinese": "小福蛋",
              "french": "Ptiravi"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 100,
              "Attack": 5,
              "Defense": 5,
              "SpAttack": 15,
              "SpDefense": 65,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/441.png",
            "name": {
              "english": "Chatot",
              "japanese": "ペラップ",
              "chinese": "聒噪鸟",
              "french": "Pijako"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 76,
              "Attack": 65,
              "Defense": 45,
              "SpAttack": 92,
              "SpDefense": 42,
              "Speed": 91
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/442.png",
            "name": {
              "english": "Spiritomb",
              "japanese": "ミカルゲ",
              "chinese": "花岩怪",
              "french": "Spiritomb"
            },
            "type": [
              "Ghost",
              "Dark"
            ],
            "base": {
              "HP": 50,
              "Attack": 92,
              "Defense": 108,
              "SpAttack": 92,
              "SpDefense": 108,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/443.png",
            "name": {
              "english": "Gible",
              "japanese": "フカマル",
              "chinese": "圆陆鲨",
              "french": "Griknot"
            },
            "type": [
              "Dragon",
              "Ground"
            ],
            "base": {
              "HP": 58,
              "Attack": 70,
              "Defense": 45,
              "SpAttack": 40,
              "SpDefense": 45,
              "Speed": 42
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/444.png",
            "name": {
              "english": "Gabite",
              "japanese": "ガバイト",
              "chinese": "尖牙陆鲨",
              "french": "Carmache"
            },
            "type": [
              "Dragon",
              "Ground"
            ],
            "base": {
              "HP": 68,
              "Attack": 90,
              "Defense": 65,
              "SpAttack": 50,
              "SpDefense": 55,
              "Speed": 82
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/445.png",
            "name": {
              "english": "Garchomp",
              "japanese": "ガブリアス",
              "chinese": "烈咬陆鲨",
              "french": "Carchacrok"
            },
            "type": [
              "Dragon",
              "Ground"
            ],
            "base": {
              "HP": 108,
              "Attack": 130,
              "Defense": 95,
              "SpAttack": 80,
              "SpDefense": 85,
              "Speed": 102
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/446.png",
            "name": {
              "english": "Munchlax",
              "japanese": "ゴンベ",
              "chinese": "小卡比兽",
              "french": "Goinfrex"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 135,
              "Attack": 85,
              "Defense": 40,
              "SpAttack": 40,
              "SpDefense": 85,
              "Speed": 5
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/447.png",
            "name": {
              "english": "Riolu",
              "japanese": "リオル",
              "chinese": "利欧路",
              "french": "Riolu"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 40,
              "Attack": 70,
              "Defense": 40,
              "SpAttack": 35,
              "SpDefense": 40,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/448.png",
            "name": {
              "english": "Lucario",
              "japanese": "ルカリオ",
              "chinese": "路卡利欧",
              "french": "Lucario"
            },
            "type": [
              "Fighting",
              "Steel"
            ],
            "base": {
              "HP": 70,
              "Attack": 110,
              "Defense": 70,
              "SpAttack": 115,
              "SpDefense": 70,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/449.png",
            "name": {
              "english": "Hippopotas",
              "japanese": "ヒポポタス",
              "chinese": "沙河马",
              "french": "Hippopotas"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 68,
              "Attack": 72,
              "Defense": 78,
              "SpAttack": 38,
              "SpDefense": 42,
              "Speed": 32
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/450.png",
            "name": {
              "english": "Hippowdon",
              "japanese": "カバルドン",
              "chinese": "河马兽",
              "french": "Hippodocus"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 108,
              "Attack": 112,
              "Defense": 118,
              "SpAttack": 68,
              "SpDefense": 72,
              "Speed": 47
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/451.png",
            "name": {
              "english": "Skorupi",
              "japanese": "スコルピ",
              "chinese": "钳尾蝎",
              "french": "Rapion"
            },
            "type": [
              "Poison",
              "Bug"
            ],
            "base": {
              "HP": 40,
              "Attack": 50,
              "Defense": 90,
              "SpAttack": 30,
              "SpDefense": 55,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/452.png",
            "name": {
              "english": "Drapion",
              "japanese": "ドラピオン",
              "chinese": "龙王蝎",
              "french": "Drascore"
            },
            "type": [
              "Poison",
              "Dark"
            ],
            "base": {
              "HP": 70,
              "Attack": 90,
              "Defense": 110,
              "SpAttack": 60,
              "SpDefense": 75,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/453.png",
            "name": {
              "english": "Croagunk",
              "japanese": "グレッグル",
              "chinese": "不良蛙",
              "french": "Cradopaud"
            },
            "type": [
              "Poison",
              "Fighting"
            ],
            "base": {
              "HP": 48,
              "Attack": 61,
              "Defense": 40,
              "SpAttack": 61,
              "SpDefense": 40,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/454.png",
            "name": {
              "english": "Toxicroak",
              "japanese": "ドクロッグ",
              "chinese": "毒骷蛙",
              "french": "Coatox"
            },
            "type": [
              "Poison",
              "Fighting"
            ],
            "base": {
              "HP": 83,
              "Attack": 106,
              "Defense": 65,
              "SpAttack": 86,
              "SpDefense": 65,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/455.png",
            "name": {
              "english": "Carnivine",
              "japanese": "マスキッパ",
              "chinese": "尖牙笼",
              "french": "Vortente"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 74,
              "Attack": 100,
              "Defense": 72,
              "SpAttack": 90,
              "SpDefense": 72,
              "Speed": 46
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/456.png",
            "name": {
              "english": "Finneon",
              "japanese": "ケイコウオ",
              "chinese": "荧光鱼",
              "french": "Écayon"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 49,
              "Attack": 49,
              "Defense": 56,
              "SpAttack": 49,
              "SpDefense": 61,
              "Speed": 66
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/457.png",
            "name": {
              "english": "Lumineon",
              "japanese": "ネオラント",
              "chinese": "霓虹鱼",
              "french": "Luminéon"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 69,
              "Attack": 69,
              "Defense": 76,
              "SpAttack": 69,
              "SpDefense": 86,
              "Speed": 91
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/458.png",
            "name": {
              "english": "Mantyke",
              "japanese": "タマンタ",
              "chinese": "小球飞鱼",
              "french": "Babimanta"
            },
            "type": [
              "Water",
              "Flying"
            ],
            "base": {
              "HP": 45,
              "Attack": 20,
              "Defense": 50,
              "SpAttack": 60,
              "SpDefense": 120,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/459.png",
            "name": {
              "english": "Snover",
              "japanese": "ユキカブリ",
              "chinese": "雪笠怪",
              "french": "Blizzi"
            },
            "type": [
              "Grass",
              "Ice"
            ],
            "base": {
              "HP": 60,
              "Attack": 62,
              "Defense": 50,
              "SpAttack": 62,
              "SpDefense": 60,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/460.png",
            "name": {
              "english": "Abomasnow",
              "japanese": "ユキノオー",
              "chinese": "暴雪王",
              "french": "Blizzaroi"
            },
            "type": [
              "Grass",
              "Ice"
            ],
            "base": {
              "HP": 90,
              "Attack": 92,
              "Defense": 75,
              "SpAttack": 92,
              "SpDefense": 85,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/461.png",
            "name": {
              "english": "Weavile",
              "japanese": "マニューラ",
              "chinese": "玛狃拉",
              "french": "Dimoret"
            },
            "type": [
              "Dark",
              "Ice"
            ],
            "base": {
              "HP": 70,
              "Attack": 120,
              "Defense": 65,
              "SpAttack": 45,
              "SpDefense": 85,
              "Speed": 125
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/462.png",
            "name": {
              "english": "Magnezone",
              "japanese": "ジバコイル",
              "chinese": "自爆磁怪",
              "french": "Magnézone"
            },
            "type": [
              "Electric",
              "Steel"
            ],
            "base": {
              "HP": 70,
              "Attack": 70,
              "Defense": 115,
              "SpAttack": 130,
              "SpDefense": 90,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/463.png",
            "name": {
              "english": "Lickilicky",
              "japanese": "ベロベルト",
              "chinese": "大舌舔",
              "french": "Coudlangue"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 110,
              "Attack": 85,
              "Defense": 95,
              "SpAttack": 80,
              "SpDefense": 95,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/464.png",
            "name": {
              "english": "Rhyperior",
              "japanese": "ドサイドン",
              "chinese": "超甲狂犀",
              "french": "Rhinastoc"
            },
            "type": [
              "Ground",
              "Rock"
            ],
            "base": {
              "HP": 115,
              "Attack": 140,
              "Defense": 130,
              "SpAttack": 55,
              "SpDefense": 55,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/465.png",
            "name": {
              "english": "Tangrowth",
              "japanese": "モジャンボ",
              "chinese": "巨蔓藤",
              "french": "Bouldeneu"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 100,
              "Attack": 100,
              "Defense": 125,
              "SpAttack": 110,
              "SpDefense": 50,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/466.png",
            "name": {
              "english": "Electivire",
              "japanese": "エレキブル",
              "chinese": "电击魔兽",
              "french": "Élekable"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 75,
              "Attack": 123,
              "Defense": 67,
              "SpAttack": 95,
              "SpDefense": 85,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/467.png",
            "name": {
              "english": "Magmortar",
              "japanese": "ブーバーン",
              "chinese": "鸭嘴炎兽",
              "french": "Maganon"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 75,
              "Attack": 95,
              "Defense": 67,
              "SpAttack": 125,
              "SpDefense": 95,
              "Speed": 83
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/468.png",
            "name": {
              "english": "Togekiss",
              "japanese": "トゲキッス",
              "chinese": "波克基斯",
              "french": "Togekiss"
            },
            "type": [
              "Fairy",
              "Flying"
            ],
            "base": {
              "HP": 85,
              "Attack": 50,
              "Defense": 95,
              "SpAttack": 120,
              "SpDefense": 115,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/469.png",
            "name": {
              "english": "Yanmega",
              "japanese": "メガヤンマ",
              "chinese": "远古巨蜓",
              "french": "Yanmega"
            },
            "type": [
              "Bug",
              "Flying"
            ],
            "base": {
              "HP": 86,
              "Attack": 76,
              "Defense": 86,
              "SpAttack": 116,
              "SpDefense": 56,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/470.png",
            "name": {
              "english": "Leafeon",
              "japanese": "リーフィア",
              "chinese": "叶伊布",
              "french": "Phyllali"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 65,
              "Attack": 110,
              "Defense": 130,
              "SpAttack": 60,
              "SpDefense": 65,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/471.png",
            "name": {
              "english": "Glaceon",
              "japanese": "グレイシア",
              "chinese": "冰伊布",
              "french": "Givrali"
            },
            "type": [
              "Ice"
            ],
            "base": {
              "HP": 65,
              "Attack": 60,
              "Defense": 110,
              "SpAttack": 130,
              "SpDefense": 95,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/472.png",
            "name": {
              "english": "Gliscor",
              "japanese": "グライオン",
              "chinese": "天蝎王",
              "french": "Scorvol"
            },
            "type": [
              "Ground",
              "Flying"
            ],
            "base": {
              "HP": 75,
              "Attack": 95,
              "Defense": 125,
              "SpAttack": 45,
              "SpDefense": 75,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/473.png",
            "name": {
              "english": "Mamoswine",
              "japanese": "マンムー",
              "chinese": "象牙猪",
              "french": "Mammochon"
            },
            "type": [
              "Ice",
              "Ground"
            ],
            "base": {
              "HP": 110,
              "Attack": 130,
              "Defense": 80,
              "SpAttack": 70,
              "SpDefense": 60,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/474.png",
            "name": {
              "english": "Porygon-Z",
              "japanese": "ポリゴンＺ",
              "chinese": "多边兽Ｚ",
              "french": "Porygon-Z"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 85,
              "Attack": 80,
              "Defense": 70,
              "SpAttack": 135,
              "SpDefense": 75,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/475.png",
            "name": {
              "english": "Gallade",
              "japanese": "エルレイド",
              "chinese": "艾路雷朵",
              "french": "Gallame"
            },
            "type": [
              "Psychic",
              "Fighting"
            ],
            "base": {
              "HP": 68,
              "Attack": 125,
              "Defense": 65,
              "SpAttack": 65,
              "SpDefense": 115,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/476.png",
            "name": {
              "english": "Probopass",
              "japanese": "ダイノーズ",
              "chinese": "大朝北鼻",
              "french": "Tarinorme"
            },
            "type": [
              "Rock",
              "Steel"
            ],
            "base": {
              "HP": 60,
              "Attack": 55,
              "Defense": 145,
              "SpAttack": 75,
              "SpDefense": 150,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/477.png",
            "name": {
              "english": "Dusknoir",
              "japanese": "ヨノワール",
              "chinese": "黑夜魔灵",
              "french": "Noctunoir"
            },
            "type": [
              "Ghost"
            ],
            "base": {
              "HP": 45,
              "Attack": 100,
              "Defense": 135,
              "SpAttack": 65,
              "SpDefense": 135,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/478.png",
            "name": {
              "english": "Froslass",
              "japanese": "ユキメノコ",
              "chinese": "雪妖女",
              "french": "Momartik"
            },
            "type": [
              "Ice",
              "Ghost"
            ],
            "base": {
              "HP": 70,
              "Attack": 80,
              "Defense": 70,
              "SpAttack": 80,
              "SpDefense": 70,
              "Speed": 110
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/479.png",
            "name": {
              "english": "Rotom",
              "japanese": "ロトム",
              "chinese": "洛托姆",
              "french": "Motisma"
            },
            "type": [
              "Electric",
              "Ghost"
            ],
            "base": {
              "HP": 50,
              "Attack": 50,
              "Defense": 77,
              "SpAttack": 95,
              "SpDefense": 77,
              "Speed": 91
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/480.png",
            "name": {
              "english": "Uxie",
              "japanese": "ユクシー",
              "chinese": "由克希",
              "french": "Créhelf"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 75,
              "Attack": 75,
              "Defense": 130,
              "SpAttack": 75,
              "SpDefense": 130,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/481.png",
            "name": {
              "english": "Mesprit",
              "japanese": "エムリット",
              "chinese": "艾姆利多",
              "french": "Créfollet"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 80,
              "Attack": 105,
              "Defense": 105,
              "SpAttack": 105,
              "SpDefense": 105,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/482.png",
            "name": {
              "english": "Azelf",
              "japanese": "アグノム",
              "chinese": "亚克诺姆",
              "french": "Créfadet"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 75,
              "Attack": 125,
              "Defense": 70,
              "SpAttack": 125,
              "SpDefense": 70,
              "Speed": 115
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/483.png",
            "name": {
              "english": "Dialga",
              "japanese": "ディアルガ",
              "chinese": "帝牙卢卡",
              "french": "Dialga"
            },
            "type": [
              "Steel",
              "Dragon"
            ],
            "base": {
              "HP": 100,
              "Attack": 120,
              "Defense": 120,
              "SpAttack": 150,
              "SpDefense": 100,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/484.png",
            "name": {
              "english": "Palkia",
              "japanese": "パルキア",
              "chinese": "帕路奇亚",
              "french": "Palkia"
            },
            "type": [
              "Water",
              "Dragon"
            ],
            "base": {
              "HP": 90,
              "Attack": 120,
              "Defense": 100,
              "SpAttack": 150,
              "SpDefense": 120,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/485.png",
            "name": {
              "english": "Heatran",
              "japanese": "ヒードラン",
              "chinese": "席多蓝恩",
              "french": "Heatran"
            },
            "type": [
              "Fire",
              "Steel"
            ],
            "base": {
              "HP": 91,
              "Attack": 90,
              "Defense": 106,
              "SpAttack": 130,
              "SpDefense": 106,
              "Speed": 77
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/486.png",
            "name": {
              "english": "Regigigas",
              "japanese": "レジギガス",
              "chinese": "雷吉奇卡斯",
              "french": "Regigigas"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 110,
              "Attack": 160,
              "Defense": 110,
              "SpAttack": 80,
              "SpDefense": 110,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/487.png",
            "name": {
              "english": "Giratina",
              "japanese": "ギラティナ",
              "chinese": "骑拉帝纳",
              "french": "Giratina"
            },
            "type": [
              "Ghost",
              "Dragon"
            ],
            "base": {
              "HP": 150,
              "Attack": 100,
              "Defense": 120,
              "SpAttack": 100,
              "SpDefense": 120,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/488.png",
            "name": {
              "english": "Cresselia",
              "japanese": "クレセリア",
              "chinese": "克雷色利亚",
              "french": "Cresselia"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 120,
              "Attack": 70,
              "Defense": 120,
              "SpAttack": 75,
              "SpDefense": 130,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/489.png",
            "name": {
              "english": "Phione",
              "japanese": "フィオネ",
              "chinese": "霏欧纳",
              "french": "Phione"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 80,
              "Attack": 80,
              "Defense": 80,
              "SpAttack": 80,
              "SpDefense": 80,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/490.png",
            "name": {
              "english": "Manaphy",
              "japanese": "マナフィ",
              "chinese": "玛纳霏",
              "french": "Manaphy"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 100,
              "Attack": 100,
              "Defense": 100,
              "SpAttack": 100,
              "SpDefense": 100,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/491.png",
            "name": {
              "english": "Darkrai",
              "japanese": "ダークライ",
              "chinese": "达克莱伊",
              "french": "Darkrai"
            },
            "type": [
              "Dark"
            ],
            "base": {
              "HP": 70,
              "Attack": 90,
              "Defense": 90,
              "SpAttack": 135,
              "SpDefense": 90,
              "Speed": 125
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/492.png",
            "name": {
              "english": "Shaymin",
              "japanese": "シェイミ",
              "chinese": "谢米",
              "french": "Shaymin"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 100,
              "Attack": 100,
              "Defense": 100,
              "SpAttack": 100,
              "SpDefense": 100,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/493.png",
            "name": {
              "english": "Arceus",
              "japanese": "アルセウス",
              "chinese": "阿尔宙斯",
              "french": "Arceus"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 120,
              "Attack": 120,
              "Defense": 120,
              "SpAttack": 120,
              "SpDefense": 120,
              "Speed": 120
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/494.png",
            "name": {
              "english": "Victini",
              "japanese": "ビクティニ",
              "chinese": "比克提尼",
              "french": "Victini"
            },
            "type": [
              "Psychic",
              "Fire"
            ],
            "base": {
              "HP": 100,
              "Attack": 100,
              "Defense": 100,
              "SpAttack": 100,
              "SpDefense": 100,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/495.png",
            "name": {
              "english": "Snivy",
              "japanese": "ツタージャ",
              "chinese": "藤藤蛇",
              "french": "Vipélierre"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 45,
              "Attack": 45,
              "Defense": 55,
              "SpAttack": 45,
              "SpDefense": 55,
              "Speed": 63
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/496.png",
            "name": {
              "english": "Servine",
              "japanese": "ジャノビー",
              "chinese": "青藤蛇",
              "french": "Lianaja"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 60,
              "Attack": 60,
              "Defense": 75,
              "SpAttack": 60,
              "SpDefense": 75,
              "Speed": 83
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/497.png",
            "name": {
              "english": "Serperior",
              "japanese": "ジャローダ",
              "chinese": "君主蛇",
              "french": "Majaspic"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 75,
              "Attack": 75,
              "Defense": 95,
              "SpAttack": 75,
              "SpDefense": 95,
              "Speed": 113
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/498.png",
            "name": {
              "english": "Tepig",
              "japanese": "ポカブ",
              "chinese": "暖暖猪",
              "french": "Gruikui"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 65,
              "Attack": 63,
              "Defense": 45,
              "SpAttack": 45,
              "SpDefense": 45,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/499.png",
            "name": {
              "english": "Pignite",
              "japanese": "チャオブー",
              "chinese": "炒炒猪",
              "french": "Grotichon"
            },
            "type": [
              "Fire",
              "Fighting"
            ],
            "base": {
              "HP": 90,
              "Attack": 93,
              "Defense": 55,
              "SpAttack": 70,
              "SpDefense": 55,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/500.png",
            "name": {
              "english": "Emboar",
              "japanese": "エンブオー",
              "chinese": "炎武王",
              "french": "Roitiflam"
            },
            "type": [
              "Fire",
              "Fighting"
            ],
            "base": {
              "HP": 110,
              "Attack": 123,
              "Defense": 65,
              "SpAttack": 100,
              "SpDefense": 65,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/501.png",
            "name": {
              "english": "Oshawott",
              "japanese": "ミジュマル",
              "chinese": "水水獭",
              "french": "Moustillon"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 55,
              "Attack": 55,
              "Defense": 45,
              "SpAttack": 63,
              "SpDefense": 45,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/502.png",
            "name": {
              "english": "Dewott",
              "japanese": "フタチマル",
              "chinese": "双刃丸",
              "french": "Mateloutre"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 75,
              "Attack": 75,
              "Defense": 60,
              "SpAttack": 83,
              "SpDefense": 60,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/503.png",
            "name": {
              "english": "Samurott",
              "japanese": "ダイケンキ",
              "chinese": "大剑鬼",
              "french": "Clamiral"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 95,
              "Attack": 100,
              "Defense": 85,
              "SpAttack": 108,
              "SpDefense": 70,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/504.png",
            "name": {
              "english": "Patrat",
              "japanese": "ミネズミ",
              "chinese": "探探鼠",
              "french": "Ratentif"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 45,
              "Attack": 55,
              "Defense": 39,
              "SpAttack": 35,
              "SpDefense": 39,
              "Speed": 42
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/505.png",
            "name": {
              "english": "Watchog",
              "japanese": "ミルホッグ",
              "chinese": "步哨鼠",
              "french": "Miradar"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 60,
              "Attack": 85,
              "Defense": 69,
              "SpAttack": 60,
              "SpDefense": 69,
              "Speed": 77
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/506.png",
            "name": {
              "english": "Lillipup",
              "japanese": "ヨーテリー",
              "chinese": "小约克",
              "french": "Ponchiot"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 45,
              "Attack": 60,
              "Defense": 45,
              "SpAttack": 25,
              "SpDefense": 45,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/507.png",
            "name": {
              "english": "Herdier",
              "japanese": "ハーデリア",
              "chinese": "哈约克",
              "french": "Ponchien"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 65,
              "Attack": 80,
              "Defense": 65,
              "SpAttack": 35,
              "SpDefense": 65,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/508.png",
            "name": {
              "english": "Stoutland",
              "japanese": "ムーランド",
              "chinese": "长毛狗",
              "french": "Mastouffe"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 85,
              "Attack": 110,
              "Defense": 90,
              "SpAttack": 45,
              "SpDefense": 90,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/509.png",
            "name": {
              "english": "Purrloin",
              "japanese": "チョロネコ",
              "chinese": "扒手猫",
              "french": "Chacripan"
            },
            "type": [
              "Dark"
            ],
            "base": {
              "HP": 41,
              "Attack": 50,
              "Defense": 37,
              "SpAttack": 50,
              "SpDefense": 37,
              "Speed": 66
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/510.png",
            "name": {
              "english": "Liepard",
              "japanese": "レパルダス",
              "chinese": "酷豹",
              "french": "Léopardus"
            },
            "type": [
              "Dark"
            ],
            "base": {
              "HP": 64,
              "Attack": 88,
              "Defense": 50,
              "SpAttack": 88,
              "SpDefense": 50,
              "Speed": 106
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/511.png",
            "name": {
              "english": "Pansage",
              "japanese": "ヤナップ",
              "chinese": "花椰猴",
              "french": "Feuillajou"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 50,
              "Attack": 53,
              "Defense": 48,
              "SpAttack": 53,
              "SpDefense": 48,
              "Speed": 64
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/512.png",
            "name": {
              "english": "Simisage",
              "japanese": "ヤナッキー",
              "chinese": "花椰猿",
              "french": "Feuiloutan"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 75,
              "Attack": 98,
              "Defense": 63,
              "SpAttack": 98,
              "SpDefense": 63,
              "Speed": 101
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/513.png",
            "name": {
              "english": "Pansear",
              "japanese": "バオップ",
              "chinese": "爆香猴",
              "french": "Flamajou"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 50,
              "Attack": 53,
              "Defense": 48,
              "SpAttack": 53,
              "SpDefense": 48,
              "Speed": 64
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/514.png",
            "name": {
              "english": "Simisear",
              "japanese": "バオッキー",
              "chinese": "爆香猿",
              "french": "Flamoutan"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 75,
              "Attack": 98,
              "Defense": 63,
              "SpAttack": 98,
              "SpDefense": 63,
              "Speed": 101
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/515.png",
            "name": {
              "english": "Panpour",
              "japanese": "ヒヤップ",
              "chinese": "冷水猴",
              "french": "Flotajou"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 50,
              "Attack": 53,
              "Defense": 48,
              "SpAttack": 53,
              "SpDefense": 48,
              "Speed": 64
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/516.png",
            "name": {
              "english": "Simipour",
              "japanese": "ヒヤッキー",
              "chinese": "冷水猿",
              "french": "Flotoutan"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 75,
              "Attack": 98,
              "Defense": 63,
              "SpAttack": 98,
              "SpDefense": 63,
              "Speed": 101
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/517.png",
            "name": {
              "english": "Munna",
              "japanese": "ムンナ",
              "chinese": "食梦梦",
              "french": "Munna"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 76,
              "Attack": 25,
              "Defense": 45,
              "SpAttack": 67,
              "SpDefense": 55,
              "Speed": 24
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/518.png",
            "name": {
              "english": "Musharna",
              "japanese": "ムシャーナ",
              "chinese": "梦梦蚀",
              "french": "Mushana"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 116,
              "Attack": 55,
              "Defense": 85,
              "SpAttack": 107,
              "SpDefense": 95,
              "Speed": 29
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/519.png",
            "name": {
              "english": "Pidove",
              "japanese": "マメパト",
              "chinese": "豆豆鸽",
              "french": "Poichigeon"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 50,
              "Attack": 55,
              "Defense": 50,
              "SpAttack": 36,
              "SpDefense": 30,
              "Speed": 43
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/520.png",
            "name": {
              "english": "Tranquill",
              "japanese": "ハトーボー",
              "chinese": "咕咕鸽",
              "french": "Colombeau"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 62,
              "Attack": 77,
              "Defense": 62,
              "SpAttack": 50,
              "SpDefense": 42,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/521.png",
            "name": {
              "english": "Unfezant",
              "japanese": "ケンホロウ",
              "chinese": "高傲雉鸡",
              "french": "Déflaisan"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 80,
              "Attack": 115,
              "Defense": 80,
              "SpAttack": 65,
              "SpDefense": 55,
              "Speed": 93
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/522.png",
            "name": {
              "english": "Blitzle",
              "japanese": "シママ",
              "chinese": "斑斑马",
              "french": "Zébibron"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 45,
              "Attack": 60,
              "Defense": 32,
              "SpAttack": 50,
              "SpDefense": 32,
              "Speed": 76
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/523.png",
            "name": {
              "english": "Zebstrika",
              "japanese": "ゼブライカ",
              "chinese": "雷电斑马",
              "french": "Zéblitz"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 75,
              "Attack": 100,
              "Defense": 63,
              "SpAttack": 80,
              "SpDefense": 63,
              "Speed": 116
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/524.png",
            "name": {
              "english": "Roggenrola",
              "japanese": "ダンゴロ",
              "chinese": "石丸子",
              "french": "Nodulithe"
            },
            "type": [
              "Rock"
            ],
            "base": {
              "HP": 55,
              "Attack": 75,
              "Defense": 85,
              "SpAttack": 25,
              "SpDefense": 25,
              "Speed": 15
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/525.png",
            "name": {
              "english": "Boldore",
              "japanese": "ガントル",
              "chinese": "地幔岩",
              "french": "Géolithe"
            },
            "type": [
              "Rock"
            ],
            "base": {
              "HP": 70,
              "Attack": 105,
              "Defense": 105,
              "SpAttack": 50,
              "SpDefense": 40,
              "Speed": 20
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/526.png",
            "name": {
              "english": "Gigalith",
              "japanese": "ギガイアス",
              "chinese": "庞岩怪",
              "french": "Gigalithe"
            },
            "type": [
              "Rock"
            ],
            "base": {
              "HP": 85,
              "Attack": 135,
              "Defense": 130,
              "SpAttack": 60,
              "SpDefense": 80,
              "Speed": 25
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/527.png",
            "name": {
              "english": "Woobat",
              "japanese": "コロモリ",
              "chinese": "滚滚蝙蝠",
              "french": "Chovsourir"
            },
            "type": [
              "Psychic",
              "Flying"
            ],
            "base": {
              "HP": 65,
              "Attack": 45,
              "Defense": 43,
              "SpAttack": 55,
              "SpDefense": 43,
              "Speed": 72
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/528.png",
            "name": {
              "english": "Swoobat",
              "japanese": "ココロモリ",
              "chinese": "心蝙蝠",
              "french": "Rhinolove"
            },
            "type": [
              "Psychic",
              "Flying"
            ],
            "base": {
              "HP": 67,
              "Attack": 57,
              "Defense": 55,
              "SpAttack": 77,
              "SpDefense": 55,
              "Speed": 114
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/529.png",
            "name": {
              "english": "Drilbur",
              "japanese": "モグリュー",
              "chinese": "螺钉地鼠",
              "french": "Rototaupe"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 60,
              "Attack": 85,
              "Defense": 40,
              "SpAttack": 30,
              "SpDefense": 45,
              "Speed": 68
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/530.png",
            "name": {
              "english": "Excadrill",
              "japanese": "ドリュウズ",
              "chinese": "龙头地鼠",
              "french": "Minotaupe"
            },
            "type": [
              "Ground",
              "Steel"
            ],
            "base": {
              "HP": 110,
              "Attack": 135,
              "Defense": 60,
              "SpAttack": 50,
              "SpDefense": 65,
              "Speed": 88
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/531.png",
            "name": {
              "english": "Audino",
              "japanese": "タブンネ",
              "chinese": "差不多娃娃",
              "french": "Nanméouïe"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 103,
              "Attack": 60,
              "Defense": 86,
              "SpAttack": 60,
              "SpDefense": 86,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/532.png",
            "name": {
              "english": "Timburr",
              "japanese": "ドッコラー",
              "chinese": "搬运小匠",
              "french": "Charpenti"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 75,
              "Attack": 80,
              "Defense": 55,
              "SpAttack": 25,
              "SpDefense": 35,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/533.png",
            "name": {
              "english": "Gurdurr",
              "japanese": "ドテッコツ",
              "chinese": "铁骨土人",
              "french": "Ouvrifier"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 85,
              "Attack": 105,
              "Defense": 85,
              "SpAttack": 40,
              "SpDefense": 50,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/534.png",
            "name": {
              "english": "Conkeldurr",
              "japanese": "ローブシン",
              "chinese": "修建老匠",
              "french": "Bétochef"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 105,
              "Attack": 140,
              "Defense": 95,
              "SpAttack": 55,
              "SpDefense": 65,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/535.png",
            "name": {
              "english": "Tympole",
              "japanese": "オタマロ",
              "chinese": "圆蝌蚪",
              "french": "Tritonde"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 50,
              "Attack": 50,
              "Defense": 40,
              "SpAttack": 50,
              "SpDefense": 40,
              "Speed": 64
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/536.png",
            "name": {
              "english": "Palpitoad",
              "japanese": "ガマガル",
              "chinese": "蓝蟾蜍",
              "french": "Batracné"
            },
            "type": [
              "Water",
              "Ground"
            ],
            "base": {
              "HP": 75,
              "Attack": 65,
              "Defense": 55,
              "SpAttack": 65,
              "SpDefense": 55,
              "Speed": 69
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/537.png",
            "name": {
              "english": "Seismitoad",
              "japanese": "ガマゲロゲ",
              "chinese": "蟾蜍王",
              "french": "Crapustule"
            },
            "type": [
              "Water",
              "Ground"
            ],
            "base": {
              "HP": 105,
              "Attack": 95,
              "Defense": 75,
              "SpAttack": 85,
              "SpDefense": 75,
              "Speed": 74
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/538.png",
            "name": {
              "english": "Throh",
              "japanese": "ナゲキ",
              "chinese": "投摔鬼",
              "french": "Judokrak"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 120,
              "Attack": 100,
              "Defense": 85,
              "SpAttack": 30,
              "SpDefense": 85,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/539.png",
            "name": {
              "english": "Sawk",
              "japanese": "ダゲキ",
              "chinese": "打击鬼",
              "french": "Karaclée"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 75,
              "Attack": 125,
              "Defense": 75,
              "SpAttack": 30,
              "SpDefense": 75,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/540.png",
            "name": {
              "english": "Sewaddle",
              "japanese": "クルミル",
              "chinese": "虫宝包",
              "french": "Larveyette"
            },
            "type": [
              "Bug",
              "Grass"
            ],
            "base": {
              "HP": 45,
              "Attack": 53,
              "Defense": 70,
              "SpAttack": 40,
              "SpDefense": 60,
              "Speed": 42
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/541.png",
            "name": {
              "english": "Swadloon",
              "japanese": "クルマユ",
              "chinese": "宝包茧",
              "french": "Couverdure"
            },
            "type": [
              "Bug",
              "Grass"
            ],
            "base": {
              "HP": 55,
              "Attack": 63,
              "Defense": 90,
              "SpAttack": 50,
              "SpDefense": 80,
              "Speed": 42
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/542.png",
            "name": {
              "english": "Leavanny",
              "japanese": "ハハコモリ",
              "chinese": "保姆虫",
              "french": "Manternel"
            },
            "type": [
              "Bug",
              "Grass"
            ],
            "base": {
              "HP": 75,
              "Attack": 103,
              "Defense": 80,
              "SpAttack": 70,
              "SpDefense": 80,
              "Speed": 92
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/543.png",
            "name": {
              "english": "Venipede",
              "japanese": "フシデ",
              "chinese": "百足蜈蚣",
              "french": "Venipatte"
            },
            "type": [
              "Bug",
              "Poison"
            ],
            "base": {
              "HP": 30,
              "Attack": 45,
              "Defense": 59,
              "SpAttack": 30,
              "SpDefense": 39,
              "Speed": 57
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/544.png",
            "name": {
              "english": "Whirlipede",
              "japanese": "ホイーガ",
              "chinese": "车轮球",
              "french": "Scobolide"
            },
            "type": [
              "Bug",
              "Poison"
            ],
            "base": {
              "HP": 40,
              "Attack": 55,
              "Defense": 99,
              "SpAttack": 40,
              "SpDefense": 79,
              "Speed": 47
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/545.png",
            "name": {
              "english": "Scolipede",
              "japanese": "ペンドラー",
              "chinese": "蜈蚣王",
              "french": "Brutapode"
            },
            "type": [
              "Bug",
              "Poison"
            ],
            "base": {
              "HP": 60,
              "Attack": 100,
              "Defense": 89,
              "SpAttack": 55,
              "SpDefense": 69,
              "Speed": 112
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/546.png",
            "name": {
              "english": "Cottonee",
              "japanese": "モンメン",
              "chinese": "木棉球",
              "french": "Doudouvet"
            },
            "type": [
              "Grass",
              "Fairy"
            ],
            "base": {
              "HP": 40,
              "Attack": 27,
              "Defense": 60,
              "SpAttack": 37,
              "SpDefense": 50,
              "Speed": 66
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/547.png",
            "name": {
              "english": "Whimsicott",
              "japanese": "エルフーン",
              "chinese": "风妖精",
              "french": "Farfaduvet"
            },
            "type": [
              "Grass",
              "Fairy"
            ],
            "base": {
              "HP": 60,
              "Attack": 67,
              "Defense": 85,
              "SpAttack": 77,
              "SpDefense": 75,
              "Speed": 116
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/548.png",
            "name": {
              "english": "Petilil",
              "japanese": "チュリネ",
              "chinese": "百合根娃娃",
              "french": "Chlorobule"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 45,
              "Attack": 35,
              "Defense": 50,
              "SpAttack": 70,
              "SpDefense": 50,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/549.png",
            "name": {
              "english": "Lilligant",
              "japanese": "ドレディア",
              "chinese": "裙儿小姐",
              "french": "Fragilady"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 70,
              "Attack": 60,
              "Defense": 75,
              "SpAttack": 110,
              "SpDefense": 75,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/500.png",
            "name": {
              "english": "Basculin",
              "japanese": "バスラオ",
              "chinese": "野蛮鲈鱼",
              "french": "Bargantua"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 70,
              "Attack": 92,
              "Defense": 65,
              "SpAttack": 80,
              "SpDefense": 55,
              "Speed": 98
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/551.png",
            "name": {
              "english": "Sandile",
              "japanese": "メグロコ",
              "chinese": "黑眼鳄",
              "french": "Mascaïman"
            },
            "type": [
              "Ground",
              "Dark"
            ],
            "base": {
              "HP": 50,
              "Attack": 72,
              "Defense": 35,
              "SpAttack": 35,
              "SpDefense": 35,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/552.png",
            "name": {
              "english": "Krokorok",
              "japanese": "ワルビル",
              "chinese": "混混鳄",
              "french": "Escroco"
            },
            "type": [
              "Ground",
              "Dark"
            ],
            "base": {
              "HP": 60,
              "Attack": 82,
              "Defense": 45,
              "SpAttack": 45,
              "SpDefense": 45,
              "Speed": 74
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/553.png",
            "name": {
              "english": "Krookodile",
              "japanese": "ワルビアル",
              "chinese": "流氓鳄",
              "french": "Crocorible"
            },
            "type": [
              "Ground",
              "Dark"
            ],
            "base": {
              "HP": 95,
              "Attack": 117,
              "Defense": 80,
              "SpAttack": 65,
              "SpDefense": 70,
              "Speed": 92
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/554.png",
            "name": {
              "english": "Darumaka",
              "japanese": "ダルマッカ",
              "chinese": "火红不倒翁",
              "french": "Darumarond"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 70,
              "Attack": 90,
              "Defense": 45,
              "SpAttack": 15,
              "SpDefense": 45,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/555.png",
            "name": {
              "english": "Darmanitan",
              "japanese": "ヒヒダルマ",
              "chinese": "达摩狒狒",
              "french": "Darumacho"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 105,
              "Attack": 140,
              "Defense": 55,
              "SpAttack": 30,
              "SpDefense": 55,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/556.png",
            "name": {
              "english": "Maractus",
              "japanese": "マラカッチ",
              "chinese": "沙铃仙人掌",
              "french": "Maracachi"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 75,
              "Attack": 86,
              "Defense": 67,
              "SpAttack": 106,
              "SpDefense": 67,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/557.png",
            "name": {
              "english": "Dwebble",
              "japanese": "イシズマイ",
              "chinese": "石居蟹",
              "french": "Crabicoque"
            },
            "type": [
              "Bug",
              "Rock"
            ],
            "base": {
              "HP": 50,
              "Attack": 65,
              "Defense": 85,
              "SpAttack": 35,
              "SpDefense": 35,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/558.png",
            "name": {
              "english": "Crustle",
              "japanese": "イワパレス",
              "chinese": "岩殿居蟹",
              "french": "Crabaraque"
            },
            "type": [
              "Bug",
              "Rock"
            ],
            "base": {
              "HP": 70,
              "Attack": 105,
              "Defense": 125,
              "SpAttack": 65,
              "SpDefense": 75,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/559.png",
            "name": {
              "english": "Scraggy",
              "japanese": "ズルッグ",
              "chinese": "滑滑小子",
              "french": "Baggiguane"
            },
            "type": [
              "Dark",
              "Fighting"
            ],
            "base": {
              "HP": 50,
              "Attack": 75,
              "Defense": 70,
              "SpAttack": 35,
              "SpDefense": 70,
              "Speed": 48
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/560.png",
            "name": {
              "english": "Scrafty",
              "japanese": "ズルズキン",
              "chinese": "头巾混混",
              "french": "Baggaïd"
            },
            "type": [
              "Dark",
              "Fighting"
            ],
            "base": {
              "HP": 65,
              "Attack": 90,
              "Defense": 115,
              "SpAttack": 45,
              "SpDefense": 115,
              "Speed": 58
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/561.png",
            "name": {
              "english": "Sigilyph",
              "japanese": "シンボラー",
              "chinese": "象征鸟",
              "french": "Cryptéro"
            },
            "type": [
              "Psychic",
              "Flying"
            ],
            "base": {
              "HP": 72,
              "Attack": 58,
              "Defense": 80,
              "SpAttack": 103,
              "SpDefense": 80,
              "Speed": 97
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/562.png",
            "name": {
              "english": "Yamask",
              "japanese": "デスマス",
              "chinese": "哭哭面具",
              "french": "Tutafeh"
            },
            "type": [
              "Ghost"
            ],
            "base": {
              "HP": 38,
              "Attack": 30,
              "Defense": 85,
              "SpAttack": 55,
              "SpDefense": 65,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/563.png",
            "name": {
              "english": "Cofagrigus",
              "japanese": "デスカーン",
              "chinese": "死神棺",
              "french": "Tutankafer"
            },
            "type": [
              "Ghost"
            ],
            "base": {
              "HP": 58,
              "Attack": 50,
              "Defense": 145,
              "SpAttack": 95,
              "SpDefense": 105,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/564.png",
            "name": {
              "english": "Tirtouga",
              "japanese": "プロトーガ",
              "chinese": "原盖海龟",
              "french": "Carapagos"
            },
            "type": [
              "Water",
              "Rock"
            ],
            "base": {
              "HP": 54,
              "Attack": 78,
              "Defense": 103,
              "SpAttack": 53,
              "SpDefense": 45,
              "Speed": 22
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/565.png",
            "name": {
              "english": "Carracosta",
              "japanese": "アバゴーラ",
              "chinese": "肋骨海龟",
              "french": "Mégapagos"
            },
            "type": [
              "Water",
              "Rock"
            ],
            "base": {
              "HP": 74,
              "Attack": 108,
              "Defense": 133,
              "SpAttack": 83,
              "SpDefense": 65,
              "Speed": 32
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/566.png",
            "name": {
              "english": "Archen",
              "japanese": "アーケン",
              "chinese": "始祖小鸟",
              "french": "Arkéapti"
            },
            "type": [
              "Rock",
              "Flying"
            ],
            "base": {
              "HP": 55,
              "Attack": 112,
              "Defense": 45,
              "SpAttack": 74,
              "SpDefense": 45,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/567.png",
            "name": {
              "english": "Archeops",
              "japanese": "アーケオス",
              "chinese": "始祖大鸟",
              "french": "Aéroptéryx"
            },
            "type": [
              "Rock",
              "Flying"
            ],
            "base": {
              "HP": 75,
              "Attack": 140,
              "Defense": 65,
              "SpAttack": 112,
              "SpDefense": 65,
              "Speed": 110
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/568.png",
            "name": {
              "english": "Trubbish",
              "japanese": "ヤブクロン",
              "chinese": "破破袋",
              "french": "Miamiasme"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 50,
              "Attack": 50,
              "Defense": 62,
              "SpAttack": 40,
              "SpDefense": 62,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/569.png",
            "name": {
              "english": "Garbodor",
              "japanese": "ダストダス",
              "chinese": "灰尘山",
              "french": "Miasmax"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 80,
              "Attack": 95,
              "Defense": 82,
              "SpAttack": 60,
              "SpDefense": 82,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/570.png",
            "name": {
              "english": "Zorua",
              "japanese": "ゾロア",
              "chinese": "索罗亚",
              "french": "Zorua"
            },
            "type": [
              "Dark"
            ],
            "base": {
              "HP": 40,
              "Attack": 65,
              "Defense": 40,
              "SpAttack": 80,
              "SpDefense": 40,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/571.png",
            "name": {
              "english": "Zoroark",
              "japanese": "ゾロアーク",
              "chinese": "索罗亚克",
              "french": "Zoroark"
            },
            "type": [
              "Dark"
            ],
            "base": {
              "HP": 60,
              "Attack": 105,
              "Defense": 60,
              "SpAttack": 120,
              "SpDefense": 60,
              "Speed": 105
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/572.png",
            "name": {
              "english": "Minccino",
              "japanese": "チラーミィ",
              "chinese": "泡沫栗鼠",
              "french": "Chinchidou"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 55,
              "Attack": 50,
              "Defense": 40,
              "SpAttack": 40,
              "SpDefense": 40,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/573.png",
            "name": {
              "english": "Cinccino",
              "japanese": "チラチーノ",
              "chinese": "奇诺栗鼠",
              "french": "Pashmilla"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 75,
              "Attack": 95,
              "Defense": 60,
              "SpAttack": 65,
              "SpDefense": 60,
              "Speed": 115
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/574.png",
            "name": {
              "english": "Gothita",
              "japanese": "ゴチム",
              "chinese": "哥德宝宝",
              "french": "Scrutella"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 45,
              "Attack": 30,
              "Defense": 50,
              "SpAttack": 55,
              "SpDefense": 65,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/575.png",
            "name": {
              "english": "Gothorita",
              "japanese": "ゴチミル",
              "chinese": "哥德小童",
              "french": "Mesmérella"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 60,
              "Attack": 45,
              "Defense": 70,
              "SpAttack": 75,
              "SpDefense": 85,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/576.png",
            "name": {
              "english": "Gothitelle",
              "japanese": "ゴチルゼル",
              "chinese": "哥德小姐",
              "french": "Sidérella"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 70,
              "Attack": 55,
              "Defense": 95,
              "SpAttack": 95,
              "SpDefense": 110,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/577.png",
            "name": {
              "english": "Solosis",
              "japanese": "ユニラン",
              "chinese": "单卵细胞球",
              "french": "Nucléos"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 45,
              "Attack": 30,
              "Defense": 40,
              "SpAttack": 105,
              "SpDefense": 50,
              "Speed": 20
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/578.png",
            "name": {
              "english": "Duosion",
              "japanese": "ダブラン",
              "chinese": "双卵细胞球",
              "french": "Méios"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 65,
              "Attack": 40,
              "Defense": 50,
              "SpAttack": 125,
              "SpDefense": 60,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/579.png",
            "name": {
              "english": "Reuniclus",
              "japanese": "ランクルス",
              "chinese": "人造细胞卵",
              "french": "Symbios"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 110,
              "Attack": 65,
              "Defense": 75,
              "SpAttack": 125,
              "SpDefense": 85,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/580.png",
            "name": {
              "english": "Ducklett",
              "japanese": "コアルヒー",
              "chinese": "鸭宝宝",
              "french": "Couaneton"
            },
            "type": [
              "Water",
              "Flying"
            ],
            "base": {
              "HP": 62,
              "Attack": 44,
              "Defense": 50,
              "SpAttack": 44,
              "SpDefense": 50,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/581.png",
            "name": {
              "english": "Swanna",
              "japanese": "スワンナ",
              "chinese": "舞天鹅",
              "french": "Lakmécygne"
            },
            "type": [
              "Water",
              "Flying"
            ],
            "base": {
              "HP": 75,
              "Attack": 87,
              "Defense": 63,
              "SpAttack": 87,
              "SpDefense": 63,
              "Speed": 98
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/582.png",
            "name": {
              "english": "Vanillite",
              "japanese": "バニプッチ",
              "chinese": "迷你冰",
              "french": "Sorbébé"
            },
            "type": [
              "Ice"
            ],
            "base": {
              "HP": 36,
              "Attack": 50,
              "Defense": 50,
              "SpAttack": 65,
              "SpDefense": 60,
              "Speed": 44
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/583.png",
            "name": {
              "english": "Vanillish",
              "japanese": "バニリッチ",
              "chinese": "多多冰",
              "french": "Sorboul"
            },
            "type": [
              "Ice"
            ],
            "base": {
              "HP": 51,
              "Attack": 65,
              "Defense": 65,
              "SpAttack": 80,
              "SpDefense": 75,
              "Speed": 59
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/584.png",
            "name": {
              "english": "Vanilluxe",
              "japanese": "バイバニラ",
              "chinese": "双倍多多冰",
              "french": "Sorbouboul"
            },
            "type": [
              "Ice"
            ],
            "base": {
              "HP": 71,
              "Attack": 95,
              "Defense": 85,
              "SpAttack": 110,
              "SpDefense": 95,
              "Speed": 79
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/585.png",
            "name": {
              "english": "Deerling",
              "japanese": "シキジカ",
              "chinese": "四季鹿",
              "french": "Vivaldaim"
            },
            "type": [
              "Normal",
              "Grass"
            ],
            "base": {
              "HP": 60,
              "Attack": 60,
              "Defense": 50,
              "SpAttack": 40,
              "SpDefense": 50,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/586.png",
            "name": {
              "english": "Sawsbuck",
              "japanese": "メブキジカ",
              "chinese": "萌芽鹿",
              "french": "Haydaim"
            },
            "type": [
              "Normal",
              "Grass"
            ],
            "base": {
              "HP": 80,
              "Attack": 100,
              "Defense": 70,
              "SpAttack": 60,
              "SpDefense": 70,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/587.png",
            "name": {
              "english": "Emolga",
              "japanese": "エモンガ",
              "chinese": "电飞鼠",
              "french": "Emolga"
            },
            "type": [
              "Electric",
              "Flying"
            ],
            "base": {
              "HP": 55,
              "Attack": 75,
              "Defense": 60,
              "SpAttack": 75,
              "SpDefense": 60,
              "Speed": 103
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/588.png",
            "name": {
              "english": "Karrablast",
              "japanese": "カブルモ",
              "chinese": "盖盖虫",
              "french": "Carabing"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 50,
              "Attack": 75,
              "Defense": 45,
              "SpAttack": 40,
              "SpDefense": 45,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/589.png",
            "name": {
              "english": "Escavalier",
              "japanese": "シュバルゴ",
              "chinese": "骑士蜗牛",
              "french": "Lançargot"
            },
            "type": [
              "Bug",
              "Steel"
            ],
            "base": {
              "HP": 70,
              "Attack": 135,
              "Defense": 105,
              "SpAttack": 60,
              "SpDefense": 105,
              "Speed": 20
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/590.png",
            "name": {
              "english": "Foongus",
              "japanese": "タマゲタケ",
              "chinese": "哎呀球菇",
              "french": "Trompignon"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 69,
              "Attack": 55,
              "Defense": 45,
              "SpAttack": 55,
              "SpDefense": 55,
              "Speed": 15
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/591.png",
            "name": {
              "english": "Amoonguss",
              "japanese": "モロバレル",
              "chinese": "败露球菇",
              "french": "Gaulet"
            },
            "type": [
              "Grass",
              "Poison"
            ],
            "base": {
              "HP": 114,
              "Attack": 85,
              "Defense": 70,
              "SpAttack": 85,
              "SpDefense": 80,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/592.png",
            "name": {
              "english": "Frillish",
              "japanese": "プルリル",
              "chinese": "轻飘飘",
              "french": "Viskuse"
            },
            "type": [
              "Water",
              "Ghost"
            ],
            "base": {
              "HP": 55,
              "Attack": 40,
              "Defense": 50,
              "SpAttack": 65,
              "SpDefense": 85,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/593.png",
            "name": {
              "english": "Jellicent",
              "japanese": "ブルンゲル",
              "chinese": "胖嘟嘟",
              "french": "Moyade"
            },
            "type": [
              "Water",
              "Ghost"
            ],
            "base": {
              "HP": 100,
              "Attack": 60,
              "Defense": 70,
              "SpAttack": 85,
              "SpDefense": 105,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/594.png",
            "name": {
              "english": "Alomomola",
              "japanese": "ママンボウ",
              "chinese": "保姆曼波",
              "french": "Mamanbo"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 165,
              "Attack": 75,
              "Defense": 80,
              "SpAttack": 40,
              "SpDefense": 45,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/595.png",
            "name": {
              "english": "Joltik",
              "japanese": "バチュル",
              "chinese": "电电虫",
              "french": "Statitik"
            },
            "type": [
              "Bug",
              "Electric"
            ],
            "base": {
              "HP": 50,
              "Attack": 47,
              "Defense": 50,
              "SpAttack": 57,
              "SpDefense": 50,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/596.png",
            "name": {
              "english": "Galvantula",
              "japanese": "デンチュラ",
              "chinese": "电蜘蛛",
              "french": "Mygavolt"
            },
            "type": [
              "Bug",
              "Electric"
            ],
            "base": {
              "HP": 70,
              "Attack": 77,
              "Defense": 60,
              "SpAttack": 97,
              "SpDefense": 60,
              "Speed": 108
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/597.png",
            "name": {
              "english": "Ferroseed",
              "japanese": "テッシード",
              "chinese": "种子铁球",
              "french": "Grindur"
            },
            "type": [
              "Grass",
              "Steel"
            ],
            "base": {
              "HP": 44,
              "Attack": 50,
              "Defense": 91,
              "SpAttack": 24,
              "SpDefense": 86,
              "Speed": 10
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/598.png",
            "name": {
              "english": "Ferrothorn",
              "japanese": "ナットレイ",
              "chinese": "坚果哑铃",
              "french": "Noacier"
            },
            "type": [
              "Grass",
              "Steel"
            ],
            "base": {
              "HP": 74,
              "Attack": 94,
              "Defense": 131,
              "SpAttack": 54,
              "SpDefense": 116,
              "Speed": 20
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/599.png",
            "name": {
              "english": "Klink",
              "japanese": "ギアル",
              "chinese": "齿轮儿",
              "french": "Tic"
            },
            "type": [
              "Steel"
            ],
            "base": {
              "HP": 40,
              "Attack": 55,
              "Defense": 70,
              "SpAttack": 45,
              "SpDefense": 60,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/600.png",
            "name": {
              "english": "Klang",
              "japanese": "ギギアル",
              "chinese": "齿轮组",
              "french": "Clic"
            },
            "type": [
              "Steel"
            ],
            "base": {
              "HP": 60,
              "Attack": 80,
              "Defense": 95,
              "SpAttack": 70,
              "SpDefense": 85,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/601.png",
            "name": {
              "english": "Klinklang",
              "japanese": "ギギギアル",
              "chinese": "齿轮怪",
              "french": "Cliticlic"
            },
            "type": [
              "Steel"
            ],
            "base": {
              "HP": 60,
              "Attack": 100,
              "Defense": 115,
              "SpAttack": 70,
              "SpDefense": 85,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/602.png",
            "name": {
              "english": "Tynamo",
              "japanese": "シビシラス",
              "chinese": "麻麻小鱼",
              "french": "Anchwatt"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 35,
              "Attack": 55,
              "Defense": 40,
              "SpAttack": 45,
              "SpDefense": 40,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/603.png",
            "name": {
              "english": "Eelektrik",
              "japanese": "シビビール",
              "chinese": "麻麻鳗",
              "french": "Lampéroie"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 65,
              "Attack": 85,
              "Defense": 70,
              "SpAttack": 75,
              "SpDefense": 70,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/604.png",
            "name": {
              "english": "Eelektross",
              "japanese": "シビルドン",
              "chinese": "麻麻鳗鱼王",
              "french": "Ohmassacre"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 85,
              "Attack": 115,
              "Defense": 80,
              "SpAttack": 105,
              "SpDefense": 80,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/605.png",
            "name": {
              "english": "Elgyem",
              "japanese": "リグレー",
              "chinese": "小灰怪",
              "french": "Lewsor"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 55,
              "Attack": 55,
              "Defense": 55,
              "SpAttack": 85,
              "SpDefense": 55,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/606.png",
            "name": {
              "english": "Beheeyem",
              "japanese": "オーベム",
              "chinese": "大宇怪",
              "french": "Neitram"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 75,
              "Attack": 75,
              "Defense": 75,
              "SpAttack": 125,
              "SpDefense": 95,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/607.png",
            "name": {
              "english": "Litwick",
              "japanese": "ヒトモシ",
              "chinese": "烛光灵",
              "french": "Funécire"
            },
            "type": [
              "Ghost",
              "Fire"
            ],
            "base": {
              "HP": 50,
              "Attack": 30,
              "Defense": 55,
              "SpAttack": 65,
              "SpDefense": 55,
              "Speed": 20
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/608.png",
            "name": {
              "english": "Lampent",
              "japanese": "ランプラー",
              "chinese": "灯火幽灵",
              "french": "Mélancolux"
            },
            "type": [
              "Ghost",
              "Fire"
            ],
            "base": {
              "HP": 60,
              "Attack": 40,
              "Defense": 60,
              "SpAttack": 95,
              "SpDefense": 60,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/609.png",
            "name": {
              "english": "Chandelure",
              "japanese": "シャンデラ",
              "chinese": "水晶灯火灵",
              "french": "Lugulabre"
            },
            "type": [
              "Ghost",
              "Fire"
            ],
            "base": {
              "HP": 60,
              "Attack": 55,
              "Defense": 90,
              "SpAttack": 145,
              "SpDefense": 90,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/610.png",
            "name": {
              "english": "Axew",
              "japanese": "キバゴ",
              "chinese": "牙牙",
              "french": "Coupenotte"
            },
            "type": [
              "Dragon"
            ],
            "base": {
              "HP": 46,
              "Attack": 87,
              "Defense": 60,
              "SpAttack": 30,
              "SpDefense": 40,
              "Speed": 57
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/611.png",
            "name": {
              "english": "Fraxure",
              "japanese": "オノンド",
              "chinese": "斧牙龙",
              "french": "Incisache"
            },
            "type": [
              "Dragon"
            ],
            "base": {
              "HP": 66,
              "Attack": 117,
              "Defense": 70,
              "SpAttack": 40,
              "SpDefense": 50,
              "Speed": 67
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/612.png",
            "name": {
              "english": "Haxorus",
              "japanese": "オノノクス",
              "chinese": "双斧战龙",
              "french": "Tranchodon"
            },
            "type": [
              "Dragon"
            ],
            "base": {
              "HP": 76,
              "Attack": 147,
              "Defense": 90,
              "SpAttack": 60,
              "SpDefense": 70,
              "Speed": 97
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/613.png",
            "name": {
              "english": "Cubchoo",
              "japanese": "クマシュン",
              "chinese": "喷嚏熊",
              "french": "Polarhume"
            },
            "type": [
              "Ice"
            ],
            "base": {
              "HP": 55,
              "Attack": 70,
              "Defense": 40,
              "SpAttack": 60,
              "SpDefense": 40,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/614.png",
            "name": {
              "english": "Beartic",
              "japanese": "ツンベアー",
              "chinese": "冻原熊",
              "french": "Polagriffe"
            },
            "type": [
              "Ice"
            ],
            "base": {
              "HP": 95,
              "Attack": 130,
              "Defense": 80,
              "SpAttack": 70,
              "SpDefense": 80,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/615.png",
            "name": {
              "english": "Cryogonal",
              "japanese": "フリージオ",
              "chinese": "几何雪花",
              "french": "Hexagel"
            },
            "type": [
              "Ice"
            ],
            "base": {
              "HP": 80,
              "Attack": 50,
              "Defense": 50,
              "SpAttack": 95,
              "SpDefense": 135,
              "Speed": 105
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/616.png",
            "name": {
              "english": "Shelmet",
              "japanese": "チョボマキ",
              "chinese": "小嘴蜗",
              "french": "Escargaume"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 50,
              "Attack": 40,
              "Defense": 85,
              "SpAttack": 40,
              "SpDefense": 65,
              "Speed": 25
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/617.png",
            "name": {
              "english": "Accelgor",
              "japanese": "アギルダー",
              "chinese": "敏捷虫",
              "french": "Limaspeed"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 80,
              "Attack": 70,
              "Defense": 40,
              "SpAttack": 100,
              "SpDefense": 60,
              "Speed": 145
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/618.png",
            "name": {
              "english": "Stunfisk",
              "japanese": "マッギョ",
              "chinese": "泥巴鱼",
              "french": "Limonde"
            },
            "type": [
              "Ground",
              "Electric"
            ],
            "base": {
              "HP": 109,
              "Attack": 66,
              "Defense": 84,
              "SpAttack": 81,
              "SpDefense": 99,
              "Speed": 32
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/619.png",
            "name": {
              "english": "Mienfoo",
              "japanese": "コジョフー",
              "chinese": "功夫鼬",
              "french": "Kungfouine"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 45,
              "Attack": 85,
              "Defense": 50,
              "SpAttack": 55,
              "SpDefense": 50,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/620.png",
            "name": {
              "english": "Mienshao",
              "japanese": "コジョンド",
              "chinese": "师父鼬",
              "french": "Shaofouine"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 65,
              "Attack": 125,
              "Defense": 60,
              "SpAttack": 95,
              "SpDefense": 60,
              "Speed": 105
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/621.png",
            "name": {
              "english": "Druddigon",
              "japanese": "クリムガン",
              "chinese": "赤面龙",
              "french": "Drakkarmin"
            },
            "type": [
              "Dragon"
            ],
            "base": {
              "HP": 77,
              "Attack": 120,
              "Defense": 90,
              "SpAttack": 60,
              "SpDefense": 90,
              "Speed": 48
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/622.png",
            "name": {
              "english": "Golett",
              "japanese": "ゴビット",
              "chinese": "泥偶小人",
              "french": "Gringolem"
            },
            "type": [
              "Ground",
              "Ghost"
            ],
            "base": {
              "HP": 59,
              "Attack": 74,
              "Defense": 50,
              "SpAttack": 35,
              "SpDefense": 50,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/623.png",
            "name": {
              "english": "Golurk",
              "japanese": "ゴルーグ",
              "chinese": "泥偶巨人",
              "french": "Golemastoc"
            },
            "type": [
              "Ground",
              "Ghost"
            ],
            "base": {
              "HP": 89,
              "Attack": 124,
              "Defense": 80,
              "SpAttack": 55,
              "SpDefense": 80,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/624.png",
            "name": {
              "english": "Pawniard",
              "japanese": "コマタナ",
              "chinese": "驹刀小兵",
              "french": "Scalpion"
            },
            "type": [
              "Dark",
              "Steel"
            ],
            "base": {
              "HP": 45,
              "Attack": 85,
              "Defense": 70,
              "SpAttack": 40,
              "SpDefense": 40,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/625.png",
            "name": {
              "english": "Bisharp",
              "japanese": "キリキザン",
              "chinese": "劈斩司令",
              "french": "Scalproie"
            },
            "type": [
              "Dark",
              "Steel"
            ],
            "base": {
              "HP": 65,
              "Attack": 125,
              "Defense": 100,
              "SpAttack": 60,
              "SpDefense": 70,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/626.png",
            "name": {
              "english": "Bouffalant",
              "japanese": "バッフロン",
              "chinese": "爆炸头水牛",
              "french": "Frison"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 95,
              "Attack": 110,
              "Defense": 95,
              "SpAttack": 40,
              "SpDefense": 95,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/627.png",
            "name": {
              "english": "Rufflet",
              "japanese": "ワシボン",
              "chinese": "毛头小鹰",
              "french": "Furaiglon"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 70,
              "Attack": 83,
              "Defense": 50,
              "SpAttack": 37,
              "SpDefense": 50,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/628.png",
            "name": {
              "english": "Braviary",
              "japanese": "ウォーグル",
              "chinese": "勇士雄鹰",
              "french": "Gueriaigle"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 100,
              "Attack": 123,
              "Defense": 75,
              "SpAttack": 57,
              "SpDefense": 75,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/629.png",
            "name": {
              "english": "Vullaby",
              "japanese": "バルチャイ",
              "chinese": "秃鹰丫头",
              "french": "Vostourno"
            },
            "type": [
              "Dark",
              "Flying"
            ],
            "base": {
              "HP": 70,
              "Attack": 55,
              "Defense": 75,
              "SpAttack": 45,
              "SpDefense": 65,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/630.png",
            "name": {
              "english": "Mandibuzz",
              "japanese": "バルジーナ",
              "chinese": "秃鹰娜",
              "french": "Vaututrice"
            },
            "type": [
              "Dark",
              "Flying"
            ],
            "base": {
              "HP": 110,
              "Attack": 65,
              "Defense": 105,
              "SpAttack": 55,
              "SpDefense": 95,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/631.png",
            "name": {
              "english": "Heatmor",
              "japanese": "クイタラン",
              "chinese": "熔蚁兽",
              "french": "Aflamanoir"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 85,
              "Attack": 97,
              "Defense": 66,
              "SpAttack": 105,
              "SpDefense": 66,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/632.png",
            "name": {
              "english": "Durant",
              "japanese": "アイアント",
              "chinese": "铁蚁",
              "french": "Fermite"
            },
            "type": [
              "Bug",
              "Steel"
            ],
            "base": {
              "HP": 58,
              "Attack": 109,
              "Defense": 112,
              "SpAttack": 48,
              "SpDefense": 48,
              "Speed": 109
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/633.png",
            "name": {
              "english": "Deino",
              "japanese": "モノズ",
              "chinese": "单首龙",
              "french": "Solochi"
            },
            "type": [
              "Dark",
              "Dragon"
            ],
            "base": {
              "HP": 52,
              "Attack": 65,
              "Defense": 50,
              "SpAttack": 45,
              "SpDefense": 50,
              "Speed": 38
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/634.png",
            "name": {
              "english": "Zweilous",
              "japanese": "ジヘッド",
              "chinese": "双首暴龙",
              "french": "Diamat"
            },
            "type": [
              "Dark",
              "Dragon"
            ],
            "base": {
              "HP": 72,
              "Attack": 85,
              "Defense": 70,
              "SpAttack": 65,
              "SpDefense": 70,
              "Speed": 58
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/635.png",
            "name": {
              "english": "Hydreigon",
              "japanese": "サザンドラ",
              "chinese": "三首恶龙",
              "french": "Trioxhydre"
            },
            "type": [
              "Dark",
              "Dragon"
            ],
            "base": {
              "HP": 92,
              "Attack": 105,
              "Defense": 90,
              "SpAttack": 125,
              "SpDefense": 90,
              "Speed": 98
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/636.png",
            "name": {
              "english": "Larvesta",
              "japanese": "メラルバ",
              "chinese": "燃烧虫",
              "french": "Pyronille"
            },
            "type": [
              "Bug",
              "Fire"
            ],
            "base": {
              "HP": 55,
              "Attack": 85,
              "Defense": 55,
              "SpAttack": 50,
              "SpDefense": 55,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/637.png",
            "name": {
              "english": "Volcarona",
              "japanese": "ウルガモス",
              "chinese": "火神蛾",
              "french": "Pyrax"
            },
            "type": [
              "Bug",
              "Fire"
            ],
            "base": {
              "HP": 85,
              "Attack": 60,
              "Defense": 65,
              "SpAttack": 135,
              "SpDefense": 105,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/638.png",
            "name": {
              "english": "Cobalion",
              "japanese": "コバルオン",
              "chinese": "勾帕路翁",
              "french": "Cobaltium"
            },
            "type": [
              "Steel",
              "Fighting"
            ],
            "base": {
              "HP": 91,
              "Attack": 90,
              "Defense": 129,
              "SpAttack": 90,
              "SpDefense": 72,
              "Speed": 108
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/639.png",
            "name": {
              "english": "Terrakion",
              "japanese": "テラキオン",
              "chinese": "代拉基翁",
              "french": "Terrakium"
            },
            "type": [
              "Rock",
              "Fighting"
            ],
            "base": {
              "HP": 91,
              "Attack": 129,
              "Defense": 90,
              "SpAttack": 72,
              "SpDefense": 90,
              "Speed": 108
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/640.png",
            "name": {
              "english": "Virizion",
              "japanese": "ビリジオン",
              "chinese": "毕力吉翁",
              "french": "Viridium"
            },
            "type": [
              "Grass",
              "Fighting"
            ],
            "base": {
              "HP": 91,
              "Attack": 90,
              "Defense": 72,
              "SpAttack": 90,
              "SpDefense": 129,
              "Speed": 108
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/641.png",
            "name": {
              "english": "Tornadus",
              "japanese": "トルネロス",
              "chinese": "龙卷云",
              "french": "Boréas"
            },
            "type": [
              "Flying"
            ],
            "base": {
              "HP": 79,
              "Attack": 115,
              "Defense": 70,
              "SpAttack": 125,
              "SpDefense": 80,
              "Speed": 111
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/642.png",
            "name": {
              "english": "Thundurus",
              "japanese": "ボルトロス",
              "chinese": "雷电云",
              "french": "Fulguris"
            },
            "type": [
              "Electric",
              "Flying"
            ],
            "base": {
              "HP": 79,
              "Attack": 115,
              "Defense": 70,
              "SpAttack": 125,
              "SpDefense": 80,
              "Speed": 111
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/643.png",
            "name": {
              "english": "Reshiram",
              "japanese": "レシラム",
              "chinese": "莱希拉姆",
              "french": "Reshiram"
            },
            "type": [
              "Dragon",
              "Fire"
            ],
            "base": {
              "HP": 100,
              "Attack": 120,
              "Defense": 100,
              "SpAttack": 150,
              "SpDefense": 120,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/644.png",
            "name": {
              "english": "Zekrom",
              "japanese": "ゼクロム",
              "chinese": "捷克罗姆",
              "french": "Zekrom"
            },
            "type": [
              "Dragon",
              "Electric"
            ],
            "base": {
              "HP": 100,
              "Attack": 150,
              "Defense": 120,
              "SpAttack": 120,
              "SpDefense": 100,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/645.png",
            "name": {
              "english": "Landorus",
              "japanese": "ランドロス",
              "chinese": "土地云",
              "french": "Démétéros"
            },
            "type": [
              "Ground",
              "Flying"
            ],
            "base": {
              "HP": 89,
              "Attack": 125,
              "Defense": 90,
              "SpAttack": 115,
              "SpDefense": 80,
              "Speed": 101
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/646.png",
            "name": {
              "english": "Kyurem",
              "japanese": "キュレム",
              "chinese": "酋雷姆",
              "french": "Kyurem"
            },
            "type": [
              "Dragon",
              "Ice"
            ],
            "base": {
              "HP": 125,
              "Attack": 130,
              "Defense": 90,
              "SpAttack": 130,
              "SpDefense": 90,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/647.png",
            "name": {
              "english": "Keldeo",
              "japanese": "ケルディオ",
              "chinese": "凯路迪欧",
              "french": "Keldeo"
            },
            "type": [
              "Water",
              "Fighting"
            ],
            "base": {
              "HP": 91,
              "Attack": 72,
              "Defense": 90,
              "SpAttack": 129,
              "SpDefense": 90,
              "Speed": 108
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/648.png",
            "name": {
              "english": "Meloetta",
              "japanese": "メロエッタ",
              "chinese": "美洛耶塔",
              "french": "Meloetta"
            },
            "type": [
              "Normal",
              "Psychic"
            ],
            "base": {
              "HP": 100,
              "Attack": 77,
              "Defense": 77,
              "SpAttack": 128,
              "SpDefense": 128,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/649.png",
            "name": {
              "english": "Genesect",
              "japanese": "ゲノセクト",
              "chinese": "盖诺赛克特",
              "french": "Genesect"
            },
            "type": [
              "Bug",
              "Steel"
            ],
            "base": {
              "HP": 71,
              "Attack": 120,
              "Defense": 95,
              "SpAttack": 120,
              "SpDefense": 95,
              "Speed": 99
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/650.png",
            "name": {
              "english": "Chespin",
              "japanese": "ハリマロン",
              "chinese": "哈力栗",
              "french": "Marisson"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 56,
              "Attack": 61,
              "Defense": 65,
              "SpAttack": 48,
              "SpDefense": 45,
              "Speed": 38
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/651.png",
            "name": {
              "english": "Quilladin",
              "japanese": "ハリボーグ",
              "chinese": "胖胖哈力",
              "french": "Boguérisse"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 61,
              "Attack": 78,
              "Defense": 95,
              "SpAttack": 56,
              "SpDefense": 58,
              "Speed": 57
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/652.png",
            "name": {
              "english": "Chesnaught",
              "japanese": "ブリガロン",
              "chinese": "布里卡隆",
              "french": "Blindépique"
            },
            "type": [
              "Grass",
              "Fighting"
            ],
            "base": {
              "HP": 88,
              "Attack": 107,
              "Defense": 122,
              "SpAttack": 74,
              "SpDefense": 75,
              "Speed": 64
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/653.png",
            "name": {
              "english": "Fennekin",
              "japanese": "フォッコ",
              "chinese": "火狐狸",
              "french": "Feunnec"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 40,
              "Attack": 45,
              "Defense": 40,
              "SpAttack": 62,
              "SpDefense": 60,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/654.png",
            "name": {
              "english": "Braixen",
              "japanese": "テールナー",
              "chinese": "长尾火狐",
              "french": "Roussil"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 59,
              "Attack": 59,
              "Defense": 58,
              "SpAttack": 90,
              "SpDefense": 70,
              "Speed": 73
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/655.png",
            "name": {
              "english": "Delphox",
              "japanese": "マフォクシー",
              "chinese": "妖火红狐",
              "french": "Goupelin"
            },
            "type": [
              "Fire",
              "Psychic"
            ],
            "base": {
              "HP": 75,
              "Attack": 69,
              "Defense": 72,
              "SpAttack": 114,
              "SpDefense": 100,
              "Speed": 104
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/656.png",
            "name": {
              "english": "Froakie",
              "japanese": "ケロマツ",
              "chinese": "呱呱泡蛙",
              "french": "Grenousse"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 41,
              "Attack": 56,
              "Defense": 40,
              "SpAttack": 62,
              "SpDefense": 44,
              "Speed": 71
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/657.png",
            "name": {
              "english": "Frogadier",
              "japanese": "ゲコガシラ",
              "chinese": "呱头蛙",
              "french": "Croâporal"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 54,
              "Attack": 63,
              "Defense": 52,
              "SpAttack": 83,
              "SpDefense": 56,
              "Speed": 97
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/658.png",
            "name": {
              "english": "Greninja",
              "japanese": "ゲッコウガ",
              "chinese": "甲贺忍蛙",
              "french": "Amphinobi"
            },
            "type": [
              "Water",
              "Dark"
            ],
            "base": {
              "HP": 72,
              "Attack": 95,
              "Defense": 67,
              "SpAttack": 103,
              "SpDefense": 71,
              "Speed": 122
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/659.png",
            "name": {
              "english": "Bunnelby",
              "japanese": "ホルビー",
              "chinese": "掘掘兔",
              "french": "Sapereau"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 38,
              "Attack": 36,
              "Defense": 38,
              "SpAttack": 32,
              "SpDefense": 36,
              "Speed": 57
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/660.png",
            "name": {
              "english": "Diggersby",
              "japanese": "ホルード",
              "chinese": "掘地兔",
              "french": "Excavarenne"
            },
            "type": [
              "Normal",
              "Ground"
            ],
            "base": {
              "HP": 85,
              "Attack": 56,
              "Defense": 77,
              "SpAttack": 50,
              "SpDefense": 77,
              "Speed": 78
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/661.png",
            "name": {
              "english": "Fletchling",
              "japanese": "ヤヤコマ",
              "chinese": "小箭雀",
              "french": "Passerouge"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 45,
              "Attack": 50,
              "Defense": 43,
              "SpAttack": 40,
              "SpDefense": 38,
              "Speed": 62
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/662r.png",
            "name": {
              "english": "Fletchinder",
              "japanese": "ヒノヤコマ",
              "chinese": "火箭雀",
              "french": "Braisillon"
            },
            "type": [
              "Fire",
              "Flying"
            ],
            "base": {
              "HP": 62,
              "Attack": 73,
              "Defense": 55,
              "SpAttack": 56,
              "SpDefense": 52,
              "Speed": 84
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/663.png",
            "name": {
              "english": "Talonflame",
              "japanese": "ファイアロー",
              "chinese": "烈箭鹰",
              "french": "Flambusard"
            },
            "type": [
              "Fire",
              "Flying"
            ],
            "base": {
              "HP": 78,
              "Attack": 81,
              "Defense": 71,
              "SpAttack": 74,
              "SpDefense": 69,
              "Speed": 126
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/664.png",
            "name": {
              "english": "Scatterbug",
              "japanese": "コフキムシ",
              "chinese": "粉蝶虫",
              "french": "Lépidonille"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 38,
              "Attack": 35,
              "Defense": 40,
              "SpAttack": 27,
              "SpDefense": 25,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/665.png",
            "name": {
              "english": "Spewpa",
              "japanese": "コフーライ",
              "chinese": "粉蝶蛹",
              "french": "Pérégrain"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 45,
              "Attack": 22,
              "Defense": 60,
              "SpAttack": 27,
              "SpDefense": 30,
              "Speed": 29
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/666.png",
            "name": {
              "english": "Vivillon",
              "japanese": "ビビヨン",
              "chinese": "彩粉蝶",
              "french": "Prismillon"
            },
            "type": [
              "Bug",
              "Flying"
            ],
            "base": {
              "HP": 80,
              "Attack": 52,
              "Defense": 50,
              "SpAttack": 90,
              "SpDefense": 50,
              "Speed": 89
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/667.png",
            "name": {
              "english": "Litleo",
              "japanese": "シシコ",
              "chinese": "小狮狮",
              "french": "Hélionceau"
            },
            "type": [
              "Fire",
              "Normal"
            ],
            "base": {
              "HP": 62,
              "Attack": 50,
              "Defense": 58,
              "SpAttack": 73,
              "SpDefense": 54,
              "Speed": 72
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/668.png",
            "name": {
              "english": "Pyroar",
              "japanese": "カエンジシ",
              "chinese": "火炎狮",
              "french": "Némélios"
            },
            "type": [
              "Fire",
              "Normal"
            ],
            "base": {
              "HP": 86,
              "Attack": 68,
              "Defense": 72,
              "SpAttack": 109,
              "SpDefense": 66,
              "Speed": 106
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/669.png",
            "name": {
              "english": "Flabébé",
              "japanese": "フラベベ",
              "chinese": "花蓓蓓",
              "french": "Flabébé"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 44,
              "Attack": 38,
              "Defense": 39,
              "SpAttack": 61,
              "SpDefense": 79,
              "Speed": 42
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/670.png",
            "name": {
              "english": "Floette",
              "japanese": "フラエッテ",
              "chinese": "花叶蒂",
              "french": "FLOETTE"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 54,
              "Attack": 45,
              "Defense": 47,
              "SpAttack": 75,
              "SpDefense": 98,
              "Speed": 52
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/671.png",
            "name": {
              "english": "Florges",
              "japanese": "フラージェス",
              "chinese": "花洁夫人",
              "french": "Florges"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 78,
              "Attack": 65,
              "Defense": 68,
              "SpAttack": 112,
              "SpDefense": 154,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/672.png",
            "name": {
              "english": "Skiddo",
              "japanese": "メェークル",
              "chinese": "坐骑小羊",
              "french": "Cabriolaine"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 66,
              "Attack": 65,
              "Defense": 48,
              "SpAttack": 62,
              "SpDefense": 57,
              "Speed": 52
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/673.png",
            "name": {
              "english": "Gogoat",
              "japanese": "ゴーゴート",
              "chinese": "坐骑山羊",
              "french": "Chevroum"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 123,
              "Attack": 100,
              "Defense": 62,
              "SpAttack": 97,
              "SpDefense": 81,
              "Speed": 68
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/674.png",
            "name": {
              "english": "Pancham",
              "japanese": "ヤンチャム",
              "chinese": "顽皮熊猫",
              "french": "Pandespiègle"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 67,
              "Attack": 82,
              "Defense": 62,
              "SpAttack": 46,
              "SpDefense": 48,
              "Speed": 43
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/675.png",
            "name": {
              "english": "Pangoro",
              "japanese": "ゴロンダ",
              "chinese": "流氓熊猫",
              "french": "Pandarbare"
            },
            "type": [
              "Fighting",
              "Dark"
            ],
            "base": {
              "HP": 95,
              "Attack": 124,
              "Defense": 78,
              "SpAttack": 69,
              "SpDefense": 71,
              "Speed": 58
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/676.png",
            "name": {
              "english": "Furfrou",
              "japanese": "トリミアン",
              "chinese": "多丽米亚",
              "french": "Couafarel"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 75,
              "Attack": 80,
              "Defense": 60,
              "SpAttack": 65,
              "SpDefense": 90,
              "Speed": 102
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/677.png",
            "name": {
              "english": "Espurr",
              "japanese": "ニャスパー",
              "chinese": "妙喵",
              "french": "Psystigri"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 62,
              "Attack": 48,
              "Defense": 54,
              "SpAttack": 63,
              "SpDefense": 60,
              "Speed": 68
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/678.png",
            "name": {
              "english": "Meowstic",
              "japanese": "ニャオニクス",
              "chinese": "超能妙喵",
              "french": "Mistigrix"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 74,
              "Attack": 48,
              "Defense": 76,
              "SpAttack": 83,
              "SpDefense": 81,
              "Speed": 104
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/679.png",
            "name": {
              "english": "Honedge",
              "japanese": "ヒトツキ",
              "chinese": "独剑鞘",
              "french": "Monorpale"
            },
            "type": [
              "Steel",
              "Ghost"
            ],
            "base": {
              "HP": 45,
              "Attack": 80,
              "Defense": 100,
              "SpAttack": 35,
              "SpDefense": 37,
              "Speed": 28
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/680.png",
            "name": {
              "english": "Doublade",
              "japanese": "ニダンギル",
              "chinese": "双剑鞘",
              "french": "Dimoclès"
            },
            "type": [
              "Steel",
              "Ghost"
            ],
            "base": {
              "HP": 59,
              "Attack": 110,
              "Defense": 150,
              "SpAttack": 45,
              "SpDefense": 49,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/681.png",
            "name": {
              "english": "Aegislash",
              "japanese": "ギルガルド",
              "chinese": "坚盾剑怪",
              "french": "Exagide"
            },
            "type": [
              "Steel",
              "Ghost"
            ],
            "base": {
              "HP": 60,
              "Attack": 50,
              "Defense": 150,
              "SpAttack": 50,
              "SpDefense": 150,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/682.png",
            "name": {
              "english": "Spritzee",
              "japanese": "シュシュプ",
              "chinese": "粉香香",
              "french": "Fluvetin"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 78,
              "Attack": 52,
              "Defense": 60,
              "SpAttack": 63,
              "SpDefense": 65,
              "Speed": 23
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/683.png",
            "name": {
              "english": "Aromatisse",
              "japanese": "フレフワン",
              "chinese": "芳香精",
              "french": "Cocotine"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 101,
              "Attack": 72,
              "Defense": 72,
              "SpAttack": 99,
              "SpDefense": 89,
              "Speed": 29
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/684.png",
            "name": {
              "english": "Swirlix",
              "japanese": "ペロッパフ",
              "chinese": "绵绵泡芙",
              "french": "Sucroquin"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 62,
              "Attack": 48,
              "Defense": 66,
              "SpAttack": 59,
              "SpDefense": 57,
              "Speed": 49
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/685.png",
            "name": {
              "english": "Slurpuff",
              "japanese": "ペロリーム",
              "chinese": "胖甜妮",
              "french": "Cupcanaille"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 82,
              "Attack": 80,
              "Defense": 86,
              "SpAttack": 85,
              "SpDefense": 75,
              "Speed": 72
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/686.png",
            "name": {
              "english": "Inkay",
              "japanese": "マーイーカ",
              "chinese": "好啦鱿",
              "french": "Sepiatop"
            },
            "type": [
              "Dark",
              "Psychic"
            ],
            "base": {
              "HP": 53,
              "Attack": 54,
              "Defense": 53,
              "SpAttack": 37,
              "SpDefense": 46,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/687.png",
            "name": {
              "english": "Malamar",
              "japanese": "カラマネロ",
              "chinese": "乌贼王",
              "french": "Sepiatroce"
            },
            "type": [
              "Dark",
              "Psychic"
            ],
            "base": {
              "HP": 86,
              "Attack": 92,
              "Defense": 88,
              "SpAttack": 68,
              "SpDefense": 75,
              "Speed": 73
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/688.png",
            "name": {
              "english": "Binacle",
              "japanese": "カメテテ",
              "chinese": "龟脚脚",
              "french": "Opermine"
            },
            "type": [
              "Rock",
              "Water"
            ],
            "base": {
              "HP": 42,
              "Attack": 52,
              "Defense": 67,
              "SpAttack": 39,
              "SpDefense": 56,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/689.png",
            "name": {
              "english": "Barbaracle",
              "japanese": "ガメノデス",
              "chinese": "龟足巨铠",
              "french": "Golgopathe"
            },
            "type": [
              "Rock",
              "Water"
            ],
            "base": {
              "HP": 72,
              "Attack": 105,
              "Defense": 115,
              "SpAttack": 54,
              "SpDefense": 86,
              "Speed": 68
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/690.png",
            "name": {
              "english": "Skrelp",
              "japanese": "クズモー",
              "chinese": "垃垃藻",
              "french": "Venalgue"
            },
            "type": [
              "Poison",
              "Water"
            ],
            "base": {
              "HP": 50,
              "Attack": 60,
              "Defense": 60,
              "SpAttack": 60,
              "SpDefense": 60,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/691.png",
            "name": {
              "english": "Dragalge",
              "japanese": "ドラミドロ",
              "chinese": "毒藻龙",
              "french": "Kravarech"
            },
            "type": [
              "Poison",
              "Dragon"
            ],
            "base": {
              "HP": 65,
              "Attack": 75,
              "Defense": 90,
              "SpAttack": 97,
              "SpDefense": 123,
              "Speed": 44
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/692.png",
            "name": {
              "english": "Clauncher",
              "japanese": "ウデッポウ",
              "chinese": "铁臂枪虾",
              "french": "Flingouste"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 50,
              "Attack": 53,
              "Defense": 62,
              "SpAttack": 58,
              "SpDefense": 63,
              "Speed": 44
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/693.png",
            "name": {
              "english": "Clawitzer",
              "japanese": "ブロスター",
              "chinese": "钢炮臂虾",
              "french": "Gamblast"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 71,
              "Attack": 73,
              "Defense": 88,
              "SpAttack": 120,
              "SpDefense": 89,
              "Speed": 59
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/694.png",
            "name": {
              "english": "Helioptile",
              "japanese": "エリキテル",
              "chinese": "伞电蜥",
              "french": "Galvaran"
            },
            "type": [
              "Electric",
              "Normal"
            ],
            "base": {
              "HP": 44,
              "Attack": 38,
              "Defense": 33,
              "SpAttack": 61,
              "SpDefense": 43,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/695.png",
            "name": {
              "english": "Heliolisk",
              "japanese": "エレザード",
              "chinese": "光电伞蜥",
              "french": "Iguolta"
            },
            "type": [
              "Electric",
              "Normal"
            ],
            "base": {
              "HP": 62,
              "Attack": 55,
              "Defense": 52,
              "SpAttack": 109,
              "SpDefense": 94,
              "Speed": 109
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/696.png",
            "name": {
              "english": "Tyrunt",
              "japanese": "チゴラス",
              "chinese": "宝宝暴龙",
              "french": "Ptyranidur"
            },
            "type": [
              "Rock",
              "Dragon"
            ],
            "base": {
              "HP": 58,
              "Attack": 89,
              "Defense": 77,
              "SpAttack": 45,
              "SpDefense": 45,
              "Speed": 48
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/697.png",
            "name": {
              "english": "Tyrantrum",
              "japanese": "ガチゴラス",
              "chinese": "怪颚龙",
              "french": "Rexillius"
            },
            "type": [
              "Rock",
              "Dragon"
            ],
            "base": {
              "HP": 82,
              "Attack": 121,
              "Defense": 119,
              "SpAttack": 69,
              "SpDefense": 59,
              "Speed": 71
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/698.png",
            "name": {
              "english": "Amaura",
              "japanese": "アマルス",
              "chinese": "冰雪龙",
              "french": "Amagara"
            },
            "type": [
              "Rock",
              "Ice"
            ],
            "base": {
              "HP": 77,
              "Attack": 59,
              "Defense": 50,
              "SpAttack": 67,
              "SpDefense": 63,
              "Speed": 46
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/699.png",
            "name": {
              "english": "Aurorus",
              "japanese": "アマルルガ",
              "chinese": "冰雪巨龙",
              "french": "Dragmara"
            },
            "type": [
              "Rock",
              "Ice"
            ],
            "base": {
              "HP": 123,
              "Attack": 77,
              "Defense": 72,
              "SpAttack": 99,
              "SpDefense": 92,
              "Speed": 58
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/700.png",
            "name": {
              "english": "Sylveon",
              "japanese": "ニンフィア",
              "chinese": "仙子伊布",
              "french": "Nymphali"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 95,
              "Attack": 65,
              "Defense": 65,
              "SpAttack": 110,
              "SpDefense": 130,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/701.png",
            "name": {
              "english": "Hawlucha",
              "japanese": "ルチャブル",
              "chinese": "摔角鹰人",
              "french": "Brutalibré"
            },
            "type": [
              "Fighting",
              "Flying"
            ],
            "base": {
              "HP": 78,
              "Attack": 92,
              "Defense": 75,
              "SpAttack": 74,
              "SpDefense": 63,
              "Speed": 118
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/702.png",
            "name": {
              "english": "Dedenne",
              "japanese": "デデンネ",
              "chinese": "咚咚鼠",
              "french": "DEDENNE"
            },
            "type": [
              "Electric",
              "Fairy"
            ],
            "base": {
              "HP": 67,
              "Attack": 58,
              "Defense": 57,
              "SpAttack": 81,
              "SpDefense": 67,
              "Speed": 101
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/703.png",
            "name": {
              "english": "Carbink",
              "japanese": "メレシー",
              "chinese": "小碎钻",
              "french": "Strassie"
            },
            "type": [
              "Rock",
              "Fairy"
            ],
            "base": {
              "HP": 50,
              "Attack": 50,
              "Defense": 150,
              "SpAttack": 50,
              "SpDefense": 150,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/704.png",
            "name": {
              "english": "Goomy",
              "japanese": "ヌメラ",
              "chinese": "黏黏宝",
              "french": "Mucuscule"
            },
            "type": [
              "Dragon"
            ],
            "base": {
              "HP": 45,
              "Attack": 50,
              "Defense": 35,
              "SpAttack": 55,
              "SpDefense": 75,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/705.png",
            "name": {
              "english": "Sliggoo",
              "japanese": "ヌメイル",
              "chinese": "黏美儿",
              "french": "Colimucus"
            },
            "type": [
              "Dragon"
            ],
            "base": {
              "HP": 68,
              "Attack": 75,
              "Defense": 53,
              "SpAttack": 83,
              "SpDefense": 113,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/706.png",
            "name": {
              "english": "Goodra",
              "japanese": "ヌメルゴン",
              "chinese": "黏美龙",
              "french": "Muplodocus"
            },
            "type": [
              "Dragon"
            ],
            "base": {
              "HP": 90,
              "Attack": 100,
              "Defense": 70,
              "SpAttack": 110,
              "SpDefense": 150,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/707.png",
            "name": {
              "english": "Klefki",
              "japanese": "クレッフィ",
              "chinese": "钥圈儿",
              "french": "Trousselin"
            },
            "type": [
              "Steel",
              "Fairy"
            ],
            "base": {
              "HP": 57,
              "Attack": 80,
              "Defense": 91,
              "SpAttack": 80,
              "SpDefense": 87,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/708.png",
            "name": {
              "english": "Phantump",
              "japanese": "ボクレー",
              "chinese": "小木灵",
              "french": "Brocélôme"
            },
            "type": [
              "Ghost",
              "Grass"
            ],
            "base": {
              "HP": 43,
              "Attack": 70,
              "Defense": 48,
              "SpAttack": 50,
              "SpDefense": 60,
              "Speed": 38
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/709.png",
            "name": {
              "english": "Trevenant",
              "japanese": "オーロット",
              "chinese": "朽木妖",
              "french": "Desséliande"
            },
            "type": [
              "Ghost",
              "Grass"
            ],
            "base": {
              "HP": 85,
              "Attack": 110,
              "Defense": 76,
              "SpAttack": 65,
              "SpDefense": 82,
              "Speed": 56
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/710.png",
            "name": {
              "english": "Pumpkaboo",
              "japanese": "バケッチャ",
              "chinese": "南瓜精",
              "french": "Pitrouille"
            },
            "type": [
              "Ghost",
              "Grass"
            ],
            "base": {
              "HP": 59,
              "Attack": 66,
              "Defense": 70,
              "SpAttack": 44,
              "SpDefense": 55,
              "Speed": 41
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/711.png",
            "name": {
              "english": "Gourgeist",
              "japanese": "パンプジン",
              "chinese": "南瓜怪人",
              "french": "Banshitrouye"
            },
            "type": [
              "Ghost",
              "Grass"
            ],
            "base": {
              "HP": 85,
              "Attack": 100,
              "Defense": 122,
              "SpAttack": 58,
              "SpDefense": 75,
              "Speed": 54
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/712.png",
            "name": {
              "english": "Bergmite",
              "japanese": "カチコール",
              "chinese": "冰宝",
              "french": "Grelaçon"
            },
            "type": [
              "Ice"
            ],
            "base": {
              "HP": 55,
              "Attack": 69,
              "Defense": 85,
              "SpAttack": 32,
              "SpDefense": 35,
              "Speed": 28
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/713.png",
            "name": {
              "english": "Avalugg",
              "japanese": "クレベース",
              "chinese": "冰岩怪",
              "french": "Séracrawl"
            },
            "type": [
              "Ice"
            ],
            "base": {
              "HP": 95,
              "Attack": 117,
              "Defense": 184,
              "SpAttack": 44,
              "SpDefense": 46,
              "Speed": 28
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/714.png",
            "name": {
              "english": "Noibat",
              "japanese": "オンバット",
              "chinese": "嗡蝠",
              "french": "Sonistrelle"
            },
            "type": [
              "Flying",
              "Dragon"
            ],
            "base": {
              "HP": 40,
              "Attack": 30,
              "Defense": 35,
              "SpAttack": 45,
              "SpDefense": 40,
              "Speed": 55
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/715.png",
            "name": {
              "english": "Noivern",
              "japanese": "オンバーン",
              "chinese": "音波龙",
              "french": "Bruyverne"
            },
            "type": [
              "Flying",
              "Dragon"
            ],
            "base": {
              "HP": 85,
              "Attack": 70,
              "Defense": 80,
              "SpAttack": 97,
              "SpDefense": 80,
              "Speed": 123
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/716.png",
            "name": {
              "english": "Xerneas",
              "japanese": "ゼルネアス",
              "chinese": "哲尔尼亚斯",
              "french": "Xerneas"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 126,
              "Attack": 131,
              "Defense": 95,
              "SpAttack": 131,
              "SpDefense": 98,
              "Speed": 99
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/717.png",
            "name": {
              "english": "Yveltal",
              "japanese": "イベルタル",
              "chinese": "伊裴尔塔尔",
              "french": "Yveltal"
            },
            "type": [
              "Dark",
              "Flying"
            ],
            "base": {
              "HP": 126,
              "Attack": 131,
              "Defense": 95,
              "SpAttack": 131,
              "SpDefense": 98,
              "Speed": 99
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/718.png",
            "name": {
              "english": "Zygarde",
              "japanese": "ジガルデ",
              "chinese": "基格尔德",
              "french": "Zygarde"
            },
            "type": [
              "Dragon",
              "Ground"
            ],
            "base": {
              "HP": 108,
              "Attack": 100,
              "Defense": 121,
              "SpAttack": 81,
              "SpDefense": 95,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/719.png",
            "name": {
              "english": "Diancie",
              "japanese": "ディアンシー",
              "chinese": "蒂安希",
              "french": "Diancie"
            },
            "type": [
              "Rock",
              "Fairy"
            ],
            "base": {
              "HP": 50,
              "Attack": 100,
              "Defense": 150,
              "SpAttack": 100,
              "SpDefense": 150,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/720.png",
            "name": {
              "english": "Hoopa",
              "japanese": "フーパ",
              "chinese": "胡帕",
              "french": "Hoopa"
            },
            "type": [
              "Psychic",
              "Ghost"
            ],
            "base": {
              "HP": 80,
              "Attack": 110,
              "Defense": 60,
              "SpAttack": 150,
              "SpDefense": 130,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/721.png",
            "name": {
              "english": "Volcanion",
              "japanese": "ボルケニオン",
              "chinese": "波尔凯尼恩",
              "french": "Volcanion"
            },
            "type": [
              "Fire",
              "Water"
            ],
            "base": {
              "HP": 80,
              "Attack": 110,
              "Defense": 120,
              "SpAttack": 130,
              "SpDefense": 90,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/722.png",
            "name": {
              "english": "Rowlet",
              "japanese": "モクロー",
              "chinese": "木木枭",
              "french": "Brindibou"
            },
            "type": [
              "Grass",
              "Flying"
            ],
            "base": {
              "HP": 68,
              "Attack": 55,
              "Defense": 55,
              "SpAttack": 50,
              "SpDefense": 50,
              "Speed": 42
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/723.png",
            "name": {
              "english": "Dartrix",
              "japanese": "フクスロー",
              "chinese": "投羽枭",
              "french": "Efflèche"
            },
            "type": [
              "Grass",
              "Flying"
            ],
            "base": {
              "HP": 78,
              "Attack": 75,
              "Defense": 75,
              "SpAttack": 70,
              "SpDefense": 70,
              "Speed": 52
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/724.png",
            "name": {
              "english": "Decidueye",
              "japanese": "ジュナイパー",
              "chinese": "狙射树枭",
              "french": "Archéduc"
            },
            "type": [
              "Grass",
              "Ghost"
            ],
            "base": {
              "HP": 78,
              "Attack": 107,
              "Defense": 75,
              "SpAttack": 100,
              "SpDefense": 100,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/725.png",
            "name": {
              "english": "Litten",
              "japanese": "ニャビー",
              "chinese": "火斑喵",
              "french": "Flamiaou"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 45,
              "Attack": 65,
              "Defense": 40,
              "SpAttack": 60,
              "SpDefense": 40,
              "Speed": 70
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/726.png",
            "name": {
              "english": "Torracat",
              "japanese": "ニャヒート",
              "chinese": "炎热喵",
              "french": "Matoufeu"
            },
            "type": [
              "Fire"
            ],
            "base": {
              "HP": 65,
              "Attack": 85,
              "Defense": 50,
              "SpAttack": 80,
              "SpDefense": 50,
              "Speed": 90
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/727.png",
            "name": {
              "english": "Incineroar",
              "japanese": "ガオガエン",
              "chinese": "炽焰咆哮虎",
              "french": "Félinferno"
            },
            "type": [
              "Fire",
              "Dark"
            ],
            "base": {
              "HP": 95,
              "Attack": 115,
              "Defense": 90,
              "SpAttack": 80,
              "SpDefense": 90,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/728.png",
            "name": {
              "english": "Popplio",
              "japanese": "アシマリ",
              "chinese": "球球海狮",
              "french": "Otaquin"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 50,
              "Attack": 54,
              "Defense": 54,
              "SpAttack": 66,
              "SpDefense": 56,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/729.png",
            "name": {
              "english": "Brionne",
              "japanese": "オシャマリ",
              "chinese": "花漾海狮",
              "french": "Otarlette"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 60,
              "Attack": 69,
              "Defense": 69,
              "SpAttack": 91,
              "SpDefense": 81,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/730.png",
            "name": {
              "english": "Primarina",
              "japanese": "アシレーヌ",
              "chinese": "西狮海壬",
              "french": "Oratoria"
            },
            "type": [
              "Water",
              "Fairy"
            ],
            "base": {
              "HP": 80,
              "Attack": 74,
              "Defense": 74,
              "SpAttack": 126,
              "SpDefense": 116,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/731.png",
            "name": {
              "english": "Pikipek",
              "japanese": "ツツケラ",
              "chinese": "小笃儿",
              "french": "Picassaut"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 35,
              "Attack": 75,
              "Defense": 30,
              "SpAttack": 30,
              "SpDefense": 30,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/732.png",
            "name": {
              "english": "Trumbeak",
              "japanese": "ケララッパ",
              "chinese": "喇叭啄鸟",
              "french": "Piclairon"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 55,
              "Attack": 85,
              "Defense": 50,
              "SpAttack": 40,
              "SpDefense": 50,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/733.png",
            "name": {
              "english": "Toucannon",
              "japanese": "ドデカバシ",
              "chinese": "铳嘴大鸟",
              "french": "Bazoucan"
            },
            "type": [
              "Normal",
              "Flying"
            ],
            "base": {
              "HP": 80,
              "Attack": 120,
              "Defense": 75,
              "SpAttack": 75,
              "SpDefense": 75,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/734.png",
            "name": {
              "english": "Yungoos",
              "japanese": "ヤングース",
              "chinese": "猫鼬少",
              "french": "Manglouton"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 48,
              "Attack": 70,
              "Defense": 30,
              "SpAttack": 30,
              "SpDefense": 30,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/735.png",
            "name": {
              "english": "Gumshoos",
              "japanese": "デカグース",
              "chinese": "猫鼬探长",
              "french": "Argouste"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 88,
              "Attack": 110,
              "Defense": 60,
              "SpAttack": 55,
              "SpDefense": 60,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/736.png",
            "name": {
              "english": "Grubbin",
              "japanese": "アゴジムシ",
              "chinese": "强颚鸡母虫",
              "french": "Larvibule"
            },
            "type": [
              "Bug"
            ],
            "base": {
              "HP": 47,
              "Attack": 62,
              "Defense": 45,
              "SpAttack": 55,
              "SpDefense": 45,
              "Speed": 46
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/737.png",
            "name": {
              "english": "Charjabug",
              "japanese": "デンヂムシ",
              "chinese": "虫电宝",
              "french": "Chrysapile"
            },
            "type": [
              "Bug",
              "Electric"
            ],
            "base": {
              "HP": 57,
              "Attack": 82,
              "Defense": 95,
              "SpAttack": 55,
              "SpDefense": 75,
              "Speed": 36
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/738.png",
            "name": {
              "english": "Vikavolt",
              "japanese": "クワガノン",
              "chinese": "锹农炮虫",
              "french": "Lucanon"
            },
            "type": [
              "Bug",
              "Electric"
            ],
            "base": {
              "HP": 77,
              "Attack": 70,
              "Defense": 90,
              "SpAttack": 145,
              "SpDefense": 75,
              "Speed": 43
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/739.png",
            "name": {
              "english": "Crabrawler",
              "japanese": "マケンカニ",
              "chinese": "好胜蟹",
              "french": "Crabagarre"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 47,
              "Attack": 82,
              "Defense": 57,
              "SpAttack": 42,
              "SpDefense": 47,
              "Speed": 63
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/740le.png",
            "name": {
              "english": "Crabominable",
              "japanese": "ケケンカニ",
              "chinese": "好胜毛蟹",
              "french": "Crabominable"
            },
            "type": [
              "Fighting",
              "Ice"
            ],
            "base": {
              "HP": 97,
              "Attack": 132,
              "Defense": 77,
              "SpAttack": 62,
              "SpDefense": 67,
              "Speed": 43
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/741.png",
            "name": {
              "english": "Oricorio",
              "japanese": "オドリドリ",
              "chinese": "花舞鸟",
              "french": "Plumeline"
            },
            "type": [
              "Fire",
              "Flying"
            ],
            "base": {
              "HP": 75,
              "Attack": 70,
              "Defense": 70,
              "SpAttack": 98,
              "SpDefense": 70,
              "Speed": 93
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/742.png",
            "name": {
              "english": "Cutiefly",
              "japanese": "アブリー",
              "chinese": "萌虻",
              "french": "Bombydou"
            },
            "type": [
              "Bug",
              "Fairy"
            ],
            "base": {
              "HP": 40,
              "Attack": 45,
              "Defense": 40,
              "SpAttack": 55,
              "SpDefense": 40,
              "Speed": 84
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/743.png",
            "name": {
              "english": "Ribombee",
              "japanese": "アブリボン",
              "chinese": "蝶结萌虻",
              "french": "Rubombelle"
            },
            "type": [
              "Bug",
              "Fairy"
            ],
            "base": {
              "HP": 60,
              "Attack": 55,
              "Defense": 60,
              "SpAttack": 95,
              "SpDefense": 70,
              "Speed": 124
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/744.png",
            "name": {
              "english": "Rockruff",
              "japanese": "イワンコ",
              "chinese": "岩狗狗",
              "french": "Rocabot"
            },
            "type": [
              "Rock"
            ],
            "base": {
              "HP": 45,
              "Attack": 65,
              "Defense": 40,
              "SpAttack": 30,
              "SpDefense": 40,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/745.png",
            "name": {
              "english": "Lycanroc",
              "japanese": "ルガルガン",
              "chinese": "鬃岩狼人",
              "french": "Lougaroc"
            },
            "type": [
              "Rock"
            ],
            "base": {
              "HP": 75,
              "Attack": 115,
              "Defense": 65,
              "SpAttack": 55,
              "SpDefense": 65,
              "Speed": 112
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/746.png",
            "name": {
              "english": "Wishiwashi",
              "japanese": "ヨワシ",
              "chinese": "弱丁鱼",
              "french": "Froussardine"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 45,
              "Attack": 20,
              "Defense": 20,
              "SpAttack": 25,
              "SpDefense": 25,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/747.png",
            "name": {
              "english": "Mareanie",
              "japanese": "ヒドイデ",
              "chinese": "好坏星",
              "french": "Vorastérie"
            },
            "type": [
              "Poison",
              "Water"
            ],
            "base": {
              "HP": 50,
              "Attack": 53,
              "Defense": 62,
              "SpAttack": 43,
              "SpDefense": 52,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/748.png",
            "name": {
              "english": "Toxapex",
              "japanese": "ドヒドイデ",
              "chinese": "超坏星",
              "french": "Prédastérie"
            },
            "type": [
              "Poison",
              "Water"
            ],
            "base": {
              "HP": 50,
              "Attack": 63,
              "Defense": 152,
              "SpAttack": 53,
              "SpDefense": 142,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/749.png",
            "name": {
              "english": "Mudbray",
              "japanese": "ドロバンコ",
              "chinese": "泥驴仔",
              "french": "Tiboudet"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 70,
              "Attack": 100,
              "Defense": 70,
              "SpAttack": 45,
              "SpDefense": 55,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/750.png",
            "name": {
              "english": "Mudsdale",
              "japanese": "バンバドロ",
              "chinese": "重泥挽马",
              "french": "Bourrinos"
            },
            "type": [
              "Ground"
            ],
            "base": {
              "HP": 100,
              "Attack": 125,
              "Defense": 100,
              "SpAttack": 55,
              "SpDefense": 85,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/751.png",
            "name": {
              "english": "Dewpider",
              "japanese": "シズクモ",
              "chinese": "滴蛛",
              "french": "Araqua"
            },
            "type": [
              "Water",
              "Bug"
            ],
            "base": {
              "HP": 38,
              "Attack": 40,
              "Defense": 52,
              "SpAttack": 40,
              "SpDefense": 72,
              "Speed": 27
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/752.png",
            "name": {
              "english": "Araquanid",
              "japanese": "オニシズクモ",
              "chinese": "滴蛛霸",
              "french": "Tarenbulle"
            },
            "type": [
              "Water",
              "Bug"
            ],
            "base": {
              "HP": 68,
              "Attack": 70,
              "Defense": 92,
              "SpAttack": 50,
              "SpDefense": 132,
              "Speed": 42
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/753.png",
            "name": {
              "english": "Fomantis",
              "japanese": "カリキリ",
              "chinese": "伪螳草",
              "french": "Mimantis"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 40,
              "Attack": 55,
              "Defense": 35,
              "SpAttack": 50,
              "SpDefense": 35,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/754.png",
            "name": {
              "english": "Lurantis",
              "japanese": "ラランテス",
              "chinese": "兰螳花",
              "french": "Floramantis"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 70,
              "Attack": 105,
              "Defense": 90,
              "SpAttack": 80,
              "SpDefense": 90,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/755.png",
            "name": {
              "english": "Morelull",
              "japanese": "ネマシュ",
              "chinese": "睡睡菇",
              "french": "Spododo"
            },
            "type": [
              "Grass",
              "Fairy"
            ],
            "base": {
              "HP": 40,
              "Attack": 35,
              "Defense": 55,
              "SpAttack": 65,
              "SpDefense": 75,
              "Speed": 15
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/756.png",
            "name": {
              "english": "Shiinotic",
              "japanese": "マシェード",
              "chinese": "灯罩夜菇",
              "french": "Lampignon"
            },
            "type": [
              "Grass",
              "Fairy"
            ],
            "base": {
              "HP": 60,
              "Attack": 45,
              "Defense": 80,
              "SpAttack": 90,
              "SpDefense": 100,
              "Speed": 30
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/757.png",
            "name": {
              "english": "Salandit",
              "japanese": "ヤトウモリ",
              "chinese": "夜盗火蜥",
              "french": "Tritox"
            },
            "type": [
              "Poison",
              "Fire"
            ],
            "base": {
              "HP": 48,
              "Attack": 44,
              "Defense": 40,
              "SpAttack": 71,
              "SpDefense": 40,
              "Speed": 77
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/758.png",
            "name": {
              "english": "Salazzle",
              "japanese": "エンニュート",
              "chinese": "焰后蜥",
              "french": "Malamandre"
            },
            "type": [
              "Poison",
              "Fire"
            ],
            "base": {
              "HP": 68,
              "Attack": 64,
              "Defense": 60,
              "SpAttack": 111,
              "SpDefense": 60,
              "Speed": 117
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/759.png",
            "name": {
              "english": "Stufful",
              "japanese": "ヌイコグマ",
              "chinese": "童偶熊",
              "french": "Nounourson"
            },
            "type": [
              "Normal",
              "Fighting"
            ],
            "base": {
              "HP": 70,
              "Attack": 75,
              "Defense": 50,
              "SpAttack": 45,
              "SpDefense": 50,
              "Speed": 50
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/760.png",
            "name": {
              "english": "Bewear",
              "japanese": "キテルグマ",
              "chinese": "穿着熊",
              "french": "Chelours"
            },
            "type": [
              "Normal",
              "Fighting"
            ],
            "base": {
              "HP": 120,
              "Attack": 125,
              "Defense": 80,
              "SpAttack": 55,
              "SpDefense": 60,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/761.png",
            "name": {
              "english": "Bounsweet",
              "japanese": "アマカジ",
              "chinese": "甜竹竹",
              "french": "Croquine"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 42,
              "Attack": 30,
              "Defense": 38,
              "SpAttack": 30,
              "SpDefense": 38,
              "Speed": 32
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/762.png",
            "name": {
              "english": "Steenee",
              "japanese": "アママイコ",
              "chinese": "甜舞妮",
              "french": "Candine"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 52,
              "Attack": 40,
              "Defense": 48,
              "SpAttack": 40,
              "SpDefense": 48,
              "Speed": 62
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/763.png",
            "name": {
              "english": "Tsareena",
              "japanese": "アマージョ",
              "chinese": "甜冷美后",
              "french": "Sucreine"
            },
            "type": [
              "Grass"
            ],
            "base": {
              "HP": 72,
              "Attack": 120,
              "Defense": 98,
              "SpAttack": 50,
              "SpDefense": 98,
              "Speed": 72
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/764.png",
            "name": {
              "english": "Comfey",
              "japanese": "キュワワー",
              "chinese": "花疗环环",
              "french": "Guérilande"
            },
            "type": [
              "Fairy"
            ],
            "base": {
              "HP": 51,
              "Attack": 52,
              "Defense": 90,
              "SpAttack": 82,
              "SpDefense": 110,
              "Speed": 100
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/765.png",
            "name": {
              "english": "Oranguru",
              "japanese": "ヤレユータン",
              "chinese": "智挥猩",
              "french": "Gouroutan"
            },
            "type": [
              "Normal",
              "Psychic"
            ],
            "base": {
              "HP": 90,
              "Attack": 60,
              "Defense": 80,
              "SpAttack": 90,
              "SpDefense": 110,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/766.png",
            "name": {
              "english": "Passimian",
              "japanese": "ナゲツケサル",
              "chinese": "投掷猴",
              "french": "Quartermac"
            },
            "type": [
              "Fighting"
            ],
            "base": {
              "HP": 100,
              "Attack": 120,
              "Defense": 90,
              "SpAttack": 40,
              "SpDefense": 60,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/767.png",
            "name": {
              "english": "Wimpod",
              "japanese": "コソクムシ",
              "chinese": "胆小虫",
              "french": "Sovkipou"
            },
            "type": [
              "Bug",
              "Water"
            ],
            "base": {
              "HP": 25,
              "Attack": 35,
              "Defense": 40,
              "SpAttack": 20,
              "SpDefense": 30,
              "Speed": 80
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/768.png",
            "name": {
              "english": "Golisopod",
              "japanese": "グソクムシャ",
              "chinese": "具甲武者",
              "french": "Sarmuraï"
            },
            "type": [
              "Bug",
              "Water"
            ],
            "base": {
              "HP": 75,
              "Attack": 125,
              "Defense": 140,
              "SpAttack": 60,
              "SpDefense": 90,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/769.png",
            "name": {
              "english": "Sandygast",
              "japanese": "スナバァ",
              "chinese": "沙丘娃",
              "french": "Bacabouh"
            },
            "type": [
              "Ghost",
              "Ground"
            ],
            "base": {
              "HP": 55,
              "Attack": 55,
              "Defense": 80,
              "SpAttack": 70,
              "SpDefense": 45,
              "Speed": 15
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/770.png",
            "name": {
              "english": "Palossand",
              "japanese": "シロデスナ",
              "chinese": "噬沙堡爷",
              "french": "Trépassable"
            },
            "type": [
              "Ghost",
              "Ground"
            ],
            "base": {
              "HP": 85,
              "Attack": 75,
              "Defense": 110,
              "SpAttack": 100,
              "SpDefense": 75,
              "Speed": 35
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/771.png",
            "name": {
              "english": "Pyukumuku",
              "japanese": "ナマコブシ",
              "chinese": "拳海参",
              "french": "Concombaffe"
            },
            "type": [
              "Water"
            ],
            "base": {
              "HP": 55,
              "Attack": 60,
              "Defense": 130,
              "SpAttack": 30,
              "SpDefense": 130,
              "Speed": 5
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/772.png",
            "name": {
              "english": "Type: Null",
              "japanese": "タイプ：ヌル",
              "chinese": "属性：空",
              "french": "Silvallié"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 95,
              "Attack": 95,
              "Defense": 95,
              "SpAttack": 95,
              "SpDefense": 95,
              "Speed": 59
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/773.png",
            "name": {
              "english": "Silvally",
              "japanese": "シルヴァディ",
              "chinese": "银伴战兽",
              "french": "Météno"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 95,
              "Attack": 95,
              "Defense": 95,
              "SpAttack": 95,
              "SpDefense": 95,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/774.png",
            "name": {
              "english": "Minior",
              "japanese": "メテノ",
              "chinese": "小陨星",
              "french": "Dodoala"
            },
            "type": [
              "Rock",
              "Flying"
            ],
            "base": {
              "HP": 60,
              "Attack": 60,
              "Defense": 100,
              "SpAttack": 60,
              "SpDefense": 100,
              "Speed": 60
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/776.png",
            "name": {
              "english": "Komala",
              "japanese": "ネッコアラ",
              "chinese": "树枕尾熊",
              "french": "Boumata"
            },
            "type": [
              "Normal"
            ],
            "base": {
              "HP": 65,
              "Attack": 115,
              "Defense": 65,
              "SpAttack": 75,
              "SpDefense": 95,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/776.png",
            "name": {
              "english": "Turtonator",
              "japanese": "バクガメス",
              "chinese": "爆焰龟兽",
              "french": "Togedemaru"
            },
            "type": [
              "Fire",
              "Dragon"
            ],
            "base": {
              "HP": 60,
              "Attack": 78,
              "Defense": 135,
              "SpAttack": 91,
              "SpDefense": 85,
              "Speed": 36
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/777.png",
            "name": {
              "english": "Togedemaru",
              "japanese": "トゲデマル",
              "chinese": "托戈德玛尔",
              "french": "Mimiqui"
            },
            "type": [
              "Electric",
              "Steel"
            ],
            "base": {
              "HP": 65,
              "Attack": 98,
              "Defense": 63,
              "SpAttack": 40,
              "SpDefense": 73,
              "Speed": 96
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/778.png",
            "name": {
              "english": "Mimikyu",
              "japanese": "ミミッキュ",
              "chinese": "谜拟Ｑ",
              "french": "Denticrisse"
            },
            "type": [
              "Ghost",
              "Fairy"
            ],
            "base": {
              "HP": 55,
              "Attack": 90,
              "Defense": 80,
              "SpAttack": 50,
              "SpDefense": 105,
              "Speed": 96
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/779.png",
            "name": {
              "english": "Bruxish",
              "japanese": "ハギギシリ",
              "chinese": "磨牙彩皮鱼",
              "french": "Draïeul"
            },
            "type": [
              "Water",
              "Psychic"
            ],
            "base": {
              "HP": 68,
              "Attack": 105,
              "Defense": 70,
              "SpAttack": 70,
              "SpDefense": 70,
              "Speed": 92
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/780.png",
            "name": {
              "english": "Drampa",
              "japanese": "ジジーロン",
              "chinese": "老翁龙",
              "french": "Sinistrail"
            },
            "type": [
              "Normal",
              "Dragon"
            ],
            "base": {
              "HP": 78,
              "Attack": 60,
              "Defense": 85,
              "SpAttack": 135,
              "SpDefense": 91,
              "Speed": 36
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/781.png",
            "name": {
              "english": "Dhelmise",
              "japanese": "ダダリン",
              "chinese": "破破舵轮",
              "french": "Bébécaille"
            },
            "type": [
              "Ghost",
              "Grass"
            ],
            "base": {
              "HP": 70,
              "Attack": 131,
              "Defense": 100,
              "SpAttack": 86,
              "SpDefense": 90,
              "Speed": 40
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/782.png",
            "name": {
              "english": "Jangmo-o",
              "japanese": "ジャラコ",
              "chinese": "心鳞宝",
              "french": "Écaïd"
            },
            "type": [
              "Dragon"
            ],
            "base": {
              "HP": 45,
              "Attack": 55,
              "Defense": 65,
              "SpAttack": 45,
              "SpDefense": 45,
              "Speed": 45
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/783.png",
            "name": {
              "english": "Hakamo-o",
              "japanese": "ジャランゴ",
              "chinese": "鳞甲龙",
              "french": "Ékaïser"
            },
            "type": [
              "Dragon",
              "Fighting"
            ],
            "base": {
              "HP": 55,
              "Attack": 75,
              "Defense": 90,
              "SpAttack": 65,
              "SpDefense": 70,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/784.png",
            "name": {
              "english": "Kommo-o",
              "japanese": "ジャラランガ",
              "chinese": "杖尾鳞甲龙",
              "french": "Tokorico"
            },
            "type": [
              "Dragon",
              "Fighting"
            ],
            "base": {
              "HP": 75,
              "Attack": 110,
              "Defense": 125,
              "SpAttack": 100,
              "SpDefense": 105,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/785.png",
            "name": {
              "english": "Tapu Koko",
              "japanese": "カプ・コケコ",
              "chinese": "卡璞・鸣鸣",
              "french": "Tokopiyon"
            },
            "type": [
              "Electric",
              "Fairy"
            ],
            "base": {
              "HP": 70,
              "Attack": 115,
              "Defense": 85,
              "SpAttack": 95,
              "SpDefense": 75,
              "Speed": 130
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/786.png",
            "name": {
              "english": "Tapu Lele",
              "japanese": "カプ・テテフ",
              "chinese": "卡璞・蝶蝶",
              "french": "Tokotoro"
            },
            "type": [
              "Psychic",
              "Fairy"
            ],
            "base": {
              "HP": 70,
              "Attack": 85,
              "Defense": 75,
              "SpAttack": 130,
              "SpDefense": 115,
              "Speed": 95
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/787.png",
            "name": {
              "english": "Tapu Bulu",
              "japanese": "カプ・ブルル",
              "chinese": "卡璞・哞哞",
              "french": "Tokopisco"
            },
            "type": [
              "Grass",
              "Fairy"
            ],
            "base": {
              "HP": 70,
              "Attack": 130,
              "Defense": 115,
              "SpAttack": 85,
              "SpDefense": 95,
              "Speed": 75
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/788.png",
            "name": {
              "english": "Tapu Fini",
              "japanese": "カプ・レヒレ",
              "chinese": "卡璞・鳍鳍",
              "french": "Cosmog"
            },
            "type": [
              "Water",
              "Fairy"
            ],
            "base": {
              "HP": 70,
              "Attack": 75,
              "Defense": 115,
              "SpAttack": 95,
              "SpDefense": 130,
              "Speed": 85
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/789.png",
            "name": {
              "english": "Cosmog",
              "japanese": "コスモッグ",
              "chinese": "科斯莫古",
              "french": "Cosmovum"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 43,
              "Attack": 29,
              "Defense": 31,
              "SpAttack": 29,
              "SpDefense": 31,
              "Speed": 37
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/790.png",
            "name": {
              "english": "Cosmoem",
              "japanese": "コスモウム",
              "chinese": "科斯莫姆",
              "french": "Solgaleo"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 43,
              "Attack": 29,
              "Defense": 131,
              "SpAttack": 29,
              "SpDefense": 131,
              "Speed": 37
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/791.png",
            "name": {
              "english": "Solgaleo",
              "japanese": "ソルガレオ",
              "chinese": "索尔迦雷欧",
              "french": "Lunala"
            },
            "type": [
              "Psychic",
              "Steel"
            ],
            "base": {
              "HP": 137,
              "Attack": 137,
              "Defense": 107,
              "SpAttack": 113,
              "SpDefense": 89,
              "Speed": 97
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/792.png",
            "name": {
              "english": "Lunala",
              "japanese": "ルナアーラ",
              "chinese": "露奈雅拉",
              "french": "Zéroïd"
            },
            "type": [
              "Psychic",
              "Ghost"
            ],
            "base": {
              "HP": 137,
              "Attack": 113,
              "Defense": 89,
              "SpAttack": 137,
              "SpDefense": 107,
              "Speed": 97
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/793.png",
            "name": {
              "english": "Nihilego",
              "japanese": "ウツロイド",
              "chinese": "虚吾伊德",
              "french": "Mouscoto"
            },
            "type": [
              "Rock",
              "Poison"
            ],
            "base": {
              "HP": 109,
              "Attack": 53,
              "Defense": 47,
              "SpAttack": 127,
              "SpDefense": 131,
              "Speed": 103
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/794.png",
            "name": {
              "english": "Buzzwole",
              "japanese": "マッシブーン",
              "chinese": "爆肌蚊",
              "french": "Cancrelove"
            },
            "type": [
              "Bug",
              "Fighting"
            ],
            "base": {
              "HP": 107,
              "Attack": 139,
              "Defense": 139,
              "SpAttack": 53,
              "SpDefense": 53,
              "Speed": 79
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/795.png",
            "name": {
              "english": "Pheromosa",
              "japanese": "フェローチェ",
              "chinese": "费洛美螂",
              "french": "Câblifère"
            },
            "type": [
              "Bug",
              "Fighting"
            ],
            "base": {
              "HP": 71,
              "Attack": 137,
              "Defense": 37,
              "SpAttack": 137,
              "SpDefense": 37,
              "Speed": 151
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/796.png",
            "name": {
              "english": "Xurkitree",
              "japanese": "デンジュモク",
              "chinese": "电束木",
              "french": "Bamboiselle"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 83,
              "Attack": 89,
              "Defense": 71,
              "SpAttack": 173,
              "SpDefense": 71,
              "Speed": 83
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/797.png",
            "name": {
              "english": "Celesteela",
              "japanese": "テッカグヤ",
              "chinese": "铁火辉夜",
              "french": "Katagami"
            },
            "type": [
              "Steel",
              "Flying"
            ],
            "base": {
              "HP": 97,
              "Attack": 101,
              "Defense": 103,
              "SpAttack": 107,
              "SpDefense": 101,
              "Speed": 61
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/798.png",
            "name": {
              "english": "Kartana",
              "japanese": "カミツルギ",
              "chinese": "纸御剑",
              "french": "Engloutyran"
            },
            "type": [
              "Grass",
              "Steel"
            ],
            "base": {
              "HP": 59,
              "Attack": 181,
              "Defense": 131,
              "SpAttack": 59,
              "SpDefense": 31,
              "Speed": 109
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/799.png",
            "name": {
              "english": "Guzzlord",
              "japanese": "アクジキング",
              "chinese": "恶食大王",
              "french": "Necrozma"
            },
            "type": [
              "Dark",
              "Dragon"
            ],
            "base": {
              "HP": 223,
              "Attack": 101,
              "Defense": 53,
              "SpAttack": 97,
              "SpDefense": 53,
              "Speed": 43
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/800.png",
            "name": {
              "english": "Necrozma",
              "japanese": "ネクロズマ",
              "chinese": "奈克洛兹玛",
              "french": "Magearna"
            },
            "type": [
              "Psychic"
            ],
            "base": {
              "HP": 97,
              "Attack": 107,
              "Defense": 101,
              "SpAttack": 127,
              "SpDefense": 89,
              "Speed": 79
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/801.png",
            "name": {
              "english": "Magearna",
              "japanese": "マギアナ",
              "chinese": "玛机雅娜",
              "french": "Marshadow"
            },
            "type": [
              "Steel",
              "Fairy"
            ],
            "base": {
              "HP": 80,
              "Attack": 95,
              "Defense": 115,
              "SpAttack": 130,
              "SpDefense": 115,
              "Speed": 65
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/802.png",
            "name": {
              "english": "Marshadow",
              "japanese": "マーシャドー",
              "chinese": "玛夏多",
              "french": "Vémini"
            },
            "type": [
              "Fighting",
              "Ghost"
            ],
            "base": {
              "HP": 90,
              "Attack": 125,
              "Defense": 80,
              "SpAttack": 90,
              "SpDefense": 90,
              "Speed": 125
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/803.png",
            "name": {
              "english": "Poipole",
              "japanese": "ベベノム",
              "chinese": "毒贝比",
              "french": "Mandrillon"
            },
            "type": [
              "Poison"
            ],
            "base": {
              "HP": 67,
              "Attack": 73,
              "Defense": 67,
              "SpAttack": 73,
              "SpDefense": 67,
              "Speed": 73
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/804.png",
            "name": {
              "english": "Naganadel",
              "japanese": "アーゴヨン",
              "chinese": "四颚针龙",
              "french": "Ama-Ama"
            },
            "type": [
              "Poison",
              "Dragon"
            ],
            "base": {
              "HP": 73,
              "Attack": 73,
              "Defense": 73,
              "SpAttack": 127,
              "SpDefense": 73,
              "Speed": 121
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/805.png",
            "name": {
              "english": "Stakataka",
              "japanese": "ツンデツンデ",
              "chinese": "垒磊石",
              "french": "Pierroteknik"
            },
            "type": [
              "Rock",
              "Steel"
            ],
            "base": {
              "HP": 61,
              "Attack": 131,
              "Defense": 211,
              "SpAttack": 53,
              "SpDefense": 101,
              "Speed": 13
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/806.png",
            "name": {
              "english": "Blacephalon",
              "japanese": "ズガドーン",
              "chinese": "砰头小丑",
              "french": "Zeraora"
            },
            "type": [
              "Fire",
              "Ghost"
            ],
            "base": {
              "HP": 53,
              "Attack": 127,
              "Defense": 53,
              "SpAttack": 151,
              "SpDefense": 79,
              "Speed": 107
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/807.png",
            "name": {
              "english": "Zeraora",
              "japanese": "ゼラオラ",
              "chinese": "捷拉奥拉",
              "french": "Meltan"
            },
            "type": [
              "Electric"
            ],
            "base": {
              "HP": 88,
              "Attack": 112,
              "Defense": 75,
              "SpAttack": 102,
              "SpDefense": 80,
              "Speed": 143
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/808.png",
            "name": {
              "english": "Meltan",
              "japanese": "メルタン",
              "chinese": "美录坦",
              "french": "Melmetal"
            },
            "type": [
              "Steel"
            ],
            "base": {
              "HP": 46,
              "Attack": 65,
              "Defense": 65,
              "SpAttack": 55,
              "SpDefense": 35,
              "Speed": 34
            }
          },
          {
            "img": "../assets/pokemon.json-master/images/809.png",
            "name": {
              "english": "Melmetal",
              "japanese": "メルメタル",
              "chinese": "美录梅塔",
              "french": ""
            },
            "type": [
              "Steel"
            ],
            "base": {
              "HP": 135,
              "Attack": 143,
              "Defense": 143,
              "SpAttack": 80,
              "SpDefense": 65,
              "Speed": 34
            }
          }
        ];

         getPokemons() {
           return this.pokemons;

         }

         getPokemon(idx:string){
           return this.pokemons[idx];
         } 

         buscarPokemon(termino:string) {
           let pokemonArr:any[] = [];
           termino = termino.toLowerCase();

           for(let i = 0; i < this.pokemons.length; i++) {

             let pokemon = this.pokemons[i];
             let english = pokemon.name.english.toLowerCase();
          

                if (english.indexOf(termino)>= 0) {
                  pokemon.idx = i;
                  pokemonArr.push(pokemon);
                }
           } 
         
           return pokemonArr;
         }
}


	

 

 