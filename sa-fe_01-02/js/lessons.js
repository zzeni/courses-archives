'use_strict';

$(document).on("ready", function() {
  var version = "0.2"

  $('.lesson-preview a').click(function(e) {
    var lesson = $(this).attr('data-target');
    var lesson_index =  lesson.split("lesson")[1];
    if (lesson_index.length == 1) lesson_index = '0' + lesson_index;
    var lesson_link = 'http://zenlabs.pro/courses/archive-2015/lessons/' + lesson + '/lesson.pdf';
    var github_example_link = 'https://github.com/zzeni/swift_academy/tree/master/lessons/' + lesson + '/example';
    var example_link = 'http://zenlabs.pro/courses/archive-2015/lessons/' + lesson + '/example/index.html';
//    var downlod_link = 'http://zenlabs.pro/courses/archive-2015/lessons/' + lesson + '/example.zip';
//    var homework_link = 'https://github.com/zzeni/swift-academy-homeworks/tree/master/tasks/L' + lesson_index;
//    var homework_src = 'http://zenlabs.pro/courses/archive-2015/lessons/' + lesson + '/hw-task.html';
    
    lesson_link = lesson_link + "?version=" + version;
//    downlod_link = downlod_link + "?version=" + version;
    
    $('.lesson-preview .selected').removeClass('selected');
    $(this).parent().addClass('selected');
    $('#lesson-name').text('Lesson ' + lesson_index);
    $('#presentation').attr('src', lesson_link);
    $('#presentation').parent().find('a:first').attr('href', lesson_link);
    $('#example').attr('src', example_link);
    $('#example').parent().find('a:first').attr('href', example_link);
    $('#example').parent().find('a:last').attr('href', github_example_link);
//    $('#example').parent().find('a:last').attr('href', downlod_link);
//    $('#homework-viewer').find('a:first').attr('href', homework_src);
//    $('#hw-task').attr('src', homework_src);
    e.preventDefault();
  });

  $('.lesson-preview a:last-child').click();

  if ($('.lesson-preview ul').width() > $('.lesson-preview').width()) {
    var diff = $('.lesson-preview ul').width() - $('.lesson-preview').width() + 22;
    $(".lesson-preview").animate({ scrollLeft: diff }, 2000);
  }
});