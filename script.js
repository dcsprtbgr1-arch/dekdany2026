const loginForm = document.getElementById("loginForm");

const username = document.getElementById("username");

const password = document.getElementById("password");

const loginButton = document.getElementById("loginButton");

const buttonText = document.getElementById("buttonText");

const loading = document.getElementById("loading");

const message = document.getElementById("message");

const togglePassword =
    document.getElementById("togglePassword");


// =============================
// SHOW / HIDE PASSWORD
// =============================

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.textContent = "🙈";

    } else {

        password.type = "password";

        togglePassword.textContent = "👁";

    }

});


// =============================
// LOGIN
// =============================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const user = username.value.trim();

    const pass = password.value.trim();


    // Bersihkan pesan
    message.textContent = "";

    message.className = "";


    // Validasi
    if (user === "" || pass === "") {

        message.textContent =
            "Username dan password wajib diisi.";

        message.className = "error";

        return;

    }


    // Loading
    loginButton.disabled = true;

    buttonText.textContent = "Memproses...";

    loading.style.display = "block";


    /*
        DEMO LOGIN

        Username : admin
        Password : 123456

        Nanti bagian ini dapat
        diganti dengan PHP/API/database.
    */

    setTimeout(function () {

        if (
            user === "admin" &&
            pass === "123456"
        ) {

            message.textContent =
                "Login berhasil. Mengalihkan...";

            message.className = "success";


            // Contoh redirect
            setTimeout(function () {

                window.location.href =
                    "dashboard.html";

            }, 1000);


        } else {

            message.textContent =
                "Username atau password salah.";

            message.className = "error";


            loginButton.disabled = false;

            buttonText.textContent = "LOGIN";

            loading.style.display = "none";

        }

    }, 1200);

});


// =============================
// LUPA PASSWORD
// =============================

function forgotPassword() {

    alert(
        "Silakan hubungi administrator untuk reset password."
    );

}
