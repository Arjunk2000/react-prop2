import "./index.css";

const News = (props) => {
  return (
    <div className="newsStrip">
      <div className="left">
        <div className="avatar">
          <img
            className="avatar-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzRvBHDyBk2f7Y94y5RGAKgcAaBscdsLvbg&usqp=CAU"
            alt=""
          />
          <h4 className="avatar-name">{props.name}</h4>
        </div>
        <div className="newsSection">
          <h2 className="heading">{props.heading}</h2>
          <p className="desc">{props.desc}</p>
        </div>
        <div className="interaction">
          <div className="interaction2">
            <p>{props.date}</p>
            <p>{props.read}</p>
            <button>{props.tag}</button>
          </div>
          <img
            className="bookmark-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_bookmark.svg/1200px-OOjs_UI_icon_bookmark.svg.png"
            alt=""
          ></img>
        </div>
      </div>
      <div className="right">
        <img className="newsimg" src={props.newsimg} alt="" />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="main">
      <News
        name="Eric Feng"
        heading="Why are there so many Web3 startups?"
        desc="This week, Pitchbook published their latest Emerging Tech Indicator (ETI) report which tracks early stage investment activity..."
        date="Dec 4"
        read="6 min read"
        tag="Web3"
        newsimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWoWdySTiO4YVHuo1xBnJoqSIrCEYpD6thbfpnix_7din7QWoj-sW3aapwz-tIpfmv4dU&usqp=CAU"
      ></News>
      <News
        name="Chasten Buttigieg"
        heading="What Marriage Means to Me"
        desc="After dropping the kids off, I came home and stopped in the kitchen to take in the aftermath of our chaotic morning together...."
        date="sep 29"
        read="3 min read"
        tag="Parenting"
        newsimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7O69iCqy5d4FLWpIMmpphaNZmbYXEUNsyg&usqp=CAU"
      ></News>
      <News
        name="Nicholas Moryl"
        heading="Leaving San Francisco"
        desc="Letting qo with love."
        date="Nov 23"
        read="8 min read"
        tag="Change"
        newsimg="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"
      ></News>
    </div>
  );
}

export default App;
