export class Card {
    init(limit) {
        console.log('Card init');
        // 查找所有 article 元素
        document.querySelectorAll('article').forEach(article => {
            if (article.classList.contains('main-article') === false) {
                // 1. 添加 class="card"
                if (article.parentElement.classList.contains('article-list--tile') === false && article.classList.contains('has-image') === false) {
                    article.parentElement.classList.add('card');
                } else {
                    article.classList.add('card');
                }
            }

        });

        // 3D 卡片悬停特效（原生 JS 版）
        document.querySelectorAll('.card').forEach(card => {
            // const glareEl = card.querySelector('.glare') || null;

            // 鼠标移动
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // 归一化到 [0, 1]
                const offsetX = x / rect.width;
                const offsetY = y / rect.height;

                // 计算旋转角度（-limits 到 +limits）
                const rotateY = (offsetX - 0.5) * 2 * limit;
                const rotateX = (0.5 - offsetY) * 2 * limit;

                // 计算阴影偏移（-16 到 +16）
                const shadowOffsetX = (offsetX - 0.5) * 32;
                const shadowOffsetY = (offsetY - 0.5) * 32;

                // 多层阴影（模拟景深）
                const shadows = [
                    `${(1 / 6) * -shadowOffsetX}px ${(1 / 6) * -shadowOffsetY}px 3px rgba(0,0,0,0.051)`,
                    `${(2 / 6) * -shadowOffsetX}px ${(2 / 6) * -shadowOffsetY}px 7.2px rgba(0,0,0,0.073)`,
                    `${(3 / 6) * -shadowOffsetX}px ${(3 / 6) * -shadowOffsetY}px 13.6px rgba(0,0,0,0.09)`,
                    `${(4 / 6) * -shadowOffsetX}px ${(4 / 6) * -shadowOffsetY}px 24.3px rgba(0,0,0,0.107)`,
                    `${(5 / 6) * -shadowOffsetX}px ${(5 / 6) * -shadowOffsetY}px 45.5px rgba(0,0,0,0.129)`,
                    `${-shadowOffsetX}px ${-shadowOffsetY}px 109px rgba(0,0,0,0.18)`
                ];

                card.style.cssText = `
                    transform: perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg);
                    box-shadow: ${shadows.join(', ')};
                    transition: none;
                `;

            });

            // 鼠标离开：复位
            card.addEventListener('mouseleave', () => {
                card.style.cssText = `
                    transform: perspective(1000px) rotateX(0) rotateY(0);
                    box-shadow: 0 0 3px rgba(0,0,0,0.051), 
                                0 0 7.2px rgba(0,0,0,0.073), 
                                0 0 13.6px rgba(0,0,0,0.09), 
                                0 0 24.3px rgba(0,0,0,0.107), 
                                0 0 45.5px rgba(0,0,0,0.129), 
                                0 0 109px rgba(0,0,0,0.18);
                    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
                 `;
            });
        });
    }
}




