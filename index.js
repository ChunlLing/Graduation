window.onload = function () {
	var content = document.querySelector('#content');
	// var img = document.querySelector('#img').querySelector('img');
	var index = 1;

	var textArr = new Array();
	textArr[0] = 'Hello World!';
	textArr[1] = '2013.9.5|First Day';
	textArr[2] = '此处省略1W+字的大学生活.......';
	textArr[3] = '套用一句老掉牙的话|总以为毕业遥遥无期，|转眼却各奔东西。';
	textArr[4] = '不矫情啦|作此demo留念|2017.5.20|我 毕业了 : )';
	textArr[5] = 'Bye~'
	textArr[6] = 'Ps: 奇点是最帅的 ๑乛◡乛๑'

	// content.innerHTML = textArr[7].replace(/\|/g, '<br />');

	var pageTime = 1000;
	var wordTime = 100;

	var pagePos = 0;
	var wordPos = 0;

	var pageTimer, wordTimer;

	function show() {
		var str = textArr[pagePos];

		if (wordPos >= str.length) {
			clearInterval(pageTimer);
			clearInterval(wordTimer);
			pagePos++;
			if (pagePos >= textArr.length) {
				// pagePos = 0;
				return;
			}
			// if (pagePos == 4 || pagePos == 6) {
			// 	pageTime = pageTime * 2;
			// } else {
			// 	pageTime = 2000;
			// }
			pageTimer = setInterval(show, pageTime);
			wordPos = 0;
			return;
		}
		if (pagePos == 6) {
			wordTime = 0;
			if (wordPos == str.length-1) {
				console.log('以为我要......？');
				console.log('并没有:)');
				console.log('如人饮水 冷暖自知');
				// console.log(new Date());
			}
		}

		clearInterval(wordTimer);
		content.innerHTML = str.substring(0, wordPos + 1).replace(/\|/g, '<br />');
		wordPos++;
		wordTimer = setInterval(show, wordTime);
	}
	// console.log(new Date());

	show();

	/*
		用时：18s
	*/

};