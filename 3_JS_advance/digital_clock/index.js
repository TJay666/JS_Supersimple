function getBackgroundImage(hours24) {
    // 將24小時制時間對應到對應的背景圖片
    // hours24 is an integer between 0 and 23 which represents the current hour in 24-hour format
    if (hours24 >= 4 && hours24 <= 8) {
        return '101morning.png';  // 04:00 AM - 08:00 AM
    } else if (hours24 > 8 && hours24 <= 16) {
        return '101rise.png';     // 08:01 AM - 04:00 PM
    } else if (hours24 > 16 && hours24 <= 19) {
        return '101set.png';      // 04:01 PM - 07:00 PM
    } else if (hours24 > 19 && hours24 <= 22) {
        return '101night.png';    // 07:01 PM - 10:00 PM
    } else {
        return '101midnight.png'; // 10:01 PM - 03:59 AM
    }
}

// 更新背景圖片
function updateBackground(hours24) {
    const newImage = getBackgroundImage(hours24);
    const currentBackground = document.querySelector('.background.current');
    const nextBackground = document.querySelector('.background.next');
    
    // 如果背景圖片需要更改
    if (!currentBackground.style.backgroundImage.includes(newImage)) {
        // 設置新背景
        nextBackground.style.backgroundImage = `url('${newImage}')`;
        
        // 切換類別以觸發淡入淡出效果
        currentBackground.classList.remove('current');
        nextBackground.classList.add('current');
        
        // 在過渡完成後，將當前背景設為下一個背景
        setTimeout(() => {
            currentBackground.style.backgroundImage = `url('${newImage}')`;
            currentBackground.classList.add('current');
            nextBackground.classList.remove('current');
        }, 3000); // 3秒後，與 CSS 過渡時間相匹配
    }
}

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const hours24 = hours; // 保存24小時制的時間用於判斷背景
    
    // 轉換為12小時制
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    
    // 格式化時間
    hours = hours.toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // 更新時鐘顯示
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById('clock').textContent = timeString;
    
    // 更新背景
    updateBackground(hours24);
}

// 初始化背景
const initialHours = new Date().getHours();
document.querySelector('.background.current').style.backgroundImage = 
    `url('${getBackgroundImage(initialHours)}')`;

// 開始時鐘更新
updateClock();
setInterval(updateClock, 1000);