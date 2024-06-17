
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});


$(function() {
  var selectedFiles = []; // 選択されたファイルを保持する配列

  $('.form-file__text').click(function(){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'; // アルファベット
    var availableLetters = alphabet.split('').filter(letter => !selectedFiles.includes(letter)); // 選択されていないアルファベットのみを抽出
    if (availableLetters.length === 0) {
      console.log('すべてのアルファベットが使用されました。');
      return; // 利用可能なアルファベットがない場合は処理を中断
    }
    var randomLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)]; // ランダムなアルファベットを選択
    var randomName = randomLetter + '_file'; // ランダムなアルファベットを使用してファイル名を生成
    selectedFiles.push(randomName); // 選択されたファイル名を配列に追加
    $('.form-file__wrap').append(' <p><input type="file" id="' + randomName + '" name="' + randomName + '"><span class="reset-file" data-file="' + randomName + '">ファイルを削除する</span></p>');
  });

  // ファイルリセットボタンのクリックイベント
  $(document).on('click', '.reset-file', function() {
    var fileId = $(this).data('file'); // リセットするファイルのidを取得
    var input = $('#' + fileId); // 対応する input 要素を取得
    input.val(''); // ファイルをリセット
    var index = selectedFiles.indexOf(fileId);
    if (index !== -1) {
      selectedFiles.splice(index, 1); // ファイルを削除したら配列からも削除
    }
  });
});

jQuery(function ($) {
  $('.js-tab-menu').on('click', function () {
      $('.js-tab-menu').removeClass('is-active');
      $('.js-tab-content').removeClass('is-active');
      $(this).addClass('is-active');
      var number = $(this).data("number");
      $('#' + number).addClass('is-active');
  });
});

// 当社からの連絡方法（ご希望）

function viewChange1(){
  if(document.getElementById('formChange01')){
      id = document.getElementById('formChange01').value;
      if(id == 'short_message'){
          document.getElementById('form_short').style.display = "flex";
          document.getElementById('form_mail').style.display = "none";
          document.getElementById('form_tel').style.display = "none";
      }else if(id == 'mail'){
          document.getElementById('form_short').style.display = "none";
          document.getElementById('form_mail').style.display = "flex";
          document.getElementById('form_tel').style.display = "none";
      }
      else if(id == 'tel'){
          document.getElementById('form_short').style.display = "none";
          document.getElementById('form_mail').style.display = "none";
          document.getElementById('form_tel').style.display = "flex";
      }
  }

window.onload = viewChange1;
};

// 申請者様

function viewChange2(){
  if(document.getElementById('formChange02')){
      id = document.getElementById('formChange02').value;
      if(id == 'me'){
        document.getElementById('form_me').style.display = "flex";
          document.getElementById('form_family').style.display = "none";
          document.getElementById('form_shop').style.display = "none";
          document.getElementById('form_factory').style.display = "none";
          document.getElementById('form_other').style.display = "none";
      }else if(id == 'family'){
        document.getElementById('form_me').style.display = "none";
          document.getElementById('form_family').style.display = "flex";
          document.getElementById('form_shop').style.display = "none";
          document.getElementById('form_factory').style.display = "none";
          document.getElementById('form_other').style.display = "none";
      }
      else if(id == 'shop'){
        document.getElementById('form_me').style.display = "none";
          document.getElementById('form_family').style.display = "none";
          document.getElementById('form_shop').style.display = "flex";
          document.getElementById('form_factory').style.display = "none";
          document.getElementById('form_other').style.display = "none";
      }
      else if(id == 'factory'){
        document.getElementById('form_me').style.display = "none";
          document.getElementById('form_family').style.display = "none";
          document.getElementById('form_shop').style.display = "none";
          document.getElementById('form_factory').style.display = "flex";
          document.getElementById('form_other').style.display = "none";
      }
      else if(id == 'other'){
        document.getElementById('form_me').style.display = "none";
        document.getElementById('form_family').style.display = "none";
        document.getElementById('form_shop').style.display = "none";
        document.getElementById('form_factory').style.display = "none";
        document.getElementById('form_other').style.display = "flex";
    }
  }

window.onload = viewChange2;
};

// ご契約NO/ナンバープレート/車台番号）

function viewChange3(){
  if(document.getElementById('formChange03')){
      id = document.getElementById('formChange03').value;
      if(id == 'contract_number'){
          document.getElementById('form_contract_number').style.display = "flex";
          document.getElementById('form_number_plate').style.display = "none";
          document.getElementById('form_vin').style.display = "none";
      }else if(id == 'number_plate'){
          document.getElementById('form_contract_number').style.display = "none";
          document.getElementById('form_number_plate').style.display = "flex";
          document.getElementById('form_vin').style.display = "none";
      }
      else if(id == 'vin'){
          document.getElementById('form_contract_number').style.display = "none";
          document.getElementById('form_number_plate').style.display = "none";
          document.getElementById('form_vin').style.display = "flex";
      }
  }

window.onload = viewChange3;
};

// 不具合情報

function viewChange4(){
  if(document.getElementById('formChange04')){
      id = document.getElementById('formChange04').value;
      if(id == 'symptoms'){
          document.getElementById('form_symptoms').style.display = "flex";
          document.getElementById('form_parts').style.display = "none";
          document.getElementById('form_warning').style.display = "none";
      }else if(id == 'part'){
          document.getElementById('form_symptoms').style.display = "none";
          document.getElementById('form_parts').style.display = "flex";
          document.getElementById('form_warning').style.display = "none";
      }
      else if(id == 'warning_light'){
          document.getElementById('form_symptoms').style.display = "none";
          document.getElementById('form_parts').style.display = "none";
          document.getElementById('form_warning').style.display = "flex";
      }
  }

window.onload = viewChange4;
};

// 不具合 見積書アップロード

function viewChange5(){
  if(document.getElementById('formChange05')){
      id = document.getElementById('formChange05').value;
      if(id == 'acquisition'){
          document.getElementById('form_quote').style.display = "flex";
      }
  }

window.onload = viewChange5;
};

// 不具合の追加

// ＋ファイルを追加するテキストをクリックした際の処理
document.querySelector('.form-checkbox-icon__text').addEventListener('click', function() {
  // チェックボックスアイテムの数を取得
  var items = document.querySelectorAll('.form-checkbox-icon__item');
  var itemCount = items.length;

  // 最後のチェックボックスアイテムを取得
  var lastItem = items[itemCount - 1];

  // 新しいチェックボックスアイテムを複製
  var newItem = lastItem.cloneNode(true);

  // 新しいチェックボックスアイテムのIDを変更
  var newCheckbox = newItem.querySelector('input[type="checkbox"]');
  var newLabel = newItem.querySelector('label');

  // IDとfor属性の番号を更新
  var newId = 'check_icon' + (itemCount + 1).toString().padStart(2, '0');
  newCheckbox.id = newId;
  newLabel.setAttribute('for', newId);

  // 新しいチェックボックスアイテムのテキストを変更
  var newSpan = newItem.querySelector('span');
  newSpan.textContent = '新しい項目';

  // チェックボックスアイテムを追加
  var checkboxItems = document.querySelector('.form-checkbox-icon__items');
  checkboxItems.appendChild(newItem);
});

// $(document).ready(function() {
//   var today = new Date();
//   today.setDate(today.getDate());
//   var yyyy = today.getFullYear();
//   var mm = ("0" + (today.getMonth() + 1)).slice(-2);
//   var dd = ("0" + today.getDate()).slice(-2);
//   $("#today").val(yyyy + '-' + mm + '-' + dd);
// });