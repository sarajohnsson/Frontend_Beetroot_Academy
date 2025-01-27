const tabs = [...document.querySelectorAll('.tabs')];
const contents = [...document.querySelectorAll('.content')];

tabs.forEach((tab) => tab.addEventListener('click', handleTabs));

let index = 0;

function handleTabs(event) {
    const currentElement = event.target.closest('.tabs');

    if (!currentElement) {
        console.log('Clicked element is not a tab');
        return;
    }

    const newIndex = tabs.indexOf(currentElement);

    if (newIndex === -1) {
        console.log('Clicked element is not a tab');
        return;
    }

    if (newIndex === index) {
        console.log('Same tab clicked again. Ignoring');
        return;
    }

    if (index >= 0 && index < tabs.length) {
        tabs[index].classList.remove('active');
        contents[index].classList.remove('active_content');
    }

    index = newIndex;

    if (index >= 0 && index < tabs.length) {
        tabs[index].classList.add('active');
        contents[index].classList.add('active_content');
    }
}

radialObj = radialIndicator('.indicatorContainer', {
    fontSize: 20,
    fontColor: '#B7BACD',
    fontWeight: 400,
    radius: 40,
    barColor: {
        0: '#00D4BE',
        19: '#1AE780',
        83: '#1AE780',
        100: '#00D4BE',
    },
    barWidth: 5,
    initValue: 8.7,
    minValue: 0,
    maxValue: 10,
    roundCorner: true,
    percentage: false,
    interpolate: true,
    format: '##.#',
});
