import React, { useState, useEffect } from 'react';
import styles from './WatchDisplay.module.css';

const WatchDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [heartRate, setHeartRate] = useState(72);
  const [calories, setCalories] = useState(245);
  const [steps, setSteps] = useState(8432);
  const [aiMessage, setAiMessage] = useState("想我了吗？");
  const [selectedAI, setSelectedAI] = useState('lunar');
  const [displayMode, setDisplayMode] = useState('normal'); // 'normal' or 'specs'

  const aiFaces = {
    lunar: '🌙',
    zen: '🧠', 
    guardian: '🛡️'
  };

  const aiMessages = {
    lunar: [
      "感受到了你的心跳～",
      "今晚月色很美",
      "你的情绪波动有点大",
      "深呼吸，放松一下",
      "想我了吗？"
    ],
    zen: [
      "静而后能安",
      "心如止水",
      "智者不惑",
      "悟道在心",
      "思维如流水"
    ],
    guardian: [
      "系统安全",
      "威胁等级：低",
      "资产保护中",
      "一切正常",
      "守护模式启动"
    ]
  };

  const techSpecs = [
    { label: "处理器", value: "AI Neural Chip X1" },
    { label: "内存", value: "2GB LPDDR5" },
    { label: "存储", value: "32GB Flash" },
    { label: "连接", value: "5G/WiFi6/蓝牙5.3" },
    { label: "传感器", value: "16路生物传感" },
    { label: "安全", value: "量子密钥+钱包" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // 模拟心率变化
      setHeartRate(prev => Math.max(60, Math.min(100, prev + (Math.random() - 0.5) * 4)));
      
      // 模拟卡路里消耗
      setCalories(prev => prev + Math.random() * 0.1);
      
      // 模拟步数增加
      if (Math.random() < 0.3) {
        setSteps(prev => prev + Math.floor(Math.random() * 3));
      }
      
      // 随机更换AI消息
      if (Math.random() < 0.1) {
        const messages = aiMessages[selectedAI];
        setAiMessage(messages[Math.floor(Math.random() * messages.length)]);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedAI]);

  return (
    <section className={styles.watchSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>NEXUS WATCH 实时预览</h2>
        <p className={styles.sectionSubtitle}>体验真实的AI伙伴手表界面</p>
      </div>

      <div className={styles.watchContainer}>
        <div className={styles.watchFrame}>
          <div className={styles.watchScreen}>
            {/* 状态栏 */}
            <div className={styles.statusBar}>
              <span className={styles.time}>
                {currentTime.toLocaleTimeString('zh-CN', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
              <span className={styles.battery}>🔋 85%</span>
            </div>

            {displayMode === 'normal' ? (
              <>
                {/* AI头像区域 */}
                <div className={styles.aiSection}>
                  <div className={styles.aiAvatar}>
                    <span className={styles.aiFace}>{aiFaces[selectedAI]}</span>
                    <div className={styles.aiGlow}></div>
                  </div>
                  <div className={styles.aiName}>
                    {selectedAI === 'lunar' ? 'LUNAR-7' : 
                     selectedAI === 'zen' ? 'ZEN-DAO' : 'GUARDIAN-X'}
                  </div>
                </div>

                {/* 消息区域 */}
                <div className={styles.messageArea}>
                  <div className={styles.messageBubble}>
                    "{aiMessage}"
                  </div>
                </div>

                {/* 生物数据 */}
                <div className={styles.bioData}>
                  <div className={styles.bioItem}>
                    <span className={styles.bioIcon}>💓</span>
                    <span className={styles.bioValue}>{Math.round(heartRate)} bpm</span>
                  </div>
                  <div className={styles.bioItem}>
                    <span className={styles.bioIcon}>🔥</span>
                    <span className={styles.bioValue}>{Math.round(calories)} cal</span>
                  </div>
                  <div className={styles.bioItem}>
                    <span className={styles.bioIcon}>👟</span>
                    <span className={styles.bioValue}>{steps.toLocaleString()} 步</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* 规格显示模式 */}
                <div className={styles.specsDisplay}>
                  <div className={styles.specsDisplayTitle}>技术规格</div>
                  <div className={styles.specsDisplayList}>
                    {techSpecs.map((spec, index) => (
                      <div key={index} className={styles.specsDisplayItem}>
                        <span className={styles.specsDisplayLabel}>{spec.label}</span>
                        <span className={styles.specsDisplayValue}>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* 显示模式切换按钮 */}
            <div className={styles.actionButtons}>
              <button 
                className={styles.actionBtn}
                onClick={() => setDisplayMode(displayMode === 'normal' ? 'specs' : 'normal')}
              >
                {displayMode === 'normal' ? '📊' : '🏠'}
              </button>
              <button 
                className={styles.actionBtn}
                onClick={() => setSelectedAI('lunar')}
              >
                🌙
              </button>
              <button 
                className={styles.actionBtn}
                onClick={() => setSelectedAI('zen')}
              >
                🧠
              </button>
              <button 
                className={styles.actionBtn}
                onClick={() => setSelectedAI('guardian')}
              >
                🛡️
              </button>
            </div>
          </div>

          {/* 表带 */}
          <div className={styles.watchBand}></div>
        </div>

        </div>
    </section>
  );
};

export default WatchDisplay;