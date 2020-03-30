const scrollPercent = () => {
        const bodyST = document.body.scrollTop,
            docST = document.documentElement.scrollTop,
            docSH = document.documentElement.scrollHeight,
            docCH = document.documentElement.clientHeight;
        return (docST + bodyST) / (docSH - docCH) * 100
    }
    document.addEventListener('DOMContentLoaded', () => {
        window.onscroll = () => {
            document.querySelectorAll('.item')[0].style.transform = `scaleY(${(scrollPercent() / 100).toFixed(3)})`;
            ((scrollPercent() / 100).toFixed(3) >= '0.225')
                ? document.querySelectorAll('.container')[0].style.transform = `scale(${(scrollPercent() / 100).toFixed(3)})`
                : false;
        }
    })
