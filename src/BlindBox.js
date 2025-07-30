import React, { useState, useEffect } from 'react';
import { getRandomCharacter } from './characters';
import styles from './BlindBox.module.css';
// 使用public路径，便于部署
const treasureChestImg = '/assets/mysterioustreasurechestpixelart.png';

// 角色卡片子组件
const CharacterCard = ({ character, onReset }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.characterCard} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.cardGlow} style={{'--rarity-color': character.rarityColor}}></div>
      <div className={styles.cardContent}>
        <div className={styles.rarityBadge} style={{'--rarity-color': character.rarityColor}}>
          {character.rarity}
        </div>
        <div className={styles.characterImageWrapper}>
          <img 
            src={character.image} 
            alt={character.name}
            className={styles.characterImage}
            style={{filter: `drop-shadow(0 0 20px ${character.rarityColor})`}}
          />
          <div className={styles.imageGlow} style={{'--rarity-color': character.rarityColor}}></div>
        </div>
        <div className={styles.characterInfo}>
          <h3 className={styles.characterName}>{character.name}</h3>
          <p className={styles.characterDescription}>{character.description}</p>
          <div className={styles.traits}>
            {character.traits.map((trait, index) => (
              <span key={index} className={styles.traitTag}>
                {trait}
              </span>
            ))}
          </div>
        </div>
        <button 
          className={styles.resetButton}
          onClick={onReset}
        >
          <span className={styles.resetIcon}>🎁</span>
          再开一次
        </button>
      </div>
    </div>
  );
};

// 主盲盒组件
const BlindBox = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [openedCharacter, setOpenedCharacter] = useState(null);
  const [showParticles, setShowParticles] = useState(false);

  const handleBoxClick = () => {
    if (isOpening || openedCharacter) return;

    setIsOpening(true);
    setShowParticles(true);

    // 3秒开箱动画
    setTimeout(() => {
      const character = getRandomCharacter();
      setOpenedCharacter(character);
      setIsOpening(false);
      setShowParticles(false);
    }, 3000);
  };

  const handleReset = () => {
    setOpenedCharacter(null);
    setIsOpening(false);
    setShowParticles(false);
  };

  return (
    <div className={styles.blindBoxContainer}>
      <div className={styles.blindBoxContent}>
        <div className={styles.headerSection}>
          <h2 className={styles.title}>
            <span className={styles.titleGradient}>神秘盲盒</span>
          </h2>
          <p className={styles.subtitle}>
            点击宝箱，唤醒你的专属AI虚拟生命
          </p>
        </div>

        <div className={styles.boxSection}>
          {!openedCharacter ? (
            <div className={styles.boxWrapper}>
              <div 
                className={`${styles.treasureBox} ${isOpening ? styles.opening : ''}`}
                onClick={handleBoxClick}
              >
                <img 
                  src={treasureChestImg} 
                  alt="神秘宝箱"
                  className={styles.boxImage}
                  style={{backgroundColor: 'transparent'}}
                />
                <div className={styles.boxGlow}></div>
                {isOpening && (
                  <div className={styles.openingEffects}>
                    <div className={styles.pulseRing}></div>
                    <div className={styles.sparkles}>
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className={styles.sparkle} style={{'--delay': `${i * 0.1}s`}}>✨</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {!isOpening && (
                <div className={styles.clickHint}>
                  <span className={styles.hintText}>点击开启</span>
                  <div className={styles.hintArrow}>↑</div>
                </div>
              )}

              {isOpening && (
                <div className={styles.openingText}>
                  <div className={styles.openingAnimation}>
                    <span>正在召唤中</span>
                    <div className={styles.loadingDots}>
                      <span>.</span><span>.</span><span>.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <CharacterCard character={openedCharacter} onReset={handleReset} />
          )}
        </div>

        {showParticles && (
          <div className={styles.particleSystem}>
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className={styles.particle}
                style={{
                  '--delay': `${Math.random() * 2}s`,
                  '--x': `${Math.random() * 100}%`,
                  '--y': `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlindBox;