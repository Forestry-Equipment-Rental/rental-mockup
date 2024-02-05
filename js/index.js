function login() {
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  if (!userId || !password) return alert("このアプリでは許可されていません!");

  //   if (userId === "admin@rental.com" && password === "123qwe!@#QWE") {
  if (document.getElementById("lender").checked) {
    window.location.href = "manager/manager.html";
  } else if (document.getElementById("borrower").checked) {
    window.location.href = "user.html";
  } else {
    alert("機能選択は未実装です。");
  }
  //   } else {
  //     alert("このアプリでは許可されていません!");
  //   }
}
