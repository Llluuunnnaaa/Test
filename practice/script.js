function openModal() {
    document.getElementById('partnerModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('partnerModal').style.display = 'none';
}

document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var previewContainer = document.getElementById('previewContainer');
      var previewImage = document.getElementById('previewImage');
      previewImage.src = e.target.result;
      previewContainer.style.display = 'block';
    };
    reader.readAsDataURL(file);
  });
  
  function clearFileInput() {
    var previewContainer = document.getElementById('previewContainer');
    var fileInput = document.getElementById('fileInput');
    fileInput.value = '';
    previewContainer.style.display = 'none';
  }

document.getElementById('phone').addEventListener('input', function(event) {
  var inputValue = event.target.value;
  // Удалить все символы, кроме цифр
  var cleanedInputValue = inputValue.replace(/\D/g, '');
  // Проверить, начинается ли введенное значение с 7, если нет, добавить его
  if (!/^7/.test(cleanedInputValue)) {
    cleanedInputValue = "7" + cleanedInputValue;
  }
  // Добавить маску телефона +7 (###) ###-##-##
  var formattedInputValue = '';
  if (cleanedInputValue.length > 0) {
    formattedInputValue = '+7 (' + cleanedInputValue.substring(1, 4);
    if (cleanedInputValue.length > 4) {
      formattedInputValue += ') ' + cleanedInputValue.substring(4, 7);
    }
    if (cleanedInputValue.length > 7) {
      formattedInputValue += '-' + cleanedInputValue.substring(7, 9);
    }
    if (cleanedInputValue.length > 9) {
      formattedInputValue += '-' + cleanedInputValue.substring(9, 11);
    }
  }
  event.target.value = formattedInputValue;
});
