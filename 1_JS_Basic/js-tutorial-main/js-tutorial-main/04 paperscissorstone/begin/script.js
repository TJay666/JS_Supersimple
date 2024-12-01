/*
剪刀石頭布 🚀🔥
此專案涵蓋的概念
👉 迴圈
👉 DOM 操作
👉 變數
👉 條件語句 (if else if)
👉 樣板字面值
👉 事件監聽器
👉 高階函數 (Math.random())
*/

// ** getComputerChoice 函數隨機從 stone paper scissors 選擇一個並返回該字串 **
// getComputerChoice() 👉 '石頭'
// getComputerChoice() 👉 '剪刀'
/*
剪刀石頭布遊戲 🎮
使用表情符號版本
👉 使用表情符號作為按鈕
👉 使用 value 屬性獲取選擇
👉 優化顯示效果
*/

// 表情符號對應
const emojiMap = {
  'Stone': '✊',
  'Paper': '🤚',
  'Scissors': '✌'
}

// 獲取電腦的選擇
function getComputerChoice() {
  const choices = ['Stone', 'Paper', 'Scissors']
  return choices[Math.floor(Math.random() * 3)]
}

// 判斷遊戲結果
function getResult(playerChoice, computerChoice) {
  // 如果選擇相同，則平手
  if (playerChoice === computerChoice) {
    return 0
  }
  
  // 定義勝利條件
  if (
    (playerChoice === 'Stone' && computerChoice === 'Scissors') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Stone')
  ) {
    return 1  // 玩家勝利
  }
  
  return -1  // 電腦勝利
}

// 更新分數和顯示結果
let totalScore = 0
function showResult(score, playerChoice, computerChoice) {
  const result = document.getElementById('result')
  const playerScore = document.getElementById('player-score')
  const hands = document.getElementById('hands')
  
  // 更新總分
  totalScore += score
  
  // 顯示雙方選擇的表情符號
  hands.innerText = `👤 ${emojiMap[playerChoice]} vs ${emojiMap[computerChoice]} 🤖`
  
  // 顯示分數
  playerScore.innerText = `分數: ${totalScore}`
  
  // 顯示結果
  switch (score) {
    case 1:
      result.innerText = '你贏了！🎉'
      break
    case 0:
      result.innerText = '平手！🤝'
      break
    case -1:
      result.innerText = '你輸了！💔'
      break
  }
}

// 處理點擊事件
function onClickPSS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  showResult(score, playerChoice, computerChoice)
}

// 遊戲初始化
function playGame() {
  const pssButtons = document.querySelectorAll('.pssButton')
  
  // 為每個按鈕添加點擊事件
  pssButtons.forEach(button => {
    button.addEventListener('click', () => onClickPSS(button.value))
  })
  
  // 結束遊戲按鈕
  const endGameBtn = document.getElementById('endGameButton')
  endGameBtn.addEventListener('click', endGame)
}

// 結束遊戲，清空顯示
function endGame() {
  totalScore = 0  // 重置分數
  
  // 清空所有顯示
  const elements = ['player-score', 'hands', 'result']
  // Use forEach to clear the text content of each element
  // id 是 elements 陣列中的每個元素
  elements.forEach(id => {
    document.getElementById(id).innerText = ''
  })
}

// 添加一些基本的樣式
document.querySelectorAll('.pssButton').forEach(button => {
  button.style.fontSize = '2rem'
  button.style.margin = '0 10px'
  button.style.cursor = 'pointer'
})

// 啟動遊戲
playGame()
