import homePic from './assets/IMG1.jpg'


function Home() {

  return (
    <div class= "container">
        <nav class="navbar">
            <h1 class="title">Hit Me <span>Up</span></h1>
            <p>Coffee Shop</p>
            <ul class="menu">
                <li><a href="#">MENU</a></li>
                <li><a href="About.jsx">ABOUT</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </nav>

    <img src={homePic}></img>
    </div>  
  );
}

export default Home;
