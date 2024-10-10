let gender = "";

const focusRemoveError = (input) => {
    document.getElementById(input).textContent = "";
}

const validateForm = () => {
  const name = document.getElementById("fullName").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phoneNumber").value.trim();
  const cccd = document.getElementById("cccd").value.trim();
  const age = parseInt(document.getElementById("age").value.trim());
  const genderInput = document.querySelector('input[name="gender"]:checked');

  document.getElementById("nameError").textContent = "";
  document.getElementById("addressError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("cccdError").textContent = "";
  document.getElementById("ageError").textContent = "";

  let isValid = true;

  if (!name) {
    document.getElementById("nameError").textContent =
      "Tên không được để trống";
    isValid = false;
  } else if (/[^a-zA-Z\s]/.test(name)) {
    document.getElementById("nameError").textContent =
      "Tên không được chứa ký tự đặc biệt";
    isValid = false;
  }

  if (!address) {
    document.getElementById("addressError").textContent =
      "Địa chỉ không được để trống";
    isValid = false;
  } else if (address.length > 100) {
    document.getElementById("addressError").textContent =
      "Địa chỉ không được dài quá 100 ký tự";
    isValid = false;
  }

  if (!/^\d{10,11}$/.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Số điện thoại phải là số và có từ 10 đến 11 chữ số";
    isValid = false;
  }

  if (!/^\d{12}$/.test(cccd)) {
    document.getElementById("cccdError").textContent =
      "Số CCCD phải là số và có đúng 12 chữ số";
    isValid = false;
  }

  if (isNaN(age) || age < 0 || age > 120) {
    document.getElementById("ageError").textContent =
      "Tuổi không hợp lệ, phải từ 0 đến 120";
    isValid = false;
  }

  if (genderInput) {
    gender = genderInput.value;
  } else {
    document.getElementById("genderError").textContent =
      "Vui lòng chọn giới tính.";
  }

  return isValid;
};

document.getElementById("calculateBtn").addEventListener("click", function () {
  if (validateForm()) {
    const age = parseInt(document.getElementById("age").value);
    let price = 0;

    if (age < 17) {
      price = 50;
    } else if (gender === "male") {
      if (age >= 17 && age <= 20) {
        price = 100;
      } else if (age >= 21 && age <= 30) {
        price = 120;
      } else if (age > 30 && age <= 60) {
        price = 200;
      } else {
        price = 250;
      }
    } else if (gender === "female") {
      if (age >= 17 && age <= 20) {
        price = 90;
      } else if (age >= 21 && age <= 30) {
        price = 120;
      } else if (age > 30 && age <= 60) {
        price = 140;
      } else {
        price = 150;
      }
    }

    document.getElementById("priceDisplay").textContent =
      "Tổng số tiền phải trả là: " + price + " VND";
  }
});

document.getElementById("exitBtn").addEventListener("click", function () {
  if (confirm("Bạn có chắc chắn muốn thoát?")) {
    window.close();
  }
});

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("fullName").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("cccd").value = "";
  document.getElementById("age").value = "";
  document.querySelector('input[name="gender"]:checked');
});
