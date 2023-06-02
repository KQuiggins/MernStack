import { Helmet } from 'react-helmet-async'

const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}/>
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'Welcome to Xsploit',
    description: 'All your hacking supplies in one place',
    keywords: 'hacking, pentesting, cybersecurity, programming, python, javascript, react, node, express, mongodb, redux'
}

export default Meta