'use strict';

const hour = new Date().getHours();

if(hour >= 19 && hour < 21) {
  window.alert('お弁当30%OFF!');
// 少なくともどちらか1つがtrueのとき、全体の評価結果がtrueになる
} else if(hour === 9 || hour === 15) {
  window.alert('お弁当1個買ったら1個おまけ！');
} else {
  window.alert('お弁当はいかがですか');
}