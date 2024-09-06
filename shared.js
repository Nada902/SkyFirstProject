class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
        `
        <header>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark " style=" padding: 0px; background-color:#5cb85c" >
        <div class="container-fluid " style="background-color:#5cb85c">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation" >
            <span class="navbar-toggler-icon"></span>
          </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="HomePage.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="profiles.html">Profiles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">Reports</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">Settings</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      
    </header>

        
        `

    }
}
customElements.define('my-header' , MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
       `
        <footer class="card-footer " style="text-align: center;
    border-color: #5cb85c; ">
    <a href="https://web.facebook.com/?_rdc=1&_rdr"> <img class="icon2" src="assets/icons8-facebook-30.png" alt="facebook" /></a>
<a href="https://www.Linkedin.com/"><img class="icon2" src="assets/icons8-linkedin-30.png" alt="LinkedIn" /></a>
<a href="https://mail.google.com"><img class="icon2" src="assets/icons8-mail-30.png" alt="mail" /></a>

    <p >&copy; 2024 Nada Altwaiq. All Rights Reserved.</p>
</footer>
       `

    }
}

customElements.define('my-footer' , MyFooter)




