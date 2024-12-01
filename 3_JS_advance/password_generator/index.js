// RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "@!#$%^&*()_+-=[]{}|;:,.<>?";

    let allowedChars = "";
    let password = "";

    // 根據設定加入可用的字元
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    // 錯誤處理：檢查長度是否大於 0
    if (length <= 0) {
        return "Password length must be at least 1";
    }

    // 錯誤處理：檢查是否選擇至少一組字元
    if (allowedChars.length === 0) {
        return "At least one set of characters needs to be selected";
    }

    // 生成密碼
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// 設定密碼生成器的參數
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

// 生成密碼並輸出
const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(password);

// 將生成的密碼顯示在輸入框中
document.getElementById('password-display').value = password;

// 重新生成密碼
document.getElementById('regenerate').addEventListener('click', () => {
    const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById('password-display').value = password;
});

// 複製密碼到剪貼簿
document.getElementById('copy').addEventListener('click', () => {
    const passwordField = document.getElementById('password-display');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
});

// 從 localStorage 中讀取儲存的密碼清單並顯示
document.addEventListener('DOMContentLoaded', () => {
    const passwordList = document.getElementById('password-list');
    const savedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];

    savedPasswords.forEach(passwordData => {
        const passwordRow = document.createElement('tr');

        const platformCell = document.createElement('td');
        platformCell.textContent = passwordData.platform;
        passwordRow.appendChild(platformCell);

        const datetimeCell = document.createElement('td');
        datetimeCell.textContent = passwordData.datetime;
        passwordRow.appendChild(datetimeCell);

        const passwordCell = document.createElement('td');
        passwordCell.textContent = passwordData.password;
        passwordRow.appendChild(passwordCell);

        passwordList.appendChild(passwordRow);

        // 添加分隔線
        const separatorRow = document.createElement('tr');
        const separatorCell = document.createElement('td');
        separatorCell.colSpan = 3;
        separatorCell.innerHTML = '<hr>';
        passwordList.appendChild(separatorRow);
    });
});

// 儲存密碼，並將密碼顯示在下方的清單中包含儲存日期時間和平台
document.getElementById('save').addEventListener('click', () => {
    const password = document.getElementById('password-display').value;
    const platform = document.getElementById('platform').value;
    const passwordList = document.getElementById('password-list');

    const passwordRow = document.createElement('tr');

    const platformCell = document.createElement('td');
    platformCell.textContent = platform;
    passwordRow.appendChild(platformCell);

    const datetimeCell = document.createElement('td');
    datetimeCell.textContent = new Date().toLocaleString();
    passwordRow.appendChild(datetimeCell);

    const passwordCell = document.createElement('td');
    passwordCell.textContent = password;
    passwordRow.appendChild(passwordCell);

    // 將新密碼插入到表格的最上方
    passwordList.insertBefore(passwordRow, passwordList.firstChild);

    // 添加分隔線
    const separatorRow = document.createElement('tr');
    const separatorCell = document.createElement('td');
    separatorCell.colSpan = 3;
    separatorCell.innerHTML = '<hr>';
    passwordList.insertBefore(separatorRow, passwordList.firstChild);

    // 更新 localStorage
    const savedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
    savedPasswords.unshift({ platform, datetime: new Date().toLocaleString(), password });
    localStorage.setItem('passwords', JSON.stringify(savedPasswords));
});
