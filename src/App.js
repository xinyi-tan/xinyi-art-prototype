import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import BlindBox from './BlindBox';
import AIChat from './AIChat';
import WatchDisplay from './WatchDisplay';
import DataVisualization from './DataVisualization';
import PersonalizationConfig from './PersonalizationConfig';
// 使用public路径，便于部署
const moonRabbitImg = '/assets/MoonRabbitpixelart.png';
const sushiImg = '/assets/sushipixelart.png';
const zhulongImg = '/assets/Zhulongpixelart.png';

const content = {
  hero: {
    title: "XINYI.ART NEXUS WATCH",
    subtitle: "WEB3 × POPMART × AI COMPANION",
    headline: "腕间元宇宙，链上AI伙伴",
    subheadline: "全球首款Web3智能手表生态。NFT身份认证，区块链数据同步，专属AI生命体陪伴。每一枚都是独一无二的数字资产。",
    cta: "MINT专属AI",
    badge: "Genesis Collection · 限量999枚",
    funFact: "⚡ 生物识别解锁AI人格",
    branding: "心一 XINYI.ART"
  },
  companions: {
    title: "AI人格系统",
    subtitle: "三种进化算法，无限可能性",
    items: [
      {
        id: "lunar_ai",
        name: "LUNAR-7",
        title: "直觉计算引擎",
        description: "基于月相算法的情感AI，通过生物节律数据分析你的情绪波动。擅长深度学习对话，能预测你的需求并提供个性化建议。配备睡眠优化和冥想引导功能。",
        image: moonRabbitImg,
        icon: "🌙",
        personality: "直觉敏锐",
        traits: ["情感分析", "节律追踪", "个性化推荐"],
        price: "Genesis Box",
        status: "Ready to Deploy",
        rarity: "Epic",
        hashRate: "2.3 TH/s",
        aiVersion: "v7.2.1"
      },
      {
        id: "zen_ai",
        name: "ZEN-DAO",
        title: "哲学思辨处理器",
        description: "融合古典智慧与现代算法的对话AI。精通文学创作、哲学思辨和心理咨询。通过区块链存储你们的对话历史，形成专属的智慧数据库。",
        image: sushiImg,
        icon: "🧠",
        personality: "深度思考",
        traits: ["哲学对话", "创意写作", "心理分析"],
        price: "Genesis Box",
        status: "Ready to Deploy",
        rarity: "Legendary",
        hashRate: "4.7 TH/s",
        aiVersion: "v12.8.3"
      },
      {
        id: "guardian_ai",
        name: "GUARDIAN-X",
        title: "防护级战术AI",
        description: "军用级安全协议AI，24/7监控你的数字资产和个人安全。具备威胁检测、紧急响应和隐私保护功能。在Web3世界中为你提供最强防护。",
        image: zhulongImg,
        icon: "🛡️",
        personality: "守护专注",
        traits: ["安全监控", "威胁预警", "资产保护"],
        price: "Genesis Box",
        status: "Ready to Deploy",
        rarity: "Mythic",
        hashRate: "8.1 TH/s",
        aiVersion: "v15.0.9"
      }
    ]
  },
  features: {
    title: "NEXUS生态系统",
    subtitle: "重新定义可穿戴AI体验",
    items: [
      {
        icon: "🔐",
        title: "生物识别绑定",
        description: "心率、体温、脑波三重认证，确保AI专属性"
      },
      {
        icon: "⛓️",
        title: "区块链同步",
        description: "AI数据链上存储，跨设备无缝同步"
      },
      {
        icon: "💎",
        title: "NFT身份证明",
        description: "独一无二的数字资产，可交易传承"
      },
      {
        icon: "🌐",
        title: "元宇宙集成",
        description: "AI化身代理参与虚拟世界活动"
      },
      {
        icon: "🧠",
        title: "算力挖矿",
        description: "AI学习过程产生代币奖励"
      },
      {
        icon: "⚡",
        title: "量子加密",
        description: "军用级加密保护隐私数据"
      }
    ]
  },
  watch: {
    title: "NEXUS WATCH规格",
    subtitle: "硬件级Web3集成",
    features: [
      {
        step: "01",
        title: "冷钱包芯片",
        description: "内置硬件钱包，支持多链资产管理",
        icon: "🔒"
      },
      {
        step: "02",
        title: "AI算力单元",
        description: "专用神经网络处理器，本地AI推理",
        icon: "🧠"
      },
      {
        step: "03",
        title: "量子随机数",
        description: "硬件级真随机数生成，确保盲盒公平性",
        icon: "🎲"
      },
      {
        step: "04",
        title: "生物传感阵列",
        description: "16路生物信号采集，AI个性化训练",
        icon: "📡"
      }
    ]
  },
  rarity: {
    title: "Genesis掉落概率",
    subtitle: "链上随机算法，公开透明",
    levels: [
      {
        level: "Common",
        rate: "85%",
        color: "#4CAF50",
        description: "标准算力配置，完整功能生态"
      },
      {
        level: "Rare",
        rate: "12%",
        color: "#2196F3",
        description: "增强算力单元，专属界面主题"
      },
      {
        level: "Epic",
        rate: "2.8%",
        color: "#9C27B0",
        description: "定制硬件外观，高级AI模型"
      },
      {
        level: "Legendary",
        rate: "0.2%",
        color: "#FF9800",
        description: "限量版设计，创始人权益"
      }
    ]
  }
};

