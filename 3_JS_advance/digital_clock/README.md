# Dynamic Background Digital Clock

This project is a dynamic digital clock with a changing background based on the time of day. The clock displays the current time in a 12-hour format with AM/PM notation and updates every second. The background image changes to reflect different times of the day.

## Technologies Used

- HTML
- CSS
- JavaScript

## Purpose

The purpose of this project is to create a visually appealing digital clock that not only displays the current time but also changes its background image based on the time of day. This enhances the user experience by providing a dynamic and interactive interface.

## How It Works

### HTML

The HTML file sets up the basic structure of the webpage, including the clock display and the background containers.

### CSS

The CSS file styles the clock and background containers, ensuring that the clock is centered on the page and the background images transition smoothly.

### JavaScript

The JavaScript file contains the logic for updating the clock and changing the background image.

#### Functions

1. **getBackgroundImage(hours24)**

    ```javascript
    function getBackgroundImage(hours24) {
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
    ```

    This function takes the current hour in 24-hour format and returns the corresponding background image filename based on the time of day.

2. **updateBackground(hours24)**

    ```javascript
    function updateBackground(hours24) {
        const newImage = getBackgroundImage(hours24);
        const currentBackground = document.querySelector('.background.current');
        const nextBackground = document.querySelector('.background.next');
        
        if (!currentBackground.style.backgroundImage.includes(newImage)) {
            nextBackground.style.backgroundImage = `url('${newImage}')`;
            currentBackground.classList.remove('current');
            nextBackground.classList.add('current');
            
            setTimeout(() => {
                currentBackground.style.backgroundImage = `url('${newImage}')`;
                currentBackground.classList.add('current');
                nextBackground.classList.remove('current');
            }, 3000);
        }
    }
    ```

    This function updates the background image based on the current hour. It uses a smooth transition effect to change the background image.

3. **updateClock()**

    ```javascript
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const hours24 = hours;
        
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        
        hours = hours.toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
        document.getElementById('clock').textContent = timeString;
        
        updateBackground(hours24);
    }
    ```

    This function updates the clock display every second. It converts the 24-hour format to a 12-hour format with AM/PM notation and updates the background image based on the current hour.

4. **Initialization**

    ```javascript
    const initialHours = new Date().getHours();
    document.querySelector('.background.current').style.backgroundImage = 
        `url('${getBackgroundImage(initialHours)}')`;

    updateClock();
    setInterval(updateClock, 1000);
    ```

    This part of the code initializes the background image based on the current hour and starts the clock update interval.

## Usage

1. Open the [index.html](http://_vscodecontentref_/0) file in a web browser.
2. The clock will display the current time and update every second.
3. The background image will change based on the time of day.

## Improvements

1. **Font Color Change Based on Time**: The font color changes every 25 minutes to indicate focus time (beige) and every 5 minutes to indicate break time (light blue).
2. **Motivational Quotes**: During the 5-minute break time, a motivational or personal growth quote is automatically generated using generative AI.

## License

This project is licensed under the MIT License.