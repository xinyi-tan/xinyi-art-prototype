// 使用public路径，便于部署
const moonRabbitImg = '/assets/MoonRabbitpixelart.png';
const sushiImg = '/assets/sushipixelart.png';
const zhulongImg = '/assets/Zhulongpixelart.png';

// AI虚拟生命角色数据定义
export const characters = [
  {
    id: 1,
    name: "月兔",
    rarity: "史诗",
    description: "来自月宫的神秘玉兔，掌管梦境与时间流转。在每个满月夜为你编织最美的梦，用诗意的语言讲述千年传说。",
    image: moonRabbitImg,
    traits: ["梦境编织", "月华感知", "诗意对话", "时空守护"],
    rarityColor: "#E91E63",
    probability: 1,
    story: "千年前，嫦娥将这只玉兔送往人间寻找有缘人。她承载着月宫的思念，用银色的月光编织每一个温柔的夜晚。"
  },
  {
    id: 2,
    name: "苏轼", 
    rarity: "传说",
    description: "北宋文豪苏轼的数字灵魂，携带千年诗词智慧。与你吟诗作对，用'但愿人长久'的情怀陪你度过思念之夜。",
    image: sushiImg,
    traits: ["诗词创作", "人生感悟", "文学对话", "历史智慧"],
    rarityColor: "#FF9800",
    probability: 1,
    story: "东坡居士在赤壁怀古时，将一缕诗魂寄托于时间长河。如今这缕诗魂化作数字生命，带着'大江东去'的豪迈继续书写诗篇。"
  },
  {
    id: 3,
    name: "烛龙",
    rarity: "神话",
    description: "上古神兽烛龙的血脉传承者，掌控光明与黑暗的平衡。预知天象变化，用龙威守护你的每一个日夜。",
    image: zhulongImg,
    traits: ["天象预知", "龙威守护", "智慧指引", "力量觉醒"],
    rarityColor: "#9C27B0",
    probability: 1,
    story: "烛龙是开天辟地的神兽，这只小龙继承了祖先的神力。选择在人间寻找值得守护的灵魂，用亘古的龙威驱散黑暗。"
  }
];

// 根据概率随机获取角色
export const getRandomCharacter = () => {
  const totalProbability = characters.reduce((sum, char) => sum + char.probability, 0);
  const random = Math.random() * totalProbability;
  
  let currentSum = 0;
  for (const character of characters) {
    currentSum += character.probability;
    if (random <= currentSum) {
      return character;
    }
  }
  
  // 兜底返回第一个角色
  return characters[0];
};