function App() {
  return (
    <div className={styles.container}>
      <main className={styles.main} role="main">
        
        {/* Hero Section */}
        <section className={`${styles.homepageSection} ${styles.heroModule}`}>
          <div className={styles.moduleContent}>
            <div className={styles.unitWrapper}>
              <div className={styles.brandingHeader}>
                <div className={styles.brandLogo}>{content.hero.branding}</div>
                <div className={styles.productTitle}>{content.hero.title}</div>
              </div>
              <div className={styles.unitCopyWrapper}>
                <div className={styles.badge}>{content.hero.badge}</div>
                <div className={styles.funFact}>{content.hero.funFact}</div>
                <h1 className={styles.headline}>{content.hero.headline}</h1>
                <p className={styles.subhead}>{content.hero.subheadline}</p>
                <div className={styles.cta}>
                  <a href="#blindbox" className={styles.button}>
                    {content.hero.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BlindBox Section */}
        <section id="blindbox" className={styles.blindBoxSection}>
          <BlindBox />
        </section>

        {/* AI Chat Experience */}
        <AIChat />

        {/* Watch Display */}
        <WatchDisplay />

        {/* Data Visualization */}
        <DataVisualization />

        {/* Personalization Config */}
        <PersonalizationConfig />

        {/* Companions Showcase */}
        <section className={`${styles.homepageSection} ${styles.showcaseModule}`}>
          <div className={styles.moduleContent}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionHeadline}>{content.companions.title}</h2>
              <p className={styles.sectionSubtitle}>{content.companions.subtitle}</p>
            </div>
            <div className={styles.showcaseGrid}>
              {content.companions.items.map((item, index) => (
                <div key={index} className={styles.showcaseCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.characterImageWrapper}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className={styles.characterImage}
                      />
                    </div>
                    <div className={styles.personalityBadge}>{item.personality}</div>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.companionName}>{item.name}</h3>
                    <p className={styles.companionTitle}>{item.title}</p>
                    <p className={styles.companionDescription}>{item.description}</p>
                    <div className={styles.traits}>
                      {item.traits.map((trait, i) => (
                        <span key={i} className={styles.traitTag}>{trait}</span>
                      ))}
                    </div>
                    <div className={styles.cardFooter}>
                      <div className={styles.priceInfo}>
                        <span className={styles.price}>{item.price}</span>
                        <span className={`${styles.status} ${styles.available}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features */}
        <section className={`${styles.homepageSection} ${styles.featuresModule}`}>
          <div className={styles.moduleContent}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionHeadline}>{content.features.title}</h2>
              <p className={styles.sectionSubtitle}>{content.features.subtitle}</p>
            </div>
            <div className={styles.featuresGrid}>
              {content.features.items.map((item, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{item.icon}</div>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Watch Integration */}
        <section className={`${styles.homepageSection} ${styles.watchModule}`}>
          <div className={styles.moduleContent}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionHeadline}>{content.watch.title}</h2>
              <p className={styles.sectionSubtitle}>{content.watch.subtitle}</p>
            </div>
            <div className={styles.watchFlow}>
              {content.watch.features.map((step, index) => (
                <div key={index} className={styles.watchStep}>
                  <div className={styles.stepNumber}>{step.step}</div>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.watchMockup}>
              <div className={styles.watchFace}>
                <div className={styles.watchDisplay}>
                  <div className={styles.aiFace}>🐱</div>
                  <div className={styles.heartRate}>💓 72 bpm</div>
                  <div className={styles.message}>"想我了吗？"</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rarity System */}
        <section className={`${styles.homepageSection} ${styles.rarityModule}`}>
          <div className={styles.moduleContent}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionHeadline}>{content.rarity.title}</h2>
              <p className={styles.sectionSubtitle}>{content.rarity.subtitle}</p>
            </div>
            <div className={styles.rarityGrid}>
              {content.rarity.levels.map((item, index) => (
                <div key={index} className={styles.rarityCard} style={{'--rarity-color': item.color}}>
                  <div className={styles.rarityHeader}>
                    <h3 className={styles.rarityLevel}>{item.level}</h3>
                    <div className={styles.rarityRate}>{item.rate}</div>
                  </div>
                  <p className={styles.rarityDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;