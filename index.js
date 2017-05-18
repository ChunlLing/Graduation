window.onload = function () {
	var content = document.querySelector('#content');
	// var img = document.querySelector('#img').querySelector('img');
	var index = 1;

	var textArr = new Array();
	textArr[0] = '2013.9.5|First Day|新奇？自由？未知世界？|探险未来！|（好俗套的开场白...((´-_-)-_-)-_-)';
	textArr[1] = '最初印象|应该是军训|||的太阳  (－＂－怒)|和大学四年流得最多的汗  (▼ヘ▼#)|以及帅气可爱的教官  (▰˘◡˘▰)';
	textArr[2] = '爱好不多|偶尔打打游戏|挂过科，也拿过奖学金|总的来说 平平无奇吧';
	textArr[3] = '此处省略1W+字的大学生活.......';
	textArr[4] = '套用一句老掉牙的话|总以为毕业遥遥无期，|转眼却各奔东西。';
	textArr[5] = '不矫情啦|作此demo留念|2017.5.20|我 毕业了 : )';
	textArr[6] = 'Hello World!||Bye~'
	textArr[7] = 'Ps:奇点是最帅的！！！'

	// content.innerHTML = textArr[2].replace(/\|/g, '<br />');

	var pageTime = 2000;
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
		if (pagePos == 7) {
			wordTime = 0;
		}

		clearInterval(wordTimer);
		content.innerHTML = str.substring(0, wordPos + 1).replace(/\|/g, '<br />');
		wordPos++;
		wordTimer = setInterval(show, wordTime);
	}

	// show();

	// setInterval(function () {
	// 	img.src = 'images/img' + index + '.jpg';
	// 	index++;
	// 	if (index == 3) {
	// 		index = 1;
	// 	}
	// }, 5000)
 


};