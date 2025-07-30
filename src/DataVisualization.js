import React, { useState, useEffect } from 'react';
import styles from './DataVisualization.module.css';

const DataVisualization = () => {
  const [activeTab, setActiveTab] = useState('ecosystem');
  const [animatedValues, setAnimatedValues] = useState({
    totalUsers: 0,
    nftsMinted: 0,
    aiInteractions: 0,
    blockchainTxs: 0
  });

  const finalValues = {
    totalUsers: 15847,
    nftsMinted: 3392,
    aiInteractions: 2847392,
    blockchainTxs: 89473
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues(prev => ({
        totalUsers: Math.min(finalValues.totalUsers, prev.totalUsers + Math.ceil(finalValues.totalUsers / 100)),
        nftsMinted: Math.min(finalValues.nftsMinted, prev.nftsMinted + Math.ceil(finalValues.nftsMinted / 100)),
        aiInteractions: Math.min(finalValues.aiInteractions, prev.aiInteractions + Math.ceil(finalValues.aiInteractions / 100)),
        blockchainTxs: Math.min(finalValues.blockchainTxs, prev.blockchainTxs + Math.ceil(finalValues.blockchainTxs / 100))
      }));
    }, 50);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setAnimatedValues(finalValues);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const ecosystemData = [
    { label: '活跃用户', value: animatedValues.totalUsers, icon: '👥', color: '#00D4FF' },
    { label: 'NFT铸造', value: animatedValues.nftsMinted, icon: '💎', color: '#8B5CF6' },
    { label: 'AI对话', value: animatedValues.aiInteractions, icon: '🤖', color: '#10B981' },
    { label: '链上交易', value: animatedValues.blockchainTxs, icon: '⛓️', color: '#F59E0B' }
  ];

  const rarityData = [
    { level: 'Common', percentage: 85, color: '#4CAF50', count: 2881 },
    { level: 'Rare', percentage: 12, color: '#2196F3', count: 407 },
    { level: 'Epic', percentage: 2.8, color: '#9C27B0', count: 95 },
    { level: 'Legendary', percentage: 0.2, color: '#FF9800', count: 9 }
  ];

  const aiActivityData = [
    { ai: 'LUNAR-7', activity: 78, messages: 892734, color: '#00D4FF' },
    { ai: 'ZEN-DAO', activity: 65, messages: 745829, color: '#8B5CF6' },
    { ai: 'GUARDIAN-X', activity: 89, messages: 1208829, color: '#10B981' }
  ];

  const networkStats = [
    { metric: 'TPS', value: '10,000+', trend: '+15%', icon: '⚡' },
    { metric: 'Gas费', value: '0.001 ETH', trend: '-23%', icon: '⛽' },
    { metric: '节点数', value: '2,847', trend: '+8%', icon: '🌐' },
    { metric: '质押率', value: '67.3%', trend: '+3%', icon: '🔒' }
  ];

  return (
    <section className={styles.dataSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>实时数据中心</h2>
        <p className={styles.sectionSubtitle}>透明化的Web3生态数据，实时监控AI伙伴活动</p>
      </div>

      <div className={styles.dataContainer}>
        {/* 数据选项卡 */}
        <div className={styles.tabNavigation}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'ecosystem' ? styles.active : ''}`}
            onClick={() => setActiveTab('ecosystem')}
          >
            <span className={styles.tabIcon}>🌟</span>
            生态概览
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'rarity' ? styles.active : ''}`}
            onClick={() => setActiveTab('rarity')}
          >
            <span className={styles.tabIcon}>💎</span>
            稀有度分布
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'ai' ? styles.active : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            <span className={styles.tabIcon}>🤖</span>
            AI活跃度
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'network' ? styles.active : ''}`}
            onClick={() => setActiveTab('network')}
          >
            <span className={styles.tabIcon}>⛓️</span>
            网络状态
          </button>
        </div>

        {/* 生态概览 */}
        {activeTab === 'ecosystem' && (
          <div className={styles.tabContent}>
            <div className={styles.statsGrid}>
              {ecosystemData.map((item, index) => (
                <div key={index} className={styles.statCard} style={{'--accent-color': item.color}}>
                  <div className={styles.statIcon}>{item.icon}</div>
                  <div className={styles.statContent}>
                    <div className={styles.statValue}>
                      {item.value.toLocaleString()}
                    </div>
                    <div className={styles.statLabel}>{item.label}</div>
                  </div>
                  <div className={styles.statGlow}></div>
                </div>
              ))}
            </div>
            
            <div className={styles.chartArea}>
              <h3 className={styles.chartTitle}>用户增长趋势</h3>
              <div className={styles.trendChart}>
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className={styles.chartBar}
                    style={{
                      height: `${Math.random() * 60 + 20}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 稀有度分布 */}
        {activeTab === 'rarity' && (
          <div className={styles.tabContent}>
            <div className={styles.rarityGrid}>
              {rarityData.map((item, index) => (
                <div key={index} className={styles.rarityCard} style={{'--rarity-color': item.color}}>
                  <div className={styles.rarityHeader}>
                    <h4 className={styles.rarityLevel}>{item.level}</h4>
                    <span className={styles.rarityCount}>{item.count}个</span>
                  </div>
                  <div className={styles.rarityBar}>
                    <div 
                      className={styles.rarityFill}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className={styles.rarityPercentage}>{item.percentage}%</div>
                </div>
              ))}
            </div>
            
            <div className={styles.pieChart}>
              <div className={styles.pieContainer}>
                <svg className={styles.pieSvg} viewBox="0 0 200 200">
                  {rarityData.map((item, index) => {
                    const total = rarityData.reduce((sum, d) => sum + d.percentage, 0);
                    const percentage = item.percentage / total;
                    const angle = percentage * 360;
                    const startAngle = rarityData.slice(0, index).reduce((sum, d) => sum + (d.percentage / total) * 360, 0);
                    
                    return (
                      <circle
                        key={index}
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="20"
                        strokeDasharray={`${percentage * 502.4} 502.4`}
                        strokeDashoffset={-startAngle * 502.4 / 360}
                        transform="rotate(-90 100 100)"
                      />
                    );
                  })}
                </svg>
                <div className={styles.pieCenter}>
                  <div className={styles.pieCenterText}>
                    <span className={styles.pieCenterValue}>3,392</span>
                    <span className={styles.pieCenterLabel}>总铸造量</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AI活跃度 */}
        {activeTab === 'ai' && (
          <div className={styles.tabContent}>
            <div className={styles.aiStatsGrid}>
              {aiActivityData.map((ai, index) => (
                <div key={index} className={styles.aiCard} style={{'--ai-color': ai.color}}>
                  <div className={styles.aiHeader}>
                    <h4 className={styles.aiName}>{ai.ai}</h4>
                    <div className={styles.aiActivity}>
                      <span className={styles.activityDot}></span>
                      活跃度 {ai.activity}%
                    </div>
                  </div>
                  <div className={styles.aiStats}>
                    <div className={styles.aiStat}>
                      <span className={styles.aiStatLabel}>总对话数</span>
                      <span className={styles.aiStatValue}>{ai.messages.toLocaleString()}</span>
                    </div>
                    <div className={styles.aiActivityBar}>
                      <div 
                        className={styles.aiActivityFill}
                        style={{ width: `${ai.activity}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.aiAnalytics}>
              <h3 className={styles.analyticsTitle}>AI对话分析</h3>
              <div className={styles.analyticsGrid}>
                <div className={styles.analyticsCard}>
                  <div className={styles.analyticsIcon}>💬</div>
                  <div className={styles.analyticsContent}>
                    <div className={styles.analyticsValue}>2.8M</div>
                    <div className={styles.analyticsLabel}>总对话数</div>
                  </div>
                </div>
                <div className={styles.analyticsCard}>
                  <div className={styles.analyticsIcon}>⏰</div>
                  <div className={styles.analyticsContent}>
                    <div className={styles.analyticsValue}>24.3分钟</div>
                    <div className={styles.analyticsLabel}>平均对话时长</div>
                  </div>
                </div>
                <div className={styles.analyticsCard}>
                  <div className={styles.analyticsIcon}>😊</div>
                  <div className={styles.analyticsContent}>
                    <div className={styles.analyticsValue}>92.7%</div>
                    <div className={styles.analyticsLabel}>用户满意度</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 网络状态 */}
        {activeTab === 'network' && (
          <div className={styles.tabContent}>
            <div className={styles.networkGrid}>
              {networkStats.map((stat, index) => (
                <div key={index} className={styles.networkCard}>
                  <div className={styles.networkIcon}>{stat.icon}</div>
                  <div className={styles.networkContent}>
                    <div className={styles.networkMetric}>{stat.metric}</div>
                    <div className={styles.networkValue}>{stat.value}</div>
                    <div className={`${styles.networkTrend} ${stat.trend.startsWith('+') ? styles.positive : styles.negative}`}>
                      {stat.trend}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.networkStatus}>
              <h3 className={styles.statusTitle}>网络健康状态</h3>
              <div className={styles.statusIndicators}>
                <div className={styles.statusItem}>
                  <div className={styles.statusDot} style={{'--status-color': '#10B981'}}></div>
                  <span>区块链网络</span>
                  <span className={styles.statusValue}>正常</span>
                </div>
                <div className={styles.statusItem}>
                  <div className={styles.statusDot} style={{'--status-color': '#10B981'}}></div>
                  <span>AI服务</span>
                  <span className={styles.statusValue}>正常</span>
                </div>
                <div className={styles.statusItem}>
                  <div className={styles.statusDot} style={{'--status-color': '#F59E0B'}}></div>
                  <span>NFT市场</span>
                  <span className={styles.statusValue}>维护中</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DataVisualization;