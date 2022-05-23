const Header = {
   render: (customClass = "") => {
     return `
       <header class="header ${customClass}" id="header">
       <div class="header__logo-all">
         <div class="header__logo"><a class="header__logo-a soundEffect" href="#main">Planetarium</a></div>
         <div class="header__subtitle"><a class="header__logo-a soundEffect" href="#main">Welcome to the real world</a></div>
       </div>
       <nav class="nav" id="mainmenu">
         <ul class="nav__ul">
           <li class="nav__li"><a class="nav-a soundEffect" href="#login">login</a></li>
           <li class="nav__li"><a class="nav-a soundEffect" href="#todo">movie list</a></li>
           <li class="nav__li"><a class="nav-a soundEffect" href="#main">main</a></li>
           <li class="nav__li"><a class="nav-a soundEffect" href="#contacts">contacts</a></li>
         </ul>
       </nav>
       </header>
     `;
   }
 };
 
 const Content = {
   render: (customClass = "") => {
     return `<div class="content ${customClass} main" id="content"></div>`;
   }
 };
 
 const Footer = {
   render: (customClass = "") => {
     return `<footer class="footer ${customClass}">
     <div class="footer__left">
     <span id="text1"></span>
     <span id="text2"></span>
 </div>
 <div class="footer__rigth">
   <div id="idClock" class="idClock"></div>
 </div>
</footer>`;
   }
 };