
document.addEventListener('DOMContentLoaded', () => {
    const modeBtn = document.getElementById('modeBtn');
    const body = document.body;

    if (modeBtn) {
        modeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if(body.classList.contains('dark-mode')) {
                modeBtn.textContent = '☀️ โหมดสว่าง';
            } else {
                modeBtn.textContent = '🌙 โหมดกลางคืน';
            }
        });
    } else {
        console.error("หาปุ่ม modeBtn ไม่เจอครับ");
    }
});