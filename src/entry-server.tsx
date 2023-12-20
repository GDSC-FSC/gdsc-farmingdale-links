import ReactDomServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '@/app/App';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const render = (url: string, _context: any) => {

    const html = ReactDomServer.renderToString(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
    )

    return { html }
}

const _export = {
    render
}

export default _export