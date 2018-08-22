import Header from '../components/header'
import withMaterialUI from '../shared/MUI/withMUI'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import fetch from 'isomorphic-fetch'

const Index = ({ posts }) => (
  <div>
    <Header />
    {
      posts.map(x => (
        <Card key={x.id}>
          <CardHeader title={x.title} />
          <CardText>
            <RaisedButton label='Click to view post!' />
          </CardText>
        </Card>
      ))
    }
  </div>
)

Index.getInitialProps = async () => {
  const response = await fetch(`${process.env.BLOGGER_URL}?key=${process.env.API_KEY}`)
  const data = await response.json() // .json() is a method on the fetch global
  return {
    posts: data.items
  }
}
export default withMaterialUI(Index)
