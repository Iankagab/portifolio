const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

function activateTab(tab) {
    const targetId = tab.getAttribute('data-tab');
    
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    
    tab.classList.add('active');
    document.getElementById(targetId).classList.add('active');
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => activateTab(tab));
});

if (tabs.length > 0) {
    activateTab(tabs[0]);
}
