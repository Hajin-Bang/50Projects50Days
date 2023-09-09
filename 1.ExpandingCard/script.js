// 클릭 시 각각의 클래스를 변경해서, active 클래스를 가지고 있는 요소를 바꾸기

const panels = document.querySelectorAll  ('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        // active 클래스를 제거하는 함수
        // 활성 클래스를 추가하기 직전에 removeActiveClasses 함수를 실행해야 한다
        // 기존 active 클래스가 제거된 후에 => 해당 패널에 active 추가
        panel.classList.add('active');
    })
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}