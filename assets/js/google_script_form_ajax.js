$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

var $form = $('form#email-form'),
    url = 'https://script.google.com/macros/s/AKfycbxls4Q4OHe72TRDd75UidO0Fd6lsXcoL0YOyMipiBRbNheFf7iNHaGPRUvTUi_VUp8LTg/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
    success: console.log('Successfully added email!')
  });
})