document.addEventListener('DOMContentLoaded', () => {
    function updateCountdown() {
        const now = new Date();
        let nextYear = now.getFullYear() + 1;
        const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);
        
        if (now.getMonth() === 0 && now.getDate() === 1) {
            nextYear = now.getFullYear() + 2;
            newYearDate.setFullYear(nextYear);
        }

        const timeDifference = newYearDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const totalMonths = Math.floor(totalDays / 30);
        const totalYears = Math.floor(totalDays / 365); 

        document.getElementById('days').textContent = formatNumber(days);
        document.getElementById('hours').textContent = formatNumber(hours);
        document.getElementById('minutes').textContent = formatNumber(minutes);
        document.getElementById('seconds').textContent = formatNumber(seconds);

        document.getElementById('total-days').textContent = `Total Days: ${totalDays}`;
        document.getElementById('total-months').textContent = `Total Months: ${totalMonths}`;
        document.getElementById('total-years').textContent = `Total Years: ${totalYears}`;

        if (timeDifference < 0) {
            document.getElementById('countdown').style.display = 'none';
            document.getElementById('extra-info').style.display = 'none';
            document.getElementById('message').textContent = 'Happy New Year!';
        }
    }

    function formatNumber(number) {
        return number < 10 ? `0${number}` : number;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
