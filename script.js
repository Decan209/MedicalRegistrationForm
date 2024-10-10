let gender = "";

const focusRemoveError = (input) => {
  document.getElementById(input).textContent = "";
};

const validateForm = () => {
  const name = document.getElementById("fullName").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phoneNumber").value.trim();
  const cccd = document.getElementById("cccd").value.trim();
  const age = parseInt(document.getElementById("age").value.trim());
  const genderInput = document.querySelector('input[name="gender"]:checked');

  // Xóa thông báo lỗi cũ
  document.getElementById("nameError").textContent = "";
  document.getElementById("addressError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("cccdError").textContent = "";
  document.getElementById("ageError").textContent = "";
  document.getElementById("genderError").textContent = "";

  let isValid = true;

  // Kiểm tra tên
  if (!name) {
    document.getElementById("nameError").textContent = "Tên không được để trống";
    isValid = false;
  } else if (!/^[A-Za-zÀ-ỹ\s]+$/.test(name)) { // Sửa biểu thức chính quy
    document.getElementById("nameError").textContent = "Tên không hợp lệ (chứa ký tự đặc biệt)";
    isValid = false;
  } else if (name.trim().split(/\s+/).length < 2) {
    document.getElementById("nameError").textContent = "Tên phải có ít nhất hai từ";
    isValid = false;
  }

  // Kiểm tra địa chỉ
  if (!address) {
    document.getElementById("addressError").textContent = "Địa chỉ không được để trống";
    isValid = false;
  } else if (address.length > 100) {
    document.getElementById("addressError").textContent = "Địa chỉ không được dài quá 100 ký tự";
    isValid = false;
  }

  // Kiểm tra số điện thoại
  if (!/^(0[1-9]\d{8})$/.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Số điện thoại không hợp lệ.";
    isValid = false;
}

  // Kiểm tra số CCCD
  if (!/^\d{12}$/.test(cccd)) {
    document.getElementById("cccdError").textContent =
      "Số CCCD phải có đúng 12 chữ số và không chứa ký tự không phải số";
    isValid = false;
  }

  // Kiểm tra tuổi
  if (isNaN(age) || age < 0 || age > 120) {
    document.getElementById("ageError").textContent =
      "Tuổi không hợp lệ, phải từ 0 đến 120";
    isValid = false;
  }

  // Kiểm tra giới tính
  if (!genderInput) {
    document.getElementById("genderError").textContent = "Vui lòng chọn giới tính.";
    isValid = false;
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
