import logo from './images/logo.png'

function App() {
  return (
    <div className="bg-p p-md-3 py-4 container-fluid text-white">
      <div className="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
          <div class="container-fluid">
            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-brand">
              <img src={logo} alt="logo" className='logo'/>
            </div>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-3 mt-md-0">
                <li class="nav-item">
                  <a class="nav-link text-white active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Link</a>
                </li> 
              </ul> 
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
