import React, { useState } from 'react';
import styles from './PersonalizationConfig.module.css';

const PersonalizationConfig = () => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [activeCustomization, setActiveCustomization] = useState('appearance');
  const [watchConfig, setWatchConfig] = useState({
    faceColor: '#00D4FF',
    bandColor: '#1a1a1a',
    aiPersonality: 'lunar',
    notifications: true,
    biometrics: true,
    blockchain: true
  });

  const customizationOptions = {
    appearance: {
      title: '外观定制',
      icon: '🎨',
      options: [
        { id: 'face', label: '表盘颜色', type: 'color', value: watchConfig.faceColor, 
          colors: ['#00D4FF', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'] },
        { id: 'band', label: '表带材质', type: 'select', value: 'titanium',
          options: ['钛合金', '碳纤维', '陶瓷', '液态金属'] },
        { id: 'size', label: '表盘尺寸', type: 'select', value: '42mm',
          options: ['38mm', '42mm', '46mm'] }
      ]
    },
    ai: {
      title: 'AI个性化',
      icon: '🤖',
      options: [
        { id: 'personality', label: '主AI伙伴', type: 'ai-select', value: watchConfig.aiPersonality },
        { id: 'voice', label: '语音风格', type: 'select', value: 'natural',
          options: ['自然', '机械', '温柔', '活泼'] },
        { id: 'response', label: '回复风格', type: 'select', value: 'detailed',
          options: ['简洁', '详细', '幽默', '专业'] }
      ]
    },
    features: {
      title: '功能配置',
      icon: '⚙️',
      options: [
        { id: 'health', label: '健康监测', type: 'toggle', value: true },
        { id: 'payments', label: '加密支付', type: 'toggle', value: true },
        { id: 'gaming', label: '元宇宙游戏', type: 'toggle', value: false },
        { id: 'social', label: '社交功能', type: 'toggle', value: true }
      ]
    },
    security: {
      title: '安全设置',
      icon: '🔒',
      options: [
        { id: 'biometric', label: '生物识别', type: 'multi-select', 
          value: ['fingerprint', 'heartrate'],
          options: ['指纹', '心率', '声纹', '步态'] },
        { id: 'encryption', label: '加密等级', type: 'select', value: 'quantum',
          options: ['标准', '增强', '量子级'] },
        { id: 'backup', label: '私钥备份', type: 'select', value: 'distributed',
          options: ['本地', '云端', '分布式'] }
      ]
    }
  };

  const aiPersonalities = {
    lunar: { name: 'LUNAR-7', avatar: '🌙', description: '直觉敏锐的情感AI' },
    zen: { name: 'ZEN-DAO', avatar: '🧠', description: '深度思考的哲学AI' },
    guardian: { name: 'GUARDIAN-X', avatar: '🛡️', description: '专注防护的安全AI' }
  };

  const handleFeatureSelect = (feature) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const handleConfigChange = (key, value) => {
    setWatchConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const renderOption = (option) => {
    switch (option.type) {
      case 'color':
        return (
          <div className={styles.colorPicker}>
            {option.colors.map(color => (
              <button
                key={color}
                className={`${styles.colorOption} ${watchConfig.faceColor === color ? styles.selected : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleConfigChange('faceColor', color)}
              />
            ))}
          </div>
        );
      
      case 'select':
        return (
          <select className={styles.selectInput} defaultValue={option.value}>
            {option.options.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        );
      
      case 'ai-select':
        return (
          <div className={styles.aiSelector}>
            {Object.entries(aiPersonalities).map(([key, ai]) => (
              <button
                key={key}
                className={`${styles.aiOption} ${watchConfig.aiPersonality === key ? styles.selected : ''}`}
                onClick={() => handleConfigChange('aiPersonality', key)}
              >
                <span className={styles.aiAvatar}>{ai.avatar}</span>
                <div className={styles.aiInfo}>
                  <div className={styles.aiName}>{ai.name}</div>
                  <div className={styles.aiDesc}>{ai.description}</div>
                </div>
              </button>
            ))}
          </div>
        );
      
      case 'toggle':
        return (
          <label className={styles.toggleSwitch}>
            <input
              type="checkbox"
              defaultChecked={option.value}
              onChange={(e) => handleConfigChange(option.id, e.target.checked)}
            />
            <span className={styles.slider}></span>
          </label>
        );
      
      case 'multi-select':
        return (
          <div className={styles.multiSelect}>
            {option.options.map(opt => (
              <button
                key={opt}
                className={`${styles.multiOption} ${option.value.includes(opt.toLowerCase()) ? styles.selected : ''}`}
                onClick={() => {/* Handle multi-select */}}
              >
                {opt}
              </button>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className={styles.configSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>个性化定制中心</h2>
        <p className={styles.sectionSubtitle}>打造专属于你的Web3智能手表体验</p>
      </div>

      <div className={styles.configContainer}>
        {/* 预览区域 */}
        <div className={styles.previewArea}>
          <div className={styles.watchPreview}>
            <div 
              className={styles.watchFace}
              style={{ 
                borderColor: watchConfig.faceColor,
                boxShadow: `0 0 30px ${watchConfig.faceColor}40`
              }}
            >
              <div className={styles.watchDisplay}>
                {/* 时间显示 */}
                <div className={styles.timeDisplay}>
                  <span className={styles.time}>14:27</span>
                  <span className={styles.date}>星期三</span>
                </div>
                
                {/* AI头像 */}
                <div className={styles.aiDisplay}>
                  <div 
                    className={styles.aiAvatar}
                    style={{ color: watchConfig.faceColor }}
                  >
                    {aiPersonalities[watchConfig.aiPersonality].avatar}
                  </div>
                  <div className={styles.aiGreeting}>
                    "{watchConfig.aiPersonality === 'lunar' ? '感受到你的存在了～' : 
                      watchConfig.aiPersonality === 'zen' ? '心如止水，智慧如流' : 
                      '系统运行正常，守护模式启动'}"
                  </div>
                </div>

                {/* 健康数据 */}
                <div className={styles.healthData}>
                  <div className={styles.healthItem}>
                    <span className={styles.healthIcon}>💓</span>
                    <span>72 bpm</span>
                  </div>
                  <div className={styles.healthItem}>
                    <span className={styles.healthIcon}>🔥</span>
                    <span>432 cal</span>
                  </div>
                </div>

                {/* 状态指示器 */}
                <div className={styles.statusIndicators}>
                  <div className={`${styles.statusDot} ${styles.connected}`}></div>
                  <div className={`${styles.statusDot} ${styles.secure}`}></div>
                  <div className={`${styles.statusDot} ${styles.active}`}></div>
                </div>
              </div>
            </div>
            
            <div className={styles.previewLabel}>
              实时预览
            </div>
          </div>

          {/* 配置摘要 */}
          <div className={styles.configSummary}>
            <h3 className={styles.summaryTitle}>配置摘要</h3>
            <div className={styles.summaryList}>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>AI伙伴</span>
                <span className={styles.summaryValue}>
                  {aiPersonalities[watchConfig.aiPersonality].name}
                </span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>主题色</span>
                <span 
                  className={styles.colorIndicator}
                  style={{ backgroundColor: watchConfig.faceColor }}
                ></span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>功能数</span>
                <span className={styles.summaryValue}>{selectedFeatures.length}/12</span>
              </div>
            </div>
          </div>
        </div>

        {/* 配置面板 */}
        <div className={styles.configPanel}>
          {/* 配置选项卡 */}
          <div className={styles.configTabs}>
            {Object.entries(customizationOptions).map(([key, section]) => (
              <button
                key={key}
                className={`${styles.configTab} ${activeCustomization === key ? styles.active : ''}`}
                onClick={() => setActiveCustomization(key)}
              >
                <span className={styles.tabIcon}>{section.icon}</span>
                <span className={styles.tabLabel}>{section.title}</span>
              </button>
            ))}
          </div>

          {/* 配置内容 */}
          <div className={styles.configContent}>
            <h3 className={styles.contentTitle}>
              {customizationOptions[activeCustomization].title}
            </h3>
            
            <div className={styles.optionsList}>
              {customizationOptions[activeCustomization].options.map(option => (
                <div key={option.id} className={styles.optionItem}>
                  <div className={styles.optionHeader}>
                    <label className={styles.optionLabel}>{option.label}</label>
                    {option.type === 'toggle' && (
                      <span className={styles.optionStatus}>
                        {option.value ? '已启用' : '已禁用'}
                      </span>
                    )}
                  </div>
                  <div className={styles.optionControl}>
                    {renderOption(option)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 操作按钮 */}
          <div className={styles.configActions}>
            <button className={styles.resetButton}>
              <span className={styles.actionIcon}>🔄</span>
              重置默认
            </button>
            <button className={styles.previewButton}>
              <span className={styles.actionIcon}>👁️</span>
              实时预览
            </button>
            <button className={styles.saveButton}>
              <span className={styles.actionIcon}>💾</span>
              保存配置
            </button>
          </div>
        </div>
      </div>

      {/* 推荐配置 */}
      <div className={styles.recommendedConfigs}>
        <h3 className={styles.recommendedTitle}>推荐配置方案</h3>
        <div className={styles.configCards}>
          <div className={styles.configCard}>
            <div className={styles.cardIcon}>🌙</div>
            <h4 className={styles.cardTitle}>夜猫子模式</h4>
            <p className={styles.cardDesc}>深蓝配色 + LUNAR-7 + 睡眠优化</p>
            <button className={styles.applyButton}>应用</button>
          </div>
          <div className={styles.configCard}>
            <div className={styles.cardIcon}>💼</div>
            <h4 className={styles.cardTitle}>商务精英</h4>
            <p className={styles.cardDesc}>黑金配色 + GUARDIAN-X + 安全增强</p>
            <button className={styles.applyButton}>应用</button>
          </div>
          <div className={styles.configCard}>
            <div className={styles.cardIcon}>🎨</div>
            <h4 className={styles.cardTitle}>创意工作者</h4>
            <p className={styles.cardDesc}>彩虹配色 + ZEN-DAO + 灵感助手</p>
            <button className={styles.applyButton}>应用</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationConfig;