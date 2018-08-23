import Header from '../components/header'
import withMaterialUI from '../shared/MUI/withMUI'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'

const Post = ({ title, content }) => (
  <div>
    <Header />
    <Card>
      <CardHeader title={title} />
      <CardText>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <RaisedButton fullWidth>
          <Link href='/' as='/blog'>
            <a>
                Go Back to Blog!
            </a>
          </Link>
        </RaisedButton>
      </CardText>
    </Card>
  </div>
)

Post.getInitialProps = async ({ query: { id } }) => {
  const response = await fetch(`${process.env.BLOGGER_URL}/${id}?key=${process.env.API_KEY}`)
  const data = await response.json()
  const { title, content } = data
  return {
    title,
    content
  }
}

export default withMaterialUI(Post)
