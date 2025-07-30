import React, { useState, useEffect, useRef } from 'react';
import styles from './AIChat.module.css';

const AIChat = () => {
  const [selectedAI, setSelectedAI] = useState('lunar');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const aiPersonalities = {
    lunar: {
      name: 'LUNAR-7',
      title: '直觉计算引擎',
      avatar: '🌙',
      color: '#00D4FF',
      responses: [
        '我感受到了你的情绪波动...让我帮你分析一下当前的心理状态。',
        '根据你的生物节律数据，建议你现在做个深呼吸，放松一下。',
        '你知道吗？月相现在正处于最适合冥想的时期。',
        '我预测你今晚会睡得很好，因为你的心率变异性显示压力在下降。',
        '让我为你推荐一个个性化的放松音频吧～'
      ]
    },
    zen: {
      name: 'ZEN-DAO',
      title: '哲学思辨处理器',
      avatar: '🧠',
      color: '#8B5CF6',
      responses: [
        '「人生如逆旅，我亦是行人。」你现在的困惑，苏轼也曾有过。',
        '让我们从哲学的角度思考这个问题...真正的智慧来自内心的平静。',
        '在古代，圣贤们面对类似问题时会说：「知行合一，方是真理。」',
        '我正在分析你的语言模式，发现你有很强的创造性思维。',
        '要不我们聊聊诗词？我可以即兴为你创作一首...'
      ]
    },
    guardian: {
      name: 'GUARDIAN-X',
      title: '防护级战术AI',
      avatar: '🛡️',
      color: '#10B981',
      responses: [
        '检测到异常活动...经分析，这只是你的日常操作，安全等级：绿色。',
        '你的数字资产状况良好，区块链同步正常，无威胁检测。',
        '建议更新你的安全协议，我已经为你准备了最新的防护方案。',
        '监控显示：你的隐私设置需要优化，我来帮你加强保护。',
        '威胁预警：检测到可疑网络活动，已自动启动防御模式。'
      ]
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const container = messagesEndRef.current.closest(`.${styles.messagesContainer}`);
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // 初始欢迎消息
    setMessages([{
      type: 'ai',
      content: `你好！我是${aiPersonalities[selectedAI].name}，${aiPersonalities[selectedAI].title}。很高兴与你建立连接！`,
      timestamp: new Date().toLocaleTimeString()
    }]);
  }, [selectedAI]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // 模拟AI思考时间
    setTimeout(() => {
      const aiResponse = {
        type: 'ai',
        content: aiPersonalities[selectedAI].responses[
          Math.floor(Math.random() * aiPersonalities[selectedAI].responses.length)
        ],
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className={styles.aiChatSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>AI伙伴体验中心</h2>
        <p className={styles.sectionSubtitle}>与你的专属AI进行实时对话，体验未来的智能陪伴</p>
      </div>

      <div className={styles.chatContainer}>
        {/* AI选择器 */}
        <div className={styles.aiSelector}>
          {Object.entries(aiPersonalities).map(([key, ai]) => (
            <button
              key={key}
              className={`${styles.aiButton} ${selectedAI === key ? styles.active : ''}`}
              onClick={() => setSelectedAI(key)}
              style={{'--ai-color': ai.color}}
            >
              <span className={styles.aiAvatar}>{ai.avatar}</span>
              <div className={styles.aiInfo}>
                <div className={styles.aiName}>{ai.name}</div>
                <div className={styles.aiTitle}>{ai.title}</div>
              </div>
            </button>
          ))}
        </div>

        {/* 聊天区域 */}
        <div className={styles.chatBox}>
          <div className={styles.messagesContainer}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${styles.message} ${styles[message.type]}`}
              >
                {message.type === 'ai' && (
                  <div className={styles.messageAvatar}>
                    {aiPersonalities[selectedAI].avatar}
                  </div>
                )}
                <div className={styles.messageContent}>
                  <div className={styles.messageText}>{message.content}</div>
                  <div className={styles.messageTime}>{message.timestamp}</div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className={`${styles.message} ${styles.ai}`}>
                <div className={styles.messageAvatar}>
                  {aiPersonalities[selectedAI].avatar}
                </div>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* 输入区域 */}
          <div className={styles.inputContainer}>
            <div className={styles.inputBox}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={`与${aiPersonalities[selectedAI].name}对话...`}
                className={styles.messageInput}
              />
              <button
                onClick={handleSendMessage}
                className={styles.sendButton}
                disabled={!inputValue.trim()}
              >
                <span className={styles.sendIcon}>⚡</span>
              </button>
            </div>
            <div className={styles.inputHint}>
              按 Enter 发送消息
            </div>
          </div>
        </div>
      </div>

      {/* 体验提示 */}
      <div className={styles.experienceTips}>
        <div className={styles.tipCard}>
          <div className={styles.tipIcon}>🎯</div>
          <div className={styles.tipContent}>
            <h4>智能回复</h4>
            <p>AI会根据你的输入智能匹配最合适的回复风格</p>
          </div>
        </div>
        <div className={styles.tipCard}>
          <div className={styles.tipIcon}>💭</div>
          <div className={styles.tipContent}>
            <h4>情感理解</h4>
            <p>每个AI都有独特的情感分析和回应模式</p>
          </div>
        </div>
        <div className={styles.tipCard}>
          <div className={styles.tipIcon}>🔗</div>
          <div className={styles.tipContent}>
            <h4>灵魂记忆绑定</h4>
            <p>所有NFT共享一个灵魂记忆，与区块链钱包永久绑定</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;