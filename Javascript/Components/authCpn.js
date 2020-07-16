components.register = `
    <section class="register-container">
    <!-- Register container -->
    <form id = "form-register" class="form-register">
        <div class="form-header">
            <h3>MindX Chat</h3>
        </div>

        <div class="form-content">
            <div class="name-wrapper">
                <div class="input-wrapper">
                    <input type="text" name="firstname" placeholder="First name">
                    <div id = "firstname-error" class = "message-error" ></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" name="lastname" placeholder="Last name" >
                    <div id = "lastname-error" class = "message-error" ></div>
                </div>
            </div>
            <div class="input-wrapper">
                <input type="email" name="email" placeholder="Email">
                <div id = "email-error" class = "message-error" ></div>
            </div>
            <div class="input-wrapper">
                <input type="password" name="password" placeholder="Password">
                <div id = "password-error" class = "message-error" ></div>
            </div>
            <div class="input-wrapper">
                <input type="password" name="confirmPassword" placeholder="Confirm password">
                <div id = "confirm-password-error" class = "message-error" ></div>
            </div>
        <div id ="register-error" class ="message-error"></div>
        <div id ="register-success" class ="message-success"></div>
        </div>
        <div class="form-footer">
            <a href="#" id = "register-link">Already have an account? Login</a>
            <button id = "register-submit-btn" type="submit">Register</button>

        </div>
    </form>
    </section>
`;

components.logIn = `
    <section class="login-container">
    <form id = "form-log-in" class="login-form">
        <div class="form-header">
            <h3>MindX Chat</h3>
        </div>
        <div class="form-content">
            <div class="input-wrapper">
                <input type="email" name="email" placeholder="Email" >
                <div id = "email-error" class = "message-error" ></div>
            </div>
            <div class="input-wrapper">
                <input type="password" name="password" placeholder="Password">
                <div id = "password-error" class = "message-error" ></div>
            </div>
            <div id = "log-in-error" class = "message-error"></div>
        </div>
      
        <div class="form-footer">
            <a href="#" id = "log-in-link">Not yet have an account? Register</a>
            <button id = "log-in-submit-btn" type="submit">Log in</button>
        </div>
    </form>
    </section>
`;
