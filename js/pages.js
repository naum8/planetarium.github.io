const HomePage = {
   id: "main",
   title: "Planetarium",
   render: (className = "container", ...rest) => {
     return `
       <div class="main ${className}" id="main">
       <div class="main__search">
         <div class="main__search-title">Search</div>
         <div class="input-section">
           <label for="title" class="labelStyle">Title</label>
           <div class="outSelectDiv"><input type="text" name="" id="title" class="inputStyle" placeholder="Enter Title"/></div>
         </div>
         <div class="input-section">
           <label for="type" class="labelStyle labelStyle-type">Type</label>
           <div class="outSelectDiv">
             <select name="" id="type" class="selectStyle soundEffect">
               <option value="movie" id="optionMovie">Movie</option>
               <option value="series" id="optionSeries">Series</option>
             </select>
           </div>
         </div>
         <div class="block__btn">
           <button class="btn soundEffect" id="btn">Search</button>
         </div>
       </div>
       <div class="main__result">
         <div class="main__result-films" id="headerFilms">Movies:</div>
         <div class="movieListUpper" id="movieListUpper"></div>
         <div class="paginator" id="paginator"></div>
       </div>
       <div class="movieViewBackground movieViewClose" id="movieViewBackground">
         <div class="movieView movieViewClose" id="movieView"></div>
         <button class="movieViewBtn" id="movieViewBtn">Close</button>
       </div> 
     </div>
     `;
   }
};
const Login = {
  id: "login",
  title: "Login",
  render: (className = "container", ...rest) => {
    return `
      <section class="${className}">
        <div class="container-login">
        <h2 class="welcome">Welcome!</h2>
        <h5 class="login-sib">Sign in to your account or sign up to create a new account.</h5>
        <ul class="login-group">
          <label for="uname" class="label"><b>Email</b></label>
          <input type="email" class="input-login" id="email" name="uname" placeholder="Enter Email" maxlength="50" required />
          <label for="psw" class="label"><b>Password</b></label>
          <input type="password" class="input-login" id="password" name="psw" placeholder="Enter Password" maxlength="50" required />
          <label for="username" class="label"><b>Name</b></label>
          <input type="text" class="input-login" id="username" name="username" placeholder="Enter Name To Sign Up" maxlength="50" />
        </ul>
        <div>
          <ul class="button-auth-group">
            <button type="submit" class="button-auth" id="sign-up-button" title="Sign Up">Sign Up</button>
            <button type="submit" class="button-auth" id="sign-in-button" title="Sign In">Sign In</button>
            <button type="submit" class="button-auth" id="cancel-button" title="Cancel">Cancel</button>
          </ul>
        </div>
        </div>
      </section>
    `;
  }
};
const Todo = {
  id: "todo",
  title: "Movie list",
  render: (className = "container", ...rest) => {
    return `
      <section class="${className}">
        <button type="submit" class="button-auth1" id="logout-button" title="Logout">Logout</button>
        <p class="welcome" id="welcome"></p>
        <div class="container-tasks">
          <input type="text" class="input" id="task-title" placeholder="What movies would you like to watch next?" maxlength="100" />
          <input type="date" class="input" id="task-date" />
          <div>
            <ul class="button-group">
              <button type="submit" class="button" id="add-button" title="Add new task">ADD TASK</button>
              <button type="submit" class="button" id="sort-button" title="Sort tasks">SORT TASKS</button>
              <button type="submit" class="button" id="delete-all-button" title="Delete all tasks">DELETE ALL</button>
            </ul>
          </div>
          <ul class="list" id="task-list"></ul>
        </div>
      </section>
    `;
  }
};
 const Contacts = {
   id: "contacts",
   title: "Contacts",
   render: (className = "container", ...rest) => {
     return `
       <section class="${className}">

       </section>
     `;
   }
 };
 const ErrorPage = {
   id: "error",
   title: "Achtung, warning, kujdes, attenzione, pozornost...",
   render: (className = "container", ...rest) => {
     return `
       <section class="${className}">
         <h1>Ошибка 404</h1>
         <p>Страница не найдена, попробуйте вернуться на <a href="#main">главную</a>.</p>
       </section>
     `;
   }
 };
