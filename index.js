ReactDOM.render(
<div id='container'>
    <img id="profile_pic" src="./src/profile.png"/>
    <div id="content_box">
        <div className="content_div">
            <h2>Himanshu Goyal</h2>
            <h3 id="des">Frontend Developer</h3>
            <a href="https://geetsfashionwear.herokuapp.com" target='_blank'>himanshugoyal.me</a>
        </div>
        <div className="content_div2">
            <a>
                <img src='./src/Mail.png'/>
                Email
            </a>
            <a id="linken">
                <img src='./src/linkedin.png'/>
                LinkedIn
            </a>
        </div>
        <div id="about_div">
            <h3>About</h3>
            <p id="my">
                I am a frontend developer with a particular interest in making things simple automating daily tasks. I try to deep up with security and best parctices, and am always looking for new things to learn.
            </p>
            <h3>Interests</h3>
            <p>
                Ukulel expert. Music scholar. Rubixs Cube. Videographer. Fantic. Bacon buff. Enterpreneur. Travel geek. Pop culture ninja. Coffe fanatic.
            </p>

        </div>
        <div id='last_div'>
            <img src='./src/Twitter Icon.png'/>
            <img src='./src/Facebook Icon.png'/>
            <img src='./src/Instagram Icon.png'/>
            <img src='./src/GitHub Icon.png'/>
        </div>
    </div>
</div>

,document.getElementById('root'));