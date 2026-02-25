class AuthHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.userInfo = null;
  }

  connectedCallback() {
    this.render();
    this.fetchUserInfo();
  }

  async fetchUserInfo() {
    try {
      const response = await fetch("/api/user/current");
      if (response.ok) {
        this.userInfo = await response.json();
        this.render();
      }
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  }

  render() {
    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: contents;
      }

      ul {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 0.875rem;
        color: rgb(71, 85, 105);
        list-style: none;
        margin: 0;
        padding: 0;
      }

      :host(.dark) ul {
        color: rgb(148, 163, 184);
      }

      li {
        display: contents;
      }

      a {
        color: inherit;
        text-decoration: none;
        transition: color 0.2s;
      }

      a:hover {
        color: rgb(15, 23, 42);
      }

      :host(.dark) a:hover {
        color: white;
      }

      .register-btn,
      .login-btn {
        border-radius: 9999px;
        padding: 0.5rem 1rem;
        font-size: 0.75rem;
        font-weight: 600;
        border: 1px solid rgb(203, 213, 225, 0.6);
        transition: all 0.2s;
      }

      :host(.dark) .register-btn,
      :host(.dark) .login-btn {
        border-color: rgb(55, 65, 81, 0.6);
        color: rgb(226, 232, 240);
      }

      .register-btn:hover,
      .login-btn:hover {
        border-color: rgb(148, 163, 184, 0.6);
        color: rgb(15, 23, 42);
      }

      :host(.dark) .register-btn:hover,
      :host(.dark) .login-btn:hover {
        border-color: rgb(100, 116, 139, 0.6);
        color: white;
      }

      .login-btn {
        background: linear-gradient(to right, rgb(14, 165, 233), rgb(7, 89, 133));
        color: white;
        border: none;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }

      .login-btn:hover {
        background: linear-gradient(to right, rgb(13, 148, 207), rgb(3, 71, 107));
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        color: white;
      }

      .logout-form {
        margin: 0;
      }

      .logout-btn {
        border-radius: 9999px;
        border: 1px solid rgb(203, 213, 225, 0.6);
        padding: 0.5rem 1rem;
        font-size: 0.75rem;
        font-weight: 600;
        color: rgb(55, 65, 81);
        background: transparent;
        cursor: pointer;
        transition: all 0.2s;
      }

      :host(.dark) .logout-btn {
        border-color: rgb(55, 65, 81, 0.6);
        color: rgb(226, 232, 240);
      }

      .logout-btn:hover {
        border-color: rgb(148, 163, 184, 0.6);
        color: rgb(15, 23, 42);
      }

      :host(.dark) .logout-btn:hover {
        border-color: rgb(100, 116, 139, 0.6);
        color: white;
      }
    `;

    const ul = document.createElement("ul");

    if (this.userInfo?.isAuthenticated) {
      // Logged in state
      const greetingLi = document.createElement("li");
      const greetingLink = document.createElement("a");
      greetingLink.href = "/Identity/Account/Manage/Index";
      greetingLink.textContent = `Hello ${this.userInfo.userName}!`;
      greetingLink.title = "Manage";
      greetingLi.appendChild(greetingLink);

      const logoutLi = document.createElement("li");
      const logoutForm = document.createElement("form");
      logoutForm.className = "logout-form";
      logoutForm.action = "/Identity/Account/Logout";
      logoutForm.method = "post";

      const logoutBtn = document.createElement("button");
      logoutBtn.type = "submit";
      logoutBtn.className = "logout-btn";
      logoutBtn.textContent = "Logout";

      logoutForm.appendChild(logoutBtn);
      logoutLi.appendChild(logoutForm);

      ul.appendChild(greetingLi);
      ul.appendChild(logoutLi);
    } else {
      // Logged out state
      const registerLi = document.createElement("li");
      const registerLink = document.createElement("a");
      registerLink.href = "/Identity/Account/Register";
      registerLink.className = "register-btn";
      registerLink.textContent = "Register";
      registerLi.appendChild(registerLink);

      const loginLi = document.createElement("li");
      const loginLink = document.createElement("a");
      loginLink.href = "/Identity/Account/Login";
      loginLink.className = "login-btn";
      loginLink.textContent = "Login";
      loginLi.appendChild(loginLink);

      ul.appendChild(registerLi);
      ul.appendChild(loginLi);
    }

    this.shadowRoot.innerHTML = "";
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(ul);
  }
}

customElements.define("auth-header", AuthHeader);
