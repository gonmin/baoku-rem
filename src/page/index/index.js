import './index.styl';


import $ from 'jquery';

$(function () {
  $.ajax({
    url: 'http://localhost:8080/api/home.json',
    success (res) {
      console.log(res);
    }
  })
})
