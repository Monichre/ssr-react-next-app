import Header from '../components/header'
import withMaterialUI from '../shared/MUI/withMUI'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'

const Index = ({ posts }) => (
  <div>
    <style jsx>
      {`
        .post-link {
          text-decoration: none;
          color: #fff;
          font-size: 14px;
        }
      `}
    </style>
    <Header />
    {
      posts.map(x => (
        <Card key={x.id}>
          <CardHeader title={x.title} />
          <CardText>
            <RaisedButton>
              <Link prefetch href={`/post?id=${x.id}`} as={`/blog/${x.id}`}>
                <a className='post-link'>Click to View Post!</a>
              </Link>
            </RaisedButton>
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
