import TweetBox from './components/TweetBox'
import TweetList from './components/TweetList'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsList: [] };
  }
  addTweet(tweetToAdd) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({id: Date.now(), name: 'random name', body: tweetToAdd});

    this.setState({ tweetsList: newTweetsList});
  }

  componentDidMount() {
    $.ajax("/tweets")
      .success(data => this.setState({tweetsList: data}))
      .error(error => console.log(error))
  }

  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={this.state.tweetsList} />
      </div>
    )
  }
}


let documentReady = () => {
  let testElement = document.getElementById('react');
  if(testElement) {
    ReactDOM.render(
      <Main />,
      document.getElementById('react')
    );
  }
};

$(documentReady);
